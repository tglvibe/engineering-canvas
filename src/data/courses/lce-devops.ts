import { CourseEnhanced } from './types';

export const lceDevops: CourseEnhanced = {
  id: "LCE-DEVOPS",
  titleKey: "courses.lceDevops",
  descKey: "courses.lceDevopsDesc",
  icon: "♾️",
  duration: "3 weeks",
  languages: ["YAML (CI/CD Config)", "Jenkins/Azure DevOps (Conceptual)", "Visual Deployment Flow", "Automated Testing Scripts", "API Governance"],
  category: "low-code",
  programIds: ["LCE-APP", "LCE-ENTERPRISE", "LCE-BPM"],
  trackId: "lce",
  level: "intermediate",
  prerequisites: ["LCE-FOUND", "LCE-LOGIC"],
  targetAudience: "Professional low-code developers and IT operations managers who need to automate the application lifecycle, from one-click deployment to multi-environment CI/CD pipelines and automated quality gates.",
  learningOutcomes: [
    "Master the 'Enterprise Deployment Lifecycle'—Development, Testing, Acceptance, and Production (DTAP)—within a professional low-code platform.",
    "Implement 'Automated CI/CD Pipelines' using platform-native tools and external orchestrators like Jenkins or Azure DevOps.",
    "Apply 'Automated Testing' strategies, including Unit Tests (Logic), Integration Tests (APIs), and UI Regression Tests (Selenium/Playwright).",
    "Establish 'Environment Governance' rules, managing versioning, hotfixes, and rollback procedures for critical production apps.",
    "Utilize 'Monitoring & Analytics' boards to track app health, performance bottlenecks, and user adoption in real-time."
  ],
  modules: [
    {
      id: "LCE-DEVOPS-M1",
      title: "The DTAP Pipeline & Multi-Environment Setup",
      description: "Managing the journey from Dev to Prod.",
      sequenceNumber: 1,
      estimatedHours: 10,
      topics: ["LCE-DEVOPS-M1-T1", "LCE-DEVOPS-M1-T2"],
      prerequisiteModuleIds: [],
      outcomes: [
        "Configure 'Staging environments' for high-fidelity user acceptance testing (UAT).",
        "Perform a 'Deployment Impact Analysis' to detect breaking changes before moving to Prod.",
        "Implement 'One-Click Publish' vs 'Gated Promotion' policies based on project risk."
      ]
    },
    {
      id: "LCE-DEVOPS-M2",
      title: "Automated CI/CD Orchestration",
      description: "Automating the boring parts of deployment.",
      sequenceNumber: 2,
      estimatedHours: 12,
      topics: ["LCE-DEVOPS-M2-T1", "LCE-DEVOPS-M2-T2"],
      prerequisiteModuleIds: ["LCE-DEVOPS-M1"],
      outcomes: [
        "Integrate low-code platforms with 'Azure DevOps Pipelines' or 'GitHub Actions' using platform APIs.",
        "Design 'Automated Deployment Scripts' that run migrations and refresh caches during downtime.",
        "Configure 'Release Toggles' (Feature Flags) to enable code in Production without showing it to users yet."
      ]
    },
    {
      id: "LCE-DEVOPS-M3",
      title: "Quality Gates & Automated Testing",
      description: "Ensure the 'Visual Code' never breaks.",
      sequenceNumber: 3,
      estimatedHours: 12,
      topics: ["LCE-DEVOPS-M3-T1", "LCE-DEVOPS-M3-T2"],
      prerequisiteModuleIds: ["LCE-DEVOPS-M2"],
      outcomes: [
        "Develop 'Unit Tests' for complex visual logic flows to guarantee 100% calculation accuracy.",
        "Implement 'API Integration Tests' that verify external service contracts automatically on every build.",
        "Configure 'Automated UI Testing' that mimics user navigation across 5 different device profiles."
      ]
    },
    {
      id: "LCE-DEVOPS-M4",
      title: "Monitoring, Logging & Incident Response",
      description: "Observability for low-code systems.",
      sequenceNumber: 4,
      estimatedHours: 10,
      topics: ["LCE-DEVOPS-M4-T1", "LCE-DEVOPS-M4-T2"],
      prerequisiteModuleIds: ["LCE-DEVOPS-M3"],
      outcomes: [
        "Analyze 'Error Logs' and 'Performance Dashboards' to pinpoint slow database queries.",
        "Implement 'Real-Time Alerting' (Slack/Teams) for critical system exceptions.",
        "Conduct a 'Post-Mortem' analysis based on logged system events after a production incident."
      ]
    },
    {
      id: "LCE-DEVOPS-M5",
      title: "Governance, Versioning & Rollbacks",
      description: "Safe hands on the steering wheel.",
      sequenceNumber: 5,
      estimatedHours: 8,
      topics: ["LCE-DEVOPS-M5-T1", "LCE-DEVOPS-M5-T2"],
      prerequisiteModuleIds: ["LCE-DEVOPS-M4"],
      outcomes: [
        "Master 'Semantic Versioning' (Major.Minor.Patch) for low-code application modules.",
        "Perform a 'Zero-Downtime Rollback' to previous stable versions in an emergency.",
        "Establish 'Code Review' policies for visual flows to ensure best practices across a large team."
      ]
    }
  ],
  topics: [
    {
      id: "LCE-DEVOPS-M1-T1",
      moduleId: "LCE-DEVOPS-M1",
      sequenceNumber: 1,
      title: "The DTAP Pipeline: Corporate Deployment Standards",
      estimatedMinutes: 180,
      what: "The DTAP (Development, Testing, Acceptance, Production) Pipeline is the industry-standard way of moving software from the developer's laptop to the end-user. In LCE, you don't 'Copy/Paste' files. You use the platform's 'LifeCycle Manager' to promote your app. Each stage has a purpose: Dev is for building; Testing is for bugs; Acceptance (UAT) is for the Business to approve; Prod is where real users live.",
      why: "Deploying directly to production is a recipe for disaster—one tiny logic error can wipe out a million rows of data. A gated DTAP pipeline ensures that 'Quality Gates' (Tests and Approvals) are met at every step, reducing production downtime by 90% and ensuring that only 'Verified' software reaches the customer.",
      when: "Every time a low-code application is intended for more than 5 users or handles sensitive business data.",
      how: "1. Create the 4 environments in the Cloud Console. 2. Define the 'Approval Chains' (e.g. Finance must click Approve before UAT move). 3. Use the 'One-Click Publish' only in Dev. 4. Use 'Staged Deployment' for all other moves.",
      ecosystem: "CI/CD (Continuous Integration/Continuous Deployment), Release Management, Environment Variable management.",
      realWorld: "A major European bank used a 5-stage DTAP pipeline for their Mendix-built 'Mortgage Approval' engine. They added a 'Security Staging' environment where the app was automatically scanned for vulnerabilities before hitting the 'Acceptance' stage. Result: Zero security breaches over 3 years and a 100% success rate for production releases.",
      useCases: [
        "Building a multi-region deployment map for a global logistics system",
        "Implementing a 'Feature Flag' system that allows hidden beta-testing in Production",
        "Designing a 'Hotfix' workflow for patching critical bugs in under 30 minutes safely"
      ],
      advantages: [
        "Reliability: No 'Cowboy Coding' in Production.",
        "Traceability: See exactly WHO deployed WHAT, and WHY, for auditing purposes.",
        "Parallelism: Multiple teams can work on different 'Versions' (Dev vs. UAT) seamlessly."
      ],
      disadvantages: [
        "Overhead: Professional pipelines require more coordination and planning than 'Publish-and-Pray'."
      ],

      interviewTip: "If asked 'How do you handle a failed production deployment?', answer: 'I follow the 3R rule: Roll-back, Report, and Review. I immediately revert to the last stable version using the platform's version history. I then analyze the Error Logs to find the root cause before attempting reaching Prod again.'",
      resumeBullet: "Engineered a robust multi-environment DTAP pipeline for an enterprise low-code suite, ensuring 99.9% deployment stability and automated quality gating.",

      videos: [
        { type: "public", title: "CI/CD Pipelines: What are they?", author: "IBM Technology", views: "1M views", duration: "10:45", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "OutSystems LifeCycle Management", author: "OutSystems Academy", views: "20K views", duration: "14:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Udacity", rating: 4.8, title: "DevOps for Software Architects", instructor: "Nutanix", enrolled: "40K+", duration: "12 hours", url: "https://www.udacity.com/course/devops-for-software-architects--nd054" }
      ],
      blogs: [
        { type: "Core", title: "Low-Code DevOps: The New Frontier", publisher: "DZone", readTime: "25 min", url: "https://dzone.com/articles/low-code-devops-best-practices" }
      ],
      scenarios: [
        {
          id: "1.1", difficulty: "Medium", title: "The Rogue Publish", category: "Governance", estimatedTime: "4 hours",
          scenarioDescription: "A junior developer accidentally clicks 'Publish' in the Production environment during lunch, uploading a half-finished layout that breaks the 'Submit Order' button.",
          problemAnalysis: "This is a 'Lack of Environment Lockdown'. No developer should have 'Write Access' to Production directly. The solution is 'Environment Hardening'. Production should be 'Read-Only' for developers. The ONLY way to update Prod is through a 'Deployment Plan' reviewed by a Lead Developer.",
          architectureLayers: ["User Permission Layer (RBAC)", "Environment Lock Policy", "Audit Log Bridge"],
          toolsAndTech: [{ name: "Environment Security Policies", justification: "By restricting Prod-access to a Service Account or a specific 'Release Manager' role, we eliminate the risk of 'Accidental Publishes' and ensure all changes follow the official review process." }],
          tradeOffs: ["A tiny delay for deployments since you need a second pair of eyes, but it prevents 100% of 'Accidental Downtime'."],
          nfrConsiderations: ["Governance: 100% of production changes must be authorized by a senior team member."],
          kpis: ["Achieve 0 'Unauthorized Production Changes' per year."],
          keyInsights: "Production is a sacred space. Lock the door."
        }
      ],
      playgrounds: [
        {
          title: "The Environment Mapper",
          description: "Visualizing the Promotion flow.",
          examples: [
            {
              language: "Logic Flow",
              code: "DEV [Code] -> TEST [Bugs?] -> ACC [Business OK?] -> PROD [Live!]"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "infra/lockdown-prod",
        commitMessage: "infra: restricted production publishing rights to authorized release managers for improved governance",
        files: [{ name: "Governance/EnvironmentRoles.json", type: "file", content: "rbac-metadata" }],
        activeFileSnippet: { filename: "Lockdown.md", code: "PROD_PUBLISH: DENY ALL; ALLOW Role: Release_Manager;" }
      },
      community: {
        aiSummary: "DevOps in low-code is about 'Safety First.' Automate the tests, lock the production environment, and sleep better at night.",
        solutions: []
      }
    },
    {
      id: "LCE-DEVOPS-M3-T1",
      moduleId: "LCE-DEVOPS-M3",
      sequenceNumber: 1,
      title: "Automated Testing: The Quality Gate",
      estimatedMinutes: 240,
      what: "Automated Testing in LCE is the practice of writing 'Checkers' that verify your app works before you deploy it. This includes 'Unit Tests' (testing a single logic action), 'Integration Tests' (testing API handshakes), and 'End-to-End UI Tests' (Selenium/Playwright scripts that literally click the buttons for you on a browser).",
      why: "As a low-code app grows to hundreds of screens and thousands of logic flows, it becomes impossible for a human to test everything manually. One small change in a 'CalculateTax' action could break 10 different apps. Automated tests run 1,000 checks in 60 seconds, finding the 'Regression' (the new bug) before a user ever sees it.",
      when: "Every time you build a piece of 'Critical Business Logic' (Calculations, Security, API writing).",
      how: "1. Create a 'Test Action' in the platform. 2. Input a known value (e.g. 100). 3. Assert the expected output (e.g. 120 with tax). 4. Configure the CI/CD pipeline to FAIL the build if any test returns 'FALSE'.",
      ecosystem: "Unit Testing, BDD (Behavior Driven Development), TDD (Test Driven Development), Playwright, Selenium, Postman Collections.",
      realWorld: "An international e-commerce firm uses 500 automated UI tests for their Mendix checkout app. Every night, a 'Bot' opens a browser, adds a 'T-Shirt' to the cart, types a 'Visa' number, and clicks 'Buy'. If the 'Thank You' page doesn't appear in under 5 seconds, the lead developer gets a SMS alert. Result: They caught 50+ bugs last year before a single customer was affected.",
      useCases: [
        "Writing a unit test suite for a 'Pension Calculator' with complex legal rules",
        "Implementing an 'API Smoke Test' that checks if Salesforce is responding every 10 minutes",
        "Developing a 'Visual Regression' test that detects if a CSS change moved a button by 1 pixel"
      ],
      advantages: [
        "Unbeatable Confidence: You know the app works because it proved it.",
        "Refactoring Safety: You can rewrite old logic without fear of breaking hidden features.",
        "Developer Speed: You don't have to manually click through the app 50 times after every change."
      ],
      disadvantages: [
        "Flakiness: UI tests can sometimes fail because of a slow network, not a real bug. They require maintenance."
      ],

      interviewTip: "If asked 'What is your testing strategy?', answer: 'I follow the \"Testing Pyramid.\" I write 70% Unit Tests (fast and cheap), 20% Integration/API Tests, and 10% UI Tests (slow and expensive). This ensures maximum coverage with minimum maintenance overhead.'",
      resumeBullet: "Designed and implemented an automated testing framework for a high-traffic low-code application, achieving 80% logic-layer test coverage and reducing manual QA time by 100 hours per month.",

      videos: [
        { type: "public", title: "Unit Testing for Low-Code Developers", author: "Pragmatic Test Lab", views: "15K views", duration: "22:10", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Playwright UI Testing in 10 Minutes", author: "Program with Erik", views: "100K views", duration: "10:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Test Automation University", rating: 4.9, title: "Introduction to Test Automation", instructor: "Angie Jones", enrolled: "200K+", duration: "5 hours", url: "https://testautomationuniversity.applitools.com/" }
      ],
      blogs: [
        { type: "Technical", title: "The Pyamid of Low-Code Quality", publisher: "ThoughtWorks", readTime: "25 min", url: "https://www.thoughtworks.com/insights/blog/the-testing-pyramid-simplified" }
      ],
      scenarios: [
        {
          id: "3.1", difficulty: "Hard", title: "The Broken Calculator", category: "Regression Testing", estimatedTime: "6 hours",
          scenarioDescription: "A developer fixes a bug in the 'Tax Calculation' for New York. They don't realize they accidentally broke the calculation for California at the same time. The error is only found 3 weeks later when 1,000 customers have been billed incorrectly.",
          problemAnalysis: "This is a 'Lack of Regression Tests'. The fix for NY changed a shared 'TaxLogic' action. If the developer had a 'California Unit Test', it would have failed instantly during the save, and the bug would never have reached the server.",
          architectureLayers: ["Logic Unit Test Layer", "Global Regression Suite", "CI/CD Build Stop"],
          toolsAndTech: [{ name: "Automated Mocking", justification: "By creating 'Mock Data' for CA, NY, and TX, we can test all tax scenarios in 1 second without needing a live database, ensuring that fixing one bug doesn't create another." }],
          tradeOffs: ["Writing tests takes 20% more time per feature up-front, but saves 1000% of the time spent on emergency production hotfixes."],
          nfrConsiderations: ["Quality: The financial logic must have 100% test pass rate for all supported regions."],
          kpis: ["Achieve 0% regression bugs in production for 'Core Calculation' flows."],
          keyInsights: "Don't trust your eyes; trust your asserts."
        }
      ],
      playgrounds: [
        {
          title: "The Assert Master",
          description: "Visualizing the Test Case.",
          examples: [
            {
              language: "JSON (Test Case)",
              code: "{\n  \"TestAction\": \"Calc_Tax\",\n  \"Inputs\": { \"Amount\": 100, \"Region\": \"CA\" },\n  \"ExpectedOutput\": 108.25,\n  \"Result\": \"PASS\"\n}"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "test/tax-logic-regression",
        commitMessage: "test: added comprehensive unit test suite for tax calculation logic to prevent regional regressions",
        files: [{ name: "Tests/TaxTests.oml", type: "file", content: "test-metadata" }],
        activeFileSnippet: { filename: "Asserts.md", code: "Assert(Tax(100, 'CA') == 108.25, 'CA Tax Error');" }
      },
      community: {
        aiSummary: "Manual testing is an expensive hobby. Automated testing is a professional requirement.",
        solutions: []
      }
    }
  ],
  videoCount: 420,
  articleCount: 280,
  problemCount: 190,
  capstoneProject: {
    title: "The Bulletproof Enterprise Pipeline",
    description: "In this mastery project, you will architect the 'Operations Backbone' for a mission-critical banking app. You will configure a 4-stage DTAP pipeline (Dev, QA, Stage, Prod). You will develop a suite of 20 'Unit Tests' covering the core loan-approval logic. You must implement a 'Quality Gate'—if any test fails, or if the 'Security Scan' finds a flaw, the app must automatically block the deployment to QA. You will build a 'Real-Time Visibility Dashboard' showing app response times and error rates across all environments. Finally, you will simulate a 'Rollback'—deploying a version with a known bug and restoring service in under 2 minutes. This project proves you are an elite 'Low-Code Ops' engineer, capable of managing large-scale, high-safety application lifecycles.",
    estimatedDays: 14,
    skillsFocused: [
      "Enterprise CI/CD & DTAP Pipeline Management",
      "Automated Logic & API Test Engineering",
      "Deployment Quality Gating & Security Scanning",
      "Production Monitoring & Incident Visibility",
      "Safe Version Management & Rollback Recovery"
    ],
    steps: [
      {
        title: "Phase 1: The Pipeline Blueprint",
        description: "Configure the multi-environment landscape and set up the promotion approval chains."
      },
      {
        title: "Phase 2: The Logic Guard",
        description: "Develop the Unit and Integration test suite that protects the core business rules."
      },
      {
        title: "Phase 3: The Automated Gatekeeper",
        description: "Integrate the tests into the CI/CD pipeline so builds automatically stop on quality failure."
      },
      {
        title: "Phase 4: Operations Mastery",
        description: "Configure the Monitoring dashboards and perform the 'Zero-Downtime Rollback' rescue mission."
      }
    ]
  },
  totalEstimatedHours: 90,
  estimatedCompletionDays: 25,
  moduleCount: 6,
  createdAt: "2026-02-28T00:00:00Z",
  updatedAt: "2026-02-28T00:00:00Z",
  version: "1.0",
  status: "published"
};