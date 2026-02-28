import { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Users, BookOpen, BarChart3, Settings, LogOut, ChevronLeft, ChevronRight, Shield,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/tgl-logo.png";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { label: "Students", icon: Users, path: "/admin/students" },
  { label: "Enrollments", icon: BookOpen, path: "/admin/enrollments" },
  { label: "Analytics", icon: BarChart3, path: "/admin/analytics" },
  { label: "Settings", icon: Settings, path: "/admin/settings" },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 64 : 240 }}
        transition={{ duration: 0.2 }}
        className="sticky top-0 h-screen border-r border-border bg-card flex flex-col z-40"
      >
        {/* Logo */}
        <div className="h-14 flex items-center justify-between px-3 border-b border-border">
          {!collapsed && <img src={logo} alt="TGL" className="h-6" />}
          {!collapsed && (
            <span className="flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              <Shield className="w-3 h-3" /> ADMIN
            </span>
          )}
          <button onClick={() => setCollapsed(!collapsed)} className="p-1 hover:bg-secondary rounded-lg text-muted-foreground">
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3 px-2 space-y-1">
          {navItems.map(item => {
            const active = location.pathname === item.path || (item.path !== "/admin" && location.pathname.startsWith(item.path));
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-2 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5 transition-colors"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!collapsed && <span>Sign Out</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
