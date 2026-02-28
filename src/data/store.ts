// ============================================
// TALENCIA Global — Frontend Data Store
// All data persisted in localStorage
// ============================================

export type UserRole = "admin" | "student";

export interface UniversityProfile {
  year: "Year 1" | "Year 2" | "Year 3" | "Year 4";
  programType: "B.Tech Regular" | "B.Tech Integrated" | "M.Tech Regular" | "M.Tech Integrated";
  department: string;
  specialization: string;
  studentId: string;
}

export interface StoredUser {
  id: string;
  role: UserRole;
  name: string;
  email: string;
  password: string; // stored locally only
  avatar: string;
  createdAt: string;
  university?: UniversityProfile;
  // student profile data (optional, filled during onboarding)
  phone?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface Enrollment {
  id: string;
  studentId: string;
  type: "track" | "program" | "course";
  targetId: string; // trackId, programId, or courseId
  startDate: string; // ISO
  expiryDate: string; // ISO
  enrolledBy: string; // admin userId
  enrolledAt: string; // ISO
  status: "active" | "expired" | "unenrolled";
}

export interface ProgressRecord {
  studentId: string;
  courseId: string;
  topicId: string;
  completedAt: string;
}

export interface ActivityLog {
  id: string;
  studentId: string;
  action: string;
  targetId?: string;
  timestamp: string;
  duration?: number; // seconds
}

// ============================================
// CONSTANTS
// ============================================
export const DEPARTMENTS = [
  "CSE",
  "AI & ML",
  "ECE",
  "Cybersecurity",
  "Robotics",
  "Data Science",
  "Information Technology",
  "Mechanical Engineering",
  "Electrical Engineering",
];

export const SPECIALIZATIONS: Record<string, string[]> = {
  "CSE": ["Full Stack Development", "Cloud Computing", "Software Engineering", "Systems Programming"],
  "AI & ML": ["Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning"],
  "ECE": ["Embedded Systems", "VLSI Design", "Signal Processing", "IoT"],
  "Cybersecurity": ["Network Security", "Ethical Hacking", "Cryptography", "Digital Forensics"],
  "Robotics": ["Autonomous Systems", "Robot Perception", "Control Systems", "Human-Robot Interaction"],
  "Data Science": ["Big Data Analytics", "Statistical Modeling", "Data Engineering", "Business Intelligence"],
  "Information Technology": ["Web Technologies", "Database Administration", "IT Infrastructure", "DevOps"],
  "Mechanical Engineering": ["CAD/CAM", "Thermal Engineering", "Manufacturing", "Mechatronics"],
  "Electrical Engineering": ["Power Systems", "Control Engineering", "Microelectronics", "Renewable Energy"],
};

export const YEARS = ["Year 1", "Year 2", "Year 3", "Year 4"] as const;
export const PROGRAM_TYPES = ["B.Tech Regular", "B.Tech Integrated", "M.Tech Regular", "M.Tech Integrated"] as const;

// ============================================
// STORAGE KEYS
// ============================================
const KEYS = {
  USERS: "tgl_users",
  ENROLLMENTS: "tgl_enrollments",
  PROGRESS: "tgl_progress",
  ACTIVITY: "tgl_activity",
  ADMIN_PASSWORD: "tgl_admin_pwd",
  CURRENT_USER: "tgl_current_user",
} as const;

// ============================================
// DEFAULT ADMIN
// ============================================
const DEFAULT_ADMIN: StoredUser = {
  id: "admin-001",
  role: "admin",
  name: "Super Admin",
  email: "admin@talenciaglobal.com",
  password: "admin1234",
  avatar: "SA",
  createdAt: new Date().toISOString(),
};

// ============================================
// DEMO STUDENT (pre-enrolled sample)
// ============================================
const DEMO_STUDENT: StoredUser = {
  id: "student-demo",
  role: "student",
  name: "Arjun Mehta",
  email: "demo@talenciaglobal.com",
  password: "demo1234",
  avatar: "AM",
  createdAt: new Date().toISOString(),
  university: {
    year: "Year 3",
    programType: "B.Tech Regular",
    department: "CSE",
    specialization: "Full Stack Development",
    studentId: "TGL2024001",
  },
};

// Pre-enroll demo student in some courses
const DEMO_ENROLLMENTS: Enrollment[] = [
  {
    id: "enr-demo-1",
    studentId: "student-demo",
    type: "program",
    targetId: "backend-mastery",
    startDate: "2024-01-01T00:00:00.000Z",
    expiryDate: "2027-12-31T23:59:59.000Z",
    enrolledBy: "admin-001",
    enrolledAt: "2024-01-01T00:00:00.000Z",
    status: "active",
  },
  {
    id: "enr-demo-2",
    studentId: "student-demo",
    type: "program",
    targetId: "frontend-mastery",
    startDate: "2024-01-01T00:00:00.000Z",
    expiryDate: "2027-12-31T23:59:59.000Z",
    enrolledBy: "admin-001",
    enrolledAt: "2024-01-01T00:00:00.000Z",
    status: "active",
  },
  {
    id: "enr-demo-3",
    studentId: "student-demo",
    type: "program",
    targetId: "ai-engineering",
    startDate: "2024-01-01T00:00:00.000Z",
    expiryDate: "2027-12-31T23:59:59.000Z",
    enrolledBy: "admin-001",
    enrolledAt: "2024-01-01T00:00:00.000Z",
    status: "active",
  },
];

// ============================================
// GENERIC HELPERS
// ============================================
function getStore<T>(key: string, fallback: T[]): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function setStore<T>(key: string, data: T[]) {
  localStorage.setItem(key, JSON.stringify(data));
}

function generateId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

// ============================================
// INITIALIZATION
// ============================================
export function initializeStore() {
  const users = getStore<StoredUser>(KEYS.USERS, []);
  if (users.length === 0) {
    setStore(KEYS.USERS, [DEFAULT_ADMIN, DEMO_STUDENT]);
    setStore(KEYS.ENROLLMENTS, DEMO_ENROLLMENTS);
    setStore(KEYS.PROGRESS, []);
    setStore(KEYS.ACTIVITY, []);
  } else {
    // Ensure admin exists
    if (!users.find(u => u.role === "admin")) {
      setStore(KEYS.USERS, [DEFAULT_ADMIN, ...users]);
    }
    // Ensure demo student exists
    if (!users.find(u => u.id === "student-demo")) {
      setStore(KEYS.USERS, [...getStore<StoredUser>(KEYS.USERS, []), DEMO_STUDENT]);
      const enrollments = getStore<Enrollment>(KEYS.ENROLLMENTS, []);
      const demoEnrExists = enrollments.some(e => e.studentId === "student-demo");
      if (!demoEnrExists) {
        setStore(KEYS.ENROLLMENTS, [...enrollments, ...DEMO_ENROLLMENTS]);
      }
    }
  }
}

// ============================================
// USER CRUD
// ============================================
export function getAllUsers(): StoredUser[] {
  return getStore<StoredUser>(KEYS.USERS, []);
}

export function getStudents(): StoredUser[] {
  return getAllUsers().filter(u => u.role === "student");
}

export function getUserById(id: string): StoredUser | undefined {
  return getAllUsers().find(u => u.id === id);
}

export function getUserByEmail(email: string): StoredUser | undefined {
  return getAllUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}

export function authenticateUser(email: string, password: string): StoredUser | null {
  const user = getUserByEmail(email);
  if (user && user.password === password) return user;
  return null;
}

export function createStudent(data: Omit<StoredUser, "id" | "role" | "avatar" | "createdAt">): StoredUser {
  const student: StoredUser = {
    ...data,
    id: generateId("student"),
    role: "student",
    avatar: data.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2),
    createdAt: new Date().toISOString(),
  };
  const users = getAllUsers();
  if (users.find(u => u.email.toLowerCase() === data.email.toLowerCase())) {
    throw new Error("Email already exists");
  }
  setStore(KEYS.USERS, [...users, student]);
  return student;
}

