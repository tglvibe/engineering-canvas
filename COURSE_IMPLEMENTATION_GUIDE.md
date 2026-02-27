# COURSE IMPLEMENTATION GUIDE
## Practical Code Examples & Integration Steps

---

## 1. CREATING COURSE DATA FILES

### 1.1 Enhanced Type Definitions (Update hierarchy.ts)

```typescript
// src/data/hierarchy.ts - ADDITIONS

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  sequenceNumber: number;
  estimatedHours: number;
  topics: string[]; // Topic IDs
  prerequisiteModuleIds: string[];
  outcomes: string[];
}

export interface CourseTopic {
  id: string;
  title: string;
  moduleId: string;
  sequenceNumber: number;
  estimatedMinutes: number;
  
  // Learning content
  what: string;
  why: string;
  when: string;
  how: string;
  ecosystem: string;
  realWorld: string;
  
  useCases: string[];
  advantages: string[];
  disadvantages: string[];
  
  interviewTip: string;
  resumeBullet: string;
  
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
    output: string;
    explanation: string;
  }[];
  
  scenario?: {
    title: string;
    context: string;
    constraints: string[];
    deliverable: string;
    estimatedTime: string;
  };
}

// Extend existing Course interface
export interface CourseEnhanced extends Course {
  level: "beginner" | "intermediate" | "advanced";
  prerequisites: string[];
  prerequisiteModuleIds: string[];
  targetAudience: string;
  learningOutcomes: string[];
  
  modules: CourseModule[];
  topics: CourseTopic[];
  
  videoCount: number;
  articleCount: number;
  problemCount: number;
  
  capstoneProject?: {
    title: string;
    description: string;
    estimatedDays: number;
    skillsFocused: string[];
  };
  
  totalEstimatedHours: number;
  estimatedCompletionDays: number;
  
  createdAt: string;
  updatedAt: string;
  version: string;
  status: "draft" | "published" | "archived";
}
```

### 1.2 Create Course Data File (New)

```typescript
// src/data/courses/backend-courses.ts

import { CourseEnhanced } from "../hierarchy";

export const backendCourses: CourseEnhanced[] = [
  {
    id: "backend-fundamentals",
    titleKey: "courses.backendFundamentals",
    descKey: "courses.backendFundamentalsDesc",
    icon: "⚙️",
    duration: "6 weeks",
    moduleCount: 8,
    languages: ["TypeScript", "Python", "Go", "Java"],
    category: "high-code",
    programIds: ["backend-mastery", "api-specialist", "fullstack-mastery"],
    trackId: "backend",
    
    // Enhanced Properties
    level: "beginner",
    prerequisites: [],
    prerequisiteModuleIds: [],
    targetAudience: "Developers aspiring to build scalable backend systems",
    
    learningOutcomes: [
      "Design and implement REST APIs",
      "Create and optimize databases",
      "Implement authentication & security",
      "Deploy and monitor applications",
      "Understand backend architecture patterns"
    ],
    
    modules: [
      {
        id: "be-m1",
        title: "Backend Fundamentals",
        description: "Foundation concepts in backend development",
        sequenceNumber: 1,
        estimatedHours: 8,
        topics: ["be-t1-1", "be-t1-2", "be-t1-3"],
        prerequisiteModuleIds: [],
        outcomes: [
          "Understand client-server architecture",
          "Learn HTTP protocol fundamentals",
          "Set up development environment"
        ]
      },
      {
        id: "be-m2",
        title: "Server Setup & Configuration",
        description: "Setting up production-ready servers",
        sequenceNumber: 2,
        estimatedHours: 10,
        topics: ["be-t2-1", "be-t2-2", "be-t2-3", "be-t2-4"],
        prerequisiteModuleIds: ["be-m1"],
        outcomes: [
          "Configure server environments",
          "Implement logging and monitoring",
          "Set up load balancing",
          "Handle security configurations"
        ]
      },
      // ... more modules
    ],
    
    topics: [
      {
        id: "be-t1-1",
        title: "What is Backend Development?",
        moduleId: "be-m1",
        sequenceNumber: 1,
        estimatedMinutes: 45,
        
        what: `Backend development is the creation and maintenance of server-side logic, 
databases, and infrastructure that powers web and mobile applications. It's the 
invisible but critical part of every application you use.`,
        
        why: `Backend systems handle all the business logic that the user doesn't directly 
