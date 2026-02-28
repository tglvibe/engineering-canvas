// ============================================
// TALENCIA Global — Multi-Layer Career Architecture
// Category → Job Role → Program → Course → Module → Unit → Topic
// ============================================

export interface JobRole {
  id: string;
  titleKey: string; // i18n key
  descKey: string;
  icon: string;
  skillsKeys: string[];
  salaryRangeKey: string;
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
  skillsGainedKeys: string[];
  courseIds: string[];
  durationKey: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  prerequisitesKeys: string[];
}

export interface Course {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
  durationKey: string;
  moduleCount: number;
  languagesKeys: string[];
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
    skillsKeys: ["common.skills.nodejs", "common.skills.python", "common.skills.go", "common.skills.java", "common.skills.postgresql", "common.skills.redis", "common.skills.docker", "common.skills.restapis"],
    salaryRangeKey: "roles.salary.backend",
    demandLevel: "high",
    programIds: ["backend-mastery", "api-specialist"],
  },
  {
    id: "frontend-dev",
    titleKey: "roles.frontendDev",
    descKey: "roles.frontendDevDesc",
    icon: "🎨",
    skillsKeys: ["common.skills.react", "common.skills.typescript", "common.skills.css", "common.skills.nextjs", "common.skills.performance", "common.skills.accessibility"],
    salaryRangeKey: "roles.salary.frontend",
    demandLevel: "high",
    programIds: ["frontend-mastery"],
  },
  {
    id: "fullstack-dev",
    titleKey: "roles.fullstackDev",
    descKey: "roles.fullstackDevDesc",
    icon: "🔗",
    skillsKeys: ["common.skills.react", "common.skills.nodejs", "common.skills.typescript", "common.skills.postgresql", "common.skills.docker", "common.skills.cicd"],
    salaryRangeKey: "roles.salary.fullstack",
    demandLevel: "high",
    programIds: ["fullstack-mastery"],
  },
  {
    id: "ai-engineer",
    titleKey: "roles.aiEngineer",
    descKey: "roles.aiEngineerDesc",
    icon: "🤖",
    skillsKeys: ["common.skills.python", "common.skills.llms", "common.skills.mlops", "common.skills.tensorflow", "common.skills.prompting"],
    salaryRangeKey: "roles.salary.ai",
    demandLevel: "high",
    programIds: ["ai-engineering"],
  },
  {
    id: "data-engineer",
    titleKey: "roles.dataEngineer",
    descKey: "roles.dataEngineerDesc",
    icon: "📊",
    skillsKeys: ["common.skills.python", "common.skills.sql", "common.skills.spark", "common.skills.kafka", "common.skills.airflow", "common.skills.dbt"],
    salaryRangeKey: "roles.salary.data",
    demandLevel: "high",
    programIds: ["data-engineering"],
  },
  {
    id: "devops-engineer",
    titleKey: "roles.devopsEngineer",
    descKey: "roles.devopsEngineerDesc",
    icon: "☁️",
    skillsKeys: ["common.skills.aws", "common.skills.kubernetes", "common.skills.terraform", "common.skills.cicd", "common.skills.docker", "common.skills.linux"],
    salaryRangeKey: "roles.salary.devops",
    demandLevel: "high",
    programIds: ["devops-cloud"],
  },
  {
    id: "system-architect",
    titleKey: "roles.systemArchitect",
    descKey: "roles.systemArchitectDesc",
    icon: "🏗️",
    skillsKeys: ["common.skills.systemdesign", "common.skills.distributedsystems", "common.skills.scalability", "common.skills.architecture"],
    salaryRangeKey: "roles.salary.architect",
    demandLevel: "medium",
    programIds: ["system-design"],
  },
  {
    id: "automation-engineer",
    titleKey: "roles.automationEngineer",
    descKey: "roles.automationEngineerDesc",
    icon: "🔄",
    skillsKeys: ["common.skills.zapier", "common.skills.n8n", "common.skills.powerautomate", "common.skills.javascript"],
    salaryRangeKey: "roles.salary.automation",
    demandLevel: "medium",
    programIds: ["business-automation"],
  },
  {
    id: "integration-specialist",
    titleKey: "roles.integrationSpecialist",
    descKey: "roles.integrationSpecialistDesc",
    icon: "🔌",
    skillsKeys: ["common.skills.mulesoft", "common.skills.apis", "common.skills.workato", "common.skills.python"],
    salaryRangeKey: "roles.salary.integration",
    demandLevel: "medium",
    programIds: ["api-integration"],
  },
  {
    id: "internal-tools-dev",
    titleKey: "roles.internalToolsDev",
    descKey: "roles.internalToolsDevDesc",
    icon: "🛠️",
    skillsKeys: ["common.skills.retool", "common.skills.sql", "common.skills.javascript", "common.skills.appsmith"],
    salaryRangeKey: "roles.salary.tools",
    demandLevel: "medium",
    programIds: ["internal-tools"],
  },  // Low‑code engineering specific roles
  {
    id: "low-code-developer",
    titleKey: "roles.lowCodeDeveloper",
    descKey: "roles.lowCodeDeveloperDesc",
    icon: "🔧",
    skillsKeys: ["common.skills.outsystems", "common.skills.mendix", "common.skills.powerapps", "common.skills.appian"],
    salaryRangeKey: "roles.salary.lowcode",
    demandLevel: "high",
    programIds: ["lce-app"],
  },
  {
    id: "app-builder",
    titleKey: "roles.appBuilder",
    descKey: "roles.appBuilderDesc",
    icon: "📱",
    skillsKeys: ["common.skills.uiux", "common.skills.workflowdesign", "common.skills.lowcode"],
    salaryRangeKey: "roles.salary.appbuilder",
    demandLevel: "medium",
    programIds: ["lce-app"],
  },
  {
    id: "citizen-developer-lead",
    titleKey: "roles.citizenDeveloperLead",
    descKey: "roles.citizenDeveloperLeadDesc",
    icon: "🧑‍💼",
    skillsKeys: ["common.skills.lowcodestrategy", "common.skills.governance", "common.skills.platformselection"],
    salaryRangeKey: "roles.salary.citizenlead",
    demandLevel: "medium",
    programIds: ["lce-app", "lce-enterprise"],
  },
  {
    id: "bpm-analyst",
    titleKey: "roles.bpmAnalyst",
    descKey: "roles.bpmAnalystDesc",
    icon: "📊",
    skillsKeys: ["common.skills.bpm", "common.skills.lowcodeworkflows"],
    salaryRangeKey: "roles.salary.bpm",
    demandLevel: "medium",
    programIds: ["lce-bpm"],
  },
  {
    id: "workflow-designer",
    titleKey: "roles.workflowDesigner",
    descKey: "roles.workflowDesignerDesc",
    icon: "🧵",
    skillsKeys: ["common.skills.processopt", "common.skills.lowcodeauto"],
    salaryRangeKey: "roles.salary.workflow",
    demandLevel: "medium",
    programIds: ["lce-bpm"],
  },
  {
    id: "enterprise-low-code-architect",
    titleKey: "roles.enterpriseLowCodeArchitect",
    descKey: "roles.enterpriseLowCodeArchitectDesc",
    icon: "🏛️",
    skillsKeys: ["common.skills.sysarch", "common.skills.lowcode", "common.skills.integration"],
    salaryRangeKey: "roles.salary.entarch",
    demandLevel: "high",
    programIds: ["lce-enterprise"],
  },
  {
    id: "solutions-engineer-lce",
    titleKey: "roles.solutionsEngineerLce",
    descKey: "roles.solutionsEngineerLceDesc",
    icon: "🧩",
    skillsKeys: ["common.skills.integration", "common.skills.apis", "common.skills.lowcode"],
    salaryRangeKey: "roles.salary.solutions",
    demandLevel: "medium",
    programIds: ["lce-enterprise", "lce-integrate"],
  },
  {
    id: "api-connector-developer",
    titleKey: "roles.apiConnectorDeveloper",
    descKey: "roles.apiConnectorDeveloperDesc",
    icon: "🔌",
    skillsKeys: ["common.skills.apidev", "common.skills.lowcodeintegration"],
    salaryRangeKey: "roles.salary.connector",
    demandLevel: "medium",
    programIds: ["lce-integrate"],
  },
  {
    id: "mobile-low-code-developer",
    titleKey: "roles.mobileLowCodeDeveloper",
    descKey: "roles.mobileLowCodeDeveloperDesc",
    icon: "📱",
    skillsKeys: ["common.skills.lowcodemobile", "common.skills.uiux"],
    salaryRangeKey: "roles.salary.mobilelowcode",
    demandLevel: "medium",
    programIds: ["lce-mobile"],
  },
  {
    id: "citizen-developer-mobile",
    titleKey: "roles.citizenDeveloperMobile",
    descKey: "roles.citizenDeveloperMobileDesc",
    icon: "📲",
    skillsKeys: ["common.skills.mobilebuilder", "common.skills.lowcode"],
    salaryRangeKey: "roles.salary.citizenmobile",
    demandLevel: "medium",
    programIds: ["lce-mobile"],
  },
  {
    id: "low-code-ai-developer",
    titleKey: "roles.lowCodeAiDeveloper",
    descKey: "roles.lowCodeAiDeveloperDesc",
    icon: "🤖",
    skillsKeys: ["common.skills.aiservices", "common.skills.lowcode"],
    salaryRangeKey: "roles.salary.lowcodeai",
    demandLevel: "high",
    programIds: ["lce-ai"],
  },
  {
    id: "citizen-data-scientist",
    titleKey: "roles.citizenDataScientist",
    descKey: "roles.citizenDataScientistDesc",
    icon: "📈",
    skillsKeys: ["common.skills.dataanalysis", "common.skills.lowcodeai"],
    salaryRangeKey: "roles.salary.citizendata",
    demandLevel: "medium",
    programIds: ["lce-ai"],
  }, {
    id: "product-manager",
    titleKey: "roles.productManager",
    descKey: "roles.productManagerDesc",
    icon: "🚀",
    skillsKeys: ["common.skills.webflow", "common.skills.framer", "common.skills.prodstrat", "common.skills.analytics"],
    salaryRangeKey: "roles.salary.pm",
    demandLevel: "medium",
    programIds: ["product-launch"],
  },
  {
    id: "ai-ops-analyst",
    titleKey: "roles.aiOpsAnalyst",
    descKey: "roles.aiOpsAnalystDesc",
    icon: "🧠",
    skillsKeys: ["common.skills.chatgpt", "common.skills.claude", "common.skills.prompting", "common.skills.aiworkflows"],
    salaryRangeKey: "roles.salary.aiops",
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
    skillsGainedKeys: ["common.skills.restapis", "common.skills.dbdesign", "common.skills.auth", "common.skills.caching", "common.skills.queues", "common.skills.systemdesign"],
    courseIds: ["backend-fundamentals", "database-engineering", "backend-advanced"],
    durationKey: "common.duration.16weeks",
    difficulty: "intermediate",
    prerequisitesKeys: [],
  },
  {
    id: "api-specialist",
    titleKey: "programs.apiSpecialist",
    descKey: "programs.apiSpecialistDesc",
    icon: "🔗",
    objectiveKey: "programs.apiSpecialistObj",
    targetRoleKey: "roles.backendDev",
    skillsGainedKeys: ["common.skills.apidesign", "common.skills.graphql", "common.skills.grpc", "common.skills.apisecurity", "common.skills.documentation"],
    courseIds: ["backend-fundamentals", "api-design-advanced"],
    durationKey: "common.duration.10weeks",
    difficulty: "intermediate",
    prerequisitesKeys: [],
  },
  {
    id: "frontend-mastery",
    titleKey: "programs.frontendMastery",
    descKey: "programs.frontendMasteryDesc",
    icon: "🎨",
    objectiveKey: "programs.frontendMasteryObj",
    targetRoleKey: "roles.frontendDev",
    skillsGainedKeys: ["common.skills.react", "common.skills.typescript", "common.skills.cssarch", "common.skills.performance", "common.skills.testing"],
    courseIds: ["frontend-engineering"],
    durationKey: "common.duration.14weeks",
    difficulty: "intermediate",
    prerequisitesKeys: [],
  },
  {
    id: "fullstack-mastery",
    titleKey: "programs.fullstackMastery",
    descKey: "programs.fullstackMasteryDesc",
    icon: "🔗",
    objectiveKey: "programs.fullstackMasteryObj",
    targetRoleKey: "roles.fullstackDev",
    skillsGainedKeys: ["common.skills.react", "common.skills.nodejs", "common.skills.postgresql", "common.skills.docker", "common.skills.cicd", "common.skills.fullstackarch"],
    courseIds: ["frontend-engineering", "backend-fundamentals", "fullstack-integration"],
    durationKey: "common.duration.20weeks",
    difficulty: "intermediate",
    prerequisitesKeys: [],
  },
  {
    id: "ai-engineering",
    titleKey: "programs.aiEngineering",
    descKey: "programs.aiEngineeringDesc",
    icon: "🤖",
    objectiveKey: "programs.aiEngineeringObj",
    targetRoleKey: "roles.aiEngineer",
    skillsGainedKeys: ["common.skills.llmdev", "common.skills.agenticai", "common.skills.mlops", "common.skills.aiautomation"],
    courseIds: ["ai-native"],
    durationKey: "common.duration.18weeks",
    difficulty: "advanced",
    prerequisitesKeys: ["backend-fundamentals"],
  },
  {
    id: "data-engineering",
    titleKey: "programs.dataEngineering",
    descKey: "programs.dataEngineeringDesc",
    icon: "📊",
    objectiveKey: "programs.dataEngineeringObj",
    targetRoleKey: "roles.dataEngineer",
    skillsGainedKeys: ["common.skills.etl", "common.skills.datawarehousing", "common.skills.streamprocessing", "common.skills.datamodeling"],
    courseIds: ["data-eng"],
    durationKey: "common.duration.16weeks",
    difficulty: "advanced",
    prerequisitesKeys: ["database-engineering"],
  },
  {
    id: "devops-cloud",
    titleKey: "programs.devopsCloud",
    descKey: "programs.devopsCloudDesc",
    icon: "☁️",
    objectiveKey: "programs.devopsCloudObj",
    targetRoleKey: "roles.devopsEngineer",
    skillsGainedKeys: ["common.skills.cicd", "common.skills.iac", "common.skills.k8s", "common.skills.cloudservices"],
    courseIds: ["devops"],
    durationKey: "common.duration.14weeks",
    difficulty: "intermediate",
    prerequisitesKeys: [],
  },
  {
    id: "system-design",
    titleKey: "programs.systemDesign",
    descKey: "programs.systemDesignDesc",
    icon: "🏗️",
    objectiveKey: "programs.systemDesignObj",
    targetRoleKey: "roles.systemArchitect",
    skillsGainedKeys: ["common.skills.distributedsystems", "common.skills.scalability", "common.skills.highavailability", "common.skills.archpatterns"],
    courseIds: ["system-design-course"],
    durationKey: "common.duration.12weeks",
    difficulty: "advanced",
    prerequisitesKeys: ["backend-fundamentals", "database-engineering"],
  },
  {
    id: "business-automation",
    titleKey: "programs.businessAutomation",
    descKey: "programs.businessAutomationDesc",
    icon: "🔄",
    objectiveKey: "programs.businessAutomationObj",
    targetRoleKey: "roles.automationEngineer",
    skillsGainedKeys: ["common.skills.workflowauto", "common.skills.integrationdesign", "common.skills.processopt"],
    courseIds: ["automation"],
    durationKey: "common.duration.8weeks",
    difficulty: "beginner",
    prerequisitesKeys: [],
  },
  {
    id: "api-integration",
    titleKey: "programs.apiIntegration",
    descKey: "programs.apiIntegrationDesc",
    icon: "🔌",
    objectiveKey: "programs.apiIntegrationObj",
    targetRoleKey: "roles.integrationSpecialist",
    skillsGainedKeys: ["common.skills.apidesign", "common.skills.platformintegration", "common.skills.datamapping"],
    courseIds: ["api-integration-course"],
    durationKey: "common.duration.10weeks",
    difficulty: "intermediate",
    prerequisitesKeys: [],
  },
  {
    id: "internal-tools",
    titleKey: "programs.internalTools",
    descKey: "programs.internalToolsDesc",
    icon: "🛠️",
    objectiveKey: "programs.internalToolsObj",
    targetRoleKey: "roles.internalToolsDev",
    skillsGainedKeys: ["common.skills.admindashboards", "common.skills.sql", "common.skills.lowcode"],
    courseIds: ["internal-tools-course"],
    durationKey: "common.duration.6weeks",
    difficulty: "beginner",
    prerequisitesKeys: [],
  },
  // Low-code engineering programs
  {
    id: "lce-app",
    titleKey: "programs.lceApp",
    descKey: "programs.lceAppDesc",
    icon: "🧩",
    objectiveKey: "programs.lceAppObj",
    targetRoleKey: "roles.lowCodeDeveloper",
    skillsGainedKeys: [
      "common.skills.lowcodeappdesign",
      "common.skills.datamodeling",
      "common.skills.workflowauto",
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
    durationKey: "common.duration.16weeks",
    difficulty: "beginner",
    prerequisitesKeys: [],
  },
  {
    id: "lce-bpm",
    titleKey: "programs.lceBpm",
    descKey: "programs.lceBpmDesc",
    icon: "🔄",
    objectiveKey: "programs.lceBpmObj",
    targetRoleKey: "roles.bpmAnalyst",
    skillsGainedKeys: [
      "common.skills.bpm",
      "common.skills.workflowauto",
      "common.skills.processopt",
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
    durationKey: "common.duration.14weeks",
    difficulty: "intermediate",
    prerequisitesKeys: [],
  },
  {
    id: "lce-enterprise",
    titleKey: "programs.lceEnterprise",
    descKey: "programs.lceEnterpriseDesc",
    icon: "🏛️",
    objectiveKey: "programs.lceEnterpriseObj",
    targetRoleKey: "roles.enterpriseLowCodeArchitect",
    skillsGainedKeys: [
      "common.skills.entarch",
      "common.skills.lowcodeintegration",
      "common.skills.governance",
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
    durationKey: "common.duration.18weeks",
    difficulty: "intermediate",
    prerequisitesKeys: [],
  },
  {
    id: "lce-integrate",
    titleKey: "programs.lceIntegrate",
    descKey: "programs.lceIntegrateDesc",
    icon: "🔌",
    objectiveKey: "programs.lceIntegrateObj",
    targetRoleKey: "roles.apiConnectorDeveloper",
    skillsGainedKeys: [
      "common.skills.apidesign",
      "common.skills.connectordev",
      "common.skills.platformintegration",
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
    durationKey: "common.duration.16weeks",
    difficulty: "intermediate",
    prerequisitesKeys: [],
  },
  {
    id: "lce-mobile",
    titleKey: "programs.lceMobile",
    descKey: "programs.lceMobileDesc",
    icon: "📱",
    objectiveKey: "programs.lceMobileObj",
    targetRoleKey: "roles.mobileLowCodeDeveloper",
    skillsGainedKeys: ["common.skills.mobilelowcode", "common.skills.uiux", "common.skills.deployment"],
    courseIds: [
      "lce-foundations",
      "lce-logic-workflows",
      "lce-uiux",
      "lce-mobile-dev",
      "lce-security",
      "lce-devops",
      "lce-capstone",
    ],
    durationKey: "common.duration.14weeks",
    difficulty: "beginner",
    prerequisitesKeys: [],
  },
  {
    id: "lce-ai",
    titleKey: "programs.lceAi",
    descKey: "programs.lceAiDesc",
    icon: "🤖",
    objectiveKey: "programs.lceAiObj",
    targetRoleKey: "roles.lowCodeAiDeveloper",
    skillsGainedKeys: ["common.skills.aiservices", "common.skills.datamodeling", "common.skills.lowcode"],
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
    durationKey: "common.duration.16weeks",
    difficulty: "intermediate",
    prerequisitesKeys: [],
  },
  {
    id: "product-launch",
    titleKey: "programs.productLaunch",
    descKey: "programs.productLaunchDesc",
    icon: "🚀",
    objectiveKey: "programs.productLaunchObj",
    targetRoleKey: "roles.productManager",
    skillsGainedKeys: ["common.skills.mvpdesign", "common.skills.landingpages", "common.skills.analytics", "common.skills.launchstrat"],
    courseIds: ["product-launch-course"],
    durationKey: "common.duration.6weeks",
    difficulty: "beginner",
    prerequisitesKeys: [],
  },
  {
    id: "ai-workflows",
    titleKey: "programs.aiWorkflows",
    descKey: "programs.aiWorkflowsDesc",
    icon: "🧠",
    objectiveKey: "programs.aiWorkflowsObj",
    targetRoleKey: "roles.aiOpsAnalyst",
    skillsGainedKeys: ["common.skills.prompting", "common.skills.aitoolchains", "common.skills.businessai"],
    courseIds: ["ai-workflow-course"],
    durationKey: "common.duration.8weeks",
    difficulty: "beginner",
    prerequisitesKeys: [],
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
    durationKey: "common.duration.6weeks",
    moduleCount: 8,
    languagesKeys: ["common.langs.typescript", "common.langs.python", "common.langs.go", "common.langs.java"],
    category: "high-code",
    programIds: ["backend-mastery", "api-specialist", "fullstack-mastery"],
    trackId: "backend",
  },
  {
    id: "database-engineering",
    titleKey: "courses.databaseEngineering",
    descKey: "courses.databaseEngineeringDesc",
    icon: "🗄️",
    durationKey: "common.duration.5weeks",
    moduleCount: 6,
    languagesKeys: ["common.langs.sql", "common.langs.typescript"],
    category: "high-code",
    programIds: ["backend-mastery"],
    trackId: "backend",
  },
  {
    id: "backend-advanced",
    titleKey: "courses.backendAdvanced",
    descKey: "courses.backendAdvancedDesc",
    icon: "🔥",
    durationKey: "common.duration.5weeks",
    moduleCount: 10,
    languagesKeys: ["common.langs.typescript", "common.langs.go"],
    category: "high-code",
    programIds: ["backend-mastery"],
    trackId: "backend",
  },
  {
    id: "api-design-advanced",
    titleKey: "courses.apiDesignAdvanced",
    descKey: "courses.apiDesignAdvancedDesc",
    icon: "🔗",
    durationKey: "common.duration.4weeks",
    moduleCount: 6,
    languagesKeys: ["common.langs.typescript", "common.langs.python"],
    category: "high-code",
    programIds: ["api-specialist"],
    trackId: "backend",
  },
  {
    id: "frontend-engineering",
    titleKey: "courses.frontendEngineering",
    descKey: "courses.frontendEngineeringDesc",
    icon: "🎨",
    durationKey: "common.duration.14weeks",
    moduleCount: 20,
    languagesKeys: ["common.langs.typescript", "common.langs.javascript"],
    category: "high-code",
    programIds: ["frontend-mastery", "fullstack-mastery"],
    trackId: "frontend",
  },
  {
    id: "fullstack-integration",
    titleKey: "courses.fullstackIntegration",
    descKey: "courses.fullstackIntegrationDesc",
    icon: "🔗",
    durationKey: "common.duration.6weeks",
    moduleCount: 10,
    languagesKeys: ["common.langs.typescript"],
    category: "high-code",
    programIds: ["fullstack-mastery"],
    trackId: "fullstack",
  },
  {
    id: "ai-native",
    titleKey: "courses.aiNative",
    descKey: "courses.aiNativeDesc",
    icon: "🤖",
    durationKey: "common.duration.18weeks",
    moduleCount: 26,
    languagesKeys: ["common.langs.python", "common.langs.typescript"],
    category: "high-code",
    programIds: ["ai-engineering"],
    trackId: "ai",
  },
  {
    id: "data-eng",
    titleKey: "courses.dataEng",
    descKey: "courses.dataEngDesc",
    icon: "📊",
    durationKey: "common.duration.16weeks",
    moduleCount: 22,
    languagesKeys: ["common.langs.python", "common.langs.sql", "common.langs.scala"],
    category: "high-code",
    programIds: ["data-engineering"],
    trackId: "data",
  },
  {
    id: "devops",
    titleKey: "courses.devops",
    descKey: "courses.devopsDesc",
    icon: "☁️",
    durationKey: "common.duration.14weeks",
    moduleCount: 18,
    languagesKeys: ["common.langs.go", "common.langs.python", "common.langs.bash"],
    category: "high-code",
    programIds: ["devops-cloud"],
    trackId: "devops",
  },
  {
    id: "system-design-course",
    titleKey: "courses.systemDesign",
    descKey: "courses.systemDesignDesc",
    icon: "🏗️",
    durationKey: "common.duration.12weeks",
    moduleCount: 16,
    languagesKeys: ["common.langs.agnostic"],
    category: "high-code",
    programIds: ["system-design"],
    trackId: "system-design",
  },
  {
    id: "automation",
    titleKey: "courses.automation",
    descKey: "courses.automationDesc",
    icon: "🔄",
    durationKey: "common.duration.8weeks",
    moduleCount: 12,
    languagesKeys: ["common.langs.javascript", "common.langs.sql"],
    category: "low-code",
    programIds: ["business-automation"],
    trackId: "automation",
  },
  {
    id: "api-integration-course",
    titleKey: "courses.apiIntegration",
    descKey: "courses.apiIntegrationDesc",
    icon: "🔌",
    durationKey: "common.duration.10weeks",
    moduleCount: 14,
    languagesKeys: ["common.langs.javascript", "common.langs.python"],
    category: "low-code",
    programIds: ["api-integration"],
    trackId: "api-integration",
  },
  {
    id: "internal-tools-course",
    titleKey: "courses.internalTools",
    descKey: "courses.internalToolsDesc",
    icon: "🛠️",
    durationKey: "common.duration.6weeks",
    moduleCount: 10,
    languagesKeys: ["common.langs.sql", "common.langs.javascript"],
    category: "low-code",
    programIds: ["internal-tools"],
    trackId: "internal-tools",
  },
  {
    id: "hce-frontend-101",
    titleKey: "courses.hceFrontend101",
    descKey: "courses.hceFrontend101Desc",
    icon: "🎨",
    durationKey: "common.duration.4weeks",
    moduleCount: 12,
    languagesKeys: ["common.langs.typescript", "common.langs.javascript"],
    category: "high-code",
    programIds: ["frontend-mastery"],
    trackId: "frontend",
  },
  // Low‑code engineering courses
  {
    id: "lce-foundations",
    titleKey: "courses.lceFoundations",
    descKey: "courses.lceFoundationsDesc",
    icon: "🧩",
    durationKey: "common.duration.1week",
    moduleCount: 4,
    languagesKeys: ["common.langs.lowcode"],
    category: "low-code",
    programIds: [
      "lce-app", "lce-bpm", "lce-enterprise", "lce-integrate", "lce-mobile", "lce-ai",
    ],
    trackId: "lce-foundations",
  },
  {
    id: "lce-data-modeling",
    titleKey: "courses.lceDataModeling",
    descKey: "courses.lceDataModelingDesc",
    icon: "📊",
    durationKey: "common.duration.2weeks",
    moduleCount: 6,
    languagesKeys: ["common.langs.lowcode", "common.langs.sql"],
    category: "low-code",
    programIds: ["lce-app", "lce-enterprise", "lce-integrate", "lce-ai"],
    trackId: "lce-data-modeling",
  },
  {
    id: "lce-logic-workflows",
    titleKey: "courses.lceLogicWorkflows",
    descKey: "courses.lceLogicWorkflowsDesc",
    icon: "🧵",
    durationKey: "common.duration.2weeks",
    moduleCount: 8,
    languagesKeys: ["common.langs.lowcode"],
    category: "low-code",
    programIds: ["lce-app", "lce-bpm", "lce-enterprise", "lce-integrate", "lce-mobile", "lce-ai"],
    trackId: "lce-logic-workflows",
  },
  {
    id: "lce-uiux",
    titleKey: "courses.lceUiUx",
    descKey: "courses.lceUiUxDesc",
    icon: "🎨",
    durationKey: "common.duration.1week",
    moduleCount: 5,
    languagesKeys: ["common.langs.lowcode"],
    category: "low-code",
    programIds: ["lce-app", "lce-mobile"],
    trackId: "lce-uiux",
  },
  {
    id: "lce-security",
    titleKey: "courses.lceSecurity",
    descKey: "courses.lceSecurityDesc",
    icon: "🔒",
    durationKey: "common.duration.2weeks",
    moduleCount: 7,
    languagesKeys: ["common.langs.lowcode"],
    category: "low-code",
    programIds: ["lce-app", "lce-bpm", "lce-enterprise", "lce-integrate", "lce-mobile", "lce-ai"],
    trackId: "lce-security",
  },
  {
    id: "lce-integration-apis",
    titleKey: "courses.lceIntegrationApis",
    descKey: "courses.lceIntegrationApisDesc",
    icon: "🔌",
    durationKey: "common.duration.2weeks",
    moduleCount: 7,
    languagesKeys: ["common.langs.lowcode", "common.langs.rest"],
    category: "low-code",
    programIds: ["lce-app", "lce-bpm", "lce-enterprise", "lce-integrate"],
    trackId: "lce-integration-apis",
  },
  {
    id: "lce-ai-services",
    titleKey: "courses.lceAiServices",
    descKey: "courses.lceAiServicesDesc",
    icon: "🤖",
    durationKey: "common.duration.2weeks",
    moduleCount: 6,
    languagesKeys: ["common.langs.lowcode", "common.langs.ai"],
    category: "low-code",
    programIds: ["lce-app", "lce-ai"],
    trackId: "lce-ai-services",
  },
  {
    id: "lce-mobile-dev",
    titleKey: "courses.lceMobileDev",
    descKey: "courses.lceMobileDevDesc",
    icon: "📱",
    durationKey: "common.duration.2weeks",
    moduleCount: 6,
    languagesKeys: ["common.langs.lowcode"],
    category: "low-code",
    programIds: ["lce-mobile", "lce-app"],
    trackId: "lce-mobile-dev",
  },
  {
    id: "lce-devops",
    titleKey: "courses.lceDevops",
    descKey: "courses.lceDevopsDesc",
    icon: "🛠️",
    durationKey: "common.duration.2weeks",
    moduleCount: 7,
    languagesKeys: ["common.langs.lowcode", "common.langs.devops"],
    category: "low-code",
    programIds: ["lce-enterprise", "lce-app"],
    trackId: "lce-devops",
  },
  {
    id: "lce-advanced",
    titleKey: "courses.lceAdvanced",
    descKey: "courses.lceAdvancedDesc",
    icon: "🔥",
    durationKey: "common.duration.2weeks",
    moduleCount: 7,
    languagesKeys: ["common.langs.lowcode", "common.langs.javascript"],
    category: "low-code",
    programIds: ["lce-app", "lce-bpm", "lce-enterprise", "lce-integrate", "lce-ai"],
    trackId: "lce-advanced",
  },
  {
    id: "lce-capstone",
    titleKey: "courses.lceCapstone",
    descKey: "courses.lceCapstoneDesc",
    icon: "🎓",
    durationKey: "common.duration.4weeks",
    moduleCount: 1,
    languagesKeys: ["common.langs.lowcode"],
    category: "low-code",
    programIds: [
      "lce-app", "lce-bpm", "lce-enterprise", "lce-integrate", "lce-mobile", "lce-ai",
    ],
    trackId: "lce-capstone",
  },

  {
    id: "product-launch-course",
    titleKey: "courses.productLaunch",
    descKey: "courses.productLaunchDesc",
    icon: "🚀",
    durationKey: "common.duration.6weeks",
    moduleCount: 8,
    languagesKeys: ["common.langs.nocode"],
    category: "low-code",
    programIds: ["product-launch"],
    trackId: "product-launch",
  },
  {
    id: "ai-workflow-course",
    titleKey: "courses.aiWorkflow",
    descKey: "courses.aiWorkflowDesc",
    icon: "🧠",
    durationKey: "common.duration.8weeks",
    moduleCount: 10,
    languagesKeys: ["common.langs.ai"],
    category: "low-code",
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
