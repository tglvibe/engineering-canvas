import { CourseEnhanced } from './types';

export const lceCapstone: CourseEnhanced = {
  id: "LCE-CAPSTONE",
  titleKey: "courses.lceCapstone",
  descKey: "courses.lceCapstoneDesc",
  icon: "🏆",
  duration: "6 weeks",
  languages: ["Visual Logic", "C# / JS (Extensions)", "SQL", "BPMN", "CI/CD YAML"],
  category: "low-code",
  programIds: ["LCE-APP", "LCE-BPM", "LCE-ENTERPRISE"],
  trackId: "lce",
  level: "advanced",
  prerequisites: ["ALL-LCE-COURSES"],
  targetAudience: "Aspiring Low-Code Architects and Senior Developers who are ready to synthesize their knowledge of data, logic, UI, security, and AI into a single, production-ready enterprise solution.",
  learningOutcomes: [
    "Synthesize all LCE core disciplines (Data, Logic, UI, Security, Integration, AI) into a singular, high-performance enterprise ecosystem.",
    "Architect a multi-app solution that follows the 4-Layer Architecture (4LA) standard, ensuring modularity and long-term maintainability.",
    "Draft and execute a 'Custom Extension' strategy to solve complex technical requirements using C# or JavaScript.",
    "Develop a full 'DevOps & Governance' plan, including automated quality gates, multi-environment deployment, and monitoring.",
    "Deliver a 'C-Suite Ready' presentation and technical demo that proves the business value and engineering rigor of the final solution."
  ],
  modules: [
    {
      id: "LCE-CAP-M1",
      title: "Project Ideation & Architectural Blueprinting",
      description: "Mapping the enterprise solution.",
      sequenceNumber: 1,
      estimatedHours: 20,
      topics: ["LCE-CAP-M1-T1"],
      prerequisiteModuleIds: [],
      outcomes: [
        "Define the 'Business Problem' and 'Technical Scope' for a multi-stakeholder enterprise app.",
        "Create a 'Visual Entity Map' (ERD) adhering to 3rd Normal Form guidelines.",
        "Design the 'Module Map' following the 4-Layer Architecture (4LA) standard."
      ]
    },
    {
      id: "LCE-CAP-M2",
      title: "Core Development Phase (Sprint 1-2)",
      description: "Building the engine of the application.",
      sequenceNumber: 2,
      estimatedHours: 40,
      topics: ["LCE-CAP-M2-T1"],
      prerequisiteModuleIds: ["LCE-CAP-M1"],
      outcomes: [
        "Implement the secure 'Identity & RBAC' model using OIDC/SSO.",
        "Construct the 'Data Persistence Layer' with optimized indexing for multi-million row loads.",
        "Build the 'API Integration' layer with OAuth2 security and automated token refresh."
      ]
    },
    {
      id: "LCE-CAP-M3",
      title: "Advanced Features & AI Sprint (Sprint 3)",
      description: "Adding intelligence and custom extensions.",
      sequenceNumber: 3,
      estimatedHours: 30,
      topics: ["LCE-CAP-M3-T1"],
      prerequisiteModuleIds: ["LCE-CAP-M2"],
      outcomes: [
        "Develop a 'C# / Java Extension' to handle a complex library-specific requirement.",
        "Integrate a 'RAG-based AI advisor' that uses company data to assist users.",
        "Implement a 'Long-running BPM Workflow' with human-in-the-loop approvals."
      ]
    },
    {
      id: "LCE-CAP-M4",
      title: "Deployment, Hardening & Final QA (Sprint 4)",
      description: "Preparing for launch.",
      sequenceNumber: 4,
      estimatedHours: 30,
      topics: ["LCE-CAP-M4-T1"],
      prerequisiteModuleIds: ["LCE-CAP-M3"],
      outcomes: [
        "Configure the 'CI/CD Pipeline' and automated unit/UI tests.",
        "Perform a 'Performance Profiling Audit' and resolve all sub-optimal logic nodes.",
        "Execute a 'UAT (User Acceptance Testing)' plan and resolve feedback."
      ]
    }
  ],
  topics: [
    {
      id: "LCE-CAP-M1-T1",
      moduleId: "LCE-CAP-M1",
      sequenceNumber: 1,
      title: "Designing the High-Scale Architecture",
      estimatedMinutes: 600,
      what: "Architectural Blueprinting is the phase where you decide the 'Shape' of your entire ecosystem. You will select from three complex scenarios: 1. A Global Supply Chain Orchestrator. 2. A Multi-region Patient Care Portal. 3. A Fintech Fraud Detection & Approval Engine. You must map out every module following the 4LA standard: Foundations, Core, Business, and Orchestration.",
      why: "In a Capstone project, 'Starting with the Screen' is a path to failure. Starting with the 'Architecture' ensures that your data is secure, your logic is reusable, and your app doesn't become 'Spaghetti' as it grows to its final 10,000+ line scale. This is the stage where you act like a 'Senior Architect', not just a builder.",
      when: "The very first week of the project.",
      how: "1. Select your scenario. 2. Use a diagramming tool (Lucidchart/Mural) to map the 'Module Dependencies'. 3. Define the 'Data Model' (ERD) with primary and foreign keys. 4. Identify where 'Custom Extensions' (Code) will be required.",
      ecosystem: "4-Layer Architecture (4LA), Domain Driven Design (DDD), BPMN 2.0, ERD standards.",
      realWorld: "A Fortune 500 energy company used this blueprinting approach to build a 'Global Asset Tracker' in OutSystems. By spending 2 weeks on architecture first, they were able to build a system that supported 50,000 sensors and 10,000 mobile users without ever having to refactor the core data model. The architecture WAS the documentation.",
      useCases: [
        "Designing the 'Service Oriented Architecture' for a banking ecosystem with 5 distinct business units",
        "Mapping the 'Data Sovereignty' rules for a healthcare app spanning Europe and North America",
        "Planning the 'Asynchronous Worker' patterns for a high-volume logistics processor"
      ],
      advantages: [
        "Scalability: The app is born ready for 1,000x growth.",
        "Maintainability: Any developer can look at the map and know exactly where a bug lives.",
        "Governance: Ensures that 'Sensitive Data' (PII) is isolated in the Foundations/Core layers."
      ],
      disadvantages: [
        "Time Intensive: Requires deep thinking before any 'Visual Code' is written."
      ],

      interviewTip: "When presenting your capstone, ALWAYS start with the Architecture. Explain HOW your module layers are decoupled. Say: 'I chose 4-Layer Architecture to ensure that my Core Business Logic was completely independent of the Mobile UI, allowing us to swap the UI without touching the database rules.' This shows Senior-level thinking.",
      resumeBullet: "Architected and delivered a multi-platform enterprise low-code solution following 4LA standards, integrating RAG-based AI and custom C# extensions for high-scale data processing.",

      videos: [
        { type: "public", title: "Scale Your Low-Code Architecture", author: "OutSystems World", views: "25K views", duration: "45:00", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Professional BPM Patterns", author: "Mendix Academy", views: "15K views", duration: "32:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Cousera", rating: 4.9, title: "Mastering Enterprise Architecture", instructor: "University of London", enrolled: "100K+", duration: "20 hours", url: "https://www.coursera.org/learn/enterprise-architecture" }
      ],
      blogs: [
        { type: "Technical", title: "The Architect's Guide to Low-Code", publisher: "Gartner", readTime: "40 min", url: "https://www.gartner.com/en/documents/3981817" }
      ],
      scenarios: [
        {
          id: "1.1", difficulty: "Expert", title: "The Global Logistics Spine", category: "Full-Stack Architecture", estimatedTime: "240 hours",
          scenarioDescription: "A worldwide shipping firm needs a 'Control Tower' for 5,000 trucks. They need: 1. Real-time GPS tracking (Mobile Offline). 2. AI-powered 'Delay Prediction' (Generative AI). 3. Automated Finance Invoicing (BPM logic). 4. A Guest Portal for customers (Security/SSO).",
          problemAnalysis: "This is a 'Massive Ecosystem' challenge. One app cannot do this. You must build a 'Core Domain' (Trucks, Orders, Regions) and then build three 'Consumer Apps' (Driver Mobile, Admin Desk, Customer Portal) that all point to that Core. You must implement 'Service Actions' for loose coupling.",
          architectureLayers: ["Foundation Tier (SSO, GPS SDK)", "Core Domain Tier (Shipments, Fleet)", "Business Logic Tier (Pricing, Prediction)", "Orchestration Tier (Web/Mobile Apps)"],
          toolsAndTech: [{ name: "4-Layer Architecture (4LA)", justification: "By separating the 'Fleet Data' from the 'UI Screens', we ensure that the global finance department can change pricing rules without breaking the driver's GPS map. This is essential for 24/7 global operations." }],
          tradeOffs: ["Setting up 10+ modules is slower than 1, but it is the ONLY way to prevent a system crash during a major update."],
          nfrConsiderations: ["Availability: Zero-Downtime deployment for the Core Fleet engine."],
          kpis: ["Achieve < 30s compile time for individual UI modules despite massive overall scale."],
          keyInsights: "Think in 'Modules', not just 'Screens'."
        }
      ],
      playgrounds: [
        {
          title: "The Architecture Sandbox",
          description: "Visualizing the Ecosystem.",
          examples: [
            {
              language: "Module Map",
              code: "APPS: [Portal_Web], [Driver_Mobile]\nSERVICES: [Order_BPM], [Prediction_AI]\nCORE: [Shipment_Entity], [Truck_Entity]\nBASE: [Auth_SSO], [GoogleMaps_API]"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "capstone/initial-blueprint",
        commitMessage: "arch: established 4-layer architecture module map for global logistics capstone project",
        files: [{ name: "Arch/SystemMap.svg", type: "file", content: "visual-architecture" }],
        activeFileSnippet: { filename: "Architecture.md", code: "Core: Fleet_MS, Finance_MS; App: Trucker_App, Client_App;" }
      },
      community: {
        aiSummary: "The Capstone is your masterpiece. Build it like a cathedral—strong foundations first, decoration last.",
        solutions: []
      }
    }
  ],
  videoCount: 120,
  articleCount: 80,
  problemCount: 50,
  capstoneProject: {
    title: "THE GLOBAL ENTERPRISE SOLUTIONS SUITE",
    description: "Your capstone project is the definitive proof of your Low-Code Engineering mastery. You will choose one of three 'Elite Industry Scenarios' and build a multi-app, multi-platform solution from scratch. You will: 1. Design a normalized data model for 1M+ records. 2. Implement 'Zero-Trust' SSO security. 3. Build a custom C# or JS extension to solve a 'Hardware-Critical' or 'Cryptographic' gap. 4. Integrate a 'RAG-based AI advisor' to handle unstructured user input. 5. Deploy the entire suite through a gated CI/CD pipeline with 100% test pass rates. You will present your final architecture, code, and live demo to a panel of 'Industry Mentors'. This is not just an app; it is a professional-grade software ecosystem ready for production.",
    estimatedDays: 42,
    skillsFocused: [
      "Enterprise Solution Architecture (4LA)",
      "High-Performance Data Modeling & Scaling",
      "Full-Stack Visual & Textual Engineering",
      "AI & Cognitive Service Orchestration",
      "Professional DevOps & Lifecycle Governance"
    ],
    steps: [
      {
        title: "Week 1: Architecture & Data Mapping",
        description: "Draft the 4LA module map and the 3NF relational model for the entire ecosystem."
      },
      {
        title: "Week 2-3: The Core Engine (Security & Logic)",
        description: "Build the secure backend, the identity provider handshake, and the core business logic domains."
      },
      {
        title: "Week 4: The Intelligence & Extension Layer",
        description: "Integrate the Gen-AI advisor and develop your custom C# or JS extensions for niche functionality."
      },
      {
        title: "Week 5: The Multi-Channel UI (Web & Mobile)",
        description: "Design the high-fidelity web and native mobile interfaces with full offline synchronization support."
      },
      {
        title: "Week 6: Hardening, DevOps & Demo",
        description: "Execute the final QA audit, configure the CI/CD pipeline, and prepare the technical presentation."
      }
    ]
  },
  totalEstimatedHours: 120,
  estimatedCompletionDays: 42,
  moduleCount: 4,
  createdAt: "2026-02-28T00:00:00Z",
  updatedAt: "2026-02-28T00:00:00Z",
  version: "1.0",
  status: "published"
};