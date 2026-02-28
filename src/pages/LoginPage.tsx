import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, EyeOff, AlertCircle, Info, Shield } from "lucide-react";
import { useNavigate, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/tgl-logo.png";
import LanguageSelector from "@/components/LanguageSelector";

const DEMO_EMAIL = "demo@talenciaglobal.com";
const DEMO_PASSWORD = "demo1234";

export default function LoginPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isAuthenticated, isAdmin, isLoading, login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-warm flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={isAdmin ? "/admin" : "/explore"} replace />;
  }

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password.trim()) { setError(t("auth.enterBoth")); return; }

    setLoading(true);
    try {
      const result = await login(email, password);
      if (!result.success) {
        setError(result.error || t("auth.invalidCredentials"));
      }
    } catch (err: any) {
      setError("Unable to reach the server. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const fillDemo = () => { setEmail(DEMO_EMAIL); setPassword(DEMO_PASSWORD); setError(""); };

  const inputClass = "w-full px-3.5 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all";

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center px-4 sm:px-6 py-8">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
        className="w-full max-w-sm">
        <div className="text-center mb-5">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logo} alt="Talencia Global" className="h-7 sm:h-8" />
            <LanguageSelector compact />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">{t("auth.welcomeBack")}</h1>
        </div>

        <form onSubmit={handleAuth} className="space-y-3.5">
          <motion.button type="button" onClick={fillDemo} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
            className="w-full flex items-start gap-2.5 p-3 rounded-xl border border-primary/20 bg-primary/[0.04] text-left hover:border-primary/40 transition-all">
            <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-foreground">{t("auth.demoCredentials")} <span className="text-primary">{t("auth.tapToFill")}</span></p>
              <p className="text-[11px] text-muted-foreground mt-0.5 font-mono">{DEMO_EMAIL}</p>
              <p className="text-[11px] text-muted-foreground font-mono">{DEMO_PASSWORD}</p>
            </div>
          </motion.button>

          <motion.button type="button" onClick={() => { setEmail("admin@talenciaglobal.com"); setPassword("admin1234"); setError(""); }}
            initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="w-full flex items-start gap-2.5 p-3 rounded-xl border border-border bg-secondary/30 text-left hover:border-primary/30 transition-all">
            <Shield className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-foreground">Admin Console <span className="text-muted-foreground font-normal">— Tap to fill</span></p>
              <p className="text-[11px] text-muted-foreground mt-0.5 font-mono">admin@talenciaglobal.com</p>
            </div>
          </motion.button>

          {error && (
            <div className="flex items-start gap-2 p-3 rounded-xl border border-destructive/20 bg-destructive/5">
              <AlertCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
              <p className="text-xs text-destructive">{error}</p>
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

          <button type="submit" disabled={loading}
            className="w-full bg-gradient-brand text-primary-foreground font-semibold py-3 rounded-xl shadow-brand hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50">
            {loading ? (
              <div className="animate-spin w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
            ) : (
              <>{t("auth.signInBtn")} <ArrowRight className="w-4 h-4" /></>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