interact with. They authenticate users, store and retrieve data, process payments, 
send notifications, and make applications scalable and secure.`,
        
        when: `
• When building user-facing applications requiring persistent data
• Multi-user systems with authentication and authorization needs
• APIs consumed by mobile apps, web frontends, or third-party services
• Real-time data processing and analytics systems
• Microservices architectures`,
        
        how: `
1. Choose a programming language (Node.js, Python, Go, Java, C#)
2. Select a framework (Express, Django, Gin, Spring Boot)
3. Set up a database (PostgreSQL, MongoDB, MySQL)
4. Design API endpoints following REST or GraphQL standards
5. Implement authentication, validation, and error handling
6. Deploy to cloud infrastructure (AWS, Azure, Google Cloud)
7. Monitor performance and set up logging`,
        
        ecosystem: `Backend sits at the center of the application ecosystem:
- Frontend: Web and mobile UIs communicate with backend via APIs
- Database: Backend queries and manages data storage
- DevOps: Handles deployment, scaling, and monitoring
- QA Team: Tests business logic and integration points
- Data Team: Consumes analytics events from backend`,
        
        realWorld: `Netflix's backend handles millions of concurrent requests across 200+ countries. 
Their microservices architecture uses:
- Thousands of servers in AWS regions worldwide
- Real-time user preference tracking
- Sophisticated recommendation algorithms
- Fault-tolerant design for high availability`,
        
        useCases: [
          "User authentication and session management",
          "Data persistence and retrieval",
          "Payment processing and financial transactions",
          "Email and push notification systems",
          "Real-time data synchronization",
          "Machine learning model serving"
        ],
        
        advantages: [
          "Centralized business logic security",
          "Horizontal scalability",
          "Independent technology choices per service",
          "Consistent data management",
          "Advanced caching strategies",
          "Background job processing"
        ],
        
        disadvantages: [
          "Increased complexity vs monoliths",
          "Network latency between services",
          "Distributed debugging challenges",
          "Infrastructure & DevOps overhead",
          "Data consistency in distributed systems",
          "Operational complexity at scale"
        ],
        
        interviewTip: `When discussing backend experience, focus on:
- Scale: How many requests/second did your system handle?
- Reliability: Describe a challenging bug you fixed
- Architecture: Explain your system design decisions
- Performance: Mention optimizations (caching, indexing, etc.)
- Example: "I designed a REST API that reduced response time from 2s to 100ms 
by implementing Redis caching and query optimization"`,
        
        resumeBullet: `Designed and implemented REST APIs handling 10K+ requests/second with 
sub-100ms latency using TypeScript, PostgreSQL, and Redis in a microservices architecture`,
        
        codeSnippet: [
          {
            language: "TypeScript",
            title: "Basic Express Server with Middleware",
            code: `import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Request logging
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.path}\`);
  next();
});

// Route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
            output: `Server running on port 3000
GET /api/hello
{"message":"Hello from backend!"}`,
            explanation: `This Express server sets up basic middleware for CORS (cross-origin requests), 
security headers, JSON parsing, and logging. The /api/hello endpoint returns JSON.`
          },
          {
            language: "Python",
            title: "Flask Server with Route",
            code: `from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello from backend!'})

if __name__ == '__main__':
    app.run(port=3000, debug=True)`,
            output: `Running on http://127.0.0.1:3000
{"message":"Hello from backend!"}`,
            explanation: `Flask is a lightweight Python framework. This example shows basic CORS setup 
and a simple route that returns JSON data.`
          }
        ],
        
        scenario: {
          title: "Design a User Service for a Fintech Startup",
          context: `A Series-B fintech startup needs a user management service for their payment platform. 
Their projections show growth from 5K daily active users (DAU) to 100K in 12 months.

Requirements:
- User registration with email/OAuth2
- User profiles with KYC (Know Your Customer) verification
- Account deactivation and data deletion (GDPR)
- Rate limiting to prevent abuse
- High availability (99.99 uptime SLA)`,
          constraints: [
            "Data privacy compliance (GDPR, SOC 2)",
            "Support both email/password and OAuth 2.0 authentication",
            "Handle concurrent profile updates without race conditions",
            "Must be horizontally scalable from 5K to 100K DAU",
            "Sub-200ms response time for 99th percentile",
            "Zero data loss even during failures"
          ],
          deliverable: `
1. REST API with following endpoints:
   - POST /users/register
   - POST /users/login
   - GET /users/{id}
   - PUT /users/{id}
   - DELETE /users/{id}
   
2. Implementation includes:
   - JWT authentication
   - Input validation & sanitization
   - Rate limiting middleware
   - Database migrations
   - Error handling & logging
   - Integration tests
   - API documentation (OpenAPI/Swagger)
   
3. Database schema supporting:
   - User profiles with encrypted sensitive data
   - Audit logs for compliance
   - Session management
   - OAuth provider integration`,
          estimatedTime: "4-6 hours"
        }
      },
      
      {
        id: "be-t1-2",
        title: "Client-Server Architecture",
        moduleId: "be-m1",
        sequenceNumber: 2,
        estimatedMinutes: 60,
        
        what: `Client-server architecture is a distributed application structure that separates 
the presentation layer (client) from the business logic and data layer (server). The client makes 
requests, and the server processes them and returns responses.`,
        
        why: `This separation of concerns provides:
- Security isolation between presentation and data
- Independent scaling of client and server
- Multiple client types (web, mobile, desktop) consuming same backend
- Easier maintenance and updates without client reinstallation`,
        
        // ... rest of topic structure
        
        when: `• Modern web and mobile applications
• Multi-platform applications (need same backend for different clients)
• Enterprise systems requiring security separation
• Real-time applications with frequent server updates`,
        
        how: `Implement client-server by:
1. Building REST/GraphQL API on server
2. Setting up HTTP listening on a port
3. Creating client making HTTP requests
4. Parsing responses in client application
5. Managing authentication with tokens`,
        
        ecosystem: `Client-server fits within:
- HTTP(S) protocol for communication
- DNS for service discovery
- Load balancers for distribution
- Caches for performance
- Message queues for async operations`,
        
        realWorld: `When you use Gmail:
- Client: Browser/mobile app (Gmail UI)
- Server: Google's backend (email processing, storage)
- Communication: HTTPS APIs
- Database: Distributed data storage`,
        
        useCases: [
          "Web applications (Netflix, Gmail, Twitter)",
          "Mobile apps (Instagram, Uber, WhatsApp)",
          "Real-time collaborative software (Figma, Notion)",
          "IoT applications (smart home systems)",
          "Gaming multiplayer servers"
        ],
        
        advantages: [
          "Centralized security and business logic",
          "Easy to update server without client redeploy",
          "Multiple client support from one backend",
          "Server can enforce business rules",
          "Client doesn't need to store sensitive data"
        ],
        
        disadvantages: [
          "Dependency on network connectivity",
          "Server becomes a single point of failure",
          "Latency introduced by network requests",
          "Scaling servers becomes complex",
          "Synchronization challenges"
        ],
        
        interviewTip: `"Explain trade-offs between pushing logic to client vs server. 
When handling payment processing, why must it always be on server?"`,
        
        resumeBullet: `Architected scalable client-server system using microservices handling 
100K+ concurrent users across multiple client platforms`,
        
        codeSnippet: [
          {
            language: "TypeScript",
            title: "Client Making API Request",
            code: `// Client-side code
async function fetchUserData(userId: string) {
  const response = await fetch(\`/api/users/\${userId}\`);
  const data = await response.json();
  return data;
}

// Call the function
fetchUserData('user123')
  .then(user => console.log(user))
  .catch(err => console.error(err));`,
            output: `{
  "id": "user123",
  "name": "John Doe",
  "email": "john@example.com"
}`,
            explanation: `Client makes HTTP GET request to server. Server handles request 
and returns JSON response with user data.`
          }
        ]
      }
    ],
    
    videoCount: 24,
    articleCount: 18,
    problemCount: 12,
    
    capstoneProject: {
      title: "Production REST + GraphQL API",
      description: `Build a complete backend system with both REST and GraphQL endpoints 
serving a SaaS application. Implement authentication, database design, caching, 
testing, and deployment.`,
      estimatedDays: 14,
      skillsFocused: ["API Design", "Database Design", "Testing", "Deployment", "Monitoring"]
    },
    
    totalEstimatedHours: 48,
    estimatedCompletionDays: 42,
    
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2026-02-27T00:00:00Z",
    version: "2.1",
    status: "published"
  }
];
```

---

## 2. UTILITY FUNCTIONS

### 2.1 Course Retrieval Functions

```typescript
// src/lib/course-utils.ts

