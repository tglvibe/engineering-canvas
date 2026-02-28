import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Eye, EyeOff, AlertCircle, Info, Upload, Check, Star, Shield } from "lucide-react";
import { useNavigate, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth, SkillRating, Certification, Internship, Project } from "@/contexts/AuthContext";
import logo from "@/assets/tgl-logo.png";
import LanguageSelector from "@/components/LanguageSelector";

const goals = ["Get a Job", "Land an Internship", "Upskill", "Switch Domain", "Build a Startup"];
const goalKeys = ["goals.getJob", "goals.internship", "goals.upskill", "goals.switchDomain", "goals.startup"];
const levels = ["Beginner", "Intermediate", "Advanced"];
const levelKeys = ["levels.beginner", "levels.intermediate", "levels.advanced"];
const languages = ["JavaScript", "TypeScript", "Python", "Java", "Go", "C#", "Rust", "C++"];
const stacks = ["Node.js + PostgreSQL", "Django + PostgreSQL", "Spring Boot + MySQL", "Go + MongoDB", "FastAPI + PostgreSQL", ".NET + SQL Server", "MERN Stack", "MEAN Stack"];
const genders = ["Male", "Female", "Non-binary", "Prefer not to say"];
const genderKeys = ["common.male", "common.female", "common.nonBinary", "common.preferNotToSay"];
const spokenLanguages = ["English", "Hindi", "Tamil", "Telugu", "Kannada", "Malayalam", "Bengali", "Marathi", "Gujarati", "Punjabi", "Urdu", "Spanish", "French", "German", "Mandarin", "Japanese", "Arabic"];
const popularSkills = ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust", "C++", "C#", "React", "Angular", "Vue", "Node.js", "Django", "Spring Boot", "FastAPI", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "GCP", "Azure", "GraphQL", "REST", "Git", "Linux", "Kafka", "RabbitMQ"];

const DEMO_EMAIL = "demo@talenciaglobal.com";
const DEMO_PASSWORD = "demo1234";

type Step = "auth" | "basic" | "academic" | "skills" | "experience" | "preferences" | "review";
const STEPS: Step[] = ["auth", "basic", "academic", "skills", "experience", "preferences", "review"];

