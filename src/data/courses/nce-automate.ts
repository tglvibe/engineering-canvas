import { CourseEnhanced } from './types';

export const nceAutomate: CourseEnhanced = {
    id: "NCE-AUTOMATE",
    titleKey: "courses.nceAutomate",
    descKey: "courses.nceAutomateDesc",
    icon: "⚡",
    duration: "3 weeks",
    languages: ["JSON", "Webhooks", "REST API (Conceptual)", "Regex", "Liquid Templating"],
    category: "no-code",
    programIds: ["NCE-AUTOMATE", "NCE-APP", "NCE-ENTERPRISE"],
    trackId: "nce",
    level: "beginner",
    prerequisites: ["NCE-FOUND"],
    targetAudience: "Operations managers, startup founders, and automation specialists who want to master the art of building high-reliability, multi-step automated workflows without writing traditional code.",
    learningOutcomes: [
        "Architect complex multi-step workflows using Zapier and Make (formerly Integromat) to connect disparate business systems",
        "Implement 'Error Handling' and 'Auto-Retry' logic to ensure critical automations never fail silently",
        "Master 'Data Transformation' techniques to format dates, strings, and currency across different API standards",
        "Configure 'Webhooks' and 'HTTP Modules' to integrate with any custom platform that lacks a native connector",
        "Design 'Branching Logic' (Routers) to handle complex business rules within a single automated pipeline"
    ],
    modules: [
        {
            id: "NCE-AUTOMATE-M1",
            title: "The Automation Mindset: Triggers & Actions",
            description: "Understanding the atomic units of digital automation.",
            sequenceNumber: 1,
            estimatedHours: 10,
            topics: ["NCE-AUTOMATE-M1-T1", "NCE-AUTOMATE-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Explain the difference between 'Polling' and 'Instant' (Webhook) triggers",
                "Map data fields from a trigger to an action without breaking types",
                "Configure a simple two-step automation (e.g., Form -> Slack notification)"
            ]
        },
        {
            id: "NCE-AUTOMATE-M2",
            title: "Multi-Step Logic: Filters & Routers",
            description: "Building intelligence into your automated flows.",
            sequenceNumber: 2,
            estimatedHours: 12,
            topics: ["NCE-AUTOMATE-M2-T1", "NCE-AUTOMATE-M2-T2"],
            prerequisiteModuleIds: ["NCE-AUTOMATE-M1"],
            outcomes: [
                "Use 'Filters' to halt workflows based on specific data criteria",
                "Master 'Routers' (Make) or 'Paths' (Zapier) to divert data into different streams",
                "Implement 'Nested Logic' where certain steps only run if others succeed"
            ]
        },
        {
            id: "NCE-AUTOMATE-M3",
            title: "Data Transformation & Formatting",
            description: "Ensuring data flows cleanly between incompatible systems.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["NCE-AUTOMATE-M3-T1", "NCE-AUTOMATE-M3-T2"],
            prerequisiteModuleIds: ["NCE-AUTOMATE-M2"],
            outcomes: [
                "Convert Unix timestamps to human-readable dates for customer communications",
                "Use 'Formatter' tools to perform complex string manipulation (text splitting, capitalization)",
                "Perform basic arithmetic and currency math within a workflow"
            ]
        },
        {
            id: "NCE-AUTOMATE-M4",
            title: "The Pro Glue: Webhooks & HTTP Modules",
            description: "Connecting to anything with an API endpoint.",
            sequenceNumber: 4,
            estimatedHours: 10,
            topics: ["NCE-AUTOMATE-M4-T1", "NCE-AUTOMATE-M4-T2"],
            prerequisiteModuleIds: ["NCE-AUTOMATE-M3"],
            outcomes: [
                "Set up a 'Webhook Listener' to receive data from custom apps",
                "Configure 'HTTP POST' requests to send data to external REST APIs",
                "Understand and parse JSON payloads visually"
            ]
        },
        {
            id: "NCE-AUTOMATE-M5",
            title: "Reliability Engineering: Error Handling",
            description: "Building 'Bulletproof' workflows that handle the unexpected.",
            sequenceNumber: 5,
            estimatedHours: 8,
            topics: ["NCE-AUTOMATE-M5-T1", "NCE-AUTOMATE-M5-T2"],
            prerequisiteModuleIds: ["NCE-AUTOMATE-M4"],
            outcomes: [
                "Implement 'Error Handler' routes to log failures in a separate spreadsheet",
                "Configure 'Automatic Retries' for flaky external APIs",
                "Perform 'Partial Success' logic to ensure some steps finish even if others fail"
            ]
        }
    ],
    topics: [
        {
            id: "NCE-AUTOMATE-M1-T1",
            moduleId: "NCE-AUTOMATE-M1",
            sequenceNumber: 1,
            title: "Triggers: The Digital Watchers",
            estimatedMinutes: 120,
            what: "A Trigger is the event that starts an automation. In professional no-code, there are two main types: 'Polling' (The automation tool checks the app every 5-15 minutes for new data) and 'Webhooks/Instant' (The app 'pings' the automation tool the millisecond the event happens).",
            why: "Triggers are the 'Sensors' of your business. If you want an email to go out when a user signs up, the SignUp is the trigger. Choosing 'Instant' triggers (Webhooks) is vital for real-time apps, while 'Polling' is acceptable for non-urgent tasks like weekly reporting.",
            when: "Before every single automation ever built.",
            how: "1. Select the Trigger App (e.g., Shopify, Typeform). 2. Select the 'Event' (e.g., 'New Order'). 3. Test the trigger to pull in 'Sample Data'. 4. Map that data into the next step.",
            ecosystem: "Zapier (Most native integrations), Make (Most granular logic), Pipedream (Developer-focused), Relay.",
            realWorld: "A popular food delivery startup uses 'Instant Webhooks' from their order app to trigger a Zap. The Zap instantly notifies the kitchen via Slack and prints a label. If they used 'Polling' (15-minute delay), the customers would be waiting too long for their food. High-speed triggers enable high-speed business.",
            useCases: [
                "Starting a workflow the moment a Stripe payment is successful",
                "Detecting a new row in Google Sheets to trigger an employee onboarding",
                "Watching a RSS feed to auto-post news to social media"
            ],
            advantages: [
                "Set and Forget: The system 'Watches' for you 24/7",
                "Consistency: No humans are needed to 'Start' the process",
                "Efficiency: High-speed triggers enable instant customer feedback"
            ],
            disadvantages: [
                "Over-triggering: A single error could trigger 10,000 Zaps if not careful"
            ],

            interviewTip: "If asked 'How do you handle a massive surge in triggers?', answer: 'I'd implement a Queue or use a platform that supports high-concurrency processing, ensuring that the automation doesn't throttle or skip records during peak load.'",
            resumeBullet: "Engineered a real-time responsive automation pipeline handling 5,000+ monthly events with a 99.9% success rate using Webhook-driven triggers.",

            videos: [
                { type: "public", title: "Zapier 101: Triggers vs Actions", author: "Zapier Official", views: "100K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Webhooks for Non-Developers", author: "Make.com", views: "60K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Zapier University", rating: 4.8, title: "Automation Foundations", instructor: "Zapier Team", enrolled: "500K+", duration: "5 hours", url: "https://zapier.com/university" }
            ],
            blogs: [
                { type: "Core", title: "Instant vs Polling: Which is Better?", publisher: "Make Blog", readTime: "15 min", url: "https://www.make.com/en/blog/webhooks-vs-polling" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Double Charge", category: "Logic Safety", estimatedTime: "3 hours",
                    scenarioDescription: "A Zap triggers when a 'New Payment' is detected in Stripe. Due to a network glitch, Stripe sends the same webhook twice. The Zap runs twice and sends the customer two 'Thank You' emails and two digital products. How do we stop this?",
                    problemAnalysis: "This is a 'Race Condition' or 'Double-Trigger' problem. The solution is to use a 'Deduplication' step. Before sending the email, the Zap should check a database (like Airtable) to see if 'StripeID_123' has already been processed. If 'Yes', stop the Zap. If 'No', process and log the ID.",
                    architectureLayers: ["Ingress Layer (Webhook)", "State Check Layer (Airtable)", "Action Layer (Postmark/Email)"],
                    toolsAndTech: [{ name: "Airtable (as a Log)", justification: "By using Airtable as a 'Single Source of Truth' for processed IDs, we create an Idempotency layer. This ensures that no matter how many times the trigger pings, the final action only happens once." }],
                    tradeOffs: ["Adding a check step costs 1 extra 'Task' in Zapier but saves thousand of dollars in refund overhead."],
                    nfrConsiderations: ["Idempotency: Every automation must be safe to run multiple times with the same input."],
                    kpis: ["Achieve 0% duplicated actions in a 1,000-event stress test."],
                    keyInsights: "Trust the trigger, but verify the state."
                }
            ],
            playgrounds: [
                {
                    title: "The Logic Simulator",
                    description: "Visualizing a multi-step flow.",
                    examples: [
                        {
                            language: "Logic Flow",
                            code: "Trigger: New Form Submission\n  -> Action: Format Name (Capitalize)\n  -> Filter: Only if Email contains '@gmail.com'\n  -> Action: Create Record in CRM\n  -> Action: Send Welcome Email"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "automate/dedupe-logic",
                commitMessage: "automate: added idempotency check using Airtable to prevent double-processing of Stripe webhooks",
                files: [{ name: "Automation/DedupeFlow.json", type: "file", content: "logic map" }],
                activeFileSnippet: { filename: "Workflow.md", code: "Check: If ID exists in Logs -> If YES: Terminate -> If NO: Proceed" }
            },
            community: {
                aiSummary: "The trigger is the spark. Professional engineers focus on making sure the spark only lights the fire once.",
                solutions: []
            }
        },
        {
            id: "NCE-AUTOMATE-M2-T1",
            moduleId: "NCE-AUTOMATE-M2",
            sequenceNumber: 1,
            title: "Routers & Branching Logic",
            estimatedMinutes: 240,
            what: "Routers (in Make) or Paths (in Zapier) allow a single workflow to split into multiple directions based on data. It’s the visual version of an 'If... Else If... Else' statement. For example, 'If order > $1000, notify the CEO; Else if order > $100, notify the Manager; Else just log it.'",
            why: "Without branching, you would need to build 10 separate Zaps for 10 different scenarios, which is a maintenance nightmare. A single branched workflow keeps all your logic in one 'Map', making it much easier to debug and scale as your business rules change.",
            when: "Every time you have business rules that differ based on customer tier, amount, location, or product type.",
            how: "1. Add a 'Router' module. 2. Create 'Routes' (Paths). 3. Apply a 'Filter' to each route (e.g., 'Score > 80'). 4. Build the actions unique to that path.",
            ecosystem: "Make.com (Advanced Routers), Zapier Paths (Available on Pro plan).",
            realWorld: "A real estate agency uses a Router to handle 'Inbound Inquiries'. Route A: High-budget buyers go to the 'Senior Agent' and get a text message. Route B: Low-budget buyers go to the 'Junior Agent' and get an email. Route C: Spam inquiries are deleted automatically. This single branched flow manages their entire sales pipeline logic.",
            useCases: [
                "Sending different welcome emails to 'Free' vs 'Premium' users",
                "Routing support tickets to different Slack channels based on keywords (e.g. 'Billing' vs 'Bug')",
                "Applying different tax rates in an invoice generator based on the customer's country"
            ],
            advantages: [
                "Consolidation: Keep 50 business rules in one single visual map",
                "Efficiency: Data is only processed by the relevant branch, saving computation",
                "Clarity: Visually 'See' the logic flow of your company at a glance"
            ],
            disadvantages: [
                "Visual Chaos: Extremely complex routers can look like 'Spaghetti' if not organized with labels"
            ],

            interviewTip: "If asked 'How do you handle 20 different branching paths?', answer: 'I'd use a \"Switch\" case pattern. In no-code, this can be done using a Table-based lookup. I'd have a table of \"Rules\" and use the workflow to find the rule and its destination, rather than building 20 physical paths.'",
            resumeBullet: "Architected complex multi-path automation workflows using Make Routers, consolidating 15 disparate zaps into a single, unified business engine.",

            videos: [
                { type: "public", title: "Mastering the Make Router", author: "Make Academy", views: "80K views", duration: "15:20", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Zapier Paths Deep Dive", author: "Automation Empire", views: "40K views", duration: "22:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Makerpad", rating: 4.9, title: "Advanced Automation with Make", instructor: "Ben Tossell", enrolled: "15K+", duration: "10 hours", url: "https://www.makerpad.co/courses/advanced-make" }
            ],
            blogs: [
                { type: "Technical", title: "Visual Branching Strategies", publisher: "No-Code Essentials", readTime: "18 min", url: "https://nocodeessentials.com/router-logic" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Hard", title: "The Logic Spaghetti", category: "Workflow Optimization", estimatedTime: "6 hours",
                    scenarioDescription: "A retail client has 15 different discount codes. They want to send a different custom email for EACH code. They started building a router with 15 paths, but the screen is now too big to manage and they keep making mistakes in Path 12.",
                    problemAnalysis: "This is 'Vertical Bloat'. The solution is to move the logic into a database. We create a 'Discounts' table in Airtable with two columns: 'Code' and 'EmailTemplateID'. In the workflow, we simply 'Search' for the code, get the TemplateID, and pass it to the email step. No branching is needed.",
                    architectureLayers: ["Logic Table Layer (Airtable)", "Data Search Layer", "Universal Email Layer"],
                    toolsAndTech: [{ name: "Dynamic Lookups", justification: "By using a 'Dynamic Search' instead of a hard-coded branch, we make the system 'Infinite'. To add a 16th discount code, the client just adds a row to Airtable. They don't have to touch the automation. This is 'Clean Architecture' applied to no-code." }],
                    tradeOffs: ["Setting up the lookup table takes longer initially but allows for unlimited scaling without touching the logic canvas."],
                    nfrConsiderations: ["Maintainability: Non-technical staff must be able to add new discount rules without breaking the automation."],
                    kpis: ["Reduce 'Steps per logic-change' from 5 (editing flow) to 0 (editing data)."],
                    keyInsights: "If you have more than 5 branches, your logic belongs in a table, not a router."
                }
            ],
            playgrounds: [
                {
                    title: "The Branch Simulator",
                    description: "Visualizing the choice.",
                    examples: [
                        {
                            language: "Logic Config",
                            code: "SWITCH (Order.Total)\n  CASE > 500: SEND 'High-Priority.html'\n  CASE > 100: SEND 'Standard-Priority.html'\n  DEFAULT:    SEND 'Low-Priority.html'"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "automate/router-refactor",
                commitMessage: "automate: replaced hard-coded router paths with dynamic Airtable lookups to improve scalability",
                files: [{ name: "Automation/LogicMap.json", type: "file", content: "enhanced logic" }],
                activeFileSnippet: { filename: "Workflow.md", code: "Module: Search Results -> Path: Universal Action {{TemplateID}}" }
            },
            community: {
                aiSummary: "Routers are beautiful until they aren't. Learn the 'Table-Driven-Logic' pattern early to avoid spaghetti flows.",
                solutions: []
            }
        }
    ],
    videoCount: 350,
    articleCount: 220,
    problemCount: 160,
    capstoneProject: {
        title: "The Multi-System Revenue Engine",
        description: "You will build the automated 'Revenue Operations' pipeline for a global SaaS company. Your project must connect four systems: a Lead Form (Typeform), a CRM (HubSpot), a database (Airtable), and an Email service (SendGrid). You will implement a 'Router' that classifies leads into 'Enterprise' (Budget >$10k) and 'Small Biz'. For Enterprise leads, you will use custom formatting to extract their LinkedIn URL from their email domain using a Clearbit API call via the HTTP Module. You will implement a deduplication layer to ensure no leads are created twice. Finally, you will build an 'Error Handling Route' that captures any failed API calls and posts the error message to a dedicated Slack channel for the DevOps team. This project demonstrates you can build enterprise-grade, self-healing automated systems that handle revenue-critical data without code.",
        estimatedDays: 14,
        skillsFocused: [
            "Multi-system Integration Architecture",
            "Advanced Branching Logic (Routers)",
            "REST API & HTTP Custom Requests",
            "Idempotency & Deduplication Patterns",
            "Proactive Error Handling & Logging"
        ],
        steps: [
            {
                title: "Phase 1: The Lead Ingest",
                description: "Connect Typeform to Zapier/Make and implement the deduplication check against your CRM."
            },
            {
                title: "Phase 2: The Logic Split",
                description: "Build the Router that segments leads by budget and performs the custom API enrichment for high-value leads."
            },
            {
                title: "Phase 3: The Data Sync",
                description: "Map and format lead data for HubSpot and Airtable, ensuring multi-system consistency."
            },
            {
                title: "Phase 4: The Safety Net",
                description: "Configure the 'Error Handling' route to catch failures and notify the team in Slack."
            }
        ]
    },
    totalEstimatedHours: 70,
    estimatedCompletionDays: 30,
    moduleCount: 5,
    createdAt: "2026-02-28T00:00:00Z",
    updatedAt: "2026-02-28T00:00:00Z",
    version: "1.0",
    status: "published"
};
