import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface UserProfile {
  name: string;
  email: string;
  level: string;
  goal: string;
  linkedin: string;
  github: string;
  portfolio: string;
  college: string;
  cgpa: string;
  graduationYear: string;
  skills: string[];
  certifications: string[];
  internships: string[];
  preferredLanguage: string;
  preferredStack: string;
  avatar: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  signup: (profile: Partial<UserProfile>) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  logout: () => void;
  unlockedVideos: string[];
  unlockVideo: (id: string) => void;
}

const DEMO_EMAIL = "demo@talenciaglobal.com";
const DEMO_PASSWORD = "demo1234";

const DEMO_PROFILE: UserProfile = {
  name: "Demo User",
  email: DEMO_EMAIL,
  level: "Intermediate",
  goal: "Get a Job",
  linkedin: "linkedin.com/in/demo-user",
  github: "github.com/demo-user",
  portfolio: "",
  college: "IIT Delhi",
  cgpa: "8.5",
  graduationYear: "2024",
  skills: ["JavaScript", "TypeScript", "Node.js", "React", "PostgreSQL"],
  certifications: ["AWS Cloud Practitioner", "Meta Backend Developer"],
  internships: ["SDE Intern @ Google (Summer 2023)", "Backend Intern @ Razorpay (Winter 2022)"],
  preferredLanguage: "TypeScript",
  preferredStack: "Node.js + PostgreSQL",
  avatar: "DU",
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const stored = localStorage.getItem("tgl_user");
    return stored ? JSON.parse(stored) : null;
  });
  const [unlockedVideos, setUnlockedVideos] = useState<string[]>(() => {
    const stored = localStorage.getItem("tgl_unlocked");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    if (user) localStorage.setItem("tgl_user", JSON.stringify(user));
    else localStorage.removeItem("tgl_user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("tgl_unlocked", JSON.stringify(unlockedVideos));
  }, [unlockedVideos]);

  const login = (email: string, password: string): boolean => {
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setUser(DEMO_PROFILE);
      return true;
    }
    return false;
  };

  const signup = (profile: Partial<UserProfile>) => {
    setUser({
      ...DEMO_PROFILE,
      ...profile,
      avatar: (profile.name || "U").split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2),
    });
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    setUser(prev => prev ? { ...prev, ...updates } : null);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("tgl_user");
  };

  const unlockVideo = (id: string) => {
    setUnlockedVideos(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, updateProfile, logout, unlockedVideos, unlockVideo }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
