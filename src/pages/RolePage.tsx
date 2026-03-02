import { useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { formatDuration, safeT } from "@/lib/utils";
import {
  ArrowRight, Clock, Target, TrendingUp, BookOpen, Briefcase,
  Award, ChevronRight, MapPin, GraduationCap
} from "lucide-react";
import AppHeader from "@/components/AppHeader";
import {
  getRoleById, getProgramsForRole, getCoursesForProgram,
  getCategoryForRole, jobRoles
} from "@/data/hierarchy";

export default function RolePage() {
  const { roleId } = useParams();
  const navigate = useNavigate();
  const { t: rawT } = useTranslation();
  const t = (key: string, options?: any) => safeT(rawT, key, options);

  const role = useMemo(() => getRoleById(roleId || ""), [roleId]);
  const rolePrograms = useMemo(() => role ? getProgramsForRole(role.id) : [], [role]);
  const category = useMemo(() => role ? getCategoryForRole(role.id) : null, [role]);
  const allCourses = useMemo(() => {
    const seen = new Set<string>();
    return rolePrograms.flatMap(p => getCoursesForProgram(p.id)).filter(c => {
      if (seen.has(c.id)) return false;
      seen.add(c.id);
      return true;
    });
  }, [rolePrograms]);

  if (!role) {
    return (
      <div className="min-h-screen bg-background">
        <AppHeader title={t("explore.title")} backTo="/explore" />
        <div className="flex items-center justify-center h-64 text-muted-foreground">{t("tracks.noResults")}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title={t(role.titleKey)} backTo="/explore" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {/* Role Hero */}
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.02] p-5 sm:p-8 mb-6 sm:mb-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl sm:text-5xl">{role.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {category && <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{t(category.titleKey)}</span>}
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t(role.titleKey)}</h1>
                <p className="text-sm sm:text-base text-muted-foreground mt-2">{t(role.descKey)}</p>
                <div className="flex items-center gap-4 mt-4 flex-wrap">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
                    <TrendingUp className="w-4 h-4" /> {t(role.salaryRangeKey)}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    role.demandLevel === "high" ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
                  }`}>{t(`explore.${role.demandLevel}Demand`)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Required Skills */}
          <div className="rounded-xl border border-border bg-card p-5 mb-5">
            <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" /> {t("explore.requiredSkills")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {role.skillsKeys.map(s => (
                <span key={s} className="px-2.5 py-1 rounded-lg bg-primary/5 text-xs font-medium text-primary border border-primary/10">{t(s)}</span>
              ))}
            </div>
          </div>

          {/* Career Roadmap */}
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2 mt-8">
            <MapPin className="w-5 h-5 text-primary" /> {t("explore.careerRoadmap")}
          </h2>
          <div className="space-y-4">
            {rolePrograms.map((prog, i) => {
              const progCourses = getCoursesForProgram(prog.id);
              return (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                >
                  {/* Program Header */}
                  <button onClick={() => navigate(`/program/${prog.id}`)}
                    className="w-full text-left p-4 sm:p-5 flex items-start gap-3 hover:bg-secondary/30 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center text-xl shrink-0">
                      {prog.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{t("explore.program")} {i + 1}</span>
                          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{t(prog.titleKey)}</h3>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary shrink-0" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{t(prog.descKey)}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {formatDuration(t, prog.durationKey)}</span>
                        <span>{progCourses.length} {t("explore.courses")}</span>
                      </div>
                    </div>
                  </button>

                  {/* Courses Preview */}
                  <div className="border-t border-border px-4 sm:px-5 py-3 bg-secondary/20">
                    <div className="space-y-2">
                      {progCourses.map(course => (
                        <button key={course.id} onClick={() => navigate(`/workspace/${course.trackId}`)}
                          className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-card transition-colors text-left group/c">
                          <span className="text-base">{course.icon}</span>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-medium text-foreground group-hover/c:text-primary transition-colors">{t(course.titleKey)}</span>
                            <span className="text-[10px] text-muted-foreground ml-2">{formatDuration(t, course.durationKey)}</span>
                          </div>
                          <ArrowRight className="w-3 h-3 text-muted-foreground group-hover/c:text-primary shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <button onClick={() => navigate(`/program/${rolePrograms[0]?.id}`)}
              className="inline-flex items-center gap-2.5 bg-gradient-brand text-primary-foreground font-bold px-8 py-3.5 rounded-2xl shadow-brand hover:opacity-90 transition-all">
              {t("explore.startCareerPath")} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
