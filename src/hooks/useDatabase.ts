import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

// ============================================
// ENROLLMENTS
// ============================================
export function useStudentEnrollments(studentId?: string) {
  const { authUser } = useAuth();
  const id = studentId || authUser?.id;

  return useQuery({
    queryKey: ["enrollments", id],
    queryFn: async () => {
      if (!id) return [];
      // Auto-expire stale enrollments
      await supabase.rpc("refresh_enrollment_statuses");
      const { data, error } = await supabase
        .from("enrollments")
        .select("*")
        .eq("student_id", id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data || [];
    },
    enabled: !!id,
  });
}

export function useActiveEnrollments(studentId?: string) {
  const { authUser } = useAuth();
  const id = studentId || authUser?.id;

  return useQuery({
    queryKey: ["enrollments", "active", id],
    queryFn: async () => {
      if (!id) return [];
      await supabase.rpc("refresh_enrollment_statuses");
      const { data, error } = await supabase
        .from("enrollments")
        .select("*")
        .eq("student_id", id)
        .eq("status", "active")
        .lte("start_date", new Date().toISOString())
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data || [];
    },
    enabled: !!id,
  });
}

export function useAllEnrollments() {
  return useQuery({
    queryKey: ["enrollments", "all"],
    queryFn: async () => {
      await supabase.rpc("refresh_enrollment_statuses");
      const { data, error } = await supabase
        .from("enrollments")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data || [];
    },
  });
}

export function useCreateEnrollment() {
  const queryClient = useQueryClient();
  const { authUser } = useAuth();

  return useMutation({
    mutationFn: async (data: {
      student_id: string;
      type: string;
      target_id: string;
      start_date: string;
      expiry_date: string;
    }) => {
      const { error } = await supabase.from("enrollments").insert({
        ...data,
        enrolled_by: authUser!.id,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enrollments"] });
    },
  });
}

export function useUnenroll() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (enrollmentId: string) => {
      const { error } = await supabase
        .from("enrollments")
        .update({ status: "unenrolled" })
        .eq("id", enrollmentId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enrollments"] });
    },
  });
}

// ============================================
// PROGRESS
// ============================================
export function useStudentProgress(studentId?: string) {
  const { authUser } = useAuth();
  const id = studentId || authUser?.id;

  return useQuery({
    queryKey: ["progress", id],
    queryFn: async () => {
      if (!id) return [];
      const { data, error } = await supabase
        .from("progress")
        .select("*")
        .eq("student_id", id);
      if (error) throw error;
      return data || [];
    },
    enabled: !!id,
  });
}

export function useMarkTopicComplete() {
  const queryClient = useQueryClient();
  const { authUser } = useAuth();

  return useMutation({
    mutationFn: async ({ courseId, topicId }: { courseId: string; topicId: string }) => {
      const { error } = await supabase.from("progress").upsert({
        student_id: authUser!.id,
        course_id: courseId,
        topic_id: topicId,
      }, { onConflict: "student_id,course_id,topic_id" });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["progress"] });
    },
  });
}

// ============================================
// ACTIVITY LOGS
// ============================================
export function useStudentActivity(studentId?: string) {
  const { authUser } = useAuth();
  const id = studentId || authUser?.id;

  return useQuery({
    queryKey: ["activity", id],
    queryFn: async () => {
      if (!id) return [];
      const { data, error } = await supabase
        .from("activity_logs")
        .select("*")
        .eq("student_id", id)
        .order("created_at", { ascending: false })
        .limit(500);
      if (error) throw error;
      return data || [];
    },
    enabled: !!id,
  });
}

export function useLogActivity() {
  const queryClient = useQueryClient();
  const { authUser } = useAuth();

  return useMutation({
    mutationFn: async ({ action, targetId, duration }: { action: string; targetId?: string; duration?: number }) => {
      const { error } = await supabase.from("activity_logs").insert({
        student_id: authUser!.id,
        action,
        target_id: targetId,
        duration,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activity"] });
    },
  });
}

// ============================================
// STUDENTS (Admin)
// ============================================
export function useAllStudents() {
  return useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      // Get all profiles that have student role
      const { data: roles, error: rolesError } = await supabase
        .from("user_roles")
        .select("user_id")
        .eq("role", "student");
      if (rolesError) throw rolesError;

      const studentIds = (roles || []).map(r => r.user_id);
      if (studentIds.length === 0) return [];

      const { data: profiles, error: profilesError } = await supabase
        .from("profiles")
        .select("*")
        .in("user_id", studentIds);
      if (profilesError) throw profilesError;

      // Fetch university data for all students
      const { data: universities } = await supabase
        .from("student_university")
        .select("*")
        .in("user_id", studentIds);

      const uniMap = new Map((universities || []).map(u => [u.user_id, u]));

      return (profiles || []).map(p => ({
        ...p,
        university: uniMap.get(p.user_id) || null,
      }));
    },
  });
}

// ============================================
// ADMIN ANALYTICS
// ============================================
export function useAdminAnalytics() {
  return useQuery({
    queryKey: ["admin-analytics"],
    queryFn: async () => {
      const [
        { data: students },
        { data: enrollments },
        { data: progress },
        { data: universities },
      ] = await Promise.all([
        supabase.from("user_roles").select("user_id").eq("role", "student"),
        supabase.from("enrollments").select("*"),
        supabase.from("progress").select("*"),
        supabase.from("student_university").select("*"),
      ]);

      const activeEnrollments = (enrollments || []).filter(e => e.status === "active");
      const expiredEnrollments = (enrollments || []).filter(e => e.status === "expired");

      // Distributions
      const yearDist: Record<string, number> = {};
      const deptDist: Record<string, number> = {};
      const progTypeDist: Record<string, number> = {};

      (universities || []).forEach(u => {
        const year = u.year || "Unknown";
        yearDist[year] = (yearDist[year] || 0) + 1;
        const dept = u.department || "Unknown";
        deptDist[dept] = (deptDist[dept] || 0) + 1;
        const pt = u.program_type || "Unknown";
        progTypeDist[pt] = (progTypeDist[pt] || 0) + 1;
      });

      return {
        totalStudents: (students || []).length,
        activeEnrollments: activeEnrollments.length,
        expiredEnrollments: expiredEnrollments.length,
        totalProgress: (progress || []).length,
        yearDistribution: yearDist,
        departmentDistribution: deptDist,
        programTypeDistribution: progTypeDist,
      };
    },
  });
}
