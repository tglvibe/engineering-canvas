import { CourseEnhanced } from './types';

export const nceFound: CourseEnhanced = {
    id: "NCE-FOUND",
    titleKey: "courses.nceFound",
    descKey: "courses.nceFoundDesc",
    icon: "🧩",
    duration: "3 weeks",
    languages: ["Visual Logic", "JSON", "Markdown", "No-SQL (Mental Model)", "SQL (Mental Model)"],
    category: "no-code",
    programIds: ["NCE-APP", "NCE-AUTOMATE", "NCE-DATABASE", "NCE-WEB", "NCE-MOBILE", "NCE-AI", "NCE-ENTERPRISE"],
    trackId: "nce",
    level: "beginner",
    prerequisites: ["Basic Logical Thinking"],
    targetAudience: "Aspiring visual developers, product managers, and entrepreneurs who want to master the architectural principles of building production-grade applications without writing traditional code.",
    learningOutcomes: [
        "Master the 'Visual Engineering' mental model: Thinking in systems, data flows, and logic branches",
        "Configure complex multi-step automations with error handling using Zapier and Make",
        "Design normalized relational databases visually using Airtable and Notion",
        "Architect responsive user interfaces that adapt to any screen size using visual flexbox models",
        "Evaluate and select the optimal no-code stack based on scalability, security, and integration requirements"
    ],
    modules: [
        {
            id: "NCE-FOUND-M1",
            title: "Visual Engineering: The Mindset Shift",
            description: "Moving from 'Drawing' to 'Architecting' software visually.",
            sequenceNumber: 1,
            estimatedHours: 10,
            topics: ["NCE-FOUND-M1-T1", "NCE-FOUND-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Explain how no-code platforms translate visual inputs into executable machine code",
                "Identify the 'No-Code Trilemma': Speed vs. Customization vs. Scalability",
                "Perform a technical feasibility study for a proposed no-code solution"
            ]
        },
        {
            id: "NCE-FOUND-M2",
            title: "Logic & Flow: Programming without Syntax",
            description: "Mastering the universal concepts of If-Then-Else, Loops, and Variables.",
            sequenceNumber: 2,
            estimatedHours: 12,
            topics: ["NCE-FOUND-M2-T1", "NCE-FOUND-M2-T2"],
            prerequisiteModuleIds: ["NCE-FOUND-M1"],
            outcomes: [
                "Construct multi-branch logic trees to handle complex user permissions",
                "Manage global and local state variables in a visual application environment",
                "Implement basic loops and array transformations in automation tools"
            ]
        },
        {
            id: "NCE-FOUND-M3",
            title: "Relational Thinking: Databases & Objects",
            description: "Structuring information for maximum flexibility and scale.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["NCE-FOUND-M3-T1", "NCE-FOUND-M3-T2"],
            prerequisiteModuleIds: ["NCE-FOUND-M2"],
            outcomes: [
                "Design a 3rd Normal Form (3NF) database schema using visual linked records",
                "Explain the difference between Row-level and Column-based data structures",
                "Configure complex 'Rollups' and 'Lookups' to derive business insights automatically"
            ]
        },
        {
            id: "NCE-FOUND-M4",
            title: "The Ecosystem: Stack Selection & Strategy",
            description: "Choosing the right platform for the mission.",
            sequenceNumber: 4,
            estimatedHours: 10,
            topics: ["NCE-FOUND-M4-T1", "NCE-FOUND-M4-T2"],
            prerequisiteModuleIds: ["NCE-FOUND-M3"],
            outcomes: [
                "Compare Bubble, Webflow, and Glide for specific business use cases",
                "Assess vendor-lock-in risks and data portability options",
                "Estimate cost-per-user and operational overhead for different no-code tiers"
            ]
        },
        {
            id: "NCE-FOUND-M5",
            title: "Deployment & Governance",
            description: "Moving from prototype to a secure internal or public tool.",
            sequenceNumber: 5,
            estimatedHours: 8,
            topics: ["NCE-FOUND-M5-T1", "NCE-FOUND-M5-T2"],
            prerequisiteModuleIds: ["NCE-FOUND-M4"],
            outcomes: [
                "Configure custom domains and SSL headers in a no-code runtime",
                "Implement Role-Based Access Control (RBAC) visually",
                "Analyze application performance logs to identify slow database queries"
            ]
        }
    ],
    topics: [
        {
            id: "NCE-FOUND-M1-T1",
            moduleId: "NCE-FOUND-M1",
            sequenceNumber: 1,
            title: "The Abstraction Layer: How No-Code Works",
            estimatedMinutes: 120,
            what: "No-code platforms are high-level abstraction layers that sit on top of traditional programming languages (like JavaScript or Python) and infrastructure (like AWS or Google Cloud). When you drag a button or configure a workflow, the platform generates the underlying source code and manages the server deployment automatically.",
            why: "Traditional coding requires years to master syntax and infrastructure. Visual engineering allows you to focus on the 'Logic' and 'Value' of the application while delegating the 'Boilerplate' (database connections, server scaling, CSS resets) to the platform. This reduces the time-to-market from months to days.",
            when: "When building MVPs, internal tools, landing pages, or automated business processes that don't require custom low-level memory management or highly specialized algorithms.",
            how: "1. Select a visual builder (e.g., Bubble for apps, Webflow for sites). 2. Use the 'Canvas' to design the UI. 3. Use the 'Workflow Editor' to define triggers (When button clicked) and actions (Send email). 4. Click 'Publish' to deploy to a global CDN instantly.",
            ecosystem: "No-Code Stack: Bubble (Web Apps), FlutterFlow (Mobile), Make (Automation), Airtable (Data), Xano (Backend).",
            realWorld: "Lambda School (now BloomTech) famously built their entire internal student tracking system using only Zapier, Airtable, and Typeform. They scaled to thousands of students and millions in revenue before writing a single line of custom code, proving that no-code can handle enterprise-level transactions.",
            useCases: [
                "Rapid prototyping of a new SaaS idea for investor pitches",
                "Building a custom CRM for a sales team that integrates with Slack",
                "Automating invoice generation and delivery for a freelance agency"
            ],
            advantages: [
                "Speed: Build 10x faster than traditional coding",
                "Cost: Significantly lower development and maintenance costs",
                "Empowerment: Non-technical founders can build their own solutions"
            ],
            disadvantages: [
                "Scalability Caps: High-traffic apps might eventually hit platform computation limits",
                "Locked-in Logic: Difficult to export pure source code if the platform shuts down"
            ],

            interviewTip: "If asked 'Is no-code limited?', shift the focus to 'Productivity'. Answer: 'No-code is an optimization strategy. We use it to solve 80% of business problems instantly, so our engineering resources can focus on the 20% that require truly custom algorithms.'",
            resumeBullet: "Accelerated product development cycles by 60% by architecting and deploying an automated lead-management system using a no-code visual stack.",

            videos: [
                { type: "public", title: "What is No-Code?", author: "Makerpad", views: "100K views", duration: "10:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "The Future of Visual Development", author: "Bubble GDC", views: "50K views", duration: "15:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Udemy", rating: 4.8, title: "The Complete No-Code Bootcamp", instructor: "Christian Peverelli", enrolled: "20K+", duration: "12 hours", url: "https://www.udemy.com/course/nocode/" }
            ],
            blogs: [
                { type: "Core", title: "The No-Code Revolution", publisher: "Webflow Blog", readTime: "15 min", url: "https://webflow.com/blog/no-code-revolution" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Scale Wall", category: "Strategy", estimatedTime: "3 hours",
                    scenarioDescription: "A startup built their marketplace on Glide. They hit 25,000 items, and the app is now lagging because Glide loads too much data into the user's browser at once. Should they rewrite in React or switch to a different no-code tool?",
                    problemAnalysis: "This is a 'Runtime Abstraction' bottleneck. Glide is optimized for smaller datasets. The problem isn't 'No-code', it's the specific choice of tool for that scale. Switching to a tool like Bubble or FlutterFlow (which uses server-side pagination) would solve the lag without needing a full custom rewrite.",
                    architectureLayers: ["UI Layer (Client-side Data)", "Network Layer (Payload size)", "Platform Runtime"],
                    toolsAndTech: [{ name: "Bubble or FlutterFlow", justification: "These platforms support 'Lazy Loading' and 'Filtering at the Database Level', which prevents the user's phone from being overwhelmed by 25,000 records. This allows the app to scale to millions of items while staying in the no-code ecosystem." }],
                    tradeOffs: ["Migration to a more powerful tool takes 2-3 weeks, but is 50% cheaper than hiring a full-stack dev team."],
                    nfrConsiderations: ["Performance: Page load must be under 2 seconds for 100K+ records."],
                    kpis: ["Achieve 90+ Lighthouse score on the new visual platform runtime."],
                    keyInsights: "The 'No' in no-code stands for 'No Syntax', not 'No Thinking'. Choose your architecture wisely."
                }
            ],
            playgrounds: [
                {
                    title: "Visual Logic Simulation",
                    description: "Translating pseudo-code to visual logic.",
                    examples: [
                        {
                            language: "Logic Flow",
                            code: "// PSEUDO-CODE\nif (User.Subscribed == true) {\n  Show(Gold_Icon);\n  Allow(Access_Premium_Content);\n} else {\n  Show(Subscribe_Button);\n  Redirect(Pricing_Page);\n}"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "feat/app-architecture",
                commitMessage: "feat: mapped entire application data flow using visual diagrams to ensure team alignment before build",
                files: [{ name: "Arch/Diagram.png", type: "file", content: "visual map" }],
                activeFileSnippet: { filename: "Architecture.md", code: "Trigger: User SignUp -> Action: Create Record -> Action: Send Welcome Email" }
            },
            community: {
                aiSummary: "Visual engineering is the greatest leveler in technical history. It moves the power from the person who can type fast to the person who can think clearly.",
                solutions: []
            }
        },
        {
            id: "NCE-FOUND-M2-T1",
            moduleId: "NCE-FOUND-M2",
            sequenceNumber: 1,
            title: "Visual Variables & Global State",
            estimatedMinutes: 180,
            what: "Variables are 'Containers' for information that can change. In no-code, these are often called 'States' (Bubble), 'Custom State' (FlutterFlow), or 'Fields' (Airtable). State management is the art of keeping track of what the user is doing (e.g., Is the dark mode on? What item is in the cart?) across various screens.",
            why: "Without State, an app is just a static page. To build an 'Interactive' experience, you must store data temporarily while the user is browsing. For example, when a user clicks 'Add to Cart', you store that ID in an 'App Variable' so that when they go to the Checkout page, the app 'Remembers' what they bought.",
            when: "Every time you build a multi-screen app, a shopping cart, or a user dashboard.",
            how: "1. Define a variable (e.g., `Current_Selection`). 2. Set the 'Type' (Text, Number, Object). 3. Use an 'Action' to update the variable (When Clicked -> Set Current_Selection to 'Selected_Item'). 4. Use 'Conditional Formatting' to change UI based on the variable.",
            ecosystem: "State Managers: Bubble (Custom States), Adalo (App Variables), React (Under the hood for many builders).",
            realWorld: "In the Airbnb no-code clone, the 'Search Filter' (Dates, Guests, Price) is entirely managed through visual variables. When you move the price slider, a variable called `Min_Price` is updated instantly, which triggers a re-filter of the repeating group below. This is 'State-Driven UI' without a single line of JS.",
            useCases: [
                "Managing the cart contents in a visual e-commerce app",
                "Tracking user progress through a multi-step onboarding form",
                "Toggling UI themes (Light/Dark) based on a persistent user setting"
            ],
            advantages: [
                "Instant Feedback: See UI changes in real-time as state updates",
                "Visual Debugging: Most builders allow you to 'Inspect' variables while the app is running",
                "No Syntax Errors: You can't misspell a variable name if you select it from a dropdown"
            ],
            disadvantages: [
                "Memory Leaks: Overusing 'Global' states can slow down mobile browsers if not cleared properly"
            ],

            interviewTip: "If asked how to handle complex data across pages, explain the 'Data Context' pattern. Say: 'I use URL parameters or Global State containers to pass object IDs between views, ensuring the UI stays decoupled from the data storage.'",
            resumeBullet: "Engineered complex state-management architectures for a multi-vendor marketplace, reducing UI lag by 30% through optimized local state caching.",

            videos: [
                { type: "public", title: "Bubble Custom States 101", author: "Coaching No Code Apps", views: "80K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "State Management in FlutterFlow", author: "FlutterFlow", views: "40K views", duration: "22:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Makerpad", rating: 4.9, title: "Building an Airbnb Clone", instructor: "Ben Tossell", enrolled: "5K+", duration: "8 hours", url: "https://www.makerpad.co/tutorials/airbnb-clone" }
            ],
            blogs: [
                { type: "Technical", title: "The Logic of No-Code", publisher: "Airtable Blog", readTime: "12 min", url: "https://www.airtable.com/guides/build/logic" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Hard", title: "The Cart Disconnect", category: "Debugging", estimatedTime: "4 hours",
                    scenarioDescription: "A user adds an item to their cart on the Homepage. When they click 'Checkout', the cart is empty. The data is saved in a 'Local State' on the Homepage, but not passed to the Checkout Page.",
                    problemAnalysis: "Local States are page-specific. When the user navigates, the state is wiped. To fix this, we must either 1. Save the cart to a 'Global State' or 'User Data' (Persistent), or 2. Pass the Cart ID in the URL as a parameter.",
                    architectureLayers: ["Application Lifecycle", "Navigation Context", "Persistent Storage"],
                    toolsAndTech: [{ name: "URL Parameters", justification: "By passing `checkout?cart_id=123`, the Checkout page can 'Look Up' the data from the database upon loading. This is the most robust way to handle data across pages, as it allows users to 'Refresh' the page without losing their cart." }],
                    tradeOffs: ["URL params are visible to users; use Global States for sensitive data."],
                    nfrConsiderations: ["Continuity: User progress must survive a browser refresh."],
                    kpis: ["Achieve 100% data persistence across navigation cycles in load testing."],
                    keyInsights: "Data doesn't travel between pages unless you give it a ticket."
                }
            ],
            playgrounds: [
                {
                    title: "The State Tracker",
                    description: "Visualizing variable updates.",
                    examples: [
                        {
                            language: "JSON (Configuration)",
                            code: "{\n  \"variableName\": \"Cart_Count\",\n  \"initialValue\": 0,\n  \"onEvent\": \"Button_Click\",\n  \"action\": \"INCREMENT\",\n  \"targetUI\": \"Cart_Icon_Badge\"\n}"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "logic/state-refactor",
                commitMessage: "logic: migrated local cart states to persistent database records for better cross-session reliability",
                files: [{ name: "Logic/StateMap.json", type: "file", content: "state mapping" }],
                activeFileSnippet: { filename: "App.json", code: "persistVariable('User_Session', true);" }
            },
            community: {
                aiSummary: "State is the 'Memory' of your application. Professional builders spend more time managing memory than drawing buttons.",
                solutions: []
            }
        },
        {
            id: "NCE-FOUND-M3-T1",
            moduleId: "NCE-FOUND-M3",
            sequenceNumber: 1,
            title: "The Visual Database: Normalization for Non-Coders",
            estimatedMinutes: 240,
            what: "Data Modeling is the process of deciding how information relates to other information. In no-code, this is done through 'Linked Records' (Airtable) or 'Types' (Bubble). Normalization is a technique used to avoid duplicating data (e.g., instead of writing the Customer's Address on every Invoice, you link the Invoice to a 'Customer' record).",
            why: "If you build a database incorrectly (e.g., putting everything in one giant spreadsheet), your app will eventually become impossible to update. If a customer changes their address, you'd have to find every single invoice and change it manually. By 'Normalizing', you change it in one place, and it updates everywhere instantly.",
            when: "Every time you build a database, from a simple blog to a complex inventory system.",
            how: "1. Identify 'Entities' (Users, Projects, Tasks). 2. Create one table per entity. 3. Use 'Linked Records' (One-to-Many or Many-to-Many). 4. Use 'Rollups' to calculate totals from linked tables (e.g., Sum of all Invoice amounts linked to this Client).",
            ecosystem: "No-Code Databases: Airtable (Visual Relational), Xano (Backend focus), Supabase (Low-code SQL).",
            realWorld: "A major construction firm uses Airtable to manage 500+ sites. Instead of a mess of Excel files, they have a 'Sites' table, a 'Workers' table, and a 'Daily Logs' table. The Logs are linked to both a Site and a Worker. This allows the CEO to click on a Site and see the total cost of all workers over 6 months instantly. This is pure relational power without a single JOIN command.",
            useCases: [
                "Designing a multi-tenant project management tool",
                "Building a student enrollment system for a university",
                "Structuring a digital asset library for a design agency"
            ],
            advantages: [
                "Data Integrity: Change a value once, it updates everywhere",
                "Query Speed: Relational databases are optimized for finding linked information",
                "Scalability: Properly structured data handles 100K+ records with ease"
            ],
            disadvantages: [
                "Initial Curves: Requires more 'Upfront Thinking' than a simple spreadsheet"
            ],

            interviewTip: "If asked 'How do you handle a Many-to-Many relationship in no-code?', explain the 'Junction Table'. Say: 'I create a third table that links to both entities. For example, for Students and Classes, I create an Enrollment table that links one Student to one Class.' This shows you understand professional database architecture.",
            resumeBullet: "Engineered a normalized relational database architecture in Airtable, reducing data entry redundancy by 80% and enabling real-time financial reporting.",

            videos: [
                { type: "public", title: "Airtable for Beginners: The Relational Model", author: "Gareth Pronovost", views: "200K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Database Design for Apps", author: "Bubble", views: "60K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Airtable Academy", rating: 4.8, title: "Building a Relational Database", instructor: "Airtable Team", enrolled: "100K+", duration: "10 hours", url: "https://www.airtable.com/guides/build/database-design" }
            ],
            blogs: [
                { type: "Core", title: "The Ultimate Guide to Database Normalization", publisher: "No-Code Founders", readTime: "20 min", url: "https://nocodefounders.com/blog/database-normalization" }
            ],
            scenarios: [
                {
                    id: "3.1", difficulty: "Expert", title: "The Redundant Nightmare", category: "Architecture", estimatedTime: "6 hours",
                    scenarioDescription: "A company has a 'Shipments' table. Every time they ship an order, they manually type in the 'Customer Name', 'Phone', and 'Address'. They have 50,000 shipments. The CEO realizes 10,000 addresses are misspelled. How do we fix this for the future?",
                    problemAnalysis: "The data is 'De-normalized'. The Shipment table contains data that belongs in a 'Customers' table. We must 1. Extract unique customers into a new 'Customers' table. 2. Use an automation (Make/Zapier) to match existing shipments to these customers. 3. Delete the text fields in 'Shipments' and replace them with a 'Link to Customer'.",
                    architectureLayers: ["Data Schema (Normalization)", "Data Migration (ETL)", "Input Validation Logic"],
                    toolsAndTech: [{ name: "Airtable Deduplication Script", justification: "By using the 'Dedupe' app in Airtable, we can merge identical customers. Then, we use a 'Linked Record' field. Now, when a new shipment is created, the user *selects* a customer instead of typing. This guarantees 100% data accuracy for all future orders." }],
                    tradeOffs: ["Setting up the relation takes longer initially, but saves hundreds of hours in data cleaning later."],
                    nfrConsiderations: ["Consistency: Customer data must be identical across all touchpoints."],
                    kpis: ["Achieve 0% data duplication in a post-migration audit."],
                    keyInsights: "Don't store names. Store IDs that represent names."
                }
            ],
            playgrounds: [
                {
                    title: "The Relational Map",
                    description: "Visualizing a One-to-Many link.",
                    examples: [
                        {
                            language: "Database Schema (Visual)",
                            code: "Table [Clients] --(One)--> Table [Projects] --(One)--> Table [Tasks]\n\nClient: Apple\nProject: 'Launch iPhone 16'\nTasks: ['Design Webpage', 'Film Ad', 'Pre-order Setup']"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "data/normalization-v2",
                commitMessage: "data: refactored flat schema into a relational 3NF model in Airtable to support enterprise reporting",
                files: [{ name: "Database/Schema.pdf", type: "file", content: "relational map" }],
                activeFileSnippet: { filename: "Schema.md", code: "Link: [Orders] ID -> [Customers] ID" }
            },
            community: {
                aiSummary: "The database is the foundation of your building. If the foundation is a messy pile of sand (spreadsheets), the house will fall. Build on stone (relational tables).",
                solutions: []
            }
        }
    ],
    videoCount: 250,
    articleCount: 150,
    problemCount: 100,
    capstoneProject: {
        title: "The Business Operating System (BOS)",
        description: "You will build a production-grade internal operating system for a mock marketing agency. First, you'll design a 3rd Normal Form (3NF) relational database in Airtable to handle Clients, Projects, Tasks, and Invoices. Next, you'll build a client-facing portal in Glide or Softr that allows clients to see their project progress and download invoices. To make it a 'True' application, you will implement an automation in Make (formerly Integromat) that watches your Airtable for 'Completed Projects', automatically generates a PDF invoice, and emails it to the client while posting a success message in Slack. Finally, you will implement Role-Based Access Control (RBAC) to ensure employees can only see their assigned tasks, while managers see the entire agency pipeline. This project proves you can architect a full-stack automated business system without writing a single line of traditional code.",
        estimatedDays: 14,
        skillsFocused: [
            "Relational Data Architecting (Airtable)",
            "Multi-platform Visual Engineering (Glide/Softr)",
            "Multi-step Workflow Automation (Make)",
            "Logic & State Management",
            "Enterprise Access Control (RBAC)"
        ],
        steps: [
            {
                title: "Phase 1: The Data Core",
                description: "Architect the relational schema ensuring zero data redundancy between clients and projects."
            },
            {
                title: "Phase 2: The Action Engine",
                description: "Connect the database to Make.com and build the automated invoicing and notification logic."
            },
            {
                title: "Phase 3: The User Gateway",
                description: "Build the front-end portal with conditional visibility rules for different user roles."
            },
            {
                title: "Phase 4: The Scale Test",
                description: "Stress test the system with 100 concurrent tasks and verify the accuracy of the automated PDF generation."
            }
        ]
    },
    totalEstimatedHours: 65,
    estimatedCompletionDays: 30,
    moduleCount: 5,
    createdAt: "2026-02-28T00:00:00Z",
    updatedAt: "2026-02-28T00:00:00Z",
    version: "1.0",
    status: "published"
};
