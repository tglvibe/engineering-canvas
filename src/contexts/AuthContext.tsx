import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface SkillRating {
  name: string;
  conceptual: number; // 1-10
  handson: number; // 1-10
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  techStack: string;
}

export interface Internship {
  company: string;
  role: string;
  duration: string;
  techStack: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string;
  url: string;
}

export interface UserProfile {
  // Basic
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  city: string;
  state: string;
  country: string;
  nativeLanguage: string;
  knownLanguages: string[];
  avatar: string;

  // Social
  linkedin: string;
  github: string;
  portfolio: string;

  // Academic
  college: string;
  degree: string;
  branch: string;
  cgpa: string;
  graduationYear: string;
  tenthPercent: string;
  twelfthPercent: string;

  // Skills & ratings
  skills: SkillRating[];

  // Certifications
  certifications: Certification[];

  // Internships
  internships: Internship[];

  // Projects
  projects: Project[];

  // Professional
  currentRole: string;
  yearsOfExperience: string;
  company: string;

  // Platform preferences
  level: string;
  goal: string;
  preferredLanguage: string;
  preferredStack: string;

  // Tracking
  completedCourses: string[];
  completedTopics: string[];
  notes: string[];
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

const defaultProfile: UserProfile = {
  name: "", email: "", phone: "", dateOfBirth: "", gender: "", city: "", state: "", country: "", nativeLanguage: "", knownLanguages: [], avatar: "",
  linkedin: "", github: "", portfolio: "",
  college: "", degree: "", branch: "", cgpa: "", graduationYear: "", tenthPercent: "", twelfthPercent: "",
  skills: [], certifications: [], internships: [], projects: [],
  currentRole: "", yearsOfExperience: "", company: "",
  level: "", goal: "", preferredLanguage: "", preferredStack: "",
  completedCourses: [], completedTopics: [], notes: [],
};

const DEMO_PROFILE: UserProfile = {
  ...defaultProfile,
  name: "Demo User",
  email: DEMO_EMAIL,
  phone: "+91 98765 43210",
  dateOfBirth: "1999-06-15",
  gender: "Male",
  city: "New Delhi",
  state: "Delhi",
  country: "India",
  nativeLanguage: "Hindi",
  knownLanguages: ["Hindi", "English", "Tamil"],
  level: "Intermediate",
  goal: "Get a Job",
  linkedin: "linkedin.com/in/demo-user",
  github: "github.com/demo-user",
  portfolio: "demouser.dev",
  college: "IIT Delhi",
  degree: "B.Tech",
  branch: "Computer Science",
  cgpa: "8.5",
  graduationYear: "2024",
  tenthPercent: "95",
  twelfthPercent: "92",
  skills: [
    { name: "JavaScript", conceptual: 8, handson: 7 },
    { name: "TypeScript", conceptual: 7, handson: 6 },
    { name: "Node.js", conceptual: 7, handson: 8 },
    { name: "React", conceptual: 8, handson: 7 },
    { name: "PostgreSQL", conceptual: 6, handson: 5 },
    { name: "Docker", conceptual: 5, handson: 4 },
  ],
  certifications: [
    { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2023", techStack: "AWS" },
    { name: "Meta Backend Developer", issuer: "Meta", year: "2023", techStack: "Python, Django" },
  ],
  internships: [
    { company: "Google", role: "SDE Intern", duration: "May 2023 - Jul 2023", techStack: "Go, gRPC, Kubernetes", description: "Built microservices for internal tooling" },
    { company: "Razorpay", role: "Backend Intern", duration: "Dec 2022 - Feb 2023", techStack: "Node.js, PostgreSQL, Redis", description: "Payment reconciliation service" },
  ],
  projects: [
    { title: "E-Commerce API", description: "REST API with auth, payments, inventory", techStack: "Node.js, Express, PostgreSQL", url: "github.com/demo/ecommerce-api" },
  ],
  currentRole: "Student",
  yearsOfExperience: "0",
  company: "",
  preferredLanguage: "TypeScript",
  preferredStack: "Node.js + PostgreSQL",
  avatar: "DU",
  completedCourses: [],
  completedTopics: [],
  notes: [],
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
      ...defaultProfile,
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
