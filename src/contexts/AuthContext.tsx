import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { initializeStore, authenticateUser, createStudent, StoredUser, UserRole } from "@/data/store";

export interface SkillRating {
  name: string;
  conceptual: number;
  handson: number;
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
  // Core identity from store
  id: string;
  role: UserRole;
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
  certifications: Certification[];
  internships: Internship[];
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

  // University (for students)
  university?: {
    year: string;
    programType: string;
    department: string;
    specialization: string;
    studentId: string;
  };
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  signup: (profile: Partial<UserProfile>) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  logout: () => void;
  unlockedVideos: string[];
  unlockVideo: (id: string) => void;
}

const defaultProfile: UserProfile = {
  id: "", role: "student",
  name: "", email: "", phone: "", dateOfBirth: "", gender: "", city: "", state: "", country: "", nativeLanguage: "", knownLanguages: [], avatar: "",
  linkedin: "", github: "", portfolio: "",
  college: "", degree: "", branch: "", cgpa: "", graduationYear: "", tenthPercent: "", twelfthPercent: "",
  skills: [], certifications: [], internships: [], projects: [],
  currentRole: "", yearsOfExperience: "", company: "",
  level: "", goal: "", preferredLanguage: "", preferredStack: "",
  completedCourses: [], completedTopics: [], notes: [],
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Initialize store on first load
  useEffect(() => { initializeStore(); }, []);

  const [user, setUser] = useState<UserProfile | null>(() => {
    const stored = localStorage.getItem("tgl_current_user");
    return stored ? JSON.parse(stored) : null;
  });
  const [unlockedVideos, setUnlockedVideos] = useState<string[]>(() => {
    const stored = localStorage.getItem("tgl_unlocked");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    if (user) localStorage.setItem("tgl_current_user", JSON.stringify(user));
    else localStorage.removeItem("tgl_current_user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("tgl_unlocked", JSON.stringify(unlockedVideos));
  }, [unlockedVideos]);

  const login = (email: string, password: string): boolean => {
    const storedUser = authenticateUser(email, password);
    if (!storedUser) return false;

    // Build UserProfile from StoredUser
    const profile: UserProfile = {
      ...defaultProfile,
      id: storedUser.id,
      role: storedUser.role,
      name: storedUser.name,
      email: storedUser.email,
      avatar: storedUser.avatar,
      university: storedUser.university,
      phone: storedUser.phone || "",
      city: storedUser.city || "",
      state: storedUser.state || "",
      country: storedUser.country || "",
    };
    setUser(profile);
    return true;
  };

  const signup = (profile: Partial<UserProfile>) => {
    // Also persist the new student in the store
    try {
      const storedUser = createStudent({
        name: profile.name || "Student",
        email: profile.email || "",
        password: "password123", // default password for self-signup
        phone: profile.phone || "",
        city: profile.city || "",
        state: profile.state || "",
        country: profile.country || "",
      });
      const newProfile: UserProfile = {
        ...defaultProfile,
        ...profile,
        id: storedUser.id,
        role: "student",
        avatar: storedUser.avatar,
      };
      setUser(newProfile);
    } catch (e) {
      // Fallback if store creation fails (e.g., duplicate email)
      const newProfile: UserProfile = {
        ...defaultProfile,
        ...profile,
        id: `student-${Date.now()}`,
        role: "student",
        avatar: (profile.name || "U").split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2),
      };
      setUser(newProfile);
    }
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    setUser(prev => prev ? { ...prev, ...updates } : null);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("tgl_current_user");
    // Also clean old key
    localStorage.removeItem("tgl_user");
  };

  const unlockVideo = (id: string) => {
    setUnlockedVideos(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isAdmin, login, signup, updateProfile, logout, unlockedVideos, unlockVideo }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
