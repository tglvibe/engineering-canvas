# COURSE STRUCTURE - VISUAL HIERARCHY & ARCHITECTURE

## 1. HIERARCHICAL ARCHITECTURE DIAGRAM

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            TALENCIA GLOBAL                                   │
│                     Learning Hierarchy Structure                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌── LEVEL 1: CATEGORIES ────────────────────────────────────────────────────────┐
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                           │
│  │ HIGH-CODE   │  │  LOW-CODE   │  │  NO-CODE    │                           │
│  │   (💻)      │  │   (🔧)      │  │   (✨)      │                           │
│  └─────────────┘  └─────────────┘  └─────────────┘                           │
└───────────────────────────────────────────────────────────────────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
┌──LEVEL 2: JOB ROLES────────────────────────────────────────────────────────┐
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                     │
│  │ Backend Dev  │  │ Frontend Dev │  │ Full Stack   │  ... Other Roles    │
│  │    (⚙️)      │  │    (🎨)      │  │    (🔗)      │                     │
│  └──────────────┘  └──────────────┘  └──────────────┘                     │
└────────────────────────────────────────────────────────────────────────────┘
         │
┌──LEVEL 3: PROGRAMS───────────────────────────────────────────────────────────┐
│  (Job Role contains multiple programs with different focuses)               │
│                                                                              │
│  Backend Dev Role contains:                                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────┐     │
│  │ Backend Mastery      │  │ API Specialist       │  │ System Design│     │
│  │ (16 weeks)           │  │ (10 weeks)           │  │ (12 weeks)   │     │
│  │ ⚙️ Core + Advanced    │  │ 🔗 API Focus         │  │ 🏗️ Architecture│     │
│  └──────────────────────┘  └──────────────────────┘  └──────────────┘     │
└────────────────────────────────────────────────────────────────────────────┘
         │
┌──LEVEL 4: COURSES────────────────────────────────────────────────────────────┐
│  (Program contains multiple courses)                                         │
│                                                                              │
│  Backend Mastery Program contains:                                           │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │ Course 1: Backend Fundamentals (6 weeks)                          │    │
│  │ Course 2: Database Engineering (5 weeks)                          │    │
│  │ Course 3: Backend Advanced Patterns (5 weeks)                     │    │
│  └────────────────────────────────────────────────────────────────────┘    │
└────────────────────────────────────────────────────────────────────────────┘
         │
┌──LEVEL 5: MODULES (Inside each Course)──────────────────────────────────────┐
│  (Course contains 4-10 modules)                                             │
│                                                                              │
│  Backend Fundamentals (6-week course) contains:                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐            │
│  │ Module 1        │  │ Module 2        │  │ Module 3        │            │
│  │ Backend Basics  │  │ REST APIs       │  │ Authentication  │            │
│  │ (1.5 weeks)     │  │ (1.5 weeks)     │  │ (1.5 weeks)     │            │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘            │
└────────────────────────────────────────────────────────────────────────────┘
         │
┌──LEVEL 6: TOPICS (Inside each Module)────────────────────────────────────────┐
│  (Module contains 3-5 topics)                                               │
│                                                                              │
│  Module 1: Backend Basics contains:                                         │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐               │
│  │ Topic 1-1      │  │ Topic 1-2      │  │ Topic 1-3      │               │
│  │ What is Backend│  │ Client-Server  │  │ HTTP Protocol  │               │
│  │ Development    │  │ Architecture   │  │                │               │
│  │ (45 mins)      │  │ (60 mins)      │  │ (75 mins)      │               │
│  └────────────────┘  └────────────────┘  └────────────────┘               │
└────────────────────────────────────────────────────────────────────────────┘
         │
