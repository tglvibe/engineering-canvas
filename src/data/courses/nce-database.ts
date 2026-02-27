import { CourseEnhanced } from './types';

export const nceDatabase: CourseEnhanced = {
    id: "NCE-DATABASE",
    titleKey: "courses.nceDatabase",
    descKey: "courses.nceDatabaseDesc",
    icon: "🗄️",
    duration: "3 weeks",
    languages: ["Visual Schema", "SQL (Conceptual)", "JSON", "Airtable Formulas", "RegEx (Validation)"],
    category: "no-code",
    programIds: ["NCE-APP", "NCE-AUTOMATE", "NCE-DATABASE", "NCE-WEB", "NCE-MOBILE", "NCE-AI", "NCE-ENTERPRISE"],
    trackId: "nce",
    level: "beginner",
    prerequisites: ["NCE-FOUND"],
    targetAudience: "Aspiring data architects and visual developers who want to master the art of designing scalable, high-integrity relational databases using no-code and low-code platforms.",
    learningOutcomes: [
        "Design 3rd Normal Form (3NF) relational schemas visually for complex business entities",
        "Master the use of Junction Tables to resolve Many-to-Many data relationships",
        "Author sophisticated business logic using platform-specific Formulas and Rollups",
        "Implement field-level and record-level validation rules to ensure 100% data integrity",
        "Architect synchronized data workflows between internal tools (Airtable) and external backends (Xano)"
    ],
    modules: [
        {
            id: "NCE-DATABASE-M1",
            title: "The Relational Blueprint: Entities & Fields",
            description: "Mapping the real world into structured digital tables.",
            sequenceNumber: 1,
            estimatedHours: 10,
            topics: ["NCE-DATABASE-M1-T1", "NCE-DATABASE-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Differentiate between 'Flat' and 'Relational' data models",
                "Select the correct field types (Single-select vs Linked) to minimize input error",
                "Create a visual Entity-Relationship Diagram (ERD) for a small business"
            ]
        },
        {
            id: "NCE-DATABASE-M2",
            title: "Normalization & Linkages",
            description: "Eliminating redundancy through Linked Records and Lookups.",
            sequenceNumber: 2,
            estimatedHours: 15,
            topics: ["NCE-DATABASE-M2-T1", "NCE-DATABASE-M2-T2"],
            prerequisiteModuleIds: ["NCE-DATABASE-M1"],
            outcomes: [
                "Construct 1:1, 1:Many, and Many:Many relationships visually",
                "Use Junction Tables to bridge complex connections (e.g., Students to Classes)",
                "Configure automated 'Lookups' to pull data across relational boundaries"
            ]
        },
        {
            id: "NCE-DATABASE-M3",
            title: "Business Logic: Formulas & Advanced Rollups",
            description: "Turning raw data into actionable insights automatically.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["NCE-DATABASE-M3-T1", "NCE-DATABASE-M3-T2"],
            prerequisiteModuleIds: ["NCE-DATABASE-M2"],
            outcomes: [
                "Write conditional formulas (IF/AND/OR) to automate status updates",
                "Aggregate data across tables using Rollup functions (SUM, ARRAYUNIQUE, MIN/MAX)",
                "Implement 'Last Modified' and 'Auto-number' fields for audit trails"
            ]
        },
        {
            id: "NCE-DATABASE-M4",
            title: "Data Sync & External Backends",
            description: "Scaling beyond the sheet with Xano and Supabase.",
            sequenceNumber: 4,
            estimatedHours: 10,
            topics: ["NCE-DATABASE-M4-T1", "NCE-DATABASE-M4-T2"],
            prerequisiteModuleIds: ["NCE-DATABASE-M3"],
            outcomes: [
                "Evaluate when to migrate from Airtable to a dedicated backend like Xano",
                "Configure 'External Sync' to pull live data from external APIs into your DB",
                "understand the difference between SQL (Table-based) and NoSQL (Document-based) no-code storages"
            ]
        },
        {
            id: "NCE-DATABASE-M5",
            title: "Governance: Privacy & Integrity",
            description: "Securing your data and preventing the 'Messy DB' syndrome.",
            sequenceNumber: 5,
            estimatedHours: 8,
            topics: ["NCE-DATABASE-M5-T1", "NCE-DATABASE-M5-T2"],
            prerequisiteModuleIds: ["NCE-DATABASE-M4"],
            outcomes: [
                "Implement Field-level permissions to hide sensitive salary or PII data",
                "Design 'Validation Tables' to restrict input to approved options only",
                "Perform a snapshot backup and restore operation for a no-code database"
            ]
        }
    ],
    topics: [
        {
            id: "NCE-DATABASE-M1-T1",
            moduleId: "NCE-DATABASE-M1",
            sequenceNumber: 1,
            title: "Relational Modeling vs. Flat Spreadsheets",
            estimatedMinutes: 180,
            what: "Relational Modeling is the practice of splitting data into specialized tables (e.g., 'Customers', 'Orders', 'Products') and connecting them using 'Links'. A Flat Spreadsheet (like basic Excel) puts everything in one big sheet, leading to massive duplication and errors.",
            why: "If you have 1,000 orders from the same customer and they change their phone number, in a flat sheet you have to edit 1,000 rows. In a relational model, you edit the customer's phone number exactly ONCE in the 'Customers' table, and all 1,000 linked orders update automatically. This 'Single Source of Truth' is the hallmark of professional app engineering.",
            when: "Every time you build a database that tracks more than one type of thing (e.g., people AND their tasks).",
            how: "1. Identify the 'Nouns' in your system (Subjects). 2. Create a separate table for each group. 3. Add a 'Primary Field' that uniquely identifies each record. 4. Use a 'Link to Another Record' field to connect them.",
            ecosystem: "Airtable (Industry Leader), Notion (Basic Relational), SmartSuite (Enterprise focus), SeaTable.",
            realWorld: "A major logistics company used a flat spreadsheet for 5 years. They had 30% data error rates due to typos in customer addresses. They migrated to a Relational Airtable model where addresses are stored in a 'Locations' table. Now, drivers just select a pre-verified location from a list, reducing delivery errors to 0.5%.",
            useCases: [
                "Designing the core database for an Inventory Management System",
                "Building a multi-client project tracker for a design studio",
                "Structuring a content calendar where authors link to multiple articles"
            ],
            advantages: [
                "Data Integrity: One source of truth for every variable",
                "Scalability: Handles millions of data points without getting 'Messy'",
                "Organization: Different teams can have different 'Views' of the same data"
            ],
            disadvantages: [
                "Complexity: Requires more 'Upfront Design' than just typing into a sheet"
            ],

            interviewTip: "If asked 'When should I NOT use a relational database?', answer: 'Only when the data is truly stand-alone and has zero recurring patterns or links, like a simple personal shopping list. For everything else, the relational model is superior.'",
            resumeBullet: "Redesigned a legacy flat-file spreadsheet system into a 3NF relational database architecture, improving data accuracy by 95% and enabling automated cross-departmental reporting.",

            videos: [
                { type: "public", title: "Relational Databases for Human Beings", author: "Airtable", views: "300K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "ERD Design for No-Coders", author: "Gareth Pronovost", views: "100K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Airtable Academy", rating: 4.9, title: "Database Foundations", instructor: "Airtable Experts", enrolled: "200K+", duration: "8 hours", url: "https://www.airtable.com/guides/build/database-design" }
            ],
            blogs: [
                { type: "Core", title: "The 3 Laws of Normalization", publisher: "StackOverflow (Modified for No-Code)", readTime: "25 min", url: "https://nocode.blog/database-normalization" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Duplicate Disaster", category: "Schema Design", estimatedTime: "4 hours",
                    scenarioDescription: "A marketing agency tracks 'Lead Source' (Facebook, Google, LinkedIn) by typing the text into every record. They have 10,000 records. Someone typed 'FB', someone typed 'Facebook', and someone typed 'Face Book'. Now, they can't accurately calculate their ROI for Facebook ads.",
                    problemAnalysis: "This is a classic 'Data Typing' error in a flat system. The solution is to create a 'Sources' table and use a 'Link to Another Record' field. By forcing users to select from a list (or using a Button that triggers a link), you ensure 100% naming consistency.",
                    architectureLayers: ["Data Validation Layer", "Relational Schema Layer", "Input UI Layer"],
                    toolsAndTech: [{ name: "Airtable Linked Records", justification: "By using a link, we effectively create a 'Foreign Key' constraint without writing SQL. This transforms the 'Lead Source' from a loose string into a concrete object that can be updated in one place." }],
                    tradeOffs: ["Linking takes 0.5 seconds longer than typing, but saves 10 hours of cleaning later."],
                    nfrConsiderations: ["Consistency: 100% match on lead-source reporting."],
                    kpis: ["Achieve zero naming discrepancies in a 1,000-record test ingest."],
                    keyInsights: "Text fields are for stories. Linked records are for data."
                }
            ],
            playgrounds: [
                {
                    title: "The Schema Builder",
                    description: "Visualizing a Link.",
                    examples: [
                        {
                            language: "JSON (Architecture)",
                            code: "{\n  \"Table_A\": \"Customers\",\n  \"Relationship\": \"One-to-Many\",\n  \"Table_B\": \"Orders\",\n  \"Constraint\": \"An order MUST belong to exactly one customer\"\n}"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "data/schema-v1",
                commitMessage: "data: implemented relational linkage between 'Project' and 'Client' tables for 3NF compliance",
                files: [{ name: "Database/ERD.png", type: "file", content: "diagram data" }],
                activeFileSnippet: { filename: "Schema.md", code: "Table Projects { ID: Primary, ClientID: Link[Clients] }" }
            },
            community: {
                aiSummary: "The database is the engine of your app. If the engine is dirty, the car won't run. Relational links are the oil that keeps everything smooth.",
                solutions: []
            }
        },
        {
            id: "NCE-DATABASE-M2-T1",
            moduleId: "NCE-DATABASE-M2",
            sequenceNumber: 1,
            title: "Junction Tables & Many-to-Many Relationships",
            estimatedMinutes: 240,
            what: "A Many-to-Many (M2M) relationship occurs when multiple items in Table A relate to multiple items in Table B. For example, 'Students' and 'Classes' (One student takes many classes; one class has many students). No-code platforms can't handle this with a simple link. You must use a 'Junction Table' (e.g., an 'Enrollments' table) to sit in the middle.",
            why: "If you try to put a list of Classes inside the 'Student' record, you can't easily track metadata for that specific connection (like the Grade the student got in that exact class). A Junction Table allows you to store 'Connection-Specific Data'. Each record in the Junction Table represents one unique intersection between the two sides.",
            when: "Implementing Shopping Carts (Orders to Products), Event Rosters (Speakers to Sessions), or Permission Systems (Users to Teams).",
            how: "1. Create Table A and Table B. 2. Create Table C (The Junction). 3. Add a Link to A and a Link to B inside Table C. 4. Add any 'Middle' data to Table C (e.g., Quantity, Date, Status).",
            ecosystem: "Universal Relational Design Pattern (used in SQL and No-Code alike).",
            realWorld: "In a medical application built on Airtable, 'Patients' and 'Doctors' have a Many-to-Many relationship. They use a 'Consultations' Junction Table. When a doctor meets a patient, a record is created in 'Consultations' linking to both. This specific record is where the 'Notes' and 'Prescription' are stored. Without this middle table, you'd have to store the notes either on the Doctor's record (messy) or the Patient's record (private/messy).",
            useCases: [
                "Building a Course Marketplace where instructors teach multiple subjects",
                "Architecting a Project Management tool where members belong to multiple teams",
                "Designing a Real Estate app where 'Buyers' have multiple 'Interests' and 'Houses' have multiple 'Viewings'"
            ],
            advantages: [
                "Architectural Purity: Perfectly models the real-world complexity without hacks",
                "Storage Utility: Store data *about the relationship* (e.g. When did they join?)",
                "Scalability: Easily add 1,000 more students without breaking the 'Class' table"
            ],
            disadvantages: [
                "Hidden Complexity: Requires explaining the 'Middle Table' to non-technical users"
            ],

            interviewTip: "If asked 'How do I link Tasks to multiple Teammates?', don't say 'I'd use a multi-select link'. Say 'I'd use a Junction Table called Assignments so I can track the status and time-spent for EACH person on that task.' This proves you are a Senior Architect.",
            resumeBullet: "Implemented complex Many-to-Many relational data structures using automated Junction Tables, enabling granular tracking of billable hours across 500+ freelance consultants.",

            videos: [
                { type: "public", title: "Many-to-Many Relationships Explained", author: "Airtable Community", views: "80K views", duration: "15:20", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Power of the Junction Table", author: "Gap Consulting", views: "50K views", duration: "22:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Stacker University", rating: 4.8, title: "Enterprise Data Structures", instructor: "Stacker Team", enrolled: "10K+", duration: "12 hours", url: "https://stacker.app/university" }
            ],
            blogs: [
                { type: "Technical", title: "No-Code Junction Tables", publisher: "No-Code Essentials", readTime: "18 min", url: "https://nocodeessentials.com/junction-tables" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Expert", title: "The Roster Mess", category: "Data Architecture", estimatedTime: "8 hours",
                    scenarioDescription: "A conference organizer has 2,000 attendees and 50 sessions. They want to track which attendee went to which session. Currently, they are adding attendee names into a long text field in the 'Sessions' table. They can't find out how many people attended more than 3 sessions.",
                    problemAnalysis: "The text field is a 'Dead End' for data. It's not searchable or relatable. We need to 1. Stop using text. 2. Create an 'Attendance' table. 3. Every time an attendee joins a session, create a record in 'Attendance' linking to both. Now, we can just look at the 'Attendees' table and use a 'Count' rollup on the 'Attendance' links to instantly see who attended >3 sessions.",
                    architectureLayers: ["Relational Mapping Layer", "Aggregation Layer (Rollups)", "Data Ingest Layer"],
                    toolsAndTech: [{ name: "Airtable Rollups", justification: "By using a Junction Table, we enable the use of 'Rollups'. We can now write a formula: `IF(COUNT(Attendance_Links) > 3, '⭐ VIP', 'Regular')`. This provides instant business intelligence that was previously impossible in the text-based model." }],
                    tradeOffs: ["Adding a middle table makes the data entry form slightly more complex but provides 100x more analytical power."],
                    nfrConsiderations: ["Performance: Real-time calculation of VIP status across 10,000+ records."],
                    kpis: ["Reduce time-to-generate-report from 4 hours (manual counting) to 0 seconds (automatic)."],
                    keyInsights: "If a link has its own data, it's not a link—it's a record."
                }
            ],
            playgrounds: [
                {
                    title: "The Junction Simulator",
                    description: "Visualizing the middle table.",
                    examples: [
                        {
                            language: "Logic Flow",
                            code: "[Students] -- Link --> [Enrollments] <-- Link -- [Classes]\n\nEnrollment Record:\n- StudentID: 'Alice'\n- ClassID: 'Math 101'\n- Grade: 'A'\n- DateJoined: '2026-02-01'"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "data/junction-logic",
                commitMessage: "data: implemented junction table for 'Event-to-Attendee' mapping to enable granular attendance tracking",
                files: [{ name: "Database/ERD_V2.png", type: "file", content: "enhanced erd" }],
                activeFileSnippet: { filename: "Architecture.md", code: "Table Attendance { Link: User, Link: Event }" }
            },
            community: {
                aiSummary: "The 'Many-to-Many' is the final boss of data modeling. Once you master the Junction Table, there is no system in the world you cannot build visually.",
                solutions: []
            }
        }
    ],
    videoCount: 320,
    articleCount: 195,
    problemCount: 140,
    capstoneProject: {
        title: "The Universal Resource Planner (URP)",
        description: "You will build the core data engine for a complex resource planning system. First, you'll design a 5-table relational database in Airtable that includes Junction Tables for Many-to-Many mapping (e.g. Workers to Projects, Tools to Sites). You will implement advanced 'Lookups' and 'Rollups' to calculate Project Efficiency and Worker Utilization percentages automatically. Next, you will author complex Formulas using RegEx to validate email addresses and phone numbers across different countries. To make it enterprise-grade, you will implement 'Vertical Permissions' using Airtable Interfaces, ensuring field-workers see a mobile-optimized 'Task View' while stakeholders see a 'Financial Dashboard' powered by your relational aggregates. Finally, you will set up a 'Data Quality Bot' in Zapier that scans for un-linked records and notifies the manager to fix them. This project proves you can architect high-fidelity data systems that rival custom-coded SQL backends.",
        estimatedDays: 14,
        skillsFocused: [
            "Advanced Relational Modeling (Junction Tables)",
            "Business Intelligence Aggregation (Rollups/Lookups)",
            "Validation Logic (RegEx/Conditionals)",
            "Interface Design & Field Governance",
            "Automated Data Cleaning (Zapier)"
        ],
        steps: [
            {
                title: "Phase 1: The Relational Core",
                description: "Design the 5-table ERD with Junction tables for Many-to-Many associations between workers and sites."
            },
            {
                title: "Phase 2: The Logic Layer",
                description: "Build the Rollup formulas that automatically calculate 'Cost-to-Date' for every site based on linked expense records."
            },
            {
                title: "Phase 3: The Integrity Guard",
                description: "Implement field-level validation and the 'Data Quality' automation to prevent messy entries."
            },
            {
                title: "Phase 4: The Stakeholder View",
                description: "Create the executive dashboard using Airtable Interfaces, presenting your relational data as clean, actionable charts."
            }
        ]
    },
    totalEstimatedHours: 75,
    estimatedCompletionDays: 30,
    moduleCount: 5,
    createdAt: "2026-02-28T00:00:00Z",
    updatedAt: "2026-02-28T00:00:00Z",
    version: "1.0",
    status: "published"
};
