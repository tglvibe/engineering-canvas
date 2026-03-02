import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { safeT, formatDuration } from "@/lib/utils";
import {
  Search, Layers, Code2, Wand2, Sparkles, Briefcase, BookOpen, GraduationCap,
  ArrowRight, Clock, Users, ChevronRight, Target, TrendingUp, Filter, LayoutGrid, Lock, AlertCircle
} from "lucide-react";
import AppHeader from "@/components/AppHeader";
import { useAuth } from "@/contexts/AuthContext";
import {
  categories, jobRoles, programs, courses,
  getRolesForCategory, getProgramsForRole, getCoursesForProgram,
  type CategoryId
} from "@/data/hierarchy";
import { useActiveEnrollments } from "@/hooks/useDatabase";

type BrowseMode = "category" | "role" | "program" | "course" | "recommended" | "enrolled"; // added enrolled mode


const categoryIcons: Record<string, typeof Code2> = {
  "high-code": Code2, "low-code": Wand2, "no-code": Sparkles,
};

export default function ExplorePage() {
  const navigate = useNavigate();
  const { t: rawT } = useTranslation();
  const t = (key: string, options?: any) => safeT(rawT, key, options);
  const { user } = useAuth();
  const [browseMode, setBrowseMode] = useState<BrowseMode>("category");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<CategoryId | "all">("all");

  // Enrollment awareness
  const { data: activeEnrollmentData = [] } = useActiveEnrollments();

  const enrolledProgramIds = useMemo(() => new Set(activeEnrollmentData.filter(e => e.type === "program").map(e => e.target_id)), [activeEnrollmentData]);
  const enrolledCourseIds = useMemo(() => new Set(activeEnrollmentData.filter(e => e.type === "course").map(e => e.target_id)), [activeEnrollmentData]);
  const hasAnyEnrollment = activeEnrollmentData.length > 0;

  // whenever enrollments load we make sure the tab switches to the enrolled view if appropriate
  useEffect(() => {
    if (user && hasAnyEnrollment) {
      setBrowseMode("enrolled");
    }
  }, [user, hasAnyEnrollment]);

  const isEnrolledInCourse = (courseId: string) => {
    if (enrolledCourseIds.has(courseId)) return true;
    // Check if enrolled in a program that contains this course
    for (const prog of programs) {
      if (enrolledProgramIds.has(prog.id) && prog.courseIds.includes(courseId)) return true;
    }
    return false;
  };

  const browseModes = [
    ...(user ? [{ id: "recommended" as BrowseMode, labelKey: "explore.recommended", icon: Sparkles }] : []),
    ...(user && hasAnyEnrollment ? [{ id: "enrolled" as BrowseMode, labelKey: "explore.enrolledPrograms", icon: GraduationCap }] : []),
    { id: "category" as BrowseMode, labelKey: "explore.byCategory", icon: Layers },
    { id: "role" as BrowseMode, labelKey: "explore.byRole", icon: Briefcase },
    { id: "program" as BrowseMode, labelKey: "explore.allPrograms", icon: GraduationCap },
    { id: "course" as BrowseMode, labelKey: "explore.allCourses", icon: BookOpen },
  ];


  const filteredPrograms = useMemo(() => {
    let result = [...programs];
    if (categoryFilter !== "all") {
      const catRoles = getRolesForCategory(categoryFilter);
      const roleProgIds = catRoles.flatMap(r => r.programIds);
      result = result.filter(p => roleProgIds.includes(p.id));
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => t(p.titleKey).toLowerCase().includes(q) || t(p.descKey).toLowerCase().includes(q));
    }
    return result;
  }, [categoryFilter, search, t]);

  const filteredCourses = useMemo(() => {
    let result = [...courses];
    if (categoryFilter !== "all") {
      result = result.filter(c => c.category === categoryFilter);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(c => t(c.titleKey).toLowerCase().includes(q) || t(c.descKey).toLowerCase().includes(q));
    }
    return result;
  }, [categoryFilter, search, t]);

  const recommendedRoles = useMemo(() => {
    if (!user) return [];
    return jobRoles.filter(r => {
      if (user.level === "Beginner") return categories.find(c => c.roleIds.includes(r.id))?.id !== "high-code" || r.id === "backend-dev" || r.id === "frontend-dev";
      if (user.goal === "Get a Job") return r.demandLevel === "high";
      return true;
    }).slice(0, 4);
  }, [user]);

  const DifficultyBadge = ({ level }: { level: string }) => (
    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase ${
      level === "beginner" ? "bg-primary/10 text-primary" :
      level === "intermediate" ? "bg-accent/10 text-accent-foreground" :
      "bg-destructive/10 text-destructive"
    }`}>{t(`explore.${level}`)}</span>
  );

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title={t("explore.title")} showBack={false} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* No enrollment banner */}
        {!hasAnyEnrollment && (
          <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-2xl border border-border bg-secondary/30 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">No programs assigned yet</p>
              <p className="text-xs text-muted-foreground mt-0.5">Contact your administrator to get enrolled in programs and courses. You can browse the catalog below.</p>
            </div>
          </motion.div>
        )}

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{t("explore.heading")}</h1>
          <p className="text-muted-foreground mt-1.5 text-sm sm:text-base">{t("explore.subheading")}</p>
        </motion.div>

        {/* Browse Mode Tabs */}
        <div className="mt-6 flex gap-1.5 overflow-x-auto scrollbar-hide pb-1">
          {browseModes.map(m => (
            <button key={m.id} onClick={() => { setBrowseMode(m.id); setSelectedCategory(null); setSelectedRole(null); }}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                browseMode === m.id ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground border border-border hover:border-primary/20"
              }`}>
              <m.icon className="w-3 h-3" /> {t(m.labelKey)}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mt-4 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t("explore.searchPlaceholder")}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all" />
        </div>

        {/* Category Filter (for Programs & Courses modes) */}
        {(browseMode === "program" || browseMode === "course") && (
          <div className="mt-3 flex gap-1.5 overflow-x-auto scrollbar-hide">
            <button onClick={() => setCategoryFilter("all")}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                categoryFilter === "all" ? "bg-primary/10 text-primary border-primary/20" : "text-muted-foreground border-border hover:border-primary/20"
              }`}>{t("tracks.allTracks")}</button>
            {categories.map(c => {
              const Icon = categoryIcons[c.id] || Layers;
              return (
                <button key={c.id} onClick={() => setCategoryFilter(c.id)}
                  className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    categoryFilter === c.id ? "bg-primary/10 text-primary border-primary/20" : "text-muted-foreground border-border hover:border-primary/20"
                  }`}>
                  <Icon className="w-3 h-3" /> {t(c.titleKey)}
                </button>
              );
            })}
          </div>
        )}

        {/* Content Area */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            {/* ====== ENROLLED ====== */}
            {browseMode === "enrolled" && user && (
              <motion.div key="enrolled" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                {hasAnyEnrollment ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {programs.filter(p => enrolledProgramIds.has(p.id)).map(prog => (
                      <button key={prog.id} onClick={() => navigate(`/program/${prog.id}`)}
                        className="text-left p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{prog.icon}</span>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{t(prog.titleKey)}</h4>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{t(prog.descKey)}</p>
                            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {formatDuration(t, prog.durationKey)}</span>
                              <DifficultyBadge level={prog.difficulty} />
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 text-muted-foreground">{t("explore.noEnrollments")} </div>
                )}
              </motion.div>
            )}

            {/* ====== RECOMMENDED ====== */}
            {browseMode === "recommended" && user && (
              <motion.div key="recommended" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="rounded-2xl border border-primary/20 bg-primary/[0.02] p-5 sm:p-6 mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-5 h-5 text-primary" />
                    <h2 className="font-bold text-foreground">{t("explore.personalizedFor")} {user.name?.split(" ")[0]}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground">{t("explore.basedOnProfile")}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-muted-foreground">{user.level}</span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-muted-foreground">{user.goal}</span>
                    {user.preferred_language && <span className="px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary">{user.preferred_language}</span>}
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-muted-foreground" /> {t("explore.recommendedRoles")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {recommendedRoles.map(role => (
                    <button key={role.id} onClick={() => navigate(`/role/${role.id}`)}
                      className="text-left p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{role.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{t(role.titleKey)}</h4>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{t(role.descKey)}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] font-medium text-primary">{t(role.salaryRangeKey)}</span>
                            <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                              role.demandLevel === "high" ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
                            }`}>{t(`explore.${role.demandLevel}Demand`)}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-muted-foreground" /> {t("explore.recommendedPrograms")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {recommendedRoles.flatMap(r => getProgramsForRole(r.id)).filter((p, i, arr) => arr.findIndex(x => x.id === p.id) === i).slice(0, 4).map(prog => (
                    <button key={prog.id} onClick={() => navigate(`/program/${prog.id}`)}
                      className="text-left p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{prog.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{t(prog.titleKey)}</h4>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{t(prog.descKey)}</p>
                          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {formatDuration(t, prog.durationKey)}</span>
                            <DifficultyBadge level={prog.difficulty} />
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ====== BY CATEGORY ====== */}
            {browseMode === "category" && (
              <motion.div key="category" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                {!selectedCategory ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {categories.map(cat => {
                      const Icon = categoryIcons[cat.id] || Layers;
                      const roles = getRolesForCategory(cat.id);
                      return (
                        <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
                          className="text-left p-5 sm:p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group">
                          <span className="text-3xl">{cat.icon}</span>
                          <h3 className="mt-3 font-bold text-foreground group-hover:text-primary transition-colors">{t(cat.titleKey)}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{t(cat.descKey)}</p>
                          <div className="mt-3 flex items-center gap-1 text-xs text-primary font-medium">
                            {roles.length} {t("explore.roles")} <ChevronRight className="w-3 h-3" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ) : !selectedRole ? (
                  <div>
                    <button onClick={() => setSelectedCategory(null)} className="text-xs text-muted-foreground hover:text-foreground mb-4 flex items-center gap-1">
                      ← {t("explore.backToCategories")}
                    </button>
                    <h2 className="text-lg font-bold text-foreground mb-4">{t(categories.find(c => c.id === selectedCategory)!.titleKey)} — {t("explore.roles")}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {getRolesForCategory(selectedCategory).map(role => (
                        <button key={role.id} onClick={() => navigate(`/role/${role.id}`)}
                          className="text-left p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group">
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{role.icon}</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{t(role.titleKey)}</h4>
                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0" />
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">{t(role.descKey)}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-[10px] font-medium text-primary">{t(role.salaryRangeKey)}</span>
                                <span className="text-[10px] text-muted-foreground">{role.programIds.length} {t("explore.programs")}</span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </motion.div>
            )}

            {/* ====== BY ROLE ====== */}
            {browseMode === "role" && (
              <motion.div key="role" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {jobRoles.filter(r => !search || t(r.titleKey).toLowerCase().includes(search.toLowerCase())).map(role => (
                    <button key={role.id} onClick={() => navigate(`/role/${role.id}`)}
                      className="text-left p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{role.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{t(role.titleKey)}</h4>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{t(role.descKey)}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {role.skillsKeys.slice(0, 4).map(s => (
                              <span key={s} className="px-1.5 py-0.5 rounded-md bg-secondary text-[10px] font-medium text-secondary-foreground">{t(s)}</span>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] font-medium text-primary">{t(role.salaryRangeKey)}</span>
                            <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                              role.demandLevel === "high" ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
                            }`}>{t(`explore.${role.demandLevel}Demand`)}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ====== ALL PROGRAMS ====== */}
            {browseMode === "program" && (
              <motion.div key="program" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredPrograms.map(prog => {
                    const enrolled = enrolledProgramIds.has(prog.id);
                    return (
                      <button key={prog.id} onClick={() => navigate(`/program/${prog.id}`)}
                        className={`text-left p-4 rounded-xl border transition-all group ${
                          enrolled ? "border-border bg-card hover:border-primary/30 hover:shadow-md" : "border-border bg-card/50 opacity-60"
                        }`}>
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{prog.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{t(prog.titleKey)}</h4>
                              {!enrolled && <Lock className="w-3.5 h-3.5 text-muted-foreground shrink-0" />}
                              {enrolled && <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-[9px] font-bold text-primary">ENROLLED</span>}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{t(prog.descKey)}</p>
                            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground flex-wrap">
                              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {formatDuration(t, prog.durationKey)}</span>
                              <span>{prog.courseIds.length} {t("explore.courses")}</span>
                              <DifficultyBadge level={prog.difficulty} />
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                  {filteredPrograms.length === 0 && (
                    <div className="col-span-full text-center py-12 text-sm text-muted-foreground">{t("tracks.noResults")}</div>
                  )}
                </div>
              </motion.div>
            )}

            {/* ====== ALL COURSES ====== */}
            {browseMode === "course" && (
              <motion.div key="course" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filteredCourses.map(course => {
                    const enrolled = isEnrolledInCourse(course.id);
                    return (
                      <button key={course.id}
                        onClick={() => enrolled && navigate(`/workspace/${course.trackId}`)}
                        disabled={!enrolled}
                        className={`text-left p-4 rounded-xl border transition-all group ${
                          enrolled ? "border-border bg-card hover:border-primary/30 hover:shadow-md" : "border-border bg-card/50 opacity-60 cursor-not-allowed"
                        }`}>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl">{course.icon}</span>
                          {!enrolled && <Lock className="w-3.5 h-3.5 text-muted-foreground" />}
                          {enrolled && <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-[9px] font-bold text-primary">ENROLLED</span>}
                        </div>
                        <h4 className="mt-2 font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{t(course.titleKey)}</h4>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{t(course.descKey)}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {formatDuration(t, course.durationKey)}</span>
                          <span>{course.moduleCount} {t("tracks.modules")}</span>
                        </div>
                      </button>
                    );
                  })}
                  {filteredCourses.length === 0 && (
                    <div className="col-span-full text-center py-12 text-sm text-muted-foreground">{t("tracks.noResults")}</div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
