import { Course, CategoryId } from '../hierarchy';

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  sequenceNumber: number;
  estimatedHours: number;
  topics: string[];
  prerequisiteModuleIds: string[];
  outcomes: string[];
}

// ---------------------------------------------------------
// Deep Content Nested Types
// ---------------------------------------------------------

export interface VideoResource {
  type: "public" | "platform";
  title: string;
  author: string;
  duration: string;
  views: string;
  isPremium?: boolean;
  url?: string;
}

export interface MOOCReference {
  platform: string;
  rating: number;
  title: string;
  instructor: string;
  enrolled: string;
  duration: string;
  url?: string;
}

export interface BlogOrDoc {
  type: string;
  title: string;
  publisher: string;
  readTime: string;
  url?: string;
}

export interface ScenarioProblem {
  id: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Expert";
  title: string;
  category: string;
  estimatedTime: string;
  // Deep problem framework requirements
  scenarioDescription: string;
  problemAnalysis: string;
  architectureLayers: string[];
  toolsAndTech: { name: string; justification: string }[];
  tradeOffs: string[];
  nfrConsiderations: string[];
  kpis: string[];
  keyInsights: string;
}

export interface CodeLanguageSnippet {
  language: string;
  code: string;
}

export interface CodePlayground {
  title: string;
  description?: string;
  examples: CodeLanguageSnippet[];
}

export interface GitFile {
  name: string;
  type: "folder" | "file";
  children?: GitFile[];
  content?: string;
}

export interface GitSimulation {
  branchName: string;
  files: GitFile[];
  commitMessage?: string;
  activeFileSnippet?: {
    filename: string;
    code: string;
  };
}

export interface CommunitySolution {
  authorInitials: string;
  authorName: string;
  badge: "Top Solution" | string;
  role: string;
  level: "Advanced" | "Expert" | "Intermediate" | "Beginner";
  timeAgo: string;
  upvotes: number;
  comments: number;
  content?: string;
}

export interface CommunitySection {
  aiSummary: string;
  solutions: CommunitySolution[];
}

// ---------------------------------------------------------
// Core Hierarchical Types
// ---------------------------------------------------------

export interface CourseTopic {
  id: string;
  title: string;
  moduleId: string;
  sequenceNumber: number;
  estimatedMinutes: number;

  // Core Learning Content
  what: string;
  why: string;
  when: string;
  how: string;

  // Real-world Context
  ecosystem: string;
  realWorld: string;
  useCases: string[];
  advantages: string[];
  disadvantages: string[];

  // Career Readiness
  interviewTip: string;
  resumeBullet: string;

  // NEW MASSIVE DEPTH FIELDS
  videos?: VideoResource[];
  moocs?: MOOCReference[];
  blogs?: BlogOrDoc[];
  scenarios?: ScenarioProblem[];
  playgrounds?: CodePlayground[];
  gitSimulation?: GitSimulation;
  community?: CommunitySection;

  // Legacy fallback
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
    output: string;
    explanation: string;
  }[];
}

export interface CapstoneStep {
  sequenceNumber?: number;
  title: string;
  description?: string;
  objective?: string;
  skills?: string[];
  status?: "Done" | "In Progress" | "Not Started";
}

export interface CapstoneProjectDeep {
  title: string;
  description: string;
  estimatedDays: number;
  skillsFocused: string[];
  steps: CapstoneStep[];
}

export interface CourseEnhanced extends Course {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
  duration: string;
  languages: string[];
  category: CategoryId;
  programIds: string[];
  roleIds?: string[]; // New mapping explicitly bounding courses to roles

  modules: CourseModule[];
  topics: CourseTopic[];

  level: "beginner" | "intermediate" | "advanced";
  prerequisites: string[];
  targetAudience: string;
  learningOutcomes: string[];

  videoCount: number;
  articleCount: number;
  problemCount: number;

  capstoneProject?: CapstoneProjectDeep;

  totalEstimatedHours: number;
  estimatedCompletionDays: number;

  createdAt: string;
  updatedAt: string;
  version: string;
  status: "draft" | "published" | "archived";
}
