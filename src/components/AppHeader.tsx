import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, LogOut, User, BarChart3, BookOpen, Home, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext";
import LanguageSelector from "@/components/LanguageSelector";
import logo from "@/assets/tgl-logo.png";

interface AppHeaderProps {
  title?: string;
  showBack?: boolean;
  backTo?: string;
  minimal?: boolean;
}

export default function AppHeader({ title, showBack = true, backTo, minimal }: AppHeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBack = () => {
    if (backTo) navigate(backTo);
    else navigate(-1);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  const navItems = [
    { label: t("nav.tracks"), icon: BookOpen, path: "/tracks", active: location.pathname === "/tracks" },
    { label: t("nav.dashboard"), icon: BarChart3, path: "/dashboard", active: location.pathname === "/dashboard" },
    { label: t("nav.profile"), icon: User, path: "/profile", active: location.pathname === "/profile" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-12 sm:h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {showBack && (
              <button onClick={handleBack} className="text-muted-foreground hover:text-foreground transition-colors shrink-0">
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            <button onClick={() => navigate("/tracks")} className="shrink-0">
              <img src={logo} alt="Talencia Global" className="h-5 sm:h-6" />
            </button>
            {title && <span className="text-xs sm:text-sm font-semibold text-foreground truncate">{title}</span>}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Desktop nav */}
            {!minimal && (
              <div className="hidden sm:flex items-center gap-1">
                {navItems.map(item => (
                  <button
                    key={item.label}
                    onClick={() => navigate(item.path)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      item.active ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <LanguageSelector compact />

            {/* User avatar / menu trigger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground text-[10px] sm:text-xs font-bold shrink-0 ml-1"
            >
              {user?.avatar || "U"}
            </button>
          </div>
        </div>
      </nav>

      {/* Dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60]"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="fixed right-3 sm:right-6 top-12 sm:top-14 z-[61] w-56 rounded-xl border border-border bg-card shadow-lg overflow-hidden"
            >
              {/* User info */}
              <div className="p-3 border-b border-border">
                <p className="text-sm font-semibold text-foreground truncate">{user?.name}</p>
                <p className="text-[11px] text-muted-foreground truncate">{user?.email}</p>
              </div>

              {/* Mobile nav items */}
              <div className="sm:hidden border-b border-border">
                {navItems.map(item => (
                  <button
                    key={item.label}
                    onClick={() => { navigate(item.path); setMenuOpen(false); }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors ${
                      item.active ? "text-primary bg-primary/5" : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div>
                <button
                  onClick={() => { navigate("/profile"); setMenuOpen(false); }}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary transition-colors sm:block hidden"
                >
                  <span className="flex items-center gap-2.5"><User className="w-4 h-4" /> {t("nav.viewProfile")}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-destructive hover:bg-destructive/5 transition-colors"
                >
                  <LogOut className="w-4 h-4" /> {t("nav.signOut")}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
