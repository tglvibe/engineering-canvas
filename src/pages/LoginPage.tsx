import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/tgl-logo.png";

const goals = ["Get a Job", "Land an Internship", "Upskill", "Switch Domain"];
const levels = ["Beginner", "Intermediate", "Advanced"];

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

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      setStep("onboarding");
    } else {
      navigate("/tracks");
    }
  };

  const handleOnboardingComplete = () => {
    navigate("/tracks");
  };

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <img src={logo} alt="Talencia Global" className="h-8 mx-auto mb-6" />
          {step === "auth" && (
            <h1 className="text-2xl font-bold text-foreground">
              {isSignup ? "Create your account" : "Welcome back"}
            </h1>
          )}
          {step === "onboarding" && (
            <h1 className="text-2xl font-bold text-foreground">Set up your profile</h1>
          )}
        </div>

        {step === "auth" && (
          <form onSubmit={handleAuth} className="space-y-4">
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
                onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
              <button type="button" onClick={() => setIsSignup(!isSignup)} className="text-primary font-medium hover:underline">
                {isSignup ? "Sign in" : "Sign up"}
              </button>
            </p>
          </form>
        )}

        {step === "onboarding" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Your skill level</label>
              <div className="grid grid-cols-3 gap-2">
                {levels.map((l) => (
                  <button
                    key={l}
                    onClick={() => setSelectedLevel(l)}
                    className={`py-2.5 rounded-xl text-sm font-medium border transition-all ${
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
                    className={`py-2.5 px-3 rounded-xl text-sm font-medium border transition-all ${
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
