import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff, AlertCircle, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/tgl-logo.png";

const goals = ["Get a Job", "Land an Internship", "Upskill", "Switch Domain"];
const levels = ["Beginner", "Intermediate", "Advanced"];

const DEMO_EMAIL = "demo@talenciaglobal.com";
const DEMO_PASSWORD = "demo1234";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<"auth" | "onboarding">("auth");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    if (isSignup) {
      if (!name.trim()) {
        setError("Please enter your name.");
        return;
      }
      setStep("onboarding");
    } else {
      if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
        setError("Invalid credentials. Use the demo credentials shown below.");
        return;
      }
      navigate("/tracks");
    }
  };

  const handleOnboardingComplete = () => {
    navigate("/tracks");
  };

  const fillDemo = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm"
      >
        <div className="text-center mb-6 sm:mb-8">
          <img src={logo} alt="Talencia Global" className="h-7 sm:h-8 mx-auto mb-5 sm:mb-6" />
          {step === "auth" && (
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">
              {isSignup ? "Create your account" : "Welcome back"}
            </h1>
          )}
          {step === "onboarding" && (
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Set up your profile</h1>
          )}
        </div>

        {step === "auth" && (
          <form onSubmit={handleAuth} className="space-y-3.5 sm:space-y-4">
            {/* Demo credentials banner */}
            {!isSignup && (
              <motion.button
                type="button"
                onClick={fillDemo}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full flex items-start gap-2.5 p-3 rounded-xl border border-primary/20 bg-primary/[0.04] text-left group hover:border-primary/40 transition-all"
              >
                <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Demo Credentials <span className="text-primary">(tap to fill)</span></p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-mono">{DEMO_EMAIL}</p>
                  <p className="text-[11px] text-muted-foreground font-mono">{DEMO_PASSWORD}</p>
                </div>
              </motion.button>
            )}

            {/* Error message */}
            {error && (
              <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-2 p-3 rounded-xl border border-destructive/20 bg-destructive/5">
                <AlertCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                <p className="text-xs text-destructive">{error}</p>
              </motion.div>
            )}

            {isSignup && (
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all"
                  placeholder="Your name"
                />
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all pr-10"
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-brand text-primary-foreground font-semibold py-3 rounded-xl shadow-brand hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              {isSignup ? "Create Account" : "Sign In"} <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-sm text-muted-foreground">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button type="button" onClick={() => { setIsSignup(!isSignup); setError(""); }} className="text-primary font-medium hover:underline">
                {isSignup ? "Sign in" : "Sign up"}
              </button>
            </p>
          </form>
        )}

        {step === "onboarding" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-5 sm:space-y-6"
          >
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Your skill level</label>
              <div className="grid grid-cols-3 gap-2">
                {levels.map((l) => (
                  <button
                    key={l}
                    onClick={() => setSelectedLevel(l)}
                    className={`py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                      selectedLevel === l
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Your goal</label>
              <div className="grid grid-cols-2 gap-2">
                {goals.map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGoal(g)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                      selectedGoal === g
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleOnboardingComplete}
              disabled={!selectedLevel || !selectedGoal}
              className="w-full bg-gradient-brand text-primary-foreground font-semibold py-3 rounded-xl shadow-brand hover:opacity-90 transition-all disabled:opacity-40 flex items-center justify-center gap-2"
            >
              Enter Workspace <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
