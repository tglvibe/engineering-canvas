import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff, AlertCircle, Info, Linkedin, Github, Code2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/tgl-logo.png";

const goals = ["Get a Job", "Land an Internship", "Upskill", "Switch Domain"];
const levels = ["Beginner", "Intermediate", "Advanced"];
const languages = ["JavaScript", "TypeScript", "Python", "Java", "Go"];
const stacks = ["Node.js + PostgreSQL", "Django + PostgreSQL", "Spring Boot + MySQL", "Go + MongoDB", "FastAPI + PostgreSQL"];

const DEMO_EMAIL = "demo@talenciaglobal.com";
const DEMO_PASSWORD = "demo1234";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, signup, isAuthenticated } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<"auth" | "onboarding" | "details">("auth");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedLang, setSelectedLang] = useState("");
  const [selectedStack, setSelectedStack] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [college, setCollege] = useState("");
  const [error, setError] = useState("");

  // Redirect if already logged in
  if (isAuthenticated) { navigate("/tracks", { replace: true }); return null; }

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password.trim()) { setError("Please enter both email and password."); return; }
    if (isSignup) {
      if (!name.trim()) { setError("Please enter your name."); return; }
      setStep("onboarding");
    } else {
      const success = login(email, password);
      if (!success) { setError("Invalid credentials. Use the demo credentials shown below."); return; }
      navigate("/tracks");
    }
  };

  const handleOnboardingNext = () => {
    if (!selectedLevel || !selectedGoal) return;
    setStep("details");
  };

  const handleComplete = () => {
    signup({
      name, email, level: selectedLevel, goal: selectedGoal,
      linkedin, github, college,
      preferredLanguage: selectedLang, preferredStack: selectedStack,
    });
    navigate("/tracks");
  };

  const fillDemo = () => { setEmail(DEMO_EMAIL); setPassword(DEMO_PASSWORD); setError(""); };

  const inputClass = "w-full px-3.5 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all";

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center px-4 sm:px-6">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="w-full max-w-sm">
        <div className="text-center mb-6">
          <img src={logo} alt="Talencia Global" className="h-7 sm:h-8 mx-auto mb-5" />
          {step === "auth" && <h1 className="text-xl sm:text-2xl font-bold text-foreground">{isSignup ? "Create your account" : "Welcome back"}</h1>}
          {step === "onboarding" && <h1 className="text-xl sm:text-2xl font-bold text-foreground">Your learning profile</h1>}
          {step === "details" && <h1 className="text-xl sm:text-2xl font-bold text-foreground">One last step</h1>}
        </div>

        {step === "auth" && (
          <form onSubmit={handleAuth} className="space-y-3.5">
            {!isSignup && (
              <motion.button type="button" onClick={fillDemo} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                className="w-full flex items-start gap-2.5 p-3 rounded-xl border border-primary/20 bg-primary/[0.04] text-left hover:border-primary/40 transition-all">
                <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Demo Credentials <span className="text-primary">(tap to fill)</span></p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-mono">{DEMO_EMAIL}</p>
                  <p className="text-[11px] text-muted-foreground font-mono">{DEMO_PASSWORD}</p>
                </div>
              </motion.button>
            )}

            {error && (
              <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-2 p-3 rounded-xl border border-destructive/20 bg-destructive/5">
                <AlertCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                <p className="text-xs text-destructive">{error}</p>
              </motion.div>
            )}

            {isSignup && (
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} className={inputClass} placeholder="Your name" />
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input type="email" value={email} onChange={e => { setEmail(e.target.value); setError(""); }} className={inputClass} placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password} onChange={e => { setPassword(e.target.value); setError(""); }} className={`${inputClass} pr-10`} placeholder="••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full bg-gradient-brand text-primary-foreground font-semibold py-3 rounded-xl shadow-brand hover:opacity-90 transition-all flex items-center justify-center gap-2">
              {isSignup ? "Create Account" : "Sign In"} <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-sm text-muted-foreground">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button type="button" onClick={() => { setIsSignup(!isSignup); setError(""); }} className="text-primary font-medium hover:underline">{isSignup ? "Sign in" : "Sign up"}</button>
            </p>
          </form>
        )}

        {step === "onboarding" && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Your skill level</label>
              <div className="grid grid-cols-3 gap-2">
                {levels.map(l => (
                  <button key={l} onClick={() => setSelectedLevel(l)}
                    className={`py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all ${selectedLevel === l ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>{l}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Your goal</label>
              <div className="grid grid-cols-2 gap-2">
                {goals.map(g => (
                  <button key={g} onClick={() => setSelectedGoal(g)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium border transition-all ${selectedGoal === g ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>{g}</button>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setStep("auth")} className="flex-1 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">Back</button>
              <button onClick={handleOnboardingNext} disabled={!selectedLevel || !selectedGoal}
                className="flex-1 bg-gradient-brand text-primary-foreground font-semibold py-3 rounded-xl shadow-brand hover:opacity-90 transition-all disabled:opacity-40 flex items-center justify-center gap-2">
                Next <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === "details" && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5"><Linkedin className="w-3 h-3" /> LinkedIn (optional)</label>
              <input value={linkedin} onChange={e => setLinkedin(e.target.value)} className={inputClass} placeholder="linkedin.com/in/yourname" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5"><Github className="w-3 h-3" /> GitHub (optional)</label>
              <input value={github} onChange={e => setGithub(e.target.value)} className={inputClass} placeholder="github.com/yourname" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">College / University (optional)</label>
              <input value={college} onChange={e => setCollege(e.target.value)} className={inputClass} placeholder="Your institution" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1.5"><Code2 className="w-3 h-3" /> Preferred Language</label>
              <div className="flex flex-wrap gap-1.5">
                {languages.map(l => (
                  <button key={l} onClick={() => setSelectedLang(l)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${selectedLang === l ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>{l}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">Preferred Stack</label>
              <div className="flex flex-wrap gap-1.5">
                {stacks.map(s => (
                  <button key={s} onClick={() => setSelectedStack(s)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${selectedStack === s ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>{s}</button>
                ))}
              </div>
            </div>
            <div className="flex gap-2 pt-1">
              <button onClick={() => setStep("onboarding")} className="flex-1 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">Back</button>
              <button onClick={handleComplete}
                className="flex-1 bg-gradient-brand text-primary-foreground font-semibold py-3 rounded-xl shadow-brand hover:opacity-90 transition-all flex items-center justify-center gap-2">
                Start Learning <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