export default function LoginPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { login, signup, isAuthenticated, isAdmin } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<Step>("auth");
  const [error, setError] = useState("");

  // Auth fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Basic details
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [nativeLang, setNativeLang] = useState("");
  const [knownLangs, setKnownLangs] = useState<string[]>([]);
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  // Academic
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [tenthPct, setTenthPct] = useState("");
  const [twelfthPct, setTwelfthPct] = useState("");

  // Skills
  const [skills, setSkills] = useState<SkillRating[]>([]);
  const [newSkill, setNewSkill] = useState("");

  // Experience
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [internships, setInternships] = useState<Internship[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentRole, setCurrentRole] = useState("");
  const [yearsExp, setYearsExp] = useState("");
  const [company, setCompany] = useState("");

  // Preferences
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedLang, setSelectedLang] = useState("");
  const [selectedStack, setSelectedStack] = useState("");

  // Redirect authenticated users via useEffect to avoid calling navigate during render
  const [shouldRedirect, setShouldRedirect] = useState(false);
  
  useState(() => {
    if (isAuthenticated) setShouldRedirect(true);
  });

  if (shouldRedirect || isAuthenticated) {
    return <Navigate to={isAdmin ? "/admin" : "/explore"} replace />;
  }

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password.trim()) { setError(t("auth.enterBoth")); return; }
    if (isSignup) {
      if (!name.trim()) { setError(t("auth.enterName")); return; }
      setStep("basic");
    } else {
      const success = login(email, password);
      if (!success) { setError(t("auth.invalidCredentials")); return; }
      // Check if admin after login — need to read from localStorage since state hasn't updated yet
      const currentUser = localStorage.getItem("tgl_current_user");
      const parsed = currentUser ? JSON.parse(currentUser) : null;
      navigate(parsed?.role === "admin" ? "/admin" : "/explore");
    }
  };

  const fillDemo = () => { setEmail(DEMO_EMAIL); setPassword(DEMO_PASSWORD); setError(""); };

  const addSkill = (skillName: string) => {
    if (skillName.trim() && !skills.find(s => s.name === skillName)) {
      setSkills(prev => [...prev, { name: skillName, conceptual: 5, handson: 5 }]);
      setNewSkill("");
    }
  };

  const updateSkillRating = (idx: number, field: "conceptual" | "handson", value: number) => {
    setSkills(prev => prev.map((s, i) => i === idx ? { ...s, [field]: value } : s));
  };

  const removeSkill = (idx: number) => setSkills(prev => prev.filter((_, i) => i !== idx));

  const addCertification = () => setCertifications(prev => [...prev, { name: "", issuer: "", year: "", techStack: "" }]);
  const updateCert = (idx: number, field: keyof Certification, value: string) => setCertifications(prev => prev.map((c, i) => i === idx ? { ...c, [field]: value } : c));
  const removeCert = (idx: number) => setCertifications(prev => prev.filter((_, i) => i !== idx));

  const addInternship = () => setInternships(prev => [...prev, { company: "", role: "", duration: "", techStack: "", description: "" }]);
  const updateInternship = (idx: number, field: keyof Internship, value: string) => setInternships(prev => prev.map((c, i) => i === idx ? { ...c, [field]: value } : c));
  const removeInternship = (idx: number) => setInternships(prev => prev.filter((_, i) => i !== idx));

  const addProject = () => setProjects(prev => [...prev, { title: "", description: "", techStack: "", url: "" }]);
  const updateProject = (idx: number, field: keyof Project, value: string) => setProjects(prev => prev.map((c, i) => i === idx ? { ...c, [field]: value } : c));
  const removeProject = (idx: number) => setProjects(prev => prev.filter((_, i) => i !== idx));

  const handleComplete = () => {
    signup({
      name, email, phone, dateOfBirth: dob, gender, city, state, country,
      nativeLanguage: nativeLang, knownLanguages: knownLangs,
      linkedin, github,
      college, degree, branch, cgpa, graduationYear: gradYear, tenthPercent: tenthPct, twelfthPercent: twelfthPct,
      skills, certifications, internships, projects,
      currentRole, yearsOfExperience: yearsExp, company,
      level: selectedLevel, goal: selectedGoal,
      preferredLanguage: selectedLang, preferredStack: selectedStack,
    });
    navigate("/explore");
  };

  const goNext = () => {
    const idx = STEPS.indexOf(step);
    if (idx < STEPS.length - 1) setStep(STEPS[idx + 1]);
  };
  const goBack = () => {
    const idx = STEPS.indexOf(step);
    if (idx > 0) setStep(STEPS[idx - 1]);
  };

  const stepIdx = STEPS.indexOf(step);
  const totalSteps = STEPS.length;
  const inputClass = "w-full px-3.5 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all";

  const StepIndicator = () => (
    step !== "auth" ? (
      <div className="flex items-center gap-1.5 mb-6">
        {STEPS.slice(1).map((s, i) => (
          <div key={s} className={`h-1.5 flex-1 rounded-full transition-all ${STEPS.indexOf(s) <= stepIdx ? "bg-primary" : "bg-border"}`} />
        ))}
      </div>
    ) : null
  );

  const NavButtons = ({ canProceed = true, nextLabel, onNext }: { canProceed?: boolean; nextLabel?: string; onNext?: () => void }) => (
    <div className="flex gap-2 mt-5">
      <button type="button" onClick={goBack} className="flex-1 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-1.5">
        <ArrowLeft className="w-3.5 h-3.5" /> {t("onboarding.back")}
      </button>
      <button type="button" onClick={onNext || goNext} disabled={!canProceed}
        className="flex-1 bg-gradient-brand text-primary-foreground font-semibold py-3 rounded-xl shadow-brand hover:opacity-90 transition-all disabled:opacity-40 flex items-center justify-center gap-1.5">
        {nextLabel || t("onboarding.next")} <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );

  const toggleKnownLang = (lang: string) => setKnownLangs(prev => prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]);

  const RatingDots = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(v => (
        <button key={v} type="button" onClick={() => onChange(v)}
          className={`w-5 h-5 rounded-full text-[9px] font-bold border transition-all ${v <= value ? "bg-primary border-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/40"}`}>
          {v}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center px-4 sm:px-6 py-8">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
        className={`w-full ${step === "auth" ? "max-w-sm" : "max-w-lg"}`}>
        <div className="text-center mb-5">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logo} alt="Talencia Global" className="h-7 sm:h-8" />
            <LanguageSelector compact />
          </div>
          {step === "auth" && <h1 className="text-xl sm:text-2xl font-bold text-foreground">{isSignup ? t("auth.createAccount") : t("auth.welcomeBack")}</h1>}
          {step === "basic" && <h1 className="text-xl sm:text-2xl font-bold text-foreground">{t("onboarding.personalDetails")}</h1>}
          {step === "academic" && <h1 className="text-xl sm:text-2xl font-bold text-foreground">{t("onboarding.academicBackground")}</h1>}
          {step === "skills" && <h1 className="text-xl sm:text-2xl font-bold text-foreground">{t("onboarding.skillsAssessment")}</h1>}
          {step === "experience" && <h1 className="text-xl sm:text-2xl font-bold text-foreground">{t("onboarding.experienceProjects")}</h1>}
          {step === "preferences" && <h1 className="text-xl sm:text-2xl font-bold text-foreground">{t("onboarding.learningPreferences")}</h1>}
          {step === "review" && <h1 className="text-xl sm:text-2xl font-bold text-foreground">{t("onboarding.reviewStart")}</h1>}
          {step !== "auth" && <p className="text-xs text-muted-foreground mt-1">{t("onboarding.stepOf", { current: stepIdx, total: totalSteps - 1 })}</p>}
        </div>

        <StepIndicator />

        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>

            {/* AUTH STEP */}
            {step === "auth" && (
              <form onSubmit={handleAuth} className="space-y-3.5">
                {!isSignup && (
                  <motion.button type="button" onClick={fillDemo} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                    className="w-full flex items-start gap-2.5 p-3 rounded-xl border border-primary/20 bg-primary/[0.04] text-left hover:border-primary/40 transition-all">
                    <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-foreground">{t("auth.demoCredentials")} <span className="text-primary">{t("auth.tapToFill")}</span></p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 font-mono">{DEMO_EMAIL}</p>
                      <p className="text-[11px] text-muted-foreground font-mono">{DEMO_PASSWORD}</p>
                    </div>
                  </motion.button>
                )}
                {!isSignup && (
                  <motion.button type="button" onClick={() => { setEmail("admin@talenciaglobal.com"); setPassword("admin1234"); setError(""); }}
                    initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="w-full flex items-start gap-2.5 p-3 rounded-xl border border-border bg-secondary/30 text-left hover:border-primary/30 transition-all">
                    <Shield className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-foreground">Admin Console <span className="text-muted-foreground font-normal">— Tap to fill</span></p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 font-mono">admin@talenciaglobal.com</p>
                    </div>
                  </motion.button>
                )}
                {error && (
                  <div className="flex items-start gap-2 p-3 rounded-xl border border-destructive/20 bg-destructive/5">
                    <AlertCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                    <p className="text-xs text-destructive">{error}</p>
                  </div>
                )}
                {isSignup && (
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{t("auth.fullName")} *</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className={inputClass} placeholder={t("auth.fullName")} />
                  </div>
                )}
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("auth.email")} *</label>
                  <input type="email" value={email} onChange={e => { setEmail(e.target.value); setError(""); }} className={inputClass} placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("auth.password")} *</label>
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} value={password} onChange={e => { setPassword(e.target.value); setError(""); }} className={`${inputClass} pr-10`} placeholder="••••••••" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                {isSignup && (
                  <div className="p-3 rounded-xl border border-primary/15 bg-primary/[0.03]">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Upload className="w-4 h-4 text-primary shrink-0" />
                      <span><strong className="text-foreground">{t("auth.uploadResume")}</strong> {t("auth.uploadResumeDesc")}</span>
                    </div>
                  </div>
                )}
                <button type="submit" className="w-full bg-gradient-brand text-primary-foreground font-semibold py-3 rounded-xl shadow-brand hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  {isSignup ? t("auth.continue") : t("auth.signInBtn")} <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-sm text-muted-foreground">
                  {isSignup ? t("auth.alreadyHaveAccount") : t("auth.dontHaveAccount")}{" "}
                  <button type="button" onClick={() => { setIsSignup(!isSignup); setError(""); }} className="text-primary font-medium hover:underline">{isSignup ? t("auth.signInLink") : t("auth.signUp")}</button>
                </p>
              </form>
            )}

            {/* BASIC DETAILS */}
            {step === "basic" && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.phone")}</label>
                    <input value={phone} onChange={e => setPhone(e.target.value)} className={inputClass} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.dateOfBirth")}</label>
                    <input type="date" value={dob} onChange={e => setDob(e.target.value)} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{t("onboarding.gender")}</label>
                  <div className="flex flex-wrap gap-1.5">
                    {genders.map((g, gi) => (
                      <button key={g} type="button" onClick={() => setGender(g)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${gender === g ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>{t(genderKeys[gi])}</button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.city")}</label>
                    <input value={city} onChange={e => setCity(e.target.value)} className={inputClass} placeholder="New Delhi" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.state")}</label>
                    <input value={state} onChange={e => setState(e.target.value)} className={inputClass} placeholder="Delhi" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.country")}</label>
                    <input value={country} onChange={e => setCountry(e.target.value)} className={inputClass} placeholder="India" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.nativeLanguage")}</label>
                  <select value={nativeLang} onChange={e => setNativeLang(e.target.value)} className={inputClass}>
                    <option value="">{t("onboarding.select")}</option>
                    {spokenLanguages.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{t("onboarding.languagesYouKnow")}</label>
                  <div className="flex flex-wrap gap-1.5">
                    {spokenLanguages.slice(0, 10).map(l => (
                      <button key={l} type="button" onClick={() => toggleKnownLang(l)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${knownLangs.includes(l) ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>{l}</button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.linkedin")}</label>
                    <input value={linkedin} onChange={e => setLinkedin(e.target.value)} className={inputClass} placeholder="linkedin.com/in/you" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.github")}</label>
                    <input value={github} onChange={e => setGithub(e.target.value)} className={inputClass} placeholder="github.com/you" />
                  </div>
                </div>
                <NavButtons />
              </div>
            )}

            {/* ACADEMIC */}
            {step === "academic" && (
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.college")}</label>
                  <input value={college} onChange={e => setCollege(e.target.value)} className={inputClass} placeholder="IIT Delhi" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.degree")}</label>
                    <input value={degree} onChange={e => setDegree(e.target.value)} className={inputClass} placeholder="B.Tech" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.branch")}</label>
                    <input value={branch} onChange={e => setBranch(e.target.value)} className={inputClass} placeholder="Computer Science" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.cgpa")}</label>
                    <input value={cgpa} onChange={e => setCgpa(e.target.value)} className={inputClass} placeholder="8.5" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.graduationYear")}</label>
                    <input value={gradYear} onChange={e => setGradYear(e.target.value)} className={inputClass} placeholder="2024" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.tenthPercent")}</label>
                    <input value={tenthPct} onChange={e => setTenthPct(e.target.value)} className={inputClass} placeholder="95" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.twelfthPercent")}</label>
                  <input value={twelfthPct} onChange={e => setTwelfthPct(e.target.value)} className={inputClass} placeholder="92" />
                </div>
                <NavButtons />
              </div>
            )}

            {/* SKILLS */}
            {step === "skills" && (
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">{t("onboarding.skillsDesc")}</p>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{t("onboarding.quickAddSkills")}</label>
                  <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto scrollbar-hide">
                    {popularSkills.filter(s => !skills.find(sk => sk.name === s)).slice(0, 20).map(s => (
                      <button key={s} type="button" onClick={() => addSkill(s)}
                        className="px-2 py-1 rounded-md text-[10px] font-medium border border-border text-muted-foreground hover:border-primary/30 hover:text-primary transition-all">+ {s}</button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <input value={newSkill} onChange={e => setNewSkill(e.target.value)} className={`${inputClass} flex-1`} placeholder={t("onboarding.typeSkill")} onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addSkill(newSkill))} />
                  <button type="button" onClick={() => addSkill(newSkill)} className="px-3 py-2 rounded-xl bg-primary/10 text-primary text-xs font-medium">{t("onboarding.add")}</button>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto scrollbar-hide">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="p-3 rounded-xl border border-border bg-card">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <button type="button" onClick={() => removeSkill(idx)} className="text-[10px] text-destructive">{t("onboarding.remove")}</button>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-muted-foreground">{t("onboarding.conceptual")}</span>
                          <RatingDots value={skill.conceptual} onChange={v => updateSkillRating(idx, "conceptual", v)} />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-muted-foreground">{t("onboarding.handsOn")}</span>
                          <RatingDots value={skill.handson} onChange={v => updateSkillRating(idx, "handson", v)} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <NavButtons />
              </div>
            )}

            {/* EXPERIENCE */}
            {step === "experience" && (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.currentRole")}</label>
                    <input value={currentRole} onChange={e => setCurrentRole(e.target.value)} className={inputClass} placeholder="Student" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.yearsExp")}</label>
                    <input value={yearsExp} onChange={e => setYearsExp(e.target.value)} className={inputClass} placeholder="0" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("onboarding.company")}</label>
                    <input value={company} onChange={e => setCompany(e.target.value)} className={inputClass} placeholder="Optional" />
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t("onboarding.certifications")}</label>
                    <button type="button" onClick={addCertification} className="text-[10px] text-primary font-medium">+ {t("onboarding.add")}</button>
                  </div>
                  {certifications.map((c, i) => (
                    <div key={i} className="p-3 rounded-lg border border-border bg-card mb-2 space-y-2">
                      <div className="flex gap-2">
                        <input value={c.name} onChange={e => updateCert(i, "name", e.target.value)} className={`${inputClass} flex-1`} placeholder={t("onboarding.certName")} />
                        <button type="button" onClick={() => removeCert(i)} className="text-xs text-destructive px-2">×</button>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <input value={c.issuer} onChange={e => updateCert(i, "issuer", e.target.value)} className={inputClass} placeholder={t("onboarding.issuer")} />
                        <input value={c.year} onChange={e => updateCert(i, "year", e.target.value)} className={inputClass} placeholder={t("onboarding.year")} />
                        <input value={c.techStack} onChange={e => updateCert(i, "techStack", e.target.value)} className={inputClass} placeholder={t("onboarding.techStack")} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Internships */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t("onboarding.internships")}</label>
                    <button type="button" onClick={addInternship} className="text-[10px] text-primary font-medium">+ {t("onboarding.add")}</button>
                  </div>
                  {internships.map((intern, i) => (
                    <div key={i} className="p-3 rounded-lg border border-border bg-card mb-2 space-y-2">
                      <div className="flex gap-2">
                        <input value={intern.company} onChange={e => updateInternship(i, "company", e.target.value)} className={`${inputClass} flex-1`} placeholder={t("onboarding.company")} />
                        <input value={intern.role} onChange={e => updateInternship(i, "role", e.target.value)} className={`${inputClass} flex-1`} placeholder={t("onboarding.role")} />
                        <button type="button" onClick={() => removeInternship(i)} className="text-xs text-destructive px-2">×</button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <input value={intern.duration} onChange={e => updateInternship(i, "duration", e.target.value)} className={inputClass} placeholder={t("onboarding.duration")} />
                        <input value={intern.techStack} onChange={e => updateInternship(i, "techStack", e.target.value)} className={inputClass} placeholder={t("onboarding.techStack")} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Projects */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t("onboarding.projects")}</label>
                    <button type="button" onClick={addProject} className="text-[10px] text-primary font-medium">+ {t("onboarding.add")}</button>
                  </div>
                  {projects.map((p, i) => (
                    <div key={i} className="p-3 rounded-lg border border-border bg-card mb-2 space-y-2">
                      <div className="flex gap-2">
                        <input value={p.title} onChange={e => updateProject(i, "title", e.target.value)} className={`${inputClass} flex-1`} placeholder={t("onboarding.projectTitle")} />
                        <button type="button" onClick={() => removeProject(i)} className="text-xs text-destructive px-2">×</button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <input value={p.techStack} onChange={e => updateProject(i, "techStack", e.target.value)} className={inputClass} placeholder={t("onboarding.techStack")} />
                        <input value={p.url} onChange={e => updateProject(i, "url", e.target.value)} className={inputClass} placeholder={t("onboarding.url")} />
                      </div>
                    </div>
                  ))}
                </div>

                <NavButtons />
              </div>
            )}

            {/* PREFERENCES */}
            {step === "preferences" && (
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">{t("onboarding.skillLevel")} *</label>
                  <div className="grid grid-cols-3 gap-2">
                    {levels.map((l, li) => (
                      <button key={l} type="button" onClick={() => setSelectedLevel(l)}
                        className={`py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all ${selectedLevel === l ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>{t(levelKeys[li])}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">{t("onboarding.yourGoal")} *</label>
                  <div className="flex flex-wrap gap-2">
                    {goals.map((g, gi) => (
                      <button key={g} type="button" onClick={() => setSelectedGoal(g)}
                        className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-medium border transition-all ${selectedGoal === g ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>{t(goalKeys[gi])}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">{t("onboarding.preferredLang")}</label>
                  <div className="flex flex-wrap gap-1.5">
                    {languages.map(l => (
                      <button key={l} type="button" onClick={() => setSelectedLang(l)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${selectedLang === l ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>{l}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">{t("onboarding.preferredStack")}</label>
                  <div className="flex flex-wrap gap-1.5">
                    {stacks.map(s => (
                      <button key={s} type="button" onClick={() => setSelectedStack(s)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${selectedStack === s ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>{s}</button>
                    ))}
                  </div>
                </div>
                <NavButtons canProceed={!!selectedLevel && !!selectedGoal} />
              </div>
            )}

            {/* REVIEW */}
            {step === "review" && (
              <div className="space-y-3">
                <div className="rounded-xl border border-border bg-card p-4 space-y-2">
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t("onboarding.personal")}</h3>
                  <p className="text-sm text-foreground">{name} · {email}</p>
                  {city && <p className="text-xs text-muted-foreground">{city}{state ? `, ${state}` : ""}{country ? `, ${country}` : ""}</p>}
                </div>
                {college && (
                  <div className="rounded-xl border border-border bg-card p-4 space-y-1">
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t("onboarding.academic")}</h3>
                    <p className="text-sm text-foreground">{degree} {branch} — {college}</p>
                    <p className="text-xs text-muted-foreground">CGPA: {cgpa} · Graduation: {gradYear}</p>
                  </div>
                )}
                {skills.length > 0 && (
                  <div className="rounded-xl border border-border bg-card p-4">
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">{t("onboarding.skills")} ({skills.length})</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map(s => (
                        <span key={s.name} className="px-2 py-1 rounded-md bg-primary/5 text-[10px] font-medium text-primary border border-primary/10">
                          {s.name} <span className="text-muted-foreground">C:{s.conceptual} H:{s.handson}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {(certifications.length > 0 || internships.length > 0 || projects.length > 0) && (
                  <div className="rounded-xl border border-border bg-card p-4 space-y-1">
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t("onboarding.experience")}</h3>
                    {certifications.length > 0 && <p className="text-xs text-muted-foreground">{certifications.length} certification(s)</p>}
                    {internships.length > 0 && <p className="text-xs text-muted-foreground">{internships.length} internship(s)</p>}
                    {projects.length > 0 && <p className="text-xs text-muted-foreground">{projects.length} project(s)</p>}
                  </div>
                )}
                <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-4 space-y-1">
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t("onboarding.preferences")}</h3>
                  <p className="text-sm text-foreground">{selectedLevel} · {selectedGoal}</p>
                  {selectedLang && <p className="text-xs text-muted-foreground">{selectedLang} · {selectedStack}</p>}
                </div>
                <NavButtons nextLabel={t("onboarding.startLearning")} onNext={handleComplete} />
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
