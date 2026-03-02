// ============================================
// TALENCIA Global — Multi-Layer Career Architecture
// Category → Job Role → Program → Course → Module → Unit → Topic
// ============================================

export interface JobRole {
  id: string;
  titleKey: string; // i18n key
  descKey: string;
  icon: string;
  skills: string[];
  salaryRange: string;
  demandLevel: "high" | "medium" | "low";
  programIds: string[];
}

export interface Program {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
  objectiveKey: string;
  targetRoleKey: string;
  skillsGained: string[];
  courseIds: string[];
  duration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  prerequisites: string[];
}

export interface Course {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
  duration: string;
  moduleCount: number;
  languages: string[];
  category: CategoryId;
  programIds: string[]; // courses can belong to multiple programs
  trackId: string; // maps to existing workspace route
}

export type CategoryId = "high-code" | "low-code" | "no-code";

export interface Category {
  id: CategoryId;
  titleKey: string;
  descKey: string;
  icon: string;
  roleIds: string[];
}

// ============================================
// LEVEL 1: Categories
// ============================================
export const categories: Category[] = [
  {
    id: "high-code",
    titleKey: "hierarchy.highCode",
    descKey: "hierarchy.highCodeDesc",
    icon: "💻",
    roleIds: ["backend-dev", "frontend-dev", "fullstack-dev", "ai-engineer", "data-engineer", "devops-engineer", "system-architect"],
  },
  {
    id: "low-code",
    titleKey: "hierarchy.lowCode",
    descKey: "hierarchy.lowCodeDesc",
    icon: "🔧",
    roleIds: [
      "automation-engineer",
      "integration-specialist",
      "internal-tools-dev",
      "low-code-developer",
      "app-builder",
      "citizen-developer-lead",
      "bpm-analyst",
      "workflow-designer",
      "enterprise-low-code-architect",
      "solutions-engineer-lce",
      "api-connector-developer",
      "mobile-low-code-developer",
      "citizen-developer-mobile",
      "low-code-ai-developer",
      "citizen-data-scientist",
    ],
  },
  {
    id: "no-code",
    titleKey: "hierarchy.noCode",
    descKey: "hierarchy.noCodeDesc",
    icon: "✨",
    roleIds: ["product-manager", "ai-ops-analyst"],
  },
];

