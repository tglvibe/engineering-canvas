import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // Guard: Only allow seeding if no admin exists yet
    const { data: existingAdmins } = await supabase
      .from("user_roles")
      .select("id")
      .eq("role", "admin")
      .limit(1);

    if (existingAdmins && existingAdmins.length > 0) {
      return new Response(JSON.stringify({ error: "Admin already exists. Seed is disabled." }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const results: string[] = [];

    // 1. Create admin user
    const { data: adminData, error: adminError } = await supabase.auth.admin.createUser({
      email: "admin@talenciaglobal.com",
      password: "admin1234",
      email_confirm: true,
      user_metadata: { name: "Super Admin" },
    });

    if (adminError && !adminError.message.includes("already been registered")) {
      results.push(`Admin error: ${adminError.message}`);
    } else if (adminData?.user) {
      await supabase.from("user_roles").upsert({
        user_id: adminData.user.id,
        role: "admin",
      }, { onConflict: "user_id,role" });
      await supabase.from("profiles").update({ name: "Super Admin" }).eq("user_id", adminData.user.id);
      results.push(`Admin created: ${adminData.user.id}`);
    } else {
      const { data: existingUsers } = await supabase.auth.admin.listUsers();
      const adminUser = existingUsers?.users?.find(u => u.email === "admin@talenciaglobal.com");
      if (adminUser) {
        await supabase.from("user_roles").upsert({
          user_id: adminUser.id,
          role: "admin",
        }, { onConflict: "user_id,role" });
        results.push(`Admin role updated: ${adminUser.id}`);
      }
    }

    // 2. Create demo student
    const { data: demoData, error: demoError } = await supabase.auth.admin.createUser({
      email: "demo@talenciaglobal.com",
      password: "demo1234",
      email_confirm: true,
      user_metadata: { name: "Arjun Mehta" },
    });

    if (demoError && !demoError.message.includes("already been registered")) {
      results.push(`Demo error: ${demoError.message}`);
    } else if (demoData?.user) {
      await supabase.from("profiles").update({
        name: "Arjun Mehta",
        avatar: "AM",
      }).eq("user_id", demoData.user.id);

      await supabase.from("student_university").upsert({
        user_id: demoData.user.id,
        year: "Year 3",
        program_type: "B.Tech Regular",
        department: "CSE",
        specialization: "Full Stack Development",
        student_id: "TGL2024001",
      }, { onConflict: "user_id" });

      const enrollments = [
        { student_id: demoData.user.id, type: "program", target_id: "backend-mastery", enrolled_by: demoData.user.id },
        { student_id: demoData.user.id, type: "program", target_id: "frontend-mastery", enrolled_by: demoData.user.id },
        { student_id: demoData.user.id, type: "program", target_id: "ai-engineering", enrolled_by: demoData.user.id },
      ];

      for (const enr of enrollments) {
        await supabase.from("enrollments").insert({
          ...enr,
          start_date: "2024-01-01T00:00:00.000Z",
          expiry_date: "2027-12-31T23:59:59.000Z",
          status: "active",
        });
      }

      results.push(`Demo student created: ${demoData.user.id}`);
    } else {
      results.push("Demo student already exists");
    }

    return new Response(JSON.stringify({ success: true, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