import { CourseEnhanced, courses } from "@/data/hierarchy";
import { backendCourses } from "@/data/courses/backend-courses";
import { frontendCourses } from "@/data/courses/frontend-courses";
// ... import other course arrays

// Combine all courses
const allCourses = [...backendCourses /* ... other course arrays */];

/**
 * Get a complete course with all content
 */
export function getCourseById(courseId: string): CourseEnhanced | null {
  return allCourses.find(c => c.id === courseId) || null;
}

/**
 * Get all courses for a program
 */
export function getCoursesForProgram(programId: string): CourseEnhanced[] {
  return allCourses.filter(c => c.programIds.includes(programId));
}

/**
 * Get courses by difficulty level
 */
export function getCoursesByLevel(
  level: "beginner" | "intermediate" | "advanced"
): CourseEnhanced[] {
  return allCourses.filter(c => c.level === level);
}

/**
 * Get module with all its topics
 */
export function getCourseModule(courseId: string, moduleId: string) {
  const course = getCourseById(courseId);
  return course?.modules.find(m => m.id === moduleId) || null;
}

/**
 * Get topic details
 */
export function getTopic(courseId: string, topicId: string) {
  const course = getCourseById(courseId);
  return course?.topics.find(t => t.id === topicId) || null;
}

/**
 * Get all topics in a module (ordered)
 */