┌──LEVEL 7: LEARNING MATERIALS (For each Topic)──────────────────────────────┐
│  (Each topic has multiple resource types)                                  │
│                                                                             │
│  Topic 1-1: What is Backend Development contains:                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐    │
│  │ 📹 Videos│  │ 📰 Blogs │  │ 🎓 MOOCs │  │ 🧮 Code  │  │ 🎯Cases │    │
│  │          │  │          │  │          │  │ Examples │  │ Studies │    │
│  │ 4 items  │  │ 3 items  │  │ 2 items  │  │ 5 items  │  │ 1 item  │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └─────────┘    │
└────────────────────────────────────────────────────────────────────────────┘
         │
         ▼
    STUDENT LEARNS
```

---

## 2. COURSE STRUCTURE - DETAILED BREAKDOWN

### Course Container

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ COURSE: Backend Fundamentals                                                │
│                                                                              │
│ Metadata:                                                                    │
│ ├─ ID: backend-fundamentals                                                │
│ ├─ Duration: 6 weeks (48 hours)                                            │
│ ├─ Level: Beginner → Intermediate                                          │
│ ├─ Languages: [TypeScript, Python, Go, Java]                              │
│ ├─ Category: High-Code                                                     │
│ ├─ Part of Programs: [backend-mastery, api-specialist, fullstack-mastery] │
│ └─ Status: Published v2.1                                                  │
│                                                                              │
│ Learning Outcomes:                                                          │
│ ├─ Build production-ready REST APIs                                        │
│ ├─ Design database schemas                                                 │
│ ├─ Implement authentication & authorization                                │
│ └─ Deploy and scale applications                                           │
│                                                                              │
│ Capstone Project: Production REST + GraphQL API                            │
│ └─ Timeline: 2 weeks after course                                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Module Structure Within Course

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ MODULE 1: Backend Fundamentals Basics                                        │
│ ├─ Sequence: 1st (out of 8 modules)                                        │
│ ├─ Duration: 8 hours                                                        │
│ ├─ Status: Sequential (no prerequisites)                                    │
│ │                                                                            │
│ ├─ Learning Outcomes:                                                       │
│ │  ├─ Understand client-server architecture                                │
│ │  ├─ Learn HTTP protocol fundamentals                                     │
│ │  └─ Set up development environment                                       │
│ │                                                                            │
│ ├─ Contains 3 Topics:                                                       │
│ │                                                                            │
│ │  ┌─ TOPIC 1: What is Backend Development?                               │
│ │  │  ├─ Sequence: 1st                                                     │
│ │  │  ├─ Time: 45 minutes                                                  │
│ │  │  ├─ Content Sections:                                                 │
│ │  │  │  ├─ What: Definition & role of backend                            │
│ │  │  │  ├─ Why: Importance in software architecture                      │
│ │  │  │  ├─ When: Use cases for backend development                       │
│ │  │  │  ├─ How: Technologies & methodologies                             │
│ │  │  │  ├─ Ecosystem: Relationship with other layers                     │
│ │  │  │  └─ Real World: Netflix example                                    │
│ │  │  │                                                                    │
│ │  │  ├─ Resources Summary:                                                │
│ │  │  │  ├─ 📹 Videos: 4                                                   │
│ │  │  │  ├─ 📰 Articles: 3                                                 │
│ │  │  │  ├─ 🎓 MOOCs: 2                                                    │
│ │  │  │  ├─ 🧮 Code Examples: 5                                            │
│ │  │  │  └─ 🎯 Scenarios: 1                                                │
│ │  │  │                                                                    │
│ │  │  └─ Career Readiness:                                                 │
│ │  │     ├─ Interview Tip: Discuss scalability challenges                 │
│ │  │     └─ Resume Bullet: "Designed REST APIs..."                        │
│ │  │                                                                        │
│ │  ┌─ TOPIC 2: Client-Server Architecture                                  │
│ │  │  └─ [Similar structure as Topic 1]                                    │
│ │  │                                                                        │
│ │  └─ TOPIC 3: HTTP Protocol Fundamentals                                  │
│ │     └─ [Similar structure as Topic 1]                                    │
│ │                                                                            │
│ │  ⚡ Prerequisites for Next Module:                                        │
│ │     └─ Complete all 3 topics in this module                              │
│ │                                                                            │
│ └─ Progress Tracking:                                                       │
│    ├─ Student Progress: X/3 topics completed                               │
│    ├─ Time Spent: HH hours                                                 │
│    └─ Estimated Completion: X days remaining                               │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ MODULE 2: Server Setup & Basics                                             │
│ └─ [Similar structure, builds on Module 1]                                  │
│                                                                              │
│ MODULE 3: REST APIs & Web Services                                          │
│ └─ [Similar structure, builds on Modules 1-2]                              │
│                                                                              │
│ ... (5 more modules)                                                        │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. TOPIC RESOURCE STRUCTURE

### Complete Topic View

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ TOPIC: What is Backend Development?                                          │
│                                                                               │
│ Metadata:                                                                     │
│ ├─ ID: t1-be                                                                │
│ ├─ Module: Backend Fundamentals Basics (Module 1)                          │
│ ├─ Sequence: 1st topic in module                                           │
│ ├─ Duration: 45 minutes                                                     │
│ └─ Difficulty: Beginner                                                     │
│                                                                               │
├─ LEARNING CONTENT (Core) ─────────────────────────────────────────────────────┤
│                                                                               │
│ 📖 WHAT (Conceptual Understanding):                                         │
│ │  Backend development is the creation of server-side logic, databases,    │
│ │  and APIs that support frontend applications...                          │
│ │                                                                             │
│ 🎯 WHY (Purpose & Importance):                                              │
│ │  Backend systems handle business logic, authentication, data storage,    │
│ │  and process client requests. Essential for scalable applications.       │
│ │                                                                             │
│ 🕐 WHEN (Use Cases):                                                        │
│ │  • User-facing applications needing persistent data                      │
│ │  • Multi-user systems with authentication                                │
│ │  • APIs consumed by multiple clients                                     │
│ │  • Real-time data processing applications                                │
│ │                                                                             │
│ 🔧 HOW (Implementation):                                                    │
│ │  Choose a language (Node.js, Python, Go), set up a framework            │
│ │  (Express, Django, Gin), connect a database (PostgreSQL, MongoDB)...    │
│ │                                                                             │
│ 🌍 ECOSYSTEM (Broader Context):                                             │
│ │  Backend sits between frontend (user interface) and databases,           │
│ │  connecting with DevOps (infrastructure), QA (testing), etc.             │
│ │                                                                             │
│ 📊 REAL WORLD (Examples):                                                   │
│ │  Netflix uses microservices for their backend handling millions of      │
│ │  concurrent requests across 200+ countries...                           │
│                                                                               │
├─ LEARNING MATERIALS ──────────────────────────────────────────────────────────┤
│                                                                               │
│ 📹 VIDEOS (4 resources from topicVideos[t1-be]):                           │
│ │                                                                             │
│ │ 1. Backend Engineering Explained — Complete Roadmap 2024                 │
│ │    Channel: Fireship | Duration: 12:34 | Views: 2.1M | Type: Public    │
│ │    ├─ Difficulty: Beginner                                               │
│ │    └─ Tags: [introduction, fundamentals, overview]                       │
│ │                                                                             │
│ │ 2. How Backend Systems Actually Work                                      │
│ │    Channel: ByteByteGo | Duration: 18:22 | Views: 890K | Type: Public  │
│ │    ├─ Difficulty: Beginner                                               │
│ │    └─ Tags: [architecture, systems, overview]                            │
│ │                                                                             │
│ │ 3. Production Backend Architecture Deep Dive (PREMIUM)                   │
│ │    Channel: TGL Academy | Duration: 45:10 | Views: 12K | Type: Premium │
│ │    ├─ Difficulty: Intermediate                                           │
│ │    └─ Tags: [architecture, production, advanced]                         │
│ │                                                                             │
│ │ 4. Building Your First Backend — Hands-on Workshop (PREMIUM)             │
│ │    Channel: TGL Academy | Duration: 1:22:00 | Views: 8.4K | Premium    │
│ │    ├─ Difficulty: Beginner-Intermediate                                  │
│ │    └─ Tags: [hands-on, tutorial, project]                               │
│ │                                                                             │
│ 📰 ARTICLES (3 resources from topicBlogs[t1-be]):                           │
│ │                                                                             │
│ │ 1. The Complete Guide to Backend Development in 2024                     │
│ │    Source: roadmap.sh | Read Time: 15 min | Tag: Guide                 │
│ │    └─ Difficulty: Beginner                                               │
│ │                                                                             │
│ │ 2. Backend Architecture at Scale — Lessons from Netflix                  │
│ │    Source: Netflix Tech Blog | Read Time: 12 min | Tag: Case Study     │
│ │    └─ Difficulty: Advanced                                               │
│ │                                                                             │
│ │ 3. Choosing the Right Backend Language                                    │
│ │    Source: Dev.to | Read Time: 8 min | Tag: Opinion                    │
│ │    └─ Difficulty: Beginner                                               │
│ │                                                                             │
│ 🎓 MOOCS (2 resources from topicMOOCs[t1-be]):                             │
│ │                                                                             │
│ │ 1. Server-side Development with NodeJS, Express and MongoDB              │
│ │    Platform: Coursera | Instructor: Jogesh Muppala                       │
│ │    Rating: 4.7/5 | Enrolled: 120K+ | Duration: 52 hours                │
│ │    └─ Certificate available: Yes                                         │
│ │                                                                             │
│ │ 2. The Complete Backend Bootcamp                                         │
│ │    Platform: Udemy | Instructor: Dr. Angela Yu                          │
│ │    Rating: 4.8/5 | Enrolled: 350K+ | Duration: 65 hours                │
│ │    └─ Certificate available: Yes                                         │
│ │                                                                             │
│ 🧮 CODE EXAMPLES (Multiple implementations):                                │
│ │                                                                             │
│ │ Example 1: Express Server Setup                                          │
│ │ Language: TypeScript                                                     │
│ │ │                                                                          │
│ │ │ import express from 'express';                                        │
│ │ │ import cors from 'cors';                                              │
│ │ │ import helmet from 'helmet';                                          │
│ │ │                                                                          │
│ │ │ const app = express();                                                │
│ │ │ app.use(cors());                                                      │
│ │ │ app.use(helmet());                                                    │
│ │ │ app.use(express.json());                                              │
│ │ │                                                                          │
│ │ │ app.listen(3000, () => {                                              │
│ │ │   console.log('Server running on port 3000');                         │
│ │ │ });                                                                    │
│ │ │                                                                          │
│ │ └─ Output: "Server running on port 3000"                                │
│ │    Explanation: Basic setup with middleware for CORS, security...       │
│ │                                                                             │
│ │ Example 2: Python Flask Server                                           │
│ │ └─ [Similar structure in Python]                                        │
│ │                                                                             │
│ │ Example 3: Go Gin Framework                                              │
│ │ └─ [Similar structure in Go]                                            │
│ │                                                                             │
│ │ Example 4: Java Spring Boot                                              │
│ │ └─ [Similar structure in Java]                                          │
│ │                                                                             │
│ 🎯 SCENARIO PROBLEMS (1 major scenario from topicScenarios[t1-be]):       │
│ │                                                                             │
│ │ Scenario: Design a User Service for a Fintech Startup                   │
│ │ │                                                                          │
│ │ ├─ Difficulty: Medium                                                    │
│ │ ├─ Domain: Fintech                                                       │
│ │ ├─ Estimated Time: 4-6 hours                                             │
│ │ │                                                                          │
│ │ ├─ Context:                                                              │
│ │ │  A fintech startup needs a user management service handling            │
│ │ │  registration, auth, profile updates, and account deactivation.       │
│ │ │  Expected growth: 5K DAU → 100K in 12 months.                         │
│ │ │                                                                          │
│ │ ├─ Constraints:                                                          │
│ │ │  ├─ Data privacy compliance (GDPR, SOC 2)                            │
│ │ │  ├─ Support OAuth 2.0 + email/password auth                          │
│ │ │  ├─ Handle concurrent profile updates safely                          │
│ │ │  └─ Must be horizontally scalable                                     │
│ │ │                                                                          │
│ │ ├─ Deliverable:                                                          │
│ │ │  ├─ Working user service with REST API                                │
│ │ │  ├─ JWT-based authentication                                          │
│ │ │  ├─ Rate limiting implementation                                       │
│ │ │  └─ Database migrations & schemas                                      │
│ │ │                                                                          │
│ │ └─ Skills Focused:                                                       │
│ │ │  ├─ API Design                                                         │
│ │ │  ├─ Database Design                                                    │
│ │ │  ├─ Security/Auth                                                      │
│ │ │  └─ Scalability Patterns                                              │
│ │                                                                             │
│ │ Community Solutions: View X solutions from expert engineers              │
│ │ ├─ Top Solution: Implemented horizontal scaling + Redis...              │
│ │ ├─ Solution 2: Microservice architecture with gRPC...                   │
│ │ ├─ Solution 3: Kubernetes deployment with HPA...                        │
│ │ └─ Your Solution: (After completion, compare with others)               │
│                                                                               │
├─ CAREER READINESS ────────────────────────────────────────────────────────────┤
│                                                                               │
│ 💼 INTERVIEW TIP:                                                           │
│    "When asked about your backend experience, discuss specific              │
│     scalability challenges you've solved. Mention metrics like              │
│     requests/second, latency improvements, or cost optimizations."         │
│                                                                               │
│ 📝 RESUME BULLET:                                                           │
│    "Designed and implemented REST APIs handling 10K+ requests/sec           │
│     with sub-100ms latency using TypeScript, PostgreSQL, and Redis"        │
│                                                                               │
├─ RELATED TOPICS ──────────────────────────────────────────────────────────────┤
│                                                                               │
│ Prerequisites (should learn first):                                         │
│ └─ None (This is the first topic)                                          │
│                                                                               │
│ Recommended Next Topics:                                                    │
│ ├─ Topic 1-2: Client-Server Architecture                                   │
│ ├─ Topic 1-3: HTTP Protocol Fundamentals                                   │
│ └─ Topic 2-1: Setting Up Development Environment (Module 2)               │
│                                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. DATA MODEL DIAGRAM

```
┌─────────────────────┐
│    USER PROFILE     │
├─────────────────────┤
│ id                  │
│ name                │
│ level               │
│ goal                │
│ preferredLanguage   │
└──────────┬──────────┘
           │ enrolls
           ├────────────────┐
           │                │
           ▼                ▼
    ┌──────────────┐  ┌──────────────┐
    │ COURSE PROG  │  │ TRACK PROG   │
    │ (Modern)     │  │ (Legacy)     │
    └──────┬───────┘  └──────────────┘
           │
           ├─ Many ─────────────────┐
           │                        │
           ▼                        ▼
    ┌──────────────┐        ┌──────────────┐
    │   COURSE     │────────│   MODULES    │
    │              │        │              │
    │ id           │        │ id           │
    │ titleKey     │        │ title        │
    │ duration     │        │ sequenceNum  │
    │ level        │        │ estimatedHrs │
    │              │        │              │
    └──────────────┘        └──────┬───────┘
                                   │
                        Many ──────┴─────┐
                        │                │
                        ▼                ▼
                    ┌──────────────┐
                    │   TOPICS     │
                    │              │
                    │ id           │
                    │ title        │
                    │ what/why/how │
                    │ estimatedMin │
                    │              │
                    └──────┬───────┘
                           │
                Many ──────┴──────┬──────┬──────┐
                │                │      │      │
                ▼                ▼      ▼      ▼
           ┌────────┐  ┌─────────┐ ┌──────┐ ┌──────────┐
           │ VIDEOS │  │ ARTICLES│ │MOOCs │ │ SCENARIOS│
           └────────┘  └─────────┘ └──────┘ └──────────┘
               │
               ├─ Video 1
               ├─ Video 2
               └─ Video 3...

           ┌──────────┐
           │   CODE   │
           │ EXAMPLES │
           └──────────┘
               │
               ├─ Example 1 (TypeScript)
               ├─ Example 2 (Python)
               ├─ Example 3 (Go)
               └─ Example 4 (Java)
