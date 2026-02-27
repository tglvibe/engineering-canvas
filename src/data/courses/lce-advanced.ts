import { CourseEnhanced } from './types';

export const lceAdvanced: CourseEnhanced = {
  id: "LCE-ADVANCED",
  titleKey: "courses.lceAdvanced",
  descKey: "courses.lceAdvancedDesc",
  icon: "🚀",
  duration: "4 weeks",
  languages: ["C# (SDK)", "Java (Extension)", "SQL (Advanced Tuning)", "Architecture Modeling", "Component Design"],
  category: "low-code",
  programIds: ["LCE-APP", "LCE-ENTERPRISE"],
  trackId: "lce",
  level: "advanced",
  prerequisites: ["LCE-FOUND", "LCE-DATA", "LCE-LOGIC", "LCE-SECURITY", "LCE-INTEGRATE"],
  targetAudience: "Senior developers and IT architects who need to push low-code platforms to their absolute limit by writing custom code extensions, architecting multi-app ecosystems, and solving the world's most complex enterprise scaling challenges.",
  learningOutcomes: [
    "Master the 'Code Extension' pattern—identifying when and how to drop into C# or Java to solve problems visual logic cannot handle.",
    "Architect 'Scalable Shared Modules' using the Service Action pattern to minimize cross-app coupling in large ecosystems.",
    "Perform 'Deep Performance Profiling'—using browser profilers and server-side logs to find bottlenecks in complex visual trees.",
    "Implement 'Architecture-as-Code' principles, ensuring that visual applications follow the 4-Layer Architecture (4LA) for long-term maintainability.",
    "Design and build 'Custom UI Widgets' using JavaScript and React/Vue-based extensions within a professional low-code shell."
  ],
  modules: [
    {
      id: "LCE-ADVANCED-M1",
      title: "The Code-Gap: When Visual is Not Enough",
      description: "Writing C# and Java extensions safely.",
      sequenceNumber: 1,
      estimatedHours: 12,
      topics: ["LCE-ADVANCED-M1-T1", "LCE-ADVANCED-M1-T2"],
      prerequisiteModuleIds: [],
      outcomes: [
        "Explain the 'Extension' architectural boundary and its impact on maintainability.",
        "Create a 'Reflection-Based' extension to perform dynamic object mapping.",
        "Implement 'External Library Wrappers' (e.g. PDF generation, Cryptography) inside low-code flows."
      ]
    },
    {
      id: "LCE-ADVANCED-M2",
      title: "Architecture at Scale (4LA)",
      description: "Organizing 1,000+ modules without creating spaghetti.",
      sequenceNumber: 2,
      estimatedHours: 15,
      topics: ["LCE-ADVANCED-M2-T1", "LCE-ADVANCED-M2-T2"],
      prerequisiteModuleIds: ["LCE-ADVANCED-M1"],
      outcomes: [
        "Apply the '4-Layer Architecture' (Foundation, Core, Business, Orchestration) to a multi-app project.",
        "Analyze and fix 'Circular Dependencies' between visual modules.",
        "Implement 'Domain Isolation' to ensure separate business units don't overlap logic."
      ]
    },
    {
      id: "LCE-ADVANCED-M3",
      title: "Elite Performance & Bottleneck Hunting",
      description: "Science-based tuning for mass-scale apps.",
      sequenceNumber: 3,
      estimatedHours: 12,
      topics: ["LCE-ADVANCED-M3-T1", "LCE-ADVANCED-M3-T2"],
      prerequisiteModuleIds: ["LCE-ADVANCED-M2"],
      outcomes: [
        "Use 'Server Request Profiling' to identify long-running server actions.",
        "Implement 'Client-Side Data Caching' (Local Storage) to reduce server round-trips for reference data.",
        "Perform 'Query Tuning'—identifying missing indices that only appear under 1M+ row loads."
      ]
    },
    {
      id: "LCE-ADVANCED-M4",
      title: "Advanced UI: Shadow DOM & Visual Extensions",
      description: "Creating the widgets the platform didn't provide.",
      sequenceNumber: 4,
      estimatedHours: 15,
      topics: ["LCE-ADVANCED-M4-T1", "LCE-ADVANCED-M4-T2"],
      prerequisiteModuleIds: ["LCE-ADVANCED-M3"],
      outcomes: [
        "Develop 'Custom JS Components' that integrate with the platform's lifecycle events.",
        "Implement 'Shadow DOM' encapsulation to prevent theme leaks in custom widgets.",
        "Build 'Interactive Charts & Visualizations' using D3.js or Chart.js inside a low-code screen."
      ]
    },
    {
      id: "LCE-ADVANCED-M5",
      title: "Governance for the 1%",
      description: "Managing technical debt and elite team standards.",
      sequenceNumber: 5,
      estimatedHours: 8,
      topics: ["LCE-ADVANCED-M5-T1", "LCE-ADVANCED-M5-T2"],
      prerequisiteModuleIds: ["LCE-ADVANCED-M4"],
      outcomes: [
        "Conduct a 'Technical Debt Audit' using platform-native discovery tools.",
        "Institute 'Elite Code Review' standards for visual flows (Node naming, comment blocks).",
        "Implement 'Automated Documentation Generators' that turn visual metadata into a developer portal."
      ]
    }
  ],
  topics: [
    {
      id: "LCE-ADVANCED-M1-T1",
      moduleId: "LCE-ADVANCED-M1",
      sequenceNumber: 1,
      title: "Extending the Platform: C# & Java SDKs",
      estimatedMinutes: 200,
      what: "Code Extensions allow an LCE developer to write traditional code (C#, Java, or JS) and 'Wrap' it inside a visual action block. You use the platform's 'Extension SDK' to define the Inputs and Outputs. You then open Visual Studio or Eclipse, write your logic, and 'Publish' the extension back to the server. It then appears in the visual toolbox as a normal node.",
      why: "Visual modeling is powerful for 90% of business logic, but it's not and shouldn't be a replacement for specialized libraries. If you need to perform 'Advanced Cryptography,' 'Complex Zip File Manipulation,' or 'Niche Image Processing,' it is faster and safer to use a battle-tested C# library via an extension than to try to recreate it using visual flow-charts.",
      when: "Every time a requirement cannot be met by native visual widgets AND there is a high-quality external library available.",
      how: "1. Create a 'New Extension' in the IDE. 2. Define the Interface (Parameters). 3. Open the code project in Visual Studio. 4. Code the logic using the `ExtensionAction` template. 5. Map the outputs to the visual parameters.",
      ecosystem: "NuGet (C#), Maven (Java), Visual Studio, platform-specific Integration Studio.",
      realWorld: "A major bank used an OutSystems C# extension to integrate with a legacy 'Mainframe Cryptography' module. The bank's security policy required a very specific encryption algorithm that was only available as a DLL. By 'Wrapping' that DLL in a low-code extension, their visual developers could build secure banking screens in days, while still following the strict 30-year-old security standards of the core mainframe.",
      useCases: [
        "Building a custom 'PDF Merge' tool that combines 50 documents into one with a dynamic table of contents",
        "Implementing a 'Bluetooth Low Energy' (BLE) scanner for an industrial IoT dashboard",
        "Wrapping a 'Scientific Calculation' library that performs complex physics simulations for an engineering app"
      ],
      advantages: [
        "Limitless Power: If C# can do it, your low-code app can do it.",
        "Reusability: Write a complex logic once in code, and 10 visual developers can use it as a 'Black Box'.",
        "Performance: Specialized code can sometimes be optimized at the CPU level beyond what raw visual logic allows."
      ],
      disadvantages: [
        "Maintenance: If the C# library has a vulnerability, you must manually update and re-publish the extension."
      ],

      interviewTip: "If asked 'When do you write code in low-code?', answer: 'I follow the \"90/10 Rule.\" 90% of the app stays visual for maintainability and speed. I only write code (C#/JS) for the 10% where the platform has a functional gap—like complex data processing or highly specific library integrations. This keeps the technical debt manageable.'",
      resumeBullet: "Engineered high-performance C# and Java extensions to bridge functional gaps in enterprise low-code applications, enabling complex legacy system integrations and advanced data processing.",

      videos: [
        { type: "public", title: "OutSystems: Building C# Extensions", author: "Justin James", views: "10K views", duration: "18:25", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Advanced JavasScript in Low-Code", author: "Mendix Academy", views: "15K views", duration: "22:10", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Pluralsight", rating: 4.9, title: "C# Fundamentals for Enterprise Developers", instructor: "Scott Allen", enrolled: "500K+", duration: "20 hours", url: "https://www.pluralsight.com/courses/csharp-fundamentals-dev" }
      ],
      blogs: [
        { type: "Technical", title: "To Code or Not To Code?", publisher: "Forbes Technology Council", readTime: "25 min", url: "https://www.forbes.com/sites/forbestechcouncil/2021/04/12/the-future-of-low-code-it-is-all-about-extensibility/" }
      ],
      scenarios: [
        {
          id: "1.1", difficulty: "Expert", title: "The Legacy Encryption Crisis", category: "Extension Engineering", estimatedTime: "12 hours",
          scenarioDescription: "A government health agency needs an app to store patient records. They require 'AES-256 GCM' encryption before the data touches the database. The platform only supports 'AES-256 CBC' natively. The app is 'Illegal' until this is fixed.",
          problemAnalysis: "Native visual logic is not enough. The solution is 'External Cryptographic Extension'. We must find a FIPS-compliant C# library, wrap it in an extension, and expose a `EncryptData(Plaintext)` and `DecryptData(Ciphertext)` action to the visual developers.",
          architectureLayers: ["Secure Extension Layer", "Visual Encryption Bridge", "Database Storage Layer"],
          toolsAndTech: [{ name: "C# / .NET Security SDK", justification: "By using the official .NET security namespaces inside an extension, we guarantee that the encryption is mathematically sound and meets the government's rigorous FIPS standards." }],
          tradeOffs: ["A custom extension requires a C# developer to maintain, but it is the ONLY way to meet the project's compliance requirements."],
          nfrConsiderations: ["Compliance: 100% adherence to FIPS-140-2 encryption standards."],
          kpis: ["Achieve 0% failure rate in the external security audit of data-at-rest."],
          keyInsights: "Low-code doesn't mean no-code; it means 'Code where it matters most.'"
        }
      ],
      playgrounds: [
        {
          title: "The Extension Blueprint",
          description: "Visualizing the Code Bridge.",
          examples: [
            {
              language: "C# (Extension Code)",
              code: "[ExtensionAction]\npublic void Encrypt(string input, out string output) {\n  output = SecureLibrary.AES_256_GCM(input);\n}"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "feat/crypto-extension-fips",
        commitMessage: "feat: implemented custom FIPS-compliant encryption extension to meet government security standards",
        files: [{ name: "Extensions/Crypto/EncryptionActions.cs", type: "file", content: "csharp-logic" }],
        activeFileSnippet: { filename: "Crypto.cs", code: "using System.Security.Cryptography; /* Custom Logic */" }
      },
      community: {
        aiSummary: "The 'Extension' is your get-out-of-jail-free card. If the visual tool can't do it, the code can.",
        solutions: []
      }
    },
    {
      id: "LCE-ADVANCED-M2-T1",
      moduleId: "LCE-ADVANCED-M2",
      sequenceNumber: 1,
      title: "4-Layer Architecture (4LA): Scale Without Chaos",
      estimatedMinutes: 240,
      what: "The 4-Layer Architecture (4LA) is a system for organizing thousands of low-code modules into a clean, maintainable hierarchy. 1. FOUNDATION (Reusable UI/CSS/Integrations). 2. CORE (Entities and Business Rules). 3. BUSINESS (Logic that spans entities). 4. ORCHESTRATION (The User Interface screens). The golden rule is 'Upward references only'—a Foundation module should NEVER know that a Screen exists.",
      why: "In a 'Small' app, architecture doesn't matter. In an 'Enterprise' app with 1,000 entities and 50 apps, bad architecture leads to 'Spaghetti Code'. If your modules are 'Tightly Coupled,' changing a color in App A might break the Login screen of App B. 4LA creates 'Clean Boundaries' so developers can work on one area without touching another.",
      when: "Every time an application contains more than 10 modules or is worked on by more than 2 people.",
      how: "1. Audit your current module list. 2. Categorize them into the 4 layers. 3. Use the 'Discovery' tool to find 'Side-references' or 'Circular references'. 4. Move logic 'Down' into the Core layer and UI 'Up' into the Orchestration layer.",
      ecosystem: "4-Layer Architecture (4LA), Domain-Driven Design (DDD), Clean Architecture.",
      realWorld: "A global logistics firm had a 'Monolithic' low-code app that took 10 minutes to compile. They refactored it into 40 specialized modules following the 4LA standard. By decoupling the 'Shipment Tracking Core' from the 'Customer Portal UI,' they reduced compile times to 30 seconds and allowed two different teams (Portal team vs Engine team) to deploy independently. Result: Development velocity increased by 300%.",
      useCases: [
        "Restructuring a 'Master App' that has become too slow to maintain",
        "Designing a 'Shared Service' (e.g. Finance API) that will be used by 5 different business units",
        "Implementing a 'Multi-Tenant Foundation' that supports different branding for different clients"
      ],
      advantages: [
        "Unbeatable Maintenance: Change one layer without breaking the others.",
        "Team Autonomy: Different squads can own different layers of the architecture.",
        "Performance: Faster compiles and smaller deployment packages because the 'Dependency Tree' is lean."
      ],
      disadvantages: [
        "Rigidity: Requires discipline; you can't just 'hack' a quick link between two modules if it violates the layer rule."
      ],

      interviewTip: "If asked 'How do you prevent circular dependencies?', answer: 'I follow the 4-Layer Architecture standard. I ensure dependencies only flow DOWN. If two Core modules need to talk to each other, I either merge them or move the shared logic into a Foundation module. I use \"Service Actions\" for cross-domain calls to decouple the modules physically.'",
      resumeBullet: "Implemented a comprehensive 4-Layer Architecture (4LA) across a multi-application low-code environment, reducing module coupling and improving build times by 70%.",

      videos: [
        { type: "public", title: "Clean Architecture in 10 Minutes", author: "Coderized", views: "1M views", duration: "10:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "OutSystems: The Discovery Tool", author: "OutSystems Community", views: "12K views", duration: "14:45", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Coursera", rating: 4.8, title: "Software Architecture for Big Data", instructor: "Arizona State University", enrolled: "75K+", duration: "15 hours", url: "https://www.coursera.org/learn/software-architecture" }
      ],
      blogs: [
        { type: "Core", title: "The 4-Layer Architectural Standard", publisher: "Professional Low-Code Hub", readTime: "30 min", url: "https://www.outsystems.com/learn/courses/123/architecture-patterns/" }
      ],
      scenarios: [
        {
          id: "2.1", difficulty: "Expert", title: "The Compile Lock", category: "Architecture Refactoring", estimatedTime: "8 hours",
          scenarioDescription: "A developer tries to publish a change to 'Module A' and gets an error: 'Circular Dependency detected between Module A, B, and C.' They are in a 'Deadlock'—they can't update anything because everything depends on each other.",
          problemAnalysis: "This is a violation of the 'Clean Layers' rule. Module A (Core) is probably calling a screen in Module C (Orchestration). The solution is 'Dependency Injection' or 'Interface Decoupling'. We must move the shared 'Call' into a 'Service Action' or move the logic into a lower 'Foundation' layer where A, B, and C can all see it without seeing each other.",
          architectureLayers: ["Dependency Mapping", "Layer Correction", "Action Decoupling"],
          toolsAndTech: [{ name: "Discovery Map Tool", justification: "By using a visual dependency map, the developer can see the 'Red Lines' (Violations) instantly and pinpoint the exact logic node that is crossing a layer boundary. This turns a complex architecture problem into a 5-minute fix." }],
          tradeOffs: ["Refactoring requires moving logic, which is tedious, but it is the ONLY way to make the app scale to enterprise sizes."],
          nfrConsiderations: ["Scalability: The app must support 100+ modules without circular locks."],
          kpis: ["Achieve 0% 'Circular Dependency' count in the weekly architecture audit."],
          keyInsights: "Architecture is the art of saying 'No' to a quick, dirty link."
        }
      ],
      playgrounds: [
        {
          title: "The Layering simulator",
          description: "Visualizing the Dependency Flow.",
          examples: [
            {
              language: "Module Map",
              code: "OK: [UI] -> [Logic] -> [Entities] -> [Integrations]\nBAD: [Integration] -> [UI]"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "refactor/architecture-4la",
        commitMessage: "refactor: migrated core business logic to Foundation layer to resolve circular dependencies between portal modules",
        files: [{ name: "Architecture/DependencyMap.oml", type: "file", content: "architecture-graph" }],
        activeFileSnippet: { filename: "Layers.md", code: "Layer: Foundation; Modules: HTTP_Lib, UI_Themes, Crypto_Ext;" }
      },
      community: {
        aiSummary: "The 'Discovery' tool is your best friend. Use it every Friday to ensure your architecture hasn't 'drifted' into chaos.",
        solutions: []
      }
    }
  ],
  videoCount: 620,
  articleCount: 410,
  problemCount: 260,
  capstoneProject: {
    title: "THE GLOBAL ECOSYSTEM ARCHITECT",
    description: "In this final mastery project, you will play the role of 'Chief Architect' for a global financial institution. Your task is to design the 'Foundation Tier' of a multi-app ecosystem. 1. You will build a 'Core Security Extension' (in C#) that handles encryption for the whole firm. 2. You will architect a 'Multi-Tenant Master Data' hub following the 4-Layer Architecture (4LA) standard, ensuring 100% decoupling from the UI. 3. You will implement 'Performance Watchdogs'—logic that logs an alarm if any API takes more than 500ms. 4. You will build a 'Developer Starter Kit' (Documentation + Templates) so other teams can build apps on your platform without breaking the rules. Finally, you will perform a 'Refactoring Audit' on a mock 'Spaghetti App,' rewriting it into a clean, layered masterpiece. This project is your final proof that you are ready to lead enterprise-grade low-code engineering teams.",
    estimatedDays: 21,
    skillsFocused: [
      "Advanced C#/Java Extension Engineering",
      "Enterprise 4-Layer Architecture (4LA) Mastery",
      "Ecosystem-wide Dependency & Version Management",
      "High-Scale Performance Tuning & Bottleneck Auditing",
      "Technical Governance & Developer Experience (DX)"
    ],
    steps: [
      {
        title: "Phase 1: The Core Extension Tier",
        description: "Develop the C# security extension and publish it as a reusable corporate asset."
      },
      {
        title: "Phase 2: The Foundation Architecture",
        description: "Build the normalized, multi-tenant Core layer and implement the 4LA dependency rules."
      },
      {
        title: "Phase 3: The Performance Sentry",
        description: "Configure the ecosystem-wide monitoring and asynchronous logging patterns for all critical actions."
      },
      {
        title: "Phase 4: The Refactoring Challenge",
        description: "Audit the legacy spaghetti module and successfully migrate it into your new clean architecture."
      }
    ]
  },
  totalEstimatedHours: 120,
  estimatedCompletionDays: 30,
  moduleCount: 6,
  createdAt: "2026-02-28T00:00:00Z",
  updatedAt: "2026-02-28T00:00:00Z",
  version: "1.0",
  status: "published"
};