export function getModuleTopics(courseId: string, moduleId: string) {
  const course = getCourseById(courseId);
  if (!course) return [];
  
  const module = course.modules.find(m => m.id === moduleId);
  if (!module) return [];
  
  return module.topics
    .map(topicId => course.topics.find(t => t.id === topicId))
    .filter((t): t is typeof module.topics[0] => !!t)
    .sort((a, b) => a.sequenceNumber - b.sequenceNumber);
}

/**
 * Get next topic in course
 */
export function getNextTopic(courseId: string, currentTopicId: string) {
  const course = getCourseById(courseId);
  if (!course) return null;
  
  const allTopics = course.topics.sort((a, b) => {
    if (a.moduleId !== b.moduleId) {
      const moduleA = course.modules.find(m => m.id === a.moduleId)?.sequenceNumber || 0;
      const moduleB = course.modules.find(m => m.id === b.moduleId)?.sequenceNumber || 0;
      return moduleA - moduleB;
    }
    return a.sequenceNumber - b.sequenceNumber;
  });
  
  const currentIndex = allTopics.findIndex(t => t.id === currentTopicId);
  return currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;
}

/**
 * Get previous topic in course
 */
export function getPreviousTopic(courseId: string, currentTopicId: string) {
  const course = getCourseById(courseId);
  if (!course) return null;
  
  const allTopics = course.topics.sort((a, b) => {
    if (a.moduleId !== b.moduleId) {
      const moduleA = course.modules.find(m => m.id === a.moduleId)?.sequenceNumber || 0;
      const moduleB = course.modules.find(m => m.id === b.moduleId)?.sequenceNumber || 0;
      return moduleA - moduleB;
    }
    return a.sequenceNumber - b.sequenceNumber;
  });
  
  const currentIndex = allTopics.findIndex(t => t.id === currentTopicId);
  return currentIndex > 0 ? allTopics[currentIndex - 1] : null;
}

/**
 * Calculate estimated completion time
 */
export function calculateCourseHours(courseId: string): number {
  const course = getCourseById(courseId);
  return course?.totalEstimatedHours || 0;
}

/**
 * Search courses by title or description
 */
export function searchCourses(query: string): CourseEnhanced[] {
  const q = query.toLowerCase();
  return allCourses.filter(c => 
    c.titleKey.toLowerCase().includes(q) || 
    c.descKey.toLowerCase().includes(q)
  );
}
```

### 2.2 Progress Tracking Functions

```typescript
// src/lib/course-progress.ts

import { UserProfile } from "@/contexts/AuthContext";

export interface CourseProgress {
  userId: string;
  courseId: string;
  enrollmentDate: string;
  completionPercentage: number;
  completedModules: string[];
  completedTopics: string[];
  currentModule: string;
  currentTopic: string;
  lastAccessedAt: string;
  hoursSpent: number;
  estimatedCompletionDate: string;
  certificateEarned: boolean;
  certificateEarnedDate?: string;
}