```

---

## 5. CONTENT ORGANIZATION FLOW

### How a Student Progresses Through a Course

```
START: Student Enrolls in Course
│
├─ 1. BROWSE COURSE
│  ├─ Views course overview
│  │  ├─ Title, duration, level
│  │  ├─ Learning outcomes
│  │  └─ Capstone project preview
│  │
│  └─ Sees Module Structure
│     ├─ Module 1 (expand)
│     │  ├─ Topic 1 [0/45 min]
│     │  ├─ Topic 2 [0/60 min]
│     │  └─ Topic 3 [0/75 min]
│     │
│     ├─ Module 2 (expand - locked)
│     └─ ... (later modules locked)
│
├─ 2. START MODULE 1
│  │
│  ├─ 2a. TOPIC 1: What is Backend?
│  │    │
│  │    ├─ Read Content Sections
│  │    │  ├─ What: 5 min read
│  │    │  ├─ Why: 3 min read
│  │    │  ├─ When: 2 min read
│  │    │  ├─ How: 10 min read
│  │    │  ├─ Ecosystem: 5 min read
│  │    │  └─ Real World: 5 min read
│  │    │
│  │    ├─ Watch Videos
│  │    │  ├─ [Optional] Fireship - 12 min
│  │    │  ├─ [Optional] ByteByteGo - 18 min
│  │    │  ├─ [Optional Premium] TGL Deep Dive - 45 min
│  │    │  └─ [Optional Premium] TGL Workshop - 82 min
│  │    │
│  │    ├─ Read Articles
│  │    │  ├─ [Optional] roadmap.sh - 15 min
│  │    │  ├─ [Optional] Netflix Blog - 12 min
│  │    │  └─ [Optional] Dev.to Opinion - 8 min
│  │    │
│  │    ├─ Browse MOOCs
│  │    │  ├─ [Optional] Coursera - 52 hours
│  │    │  └─ [Optional] Udemy - 65 hours
│  │    │
│  │    ├─ Review Code Examples
│  │    │  ├─ TypeScript Express Server
│  │    │  ├─ Python Flask Server
│  │    │  ├─ Go Gin Framework
│  │    │  └─ Java Spring Boot
│  │    │
│  │    ├─ Scenario Problem (OPTIONAL)
│  │    │  ├─ Read scenario description
│  │    │  ├─ Work on implementation (4-6 hours)
│  │    │  ├─ Compare with community solutions
│  │    │  └─ Upvote best solutions
│  │    │
│  │    ├─ Topic Completed! 
│  │    │  ├─ Mark as complete
│  │    │  ├─ Earn points
│  │    │  └─ Unlock next topic
│  │    │
│  │    └─ Interview Prep
│  │       ├─ Read interview tip
│  │       ├─ Copy resume bullet
│  │       └─ Add to profile
│  │
│  ├─ 2b. TOPIC 2: Client-Server Architecture
│  │    └─ (Same as Topic 1)
│  │
│  ├─ 2c. TOPIC 3: HTTP Protocol
│  │    └─ (Same as Topic 1)
│  │
│  ├─ MODULE 1 COMPLETE! ✓
│  │  ├─ Certificate of completion
│  │  ├─ Progress: 1/8 modules
│  │  ├─ Time breakdown
│  │  └─ Skill assessment
│  │
│  └─ Unlock Module 2
│
├─ 3. REPEAT FOR REMAINING MODULES
│  └─ Modules 2-8 follow same pattern
│
└─ 4. COURSE COMPLETION & CAPSTONE
   ├─ All 8 modules complete
   ├─ Start 2-week capstone project
   ├─ Integrate all 24 topics into one project
   ├─ Submit project
   ├─ Get peer/instructor feedback
   └─ EARN COURSE CERTIFICATE + SKILLS BADGE
