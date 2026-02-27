import { useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Clock, Target, ArrowRight, BookOpen, CheckCircle, GraduationCap,
  Briefcase, ChevronRight, Award, Layers
} from "lucide-react";
import AppHeader from "@/components/AppHeader";
import { getProgramById, getCoursesForProgram, getRoleById, getCategoryForRole, programs } from "@/data/hierarchy";

export default function ProgramPage() {
  const { programId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const program = useMemo(() => getProgramById(programId || ""), [programId]);
  const programCourses = useMemo(() => program ? getCoursesForProgram(program.id) : [], [program]);
  const targetRole = useMemo(() => program ? getRoleById(program.targetRoleKey.replace("roles.", "").replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "")) : null, [program]);

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
                    <Clock className="w-4 h-4" /> {program.duration}
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
              {program.skillsGained.map(s => (
                <span key={s} className="px-2.5 py-1 rounded-lg bg-primary/5 text-xs font-medium text-primary border border-primary/10">{s}</span>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          {program.prerequisites.length > 0 && (
            <div className="rounded-xl border border-border bg-card p-5 mb-5">
              <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-muted-foreground" /> {t("explore.prerequisites")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {program.prerequisites.map(pid => {
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
                onClick={() => navigate(`/workspace/${course.trackId}`)}
                className="w-full text-left p-4 sm:p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group"
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
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                      <span>{course.moduleCount} {t("tracks.modules")}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {course.languages.map(l => (
                        <span key={l} className="px-1.5 py-0.5 rounded-md bg-secondary text-[10px] font-medium text-secondary-foreground">{l}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Enroll CTA */}
          <div className="mt-8 text-center">
            <button onClick={() => navigate(`/workspace/${programCourses[0]?.trackId || "backend"}`)}
              className="inline-flex items-center gap-2.5 bg-gradient-brand text-primary-foreground font-bold px-8 py-3.5 rounded-2xl shadow-brand hover:opacity-90 transition-all">
              {t("explore.enrollInProgram")} <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-muted-foreground mt-2">{t("explore.orEnrollIndividual")}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