// Mock storage (in real app, use database)
const progressMap = new Map<string, CourseProgress>();

/**
 * Get user's progress in a course
 */
export function getUserCourseProgress(
  userId: string,
  courseId: string
): CourseProgress | null {
  return progressMap.get(`${userId}-${courseId}`) || null;
}

/**
 * Mark topic as completed
 */
export function markTopicCompleted(
  userId: string,
  courseId: string,
  topicId: string
): void {
  const key = `${userId}-${courseId}`;
  const progress = progressMap.get(key);
  
  if (progress && !progress.completedTopics.includes(topicId)) {
    progress.completedTopics.push(topicId);
    progress.lastAccessedAt = new Date().toISOString();
    progress.completionPercentage = calculateProgress(userId, courseId);
    progressMap.set(key, progress);
  }
}

/**
 * Mark module as completed
 */
export function markModuleCompleted(
  userId: string,
  courseId: string,
  moduleId: string
): void {
  const key = `${userId}-${courseId}`;
  const progress = progressMap.get(key);
  
  if (progress && !progress.completedModules.includes(moduleId)) {
    progress.completedModules.push(moduleId);
    progress.currentModule = moduleId;
    progress.lastAccessedAt = new Date().toISOString();
    progressMap.set(key, progress);
  }
}

/**
 * Calculate course completion percentage
 */
export function calculateProgress(userId: string, courseId: string): number {
  const progress = progressMap.get(`${userId}-${courseId}`);
  if (!progress) return 0;
  
  const totalTopics = 48; // Example: Backend Fundamentals has 48 topics
  return Math.round((progress.completedTopics.length / totalTopics) * 100);
}

/**
 * Get estimated completion date
 */
export function getEstimatedCompletionDate(
  userId: string,
  courseId: string,
  hoursPerWeek: number = 10
): Date {
  const from "@/data/hierarchy";
  const course = getCourseById(courseId);
  if (!course) return new Date();
  
  const progress = progressMap.get(`${userId}-${courseId}`);
  const hoursRemaining = course.totalEstimatedHours - (progress?.hoursSpent || 0);
  const weeksRemaining = hoursRemaining / hoursPerWeek;
  const daysRemaining = weeksRemaining * 7;
  
  const completionDate = new Date();
  completionDate.setDate(completionDate.getDate() + Math.ceil(daysRemaining));
  
  return completionDate;
}

/**
 * Enroll user in course
 */
export function enrollInCourse(
  userId: string,
  courseId: string,
  currentModule: string
): CourseProgress {
  const progress: CourseProgress = {
    userId,
    courseId,
    enrollmentDate: new Date().toISOString(),
    completionPercentage: 0,
    completedModules: [],
    completedTopics: [],
    currentModule,
    currentTopic: "",
    lastAccessedAt: new Date().toISOString(),
    hoursSpent: 0,
    estimatedCompletionDate: getEstimatedCompletionDate(userId, courseId).toISOString(),
    certificateEarned: false
  };
  
  progressMap.set(`${userId}-${courseId}`, progress);
  return progress;
}

/**
 * Award certificate on completion
 */
export function awardCertificate(
  userId: string,
  courseId: string
): CourseProgress | null {
  const key = `${userId}-${courseId}`;
  const progress = progressMap.get(key);
  
  if (progress && progress.completionPercentage === 100) {
    progress.certificateEarned = true;
    progress.certificateEarnedDate = new Date().toISOString();
    progressMap.set(key, progress);
    return progress;
  }
  
  return null;
}
```

---

## 3. UI COMPONENTS

### 3.1 Course Landing Page Component

```typescript
// src/pages/CoursePage.tsx

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Clock, Target, Users, Award, ChevronDown, ChevronRight } from "lucide-react";
import { getCourseById, getModuleTopics } from "@/lib/course-utils";
import { enrollInCourse, getUserCourseProgress } from "@/lib/course-progress";
import { useAuth } from "@/contexts/AuthContext";
import AppHeader from "@/components/AppHeader";