// ============================================
// LEVEL 2: Job Roles
// ============================================
export const jobRoles: JobRole[] = [
  {
    id: "backend-dev",
    titleKey: "roles.backendDev",
    descKey: "roles.backendDevDesc",
    icon: "⚙️",
    skills: ["Node.js", "Python", "Go", "Java", "PostgreSQL", "Redis", "Docker", "REST APIs"],
    salaryRange: "₹8L–₹30L",
    demandLevel: "high",
    programIds: ["backend-mastery", "api-specialist"],
  },
  {
    id: "frontend-dev",
    titleKey: "roles.frontendDev",
    descKey: "roles.frontendDevDesc",
    icon: "🎨",
    skills: ["React", "TypeScript", "CSS", "Next.js", "Performance", "Accessibility"],
    salaryRange: "₹6L–₹25L",
    demandLevel: "high",
    programIds: ["frontend-mastery"],
  },
  {
    id: "fullstack-dev",
    titleKey: "roles.fullstackDev",
    descKey: "roles.fullstackDevDesc",
    icon: "🔗",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "CI/CD"],
    salaryRange: "₹10L–₹35L",
    demandLevel: "high",
    programIds: ["fullstack-mastery"],
  },
  {
    id: "ai-engineer",
    titleKey: "roles.aiEngineer",
    descKey: "roles.aiEngineerDesc",
    icon: "🤖",
    skills: ["Python", "LLMs", "ML Ops", "TensorFlow", "Prompt Engineering"],
    salaryRange: "₹12L–₹45L",
    demandLevel: "high",
    programIds: ["ai-engineering"],
  },
  {
    id: "data-engineer",
    titleKey: "roles.dataEngineer",
    descKey: "roles.dataEngineerDesc",
    icon: "📊",
    skills: ["Python", "SQL", "Spark", "Kafka", "Airflow", "dbt"],
    salaryRange: "₹10L–₹35L",
    demandLevel: "high",
    programIds: ["data-engineering"],
  },
  {
    id: "devops-engineer",
    titleKey: "roles.devopsEngineer",
    descKey: "roles.devopsEngineerDesc",
    icon: "☁️",
    skills: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Docker", "Linux"],
    salaryRange: "₹10L–₹40L",
    demandLevel: "high",
    programIds: ["devops-cloud"],
  },
  {
    id: "system-architect",
    titleKey: "roles.systemArchitect",
    descKey: "roles.systemArchitectDesc",
    icon: "🏗️",
    skills: ["System Design", "Distributed Systems", "Scalability", "Architecture"],
    salaryRange: "₹25L–₹60L",
    demandLevel: "medium",
    programIds: ["system-design"],
  },
  {
    id: "automation-engineer",
    titleKey: "roles.automationEngineer",
    descKey: "roles.automationEngineerDesc",
    icon: "🔄",
    skills: ["Zapier", "n8n", "Power Automate", "JavaScript"],
    salaryRange: "₹6L–₹18L",
    demandLevel: "medium",
    programIds: ["business-automation"],
  },
  {
    id: "integration-specialist",
    titleKey: "roles.integrationSpecialist",
    descKey: "roles.integrationSpecialistDesc",
    icon: "🔌",
    skills: ["MuleSoft", "APIs", "Workato", "Python"],
    salaryRange: "₹8L–₹25L",
    demandLevel: "medium",
    programIds: ["api-integration"],
  },
  {
    id: "internal-tools-dev",
    titleKey: "roles.internalToolsDev",
    descKey: "roles.internalToolsDevDesc",
    icon: "🛠️",
    skills: ["Retool", "SQL", "JavaScript", "Appsmith"],
    salaryRange: "₹6L–₹20L",
    demandLevel: "medium",
    programIds: ["internal-tools"],
  },  // Low‑code engineering specific roles
  {
    id: "low-code-developer",
    titleKey: "roles.lowCodeDeveloper",
    descKey: "roles.lowCodeDeveloperDesc",
    icon: "🔧",
    skills: ["OutSystems", "Mendix", "PowerApps", "Appian"],
    salaryRange: "₹6L–₹22L",
    demandLevel: "high",
    programIds: ["lce-app"],
  },
  {
    id: "app-builder",
    titleKey: "roles.appBuilder",
    descKey: "roles.appBuilderDesc",
    icon: "📱",
    skills: ["UI/UX", "Workflow Design", "Low-Code Platform"],
    salaryRange: "₹5L–₹18L",
    demandLevel: "medium",
    programIds: ["lce-app"],
  },
  {
    id: "citizen-developer-lead",
    titleKey: "roles.citizenDeveloperLead",
    descKey: "roles.citizenDeveloperLeadDesc",
    icon: "🧑‍💼",
    skills: ["Low-Code Strategy", "Governance", "Platform Selection"],
    salaryRange: "₹7L–₹25L",
    demandLevel: "medium",
    programIds: ["lce-app","lce-enterprise"],
  },
  {
    id: "bpm-analyst",
    titleKey: "roles.bpmAnalyst",
    descKey: "roles.bpmAnalystDesc",
    icon: "📊",
    skills: ["Business Process Modeling", "Low-Code Workflows"],
    salaryRange: "₹6L–₹20L",
    demandLevel: "medium",
    programIds: ["lce-bpm"],
  },
  {
    id: "workflow-designer",
    titleKey: "roles.workflowDesigner",
    descKey: "roles.workflowDesignerDesc",
    icon: "🧵",
    skills: ["Process Optimization", "Low-Code Automation"],
    salaryRange: "₹5L–₹18L",
    demandLevel: "medium",
    programIds: ["lce-bpm"],
  },
  {
    id: "enterprise-low-code-architect",
    titleKey: "roles.enterpriseLowCodeArchitect",
    descKey: "roles.enterpriseLowCodeArchitectDesc",
    icon: "🏛️",
    skills: ["Systems Architecture", "Low-Code Platforms", "Integration"],
    salaryRange: "₹12L–₹40L",
    demandLevel: "high",
    programIds: ["lce-enterprise"],
  },
  {
    id: "solutions-engineer-lce",
    titleKey: "roles.solutionsEngineerLce",
    descKey: "roles.solutionsEngineerLceDesc",
    icon: "🧩",
    skills: ["Integration", "APIs", "Low-Code"],
    salaryRange: "₹8L–₹28L",
    demandLevel: "medium",
    programIds: ["lce-enterprise","lce-integrate"],
  },
  {
    id: "api-connector-developer",
    titleKey: "roles.apiConnectorDeveloper",
    descKey: "roles.apiConnectorDeveloperDesc",
    icon: "🔌",
    skills: ["API Development", "Low-Code Integration"],
    salaryRange: "₹6L–₹22L",
    demandLevel: "medium",
    programIds: ["lce-integrate"],
  },
  {
    id: "mobile-low-code-developer",
    titleKey: "roles.mobileLowCodeDeveloper",
    descKey: "roles.mobileLowCodeDeveloperDesc",
    icon: "📱",
    skills: ["Low-Code Mobile", "UI/UX"],
    salaryRange: "₹6L–₹20L",
    demandLevel: "medium",
    programIds: ["lce-mobile"],
  },
  {
    id: "citizen-developer-mobile",
    titleKey: "roles.citizenDeveloperMobile",
    descKey: "roles.citizenDeveloperMobileDesc",
    icon: "📲",
    skills: ["Mobile App Builder", "Low-Code"],
    salaryRange: "₹5L–₹18L",
    demandLevel: "medium",
    programIds: ["lce-mobile"],
  },
  {
    id: "low-code-ai-developer",
    titleKey: "roles.lowCodeAiDeveloper",
    descKey: "roles.lowCodeAiDeveloperDesc",
    icon: "🤖",
    skills: ["AI Services", "Low-Code"],
    salaryRange: "₹8L–₹30L",
    demandLevel: "high",
    programIds: ["lce-ai"],
  },
  {
    id: "citizen-data-scientist",
    titleKey: "roles.citizenDataScientist",
    descKey: "roles.citizenDataScientistDesc",
    icon: "📈",
    skills: ["Data Analysis", "Low-Code AI"],
    salaryRange: "₹7L–₹25L",
    demandLevel: "medium",
    programIds: ["lce-ai"],
  },  {
    id: "product-manager",
    titleKey: "roles.productManager",
    descKey: "roles.productManagerDesc",
    icon: "🚀",
    skills: ["Webflow", "Framer", "Product Strategy", "Analytics"],
    salaryRange: "₹8L–₹30L",
    demandLevel: "medium",
    programIds: ["product-launch"],
  },
  {
    id: "ai-ops-analyst",
    titleKey: "roles.aiOpsAnalyst",
    descKey: "roles.aiOpsAnalystDesc",
    icon: "🧠",
    skills: ["ChatGPT", "Claude", "Prompt Engineering", "AI Workflows"],
    salaryRange: "₹5L–₹15L",
    demandLevel: "high",
    programIds: ["ai-workflows"],
  },
];

