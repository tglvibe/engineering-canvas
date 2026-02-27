import { CourseEnhanced } from './types';

export const nceWebDev: CourseEnhanced = {
    id: "NCE-WEB-DEV",
    titleKey: "courses.nceWebDev",
    descKey: "courses.nceWebDevDesc",
    icon: "🌐",
    duration: "4 weeks",
    languages: ["Visual Logic", "Bubble.io DSL", "Webflow CMS", "SEO Basics", "API Connector"],
    category: "no-code",
    programIds: ["NCE-WEB", "NCE-APP"],
    trackId: "nce",
    level: "beginner",
    prerequisites: ["NCE-FOUND", "NCE-DATABASE", "NCE-UIUX"],
    targetAudience: "Aspiring full-stack visual developers who want to build complex, database-driven web applications that scale, using professional-grade platforms like Bubble and Webflow.",
    learningOutcomes: [
        "Architect full-stack web applications by bridging professional UI design with relational database records",
        "Master 'Data Binding' to populate dynamic components (Repeating Groups) with real-time server data",
        "Implement 'Privacy Rules' and 'Security Roles' to ensure GDPR-compliant user data protection",
        "Configure 'Custom API' integrations to pull 3rd-party data or trigger external server actions",
        "Optimize web application performance (Page Load, Search Queries) for production-level traffic"
    ],
    modules: [
        {
            id: "NCE-WEB-DEV-M1",
            title: "Data-First vs. Design-First: Platform Selection",
            description: "Choosing between Bubble's logic-depth and Webflow's design-precision.",
            sequenceNumber: 1,
            estimatedHours: 10,
            topics: ["NCE-WEB-DEV-M1-T1", "NCE-WEB-DEV-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Explain when an app requires a 'Workflows Engine' (Bubble) vs. a 'CMS Engine' (Webflow)",
                "Perform a comparative cost-analysis for scaling to 1,000 active users",
                "Set up a professional development environment with version control (Versioning/Branches)"
            ]
        },
        {
            id: "NCE-WEB-DEV-M2",
            title: "Dynamic Data Binding",
            description: "Connecting the 'Front-End' design to 'Back-End' records.",
            sequenceNumber: 2,
            estimatedHours: 15,
            topics: ["NCE-WEB-DEV-M2-T1", "NCE-WEB-DEV-M2-T2"],
            prerequisiteModuleIds: ["NCE-WEB-DEV-M1"],
            outcomes: [
                "Configure 'Repeating Groups' to display filtered lists of database objects",
                "Use 'Slug' and 'Unique ID' patterns to create SEO-friendly dynamic pages",
                "Implement 'Input Masks' and 'Auto-binding' for real-time data entry"
            ]
        },
        {
            id: "NCE-WEB-DEV-M3",
            title: "Security & Privacy Architectures",
            description: "Ensuring your no-code app doesn't leak sensitive data.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["NCE-WEB-DEV-M3-T1", "NCE-WEB-DEV-M3-T2"],
            prerequisiteModuleIds: ["NCE-WEB-DEV-M2"],
            outcomes: [
                "Define 'Privacy Rules' at the database level to prevent 'Data Scraping'",
                "Implement 'Sign-up/Login' flows with 2FA/Email Verification",
                "Explain the 'Client-Side vs. Server-Side' security boundary in visual builders"
            ]
        },
        {
            id: "NCE-WEB-DEV-M4",
            title: "The API Connector: Beyond the Platform",
            description: "Connecting your app to the global software ecosystem.",
            sequenceNumber: 4,
            estimatedHours: 12,
            topics: ["NCE-WEB-DEV-M4-T1", "NCE-WEB-DEV-M4-T2"],
            prerequisiteModuleIds: ["NCE-WEB-DEV-M3"],
            outcomes: [
                "Set up the 'API Connector' to fetch data using GET requests",
                "Map JSON response fields into your visual application types",
                "Configure Bearer Token/OAuth2 authentication for protected endpoints"
            ]
        },
        {
            id: "NCE-WEB-DEV-M5",
            title: "Production Optimization & SEO",
            description: "Polishing the app for speed, search, and stability.",
            sequenceNumber: 5,
            estimatedHours: 10,
            topics: ["NCE-WEB-DEV-M5-T1", "NCE-WEB-DEV-M5-T2"],
            prerequisiteModuleIds: ["NCE-WEB-DEV-M4"],
            outcomes: [
                "Use 'Step-by-Step' debugging to trace failed database workflows",
                "Configure Sitemap.xml and Meta Tags (OG Tags) for social sharing",
                "Analyze 'Network Logs' to identify slow-loading image assets"
            ]
        }
    ],
    topics: [
        {
            id: "NCE-WEB-DEV-M1-T1",
            moduleId: "NCE-WEB-DEV-M1",
            sequenceNumber: 1,
            title: "The Full-Stack Visual Model",
            estimatedMinutes: 120,
            what: "A Full-Stack No-Code App consists of three layers: 1. The Database (Storage), 2. The Logic (Workflows), and 3. The UI (Design). Unlike simple website builders, full-stack platforms like Bubble manage the entire server-side runtime, allowing for complex user accounts, payments, and data-processing.",
            why: "Traditional full-stack development requires a huge team (Front-end Dev, Back-end Dev, DevOps). Visual engineering allows a 'Solo-Maker' or a small product team to build a production-grade application (like an Airbnb, Uber, or CRM clone) at 10% of the usual cost and time.",
            when: "When you need more than just a 'Brochure' website—whenever users need to 'Create', 'Edit', and 'Collaborate' on data.",
            how: "1. Define your data types (Users, Apartments, Bookings). 2. Design the interface (Landing Page, User Profile, Search Results). 3. Connect them with Workflows (When button clicked -> Create Booking -> Send Notification).",
            ecosystem: "Bubble.io (The giant of the ecosystem), Webflow + Wized (The designer's choice), Toddle (Performance focused).",
            realWorld: "Comet, a French marketplace for tech freelancers, built their entire platform on Bubble. They scale to thousands of users and handle millions in transaction volume. They chose no-code initially for speed, but stayed because the platform could handle the complex backend logic of matching freelancers to projects.",
            useCases: [
                "Building a Multi-Vendor Marketplace with splitting payments",
                "Architecting a Project Management SaaS with real-time collaboration",
                "Developing a custom HR portal with holiday-tracking logic"
            ],
            advantages: [
                "Independence: One person can build a 'Silicon Valley' grade product",
                "Iterative Power: Change your database schema in seconds, not weeks",
                "Integrated Auth: User logins and security are handled out of the box"
            ],
            disadvantages: [
                "Vendor dependency: You are building on someone else's infrastructure",
                "Complexity: Learning Bubble's logic engine takes significant effort"
            ],

            interviewTip: "If asked 'How do you scale a no-code app?', answer: 'I prioritize \"Server-Side\" actions. By moving heavy data processing from the user's browser to the platform's backend, we can handle significantly more traffic without compromising the user experience.'",
            resumeBullet: "Engineered a full-stack marketplace prototype in 4 weeks, achieving a 70% reduction in development costs compared to traditional outsourced dev.",

            videos: [
                { type: "public", title: "Full-Stack No-Code in 2026", author: "Gregory John", views: "150K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Bubble vs Webflow: Which is for you?", author: "Flux Academy", views: "80K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Bubble Academy", rating: 4.9, title: "The Bubble Bootcamp", instructor: "Andrew Vernon", enrolled: "50K+", duration: "20 hours", url: "https://bubble.io/academy" }
            ],
            blogs: [
                { type: "Technical", title: "Thinking in Bubble", publisher: "Zeroqode Blog", readTime: "30 min", url: "https://zeroqode.com/blog/bubble-full-stack-guide" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Logic vs. Speed Trade-off", category: "Architecture", estimatedTime: "4 hours",
                    scenarioDescription: "A client wants a highly visual portfolio site (Webflow style) but it needs a complex 'Client Dashboard' where users can upload files and see their billing (Bubble style). Should we build two sites or one?",
                    problemAnalysis: "This is a 'Hybrid Stack' challenge. Webflow has better SEO and design tools, but Bubble has better logic. The solution is often 'Webflow for the Landings' and 'Bubble for the App', connected via a subdomain (app.mycompany.com). Alternatively, use 'Wized' to add Bubble-like logic directly into the Webflow site.",
                    architectureLayers: ["SEO Layer (Webflow)", "Application Layer (Bubble/Wized)", "System Integration (Authentication)"],
                    toolsAndTech: [{ name: "Wized / Xano", justification: "Using Wized allows us to keep the beautiful Webflow design while connecting it to a powerful Xano backend. This gives us 'The Best of Both Worlds'—professional design and enterprise-level logic." }],
                    tradeOffs: ["Managing two platforms increases monthly cost but provides the best possible user experience and search ranking."],
                    nfrConsiderations: ["SEO: The public-facing site must load in under 1 second."],
                    kpis: ["Achieve 95+ SEO score while maintaining 100% functional parity in the user dashboard."],
                    keyInsights: "Don't force a design tool to behave like a logic tool. Use the right tool for each layer."
                }
            ],
            playgrounds: [
                {
                    title: "The Logic Constructor",
                    description: "Visualizing a 'Sign-Up' Workflow.",
                    examples: [
                        {
                            language: "Bubble DSL",
                            code: "Event: Button 'Sign Up' is clicked\n  Step 1: Account -> Sign the user up (Email: Input Email's value, Pass: Input Password's value)\n  Step 2: Data -> Create a new User_Profile\n  Step 3: Navigation -> Go to page 'Dashboard'"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "feat/user-auth",
                commitMessage: "feat: implemented secure user sign-up workflow with automated profile creation in the database",
                files: [{ name: "Logic/AuthFlow.json", type: "file", content: "auth logic" }],
                activeFileSnippet: { filename: "Workflows.md", code: "Trigger: CTA_Click -> Action: User_Login -> Result: Redirect" }
            },
            community: {
                aiSummary: "The 'Full-Stack' mindset is about connecting dots. Database -> Logic -> UI. If any of these dots are weak, the whole app feels 'Fake'.",
                solutions: []
            }
        },
        {
            id: "NCE-WEB-DEV-M2-T1",
            moduleId: "NCE-WEB-DEV-M2",
            sequenceNumber: 1,
            title: "Data Binding: Bringing Design to Life",
            estimatedMinutes: 240,
            what: "Data Binding is the process of telling a UI element (like a Text block or an Image) to 'Look' at a specific field in the database. Instead of typing 'Hello John', you bind the text to 'Current User's First Name'. When John logs in, he sees 'Hello John'. When Sarah logs in, she sees 'Hello Sarah'.",
            why: "Binding is what makes an app 'Dynamic'. Without it, you'd have to manually create a new page for every single user or product. With binding, you create ONE 'Product Page' design, and the platform automatically fills it with the correct data based on which product the user clicked on.",
            when: "Every single time you display information from your database on a screen.",
            how: "1. Select a UI element. 2. Use the 'Expression Builder' to link it (e.g., `Search for Apartments:first item's Price`). 3. Add 'Conditionals' to change the binding (e.g., `When Discount is active -> Price * 0.8`).",
            ecosystem: "Expression Builders (Bubble, FlutterFlow, Framer CMS), Wized Data Binding (for Webflow).",
            realWorld: "In the 'Zillow' no-code clone, the map and the listing side-bar are both bound to the same 'Houses' database. When you move the map, the binding updates the 'Search Query', which instantly updates the text and prices in the listing cards. This 'Reactive Binding' is why the app feels as fast as a custom JS app.",
            useCases: [
                "Populating a 'User Settings' page with the current user's profile photo and bio",
                "Building a 'News Feed' that automatically shows the 10 most recent articles",
                "Designing a 'Price Calculator' that updates live as the user moves a slider"
            ],
            advantages: [
                "Efficiency: Design once, populate infinite times",
                "Accuracy: Data pulling directly from the source eliminates typos",
                "Real-time: Changes in the database reflect in the UI almost instantly"
            ],
            disadvantages: [
                "Complexity: 'Nested' bindings (e.g., User's Company's Founder's Name) can be hard to track"
            ],

            interviewTip: "If asked 'What is the most common cause of a slow no-code app?', answer: 'Inefficient Data Binding. If you ask the app to \"Search the whole database\" for every single button on the page, it will lag. I use \"Cached States\" and \"Data Buffering\" to minimize unnecessary database pings.'",
            resumeBullet: "Optimized data-binding expressions across a 50-screen dashboard, improving page-load performance by 40%.",

            videos: [
                { type: "public", title: "Mastering the Bubble Expression Builder", author: "Coaching No Code Apps", views: "65K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Webflow CMS Data Binding 101", author: "Webflow", views: "200K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "AirDev University", rating: 4.8, title: "The Canvas Framework Deep-Dive", instructor: "AirDev Team", enrolled: "10K+", duration: "12 hours", url: "https://airdev.co/university" }
            ],
            blogs: [
                { type: "Core", title: "Thinking in Expressions", publisher: "Bubble.io Guide", readTime: "20 min", url: "https://manual.bubble.io/help-guides/building-a-user-interface/data-binding" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Hard", title: "The Performance Lag", category: "Optimization", estimatedTime: "6 hours",
                    scenarioDescription: "A real-estate app has a list of 5,000 houses. Inside each row of the list, there is a binding that says: 'Search for all Reviewers who liked this house count'. The page takes 10 seconds to load.",
                    problemAnalysis: "This is a 'Nested Search' bottleneck. For 5,000 houses, the app is doing 5,000 searches for reviewers. That's too much. The solution is to 'Denormalize' this specific data point. We should have a field on the 'House' object called 'LikeCount (Number)'. We increment this number when a user likes. Now, the binding just looks at a single number instead of doing a search.",
                    architectureLayers: ["Data Retrieval Layer (Search speed)", "UI Rendering Buffer", "Denormalization Logic"],
                    toolsAndTech: [{ name: "Denormalized Aggregates", justification: "By storing the 'Result' of the calculation in the database ahead of time, we trade a tiny bit of storage space for a 10x increase in UI speed. This is a standard 'Power-User' move in no-code architecture." }],
                    tradeOffs: ["Denormalization requires more complex workflows to keep the number 'in sync', but it's the only way to scale to 100K+ records."],
                    nfrConsiderations: ["Speed: Lists with 1,000+ items must render in under 500ms."],
                    kpis: ["Achieve a 90% reduction in database queries during page-render."],
                    keyInsights: "If you are searching inside a list, you are building a slow app."
                }
            ],
            playgrounds: [
                {
                    title: "The Binding Simulator",
                    description: "Visualizing Dynamic Text.",
                    examples: [
                        {
                            language: "JSON (Configuration)",
                            code: "{\n  \"Element\": \"Text_Greeting\",\n  \"Formula\": \"'Welcome back, ' + Current_User.First_Name\",\n  \"Fallback\": \"'Welcome back, Guest'\"\n}"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "ui/dynamic-binding",
                commitMessage: "ui: migrated static landing sections to dynamic data bindings to enable multi-language support",
                files: [{ name: "Database/Bindings.json", type: "file", content: "binding map" }],
                activeFileSnippet: { filename: "Bindings.md", code: "Bind: Text(Price) -> Data: House.Cost + Tax(15%)" }
            },
            community: {
                aiSummary: "Binding is the 'Nervous System' of your app. It sends signals from the brain (Database) to the hands (UI).",
                solutions: []
            }
        }
    ],
    videoCount: 420,
    articleCount: 280,
    problemCount: 190,
    capstoneProject: {
        title: "The Multi-User Collaboration SaaS",
        description: "You will build a professional 'Team Management' application (SaaS). First, you will architect a database that handles 'Teams' (Organizations), 'Members' (Users with Roles), and 'Projects'. You will implement complex 'Privacy Rules' so that User A from Team 1 cannot see any data from Team 2, even if they guess the URL. You will build a sophisticated 'Dashboard' with data bindings that show Team Progress, Recent Activity, and a Project List with real-time status updates. Next, you will integrate an external 'Billing API' (like Stripe) using the API Connector to handle subscriptions. Finally, you will implement a 'Full-Text Search' feature and optimize the data structure for speed, ensuring 1,000+ projects load instantly. This project proves you can build, secure, and scale an enterprise-level SaaS product using a 100% visual full-stack approach.",
        estimatedDays: 14,
        skillsFocused: [
            "Full-Stack Data Architecture",
            "Dynamic Data Binding & Expressions",
            "Database-Level Privacy & RBAC",
            "API Connector & Authentication",
            "Production-Scale Search Optimization"
        ],
        steps: [
            {
                title: "Phase 1: The Multi-Tenant Core",
                description: "Design the relational database with strict 'Organizational Isolation' (IDs and Privacy Rules)."
            },
            {
                title: "Phase 2: The Collaborative UI",
                description: "Build the main dashboard with complex data bindings that react to user roles (Admin vs Editor)."
            },
            {
                title: "Phase 3: The Revenue Bridge",
                description: "Configure the API Connector to sync user subscription status from Stripe in real-time."
            },
            {
                title: "Phase 4: The Scale Polish",
                description: "Perform a latency audit and denormalize slow search queries to ensure enterprise performance."
            }
        ]
    },
    totalEstimatedHours: 85,
    estimatedCompletionDays: 30,
    moduleCount: 5,
    createdAt: "2026-02-28T00:00:00Z",
    updatedAt: "2026-02-28T00:00:00Z",
    version: "1.0",
    status: "published"
};
