import { CourseEnhanced } from './types';

export const nceSecurity: CourseEnhanced = {
    id: "NCE-SECURITY",
    titleKey: "courses.nceSecurity",
    descKey: "courses.nceSecurityDesc",
    icon: "🔒",
    duration: "2 weeks",
    languages: ["Security Policy", "GDPR", "OAuth 2.0 (Security)", "SQL (Injection defense)", "RBAC Logic"],
    category: "no-code",
    programIds: ["NCE-ENTERPRISE", "NCE-APP"],
    trackId: "nce",
    level: "beginner",
    prerequisites: ["NCE-FOUND", "NCE-DATABASE", "NCE-AUTOMATE"],
    targetAudience: "Enterprise solutions architects, compliance officers, and no-code developers who need to ensure that their visual applications meet rigorous security, privacy, and governance standards for production use.",
    learningOutcomes: [
        "Apply the 'Shared Responsibility Model' to identify which security layers are managed by the platform vs. the developer",
        "Implement 'Row-Level Security' (RLS) to ensure users can only access their own data records even if they share the same UI",
        "Conduct a 'No-Code Security Audit' to identify common vulnerabilities like exposed API keys or insecure data bindings",
        "Architect GDPR and HIPAA compliant data storage patterns using field-level encryption and masking",
        "Establish 'Enterprise Governance' frameworks to manage Shadow IT and ensure app versioning and audit trails"
    ],
    modules: [
        {
            id: "NCE-SECURITY-M1",
            title: "The Security Landscape: Vulnerabilities in No-Code",
            description: "Understanding that 'No-Code' doesn't mean 'No-Risk'.",
            sequenceNumber: 1,
            estimatedHours: 10,
            topics: ["NCE-SECURITY-M1-T1", "NCE-SECURITY-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Identify the top 5 security risks in visual development (based on OWASP top 10)",
                "Explain the 'Shared Responsibility Model' between platform and builder",
                "Perform a basic threat model for a no-code web application"
            ]
        },
        {
            id: "NCE-SECURITY-M2",
            title: "Data Privacy & Compliance Mastery",
            description: "Engineering for GDPR, HIPAA, and PII protection.",
            sequenceNumber: 2,
            estimatedHours: 12,
            topics: ["NCE-SECURITY-M2-T1", "NCE-SECURITY-M2-T2"],
            prerequisiteModuleIds: ["NCE-SECURITY-M1"],
            outcomes: [
                "Implement 'Right to be Forgotten' automated workflows across multi-table databases",
                "Design 'Encrypted Fields' for sensitive data like Social Security or Credit Card numbers",
                "Audit data-processing logs to ensure compliance with regional privacy laws"
            ]
        },
        {
            id: "NCE-SECURITY-M3",
            title: "Access Control: RBAC & Row-Level Security",
            description: "Ensuring the right people see the right data, and nothing more.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["NCE-SECURITY-M3-T1", "NCE-SECURITY-M3-T2"],
            prerequisiteModuleIds: ["NCE-SECURITY-M2"],
            outcomes: [
                "Configure 'Role-Based Access Control' (RBAC) to differentiate Admin vs. User permissions",
                "Implement 'Row-Level Security' (RLS) at the database layer to prevent cross-tenant data leaks",
                "Explain the danger of 'Client-Side Filtering' vs. 'Server-Side Privacy Rules'"
            ]
        },
        {
            id: "NCE-SECURITY-M4",
            title: "API & Integration Security",
            description: "Locking the back door of your automated workflows.",
            sequenceNumber: 4,
            estimatedHours: 10,
            topics: ["NCE-SECURITY-M4-T1", "NCE-SECURITY-M4-T2"],
            prerequisiteModuleIds: ["NCE-SECURITY-M3"],
            outcomes: [
                "Securely store 'API Secrets' using environment variables instead of hard-coded strings",
                "Implement 'IP Whitelisting' for webhook receivers to prevent unauthorized pings",
                "Audit third-party connector permissions to follow the 'Principle of Least Privilege'"
            ]
        },
        {
            id: "NCE-SECURITY-M5",
            title: "Shadow IT & Enterprise Governance",
            description: "Managing the chaos of rapid visual development at scale.",
            sequenceNumber: 5,
            estimatedHours: 8,
            topics: ["NCE-SECURITY-M5-T1", "NCE-SECURITY-M5-T2"],
            prerequisiteModuleIds: ["NCE-SECURITY-M4"],
            outcomes: [
                "Establish an 'App Catalog' to track and monitor every no-code tool in the organization",
                "Configure 'Deployment Pipelines' (Dev/Staging/Prod) for no-code apps",
                "Analyze app versioning history to perform a 'Rollback' after a security incident"
            ]
        }
    ],
    topics: [
        {
            id: "NCE-SECURITY-M1-T1",
            moduleId: "NCE-SECURITY-M1",
            sequenceNumber: 1,
            title: "The Shared Responsibility Model",
            estimatedMinutes: 120,
            what: "In No-Code, security is shared. The platform (e.g., Bubble, Airtable) is responsible for the 'Infrastructure' (Servers, Physical Security, Database encryption at rest). The developer (You) is responsible for the 'Application Logic' (Privacy rules, user permissions, API key safety). Just because the platform is secure doesn't mean your app is.",
            why: "If you build an app on a secure server but leave a 'Delete All Users' button visible to every visitor, that is an Application failure, not an Infrastructure failure. Understanding where your responsibility begins is critical to building professional software.",
            when: "Before every build and during every architectural review.",
            how: "1. Review the platform's security whitepaper. 2. Identify the 'Logic Boundaries' (Where are you making decisions about data access?). 3. Map out the 'Trust Zones' (Who is allowed where?).",
            ecosystem: "Cloud Security Standards (SOC2, ISO 27001), Platform Trust Centers, Security Audit Checklists.",
            realWorld: "A developer built a CRM on a very secure no-code platform. However, they misconfigured a 'Search' page that showed the 'User ID' and 'Email' of every customer in the system to anyone who visited the URL. The platform worked perfectly, but the developer failed their responsibility. Result: A data breach that cost the company 1 month of reputation repair.",
            useCases: [
                "Performing a security review of a new internal HR tool before launch",
                "Explaining the security posture of your visual stack to an enterprise IT department",
                "Evaluating a new no-code platform based on their data-residency and compliance logs"
            ],
            advantages: [
                "Speed: You don't have to manage OS patches or server firewalls yourself",
                "Standardization: Platforms often provide pre-built encryption modules",
                "Verification: Easier to achieve SOC2/GDPR compliance using established vendors"
            ],
            disadvantages: [
                "Transferred Risk: You are dependent on the platform's own security team to prevent root-level breaches."
            ],

            interviewTip: "If asked 'Is no-code secure?', answer: 'Yes, but the responsibility is shared. The platform secures the house (Firewalls/Encryption), but I am responsible for locking the doors and windows (Privacy Rules/RBAC). I treat every no-code app with the same technical rigor as a custom-coded one.'",
            resumeBullet: "Implemented a 100% compliant security architecture for an enterprise healthcare portal, ensuring Zero-Trust data access via strict server-side privacy rules.",

            videos: [
                { type: "public", title: "Security in No-Code: What you need to know", author: "Bubble.io", views: "50K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Shared Responsibility in the Cloud", author: "AWS (Conceptual)", views: "500K views", duration: "08:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Coursera", rating: 4.8, title: "Cybersecurity for Modern Business", instructor: "Google", enrolled: "2M+", duration: "20 hours", url: "https://www.coursera.org/professional-certificates/google-cybersecurity" }
            ],
            blogs: [
                { type: "Core", title: "The Hidden Security Risks of No-Code", publisher: "DarkReading", readTime: "15 min", url: "https://www.darkreading.com/edge-articles/the-security-risks-of-low-code-no-code" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Exposed ID", category: "Application Security", estimatedTime: "3 hours",
                    scenarioDescription: "A developer builds a dashboard that shows 'User Profile' data. To make it load fast, they use a client-side filter: `Show only records where ID == CurrentUser.ID`. However, a savvy user opens the 'Network Tab' in their browser and sees that the platform actually sent 1,000 user records to the browser, and the browser just 'Hid' 999 of them.",
                    problemAnalysis: "This is a 'Client-Side Filtering' vulnerability. The data was already sent to the user's computer. The solution is 'Server-Side Privacy Rules'. You must configure the database itself to only send the 1 requested record, no matter what the browser asks for.",
                    architectureLayers: ["Data Transfer Layer (Security)", "Client-Side vs. Server-Side Logic", "Privacy Rule Engines"],
                    toolsAndTech: [{ name: "Server-Side Privacy Rules (Bubble/Backend)", justification: "By moving the filter to the 'Privacy' tab of the database, the server never even looks at the other 999 records. This is the only way to ensure true data privacy. Even if the user is a hacker, they cannot see what the server never sends." }],
                    tradeOffs: ["Server-side rules can sometimes slightly increase load time (latency) but are mandatory for production data."],
                    nfrConsiderations: ["Zero-Trust: No data should be accessible without an explicit permission rule."],
                    kpis: ["Achieve 0% data exposure in an 'Inspect Element' audit of the raw network request."],
                    keyInsights: "If the data is in the browser, it is public. Hide it on the server."
                }
            ],
            playgrounds: [
                {
                    title: "The Privacy Simulator",
                    description: "Visualizing the Rule Engine.",
                    examples: [
                        {
                            language: "Privacy Rule (Visual)",
                            code: "WHEN [Record's 'Created By' is Current User]\n  -> [Allow View all fields]\n  -> [Allow Edit 'Phone Number']\nDEFAULT\n  -> [Allow View 'Name' only]\n  -> [Deny all other access]"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "security/privacy-rules",
                commitMessage: "security: implemented strict server-side privacy rules for the Transactions table to prevent cross-tenant data access",
                files: [{ name: "Security/PrivacyMatrix.pdf", type: "file", content: "rule map" }],
                activeFileSnippet: { filename: "Rules.md", code: "Type: TRANSACTION; Rule: Current_User == Record_Owner; Perm: READ_WRITE;" }
            },
            community: {
                aiSummary: "Security is a process, not a checkbox. A 'Secure Platform' + 'Insecure Developer' = 'Insecure App'.",
                solutions: []
            }
        },
        {
            id: "NCE-SECURITY-M3-T1",
            moduleId: "NCE-SECURITY-M3",
            sequenceNumber: 1,
            title: "RBAC: Designing the Permission Matrix",
            estimatedMinutes: 180,
            what: "Role-Based Access Control (RBAC) is the method of granting system access based on the 'Role' of an individual user. In no-code, this usually involves a 'User' table with a 'Role' field (e.g., Admin, Manager, Employee, Guest). The UI and the Database then react to this field to hide or show features.",
            why: "Without RBAC, every user is a 'Superuser'. Your employee could accidentally delete the CEO's project, or a guest could view sensitive financial reports. RBAC creates 'Swimlanes' for users, ensuring everyone can do their job without seeing data they don't need.",
            when: "Every time an application has more than one type of user.",
            how: "1. List the 'Roles' (Who is using the app?). 2. List the 'Permissions' (What can they do? Read/Write/Delete). 3. Create the 'Permission Matrix'. 4. Map this matrix into your visual app's 'Conditional Visibility' and 'Privacy Rules'.",
            ecosystem: "IAM Standards (Identity and Access Management), Auth0 Role management, Visual RBAC Engines (Bubble, Stacker, internal tool builders).",
            realWorld: "A major university uses an RBAC system for their student portal. 'Students' can see their own grades (Read only). 'Professors' can see their class list and enter grades (Write). 'Administrators' can add or remove students (Delete). These three roles are handled by the same app, but the interface looks completely different for each group based on their role ID.",
            useCases: [
                "Building a Multi-tenant CRM where each Sales Team only sees their own leads",
                "Designing a 'Manager Approval' workflow where only those with 'Role == Manager' see the 'Approve' button",
                "Architecting a community forum where only 'Moderators' can hide posts"
            ],
            advantages: [
                "Organizational Safety: Prevents accidental data deletion by non-admins",
                "Clarity: Users are only shown the tools they actually need",
                "Compliance: Simplifies auditing of 'Access Rights' for security certifications"
            ],
            disadvantages: [
                "Maintenance: As more roles are added, the number of 'Conditionals' in the app can bloom"
            ],

            interviewTip: "If asked 'How do you handle complex permissions?', answer: 'I use an \"Additive\" role model. Instead of checking for individual users, I check for Role membership. This allows me to change permissions once for a whole group, rather than editing 100 individual user records.'",
            resumeBullet: "Engineered a scalable RBAC system for a 500-user enterprise app, managing 4 distinct user tiers with 100% data isolation.",

            videos: [
                { type: "public", title: "RBAC Explained for Product Managers", author: "Pragmatic Engineer", views: "100K views", duration: "10:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Configuring Roles in No-Code", author: "Stacker Team", views: "30K views", duration: "12:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Udemy", rating: 4.8, title: "Identity and Access Management Masterclass", instructor: "Kevin Henry", enrolled: "25K+", duration: "10 hours", url: "https://www.udemy.com/course/identity-and-access-management/" }
            ],
            blogs: [
                { type: "Technical", title: "Designing Access Control for Scale", publisher: "Bubble Manual", readTime: "15 min", url: "https://manual.bubble.io/help-guides/data/privacy" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Hard", title: "The Rogue Intern", category: "Governance", estimatedTime: "4 hours",
                    scenarioDescription: "A 'New Intern' account is created. By default, your app gives new users 'Manager' permissions because of a bug in the sign-up workflow. The intern accidentally deletes 5,000 project records from the database.",
                    problemAnalysis: "This is a 'Default-Open' security failure. The system should be 'Default-Closed'. New users should have the lowest possible role (Guest) and permissions must be explicitly granted. We also need to implement 'Soft Deletes' (where data is hidden, not destroyed) so we can restore the 5,000 records.",
                    architectureLayers: ["User Onboarding Logic (Security)", "Database Lifecycle (Soft Delete)", "Recovery Strategy"],
                    toolsAndTech: [{ name: "Soft Delete Pattern", justification: "Instead of using the 'Delete Record' module, we change a field: `IsDeleted = True`. We then filter our app views to only show `IsDeleted == False`. This turns every accidental 'Delete' into a reversible action, protecting the company from catastrophic human error." }],
                    tradeOffs: ["Soft deletes take up slightly more storage over time but provide a mission-critical safety net for data integrity."],
                    nfrConsiderations: ["Data Integrity: No critical record should ever be permanently destroyed without an Admin override."],
                    kpis: ["Reduce 'Data Loss Incidents' to 0% through the implementation of soft-delete and default-closed RBAC."],
                    keyInsights: "Never let a user actually delete a record. Just hide it from them."
                }
            ],
            playgrounds: [
                {
                    title: "The Permission Matrix",
                    description: "Visualizing Access Levels.",
                    examples: [
                        {
                            language: "Logic Config",
                            code: "| Role  | Create | Read | Update | Delete |\n|-------|--------|------|--------|--------|\n| Admin | X      | X    | X      | X      |\n| Edit  |        | X    | X      |        |\n| View  |        | X    |        |        |"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "security/rbac-audit",
                commitMessage: "security: refactored all delete-workflows to use the soft-delete pattern for enhanced data resilience",
                files: [{ name: "Database/SoftDeleteHook.json", type: "file", content: "logic update" }],
                activeFileSnippet: { filename: "Workflow.md", code: "Action: Change Field -> Status = ARCHIVED; Visibility = HIDDEN;" }
            },
            community: {
                aiSummary: "The best security is the one the user doesn't even see. If they can't see the 'Self Destruct' button, they can't press it.",
                solutions: []
            }
        }
    ],
    videoCount: 220,
    articleCount: 140,
    problemCount: 95,
    capstoneProject: {
        title: "The Zero-Trust Corporate Portal",
        description: "You will build the security foundation for an enterprise internal application. Your project must include a 3-tier Role-Based Access Control (RBAC) system (Admin, Manager, Employee). You will implement 'Row-Level Security' using server-side privacy rules to ensure Department A cannot see Department B's data. You will configure an 'Audit Log' that automatically records every time a user edits a sensitive record (e.g. Salary or Status). To handle data privacy, you will design a 'Self-Service Compliance' center that allows users to download their own data or request a 'Soft Delete' of their profile. Finally, you will perform a 'Vulnerability Audit', deliberately trying to bypass your own security rules to ensure no data leaks through client-side filtering. This project proves you can engineer no-code solutions that meet the security and compliance requirements of a Fortune 500 company.",
        estimatedDays: 14,
        skillsFocused: [
            "Enterprise RBAC Architecture",
            "Server-Side Privacy Rules & Data Isolation",
            "Automated Audit Logging & Monitoring",
            "Compliance Engineering (GDPR/PII)",
            "Threat Modeling & Security Auditing"
        ],
        steps: [
            {
                title: "Phase 1: The Lockdown",
                description: "Configure the core database with 'Default-Closed' privacy rules and department isolation logic."
            },
            {
                title: "Phase 2: The Role Matrix",
                description: "Build the navigation and feature-set that dynamically reacts to the 3-tier user role architecture."
            },
            {
                title: "Phase 3: The Audit Pulse",
                description: "Implement the background workflows that log every 'Write' and 'Delete' action into a secure Audit table."
            },
            {
                title: "Phase 4: The Penetration Test",
                description: "Attempt to access Department B's data as a Department A user and document the results to verify all guards."
            }
        ]
    },
    totalEstimatedHours: 60,
    estimatedCompletionDays: 30,
    moduleCount: 5,
    createdAt: "2026-02-28T00:00:00Z",
    updatedAt: "2026-02-28T00:00:00Z",
    version: "1.0",
    status: "published"
};
