import { CourseEnhanced } from './types';

export const lceSecurity: CourseEnhanced = {
  id: "LCE-SECURITY",
  titleKey: "courses.lceSecurity",
  descKey: "courses.lceSecurityDesc",
  icon: "🔒",
  duration: "3 weeks",
  languages: ["Security Policy", "GDPR Compliance", "OAuth 2.0 (Security)", "JWT Security", "SAML 2.0", "Role-Based Logic"],
  category: "low-code",
  programIds: ["LCE-APP", "LCE-BPM", "LCE-ENTERPRISE", "LCE-INTEGRATE", "LCE-MOBILE", "LCE-AI"],
  trackId: "lce",
  level: "intermediate",
  prerequisites: ["LCE-FOUND", "LCE-DATA"],
  targetAudience: "Security architects, compliance officers, and professional low-code developers who must ensure that their visual applications meet the highest standards of data protection, user authorization, and corporate governance for enterprise environments.",
  learningOutcomes: [
    "Architect multi-layered security models in low-code, separating 'Authentication' (Identity) from 'Authorization' (Permissions).",
    "Master 'Role-Based Access Control' (RBAC) and 'Row-Level Security' (RLS) to ensure deep data isolation in multi-tenant systems.",
    "Implement 'Secure API Consumptiom' using secrets management and encrypted token storage (OAuth2/OpenID).",
    "Apply 'Data-at-Rest' and 'Data-in-Transit' encryption standards using platform features and custom extensions.",
    "Establish 'Enterprise Governance' frameworks for 'Shadow IT' management, including automated audit logging and vulnerability scanning."
  ],
  modules: [
    {
      id: "LCE-SECURITY-M1",
      title: "Identity & Authentication Architecture",
      description: "Who is the user? Proving identity in the cloud.",
      sequenceNumber: 1,
      estimatedHours: 10,
      topics: ["LCE-SECURITY-M1-T1", "LCE-SECURITY-M1-T2"],
      prerequisiteModuleIds: [],
      outcomes: [
        "Configure 'Single Sign-On' (SSO) using SAML 2.0 and OpenID Connect (OIDC) in a low-code platform.",
        "Implement 'Multi-Factor Authentication' (MFA) triggers for high-risk operations.",
        "Design 'Guest User' flows that provide limited access without compromising internal directories."
      ]
    },
    {
      id: "LCE-SECURITY-M2",
      title: "RBAC & Deep Authorization Patterns",
      description: "What can the user do? Managing permissions at scale.",
      sequenceNumber: 2,
      estimatedHours: 12,
      topics: ["LCE-SECURITY-M2-T1", "LCE-SECURITY-M2-T2"],
      prerequisiteModuleIds: ["LCE-SECURITY-M1"],
      outcomes: [
        "Implement 'Hierarchical RBAC' where 'Manager' roles inherit 'Employee' permissions automatically.",
        "Construct 'Row-Level Security' (RLS) filters to prevent cross-tenant data leaks at the database layer.",
        "Design an 'Admin Console' for runtime permission overrides and user lifecycle management."
      ]
    },
    {
      id: "LCE-SECURITY-M3",
      title: "Hardening the Data & Logic Perimeter",
      description: "Protecting the app from within.",
      sequenceNumber: 3,
      estimatedHours: 12,
      topics: ["LCE-SECURITY-M3-T1", "LCE-SECURITY-M3-T2"],
      prerequisiteModuleIds: ["LCE-SECURITY-M2"],
      outcomes: [
        "Implement 'Field-Level Encryption' for sensitive data using custom Java/C# extensions.",
        "Configure 'SQL Injection' and 'XSS' (Cross-Site Scripting) protections by following platform sanitization standards.",
        "Conduct a 'Logic Audit' to find insecurely exposed server actions."
      ]
    },
    {
      id: "LCE-SECURITY-M4",
      title: "Integration & API Security",
      description: "Locking the back door of your automated workflows.",
      sequenceNumber: 4,
      estimatedHours: 10,
      topics: ["LCE-SECURITY-M4-T1", "LCE-SECURITY-M4-T2"],
      prerequisiteModuleIds: ["LCE-SECURITY-M3"],
      outcomes: [
        "Securely store 'API Secrets' and 'Private Keys' in a platform's vault (e.g. AWS Secret Manager integration).",
        "Implement 'Rate Limiting' and 'IP Whitelisting' for exposed REST endpoints.",
        "Audit third-party connector scopes to follow the 'Principle of Least Privilege'."
      ]
    },
    {
      id: "LCE-SECURITY-M5",
      title: "Enterprise Governance & Compliance",
      description: "Managing the chaos of rapid visual development at scale.",
      sequenceNumber: 5,
      estimatedHours: 8,
      topics: ["LCE-SECURITY-M5-T1", "LCE-SECURITY-M5-T2"],
      prerequisiteModuleIds: ["LCE-SECURITY-M4"],
      outcomes: [
        "Analyze 'App Activity Logs' to detect 'Lateral Movement' and suspicious admin behavior.",
        "Establish an 'App Retirement' policy to prevent 'Vulnerable Orphan Apps' in the ecosystem.",
        "Conduct a full 'GDPR Technical Audit' ensuring 'Right to be Forgotten' workflows are functional."
      ]
    }
  ],
  topics: [
    {
      id: "LCE-SECURITY-M1-T1",
      moduleId: "LCE-SECURITY-M1",
      sequenceNumber: 1,
      title: "SSO & Identity Providers (IdP)",
      estimatedMinutes: 180,
      what: "Identity Management is the process of delegating 'Authentication' to a trusted third party like Azure AD, Okta, or Google Workspace. In professional LCE, you rarely build a 'User/Password' table. Instead, you use 'OpenID Connect' (OIDC) or 'SAML 2.0' to let the user log in with their corporate account. The platform then receives a 'Token' confirming their identity.",
      why: "Building your own authentication is dangerous—it leads to password leaks, poor hashing, and zero MFA support. By using an IdP, you ensure that if an employee leaves the company and their corporate account is disabled, their access to your 50 low-code apps is instantly revoked everywhere. This is the hallmark of Enterprise Security.",
      when: "Every time an application is built for an organization with more than 10 employees.",
      how: "1. Register your app in the Azure AD/Okta console. 2. Copy the 'Client ID' and 'Discovery URL'. 3. Configure the 'OIDC Provider' in your platform's backend. 4. Map the 'Claims' (User Group) to your internal roles.",
      ecosystem: "OAuth 2.0, OpenID Connect (OIDC), SAML 2.0, Azure AD, Okta, Auth0.",
      realWorld: "A major retail chain consolidated 200 different local user databases into a single Azure AD IdP for all their low-code inventory apps. This not only improved security but also enabled 'Passwordless Login' (FaceID/Fingerprint) for all staff, reducing 'Login Fatigue' and helpdesk tickets related to 'Forgotten Passwords' by 70%.",
      useCases: [
        "Implementing corporate logout for a global supply chain portal",
        "Enforcing 'MFA' and 'Conditional Access' policies based on the user's location",
        "Mapping 'AD Groups' (e.g. Sales-APAC) to fine-grained app permissions automatically"
      ],
      advantages: [
        "Unbeatable Security: You rely on trillion-dollar security budgets of Google/Microsoft.",
        "Compliance: Instantly meets SOC2/GDPR requirements for login safety.",
        "User Experience: 'One-Click Login' for all employees using existing sessions."
      ],
      disadvantages: [
        "Single Point of Failure: If the IdP is down, your app is down (though IdPs are extremely resilient)."
      ],

      interviewTip: "If asked 'Why not just build a local user table?', answer: 'Because I prioritize \"Enterprise Governance.\" Delegating identity to an IdP ensures that user lifecycles are managed centrally, MFA is enforced by policy, and security tokens are handled using industry-standard protocols like OIDC, which is much safer than custom code.'",
      resumeBullet: "Architected a secure SSO integration using OpenID Connect (OIDC) for a multi-app enterprise ecosystem, ensuring centralized identity management and 100% MFA coverage.",

      videos: [
        { type: "public", title: "OAuth 2.0 and OpenID Connect Explained", author: "Okta Dev", views: "1.5M views", duration: "18:45", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Configuring Azure AD for OutSystems", author: "OutSystems Community", views: "25K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Pluralsight", rating: 4.9, title: "Modern Authentication with OIDC and OAuth2", instructor: "Nate Barbettini", enrolled: "50K+", duration: "4 hours", url: "https://www.pluralsight.com/courses/openid-and-oauth2-securing-angular-apps" }
      ],
      blogs: [
        { type: "Core", title: "The Identity Gap in the Enterprise", publisher: "Duo Security", readTime: "25 min", url: "https://duo.com/blog/the-identity-gap-in-enterprise-security" }
      ],
      scenarios: [
        {
          id: "1.1", difficulty: "Medium", title: "The Rogue Ex-Employee", category: "Governance", estimatedTime: "4 hours",
          scenarioDescription: "A Sales Manager at a Pharma company is fired. They previously had access to a low-code 'Customer Database.' Because the app used its own local 'User' table, the IT department forgot to disable their account. The ex-manager logs in from home and downloads the whole client list.",
          problemAnalysis: "This is a 'Siloed Identity' failure. The solution is 'Centralized Authentication.' By refactoring the app to use 'SSO via Azure AD,' the moment IT disabled the user's corporate email, their low-code app login would have returned an 'Access Denied' error instantly.",
          architectureLayers: ["Identity Provider Layer", "App-to-IDP Bridge", "Security Audit Log"],
          toolsAndTech: [{ name: "SAML 2.0 Integration", justification: "By using SAML/OIDC, the identity 'truth' is managed by the IT department, not the app developer, ensuring 100% alignment with employee status." }],
          tradeOffs: ["A bit of setup complexity for the first app, but it saves the company from catastrophic data theft."],
          nfrConsiderations: ["Governance: User access must be revoked synchronously with corporate status."],
          kpis: ["Achieve 100% sync rate between app access and corporate AD status."],
          keyInsights: "If you leave the company, you shouldn't be able to open the app's front door."
        }
      ],
      playgrounds: [
        {
          title: "The Token Decoder",
          description: "Analyzing a JWT (JSON Web Token).",
          examples: [
            {
              language: "JSON (JWT Payload)",
              code: "{\n  \"sub\": \"1234567890\",\n  \"name\": \"John Doe\",\n  \"admin\": true,\n  \"iat\": 1516239022,\n  \"exp\": 1516245000\n}"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "security/enable-sso-okta",
        commitMessage: "security: migrated authentication from local database to Okta OIDC for centralized identity management",
        files: [{ name: "Security/IdP_Config.json", type: "file", content: "auth-metadata" }],
        activeFileSnippet: { filename: "Auth.md", code: "Issuer: https://okta.com/...; ClientID: abc-123; Scope: openid, profile;" }
      },
      community: {
        aiSummary: "Authentication is a 'Who is it?' question. Don't answer it yourself—ask a professional Identity Provider.",
        solutions: []
      }
    },
    {
      id: "LCE-SECURITY-M2-T1",
      moduleId: "LCE-SECURITY-M2",
      sequenceNumber: 1,
      title: "RBAC & Tenant Scoping: The Internal Walls",
      estimatedMinutes: 240,
      what: "Role-Based Access Control (RBAC) is the method of granting system access based on the 'Role' of a user (e.g. Admin, Editor, Viewer). 'Tenant Scoping' is the extension of this where users can only see data belonging to their specific organization (e.g. Sales Team Alpha vs Sales Team Beta). In LCE, this must be implemented 'Strictly'—meaning the database itself must enforce the rule, not just the UI.",
      why: "If you only hide the 'Delete' button in the UI, a clever user can still send an 'API Request' to the server to delete the record. You must implement 'Server-Side Perimeter Checks' that verify the user's role and tenant ID before Every single database action. This is called 'Zero-Trust Architecture.'",
      when: "Every time an application has more than one type of user or serves more than one department.",
      how: "1. Define the 'Roles' in the platform's role-manager. 2. Add a `TenantId` to every entity. 3. Use 'Database Filters' (Platform-native or SQL) that automatically append `WHERE TenantId = CurrentUser.TenantId` to every query.",
      ecosystem: "NIST RBAC Standard, Attribute-Based Access Control (ABAC), Row-Level Security (RLS).",
      realWorld: "A global medical equipment provider built a 'Patient Support' app. They used 'Tenant Scoping' to ensure that hospital staff in Belgium could never accidentally see patient data from hospital staff in Germany, even though they shared the same app. This was implemented at the core 'Data Access Layer,' making it physically impossible for data to leak between regions.",
      useCases: [
        "Building a multi-tenant SaaS where each customer pays for their own isolated data space",
        "Designing a 'Manager Approval' workflow where managers only see tickets from their own direct reports",
        "Implementing 'Executive Only' fields (like Salary) on a shared Employee Profile page"
      ],
      advantages: [
        "Data Isolation: Zero risk of 'Cross-Talk' between departments or clients.",
        "Scalability: One app instance can serve 1,000 clients safely.",
        "Regulatory Compliance: Meets legal requirements for regional data residency and localized privacy."
      ],
      disadvantages: [
        "Developer Burden: You must remember to apply the 'Tenant Filter' to every new entity you create (though some platforms automate this)."
      ],

      interviewTip: "If asked 'How do you prevent data leaks in multi-tenant apps?', answer: 'I use \"Row-Level Security\" (RLS) patterns. Every database query is automatically scoped to the user's TenantID at the server level. I never rely on UI hidding; security must be enforced where the data lives.'",
      resumeBullet: "Engineered a robust multi-tenant security architecture with strict row-level data isolation, ensuring 100% data privacy for 50+ global organizational units.",

      videos: [
        { type: "public", title: "Role-Based Access Control Explained", author: "Pragmatic Engineer", views: "100K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Tenant Isolation in the Cloud", author: "AWS (Conceptual)", views: "500K views", duration: "22:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Udemy", rating: 4.8, title: "Enterprise Security Architecture", instructor: "Kevin Henry", enrolled: "30K+", duration: "10 hours", url: "https://www.udemy.com/course/enterprise-security-architecture/" }
      ],
      blogs: [
        { type: "Technical", title: "Mastering Multi-Tenancy in Low-Code", publisher: "Mendix Technical Blog", readTime: "30 min", url: "https://www.mendix.com/blog/multi-tenant-architecture-performance-security/" }
      ],
      scenarios: [
        {
          id: "2.1", difficulty: "Hard", title: "The PII Leak", category: "Data Isolation", estimatedTime: "6 hours",
          scenarioDescription: "A developer building an HR app for a bank added a 'Search Employee' screen. They forgot to check the 'IsManager' role in the search action. A junior teller uses the search and is shocked to see the 'Annual Bonus' amounts for the whole Board of Directors in the results list.",
          problemAnalysis: "This is a 'Horizontal Privilege Escalation' vulnerability. The developer trusted the UI to hide the bonus field, but the 'Data Action' sent all fields of the employee record to the browser. The fix is 'Partial Fetching and Server-Side Authorization'—the server action must explicitly check the role and REMOVE sensitive fields from the result before sending it to the client.",
          architectureLayers: ["Server-Side Field Masking", "Role-Based Data Filtering", "Security Unit Testing"],
          toolsAndTech: [{ name: "Server-Side Data Logic", justification: "By filtering the data AT THE SOURCE, we ensure that even a hacker using a network interceptor will only see the fields they are cleared to see. The sensitive data never leaves the server for unauthorized roles." }],
          tradeOffs: ["A bit more complex 'Fetch' logic, but it's the difference between a secure bank app and a headline-making data breach."],
          nfrConsiderations: ["Confidentiality: Tier-1 data must never be transmitted to Tier-3 users."],
          kpis: ["Achieve 100% data field isolation between roles in a pen-test."],
          keyInsights: "If the data is in the browser, it is public. Filter it on the server."
        }
      ],
      playgrounds: [
        {
          title: "The Permission Matrix",
          description: "Visualizing the Rule set.",
          examples: [
            {
              language: "JSON (Policy)",
              code: "{\n  \"Entity\": \"Employee\",\n  \"Rules\": [\n    { \"Role\": \"Admin\", \"Access\": \"Full\" },\n    { \"Role\": \"Manager\", \"Access\": \"Limited\", \"MaskedFields\": [\"Salary\"] },\n    { \"Role\": \"Employee\", \"Access\": \"SelfOnly\" }\n  ]\n}"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "security/data-isolation-rls",
        commitMessage: "security: implemented server-side row-level security to ensure departmental data isolation",
        files: [{ name: "Database/TenantScopedEntities.oml", type: "file", content: "rls-metadata" }],
        activeFileSnippet: { filename: "PrivacyRules.md", code: "Policy: View_Client; Condition: User.Region == Client.Region;" }
      },
      community: {
        aiSummary: "Roles are the 'Wall'. Tenants are the 'Moat'. Build them deep in the database, not just on the screen.",
        solutions: []
      }
    }
  ],
  videoCount: 480,
  articleCount: 320,
  problemCount: 205,
  capstoneProject: {
    title: "The Zero-Trust Corporate Portal",
    description: "In this mastery project, you will build the security architecture for a hypothetical 'Investment Bank' internal portal. You will implement a 3-tier Role-Based Access Control (RBAC) system (Executive, Banker, Support). You will configure 'SSO via OpenID Connect' (using a mock IdP like Auth0). You must design 'Tenant Scoping' for three global regions (NYC, London, Tokyo) ensuring Bankers in NYC cannot see UK client data. You will implement 'Sensitive Field Masking' so only Executives can see the 'Total Net Worth' of clients. Finally, you will set up a 'Security Audit Log' that records to an immutable database every time an 'Executive' record is viewed. This project serves as your certification that you can engineer a 'Zero-Trust' system using professional low-code tools that meets the rigorous security standards of the financial industry.",
    estimatedDays: 14,
    skillsFocused: [
      "Enterprise OIDC/SSO Identity Integration",
      "Hierarchical Role-Based Access Control (RBAC)",
      "Multi-tenant Row-Level Security (RLS) Patterns",
      "Field-Level Encryption & Data Masking Logic",
      "Automated Compliance Auditing & Logging Architecture"
    ],
    steps: [
      {
        title: "Phase 1: The Identity Handshake",
        description: "Configure the OIDC bridge and map the mock AD Groups to your platform roles."
      },
      {
        title: "Phase 2: The Data Fortress",
        description: "Implement the Tenant-Scoping and RBAC filters at the core database level for all entities."
      },
      {
        title: "Phase 3: Deep Data Privacy",
        description: "Develop the server-side logic that masks PII and high-sensitivity financial fields based on user role."
      },
      {
        title: "Phase 4: The Audit Pulse",
        description: "Configure the background listeners that log every sensitive 'Read' and 'Write' action for compliance."
      }
    ]
  },
  totalEstimatedHours: 100,
  estimatedCompletionDays: 30,
  moduleCount: 6,
  createdAt: "2026-02-28T00:00:00Z",
  updatedAt: "2026-02-28T00:00:00Z",
  version: "1.0",
  status: "published"
};