```

---

## 6. STUDENT VIEW MOCKUP (UI Structure)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HEADER: Backend Fundamentals                      [← Back] [Dashboard] [⋮]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ ┌─ COURSE PROGRESS BAR ────────────────────────────────────────────────────┐ │
│ │ 62% Complete  3 / 8 Modules  │████████░░░░░░││ Est. 14 days remaining   │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│ LEFT SIDEBAR (Collapsible on mobile):          MAIN CONTENT AREA:           │
│ ┌──────────────────────────────┐                ┌───────────────────────┐   │
│ │ MODULES                      │                │ MODULE 1: Backend     │   │
│ │                              │                │ Fundamentals Basics   │   │
│ │ ✓ Module 1 (4/3 topics)      │                │                       │   │
│ │   ✓ Topic 1-1 (45 min)       │                │ Duration: 8 hours     │   │
│ │   ✓ Topic 1-2 (60 min)       │                │ Topics: 3 of 3 ✓      │   │
│ │   ✓ Topic 1-3 (75 min)       │                │                       │   │
│ │                              │                │ Learning Outcomes:    │   │
│ │ ✓ Module 2 (3/3 topics)      │                │ • Understand client-  │   │
│ │   ✓ Topic 2-1 (90 min)       │                │   server architecture │   │
│ │   ✓ Topic 2-2 (70 min)       │                │ • Learn HTTP protocol │   │
│ │   ✓ Topic 2-3 (65 min)       │                │ • Setup environment   │   │
│ │                              │                │                       │   │
│ │ in-progress Module 3 (1/2)   │                │ CURRENT TOPIC:        │   │
│ │   ◐ Topic 3-1 (75 min)       │◄─ (highlighted) │ Topic 1-1: What is   │   │
│ │   ○ Topic 3-2 (60 min)       │                │ Backend Development?  │   │
│ │                              │                │                       │   │
│ │ ○ Module 4 (locked)          │                │ Est. Time: 45 min     │   │
│ │ ○ Module 5 (locked)          │                │                       │   │
│ │ ○ Module 6 (locked)          │                │ ┌─────────────────┐   │   │
│ │ ○ Module 7 (locked)          │                │ │📹 4 Videos      │   │   │
│ │ ○ Module 8 (locked)          │                │ │📰 3 Articles    │   │   │
│ │                              │                │ │🎓 2 MOOCs       │   │   │
│ │ RESOURCES:                   │                │ │🧮 5 Code Ex.    │   │   │
│ │ 📊 Knowledge Graph           │                │ │🎯 1 Scenario    │   │   │
│ │ 🎬 All Videos                │                │ └─────────────────┘   │   │
│ │ 📚 All Articles              │                │                       │   │
│ │ 💬 Discussion                │                │ ┌─────────────────┐   │   │
│ │ ⭐ Community Solutions       │                │ │ TOPIC CONTENT   │   │   │
│ │                              │                │ │                 │   │   │
│ │ ▼ CAPSTONE PROJECT           │                │ [WHAT]              │   │
│ │ Production REST + GraphQL    │                │ Backend development │   │
│ │ Start in 4 weeks             │                │ is...               │   │
│ │                              │                │                     │   │
│ └──────────────────────────────┘                │ [WHY]               │   │
│                                                 │ Important because... │   │
│                                                 │                     │   │
│                                                 │ [WHEN]              │   │
│                                                 │ Use backend when... │   │
│                                                 │                     │   │
│                                                 │ [HOW]               │   │
│                                                 │ Implement by...     │   │
│                                                 │                     │   │
│                                                 ├─────────────────────┤   │
│                                                 │ 📹 WATCH VIDEOS     │   │
│                                                 │                     │   │
│                                                 │ 1. Fireship - 12min │   │
│                                                 │ 2. ByteByteGo - 18m │   │
│                                                 │ 3. TGL Deep Dive-45m│   │
│                                                 │    (Unlock premium) │   │
│                                                 │ 4. TGL Workshop-82m │   │
│                                                 │    (Unlock premium) │   │
│                                                 │                     │   │
│                                                 ├─────────────────────┤   │
│                                                 │ 📰 READ ARTICLES    │   │
│                                                 │ View 3 articles...  │   │
│                                                 │                     │   │
│                                                 ├─────────────────────┤   │
│                                                 │ 🧮 CODE EXAMPLES    │   │
│                                                 │                     │   │
│                                                 │ ▼ TypeScript        │   │
│                                                 │ [code block]        │   │
│                                                 │                     │   │
│                                                 │ ▼ Python            │   │
│                                                 │ [code block]        │   │
│                                                 │                     │   │
│                                                 │ + 2 More Languages  │   │
│                                                 │                     │   │
│                                                 ├─────────────────────┤   │
│                                                 │ ✓ [Mark Complete]   │   │
│                                                 │ [Next Topic]        │   │
│                                                 └─────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. DEVICE-RESPONSIVE LAYOUT

### Desktop View (as shown above)
- Sidebar + Main content (two-column)
- Full module outline visible
- All resource types accessible

### Tablet View
- Collapsible sidebar (hamburger menu)
- Wider content area
- Tab-based navigation

### Mobile View
```
┌─────────────────────────────────────┐
│ Backend Fundamentals [☰] [⋮]        │
├─────────────────────────────────────┤
│ 62% [████████░░░░] 14 days left    │
├─────────────────────────────────────┤
│                                     │
│ Module 1: Backend Fundamentals      │
│ ✓ Complete                          │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ CURRENT TOPIC:                  │ │
│ │ What is Backend Development?    │ │
│ │                                 │ │
│ │ Est. 45 minutes                 │ │
│ │                                 │ │
│ │ [↓ Read Content]                │ │
│ │                                 │ │
│ │ 📹 4 Videos                     │ │
│ │ 📰 3 Articles                   │ │
│ │ 🎓 2 MOOCs                      │ │
│ │ 🧮 5 Code Examples              │ │
│ │ 🎯 1 Scenario                   │ │
│ │                                 │ │
│ │ [↓ View Content]                │ │
│ └─────────────────────────────────┘ │
│                                     │
│ [✓ Mark Complete] [Next Topic →]   │
│                                     │
│ [All Modules ≡]                    │
│ [Knowledge Graph]                  │
│ [Community Solutions]              │
│                                     │
└─────────────────────────────────────┘
```

---

## Summary

This hierarchical structure enables:

✅ **Clear progression** - Students know exactly where they are  
✅ **Modular learning** - Can pause/resume at any point  
✅ **Rich resources** - Multiple learning styles supported  
✅ **Measurable outcomes** - Clear learning objectives  
✅ **Career alignment** - Interview tips & resume bullets  
✅ **Community engagement** - Scenario solutions & discussions  
✅ **Flexibility** - Works across all devices  
✅ **Scalability** - Can handle unlimited courses/modules
