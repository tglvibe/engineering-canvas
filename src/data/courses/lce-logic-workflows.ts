import { CourseEnhanced } from './types';

export const lceLogicWorkflows: CourseEnhanced = {
  id: "LCE-LOGIC",
  titleKey: "courses.lceLogic",
  descKey: "courses.lceLogicDesc",
  icon: "⚙️",
  duration: "4 weeks",
  languages: ["Visual Logic (Action Flows)", "BPMN", "JavaScript (Logic Extension)", "C# (Logic Extension)", "Expression Language"],
  category: "low-code",
  programIds: ["LCE-APP", "LCE-BPM", "LCE-ENTERPRISE"],
  trackId: "lce",
  level: "intermediate",
  prerequisites: ["LCE-FOUND", "LCE-DATA"],
  targetAudience: "Developers and automation specialists who want to master the implementation of complex business logic, asynchronous processes, and enterprise-grade workflows using professional visual modeling standards.",
  learningOutcomes: [
    "Differentiate between 'Client-Side' and 'Server-Side' logic execution environments and implement security-first logic boundaries.",
    "Master 'Asynchronous Processing' and 'Background Tasks' to handle long-running operations without blocking the user experience.",
    "Architect 'Reusable Logic Modules' including Service Actions and Server Actions for scalable, multi-app ecosystems.",
    "Implement 'Error Handling' and 'Exception Management' strategies to ensure system resilience and graceful failures.",
    "Utilize 'BPMN 2.0' (Business Process Model and Notation) concepts to design auditable, long-running human-in-the-loop workflows."
  ],
  modules: [
    {
      id: "LCE-LOGIC-M1",
      title: "Archetypes of Visual Logic",
      description: "From simple IF-statements to complex decision trees.",
      sequenceNumber: 1,
      estimatedHours: 12,
      topics: ["LCE-LOGIC-M1-T1", "LCE-LOGIC-M1-T2"],
      prerequisiteModuleIds: [],
      outcomes: [
        "Explain the 'Sequence of Execution' in a visual action flow.",
        "Implement 'Input/Output Parameters' for logic modularity.",
        "Perform 'Logic Trace' debugging to identify visual flow bottlenecks."
      ]
    },
    {
      id: "LCE-LOGIC-M2",
      title: "Client-Side vs. Server-Side Execution",
      description: "Securing the perimeter of your business rules.",
      sequenceNumber: 2,
      estimatedHours: 15,
      topics: ["LCE-LOGIC-M2-T1", "LCE-LOGIC-M2-T2"],
      prerequisiteModuleIds: ["LCE-LOGIC-M1"],
      outcomes: [
        "Identify 'Security Vulnerabilities' in client-side validations.",
        "Master 'Server-Side Token Validation' for secure logic triggering.",
        "Understand 'Synchronous' vs. 'Asynchronous' server calls."
      ]
    },
    {
      id: "LCE-LOGIC-M3",
      title: "Asynchronous Workflows & Batch Jobs",
      description: "Handling high-volume background operations.",
      sequenceNumber: 3,
      estimatedHours: 12,
      topics: ["LCE-LOGIC-M3-T1", "LCE-LOGIC-M3-T2"],
      prerequisiteModuleIds: ["LCE-LOGIC-M2"],
      outcomes: [
        "Implement 'Timer-Based' background processes (Cron equivalent).",
        "Design 'Worker Patterns' to process large batches of data without timeouts.",
        "Configure 'Retry Policies' for intermittent logic failures."
      ]
    },
    {
      id: "LCE-LOGIC-M4",
      title: "Long-Running Human-in-the-Loop Processes",
      description: "BPM (Business Process Management) in Low-Code.",
      sequenceNumber: 4,
      estimatedHours: 15,
      topics: ["LCE-LOGIC-M4-T1", "LCE-LOGIC-M4-T2"],
      prerequisiteModuleIds: ["LCE-LOGIC-M3"],
      outcomes: [
        "Design 'Approval Workflows' that persist state over weeks or months.",
        "Implement 'Task Assignment' logic for dynamic team-based workloads.",
        "Analyze 'Process Bottlenecks' using visual activity monitoring."
      ]
    },
    {
      id: "LCE-LOGIC-M5",
      title: "Exception Handling & Reliability Engineering",
      description: "Ensuring the system never breaks silently.",
      sequenceNumber: 5,
      estimatedHours: 8,
      topics: ["LCE-LOGIC-M5-T1", "LCE-LOGIC-M5-T2"],
      prerequisiteModuleIds: ["LCE-LOGIC-M4"],
      outcomes: [
        "Create 'Global Exception Handlers' for standardized error reporting.",
        "Implement 'Transaction Rollbacks' to maintain database consistency.",
        "Build 'Admin Dashboards' to monitor and re-run failed background logic."
      ]
    }
  ],
  topics: [
    {
      id: "LCE-LOGIC-M1-T1",
      moduleId: "LCE-LOGIC-M1",
      sequenceNumber: 1,
      title: "Logic Flows: The Visual Canvas",
      estimatedMinutes: 180,
      what: "A Logic Flow is the visual equivalent of a coded function. In LCE, you use a flowchart-like interface to define the 'Start,' 'End,' and 'Nodes' in between. Nodes can be 'Conditionals' (IF), 'Loops' (For-Each), 'Assignments' (Variables), or 'Calls' to other functions. Every node in a professional low-code flow corresponds to an optimized block of generated C# or Java code.",
      why: "Visual logic allows for 'Instant Debugging'—you can literally watch the light travel through the branches of your logic to see which path the computer took. It documentation-centric: the code IS the diagram. This makes 'Handovers' between developers 90% faster because they don't have to read thousands of lines of syntax to understand the 'Intent.'",
      when: "Every time you need to transform data, validate input, or perform a calculation.",
      how: "1. Create a 'New Action.' 2. Drag a 'Conditional' node. 3. Set the 'Expression' (e.g. `Amount > 1000`). 4. Connect the 'True' path to an approval request and the 'False' path to an auto-complete success.",
      ecosystem: "Action Flows (OutSystems), Microflows (Mendix), Power Automate Flows (Microsoft).",
      realWorld: "A global retail firm used Mendix Microflows to implement their 'Dynamic Pricing' logic. The workflow checked inventory levels, competitor prices (via API), and current store time to update product prices every 15 minutes. By using visual flows, their marketing team could 'Read' and 'Verify' the logic without being programmers, ensuring business-technology alignment.",
      useCases: [
        "Implementing a complex calculated field for a mortgage application",
        "Developing a 'Bulk Import' parser that validates 10,000 records line-by-line",
        "Creating a 'Smart Notifications' engine that routes alerts based on user preference"
      ],
      advantages: [
        "Readability: The intent of the logic is obvious at a glance.",
        "Maintenance: Changing a logic path is as simple as dragging a line.",
        "Safety: The platform IDE prevents common errors like 'Null Pointers' or 'Infinite Loops' through static analysis."
      ],
      disadvantages: [
        "Canvas Density: Extremely complex functions (100+ nodes) can become hard to navigate visually if not broken into 'Sub-Actions' (modularization)."
      ],

      interviewTip: "If asked 'How do you structure complex visual logic?', answer: 'I follow the \"Single Responsibility Principle.\" I break down large flows into smaller, reusable \"Sub-Actions.\" This keeps the main flow readable and allows for easier unit testing and debugging of specific logic units.'",
      resumeBullet: "Designed and implemented high-complexity business logic using visual action flows, reducing maintenance time by 50% compared to legacy code implementations.",

      videos: [
        { type: "public", title: "Visual Logic: Thinking in Flows", author: "Pragmatic Engineer", views: "120K views", duration: "14:25", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Advanced Microflow Patterns", author: "Mendix Academy", views: "35K views", duration: "22:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Pluralsight", rating: 4.8, title: "Foundations of Logic and Algorithms", instructor: "David Jarvis", enrolled: "75K+", duration: "6 hours", url: "https://www.pluralsight.com/courses/foundations-logic-algorithms" }
      ],
      blogs: [
        { type: "Core", title: "Visual vs. Textual: The Logic Debate", publisher: "InfoQ", readTime: "25 min", url: "https://www.infoq.com/articles/visual-programming-logic-debate/" }
      ],
      scenarios: [
        {
          id: "1.1", difficulty: "Medium", title: "The Spaghetti Flow", category: "Refactoring", estimatedTime: "4 hours",
          scenarioDescription: "A student build an 'Order Approval' flow with 50 nodes in a single canvas. It has 10 nested IF statements. It is impossible to read or debug. They need to 'Modularize' their logic.",
          problemAnalysis: "The flow violates 'Cognitive Load' standards. The solution is 'Sub-Action Encapsulation'. We should peel the 'Tax Calculation' logic into its own action, and the 'Approval Routing' logic into another. The main flow then becomes a 5-node 'Orchestration' flow.",
          architectureLayers: ["Logical Orchestration Layer", "Service Logic Layer", "Utility Logic Layer"],
          toolsAndTech: [{ name: "Private Server Actions", justification: "By using private actions, we encapsulate messy details and provide a clean, documented interface to the rest of the application." }],
          tradeOffs: ["Adding sub-actions requires extra 'Input/Output' mapping but is mandatory for professional maintainability."],
          nfrConsiderations: ["Maintainability: A new developer must understand the core flow in under 5 minutes."],
          kpis: ["Reduce 'Node Count' in the main orchestration flow by 80%."],
          keyInsights: "If your logic doesn't fit on one screen, it's too big."
        }
      ],
      playgrounds: [
        {
          title: "The Modularity Tester",
          description: "Visualizing the Split.",
          examples: [
            {
              language: "Flow Diagram",
              code: "BEFORE: [Start] -> [IF1] -> [IF2] -> [Logic1] -> [Logic2] -> [End]\nAFTER: [Start] -> [Call: CalcTax] -> [Call: RouteApproval] -> [End]"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "refactor/modular-logic",
        commitMessage: "refactor: encapsulated complex order validation into reusable sub-actions for improved clarity",
        files: [{ name: "Logic/OrderValidation.oml", type: "file", content: "workflow-metadata" }],
        activeFileSnippet: { filename: "Architecture.md", code: "Module: Order_Core; Public: No; Func: Validate_Stock, Calc_Tax;" }
      },
      community: {
        aiSummary: "The best logic is the logic that's easiest to delete. Keep your flows small, modular, and focused.",
        solutions: []
      }
    },
    {
      id: "LCE-LOGIC-M2-T1",
      moduleId: "LCE-LOGIC-M2",
      sequenceNumber: 1,
      title: "Client-Side vs. Server-Side: The Security Wall",
      estimatedMinutes: 240,
      what: "Execution Environment matters. Client-Side logic runs in the user's browser (JavaScript). Server-Side logic runs on the platform's secure CPU (.NET/Java). In LCE, you must decide where code executes. Client-side is for 'UI Snappiness' (e.g., hiding a button instantly). Server-side is for 'Business Truth' (e.g., confirming the user actually HAS enough money in their balance).",
      why: "If you only perform price calculations on the client-side, a user can open 'Inspect Element,' change the price variable to $0.01, and click 'Purchase.' Professional engineers NEVER trust the client. They perform every critical calculation on the server where the user cannot interfere.",
      when: "Every time a piece of logic involves Money, Personal Data, or a Database Write.",
      how: "1. Create a 'Client Action' for visual feedback. 2. Call a 'Server Action' from inside that client action. 3. Perform the 'Final Check' inside the server action using database values, not client values.",
      ecosystem: "Browser Sandbox, Server-Side Security, JWT Authentication, Stateless vs Stateful execution.",
      realWorld: "A major ticketing platform had a 'Price Leak' because they calculated the 'Early Bird Discount' on the client-side. Savvy users manipulated the JS variables to get 90% off. They refactored into 'Server-Side Truth'—the client sends the 'Code,' the server looks up the 'Rate' in the DB and returns the true price. Result: Zero fraudulent purchases since refactor.",
      useCases: [
        "Implementing a 'Live Search' where the UI filters locally for speed but the server verifies permission per result",
        "Designing a 'Password Reset' flow where sensitive tokens never touch the client-side JS variables",
        "Building a 'Form Wizard' that saves progress to the server on every 'Next' click for resilience"
      ],
      advantages: [
        "Security: Server-side logic cannot be spoofed by the end-user.",
        "Precision: The server has direct, low-latency access to the truth (The Database).",
        "Uniformity: Mobile and Web apps can share the same Server Action, ensuring consistent business logic."
      ],
      disadvantages: [
        "Latency: Server calls require a network round-trip. Use 'Loading States' in the UI to manage user expectations."
      ],

      interviewTip: "If asked 'When do you use a Client Action?', answer: 'For UI-only logic: animations, simple show/hide toggles, and formatting. But I never use them for business rules or security. Any logic that changes a database record MUST happen on the server.'",
      resumeBullet: "Engineered a secure multi-tier logic architecture, strictly separating client-side UI feedback from server-side transactional validation.",

      videos: [
        { type: "public", title: "Never Trust the Client: Web Security 101", author: "Hacker101", views: "300K views", duration: "12:45", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "OutSystems: Client vs Server Actions", author: "OutSystems Champions", views: "20K views", duration: "18:20", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Coursera", rating: 4.8, title: "Cybersecurity for Modern App Developers", instructor: "Google", enrolled: "100K+", duration: "20 hours", url: "https://www.coursera.org/professional-certificates/google-cybersecurity" }
      ],
      blogs: [
        { type: "Technical", title: "The Security Gap in Low-Code", publisher: "Dark Reading", readTime: "20 min", url: "https://www.darkreading.com/edge-articles/the-security-risks-of-low-code-no-code" }
      ],
      scenarios: [
        {
          id: "2.1", difficulty: "Hard", title: "The Discount Hacker", category: "Application Security", estimatedTime: "6 hours",
          scenarioDescription: "A student is building an e-commerce app. They have a variable `DiscountRate` which defaults to 0. They added a button that sets `DiscountRate = 0.5` when a valid coupon is typed. They then multiply `Price * (1 - DiscountRate)` on the client and send the 'FinalPrice' to the server for payment.",
          problemAnalysis: "This is a catastrophic security failure. A user can bypass the coupon check and manually set `DiscountRate = 1.0` in the browser dev tools. The server should receive the COUPON STRING, not the price. The server then calculates the discount based on its own internal record of valid coupons.",
          architectureLayers: ["Client Feedback Layer", "Secure Logic Bridge", "Database Truth Layer"],
          toolsAndTech: [{ name: "Server-Side Verification Pattern", justification: "By moving the calculation to the server, we ensure that the price paid is ALWAYS the one authorized by the business, regardless of what the user does to their browser." }],
          tradeOffs: ["A tiny delay for a network call, but it prevents 100% of price-manipulation fraud."],
          nfrConsiderations: ["Security: Price calculations must be immutable from the client-side."],
          kpis: ["Achieve 0% successful fraud attempts in a penetration audit of the checkout workflow."],
          keyInsights: "The server is the only place where 'Truth' lives."
        }
      ],
      playgrounds: [
        {
          title: "The Security Simulator",
          description: "Visualizing the 'Truth' handshake.",
          examples: [
            {
              language: "Logic Flow Config",
              code: "CLIENT: [Click Order] -> [Call: Server_ValidateOrder(Items)]\nSERVER: [Check Stock] -> [Calculate True Price] -> [Create Payment Intent] -> [Return Success]"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "security/server-side-checkout",
        commitMessage: "security: moved all price calculations to the server to prevent client-side parameter tampering",
        files: [{ name: "Server/CheckoutLogic.oml", type: "file", content: "secure-metadata" }],
        activeFileSnippet: { filename: "SecurityAudit.md", code: "FIND: ClientActions CALC Price; RESULT: Removed; IMPLEMENTED: ServerAction Checkout;" }
      },
      community: {
        aiSummary: "Security in low-code is the same as security in high-code. Don't trust the browser. Keep the secrets on the server.",
        solutions: []
      }
    }
  ],
  videoCount: 520,
  articleCount: 340,
  problemCount: 210,
  capstoneProject: {
    title: "The Enterprise Approval & Audit Engine",
    description: "In this final project for the Logic & Workflows course, you will engineer a complex 'Expense Approval' system used by a multi-national corporation. You will implement a multi-stage workflow: 1. Employee submits an expense (Client-side validation). 2. System automatically checks for 'Policy Violations' (Server-side check: e.g. alcohol on a lunch receipt). 3. If under $100, it auto-approves. 4. If over $100, it triggers a 'Long-Running BPM Process' that assigns a task to the Manager. 5. If the manager doesn't act in 48 hours, the system 'Escalates' the task to the Finance Director. You must implement full 'Exception Handling'—if an external API (like a currency converter) is down, the system must log the error and retry every hour. Finally, you will build an 'Admin Audit' view showing every step of the logic for every ticket. This project proves you can build professional-grade, resilient business systems at speed.",
    estimatedDays: 14,
    skillsFocused: [
      "Multi-tier Logic Architecture (Client vs Server)",
      "BPM (Business Process Management) Implementation",
      "Asynchronous Escalation & Timer Logic",
      "Enterprise Exception Handling & Retries",
      "Transaction Integrity & State Persistence"
    ],
    steps: [
      {
        title: "Phase 1: The Logic Blueprint",
        description: "Map out the decision tree and BPM orchestration for the entire approval lifecycle."
      },
      {
        title: "Phase 2: The Core Validation",
        description: "Implement the secure server-side logic that performs 'Policy Checks' and auto-approval rules."
      },
      {
        title: "Phase 3: The Escalation Engine",
        description: "Configure the background timers and async processes that handle human delays and API timeouts."
      },
      {
        title: "Phase 4: Resilience & Audit",
        description: "Build the global error handler and the audit explorer for the finance department."
      }
    ]
  },
  totalEstimatedHours: 90,
  estimatedCompletionDays: 30,
  moduleCount: 5,
  createdAt: "2026-02-28T00:00:00Z",
  updatedAt: "2026-02-28T00:00:00Z",
  version: "1.0",
  status: "published"
};