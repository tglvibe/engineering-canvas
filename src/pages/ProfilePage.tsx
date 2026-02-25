import { useState } from "react";
import { motion } from "framer-motion";
import { User, Github, Linkedin, Globe, GraduationCap, Award, Briefcase, Code2, Save, CheckCircle, BarChart3, BookOpen, MapPin, Phone, Calendar, Languages, Star, FolderGit2, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth, SkillRating, Certification, Internship, Project } from "@/contexts/AuthContext";
import AppHeader from "@/components/AppHeader";

export default function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "skills" | "experience" | "academic">("overview");

  const [form, setForm] = useState({ ...user });

  if (!user) { navigate("/login"); return null; }

  const handleSave = () => {
    if (form) updateProfile(form);
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateField = (field: string, value: any) => setForm((prev: any) => ({ ...prev, [field]: value }));

  const updateSkillRating = (idx: number, field: "conceptual" | "handson", value: number) => {
    const skills = [...(form?.skills || [])];
    skills[idx] = { ...skills[idx], [field]: value };
    updateField("skills", skills);
  };

  const inputClass = "w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all";

  const Field = ({ label, value, field, icon: Icon, placeholder }: { label: string; value: string; field: string; icon: any; placeholder: string }) => (
    <div>
      <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5"><Icon className="w-3 h-3" /> {label}</label>
      {editing ? (
        <input value={value || ""} onChange={e => updateField(field, e.target.value)} className={inputClass} placeholder={placeholder} />
      ) : (
        <p className="text-sm text-foreground py-2.5 px-3 rounded-lg bg-secondary/50">{value || <span className="text-muted-foreground italic">{t("profile.notSet")}</span>}</p>
      )}
    </div>
  );

  const RatingBar = ({ value, label }: { value: number; label: string }) => (
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-muted-foreground w-16 shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${value * 10}%` }} />
      </div>
      <span className="text-[10px] font-mono text-muted-foreground w-5 text-right">{value}</span>
    </div>
  );

  const tabs = [
    { id: "overview" as const, label: t("profile.overview"), icon: User },
    { id: "skills" as const, label: t("profile.skills"), icon: Code2 },
    { id: "experience" as const, label: t("profile.experience"), icon: Briefcase },
    { id: "academic" as const, label: t("profile.academic"), icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title={t("profile.title")} backTo="/tracks" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-20">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground text-xl sm:text-2xl font-bold shrink-0">
              {user.avatar}
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl font-bold text-foreground truncate">{user.name}</h1>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary">{user.level || "—"}</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-muted-foreground">{user.goal || "—"}</span>
                {user.city && <span className="text-[10px] text-muted-foreground flex items-center gap-0.5"><MapPin className="w-3 h-3" /> {user.city}</span>}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
            <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 p-3 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-sm text-foreground">
              <BarChart3 className="w-4 h-4 text-primary" /> {t("profile.myDashboard")}
            </button>
            <button onClick={() => navigate("/tracks")} className="flex items-center gap-2 p-3 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-sm text-foreground">
              <BookOpen className="w-4 h-4 text-primary" /> {t("profile.myTracks")}
            </button>
          </div>

          {/* Edit toggle */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all shrink-0 ${
                    activeTab === tab.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}>
                  <tab.icon className="w-3 h-3" /> {tab.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {saved && <span className="text-xs text-primary flex items-center gap-1"><CheckCircle className="w-3 h-3" /> {t("profile.saved")}</span>}
              {editing ? (
                <button onClick={handleSave} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-brand text-primary-foreground text-xs font-medium">
                  <Save className="w-3 h-3" /> {t("profile.save")}
                </button>
              ) : (
                <button onClick={() => setEditing(true)} className="px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-foreground hover:bg-secondary transition-colors">{t("profile.edit")}</button>
              )}
            </div>
          </div>

          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-4 space-y-3">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t("profile.personalSection")}</h3>
                <Field label={t("auth.fullName")} value={form?.name || ""} field="name" icon={User} placeholder="Your name" />
                <div className="grid grid-cols-2 gap-3">
                  <Field label={t("onboarding.phone")} value={form?.phone || ""} field="phone" icon={Phone} placeholder="+91..." />
                  <Field label={t("onboarding.dateOfBirth")} value={form?.dateOfBirth || ""} field="dateOfBirth" icon={Calendar} placeholder="1999-06-15" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <Field label={t("onboarding.city")} value={form?.city || ""} field="city" icon={MapPin} placeholder="City" />
                  <Field label={t("onboarding.state")} value={form?.state || ""} field="state" icon={MapPin} placeholder="State" />
                  <Field label={t("onboarding.country")} value={form?.country || ""} field="country" icon={MapPin} placeholder="Country" />
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 space-y-3">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t("profile.socialLinks")}</h3>
                <Field label={t("onboarding.linkedin")} value={form?.linkedin || ""} field="linkedin" icon={Linkedin} placeholder="linkedin.com/in/you" />
                <Field label={t("onboarding.github")} value={form?.github || ""} field="github" icon={Github} placeholder="github.com/you" />
                <Field label={t("profile.portfolio")} value={form?.portfolio || ""} field="portfolio" icon={Globe} placeholder="yoursite.com" />
              </div>
              <div className="rounded-xl border border-border bg-card p-4 space-y-3">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t("profile.languagesPrefs")}</h3>
                <Field label={t("onboarding.nativeLanguage")} value={form?.nativeLanguage || ""} field="nativeLanguage" icon={Languages} placeholder="Hindi" />
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5"><Languages className="w-3 h-3" /> {t("profile.knownLanguages")}</label>
                  <p className="text-sm text-foreground py-2.5 px-3 rounded-lg bg-secondary/50">{form?.knownLanguages?.join(", ") || <span className="text-muted-foreground italic">{t("profile.notSet")}</span>}</p>
                </div>
                <Field label={t("profile.preferredProgramming")} value={form?.preferredLanguage || ""} field="preferredLanguage" icon={Code2} placeholder="TypeScript" />
                <Field label={t("profile.preferredStack")} value={form?.preferredStack || ""} field="preferredStack" icon={Code2} placeholder="Node.js + PostgreSQL" />
              </div>
            </div>
          )}

          {/* SKILLS TAB */}
          {activeTab === "skills" && (
            <div className="space-y-3">
              {(!form?.skills || form.skills.length === 0) ? (
                <div className="text-center py-12 text-sm text-muted-foreground">{t("profile.noSkills")}</div>
              ) : (
                form.skills.map((skill: SkillRating, idx: number) => (
                  <div key={idx} className="rounded-xl border border-border bg-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                      <span className="text-[10px] text-muted-foreground">{t("profile.avg")}: {((skill.conceptual + skill.handson) / 2).toFixed(1)}/10</span>
                    </div>
                    {editing ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-muted-foreground w-16">{t("onboarding.conceptual")}</span>
                          <input type="range" min={1} max={10} value={skill.conceptual} onChange={e => updateSkillRating(idx, "conceptual", Number(e.target.value))} className="flex-1 accent-primary" />
                          <span className="text-xs font-mono text-foreground w-5">{skill.conceptual}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-muted-foreground w-16">{t("onboarding.handsOn")}</span>
                          <input type="range" min={1} max={10} value={skill.handson} onChange={e => updateSkillRating(idx, "handson", Number(e.target.value))} className="flex-1 accent-primary" />
                          <span className="text-xs font-mono text-foreground w-5">{skill.handson}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        <RatingBar value={skill.conceptual} label={t("onboarding.conceptual")} />
                        <RatingBar value={skill.handson} label={t("onboarding.handsOn")} />
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === "experience" && (
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-4 space-y-3">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5"><Building className="w-3.5 h-3.5" /> {t("profile.professional")}</h3>
                <div className="grid grid-cols-3 gap-3">
                  <Field label={t("onboarding.currentRole")} value={form?.currentRole || ""} field="currentRole" icon={Briefcase} placeholder="Student" />
                  <Field label={t("onboarding.yearsExp")} value={form?.yearsOfExperience || ""} field="yearsOfExperience" icon={Calendar} placeholder="0" />
                  <Field label={t("onboarding.company")} value={form?.company || ""} field="company" icon={Building} placeholder="—" />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mb-3"><Award className="w-3.5 h-3.5" /> {t("onboarding.certifications")}</h3>
                {(!form?.certifications || form.certifications.length === 0) ? (
                  <p className="text-xs text-muted-foreground italic">{t("profile.noCertifications")}</p>
                ) : (
                  <div className="space-y-2">
                    {form.certifications.map((c: Certification, i: number) => (
                      <div key={i} className="px-3 py-2.5 rounded-lg bg-secondary/50">
                        <p className="text-sm font-medium text-foreground">{c.name}</p>
                        <p className="text-[10px] text-muted-foreground">{c.issuer} · {c.year} · {c.techStack}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mb-3"><Briefcase className="w-3.5 h-3.5" /> {t("onboarding.internships")}</h3>
                {(!form?.internships || form.internships.length === 0) ? (
                  <p className="text-xs text-muted-foreground italic">{t("profile.noInternships")}</p>
                ) : (
                  <div className="space-y-2">
                    {form.internships.map((intern: Internship, i: number) => (
                      <div key={i} className="px-3 py-2.5 rounded-lg bg-secondary/50">
                        <p className="text-sm font-medium text-foreground">{intern.role} @ {intern.company}</p>
                        <p className="text-[10px] text-muted-foreground">{intern.duration} · {intern.techStack}</p>
                        {intern.description && <p className="text-xs text-muted-foreground mt-1">{intern.description}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mb-3"><FolderGit2 className="w-3.5 h-3.5" /> {t("onboarding.projects")}</h3>
                {(!form?.projects || form.projects.length === 0) ? (
                  <p className="text-xs text-muted-foreground italic">{t("profile.noProjects")}</p>
                ) : (
                  <div className="space-y-2">
                    {form.projects.map((p: Project, i: number) => (
                      <div key={i} className="px-3 py-2.5 rounded-lg bg-secondary/50">
                        <p className="text-sm font-medium text-foreground">{p.title}</p>
                        <p className="text-[10px] text-muted-foreground">{p.techStack}</p>
                        {p.url && <p className="text-[10px] text-primary">{p.url}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ACADEMIC TAB */}
          {activeTab === "academic" && (
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-4 space-y-3">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5" /> {t("profile.education")}</h3>
                <Field label={t("onboarding.college")} value={form?.college || ""} field="college" icon={GraduationCap} placeholder="Your college" />
                <div className="grid grid-cols-2 gap-3">
                  <Field label={t("onboarding.degree")} value={form?.degree || ""} field="degree" icon={Award} placeholder="B.Tech" />
                  <Field label={t("onboarding.branch")} value={form?.branch || ""} field="branch" icon={Code2} placeholder="Computer Science" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <Field label={t("onboarding.cgpa")} value={form?.cgpa || ""} field="cgpa" icon={Star} placeholder="8.5" />
                  <Field label={t("onboarding.graduationYear")} value={form?.graduationYear || ""} field="graduationYear" icon={Calendar} placeholder="2024" />
                  <Field label={t("onboarding.tenthPercent")} value={form?.tenthPercent || ""} field="tenthPercent" icon={Award} placeholder="95" />
                </div>
                <Field label={t("onboarding.twelfthPercent")} value={form?.twelfthPercent || ""} field="twelfthPercent" icon={Award} placeholder="92" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
