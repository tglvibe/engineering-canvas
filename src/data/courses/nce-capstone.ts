import { CourseEnhanced } from './types';

export const nceCapstone: CourseEnhanced = {
    id: "NCE-CAPSTONE",
    titleKey: "courses.nceCapstone",
    descKey: "courses.nceCapstoneDesc",
    icon: "🏁",
    duration: "6 weeks",
    languages: ["Visual Engineering", "Product Strategy", "User Testing", "Production Ops", "Portfolio Design"],
    category: "no-code",
    programIds: ["NCE-CAPSTONE", "NCE-APP", "NCE-ENTERPRISE"],
    trackId: "nce",
    level: "beginner",
    prerequisites: ["NCE-ADVANCED"],
    targetAudience: "Final-term students in the No-Code Engineering track who are ready to synthesize their skills—database modeling, automation, UI/UX, AI, and security—into a single, production-grade application that solves a real-world business problem.",
    learningOutcomes: [
        "Execute the full software development lifecycle (SDLC) using purely visual engineering tools and methodology",
        "Architect a multi-platform system where web, mobile, and automation layers share a unified database 'brain'",
        "Implement production-grade security and privacy rules that meet enterprise-level compliance standards",
        "Integrate advanced AI logic and external APIs to create a truly 'Intelligent' software product",
        "Deliver a 'Founders-Grade' portfolio project complete with documentation, user analytics, and a launch strategy"
    ],
    modules: [
        {
            id: "NCE-CAPSTONE-M1",
            title: "Problem Discovery & Technical Scoping",
            description: "Defining the 'What' and the 'How' before building.",
            sequenceNumber: 1,
            estimatedHours: 15,
            topics: ["NCE-CAPSTONE-M1-T1", "NCE-CAPSTONE-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Validate a market problem through user interviews and competitive research",
                "Create a 'Technical Blueprint' including data-schema, user-flows, and integration maps",
                "Draft a 6-week production sprint plan with clear weekly milestones"
            ]
        },
        {
            id: "NCE-CAPSTONE-M2",
            title: "Sprint 1: The Relational Foundation",
            description: "Building the skeleton and the security guards.",
            sequenceNumber: 2,
            estimatedHours: 20,
            topics: ["NCE-CAPSTONE-M2-T1", "NCE-CAPSTONE-M2-T2"],
            prerequisiteModuleIds: ["NCE-CAPSTONE-M1"],
            outcomes: [
                "Architect the production database in Xano or Airtable with high-normalization",
                "Implement 'Zero-Trust' privacy rules and Role-Based Access Control (RBAC)",
                "Configure the API bridge between the data source and the primary frontend"
            ]
        },
        {
            id: "NCE-CAPSTONE-M3",
            title: "Sprint 2: The Core Experience",
            description: "Designing the UI and the primary workflows.",
            sequenceNumber: 3,
            estimatedHours: 25,
            topics: ["NCE-CAPSTONE-M3-T1", "NCE-CAPSTONE-M3-T2"],
            prerequisiteModuleIds: ["NCE-CAPSTONE-M2"],
            outcomes: [
                "Build a fully responsive dashboard using advanced data-binding and flexbox layouts",
                "Implement the 'Happy Path' user journey with robust error-handling logic",
                "Integrate core transactional features (e.g. Payments via Stripe or Scheduling via Cal.com)"
            ]
        },
        {
            id: "NCE-CAPSTONE-M4",
            title: "Sprint 3: The Intelligence Layer",
            description: "Adding AI, Automations, and Advanced Extensions.",
            sequenceNumber: 4,
            estimatedHours: 20,
            topics: ["NCE-CAPSTONE-M4-T1", "NCE-CAPSTONE-M4-T2"],
            prerequisiteModuleIds: ["NCE-CAPSTONE-M3"],
            outcomes: [
                "Configure an AI-powered feature (RAG, Sentiment Analysis, or Agentic workflows)",
                "Develop background automation 'Cleaners' that maintain data hygiene",
                "Inject custom JavaScript extensions for any features outside the platform's native scope"
            ]
        },
        {
            id: "NCE-CAPSTONE-M5",
            title: "Production Ops & Portfolio Launch",
            description: "Polish, performance, and professional presentation.",
            sequenceNumber: 5,
            estimatedHours: 15,
            topics: ["NCE-CAPSTONE-M5-T1", "NCE-CAPSTONE-M5-T2"],
            prerequisiteModuleIds: ["NCE-CAPSTONE-M4"],
            outcomes: [
                "Perform a comprehensive load-audit and optimize database queries for speed",
                "Set up production analytics (PostHog/Mixpanel) to track user behavior",
                "Create a 'Case Study' page and technical documentation for potential employers"
            ]
        }
    ],
    topics: [
        {
            id: "NCE-CAPSTONE-M1-T1",
            moduleId: "NCE-CAPSTONE-M1",
            sequenceNumber: 1,
            title: "The Technical Blueprint: Architectural Planning",
            estimatedMinutes: 240,
            what: "A Technical Blueprint is the 'Master Plan' for your software. Before building a single block, you must map out: 1. The ERD (Entity Relationship Diagram), 2. The User Persona Journeys (UX flows), and 3. The Integration Map (How system A talks to system B).",
            why: "Building a complex app without a blueprint is like building a skyscraper without a structural drawing. You will inevitably 'Paint yourself into a corner' with data errors or security holes. Professional visual engineering starts with a pen and paper—or a diagramming tool like Miro or Whimsical.",
            when: "The very first week of the capstone project.",
            how: "1. Define your 3 core data objects and their relationships (1-to-many, many-to-many). 2. Sketch the 5 main screens. 3. List the 5 critical APIs you will need to connect. 4. Identify the 'Security Boundary' (Who can see what?).",
            ecosystem: "Diagramming Tools (Miro, LucidChart), Project Management (Linear, Trello), UI Sketching (Figma).",
            realWorld: "A startup team spent 3 months building a marketplace. On launch day, they realized their database was 'Flat' and couldn't handle multiple vendors per order. They had to scrap the whole thing. If they had spent 1 day on a Technical Blueprint, they would have seen the 'Junction Table' requirement and saved 90 days of work. Architecture saves time.",
            useCases: [
                "Mapping out the data flow for a multi-tenant property management portal",
                "Designing the complex logic for an automated supply-chain dashboard",
                "Architecting a mobile social network with nested comments and real-time likes"
            ],
            advantages: [
                "Future-Proofing: Your database structure will grow with the business",
                "Security: You identify potential data-leaks before they are built",
                "Speed: You build faster when you aren't 'thinking' about logic while 'clicking' buttons"
            ],
            disadvantages: [
                "Initial friction: It's tempting to start building immediately, but discipline is required to plan first."
            ],

            interviewTip: "If asked 'How do you handle scope creep?', answer: 'I rely on my Technical Blueprint. If a new feature is requested, I map it into the existing ERD. If it requires a fundamental change to the data schema, I explain the technical trade-offs to the stakeholders before proceeding.'",
            resumeBullet: "Architected a comprehensive technical blueprint for a full-stack visual application, reducing development rework by 40% through rigorous pre-build planning.",

            videos: [
                { type: "public", title: "Architecture for No-Coders", author: "Makerpad", views: "30K views", duration: "18:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "How to Design a SQL Database (Conceptual)", author: "Web Dev Simplified", views: "1M views", duration: "12:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Udemy", rating: 4.9, title: "Product Management for Software Engineers", instructor: "Cole Mercer", enrolled: "100K+", duration: "15 hours", url: "https://www.udemy.com/course/become-a-product-manager-learn-the-skills-get-the-job/" }
            ],
            blogs: [
                { type: "Core", title: "Why Architecture Matters in No-Code", publisher: "Bubble Blog", readTime: "15 min", url: "https://bubble.io/blog/app-architecture/" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Relational Knot", category: "Data Architecture", estimatedTime: "6 hours",
                    scenarioDescription: "A student wants to build a 'Job Board' where one Job Post can have multiple 'Tags' (e.g., Remote, Full-time, Java). They start by adding a Text field called 'Tags' and typing 'Remote, Java' into it. Later, they want to filter jobs by 'Java', but the search fails because the computer sees the whole string, not the individual tag.",
                    problemAnalysis: "This is a 'Flat Data' mistake. Tags should not be a text string; they should be a separate 'Table'. We need a 'JobPosts' table and a 'Tags' table, connected by a 'Junction Table' or a 'List of Objects'. This allows the computer to 'Filter' precisely by Tag ID.",
                    architectureLayers: ["Relational Database Layer", "Search & Query Logic", "Data Normalization"],
                    toolsAndTech: [{ name: "Junction Tables", justification: "By creating a many-to-many relationship, we enable powerful filtering that 'Flat' text could never achieve. This is the hallmark of a 'Visual Engineer' vs a 'Website Builder'. It allows the job board to scale to 10,000 tags with 0% search latency." }],
                    tradeOffs: ["Setting up relations takes more clicks initially but is the only way to build a functional search engine."],
                    nfrConsiderations: ["Scalability: The search must work instantly even with 100+ different tags."],
                    kpis: ["Achieve 100% accurate results in a multi-tag search query."],
                    keyInsights: "If you have a list of things inside a field, you probably need a new table."
                }
            ],
            playgrounds: [
                {
                    title: "The ERD Constructor",
                    description: "Visualizing the Table connections.",
                    examples: [
                        {
                            language: "Database Relationship",
                            code: "Table [Users] (1) <---> (n) Table [Posts]\nTable [Posts] (n) <---> (m) Table [Tags]\nJunction Table [PostTags] (stores Post_ID + Tag_ID)"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "planning/erd-v1",
                commitMessage: "planning: finalized the relational schema for the Capstone project including junction tables for many-to-many tag relations",
                files: [{ name: "Docs/Architecture.pdf", type: "file", content: "blueprint" }],
                activeFileSnippet: { filename: "ERD.md", code: "ENTITY: Jobs; RELATION: HAS_MANY: Applications;" }
            },
            community: {
                aiSummary: "The first line of code in a no-code app isn't a click—it's a diagram. If your diagram is clean, your app will be clean.",
                solutions: []
            }
        },
        {
            id: "NCE-CAPSTONE-M5-T1",
            moduleId: "NCE-CAPSTONE-M5",
            sequenceNumber: 1,
            title: "The Production Audit: Polish & Performance",
            estimatedMinutes: 240,
            what: "The Production Audit is the final quality-check before a software product goes live. It involves: 1. Speed Testing (Page load and query speed), 2. Security Testing (Privacy rule verification), 3. Accessibility Testing (Screen readers and mobile friendly), and 4. Analytical Setup (Tracking how users actually use the app).",
            why: "A 'Finished' app that is slow or insecure is a liability. In a professional environment, you are judged by the 'Last 10%' of the project—the polish. Real-world users have no patience for bugs. An audit ensures you launch a 'Premium' product that builds trust from the first click.",
            when: "The final 2 weeks of the capstone project.",
            how: "1. Run the app through Google Lighthouse. 2. Use 'Inspect' to check for console errors. 3. Log in as a 'Guest' to verify they can't see 'Admin' data. 4. Optimize large images and redundant database queries.",
            ecosystem: "Google Lighthouse, PostHog (Product Analytics), Hotjar (Heatmaps), Sentry (Error logging).",
            realWorld: "A capstone project student built a beautiful 'E-commerce' app. On audit day, they realized their 'Check Inventory' workflow ran 10 times per second, which would have cost $500/month in API fees. By 'Caching' the inventory result for 1 minute, they reduced the cost to $5/month. The audit saved the business before it even started.",
            useCases: [
                "Optimizing a heavy data portal to load in under 2 seconds on mobile 4G",
                "Configuring 'User Path Tracking' to see exactly where people drop off in a sign-up flow",
                "Hardening the security of a financial app by auditing every server-side action"
            ],
            advantages: [
                "Trust: Your app feels solid, not 'Fragile'",
                "Budget: You catch 'Expensive' logic bugs before the bill arrives",
                "Career: A polished product is 10x more impressive in a job interview"
            ],
            disadvantages: [
                "Humility: You will find bugs in your own work, which can be frustrating."
            ],

            interviewTip: "If asked 'How do you know your app is ready for launch?', answer: 'I perform a dual-audit. Functionally, I run end-to-end regression tests. Technically, I audit the database query latency and privacy rule exposure. Only when both are green is the app 1.0 ready.'",
            resumeBullet: "Executed a comprehensive production audit and performance optimization, improving app responsiveness by 60% and ensuring 100% security compliance before public launch.",

            videos: [
                { type: "public", title: "App Launch Checklist 2026", author: "Gregory John", views: "40K views", duration: "15:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Optimizing No-Code Performance", author: "Bubble.io", views: "100K views", duration: "22:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Udacity", rating: 4.8, title: "Web Performance Optimization", instructor: "Google", enrolled: "200K+", duration: "12 hours", url: "https://www.udacity.com/course/website-performance-optimization--ud884" }
            ],
            blogs: [
                { type: "Core", title: "The Finish Line: A Guide to Polishing", publisher: "Glide Apps", readTime: "20 min", url: "https://www.glideapps.com/blog/app-launch-checklist" }
            ],
            scenarios: [
                {
                    id: "5.1", difficulty: "Medium", title: "The Silent Failure", category: "Monitoring", estimatedTime: "4 hours",
                    scenarioDescription: "Your app is live! 100 users have signed up. But suddenly, your 'Support' inbox is full of people saying 'I can't save my profile'. You log in as an Admin and it works for you. You don't know what's wrong because the app isn't crashing—it's just not working for them.",
                    problemAnalysis: "This is a 'Silent Workflow Error'. Something is failing for certain users but not others. The solution is 'Observability'. You must integrate a tool like 'Sentry' or a custom 'Error Dashboard' in your app that logs every failed workflow. You discover that users with 'Apostrophes' in their names (e.g. O'Connor) are breaking your text-saving logic. You fix the 'Escaping' and the app is back to normal.",
                    architectureLayers: ["Monitoring Layer (Sentry/Logs)", "Validation Logic", "Production Runtime"],
                    toolsAndTech: [{ name: "Sentry / Error Logging", justification: "By having a real-time 'Error Feed', you stop 'Guessing' and start 'Reading' the facts. This is the difference between a project and a professional service. You catch the bug, fix it, and inform the users before they even realize it was a global issue." }],
                    tradeOffs: ["Setting up logs takes 1 hour but saves 100+ hours of manual support work."],
                    nfrConsiderations: ["Observability: 100% of failed server actions must be logged with a UserID and Timestamp."],
                    kpis: ["Achieve a 'Time-to-Fix' (MTTR) of under 30 minutes for production bugs."],
                    keyInsights: "If you don't have logs, you are flying blind."
                }
            ],
            playgrounds: [
                {
                    title: "The Audit Console",
                    description: "Visualizing the Error Log.",
                    examples: [
                        {
                            language: "Log Entry (Conceptual)",
                            code: "TIME: 14:02; USER: 123; ACTION: SaveProfile; STATUS: FAILED; ERROR: 'Invalid Character O'Connor' at Column 2;"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "ops/monitoring-v1",
                commitMessage: "ops: integrated real-time error logging and performance monitoring dashboards for the production launch",
                files: [{ name: "Config/Sentry_Init.json", type: "file", content: "config" }],
                activeFileSnippet: { filename: "Dashboard.md", code: "Monitor: API_Success_Rate; Alert: If Rate < 95%;" }
            },
            community: {
                aiSummary: "The launch is the beginning, not the end. Build a system that tells you when it's hurting so you can heal it.",
                solutions: []
            }
        }
    ],
    videoCount: 0,
    articleCount: 0,
    problemCount: 0,
    capstoneProject: {
        title: "THE MASTERPIECE: Full-Scale Visual Enterprise Build",
        description: "This is the culmination of your journey. You will choose a significant real-world problem—such as a 'Multi-Vendor Healthcare Supply Chain', a 'AI-Powered Legal Document Analyzer', or a 'Global Freelance Talent Marketplace'. You will build the ENTIRE system: 1. A High-Performance Relational Backend (Xano), 2. A Responsive Web Frontend (Bubble/WeWeb), 3. A Native-ready Mobile App (FlutterFlow/Adalo), and 4. A Multi-service Automation Logic (Make). Your project must include strict RBAC, production-grade security, a RAG-based AI feature, and a full performance audit. You will document the entire build in a technical case study. By completing this, you aren't just a 'no-coder'—you are a Visual Engineer capable of architecting complex modern software for any business on earth.",
        estimatedDays: 42,
        skillsFocused: [
            "End-to-End Visual Engineering Architecture",
            "Multi-platform System Synchronization",
            "Enterprise Security & Compliance (GDPR/PII)",
            "Advanced AI Agent & RAG Integration",
            "Production Performance & Latency Optimization",
            "Product Strategy & Launch Management"
        ],
        steps: [
            {
                title: "Phase 1: Deep Discovery",
                description: "Validate the problem and deliver the complete Technical Blueprint (ERD, User Stories, System Map)."
            },
            {
                title: "Phase 2: The Core Build",
                description: "Implement the database and primary web/mobile interfaces with full visual logic."
            },
            {
                title: "Phase 3: The Intelligence Pulse",
                description: "Integrate the AI features and complex API connections to create the product's 'Brain'."
            },
            {
                title: "Phase 4: The Final Audit",
                description: "Stress-test the system, audit the security, optimize performance, and launch your professional case study."
            }
        ]
    },
    totalEstimatedHours: 150,
    estimatedCompletionDays: 42,
    moduleCount: 6,
    createdAt: "2026-02-28T00:00:00Z",
    updatedAt: "2026-02-28T00:00:00Z",
    version: "1.0",
    status: "published"
};
