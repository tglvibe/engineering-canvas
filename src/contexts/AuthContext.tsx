import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

export type AppRole = "admin" | "student";

export interface UserProfile {
  id: string;
  user_id: string;
  role: AppRole;
  name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: string;
  city: string;
  state: string;
  country: string;
  native_language: string;
  known_languages: string[];
  avatar: string;
  linkedin: string;
  github: string;
  portfolio: string;
  college: string;
  degree: string;
  branch: string;
  cgpa: string;
  graduation_year: string;
  tenth_percent: string;
  twelfth_percent: string;
  job_title: string;
  years_of_experience: string;
  company: string;
  level: string;
  goal: string;
  preferred_language: string;
  preferred_stack: string;
  university?: {
    year: string;
    program_type: string;
    department: string;
    specialization: string;
    student_id: string;
  };
}

// Re-export these types for backward compatibility
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

interface AuthContextType {
  user: UserProfile | null;
  authUser: User | null;
  session: Session | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch profile and role for a given user
  const fetchUserData = async (authUserId: string, email: string) => {
    try {
      // Fetch role
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", authUserId);
      
      const role: AppRole = roles?.[0]?.role === "admin" ? "admin" : "student";
      setIsAdmin(role === "admin");

      // Fetch profile
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", authUserId)
        .single();

      // Fetch university data
      const { data: university } = await supabase
        .from("student_university")
        .select("*")
        .eq("user_id", authUserId)
        .single();

      const userProfile: UserProfile = {
        id: profile?.id || "",
        user_id: authUserId,
        role,
        name: profile?.name || "",
        email: profile?.email || email,
        phone: profile?.phone || "",
        date_of_birth: profile?.date_of_birth || "",
        gender: profile?.gender || "",
        city: profile?.city || "",
        state: profile?.state || "",
        country: profile?.country || "",
        native_language: profile?.native_language || "",
        known_languages: profile?.known_languages || [],
        avatar: profile?.avatar || "",
        linkedin: profile?.linkedin || "",
        github: profile?.github || "",
        portfolio: profile?.portfolio || "",
        college: profile?.college || "",
        degree: profile?.degree || "",
        branch: profile?.branch || "",
        cgpa: profile?.cgpa || "",
        graduation_year: profile?.graduation_year || "",
        tenth_percent: profile?.tenth_percent || "",
        twelfth_percent: profile?.twelfth_percent || "",
        job_title: profile?.job_title || "",
        years_of_experience: profile?.years_of_experience || "",
        company: profile?.company || "",
        level: profile?.level || "",
        goal: profile?.goal || "",
        preferred_language: profile?.preferred_language || "",
        preferred_stack: profile?.preferred_stack || "",
        university: university ? {
          year: university.year || "Year 1",
          program_type: university.program_type || "B.Tech Regular",
          department: university.department || "",
          specialization: university.specialization || "",
          student_id: university.student_id || "",
        } : undefined,
      };

      setUser(userProfile);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  // Set up auth state listener
  useEffect(() => {
    // Listen for auth changes FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, newSession) => {
        setSession(newSession);
        setAuthUser(newSession?.user ?? null);

        if (newSession?.user) {
          // Use setTimeout to avoid deadlock with Supabase client
          setTimeout(() => {
            fetchUserData(newSession.user.id, newSession.user.email || "");
          }, 0);
        } else {
          setUser(null);
          setIsAdmin(false);
        }
        setIsLoading(false);
      }
    );

    // THEN check existing session with timeout
    Promise.race([
      supabase.auth.getSession(),
      new Promise<{ data: { session: null } }>((resolve) =>
        setTimeout(() => resolve({ data: { session: null } }), 10000)
      ),
    ]).then(({ data: { session: existingSession } }) => {
      setSession(existingSession);
      setAuthUser(existingSession?.user ?? null);

      if (existingSession?.user) {
        fetchUserData(existingSession.user.id, existingSession.user.email || "");
      }
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const { data, error } = await Promise.race([
        supabase.auth.signInWithPassword({ email, password }),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("TIMEOUT")), 15000)
        ),
      ]);
      if (error) return { success: false, error: error.message };
      if (data.user) {
        await fetchUserData(data.user.id, data.user.email || "");
      }
      return { success: true };
    } catch (err: any) {
      if (err?.message === "TIMEOUT" || err?.message?.includes("Failed to fetch")) {
        return { success: false, error: "Unable to reach the server. Please check your internet connection and try again." };
      }
      return { success: false, error: err?.message || "An unexpected error occurred." };
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setAuthUser(null);
    setSession(null);
    setIsAdmin(false);
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!authUser) return;

    // Separate university updates from profile updates
    const { university, ...profileUpdates } = updates;

    // Map UserProfile fields to DB column names
    const dbUpdates: Record<string, any> = {};
    const fieldMap: Record<string, string> = {
      name: "name", email: "email", phone: "phone",
      date_of_birth: "date_of_birth", gender: "gender",
      city: "city", state: "state", country: "country",
      native_language: "native_language", known_languages: "known_languages",
      avatar: "avatar", linkedin: "linkedin", github: "github", portfolio: "portfolio",
      college: "college", degree: "degree", branch: "branch", cgpa: "cgpa",
      graduation_year: "graduation_year", tenth_percent: "tenth_percent",
      twelfth_percent: "twelfth_percent", job_title: "job_title",
      years_of_experience: "years_of_experience", company: "company",
      level: "level", goal: "goal", preferred_language: "preferred_language",
      preferred_stack: "preferred_stack",
    };

    for (const [key, val] of Object.entries(profileUpdates)) {
      if (key in fieldMap) {
        dbUpdates[fieldMap[key]] = val;
      }
    }

    if (Object.keys(dbUpdates).length > 0) {
      await supabase.from("profiles").update(dbUpdates).eq("user_id", authUser.id);
    }

    if (university) {
      const { data: existing } = await supabase
        .from("student_university")
        .select("id")
        .eq("user_id", authUser.id)
        .single();

      if (existing) {
        await supabase.from("student_university").update(university).eq("user_id", authUser.id);
      } else {
        await supabase.from("student_university").insert({ ...university, user_id: authUser.id });
      }
    }

    // Refresh local state
    await fetchUserData(authUser.id, authUser.email || "");
  };

  const refreshProfile = async () => {
    if (authUser) {
      await fetchUserData(authUser.id, authUser.email || "");
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      authUser,
      session,
      isAuthenticated: !!authUser,
      isAdmin,
      isLoading,
      login,
      logout,
      updateProfile,
      refreshProfile,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
