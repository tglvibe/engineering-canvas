export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      activity_logs: {
        Row: {
          action: string
          created_at: string
          duration: number | null
          id: string
          student_id: string
          target_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          duration?: number | null
          id?: string
          student_id: string
          target_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          duration?: number | null
          id?: string
          student_id?: string
          target_id?: string | null
        }
        Relationships: []
      }
      enrollments: {
        Row: {
          created_at: string
          enrolled_at: string
          enrolled_by: string
          expiry_date: string
          id: string
          start_date: string
          status: string
          student_id: string
          target_id: string
          type: string
        }
        Insert: {
          created_at?: string
          enrolled_at?: string
          enrolled_by: string
          expiry_date: string
          id?: string
          start_date?: string
          status?: string
          student_id: string
          target_id: string
          type: string
        }
        Update: {
          created_at?: string
          enrolled_at?: string
          enrolled_by?: string
          expiry_date?: string
          id?: string
          start_date?: string
          status?: string
          student_id?: string
          target_id?: string
          type?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar: string | null
          branch: string | null
          cgpa: string | null
          city: string | null
          college: string | null
          company: string | null
          country: string | null
          created_at: string
          date_of_birth: string | null
          degree: string | null
          email: string
          gender: string | null
          github: string | null
          goal: string | null
          graduation_year: string | null
          id: string
          job_title: string | null
          known_languages: string[] | null
          level: string | null
          linkedin: string | null
          name: string
          native_language: string | null
          phone: string | null
          portfolio: string | null
          preferred_language: string | null
          preferred_stack: string | null
          state: string | null
          tenth_percent: string | null
          twelfth_percent: string | null
          updated_at: string
          user_id: string
          years_of_experience: string | null
        }
        Insert: {
          avatar?: string | null
          branch?: string | null
          cgpa?: string | null
          city?: string | null
          college?: string | null
          company?: string | null
          country?: string | null
          created_at?: string
          date_of_birth?: string | null
          degree?: string | null
          email?: string
          gender?: string | null
          github?: string | null
          goal?: string | null
          graduation_year?: string | null
          id?: string
          job_title?: string | null
          known_languages?: string[] | null
          level?: string | null
          linkedin?: string | null
          name?: string
          native_language?: string | null
          phone?: string | null
          portfolio?: string | null
          preferred_language?: string | null
          preferred_stack?: string | null
          state?: string | null
          tenth_percent?: string | null
          twelfth_percent?: string | null
          updated_at?: string
          user_id: string
          years_of_experience?: string | null
        }
        Update: {
          avatar?: string | null
          branch?: string | null
          cgpa?: string | null
          city?: string | null
          college?: string | null
          company?: string | null
          country?: string | null
          created_at?: string
          date_of_birth?: string | null
          degree?: string | null
          email?: string
          gender?: string | null
          github?: string | null
          goal?: string | null
          graduation_year?: string | null
          id?: string
          job_title?: string | null
          known_languages?: string[] | null
          level?: string | null
          linkedin?: string | null
          name?: string
          native_language?: string | null
          phone?: string | null
          portfolio?: string | null
          preferred_language?: string | null
          preferred_stack?: string | null
          state?: string | null
          tenth_percent?: string | null
          twelfth_percent?: string | null
          updated_at?: string
          user_id?: string
          years_of_experience?: string | null
        }
        Relationships: []
      }
      progress: {
        Row: {
          completed_at: string
          course_id: string
          id: string
          student_id: string
          topic_id: string
        }
        Insert: {
          completed_at?: string
          course_id: string
          id?: string
          student_id: string
          topic_id: string
        }
        Update: {
          completed_at?: string
          course_id?: string
          id?: string
          student_id?: string
          topic_id?: string
        }
        Relationships: []
      }
      student_certifications: {
        Row: {
          created_at: string
          id: string
          issuer: string | null
          name: string
          tech_stack: string | null
          user_id: string
          year: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          issuer?: string | null
          name?: string
          tech_stack?: string | null
          user_id: string
          year?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          issuer?: string | null
          name?: string
          tech_stack?: string | null
          user_id?: string
          year?: string | null
        }
        Relationships: []
      }
      student_internships: {
        Row: {
          company: string | null
          created_at: string
          description: string | null
          duration: string | null
          id: string
          role_title: string | null
          tech_stack: string | null
          user_id: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          description?: string | null
          duration?: string | null
          id?: string
          role_title?: string | null
          tech_stack?: string | null
          user_id: string
        }
        Update: {
          company?: string | null
          created_at?: string
          description?: string | null
          duration?: string | null
          id?: string
          role_title?: string | null
          tech_stack?: string | null
          user_id?: string
        }
        Relationships: []
      }
      student_projects: {
        Row: {
          created_at: string
          description: string | null
          id: string
          tech_stack: string | null
          title: string | null
          url: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          tech_stack?: string | null
          title?: string | null
          url?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          tech_stack?: string | null
          title?: string | null
          url?: string | null
          user_id?: string
        }
        Relationships: []
      }
      student_skills: {
        Row: {
          conceptual: number | null
          created_at: string
          handson: number | null
          id: string
          name: string
          user_id: string
        }
        Insert: {
          conceptual?: number | null
          created_at?: string
          handson?: number | null
          id?: string
          name: string
          user_id: string
        }
        Update: {
          conceptual?: number | null
          created_at?: string
          handson?: number | null
          id?: string
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      student_university: {
        Row: {
          created_at: string
          department: string | null
          id: string
          program_type: string | null
          specialization: string | null
          student_id: string | null
          user_id: string
          year: string | null
        }
        Insert: {
          created_at?: string
          department?: string | null
          id?: string
          program_type?: string | null
          specialization?: string | null
          student_id?: string | null
          user_id: string
          year?: string | null
        }
        Update: {
          created_at?: string
          department?: string | null
          id?: string
          program_type?: string | null
          specialization?: string | null
          student_id?: string | null
          user_id?: string
          year?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      refresh_enrollment_statuses: { Args: never; Returns: undefined }
    }
    Enums: {
      app_role: "admin" | "student"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "student"],
    },
  },
} as const
