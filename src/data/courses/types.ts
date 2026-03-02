import { Course, CategoryId } from '../hierarchy';

export interface CourseModule {
  id: string;
  titleKey?: string;
  title?: string;
  descriptionKey?: string;
  description?: string;
  sequenceNumber: number;
  estimatedHours: number;
  topics: string[];
  prerequisiteModuleIds: string[];
  outcomesKeys?: string[];
  outcomes?: string[];
}

// ---------------------------------------------------------
// Deep Content Nested Types
// ---------------------------------------------------------

export interface VideoResource {
  type: "public" | "platform";
  titleKey?: string;
  title?: string;
  authorKey?: string;
  author?: string;
  durationKey?: string;
  duration?: string;
  viewsKey?: string;
  views?: string;
  isPremium?: boolean;
  url?: string;
}

export interface MOOCReference {
  platform: string;
  rating: number;
  titleKey?: string;
  title?: string;
  instructorKey?: string;
  instructor?: string;
  enrolledKey?: string;
  enrolled?: string;
  durationKey?: string;
  duration?: string;
  url?: string;
}

export interface BlogOrDoc {
  type: string;
  titleKey?: string;
  title?: string;
  publisherKey?: string;
  publisher?: string;
  readTimeKey?: string;
  readTime?: string;
  tag?: string;
  url?: string;
}

export interface ScenarioProblem {
  id: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Expert";
  titleKey?: string;
  title?: string;
  categoryKey?: string;
  category?: string;
  domain?: string;
  estimatedTimeKey?: string;
  estimatedTime?: string;
  context?: string;
  constraints?: string[];
  deliverable?: string;
  // Deep problem framework requirements
  scenarioDescriptionKey?: string;
  scenarioDescription?: string;
  problemAnalysisKey?: string;
  problemAnalysis?: string;
  architectureLayersKeys?: string[];
  architectureLayers?: string[];
  toolsAndTech?: { nameKey?: string; name?: string; justificationKey?: string; justification?: string }[];
  tradeOffsKeys?: string[];
  tradeOffs?: string[];
  nfrConsiderationsKeys?: string[];
  nfrConsiderations?: string[];
  kpisKeys?: string[];
  kpis?: string[];
  keyInsightsKey?: string;
  keyInsights?: string;
}

export interface CodeLanguageSnippet {
  language: string;
  code: string;
}

export interface CodePlayground {
  titleKey?: string;
  title?: string;
  descriptionKey?: string;
  description?: string;
  examples: CodeLanguageSnippet[];
}

export interface GitFile {
  name: string;
  type: "folder" | "file";
  children?: GitFile[];
  contentKey?: string;
  content?: string;
}

export interface GitSimulation {
  branchName: string;
  files: GitFile[];
  commitMessageKey?: string;
  commitMessage?: string;
  activeFileSnippet?: {
    filename: string;
    codeKey?: string;
    code?: string;
  };
}

export interface CommunitySolution {
  authorInitials?: string;
  authorName?: string;
  badgeKey?: string;
  badge?: string;
  roleKey?: string;
  role?: string;
  levelKey?: string;
  level?: string;
  timeAgoKey?: string;
  timeAgo?: string;
  upvotes: number;
  comments: number;
  contentKey?: string;
  content?: string;
  createdAtKey?: string;
  summaryKey?: string;
  summary?: string;
}

export interface CommunitySection {
  aiSummaryKey?: string;
  aiSummary?: string;
  solutions: CommunitySolution[];
}

// ---------------------------------------------------------
// Core Hierarchical Types
// ---------------------------------------------------------

export interface CourseTopic {
  id: string;
  titleKey?: string;
  title?: string;
  moduleId: string;
  sequenceNumber: number;
  estimatedMinutes: number;

  // Core Learning Content (accept both patterns)
  whatKey?: string;
  what?: string;
  whyKey?: string;
  why?: string;
  whenKey?: string;
  when?: string;
  howKey?: string;
  how?: string;

  // Real-world Context
  ecosystemKey?: string;
  ecosystem?: string;
  realWorldKey?: string;
  realWorld?: string;
  useCasesKeys?: string[];
  useCases?: string[];
  advantagesKeys?: string[];
  advantages?: string[];
  disadvantagesKeys?: string[];
  disadvantages?: string[];

  // Career Readiness
  interviewTipKey?: string;
  interviewTip?: string;
  resumeBulletKey?: string;
  resumeBullet?: string;

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
    titleKey?: string;
    title?: string;
    code: string;
    outputKey?: string;
    output?: string;
    explanationKey?: string;
    explanation?: string;
  }[];
}

export interface CapstoneStep {
  sequenceNumber?: number;
  titleKey?: string;
  title?: string;
  descriptionKey?: string;
  description?: string;
  objectiveKey?: string;
  objective?: string;
  skillsKeys?: string[];
  skills?: string[];
  status?: "Done" | "In Progress" | "Not Started";
}

export interface CapstoneProjectDeep {
  titleKey?: string;
  title?: string;
  descriptionKey?: string;
  description?: string;
  estimatedDays: number;
  skillsFocusedKeys?: string[];
  skillsFocused?: string[];
  steps: CapstoneStep[];
}

export interface CourseEnhanced {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
  durationKey?: string;
  duration?: string;
  languagesKeys?: string[];
  languages?: string[];
  category: CategoryId;
  programIds: string[];
  roleIds?: string[];
  trackId?: string;
  moduleCount?: number;
  levelKey?: string;

  modules: CourseModule[];
  topics: CourseTopic[];

  level: "beginner" | "intermediate" | "advanced";
  prerequisitesKeys?: string[];
  prerequisites?: string[];
  targetAudienceKey?: string;
  targetAudience?: string;
  learningOutcomesKeys?: string[];
  learningOutcomes?: string[];

  videoCount?: number;
  articleCount?: number;
  problemCount?: number;

  capstoneProject?: CapstoneProjectDeep;

  totalEstimatedHours?: number;
  estimatedCompletionDays?: number;

  createdAt?: string;
  updatedAt?: string;
  version?: string;
  status?: "draft" | "published" | "archived";
}