export function updateStudent(id: string, updates: Partial<StoredUser>): StoredUser | null {
  const users = getAllUsers();
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...updates };
  if (updates.name) {
    users[idx].avatar = updates.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
  }
  setStore(KEYS.USERS, users);
  return users[idx];
}

export function deleteStudent(id: string): boolean {
  const users = getAllUsers();
  const filtered = users.filter(u => u.id !== id || u.role === "admin");
  if (filtered.length === users.length) return false;
  setStore(KEYS.USERS, filtered);
  // Also remove enrollments and progress
  const enrollments = getAllEnrollments().filter(e => e.studentId !== id);
  setStore(KEYS.ENROLLMENTS, enrollments);
  const progress = getAllProgress().filter(p => p.studentId !== id);
  setStore(KEYS.PROGRESS, progress);
  return true;
}

export function updateAdminPassword(newPassword: string) {
  const users = getAllUsers();
  const admin = users.find(u => u.role === "admin");
  if (admin) {
    admin.password = newPassword;
    setStore(KEYS.USERS, users);
  }
}

// ============================================
// ENROLLMENT CRUD
// ============================================
export function getAllEnrollments(): Enrollment[] {
  return getStore<Enrollment>(KEYS.ENROLLMENTS, []);
}

export function getStudentEnrollments(studentId: string): Enrollment[] {
  return getAllEnrollments().filter(e => e.studentId === studentId);
}

