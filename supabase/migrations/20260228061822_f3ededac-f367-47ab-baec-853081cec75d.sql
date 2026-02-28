
-- ============================================
-- TALENCIA GLOBAL LMS — Complete Database Schema
-- ============================================

-- 1. Role enum and user_roles table
CREATE TYPE public.app_role AS ENUM ('admin', 'student');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'student',
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can read own roles" ON public.user_roles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage all roles" ON public.user_roles FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- 2. Profiles table (current_role renamed to job_title to avoid reserved word)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  name TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  phone TEXT DEFAULT '',
  date_of_birth DATE,
  gender TEXT DEFAULT '',
  city TEXT DEFAULT '',
  state TEXT DEFAULT '',
  country TEXT DEFAULT '',
  native_language TEXT DEFAULT '',
  known_languages TEXT[] DEFAULT '{}',
  avatar TEXT DEFAULT '',
  linkedin TEXT DEFAULT '',
  github TEXT DEFAULT '',
  portfolio TEXT DEFAULT '',
  college TEXT DEFAULT '',
  degree TEXT DEFAULT '',
  branch TEXT DEFAULT '',
  cgpa TEXT DEFAULT '',
  graduation_year TEXT DEFAULT '',
  tenth_percent TEXT DEFAULT '',
  twelfth_percent TEXT DEFAULT '',
  job_title TEXT DEFAULT '',
  years_of_experience TEXT DEFAULT '',
  company TEXT DEFAULT '',
  level TEXT DEFAULT '',
  goal TEXT DEFAULT '',
  preferred_language TEXT DEFAULT '',
  preferred_stack TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can read all profiles" ON public.profiles FOR SELECT USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage all profiles" ON public.profiles FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- 3. University profile
CREATE TABLE public.student_university (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  year TEXT DEFAULT 'Year 1',
  program_type TEXT DEFAULT 'B.Tech Regular',
  department TEXT DEFAULT '',
  specialization TEXT DEFAULT '',
  student_id TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.student_university ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own university" ON public.student_university FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own university" ON public.student_university FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own university" ON public.student_university FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can manage university" ON public.student_university FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- 4. Skills
CREATE TABLE public.student_skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  conceptual INTEGER DEFAULT 5 CHECK (conceptual >= 1 AND conceptual <= 10),
  handson INTEGER DEFAULT 5 CHECK (handson >= 1 AND handson <= 10),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, name)
);
ALTER TABLE public.student_skills ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own skills" ON public.student_skills FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Admins can read all skills" ON public.student_skills FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

-- 5. Certifications
CREATE TABLE public.student_certifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL DEFAULT '',
  issuer TEXT DEFAULT '',
  year TEXT DEFAULT '',
  tech_stack TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.student_certifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own certs" ON public.student_certifications FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Admins can read all certs" ON public.student_certifications FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

-- 6. Internships
CREATE TABLE public.student_internships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  company TEXT DEFAULT '',
  role_title TEXT DEFAULT '',
  duration TEXT DEFAULT '',
  tech_stack TEXT DEFAULT '',
  description TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.student_internships ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own internships" ON public.student_internships FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Admins can read all internships" ON public.student_internships FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

-- 7. Projects
CREATE TABLE public.student_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT DEFAULT '',
  description TEXT DEFAULT '',
  tech_stack TEXT DEFAULT '',
  url TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.student_projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own projects" ON public.student_projects FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Admins can read all projects" ON public.student_projects FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

-- 8. Enrollments
CREATE TABLE public.enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('track', 'program', 'course')),
  target_id TEXT NOT NULL,
  start_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  expiry_date TIMESTAMPTZ NOT NULL,
  enrolled_by UUID REFERENCES auth.users(id) NOT NULL,
  enrolled_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'expired', 'unenrolled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students can read own enrollments" ON public.enrollments FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Admins can manage all enrollments" ON public.enrollments FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- 9. Progress
CREATE TABLE public.progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id TEXT NOT NULL,
  topic_id TEXT NOT NULL,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(student_id, course_id, topic_id)
);
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students can manage own progress" ON public.progress FOR ALL USING (auth.uid() = student_id);
CREATE POLICY "Admins can read all progress" ON public.progress FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

-- 10. Activity logs
CREATE TABLE public.activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  action TEXT NOT NULL,
  target_id TEXT,
  duration INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students can manage own activity" ON public.activity_logs FOR ALL USING (auth.uid() = student_id);
CREATE POLICY "Admins can read all activity" ON public.activity_logs FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

-- 11. Auto-create profile + role on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, name, email, avatar)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', ''),
    NEW.email,
    UPPER(LEFT(COALESCE(NEW.raw_user_meta_data->>'name', 'U'), 2))
  );
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'student');
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 12. Updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 13. Auto-expire enrollments
CREATE OR REPLACE FUNCTION public.refresh_enrollment_statuses()
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  UPDATE public.enrollments SET status = 'expired'
  WHERE status = 'active' AND expiry_date < now();
END;
$$;
