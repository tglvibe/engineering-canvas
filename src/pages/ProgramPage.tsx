import { useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Clock, Target, ArrowRight, BookOpen, CheckCircle, GraduationCap,
  Briefcase, ChevronRight, Award, Layers, Lock
} from "lucide-react";
import AppHeader from "@/components/AppHeader";
import { getProgramById, getCoursesForProgram, getRoleById, getCategoryForRole, programs } from "@/data/hierarchy";
import { useAuth } from "@/contexts/AuthContext";
import { getActiveEnrollments, refreshEnrollmentStatuses } from "@/data/store";

export default function ProgramPage() {
  const { programId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useAuth();

  const program = useMemo(() => getProgramById(programId || ""), [programId]);
  const programCourses = useMemo(() => program ? getCoursesForProgram(program.id) : [], [program]);
  const targetRole = useMemo(() => program ? getRoleById(program.targetRoleKey.replace("roles.", "").replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "")) : null, [program]);

  // Check enrollment
  const isEnrolled = useMemo(() => {
    if (!user?.id || !programId) return false;
    refreshEnrollmentStatuses();
    const enrollments = getActiveEnrollments(user.id);
    // Direct program enrollment
    if (enrollments.some(e => e.type === "program" && e.targetId === programId)) return true;
    // Check if enrolled in any course within this program
    if (program) {
      for (const cid of program.courseIds) {
        if (enrollments.some(e => e.type === "course" && e.targetId === cid)) return true;
      }
    }
    return false;
  }, [user?.id, programId, program]);

  if (!program) {
    return (
      <div className="min-h-screen bg-background">
        <AppHeader title={t("explore.title")} backTo="/explore" />
        <div className="flex items-center justify-center h-64 text-muted-foreground">{t("tracks.noResults")}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title={t(program.titleKey)} backTo="/explore" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {/* Program Header */}
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.02] p-5 sm:p-8 mb-6 sm:mb-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl sm:text-5xl">{program.icon}</span>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t(program.titleKey)}</h1>
                <p className="text-sm sm:text-base text-muted-foreground mt-2">{t(program.descKey)}</p>

                <div className="flex items-center gap-4 mt-4 flex-wrap">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" /> {t(program.durationKey)}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4" /> {programCourses.length} {t("explore.courses")}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    program.difficulty === "beginner" ? "bg-primary/10 text-primary" :
                    program.difficulty === "intermediate" ? "bg-accent/10 text-accent-foreground" :
                    "bg-destructive/10 text-destructive"
                  }`}>{t(`explore.${program.difficulty}`)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Program Objective */}
          <div className="rounded-xl border border-border bg-card p-5 mb-5">
            <h2 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" /> {t("explore.programObjective")}
            </h2>
            <p className="text-sm text-muted-foreground">{t(program.objectiveKey)}</p>
          </div>

          {/* Skills Gained */}
          <div className="rounded-xl border border-border bg-card p-5 mb-5">
            <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" /> {t("explore.skillsGained")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {program.skillsGainedKeys.map(s => (
                <span key={s} className="px-2.5 py-1 rounded-lg bg-primary/5 text-xs font-medium text-primary border border-primary/10">{t(s)}</span>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          {program.prerequisitesKeys.length > 0 && (
            <div className="rounded-xl border border-border bg-card p-5 mb-5">
              <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-muted-foreground" /> {t("explore.prerequisites")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {program.prerequisitesKeys.map(pid => {
                  const prereq = programs.find(p => p.courseIds.includes(pid));
                  return (
                    <span key={pid} className="px-2.5 py-1 rounded-lg bg-secondary text-xs font-medium text-muted-foreground">{pid}</span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Courses in this Program */}
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2 mt-8">
            <BookOpen className="w-5 h-5 text-muted-foreground" /> {t("explore.coursesIncluded")}
          </h2>
          <div className="space-y-3">
            {programCourses.map((course, i) => (
              <motion.button
                key={course.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => isEnrolled && navigate(`/workspace/${course.trackId}`)}
                disabled={!isEnrolled}
                className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all group ${
                  isEnrolled ? "border-border bg-card hover:border-primary/30 hover:shadow-md" : "border-border bg-card/50 opacity-60 cursor-not-allowed"
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center text-lg sm:text-xl shrink-0">{course.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">{t(course.titleKey)}</h3>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{t(course.descKey)}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {t(course.durationKey)}</span>
                      <span>{course.moduleCount} {t("tracks.modules")}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {course.languagesKeys.map(l => (
                        <span key={l} className="px-1.5 py-0.5 rounded-md bg-secondary text-[10px] font-medium text-secondary-foreground">{t(l)}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            {isEnrolled ? (
              <>
                <button onClick={() => navigate(`/workspace/${programCourses[0]?.trackId || "backend"}`)}
                  className="inline-flex items-center gap-2.5 bg-gradient-brand text-primary-foreground font-bold px-8 py-3.5 rounded-2xl shadow-brand hover:opacity-90 transition-all">
                  {t("explore.enrollInProgram")} <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-muted-foreground mt-2">{t("explore.orEnrollIndividual")}</p>
              </>
            ) : (
              <div className="p-4 rounded-2xl border border-border bg-secondary/30">
                <Lock className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">Not Enrolled</p>
                <p className="text-xs text-muted-foreground mt-1">Contact your administrator to get enrolled in this program.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