// ============================================
// LEVEL 3: Programs
// ============================================
export const programs: Program[] = [
  {
    id: "backend-mastery",
    titleKey: "programs.backendMastery",
    descKey: "programs.backendMasteryDesc",
    icon: "⚙️",
    objectiveKey: "programs.backendMasteryObj",
    targetRoleKey: "roles.backendDev",
    skillsGained: ["REST APIs", "Database Design", "Authentication", "Caching", "Message Queues", "System Design"],
    courseIds: ["backend-fundamentals", "database-engineering", "backend-advanced"],
    duration: "16 weeks",
    difficulty: "intermediate",
    prerequisites: [],
  },
  {
    id: "api-specialist",
    titleKey: "programs.apiSpecialist",
    descKey: "programs.apiSpecialistDesc",
    icon: "🔗",
    objectiveKey: "programs.apiSpecialistObj",
    targetRoleKey: "roles.backendDev",
    skillsGained: ["API Design", "GraphQL", "gRPC", "API Security", "Documentation"],
    courseIds: ["backend-fundamentals", "api-design-advanced"],
    duration: "10 weeks",
    difficulty: "intermediate",
    prerequisites: [],
  },
  {
    id: "frontend-mastery",
    titleKey: "programs.frontendMastery",
    descKey: "programs.frontendMasteryDesc",
    icon: "🎨",
    objectiveKey: "programs.frontendMasteryObj",
    targetRoleKey: "roles.frontendDev",
    skillsGained: ["React", "TypeScript", "CSS Architecture", "Performance", "Testing"],
    courseIds: ["frontend-engineering"],
    duration: "14 weeks",
    difficulty: "intermediate",
    prerequisites: [],
  },
  {
    id: "fullstack-mastery",
    titleKey: "programs.fullstackMastery",
    descKey: "programs.fullstackMasteryDesc",
    icon: "🔗",
    objectiveKey: "programs.fullstackMasteryObj",
    targetRoleKey: "roles.fullstackDev",
    skillsGained: ["React", "Node.js", "PostgreSQL", "Docker", "CI/CD", "Full Stack Architecture"],
    courseIds: ["frontend-engineering", "backend-fundamentals", "fullstack-integration"],
    duration: "20 weeks",
    difficulty: "intermediate",
    prerequisites: [],
  },
  {
    id: "ai-engineering",
    titleKey: "programs.aiEngineering",
    descKey: "programs.aiEngineeringDesc",
    icon: "🤖",
    objectiveKey: "programs.aiEngineeringObj",
    targetRoleKey: "roles.aiEngineer",
    skillsGained: ["LLM Development", "Agentic AI", "ML Ops", "AI Automation"],
    courseIds: ["ai-native"],
    duration: "18 weeks",
    difficulty: "advanced",
    prerequisites: ["backend-fundamentals"],
  },
  {
    id: "data-engineering",
    titleKey: "programs.dataEngineering",
    descKey: "programs.dataEngineeringDesc",
    icon: "📊",
    objectiveKey: "programs.dataEngineeringObj",
    targetRoleKey: "roles.dataEngineer",
    skillsGained: ["ETL Pipelines", "Data Warehousing", "Stream Processing", "Data Modeling"],
    courseIds: ["data-eng"],
    duration: "16 weeks",
    difficulty: "advanced",
    prerequisites: ["database-engineering"],
  },
  {
    id: "devops-cloud",
    titleKey: "programs.devopsCloud",
    descKey: "programs.devopsCloudDesc",
    icon: "☁️",
    objectiveKey: "programs.devopsCloudObj",
    targetRoleKey: "roles.devopsEngineer",
    skillsGained: ["CI/CD", "Infrastructure as Code", "Container Orchestration", "Cloud Services"],
    courseIds: ["devops"],
    duration: "14 weeks",
    difficulty: "intermediate",
    prerequisites: [],
  },
  {
    id: "system-design",
    titleKey: "programs.systemDesign",
    descKey: "programs.systemDesignDesc",
    icon: "🏗️",
    objectiveKey: "programs.systemDesignObj",
    targetRoleKey: "roles.systemArchitect",
    skillsGained: ["Distributed Systems", "Scalability", "High Availability", "Architecture Patterns"],
    courseIds: ["system-design-course"],
    duration: "12 weeks",
    difficulty: "advanced",
    prerequisites: ["backend-fundamentals", "database-engineering"],
  },
  {
    id: "business-automation",
    titleKey: "programs.businessAutomation",
    descKey: "programs.businessAutomationDesc",
    icon: "🔄",
    objectiveKey: "programs.businessAutomationObj",
    targetRoleKey: "roles.automationEngineer",
    skillsGained: ["Workflow Automation", "Integration Design", "Process Optimization"],
    courseIds: ["automation"],
    duration: "8 weeks",
    difficulty: "beginner",
    prerequisites: [],
  },
  {
    id: "api-integration",
    titleKey: "programs.apiIntegration",
    descKey: "programs.apiIntegrationDesc",
    icon: "🔌",
    objectiveKey: "programs.apiIntegrationObj",
    targetRoleKey: "roles.integrationSpecialist",
    skillsGained: ["API Design", "Platform Integration", "Data Mapping"],
    courseIds: ["api-integration-course"],
    duration: "10 weeks",
    difficulty: "intermediate",
    prerequisites: [],
  },
  {
    id: "internal-tools",
    titleKey: "programs.internalTools",
    descKey: "programs.internalToolsDesc",
    icon: "🛠️",
    objectiveKey: "programs.internalToolsObj",
    targetRoleKey: "roles.internalToolsDev",
    skillsGained: ["Admin Dashboards", "SQL", "Low-Code Platforms"],
    courseIds: ["internal-tools-course"],
    duration: "6 weeks",
    difficulty: "beginner",
    prerequisites: [],
  },
  // Low-code engineering programs
  {
    id: "lce-app",
    titleKey: "programs.lceApp",
    descKey: "programs.lceAppDesc",
    icon: "🧩",
    objectiveKey: "programs.lceAppObj",
    targetRoleKey: "roles.lowCodeDeveloper",
    skillsGained: [
      "Low-Code Application Design",
      "Data Modeling",
      "Workflow Automation",
    ],
    courseIds: [
      "lce-foundations",
      "lce-data-modeling",
      "lce-logic-workflows",
      "lce-uiux",
      "lce-security",
      "lce-integration-apis",
      "lce-ai-services",
      "lce-mobile-dev",
      "lce-devops",
      "lce-advanced",
      "lce-capstone",
    ],
    duration: "16 weeks",
    difficulty: "beginner",
    prerequisites: [],
  },
  {
    id: "lce-bpm",
    titleKey: "programs.lceBpm",
    descKey: "programs.lceBpmDesc",
    icon: "🔄",
    objectiveKey: "programs.lceBpmObj",
    targetRoleKey: "roles.bpmAnalyst",
    skillsGained: [
      "Business Process Modeling",
      "Workflow Automation",
      "Process Optimization",
    ],
    courseIds: [
      "lce-foundations",
      "lce-logic-workflows",
      "lce-security",
      "lce-integration-apis",
      "lce-devops",
      "lce-advanced",
      "lce-capstone",
    ],
    duration: "14 weeks",
    difficulty: "intermediate",
    prerequisites: [],
  },
  {
    id: "lce-enterprise",
    titleKey: "programs.lceEnterprise",
    descKey: "programs.lceEnterpriseDesc",
    icon: "🏛️",
    objectiveKey: "programs.lceEnterpriseObj",
    targetRoleKey: "roles.enterpriseLowCodeArchitect",
    skillsGained: [
      "Enterprise Architecture",
      "Low-Code Integration",
      "Governance",
    ],
    courseIds: [
      "lce-foundations",
      "lce-data-modeling",
      "lce-logic-workflows",
      "lce-security",
      "lce-integration-apis",
      "lce-devops",
      "lce-advanced",
      "lce-capstone",
    ],
    duration: "18 weeks",
    difficulty: "intermediate",
    prerequisites: [],
  },
  {
    id: "lce-integrate",
    titleKey: "programs.lceIntegrate",
    descKey: "programs.lceIntegrateDesc",
    icon: "🔌",
    objectiveKey: "programs.lceIntegrateObj",
    targetRoleKey: "roles.apiConnectorDeveloper",
    skillsGained: [
      "API Design",
      "Connector Development",
      "Platform Integration",
    ],
    courseIds: [
      "lce-foundations",
      "lce-data-modeling",
      "lce-logic-workflows",
      "lce-integration-apis",
      "lce-devops",
      "lce-advanced",
      "lce-capstone",
    ],
    duration: "16 weeks",
    difficulty: "intermediate",
    prerequisites: [],
  },
  {
    id: "lce-mobile",
    titleKey: "programs.lceMobile",
    descKey: "programs.lceMobileDesc",
    icon: "📱",
    objectiveKey: "programs.lceMobileObj",
    targetRoleKey: "roles.mobileLowCodeDeveloper",
    skillsGained: ["Mobile Low-Code", "UI/UX", "Deployment"],
    courseIds: [
      "lce-foundations",
      "lce-logic-workflows",
      "lce-uiux",
      "lce-mobile-dev",
      "lce-security",
      "lce-devops",
      "lce-capstone",
    ],
    duration: "14 weeks",
    difficulty: "beginner",
    prerequisites: [],
  },
  {
    id: "lce-ai",
    titleKey: "programs.lceAi",
    descKey: "programs.lceAiDesc",
    icon: "🤖",
    objectiveKey: "programs.lceAiObj",
    targetRoleKey: "roles.lowCodeAiDeveloper",
    skillsGained: ["AI Services", "Data Modeling", "Low-Code"],
    courseIds: [
      "lce-foundations",
      "lce-data-modeling",
      "lce-logic-workflows",
      "lce-ai-services",
      "lce-security",
      "lce-devops",
      "lce-advanced",
      "lce-capstone",
    ],
    duration: "16 weeks",
    difficulty: "intermediate",
    prerequisites: [],
  },
  {
    id: "product-launch",
    titleKey: "programs.productLaunch",
    descKey: "programs.productLaunchDesc",
    icon: "🚀",
    objectiveKey: "programs.productLaunchObj",
    targetRoleKey: "roles.productManager",
    skillsGained: ["MVP Design", "Landing Pages", "Analytics", "Launch Strategy"],
    courseIds: ["product-launch-course"],
    duration: "6 weeks",
    difficulty: "beginner",
    prerequisites: [],
  },
  {
    id: "ai-workflows",
    titleKey: "programs.aiWorkflows",
    descKey: "programs.aiWorkflowsDesc",
    icon: "🧠",
    objectiveKey: "programs.aiWorkflowsObj",
    targetRoleKey: "roles.aiOpsAnalyst",
    skillsGained: ["Prompt Engineering", "AI Tool Chains", "Business AI"],
    courseIds: ["ai-workflow-course"],
    duration: "8 weeks",
    difficulty: "beginner",
    prerequisites: [],
  },
];