export function getActiveEnrollments(studentId: string): Enrollment[] {
  const now = new Date();
  return getStudentEnrollments(studentId).filter(e => {
    if (e.status === "unenrolled") return false;
    if (new Date(e.expiryDate) < now) {
      // Auto-expire
      e.status = "expired";
      return false;
    }
    if (new Date(e.startDate) > now) return false;
    return e.status === "active";
  });
}

export function createEnrollment(data: Omit<Enrollment, "id" | "enrolledAt" | "status">): Enrollment {
  const enrollment: Enrollment = {
    ...data,
    id: generateId("enr"),
    enrolledAt: new Date().toISOString(),
    status: "active",
  };
  const enrollments = getAllEnrollments();
  setStore(KEYS.ENROLLMENTS, [...enrollments, enrollment]);
  return enrollment;
}

export function unenroll(enrollmentId: string): boolean {
  const enrollments = getAllEnrollments();
  const idx = enrollments.findIndex(e => e.id === enrollmentId);
  if (idx === -1) return false;
  enrollments[idx].status = "unenrolled";
  setStore(KEYS.ENROLLMENTS, enrollments);
  return true;
}

export function refreshEnrollmentStatuses() {
  const now = new Date();
  const enrollments = getAllEnrollments();
  let changed = false;
  enrollments.forEach(e => {
    if (e.status === "active" && new Date(e.expiryDate) < now) {
      e.status = "expired";
      changed = true;
    }
  });
  if (changed) setStore(KEYS.ENROLLMENTS, enrollments);
}

// ============================================
// PROGRESS
// ============================================
export function getAllProgress(): ProgressRecord[] {
  return getStore<ProgressRecord>(KEYS.PROGRESS, []);
}

export function getStudentProgress(studentId: string): ProgressRecord[] {
  return getAllProgress().filter(p => p.studentId === studentId);
}

export function markTopicComplete(studentId: string, courseId: string, topicId: string) {
  const progress = getAllProgress();
  const exists = progress.find(p => p.studentId === studentId && p.courseId === courseId && p.topicId === topicId);
  if (!exists) {
    progress.push({ studentId, courseId, topicId, completedAt: new Date().toISOString() });
    setStore(KEYS.PROGRESS, progress);
  }
}

// ============================================
// ACTIVITY LOGS
// ============================================
export function getAllActivity(): ActivityLog[] {
  return getStore<ActivityLog>(KEYS.ACTIVITY, []);
}

export function getStudentActivity(studentId: string): ActivityLog[] {
  return getAllActivity().filter(a => a.studentId === studentId);
}

export function logActivity(studentId: string, action: string, targetId?: string, duration?: number) {
  const logs = getAllActivity();
  logs.push({
    id: generateId("log"),
    studentId,
    action,
    targetId,
    timestamp: new Date().toISOString(),
    duration,
  });
  // Keep last 1000 logs
  if (logs.length > 1000) logs.splice(0, logs.length - 1000);
  setStore(KEYS.ACTIVITY, logs);
}

// ============================================
// ANALYTICS HELPERS
// ============================================
export function getAnalytics() {
  const students = getStudents();
  const enrollments = getAllEnrollments();
  const progress = getAllProgress();

  refreshEnrollmentStatuses();

  const activeEnrollments = enrollments.filter(e => e.status === "active");
  const expiredEnrollments = enrollments.filter(e => e.status === "expired");

  // Year distribution
  const yearDist: Record<string, number> = {};
  students.forEach(s => {
    const year = s.university?.year || "Unknown";
    yearDist[year] = (yearDist[year] || 0) + 1;
  });

  // Department distribution
  const deptDist: Record<string, number> = {};
  students.forEach(s => {
    const dept = s.university?.department || "Unknown";
    deptDist[dept] = (deptDist[dept] || 0) + 1;
  });

  // Program type distribution
  const progTypeDist: Record<string, number> = {};
  students.forEach(s => {
    const pt = s.university?.programType || "Unknown";
    progTypeDist[pt] = (progTypeDist[pt] || 0) + 1;
  });

  return {
    totalStudents: students.length,
    activeEnrollments: activeEnrollments.length,
    expiredEnrollments: expiredEnrollments.length,
    totalProgress: progress.length,
    yearDistribution: yearDist,
    departmentDistribution: deptDist,
    programTypeDistribution: progTypeDist,
  };
}