export default function CoursePage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t } = useTranslation();
  const [expandedModules, setExpandedModules] = useState<string[]>([]);
  
  const course = getCourseById(courseId || "");
  const progress = user ? getUserCourseProgress(user.email, courseId || "") : null;
  
  if (!course) {
    return <div>{t("course.notFound")}</div>;
  }
  
  const handleEnroll = () => {
    if (user && course.modules.length > 0) {
      enrollInCourse(user.email, course.id, course.modules[0].id);
      navigate(`/course/${course.id}/learn/${course.modules[0].id}/${course.modules[0].topics[0]}`);
    }
  };
  
  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(m => m !== moduleId)
        : [...prev, moduleId]
    );
  };
  
  return (
    <div className="min-h-screen bg-background">
      <AppHeader title={course.titleKey} backTo="/courses" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {/* Course Header */}
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.02] p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-5xl">{course.icon}</div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {t(course.titleKey)}
                </h1>
                <p className="text-muted-foreground mb-4">
                  {t(course.descKey)}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm">{course.moduleCount} modules</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">{course.level}</span>
                  </div>
                </div>
                
                {!progress ? (
                  <button onClick={handleEnroll}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90">
                    {t("course.enroll")}
                  </button>
                ) : (
                  <div className="text-sm">
                    <span className="font-medium">{progress.completionPercentage}%</span>
                    <span className="text-muted-foreground"> complete</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Course Outline */}
          <div className="grid gap-4">
            {course.modules.map(module => (
              <div key={module.id} className="rounded-lg border border-border bg-card">
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
                >
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground">
                      {module.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {module.topics.length} topics • {module.estimatedHours} hours
                    </p>
                  </div>
                  
                  {expandedModules.includes(module.id) ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                
                {expandedModules.includes(module.id) && (
                  <div className="border-t border-border p-4 space-y-2">
                    {getModuleTopics(course.id, module.id).map(topic => (
                      <button
                        key={topic.id}
                        onClick={() => navigate(`/course/${course.id}/learn/${topic.id}`)}
                        className="w-full text-left p-2.5 rounded hover:bg-accent/5 transition-colors group"
                      >
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                          {topic.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {topic.estimatedMinutes} minutes
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
```

### 3.2 Topic Learning Component

```typescript
// src/pages/TopicPage.tsx

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getCourseById, getTopic } from "@/lib/course-utils";
import { markTopicCompleted } from "@/lib/course-progress";
import { useAuth } from "@/contexts/AuthContext";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function TopicPage() {
  const { courseId, topicId } = useParams();
  const { user } = useAuth();
  const [expandedSections, setExpandedSections] = useState<string[]>(['what']);
  
  const course = getCourseById(courseId || "");
  const topic = getCourseById(courseId || "")?.topics.find(t => t.id === topicId);
  
  if (!topic) return <div>Topic not found</div>;
  
  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };
  
  const handleComplete = () => {
    if (user && courseId) {
      markTopicCompleted(user.email, courseId, topicId || "");
    }
  };
  
  const SectionCollapsible = ({ id, title, content }: any) => (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full p-4 flex items-center justify-between bg-card hover:bg-accent/5"
      >
        <h3 className="font-semibold text-foreground">{title}</h3>
        <ChevronDown className={`w-4 h-4 transition-transform ${
          expandedSections.includes(id) ? 'rotate-180' : ''
        }`} />
      </button>
      
      {expandedSections.includes(id) && (
        <div className="p-4 border-t border-border text-muted-foreground whitespace-pre-wrap">
          {content}
        </div>
      )}
    </div>
  );
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-bold mb-2">{topic.title}</h1>
        <p className="text-muted-foreground mb-6">
          Estimated time: {topic.estimatedMinutes} minutes
        </p>
        
        {/* Learning Content */}
        <div className="space-y-4 mb-8">
          <SectionCollapsible id="what" title="What?" content={topic.what} />
          <SectionCollapsible id="why" title="Why?" content={topic.why} />
          <SectionCollapsible id="when" title="When?" content={topic.when} />
          <SectionCollapsible id="how" title="How?" content={topic.how} />
          <SectionCollapsible id="ecosystem" title="Ecosystem" content={topic.ecosystem} />
          <SectionCollapsible id="realworld" title="Real World" content={topic.realWorld} />
        </div>
        
        {/* Code Examples */}
        {topic.codeSnippet && topic.codeSnippet.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Code Examples</h2>
            <div className="space-y-4">
              {topic.codeSnippet.map((snippet, idx) => (
                <div key={idx} className="border border-border rounded-lg bg-card p-4">
                  <h3 className="font-semibold mb-2">{snippet.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{snippet.language}</p>
                  <pre className="bg-black text-green-400 p-3 rounded overflow-x-auto text-xs mb-3">
                    {snippet.code}
                  </pre>
                  <p className="text-sm text-muted-foreground">{snippet.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Completion Button */}
        <button
          onClick={handleComplete}
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90"
        >
          Mark as Complete
        </button>
      </motion.div>
    </div>
  );
}
```

---

## 4. ROUTING SETUP

### 4.1 Update App Routes

```typescript
// src/App.tsx

import CoursePage from "./pages/CoursePage";
import TopicPage from "./pages/TopicPage";

const AppRoutes = () => (
  <Routes>
    {/* Existing routes */}
    
    {/* New Course Routes */}
    <Route path="/courses" element={<ProtectedRoute><CoursesListPage /></ProtectedRoute>} />
    <Route path="/course/:courseId" element={<ProtectedRoute><CoursePage /></ProtectedRoute>} />
    <Route path="/course/:courseId/learn/:topicId" element={<ProtectedRoute><TopicPage /></ProtectedRoute>} />
    
    {/* ... rest of routes */}
  </Routes>
);
```

---

## 5. DATABASE SCHEMA (if using backend)

```sql
CREATE TABLE courses (
  id VARCHAR(255) PRIMARY KEY,
  title_key VARCHAR(255),
  desc_key VARCHAR(255),
  icon VARCHAR(50),
  duration VARCHAR(100),
  level ENUM('beginner', 'intermediate', 'advanced'),
  category VARCHAR(50),
  status ENUM('draft', 'published', 'archived'),
  total_estimated_hours INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE course_modules (
  id VARCHAR(255) PRIMARY KEY,
  course_id VARCHAR(255) REFERENCES courses(id),
  title VARCHAR(255),
  description TEXT,
  sequence_number INT,
  estimated_hours INT
);

CREATE TABLE course_topics (
  id VARCHAR(255) PRIMARY KEY,
  course_id VARCHAR(255) REFERENCES courses(id),
  module_id VARCHAR(255) REFERENCES course_modules(id),
  title VARCHAR(255),
  sequence_number INT,
  estimated_minutes INT,
  what TEXT,
  why TEXT,
  when_val TEXT,
  how TEXT,
  ecosystem TEXT,
  real_world TEXT
);

CREATE TABLE user_course_progress (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(255),
  course_id VARCHAR(255) REFERENCES courses(id),
  completion_percentage INT,
  enrollment_date TIMESTAMP,
  last_accessed_at TIMESTAMP,
  certificate_earned BOOLEAN,
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE KEY unique_enrollment (user_id, course_id)
);

CREATE TABLE user_completed_topics (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(255),
  topic_id VARCHAR(255),
  completed_at TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE KEY unique_completion (user_id, topic_id)
);
```

---

## 6. TESTING

```typescript
// src/__tests__/course-utils.test.ts

import { getCourseById, getModuleTopics, getTopic } from "@/lib/course-utils";

describe("Course Utils", () => {
  it("should retrieve course by ID", () => {
    const course = getCourseById("backend-fundamentals");
    expect(course).toBeDefined();
    expect(course?.id).toBe("backend-fundamentals");
  });
  
  it("should get topics for module in order", () => {
    const topics = getModuleTopics("backend-fundamentals", "be-m1");
    expect(topics.length).toBeGreaterThan(0);
    expect(topics[0].sequenceNumber).toBeLessThan(topics[1].sequenceNumber);
  });
  
  it("should retrieve complete topic with all sections", () => {
    const topic = getTopic("backend-fundamentals", "be-t1-1");
    expect(topic?.what).toBeDefined();
    expect(topic?.why).toBeDefined();
    expect(topic?.how).toBeDefined();
  });
});
```

---

## SUMMARY

This implementation guide provides:

✅ **Type-safe interfaces** for course structure  
✅ **Comprehensive utility functions** for data access  
✅ **UI components** ready to integrate  
✅ **Progress tracking** system  
✅ **Database schema** for backend integration  
✅ **Testing examples** for quality assurance  

Next steps:
1. Create course data files for your content
2. Implement the UI components in your app
3. Set up the utility functions
4. Connect to your backend database
5. Add progress tracking
6. Implement certificate generation
