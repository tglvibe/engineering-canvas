import { Course, CategoryId } from '../hierarchy';

export interface CourseModule {
  id: string;
  titleKey: string;
  descriptionKey: string;
  sequenceNumber: number;
  estimatedHours: number;
  topics: string[];
  prerequisiteModuleIds: string[];
  outcomesKeys: string[];
}

// ---------------------------------------------------------
// Deep Content Nested Types
// ---------------------------------------------------------

export interface VideoResource {
  type: "public" | "platform";
  titleKey: string;
  authorKey: string;
  durationKey: string;
  viewsKey: string;
  isPremium?: boolean;
  url?: string;
}

export interface MOOCReference {
  platform: string;
  rating: number;
  titleKey: string;
  instructorKey: string;
  enrolledKey: string;
  durationKey: string;
  url?: string;
}

export interface BlogOrDoc {
  type: string;
  titleKey: string;
  publisherKey: string;
  readTimeKey: string;
  url?: string;
}

export interface ScenarioProblem {
  id: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Expert";
  titleKey: string;
  categoryKey: string;
  estimatedTimeKey: string;
  // Deep problem framework requirements
  scenarioDescriptionKey: string;
  problemAnalysisKey: string;
  architectureLayersKeys: string[];
  toolsAndTech: { nameKey: string; justificationKey: string }[];
  tradeOffsKeys: string[];
  nfrConsiderationsKeys: string[];
  kpisKeys: string[];
  keyInsightsKey: string;
}

export interface CodeLanguageSnippet {
  language: string;
  code: string;
}

export interface CodePlayground {
  titleKey: string;
  descriptionKey?: string;
  examples: CodeLanguageSnippet[];
}

export interface GitFile {
  name: string;
  type: "folder" | "file";
  children?: GitFile[];
  contentKey?: string;
}

export interface GitSimulation {
  branchName: string;
  files: GitFile[];
  commitMessageKey?: string;
  activeFileSnippet?: {
    filename: string;
    codeKey: string;
  };
}

export interface CommunitySolution {
  authorInitials: string;
  authorName: string;
  badgeKey: "Top Solution" | string;
  roleKey: string;
  levelKey: string;
  timeAgoKey: string;
  upvotes: number;
  comments: number;
  contentKey?: string;
}

export interface CommunitySection {
  aiSummaryKey: string;
  solutions: CommunitySolution[];
}

// ---------------------------------------------------------
// Core Hierarchical Types
// ---------------------------------------------------------

export interface CourseTopic {
  id: string;
  titleKey: string;
  moduleId: string;
  sequenceNumber: number;
  estimatedMinutes: number;

  // Core Learning Content
  whatKey: string;
  whyKey: string;
  whenKey: string;
  howKey: string;

  // Real-world Context
  ecosystemKey: string;
  realWorldKey: string;
  useCasesKeys: string[];
  advantagesKeys: string[];
  disadvantagesKeys: string[];

  // Career Readiness
  interviewTipKey: string;
  resumeBulletKey: string;

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
    titleKey: string;
    code: string;
    outputKey: string;
    explanationKey: string;
  }[];
}

export interface CapstoneStep {
  sequenceNumber?: number;
  titleKey: string;
  descriptionKey?: string;
  objectiveKey?: string;
  skillsKeys?: string[];
  status?: "Done" | "In Progress" | "Not Started";
}

export interface CapstoneProjectDeep {
  titleKey: string;
  descriptionKey: string;
  estimatedDays: number;
  skillsFocusedKeys: string[];
  steps: CapstoneStep[];
}

export interface CourseEnhanced extends Course {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
  durationKey: string;
  languagesKeys: string[];
  category: CategoryId;
  programIds: string[];
  roleIds?: string[]; // New mapping explicitly bounding courses to roles

  modules: CourseModule[];
  topics: CourseTopic[];

  level: "beginner" | "intermediate" | "advanced";
  prerequisitesKeys: string[];
  targetAudienceKey: string;
  learningOutcomesKeys: string[];

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