// ============================================
// LEVEL 4: Courses
// ============================================
export const courses: Course[] = [
  {
    id: "backend-fundamentals",
    titleKey: "courses.backendFundamentals",
    descKey: "courses.backendFundamentalsDesc",
    icon: "⚙️",
    duration: "6 weeks",
    moduleCount: 8,
    languages: ["TypeScript", "Python", "Go", "Java"],
    category: "high-code",
    programIds: ["backend-mastery", "api-specialist", "fullstack-mastery"],
    trackId: "backend",
  },
  {
    id: "database-engineering",
    titleKey: "courses.databaseEngineering",
    descKey: "courses.databaseEngineeringDesc",
    icon: "🗄️",
    duration: "5 weeks",
    moduleCount: 6,
    languages: ["SQL", "TypeScript"],
    category: "high-code",
    programIds: ["backend-mastery"],
    trackId: "backend",
  },
  {
    id: "backend-advanced",
    titleKey: "courses.backendAdvanced",
    descKey: "courses.backendAdvancedDesc",
    icon: "🔥",
    duration: "5 weeks",
    moduleCount: 10,
    languages: ["TypeScript", "Go"],
    category: "high-code",
    programIds: ["backend-mastery"],
    trackId: "backend",
  },
  {
    id: "api-design-advanced",
    titleKey: "courses.apiDesignAdvanced",
    descKey: "courses.apiDesignAdvancedDesc",
    icon: "🔗",
    duration: "4 weeks",
    moduleCount: 6,
    languages: ["TypeScript", "Python"],
    category: "high-code",
    programIds: ["api-specialist"],
    trackId: "backend",
  },
  {
    id: "frontend-engineering",
    titleKey: "courses.frontendEngineering",
    descKey: "courses.frontendEngineeringDesc",
    icon: "🎨",
    duration: "14 weeks",
    moduleCount: 20,
    languages: ["TypeScript", "JavaScript"],
    category: "high-code",
    programIds: ["frontend-mastery", "fullstack-mastery"],
    trackId: "frontend",
  },
  {
    id: "fullstack-integration",
    titleKey: "courses.fullstackIntegration",
    descKey: "courses.fullstackIntegrationDesc",
    icon: "🔗",
    duration: "6 weeks",
    moduleCount: 10,
    languages: ["TypeScript"],
    category: "high-code",
    programIds: ["fullstack-mastery"],
    trackId: "fullstack",
  },
  {
    id: "ai-native",
    titleKey: "courses.aiNative",
    descKey: "courses.aiNativeDesc",
    icon: "🤖",
    duration: "18 weeks",
    moduleCount: 26,
    languages: ["Python", "TypeScript"],
    category: "high-code",
    programIds: ["ai-engineering"],
    trackId: "ai",
  },
  {
    id: "data-eng",
    titleKey: "courses.dataEng",
    descKey: "courses.dataEngDesc",
    icon: "📊",
    duration: "16 weeks",
    moduleCount: 22,
    languages: ["Python", "SQL", "Scala"],
    category: "high-code",
    programIds: ["data-engineering"],
    trackId: "data",
  },
  {
    id: "devops",
    titleKey: "courses.devops",
    descKey: "courses.devopsDesc",
    icon: "☁️",
    duration: "14 weeks",
    moduleCount: 18,
    languages: ["Go", "Python", "Bash"],
    category: "high-code",
    programIds: ["devops-cloud"],
    trackId: "devops",
  },
  {
    id: "system-design-course",
    titleKey: "courses.systemDesign",
    descKey: "courses.systemDesignDesc",
    icon: "🏗️",
    duration: "12 weeks",
    moduleCount: 16,
    languages: ["Language Agnostic"],
    category: "high-code",
    programIds: ["system-design"],
    trackId: "system-design",
  },
  {
    id: "automation",
    titleKey: "courses.automation",
    descKey: "courses.automationDesc",
    icon: "🔄",
    duration: "8 weeks",
    moduleCount: 12,
    languages: ["JavaScript", "SQL"],
    category: "low-code",
    programIds: ["business-automation"],
    trackId: "automation",
  },
  {
    id: "api-integration-course",
    titleKey: "courses.apiIntegration",
    descKey: "courses.apiIntegrationDesc",
    icon: "🔌",
    duration: "10 weeks",
    moduleCount: 14,
    languages: ["JavaScript", "Python"],
    category: "low-code",
    programIds: ["api-integration"],
    trackId: "api-integration",
  },
  {
    id: "internal-tools-course",
    titleKey: "courses.internalTools",
    descKey: "courses.internalToolsDesc",
    icon: "🛠️",
    duration: "6 weeks",
    moduleCount: 10,
    languages: ["SQL", "JavaScript"],
    category: "low-code",
    programIds: ["internal-tools"],
    trackId: "internal-tools",
  },
  // Low‑code engineering courses
  {
    id: "lce-foundations",
    titleKey: "courses.lceFoundations",
    descKey: "courses.lceFoundationsDesc",
    icon: "🔧",
    duration: "4 weeks",
    moduleCount: 4,
    languages: ["OutSystems","Mendix","PowerApps","Appian"],
    category: "low-code",
    programIds: [
      "lce-app","lce-bpm","lce-enterprise","lce-integrate","lce-mobile","lce-ai",
    ],
    trackId: "lce",
  },
  {
    id: "lce-data-modeling",
    titleKey: "courses.lceDataModeling",
    descKey: "courses.lceDataModelingDesc",
    icon: "📁",
    duration: "4 weeks",
    moduleCount: 3,
    languages: ["OutSystems","Mendix","PowerApps","Appian"],
    category: "low-code",
    programIds: ["lce-app","lce-enterprise","lce-integrate","lce-mobile","lce-ai"],
    trackId: "lce",
  },
  {
    id: "lce-logic-workflows",
    titleKey: "courses.lceLogicWorkflows",
    descKey: "courses.lceLogicWorkflowsDesc",
    icon: "🧵",
    duration: "4 weeks",
    moduleCount: 4,
    languages: ["OutSystems","Mendix","PowerApps","Appian"],
    category: "low-code",
    programIds: ["lce-app","lce-bpm","lce-enterprise"],
    trackId: "lce",
  },
  {
    id: "lce-uiux",
    titleKey: "courses.lceUiUx",
    descKey: "courses.lceUiUxDesc",
    icon: "🎨",
    duration: "3 weeks",
    moduleCount: 3,
    languages: ["OutSystems","Mendix","PowerApps","Appian"],
    category: "low-code",
    programIds: ["lce-app","lce-mobile"],
    trackId: "lce",
  },
  {
    id: "lce-security",
    titleKey: "courses.lceSecurity",
    descKey: "courses.lceSecurityDesc",
    icon: "🔒",
    duration: "3 weeks",
    moduleCount: 3,
    languages: ["OutSystems","Mendix","PowerApps","Appian"],
    category: "low-code",
    programIds: ["lce-app","lce-bpm","lce-enterprise","lce-integrate","lce-mobile","lce-ai"],
    trackId: "lce",
  },
  {
    id: "lce-integration-apis",
    titleKey: "courses.lceIntegrationApis",
    descKey: "courses.lceIntegrationApisDesc",
    icon: "🔌",
    duration: "4 weeks",
    moduleCount: 4,
    languages: ["OutSystems","Mendix","PowerApps","Appian"],
    category: "low-code",
    programIds: ["lce-app","lce-bpm","lce-enterprise","lce-integrate","lce-mobile","lce-ai"],
    trackId: "lce",
  },
  {
    id: "lce-ai-services",
    titleKey: "courses.lceAiServices",
    descKey: "courses.lceAiServicesDesc",
    icon: "🤖",
    duration: "4 weeks",
    moduleCount: 4,
    languages: ["OutSystems","Mendix","PowerApps","Appian"],
    category: "low-code",
    programIds: ["lce-ai","lce-app","lce-enterprise"],
    trackId: "lce",
  },
  {
    id: "lce-mobile-dev",
    titleKey: "courses.lceMobileDev",
    descKey: "courses.lceMobileDevDesc",
    icon: "📱",
    duration: "4 weeks",
    moduleCount: 4,
    languages: ["OutSystems","Mendix","PowerApps","Appian"],
    category: "low-code",
    programIds: ["lce-mobile","lce-app"],
    trackId: "lce",
  },
  {
    id: "lce-devops",
    titleKey: "courses.lceDevops",
    descKey: "courses.lceDevopsDesc",
    icon: "🛠️",
    duration: "4 weeks",
    moduleCount: 4,
    languages: ["OutSystems","Mendix","PowerApps","Appian"],
    category: "low-code",
    programIds: ["lce-enterprise","lce-app"],
    trackId: "lce",
  },
  {
    id: "lce-advanced",
    titleKey: "courses.lceAdvanced",
    descKey: "courses.lceAdvancedDesc",
    icon: "🚀",
    duration: "5 weeks",
    moduleCount: 5,
    languages: ["OutSystems","Mendix","PowerApps","Appian"],
    category: "low-code",
    programIds: ["lce-enterprise","lce-integrate"],
    trackId: "lce",
  },
  {
    id: "lce-capstone",
    titleKey: "courses.lceCapstone",
    descKey: "courses.lceCapstoneDesc",
    icon: "🏁",
    duration: "4 weeks",
    moduleCount: 3,
    languages: ["OutSystems","Mendix","PowerApps","Appian"],
    category: "low-code",
    programIds: [
      "lce-app","lce-bpm","lce-enterprise","lce-integrate","lce-mobile","lce-ai",
    ],
    trackId: "lce",
  },

  {
    id: "product-launch-course",
    titleKey: "courses.productLaunch",
    descKey: "courses.productLaunchDesc",
    icon: "🚀",
    duration: "6 weeks",
    moduleCount: 10,
    languages: ["No coding required"],
    category: "no-code",
    programIds: ["product-launch"],
    trackId: "product-launch",
  },
  {
    id: "ai-workflow-course",
    titleKey: "courses.aiWorkflow",
    descKey: "courses.aiWorkflowDesc",
    icon: "🧠",
    duration: "8 weeks",
    moduleCount: 12,
    languages: ["No coding required"],
    category: "no-code",
    programIds: ["ai-workflows"],
    trackId: "ai-workflows",
  },
];

// ============================================
// Helper functions
// ============================================
export function getCategoryById(id: CategoryId) {
  return categories.find(c => c.id === id);
}

export function getRoleById(id: string) {
  return jobRoles.find(r => r.id === id);
}

export function getProgramById(id: string) {
  return programs.find(p => p.id === id);
}

export function getCourseById(id: string) {
  return courses.find(c => c.id === id);
}

export function getRolesForCategory(categoryId: CategoryId) {
  const cat = getCategoryById(categoryId);
  if (!cat) return [];
  return jobRoles.filter(r => cat.roleIds.includes(r.id));
}

export function getProgramsForRole(roleId: string) {
  const role = getRoleById(roleId);
  if (!role) return [];
  return programs.filter(p => role.programIds.includes(p.id));
}

export function getCoursesForProgram(programId: string) {
  const prog = getProgramById(programId);
  if (!prog) return [];
  return courses.filter(c => prog.courseIds.includes(c.id));
}

export function getProgramsForCourse(courseId: string) {
  return programs.filter(p => p.courseIds.includes(courseId));
}

export function getCategoryForRole(roleId: string) {
  return categories.find(c => c.roleIds.includes(roleId));
}
