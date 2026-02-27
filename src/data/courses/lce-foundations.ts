import { CourseEnhanced } from './types';

export const lceFoundations: CourseEnhanced = {
  id: "LCE-FOUND",
  titleKey: "courses.lceFoundations",
  descKey: "courses.lceFoundationsDesc",
  icon: "🏗️",
  duration: "4 weeks",
  languages: ["Visual Flow", "BPMN 2.0", "OML (OutSystems Markup)", "Low-Code DSL", "YAML"],
  category: "low-code",
  programIds: ["LCE-APP", "LCE-BPM", "LCE-ENTERPRISE", "LCE-INTEGRATE", "LCE-MOBILE", "LCE-AI"],
  trackId: "lce",
  level: "beginner",
  prerequisites: [],
  targetAudience: "Engineering students, IT professionals, and aspiring software architects who want to master the science of building enterprise-grade applications using professional low-code platforms (OutSystems, Mendix, Appian) while maintaining traditional software engineering standards.",
  learningOutcomes: [
    "Critically evaluate the 'Build vs. Buy' dilemma and identify specific scenarios where Low-Code outperforms traditional coding in the enterprise.",
    "Master the 'Full-Stack Visual Modeler' concept, bridging UI design, business logic, and relational database schemas.",
    "Understand the 'Under-the-Hood' architecture of low-code platforms, including code generation, runtime environments, and metadata management.",
    "Apply 'Agile Application Lifecycle Management' (ALM) principles within a low-code ecosystem, including versioning, deployment, and rollback.",
    "Design 'Hybrid Architectures' where low-code modules seamlessly integrate with high-code microservices and legacy systems."
  ],
  modules: [
    {
      id: "LCE-FOUND-M1",
      title: "The Low-Code Revolution: Professional vs. Simple",
      description: "Differentiating enterprise low-code from basic website builders.",
      sequenceNumber: 1,
      estimatedHours: 10,
      topics: ["LCE-FOUND-M1-T1", "LCE-FOUND-M1-T2"],
      prerequisiteModuleIds: [],
      outcomes: [
        "Explain the 'Abstraction Layer' of low-code and how it maps to traditional code units.",
        "Identify the 'Vendor Lock-in' risks and mitigation strategies for major low-code platforms.",
        "Compare the 'Citizen Developer' movement with 'Professional Low-Code' engineering."
      ]
    },
    {
      id: "LCE-FOUND-M2",
      title: "Archetypes of Visual Engineering",
      description: "Data, Logic, and UI as visual primitives.",
      sequenceNumber: 2,
      estimatedHours: 12,
      topics: ["LCE-FOUND-M2-T1", "LCE-FOUND-M2-T2"],
      prerequisiteModuleIds: ["LCE-FOUND-M1"],
      outcomes: [
        "Create a 'Visual Data Model' with relational integrity directly in a low-code IDE.",
        "Implement 'Client-Side' vs. 'Server-Side' logic patterns using visual flows.",
        "Understand 'State Management' in a visual environment."
      ]
    },
    {
      id: "LCE-FOUND-M3",
      title: "The Platform Engine: Code Gen & Runtimes",
      description: "How a visual click becomes a running server component.",
      sequenceNumber: 3,
      estimatedHours: 15,
      topics: ["LCE-FOUND-M3-T1", "LCE-FOUND-M3-T2"],
      prerequisiteModuleIds: ["LCE-FOUND-M2"],
      outcomes: [
        "Trace the path from an 'OML' (OutSystems) or 'Mendix Model' to a .NET/Java runtime.",
        "Explain 'Metadata-Driven' vs. 'Code-Generated' execution models.",
        "Identify the performance bottlenecks inherent in high-abstraction runtimes."
      ]
    },
    {
      id: "LCE-FOUND-M4",
      title: "Governance & Scaling: The Enterprise View",
      description: "Managing 1,000 apps without 1,000 bugs.",
      sequenceNumber: 4,
      estimatedHours: 10,
      topics: ["LCE-FOUND-M4-T1", "LCE-FOUND-M4-T2"],
      prerequisiteModuleIds: ["LCE-FOUND-M3"],
      outcomes: [
        "Implement 'Environment Separation' (Dev/Stage/Prod) in a cloud-native low-code platform.",
        "Analyze the 'Shadow IT' risk and how professional governance mitigates it.",
        "Schedule 'Batch Processes' and 'Asynchronous Jobs' for high-load enterprise scenarios."
      ]
    },
    {
      id: "LCE-FOUND-M5",
      title: "The Future: AI-Augmented Visual Dev",
      description: "Generative AI as a co-pilot for the low-code architect.",
      sequenceNumber: 5,
      estimatedHours: 8,
      topics: ["LCE-FOUND-M5-T1", "LCE-FOUND-M5-T2"],
      prerequisiteModuleIds: ["LCE-FOUND-M4"],
      outcomes: [
        "Use 'Natural Language to App' features to accelerate initial prototyping.",
        "Critically review AI-generated visual logic for security anti-patterns.",
        "Explain the 'Agentic' future of low-code where apps self-heal and self-optimize."
      ]
    }
  ],
  topics: [
    {
      id: "LCE-FOUND-M1-T1",
      moduleId: "LCE-FOUND-M1",
      sequenceNumber: 1,
      title: "Foundations of Abstraction: Low-Code vs. Traditional",
      estimatedMinutes: 150,
      what: "Low-Code Engineering (LCE) is the discipline of building software at a higher level of abstraction than traditional code (C#, Java, Python). It replaces hundreds of lines of boilerplate code with high-level visual models for data structures, business logic, and user interfaces. Unlike 'No-Code,' professional 'Low-Code' platforms are designed to be extended with traditional code when specialized performance or niche logic is required.",
      why: "The world has a 'Software Crisis'—the demand for custom applications far outstrips the supply of senior software engineers. LCE allows organizations to ship production-grade software 3x to 10x faster by automating the 'Boilerplate' (Database schema setup, Auth, API routing) so engineers can focus on 'Business Value.'",
      when: "Select Low-Code for 80% of enterprise internal tools, B2E/B2B portals, and rapid prototyping of complex SaaS ideas. Use traditional High-Code for low-latency gaming engines, high-frequency trading platforms, or deep OS-level kernel modules.",
      how: "1. Select an Enterprise Platform (OutSystems, Mendix, or Microsoft PowerApps). 2. Use the 'Visual Modeler' to define the database. 3. Drag-and-drop 'Logic Units' to create workflows. 4. One-click publish to a managed cloud environment.",
      ecosystem: "Gartner Magic Quadrant Leaders: OutSystems (High performance), Mendix (Enterprise collaboration), ServiceNow (ITOM/ITSM focus), PowerApps (Microsoft integration).",
      realWorld: "Western Union used OutSystems to migrate their legacy retail portal in 11 months—a task estimated at 3 years with traditional coding. They achieved a 50% reduction in maintenance costs while maintaining the same security standards as their custom C++ banking core. This is 'Hybrid Engineering' at its finest.",
      useCases: [
        "Migrating an 20-year old Excel-based credit approval system to a mobile-responsive web app",
        "Building a multi-national logistics tracking portal with 15 different API integrations",
        "Developing a custom HR portal with specialized employee onboarding workflows"
      ],
      advantages: [
        "Agility: Change the database schema in 5 seconds without manual SQL migrations.",
        "Safety: Built-in 'Logic Checkers' prevent null-pointer exceptions and infinite loops before they run.",
        "Integration: Pre-built connectors for SAP, Salesforce, and SQL Server out-of-the-box."
      ],
      disadvantages: [
        "Complexity Ceiling: Highly specialized algorithms may require writing custom C#/Java extensions.",
        "Pricing: Enterprise low-code platforms have high licensing costs compared to open-source frameworks."
      ],

      interviewTip: "If asked 'Is Low-Code just for non-developers?', answer: 'No. Professional Low-Code is for engineers who want to automate the mundane and focus on the complex. It is about applying traditional engineering principles—database normalization, security, and ALM—at a higher speed.'",
      resumeBullet: "Architected and delivered a multi-tenant enterprise portal using OutSystems, reducing the development lifecycle by 60% while maintaining 99.9% system availability.",

      videos: [
        { type: "public", title: "Low-Code vs High-Code: The Truth", author: "Capers Jones", views: "250K views", duration: "18:25", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Enterprise Low-Code Platforms Compared", author: "Gartner Research", views: "100K views", duration: "22:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "OutSystems University", rating: 4.9, title: "Reactive Web Developer", instructor: "OutSystems Team", enrolled: "500K+", duration: "24 hours", url: "https://www.outsystems.com/training/" }
      ],
      blogs: [
        { type: "Core", title: "The Myth of No-Code", publisher: "ThoughtWorks Anthology", readTime: "25 min", url: "https://www.thoughtworks.com/radar/techniques/low-code-platforms-for-professional-developers" }
      ],
      scenarios: [
        {
          id: "1.1", difficulty: "Medium", title: "The Scaling Wall", category: "Architecture", estimatedTime: "4 hours",
          scenarioDescription: "A startup built their version 1 on a simple 'No-Code' builder. They now have 10,000 active users and the database queries take 15 seconds to load. The platform doesn't allow indexing or SQL optimization. They need to move to an 'Engineering-Grade' Low-Code environment like Mendix or OutSystems.",
          problemAnalysis: "Simple no-code platforms often hide the database entirely, preventing query optimization. Enterprise low-code platforms allow for 'Relational Mapping' and 'Index Configuration.' The solution involves migrating the 'Flat Data' to a 'Relational Model' and implementing 'Server-Side Caching.'",
          architectureLayers: ["Data Layer (SQL/Indexing)", "Logic Layer (Caching)", "UI Layer (Lazy Loading)"],
          toolsAndTech: [{ name: "OutSystems Database Modeler", justification: "Allows for complex many-to-many relationships and custom DB indexes, which are missing in basic no-code tools." }],
          tradeOffs: ["Increased platform cost but 10x better performance and 100x better scalability."],
          nfrConsiderations: ["Performance: Queries must return in < 200ms.", "Scalability: Must support 1M records."],
          kpis: ["Reduce page-load from 15s to under 1.5s."],
          keyInsights: "Architecture matters even when you aren't typing the SQL yourself."
        }
      ],
      playgrounds: [
        {
          title: "The Logic Simulator",
          description: "Visualizing a Conditional Workflow.",
          examples: [
            {
              language: "Visual Logic",
              code: "IF (User.TotalOrders > 50)\n  THEN APPLY Discount(20%)\n  ELSE SEND 'Loyalty Program' Email\nEND"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "setup/enterprise-architecture",
        commitMessage: "chore: initialized the enterprise low-code project structure with multi-environment support",
        files: [{ name: "Core/AppManifest.oml", type: "file", content: "binary-metadata" }],
        activeFileSnippet: { filename: "ProjectPlan.md", code: "Phase 1: Multi-tier Data Modeling; Phase 2: Secure API Gateway;" }
      },
      community: {
        aiSummary: "Low-code isn't 'No Code'. It's 'Faster Code'. Professional engineers use it to build robust systems at speed.",
        solutions: []
      }
    },
    {
      id: "LCE-FOUND-M2-T1",
      moduleId: "LCE-FOUND-M2",
      sequenceNumber: 1,
      title: "Visual Data Modeling: Relationships & Normalization",
      estimatedMinutes: 200,
      what: "Visual Data Modeling is the heart of LCE. In a traditional IDE, you'd write `CREATE TABLE` scripts. In a professional low-code modeler, you create 'Entities' (Tables), 'Attributes' (Columns), and 'Static Entities' (Enums) visually. Relationships (1-to-1, 1-to-Many, Many-to-Many) are drawn as links, and the platform automatically handles the Foreign Key constraints and JOIN logic.",
      why: "If your data model is 'Flat' or 'Redundant,' your app will be slow and buggy, regardless of the platform. Visual modeling allows architects to 'See' the data landscape, making it easier to spot poorly designed relationships before they are implemented. It brings the power of a Database Administrator (DBA) to the Application Developer.",
      when: "Before writing any UI or Business Logic.",
      how: "1. Create an 'Order' Entity. 2. Create a 'Customer' Entity. 3. Drag a line from 'Order' to 'Customer' to create a Many-to-One relationship (The foreign key `CustomerId`). 4. Set the 'Delete Rule' (Protect, Delete, or Ignore).",
      ecosystem: "ERD Diagrams (Entity Relationship Diagrams), Database Normalization (1NF, 2NF, 3NF), Referential Integrity.",
      realWorld: "A global bank used Mendix to rebuild their 'Loan Approval' database. They replaced 50 disjointed spreadsheets with a single 'Normalized' relational model. This allowed them to run real-time 'Risk Exposure' reports across 5 countries instantly—a task that previously took a 10-person team 2 weeks of manual data merging.",
      useCases: [
        "Designing the relational schema for a multi-vendor E-commerce platform",
        "Modeling the hierarchical data of a corporate organizational chart",
        "Architecting a transactional ledger for a fintech wallet"
      ],
      advantages: [
        "Clarity: Visual layout of tables makes complex joins easy to understand.",
        "Integrity: The platform prevents 'Broken Links' by enforcing referential rules (Foreign Keys).",
        "Ease of Update: Renaming an attribute in the modeler automatically updates every logic block that uses it."
      ],
      disadvantages: [
        "Automatic Migrations: Sometimes a platform's automatic SQL script might not be as efficient as a hand-tuned one for very large (Petabyte) datasets."
      ],

      interviewTip: "If asked 'What is the most common mistake in visual modeling?', answer: 'Creating \"Flat Tables\" with redundant data instead of properly normalizing. I always aim for 3rd Normal Form (3NF) to ensure data integrity and query performance, even in a low-code environment.'",
      resumeBullet: "Designed a high-throughput relational data model in OutSystems, managing 15+ complex entities with strict referential integrity for a mission-critical healthcare app.",

      videos: [
        { type: "public", title: "Database Normalization for No-Coders", author: "DB Secrets", views: "80K views", duration: "12:45", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Mendix Data Modeling 101", author: "Mendix Academy", views: "40K views", duration: "18:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Pluralsight", rating: 4.8, title: "Database Modeling Fundamentals", instructor: "David Jarvis", enrolled: "50K+", duration: "4 hours", url: "https://www.pluralsight.com/courses/database-modeling-fundamentals" }
      ],
      blogs: [
        { type: "Technical", title: "Don't Forget the DB in Low-Code", publisher: "The New Stack", readTime: "15 min", url: "https://thenewstack.io/low-code-needs-database-normalization/" }
      ],
      scenarios: [
        {
          id: "2.1", difficulty: "Hard", title: "The Junction Dilemma", category: "Data Architecture", estimatedTime: "6 hours",
          scenarioDescription: "A university wants a portal where one 'Student' can enroll in many 'Courses,' and one 'Course' can have many 'Students.' A beginner tried to add a list of StudentIDs directly to the Course table. This is a Many-to-Many disaster waiting to happen.",
          problemAnalysis: "Storing a list in a single field is a violation of 1st Normal Form (1NF). It makes searching by student impossible. The solution is to create a 'Junction Table' called `Enrollment` that contains a `StudentId` and a `CourseId`.",
          architectureLayers: ["Entity Relationship Layer", "Join Logic", "Search Optimization"],
          toolsAndTech: [{ name: "Many-to-Many Connector", justification: "Professional low-code builders allow the creation of junction tables to resolve N:M relationships, ensuring data remains queryable and normalized." }],
          tradeOffs: ["Adding an extra table increases complexity slightly but is mandatory for relational data health."],
          nfrConsiderations: ["Flexibility: Must support adding new courses without modifying the Student schema."],
          kpis: ["Achieve 100% 1NF compliance."],
          keyInsights: "If you have a many-to-many relationship, you need a 'Middle' entity."
        }
      ],
      playgrounds: [
        {
          title: "The ERD Constructor",
          description: "Visualizing Table Connections.",
          examples: [
            {
              language: "JSON (Metadata)",
              code: "{\n  \"Entity\": \"Enrollment\",\n  \"Attribute1\": { \"name\": \"StudentId\", \"type\": \"User Identifier\" },\n  \"Attribute2\": { \"name\": \"CourseId\", \"type\": \"Course Identifier\" }\n}"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "feature/junction-table-enrollment",
        commitMessage: "feat: implemented junction table for student course enrollment to support N:M relationship",
        files: [{ name: "Database/Enrollment.oml", type: "file", content: "relational-metadata" }],
        activeFileSnippet: { filename: "Database.md", code: "Table: Enrollment; Columns: Student_FK, Course_FK; Unique: Yes;" }
      },
      community: {
        aiSummary: "Visual modeling is the 'Blueprint' of your app. If the blueprint is wrong, the building will fall.",
        solutions: []
      }
    }
  ],
  videoCount: 450,
  articleCount: 280,
  problemCount: 190,
  capstoneProject: {
    title: "The Multi-Tenant Enterprise Service Engine",
    description: "In this final project for the Foundations course, you will architect the 'Core' of a global service-management app (think a mini-ServiceNow). You will design a highly normalized relational database that supports multiple 'Companies' (Multi-tenancy), 'Departments', and 'Service Tickets'. You will implement complex visual logic that routes a ticket specifically to the 'Lead Engineer' of a department if the priority is set to 'Critical'. You will build a 'Hybrid' dashboard where the UI is low-code, but the complex SLA (Service Level Agreement) timer is handled via a custom JavaScript module you integrate into the platform. Finally, you will configure a DevOps pipeline that deploys this app into three distinct environments (Dev, Test, Prod) and demonstrates 'No-Downtime' deployments. This project serves as your entry-level certification that you can handle enterprise software complexity at visual speed.",
    estimatedDays: 14,
    skillsFocused: [
      "Relational Database Architecture (3NF)",
      "Multi-tenant Data Isolation Patterns",
      "Dynamic Visual Workflow Routing",
      "Custom Code Integration (JS/OML)",
      "Application Lifecycle Management (DevOps)"
    ],
    steps: [
      {
        title: "Phase 1: The Relational Blueprint",
        description: "Design the Core Entities for Companies, Users, and Tickets using a professional ERD tool."
      },
      {
        title: "Phase 2: The Logic Core",
        description: "Develop the server-side logic that calculates ticket priority and assigns handlers automatically."
      },
      {
        title: "Phase 3: The Hybrid Interface",
        description: "Build the agent dashboard and integrate a custom SLA countdown timer using a JS extension."
      },
      {
        title: "Phase 4: Deployment & Documentation",
        description: "Configure the CI/CD pipeline and write the technical 'Handover' documentation for the maintenance team."
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