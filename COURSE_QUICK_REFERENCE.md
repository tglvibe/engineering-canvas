# COURSE STRUCTURE - REFERENCE SHEET
## Quick Visual Reference for Development

---

## 📊 DATA STRUCTURE HIERARCHY

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          COURSE DATA HIERARCHY                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  CourseEnhanced                                                              │
│  ├─ Properties                                                               │
│  │  ├─ id: string                                                           │
│  │  ├─ titleKey: string (i18n)                                             │
│  │  ├─ descKey: string (i18n)                                              │
│  │  ├─ icon: string (emoji)                                                │
│  │  ├─ duration: string ("6 weeks")                                        │
│  │  ├─ level: "beginner" | "intermediate" | "advanced"                    │
│  │  ├─ category: "high-code" | "low-code" | "no-code"                    │
│  │  ├─ languages: string[] (["TypeScript", "Python", ...])                │
│  │  ├─ status: "draft" | "published" | "archived"                        │
│  │  ├─ totalEstimatedHours: number                                        │
│  │  ├─ moduleCount: number                                                │
│  │  ├─ videoCount: number                                                 │
│  │  ├─ articleCount: number                                               │
│  │  └─ problemCount: number                                               │
│  │                                                                          │
│  └─ Collections                                                              │
│     │                                                                        │
│     ├─ modules: CourseModule[] (Array of 6-8 modules)                     │
│     │  ├─ id: string                                                       │
│     │  ├─ title: string                                                    │
│     │  ├─ sequenceNumber: number (1, 2, 3...)                             │
│     │  ├─ estimatedHours: number                                          │
│     │  ├─ outcomes: string[]                                              │
│     │  └─ topics: string[] (IDs of topics in this module)                 │
│     │                                                                        │
│     └─ topics: CourseTopic[] (Array of all topics, 24-40 total)           │
│        ├─ id: string                                                       │
│        ├─ moduleId: string (parent module)                                │
│        ├─ title: string                                                    │
│        ├─ sequenceNumber: number (within module)                          │
│        ├─ estimatedMinutes: number                                        │
│        │                                                                    │
│        ├─ Learning Content (7 sections)                                    │
│        │  ├─ what: string (conceptual definition)                         │
│        │  ├─ why: string (purpose & importance)                           │
│        │  ├─ when: string (use cases)                                     │
│        │  ├─ how: string (implementation)                                 │
│        │  ├─ ecosystem: string (context & relationships)                  │
│        │  ├─ realWorld: string (real-world examples)                      │
│        │  └─ useCases: string[]                                           │
│        │                                                                    │
│        ├─ Career Content                                                   │
│        │  ├─ interviewTip: string                                         │
│        │  └─ resumeBullet: string                                         │
│        │                                                                    │
│        ├─ Code Examples                                                    │
│        │  └─ codeSnippet: Array<{                                         │
│        │     ├─ language: string                                          │
│        │     ├─ code: string                                              │
│        │     ├─ output: string                                            │
│        │     └─ explanation: string                                       │
│        │  }>                                                               │
│        │                                                                    │
│        └─ Scenario Problem (Optional)                                      │
│           └─ scenario: {                                                   │
│              ├─ title: string                                             │
│              ├─ context: string                                           │
│              ├─ constraints: string[]                                     │
│              ├─ deliverable: string                                       │
│              └─ estimatedTime: string                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🗂️ FILE ORGANIZATION

```
src/data/
│
├── hierarchy.ts
│   └─ Categories, Roles, Programs, Courses (main structure)
│      ├─ export interface CourseModule
│      ├─ export interface CourseTopic
│      └─ export interface CourseEnhanced
│
├── courses/
│   ├─ index.ts (re-exports all courses)
│   ├─ backend-courses.ts (backend specialization)
│   ├─ frontend-courses.ts (frontend specialization)
│   ├─ fullstack-courses.ts
│   ├─ data-courses.ts
│   ├─ devops-courses.ts
│   ├─ ai-courses.ts
│   ├─ automation-courses.ts
│   ├─ integration-courses.ts
│   ├─ internal-tools-courses.ts
│   ├─ product-courses.ts
│   └─ ai-workflow-courses.ts
│
├── course-content/
│   ├─ backend-fundamentals/
│   │  ├─ modules.ts (CourseModule[] with structure)
│   │  ├─ videos.ts (CourseVideoResource[])
│   │  ├─ blogs.ts (CourseBlogResource[])
│   │  ├─ moocs.ts (CourseMOOCResource[])
│   │  ├─ scenarios.ts (CourseScenarioProblem[])
│   │  ├─ code-examples.ts
│   │  └─ metadata.ts
│   │
│   ├─ database-engineering/
│   │  └─ [same structure]
│   │
│   └─ [... more course content]
│
└── tracks.ts (existing - keep for backward compat)

src/lib/
│
├─ course-utils.ts
│  ├─ getCourseById()
│  ├─ getCoursesForProgram()
│  ├─ getTopic()
│  ├─ getModuleTopics()
│  ├─ getNextTopic()
│  ├─ getPreviousTopic()
│  ├─ searchCourses()
│  └─ filterCourses()
│
└─ course-progress.ts
   ├─ getUserCourseProgress()
   ├─ markTopicCompleted()
   ├─ markModuleCompleted()
   ├─ enrollInCourse()
   ├─ calculateProgress()
   └─ awardCertificate()

src/pages/
│
├─ CoursesListPage.tsx (browse all courses)
├─ CoursePage.tsx (course overview & outline)
├─ TopicPage.tsx (learn interface - main learning view)
└─ CourseProgressPage.tsx (personal dashboard)

src/components/course/
│
├─ CourseCard.tsx (for listing)
├─ ModuleAccordion.tsx (expandable module)
├─ TopicContent.tsx (displays "what/why/how" sections)
├─ VideoResources.tsx
├─ BlogResources.tsx
├─ MOOCResources.tsx
├─ ScenarioProblems.tsx
├─ CodePlayground.tsx
└─ ProgressTracker.tsx

src/i18n/locales/
│
├─ en.json (add courses.* keys)
├─ [... other languages]
│
└─ index.ts (i18n configuration)
```

---

## 🔑 KEY INTERFACES CHEAT SHEET

### CourseModule
```typescript
{
  id: "be-m1",
  title: "Backend Fundamentals",
  description: "Foundation concepts",
  sequenceNumber: 1,          // Order in course
  estimatedHours: 8,          // Time estimate
  topics: ["be-t1-1", "be-t1-2", "be-t1-3"],  // Topic IDs
  prerequisiteModuleIds: [],  // Must complete first
  outcomes: [                 // What students learn
    "Understand client-server architecture",
    "Learn HTTP protocol fundamentals"
  ]
}
```

### CourseTopic
```typescript
{
  id: "be-t1-1",
  title: "What is Backend Development?",
  moduleId: "be-m1",          // Parent module
  sequenceNumber: 1,          // Order in module
  estimatedMinutes: 45,
  
  // 7-layer learning framework
  what: "Backend development is...",
  why: "Important because...",
  when: "Use it when...",
  how: "Implement by...",
  ecosystem: "Fits with...",
  realWorld: "Netflix example...",
  
  useCases: [...],
  advantages: [...],
  disadvantages: [...],
  
  interviewTip: "When asked...",
  resumeBullet: "Designed and implemented REST APIs...",
  
  codeSnippet: [{
    language: "TypeScript",
    title: "Express Server Setup",
    code: "import express...",
    output: "Server running on port 3000",
    explanation: "This sets up..."
  }],
  
  scenario: {
    title: "Design a User Service",
    context: "A fintech startup needs...",
    constraints: ["GDPR compliance", "..."],
    deliverable: "REST API with JWT auth",
    estimatedTime: "4-6 hours"
  }
}
```

### CourseEnhanced
```typescript
{
  id: "backend-fundamentals",
  titleKey: "courses.backendFundamentals",
  descKey: "courses.backendFundamentalsDesc",
  icon: "⚙️",
  duration: "6 weeks",
  
  level: "beginner",
  category: "high-code",
  languages: ["TypeScript", "Python", "Go", "Java"],
  status: "published",
  
  modules: [/* CourseModule[] */],
  topics: [/* CourseTopic[] */],
  
  learningOutcomes: [
    "Build production-ready REST APIs",
    "Create and optimize databases",
    "..."
  ],
  
  capstoneProject: {
    title: "Production REST + GraphQL API",
    description: "...",
    estimatedDays: 14,
    skillsFocused: ["API Design", "Database Design", "Testing"]
  },
  
  totalEstimatedHours: 48,
  estimatedCompletionDays: 42,
  moduleCount: 8,
  videoCount: 24,
  articleCount: 18,
  problemCount: 12,
  
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2026-02-27T00:00:00Z",
  version: "2.1"
}
```

---

## 🔀 COMMON OPERATIONS

### Get Topic with All Resources
```typescript
const course = getCourseById("backend-fundamentals");
const topic = course?.topics.find(t => t.id === "be-t1-1");
const videos = topicVideos["be-t1-1"];
const blogs = topicBlogs["be-t1-1"];
const moocs = topicMOOCs["be-t1-1"];
const scenarios = topicScenarios["be-t1-1"];
const codeExamples = topic?.codeSnippet || [];
```

### Progress Through Course
```typescript
// Mark topic complete
markTopicCompleted(userId, courseId, topicId);

// Get next topic
const nextTopic = getNextTopic(courseId, currentTopicId);

// Navigate to next
navigate(`/course/${courseId}/learn/${nextTopic?.id}`);

// Check completion
const progress = getUserCourseProgress(userId, courseId);
if (progress?.completionPercentage === 100) {
  awardCertificate(userId, courseId);
}
```

### Search & Filter
```typescript
// Search all courses
const results = searchCourses("backend");

// Filter by level
const beginnerCourses = allCourses.filter(c => c.level === "beginner");

// Filter by category
const highCodeCourses = allCourses.filter(c => c.category === "high-code");

// Get courses for program
const courses = getCoursesForProgram("backend-mastery");
```

---

## 🎨 UI PATTERNS

### Course Card (in list)
```
┌──────────────────────────────┐
│ ⚙️  Backend Fundamentals      │
│                              │
│ Master backend development   │
│ ...                          │
│                              │
│ 6 weeks • 8 modules          │
│ Beginner • High-Code         │
│                              │
│ [Enroll] [v]                │
└──────────────────────────────┘
```

### Module Accordion (in course)
```
┌────────────────────────────────────┐
│ ▼ Module 1: Backend Fundamentals   │
│ ✓ 3 complete | 8 hours              │
├────────────────────────────────────┤
│ ○ Topic 1-1: What is Backend?      │
│   45 min • 4 videos, 3 articles... │
│                                    │
│ ○ Topic 1-2: Client-Server Arch    │
│   60 min • 4 videos, 3 articles... │
│                                    │
│ ✓ Topic 1-3: HTTP Protocol        │
│   75 min • Complete ✓              │
└────────────────────────────────────┘
```

### Topic Learning View
```
┌────────────────────────────────────┐
│ What is Backend Development?       │
│ Est. 45 minutes                    │
│                                    │
│ ▼ WHAT (Conceptual)               │
│ Backend development is the       │
│ creation of server-side logic... │
│                                    │
│ ▼ WHY (Purpose)                   │
│ Important because it handles...  │
│                                    │
│ ▼ WHEN (Use Cases)                │
│ • User-facing applications      │
│ • Multi-user systems            │
│                                    │
│ ▼ HOW (Implementation)            │
│ Choose a language, framework...  │
│                                    │
│ ──────────────────────────────────│
│ 📹 WATCH VIDEOS                   │
│ 1. Fireship - 12 min              │
│ 2. ByteByteGo - 18 min            │
│ 3. TGL Deep Dive - 45 min         │
│                                    │
│ ──────────────────────────────────│
│ 📰 ARTICLES                        │
│ 1. roadmap.sh - 15 min            │
│ 2. Netflix Blog - 12 min          │
│                                    │
│ ──────────────────────────────────│
│ 🧮 CODE EXAMPLES                  │
│ ▼ TypeScript                      │
│ [import express...]               │
│                                    │
│ ▼ Python                          │
│ [from flask...]                   │
│                                    │
│ ──────────────────────────────────│
│ [✓ Mark Complete] [Next Topic→]  │
└────────────────────────────────────┘
```

---

## 📱 Responsive Breakpoints

```typescript
Mobile (< 640px)         Tablet (640-1024px)    Desktop (> 1024px)
├─ 1 column             ├─ 2 columns            ├─ 3 columns
├─ Stack layout         ├─ Side-by-side         ├─ Sidebar + Content
├─ Hamburger menu       ├─ Tab navigation       ├─ Fixed sidebar
├─ Collapsible sections ├─ Half-width modules   ├─ Two-column layout
└─ Swipeable cards      └─ Scroll horizontally  └─ Fixed headers
```

---

## ⚡ Performance Checklist

- [ ] Course list loads < 1 second
- [ ] Topic content loads < 2 seconds
- [ ] Videos lazy-loaded on click
- [ ] Code examples syntax-highlighted efficiently
- [ ] Search results instant (< 300ms)
- [ ] Progress updates debounced (save every 5 sec)
- [ ] Infinite scroll vs pagination for courses
- [ ] Cache course metadata in memory
- [ ] Minify course content JSON
- [ ] Compress video thumbnails

---

## 🔗 Integration Points

### With Existing System
```
Hierarchy (Categories → Roles → Programs) 
    → NEW: Courses (part of Programs)
    
Tracks (existing workspace routes)
    → Can be mapped to Courses via trackId
    
UserProfile (in AuthContext)
    → Add: completedCourses: string[]
    → Add: courseProgress: CourseProgress[]
    
Dashboard (existing)
    → Show: Enrolled courses
    → Show: Recommended courses
```

### With External Systems (Optional Future)
```
YouTube API → Suggest videos
Medium API → Suggest articles
Coursera API → Link related MOOCs
GitHub API → Link code examples
Stripe API → Premium content access
Mailchimp API → Send course emails
Slack API → Send progress alerts
```

---

## 🚀 Deployment Checklist by Phase

**Phase 1** (Data & Utils)
- [ ] Types defined
- [ ] Course data files created
- [ ] Utility functions working
- [ ] Unit tests passing

**Phase 2** (UI)
- [ ] Components created
- [ ] Responsive design working
- [ ] Navigation functional
- [ ] Integration tests passing

**Phase 3** (Integration)
- [ ] Routes added to App.tsx
- [ ] Progress tracking working
- [ ] Search functional
- [ ] E2E tests passing

**Phase 4** (Release)
- [ ] Code reviewed
- [ ] QA approved
- [ ] Staging tested
- [ ] Production ready

---

## 📈 Metrics to Track

```
Enrollment Metrics
├─ Courses browsed per user
├─ Enrollment rate (%)
├─ Most popular courses
└─ Source of enrollment

Learning Metrics
├─ Avg time per topic
├─ Topics completed per user
├─ Module completion rates
├─ Drop-off points
└─ Repeat viewers

Engagement Metrics
├─ Resources accessed (videos, blogs, etc)
├─ Scenario problem attempts
├─ Code examples viewed
└─ Questions asked in discussions

Completion Metrics
├─ Course completion rate (%)
├─ Avg time to complete
├─ Cert issuance rate
└─ Time from enroll to completion

Success Metrics
├─ Post-course job placement (%)
├─ Salary increase (%)
├─ Student satisfaction (5-star rating)
└─ Skill assessment improvement
```

---

## 📞 Quick Debug Tips

### Course Not Showing
```typescript
// 1. Check it's exported
import { backendCourses } from "@/data/courses/backend-courses";

// 2. Check it's in allCourses array
console.log(allCourses.find(c => c.id === "backend-fundamentals"));

// 3. Check titleKey exists in i18n
// src/i18n/locales/en.json must have:
// "courses.backendFundamentals": "Backend Fundamentals"
```

### Progress Not Saving
```typescript
// 1. Check user is authenticated
console.log(useAuth().user);

// 2. Check progress function called
console.log(getUserCourseProgress(userId, courseId));

// 3. Check storage (if using localStorage)
console.log(localStorage.getItem(`course-${courseId}`));
```

### Video Not Loading
```typescript
// 1. Check video resource exists
const videos = topicVideos[topicId];
console.log(videos);

// 2. Check URL is valid
console.log(video.url);

// 3. Check YouTube/Vimeo API loaded
```

---

**Last Updated**: February 27, 2026  
**For Questions**: Refer to the 4 main specification documents in the root
