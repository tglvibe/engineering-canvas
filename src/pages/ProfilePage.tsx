import { useState } from "react";
import { motion } from "framer-motion";
import { User, Github, Linkedin, Globe, GraduationCap, Award, Briefcase, Code2, Save, CheckCircle, BarChart3, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AppHeader from "@/components/AppHeader";

const allSkills = ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust", "React", "Vue", "Angular", "Node.js", "Django", "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "GCP", "Azure", "GraphQL", "REST", "gRPC", "Kafka", "RabbitMQ"];

export default function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    name: user?.name || "",
    linkedin: user?.linkedin || "",
    github: user?.github || "",
    portfolio: user?.portfolio || "",
    college: user?.college || "",
    cgpa: user?.cgpa || "",
    graduationYear: user?.graduationYear || "",
    skills: user?.skills || [],
    certifications: user?.certifications || [],
    internships: user?.internships || [],
    preferredLanguage: user?.preferredLanguage || "",
    preferredStack: user?.preferredStack || "",
  });

  const [newCert, setNewCert] = useState("");
  const [newInternship, setNewInternship] = useState("");

  if (!user) { navigate("/login"); return null; }

  const handleSave = () => {
    updateProfile(form);
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleSkill = (skill: string) => {
    setForm(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) ? prev.skills.filter(s => s !== skill) : [...prev.skills, skill],
    }));
  };

  const addCert = () => {
    if (newCert.trim()) {
      setForm(prev => ({ ...prev, certifications: [...prev.certifications, newCert.trim()] }));
      setNewCert("");
    }
  };

  const addInternship = () => {
    if (newInternship.trim()) {
      setForm(prev => ({ ...prev, internships: [...prev.internships, newInternship.trim()] }));
      setNewInternship("");
    }
  };

  const Field = ({ label, value, field, icon: Icon, placeholder }: { label: string; value: string; field: string; icon: any; placeholder: string }) => (
    <div>
      <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5"><Icon className="w-3 h-3" /> {label}</label>
      {editing ? (
        <input
          value={value}
          onChange={e => setForm(prev => ({ ...prev, [field]: e.target.value }))}
          className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all"
          placeholder={placeholder}
        />
      ) : (
        <p className="text-sm text-foreground py-2.5 px-3 rounded-lg bg-secondary/50">{value || <span className="text-muted-foreground italic">Not set</span>}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title="Profile" backTo="/tracks" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-20">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground text-xl sm:text-2xl font-bold shrink-0">
              {user.avatar}
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold text-foreground truncate">{user.name}</h1>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary">{user.level}</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-muted-foreground">{user.goal}</span>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
            <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 p-3 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-sm text-foreground">
              <BarChart3 className="w-4 h-4 text-primary" /> Dashboard
            </button>
            <button onClick={() => navigate("/tracks")} className="flex items-center gap-2 p-3 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-sm text-foreground">
              <BookOpen className="w-4 h-4 text-primary" /> My Tracks
            </button>
          </div>

          {/* Edit toggle */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-foreground">Personal Details</h2>
            <div className="flex items-center gap-2">
              {saved && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-primary flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Saved
                </motion.span>
              )}
              {editing ? (
                <button onClick={handleSave} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-brand text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity">
                  <Save className="w-3 h-3" /> Save
                </button>
              ) : (
                <button onClick={() => setEditing(true)} className="px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-foreground hover:bg-secondary transition-colors">
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          <div className="space-y-6">
            {/* Basic info */}
            <div className="rounded-xl border border-border bg-card p-4 space-y-3">
              <Field label="Full Name" value={form.name} field="name" icon={User} placeholder="Your full name" />
              <Field label="LinkedIn" value={form.linkedin} field="linkedin" icon={Linkedin} placeholder="linkedin.com/in/yourname" />
              <Field label="GitHub" value={form.github} field="github" icon={Github} placeholder="github.com/yourname" />
              <Field label="Portfolio" value={form.portfolio} field="portfolio" icon={Globe} placeholder="yourportfolio.com" />
            </div>

            {/* Academic */}
            <div className="rounded-xl border border-border bg-card p-4 space-y-3">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5" /> Academic</h3>
              <Field label="College / University" value={form.college} field="college" icon={GraduationCap} placeholder="Your college" />
              <div className="grid grid-cols-2 gap-3">
                <Field label="CGPA / GPA" value={form.cgpa} field="cgpa" icon={Award} placeholder="e.g. 8.5" />
                <Field label="Graduation Year" value={form.graduationYear} field="graduationYear" icon={GraduationCap} placeholder="e.g. 2024" />
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mb-3"><Code2 className="w-3.5 h-3.5" /> Skills</h3>
              <div className="flex flex-wrap gap-1.5">
                {allSkills.map(skill => (
                  <button
                    key={skill}
                    onClick={() => editing && toggleSkill(skill)}
                    className={`px-2 py-1 rounded-md text-xs font-medium border transition-all ${
                      form.skills.includes(skill)
                        ? "border-primary bg-primary/5 text-primary"
                        : editing ? "border-border text-muted-foreground hover:border-primary/30 cursor-pointer" : "border-border text-muted-foreground/50"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="rounded-xl border border-border bg-card p-4 space-y-3">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Learning Preferences</h3>
              <Field label="Preferred Language" value={form.preferredLanguage} field="preferredLanguage" icon={Code2} placeholder="e.g. TypeScript" />
              <Field label="Preferred Stack" value={form.preferredStack} field="preferredStack" icon={Code2} placeholder="e.g. Node.js + PostgreSQL" />
            </div>

            {/* Certifications */}
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mb-3"><Award className="w-3.5 h-3.5" /> Certifications</h3>
              <div className="space-y-2">
                {form.certifications.map((c, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg bg-secondary/50">
                    <span className="text-sm text-foreground">{c}</span>
                    {editing && (
                      <button onClick={() => setForm(prev => ({ ...prev, certifications: prev.certifications.filter((_, j) => j !== i) }))} className="text-xs text-destructive">Remove</button>
                    )}
                  </div>
                ))}
                {editing && (
                  <div className="flex gap-2">
                    <input value={newCert} onChange={e => setNewCert(e.target.value)} placeholder="Add certification..." className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/20" onKeyDown={e => e.key === "Enter" && addCert()} />
                    <button onClick={addCert} className="px-3 py-2 rounded-lg bg-primary/10 text-primary text-xs font-medium">Add</button>
                  </div>
                )}
              </div>
            </div>

            {/* Internships */}
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mb-3"><Briefcase className="w-3.5 h-3.5" /> Internships & Experience</h3>
              <div className="space-y-2">
                {form.internships.map((internship, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg bg-secondary/50">
                    <span className="text-sm text-foreground">{internship}</span>
                    {editing && (
                      <button onClick={() => setForm(prev => ({ ...prev, internships: prev.internships.filter((_, j) => j !== i) }))} className="text-xs text-destructive">Remove</button>
                    )}
                  </div>
                ))}
                {editing && (
                  <div className="flex gap-2">
                    <input value={newInternship} onChange={e => setNewInternship(e.target.value)} placeholder="Add experience..." className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/20" onKeyDown={e => e.key === "Enter" && addInternship()} />
                    <button onClick={addInternship} className="px-3 py-2 rounded-lg bg-primary/10 text-primary text-xs font-medium">Add</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
