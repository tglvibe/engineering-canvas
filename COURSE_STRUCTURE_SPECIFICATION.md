# Course Structure Specification (Phase 2 - Deep Architecture)

This document defines the expected structure and data model for the `CourseEnhanced` Typescript models in the High Code Engineering (HCE) curriculum. 
Because the scope is incredibly dense, all generated courses **MUST** strictly adhere to this schema.

## 1. Type Interfaces (`src/data/courses/types.ts`)

### `CourseEnhanced`
This extends the base `Course` and sits at the top level.
```typescript
{
  id: "HCE BACK 101",
  titleKey: "courses.hceBack101",
  descKey: "courses.hceBack101Desc",
  icon: "⚙️",
  duration: "6 weeks",
  languages: ["Node.js", "Python", "Go", "Java"], // expanded array
  category: "high-code",
  programIds: ["HCE BACK"],
  roleIds: ["backend-dev", "fullstack-dev"], // New mapping explicit bounding 
  trackId: "hce",
  level: "beginner" | "intermediate" | "advanced",
  prerequisites: ["CORE CS 101"], // Other course IDs
  targetAudience: "Developers looking to master...",
  learningOutcomes: ["Outcome 1", "Outcome 2"],
  
  modules: CourseModule[],
  topics: CourseTopic[],
  
  videoCount: number,
  articleCount: number,
  problemCount: number,
  
  capstoneProject: CapstoneProjectDeep, // See below
  
  totalEstimatedHours: number,
  estimatedCompletionDays: number,
  createdAt: string,
  updatedAt: string,
  version: "2.0",
  status: "published" | "draft" | "archived"
}
```

### `CourseModule`
Modules act as chapters containing multiple Topics.
```typescript
{
  id: "HCE-BACK-101-M1",
  title: "Foundations of Backend Engineering",
  description: "The core principles...",
  sequenceNumber: 1,
  estimatedHours: 10,
  topics: ["HCE-BACK-101-M1-T1", "HCE-BACK-101-M1-T2"], // Must match topic IDs
  prerequisiteModuleIds: [],
  outcomes: ["Understand...", "Map..."]
}
```

### `CourseTopic` (The Deep Unit)
This is where the massive content density resides. Generate extremely thorough detail.
```typescript
{
  id: "HCE-BACK-101-M1-T1",
  moduleId: "HCE-BACK-101-M1",
  sequenceNumber: 1,
  title: "What is Backend Engineering?",
  estimatedMinutes: 120,
  
  // Core Concept Framework
  what: string,
  why: string,
  when: string,
  how: string,
  
  // Real World Mapping
  ecosystem: string,
  realWorld: string,
  useCases: string[],
  advantages: string[],
  disadvantages: string[],
  
  // Career Readiness
  interviewTip: string,
  resumeBullet: string,
  
  // Deep Nested Arrays
  videos: [
    { type: "public" | "platform", title: string, author: string, views: string, duration: string, url: string, isPremium?: boolean }
  ],
  moocs: [
    { platform: "Coursera", rating: 4.7, title: string, instructor: string, enrolled: string, duration: string, url: string }
  ],
  blogs: [
    { type: "Guide" | "Case Study" | "Opinion" | "Documentation", title: string, publisher: string, readTime: string, url: string }
  ],
  scenarios: [
    {
      id: "1",
      difficulty: "Medium",
      title: "Design a User Service...",
      category: "Fintech",
      estimatedTime: "4-6 hours",
      scenarioDescription: "Detailed scenario context...",
      problemAnalysis: "System requirements...",
      architectureLayers: ["Gateway", "Auth", "DB"],
      toolsAndTech: [{ name: "Node.js", justification: "Async I/O" }],
      tradeOffs: ["Monolith vs Microservices"],
      nfrConsiderations: ["TLS 1.3"],
      kpis: ["Latency < 200ms"],
      keyInsights: "Design from day zero..."
    }
  ],
  playgrounds: [
    {
      title: "Express Server with Middleware",
      description: "...",
      examples: [
        { language: "typescript", code: "import expr..." },
        { language: "python", code: "from fastapi..." }
      ]
    }
  ],
  gitSimulation: {
    branchName: "feature/user-service",
    commitMessage: "feat: ...",
    files: [ // Folder/file tree structure
      { name: "src", type: "folder", children: [{ name: "index.ts", type: "file", content: "..." }] }
    ],
    activeFileSnippet: { filename: "index.ts", code: "..." }
  },
  community: {
    aiSummary: "The top voted solutions converge...",
    solutions: [
      { authorInitials: "PS", authorName: "...", badge: "Top Solution", role: "...", level: "Expert", timeAgo: "2 days ago", upvotes: 142, comments: 23, content: "..." }
    ]
  }
}
```

### `CapstoneProjectDeep`
A sequential multi-step guide representing the final task.
```typescript
{
  title: "Build a Scalable Telemetry Database",
  description: "...",
  estimatedDays: 14,
  skillsFocused: ["Express", "Kafka", "Redis"],
  steps: [
    {
      sequenceNumber: 1,
      title: "Core API Server",
      objective: "Set up express...",
      skills: ["HTTP", "Error Routing"],
      status: "Done" | "In Progress" | "Not Started"
    }
  ]
}
```

## 2. File and Directory Structure
Maintain exactly the layout generated in Phase 1:
- `src/data/courses/hce-<category>-<number>.ts`
- Each file must `export const <camelCaseName>: CourseEnhanced = { ... }`
- They must all be indexed and correctly typed to `CourseEnhanced`.
