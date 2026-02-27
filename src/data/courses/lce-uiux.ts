import { CourseEnhanced } from './types';

export const lceUiux: CourseEnhanced = {
  id: "LCE-UIUX",
  titleKey: "courses.lceUiux",
  descKey: "courses.lceUiuxDesc",
  icon: "🎨",
  duration: "3 weeks",
  languages: ["CSS (Advanced)", "Design Tokens", "Low-Code UI Modeler", "HTML5", "Sass (Conceptual)"],
  category: "low-code",
  programIds: ["LCE-APP", "LCE-MOBILE"],
  trackId: "lce",
  level: "intermediate",
  prerequisites: ["LCE-FOUND"],
  targetAudience: "Developers and designers who want to move beyond default platform templates and build high-fidelity, brand-aligned, and extremely usable interfaces in a professional low-code environment.",
  learningOutcomes: [
    "Master the 'Professional Design System' approach in low-code, creating reusable themes and style guides across multiple apps.",
    "Implement 'Advanced Responsive Layouts' using visual grid-systems and fine-tuned CSS overrides for niche devices.",
    "Apply 'Accessibility' standards (WCAG 2.1) within a visual environment, ensuring screen-reader and keyboard compliance.",
    "Optimize 'UI Performance' by managing asset loading, reducing DOM complexity, and using platform-specific rendering techniques.",
    "Design 'Micro-Interactions' and animations that feel native and premium, enhancing the overall user experience."
  ],
  modules: [
    {
      id: "LCE-UIUX-M1",
      title: "Design Systems & Tokens: The Foundation",
      description: "Moving from ad-hoc styling to enterprise-grade themes.",
      sequenceNumber: 1,
      estimatedHours: 10,
      topics: ["LCE-UIUX-M1-T1", "LCE-UIUX-M1-T2"],
      prerequisiteModuleIds: [],
      outcomes: [
        "Explain the concept of 'Design Tokens' and how they map to visual platform variables.",
        "Create a 'Base Theme' that automatically propagates brand changes (colors, fonts) across all screens.",
        "Implement 'Dark Mode' using platform-specific theme switching logic."
      ]
    },
    {
      id: "LCE-UIUX-M2",
      title: "Advanced Layout Engineering",
      description: "Flexbox, Grid, and Custom CSS in a visual world.",
      sequenceNumber: 2,
      estimatedHours: 12,
      topics: ["LCE-UIUX-M2-T1", "LCE-UIUX-M2-T2"],
      prerequisiteModuleIds: ["LCE-UIUX-M1"],
      outcomes: [
        "Construct complex 'Holy Grail' layouts without breaking native platform responsiveness.",
        "Write and maintain 'Custom CSS Overrides' that follow platform best practices (avoiding 'important' tags).",
        "Implement 'Conditional Visibility' patterns that don't clutter the DOM."
      ]
    },
    {
      id: "LCE-UIUX-M3",
      title: "Professional Component Design",
      description: "Building the building blocks of your application.",
      sequenceNumber: 3,
      estimatedHours: 10,
      topics: ["LCE-UIUX-M3-T1", "LCE-UIUX-M3-T2"],
      prerequisiteModuleIds: ["LCE-UIUX-M2"],
      outcomes: [
        "Design 'Composite Components' (e.g. Card vs List) with clear input parameters.",
        "Implement 'Placeholder' patterns for dynamic content injection.",
        "Analyze component 'Reusability' vs 'Specificity' for large-scale projects."
      ]
    },
    {
      id: "LCE-UIUX-M4",
      title: "The Human Element: UX & Accessibility",
      description: "Designing for every user on every device.",
      sequenceNumber: 4,
      estimatedHours: 12,
      topics: ["LCE-UIUX-M4-T1", "LCE-UIUX-M4-T2"],
      prerequisiteModuleIds: ["LCE-UIUX-M3"],
      outcomes: [
        "Perform an 'Accessibility Audit' using automated and manual testing tools within the platform.",
        "Implement 'Tab-Order' and 'Focus Management' for keyboard-only users.",
        "Design 'Adaptive Mobile Layouts' that change behavior between Portrait and Landscape."
      ]
    },
    {
      id: "LCE-UIUX-M5",
      title: "UI Performance & Micro-Interactions",
      description: "Making your app feel alive and fast.",
      sequenceNumber: 5,
      estimatedHours: 6,
      topics: ["LCE-UIUX-M5-T1", "LCE-UIUX-M5-T2"],
      prerequisiteModuleIds: ["LCE-UIUX-M4"],
      outcomes: [
        "Implement 'Skeleton Loading' patterns to improve perceived performance.",
        "Create smooth 'State Transitions' between screens using visual animation builders.",
        "Identify and fix 'DOM Bloat' caused by excessive nesting in visual containers."
      ]
    }
  ],
  topics: [
    {
      id: "LCE-UIUX-M1-T1",
      moduleId: "LCE-UIUX-M1",
      sequenceNumber: 1,
      title: "The Design System Mindset",
      estimatedMinutes: 180,
      what: "A Design System in LCE is a collection of reusable components, standards, and 'Design Tokens' (variables like PrimaryColor, BasePadding, HeaderFont) that ensure visual consistency across an entire suite of applications. Instead of styling every button individually, you define a 'Global Theme.' When the company rebrands, you change the theme in one place, and 500 different screens automatically update.",
      why: "In enterprise software, inconsistency is a sign of poor quality. If a 'Delete' button is Red in App A but Orange in App B, users get confused. A Design System creates a 'Shared Language' between designers and developers, speeding up the build process by 40% because you are 'Assembling' rather than 'Drawing.'",
      when: "The very first hour of a new enterprise project.",
      how: "1. Identify the 'Core Tokens' (Colors, Typography, Spacing). 2. Create the 'Theme Library' in your Platform (e.g. OutSystems Style Sheet or Mendix Theme Customizer). 3. Map these tokens to the platform's 'Standard Widgets' (Buttons, Inputs, Headers).",
      ecosystem: "Design Token Standards (W3C), Material Design, Apple Human Interface Guidelines, Brand Style Guides.",
      realWorld: "Intel used a unified design system for their entire internal app landscape built on OutSystems. They developed 30+ reusable 'UI Patterns' (Dashboards, Wizards, Data Grids) that were shared across 10 different global teams. Result: They cut their design-to-production time from 6 months to 6 weeks, while ensuring every app looked exactly like an Intel product.",
      useCases: [
        "Building a multi-app portal for a global airline where the 'Booking' and 'Flight Status' apps must share the same look",
        "Implementing a 'White-Label' system where one app can change styles for 10 different sub-brands instantly",
        "Developing an 'Enterprise UI Kit' to be used by 100 'Citizen Developers' to ensure they don't break branding"
      ],
      advantages: [
        "Consistency: The same 'Vibe' across every screen and every app.",
        "Efficiency: Developers don't spend time debating button padding or colors.",
        "Future-Proofing: Rebranding a 100-page app takes 5 minutes, not 5 days."
      ],
      disadvantages: [
        "Initial Setup: Creating a truly robust Design System requires 1-2 weeks of focused work up-front."
      ],

      interviewTip: "If asked 'How do you handle UI changes in a large project?', answer: 'I never hard-code styles. I implement a \"Design Token\" system using a global theme. This allows for centralized maintenance and ensures that 100% of the UI is governed by a single brand-source.'",
      resumeBullet: "Engineered a scalable enterprise design system for a multi-application portfolio, reducing individual screen design time by 40% through reusable UI tokens.",

      videos: [
        { type: "public", title: "Design Systems vs Style Guides", author: "Figma", views: "200K views", duration: "12:45", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Advanced Theming in OutSystems", author: "OutSystems Developer Hub", views: "15K views", duration: "18:20", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Interaction Design Foundation", rating: 4.8, title: "Design Systems for Enterprise", instructor: "Vitaly Friedman", enrolled: "50K+", duration: "10 hours", url: "https://www.interaction-design.org/courses/design-systems-for-enterprise" }
      ],
      blogs: [
        { type: "Core", title: "Tokens: The DNA of Great UI", publisher: "Salesforce UX", readTime: "25 min", url: "https://medium.com/salesforce-ux/design-tokens-cheatsheet-94a0349b2520" }
      ],
      scenarios: [
        {
          id: "1.1", difficulty: "Medium", title: "The Logo Nightmare", category: "Theming", estimatedTime: "4 hours",
          scenarioDescription: "A company rebrands from 'Navy Blue' to 'Forest Green.' The developer has 200 hard-coded colors across 50 screens. They are spending their whole weekend manually changing hex codes. They are in 'Style Debt.'",
          problemAnalysis: "This is a failure of 'Abstraction.' The solution is to refactor the app to use 'Theme Variables'. We should create a variable `:root { --primary-color: #ForestGreen; }` and apply it everywhere. Now, the color choice is a 'Logical decision' (The Variable) rather than a 'Static fact' (The Hex Code).",
          architectureLayers: ["Theme Variable Layer", "Component Mapping Layer", "Visual UI Logic Layer"],
          toolsAndTech: [{ name: "CSS Variables (Design Tokens)", justification: "By using variables, we decouple the 'Meaning' (Primary Color) from the 'Value' (Green). This is the only way to manage large-scale UI projects." }],
          tradeOffs: ["Refactoring existing hard-coded styles takes time initially, but pays off 100x during the next brand update."],
          nfrConsiderations: ["Maintainability: Brand updates should be sub-5 minute tasks."],
          kpis: ["Reduce 'Brand Update Time' from 20 hours to 10 seconds."],
          keyInsights: "If you type the same #HexCode twice, you should probably have a variable for it."
        }
      ],
      playgrounds: [
        {
          title: "The Token Simulator",
          description: "Visualizing the Variable propagation.",
          examples: [
            {
              language: "CSS",
              code: ":root {\n  --brand-color: #004488;\n}\n\n.btn-primary {\n  background: var(--brand-color);\n}\n/* Change --brand-color to #008844 and all buttons turn Green! */"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "ui/theme-refactor",
        commitMessage: "ui: migrated all hard-coded colors to a centralized Design Token system for global brand management",
        files: [{ name: "UI/Theme_Global.css", type: "file", content: "css-variables" }],
        activeFileSnippet: { filename: "Tokens.css", code: "--primary: red; --secondary: grey; --font: 'Inter';" }
      },
      community: {
        aiSummary: "Ugly apps are a choice. Professional design is a process. Use tokens to scale your creativity.",
        solutions: []
      }
    },
    {
      id: "LCE-UIUX-M2-T1",
      moduleId: "LCE-UIUX-M2",
      sequenceNumber: 1,
      title: "Advanced Layout: Flexbox & Grid in Visual Mode",
      estimatedMinutes: 240,
      what: "Advanced Layout Engineering is the ability to use 'Flexbox' (One-dimensional rows/columns) and 'Grid' (Two-dimensional layouts) within the platform's visual containers. In LCE, you often use 'Section' or 'Box' widgets. However, to achieve truly professional 'Dashboard' or 'Complex Card' layouts that look perfect on both a 27-inch monitor and an iPhone 15, you must understand the underlying CSS principles of `flex-grow`, `justify-content`, and `grid-template-areas`.",
      why: "Default 'Responsive' templates in low-code often fall apart when content varies (e.g. a long username breaking a card). Mastering Flex and Grid allows you to build 'Resilient' layouts that adapt gracefully to any content size or screen width. It avoids the 'Jitter' and 'Layout Shift' commonly seen in poorly built low-code apps.",
      when: "Every time you build a non-standard UI component like a 'Kanban Board,' a 'Calendar,' or a 'Modern Dashboard.'",
      how: "1. Select a Container. 2. Set 'Display' to 'Flex'. 3. Configure 'Gap' (Spacing). 4. Use 'Breakpoints' (Desktop, Tablet, Mobile) to change the 'Direction' from Row to Column.",
      ecosystem: "CSS Flexbox, CSS Grid, Media Queries, Mobile-First Design Principles.",
      realWorld: "A major logistics supplier built a 'Warehouse Monitoring' dashboard that looked great in the office but was unusable on the floor walkers' Samsung Tablets. The developer refactored the layout using 'CSS Grid' with 'Adaptive Templates.' Instead of just shrinking, the dashboard rearranged: 4 columns on Desktop, 2 on Tablet, and 1 on Mobile. The workers could finally read the critical data without scrolling horizontally.",
      useCases: [
        "Building a 'Pinterest-Style' masonry layout for a product catalog",
        "Designing a 'Sidebar + Main' dashboard that collapses on mobile accurately",
        "Developing a 'Responsive Card Grid' that centers itself on large screens"
      ],
      advantages: [
        "Precision: Control the exact behavior of every element during resize.",
        "Resilience: Long text or large images won't 'Explode' the layout.",
        "Cleanliness: Reduces the number of 'Hacks' and 'Spacer' divs needed."
      ],
      disadvantages: [
        "Complexity: Requires a solid understanding of CSS Box Model logic."
      ],

      interviewTip: "If asked 'How do you ensure responsiveness?', answer: 'I use a \"Mobile-First\" approach with Flex and Grid. I avoid fixed widths (px) and rely on relative units (%, fr, rem) and platform breakpoints. I test specifically for \"The Fold\" on 5 different device profiles.'",
      resumeBullet: "Redesigned a mission-critical enterprise dashboard using CSS Grid and Flexbox, improving mobile usability scores by 85%.",

      videos: [
        { type: "public", title: "Flexbox Froggy: The Game", author: "Codepip", views: "1M views", duration: "10:00", url: "https://flexboxfroggy.com/" },
        { type: "public", title: "Visual Layout Best Practices", author: "Webflow University (Conceptual)", views: "500K views", duration: "15:45", url: "https://university.webflow.com/courses/flexbox-course" }
      ],
      moocs: [
        { platform: "FreeCodeCamp", rating: 4.9, title: "Responsive Web Design Certification", instructor: "Quincy Larson", enrolled: "1M+", duration: "300 hours", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" }
      ],
      blogs: [
        { type: "Technical", title: "A Complete Guide to Flexbox", publisher: "CSS-Tricks", readTime: "40 min", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }
      ],
      scenarios: [
        {
          id: "2.1", difficulty: "Hard", title: "The Overlapping Dashboard", category: "Responsive Design", estimatedTime: "6 hours",
          scenarioDescription: "A developer built a nice desktop dashboard. When they look at it on their iPhone, the 'Submit' button overlaps the 'Total' label. It's a 'Component Collision.'",
          problemAnalysis: "This is 'Fixed Layout' thinking. The elements don't have enough 'Flex' to move independently. The solution is to use `flex-wrap` and `auto-margins`. We must tell the container: 'If you run out of room, move the items to the next line.'",
          architectureLayers: ["Flex Layout Layer", "Breakpoint Configuration", "User Testing"],
          toolsAndTech: [{ name: "Flex Wrap & Basis", justification: "By using `flex-basis: 300px` and `flex-wrap: wrap`, the cards will automatically move from a 3-column row to a 1-column stack exactly when the screen matches the card width. It's 'Autonomous Responsiveness'." }],
          tradeOffs: ["A slightly more complex container setup but works on every phone in the world automatically."],
          nfrConsiderations: ["Accessibility: Buttons must be at least 44x44px for thumb-tapping on mobile."],
          kpis: ["Achieve 0% element overlap on all screens from 320px to 2560px width."],
          keyInsights: "Design for the smallest screen first; the rest is easy."
        }
      ],
      playgrounds: [
        {
          title: "The Layout Playground",
          description: "Testing Grid configurations.",
          examples: [
            {
              language: "CSS",
              code: ".dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n/* This creates a grid that adds/removes columns based on available space! */"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "ui/responsive-grid",
        commitMessage: "perf: refactored dashboard using CSS Grid auto-fit for seamless responsiveness across device categories",
        files: [{ name: "UI/Dashboard_Layout.css", type: "file", content: "grid-config" }],
        activeFileSnippet: { filename: "Grid.css", code: "display: grid; gap: 1rem; columns: auto-fill;" }
      },
      community: {
        aiSummary: "Grid is for the big picture. Flex is for the small details. Master both to build pixel-perfect low-code apps.",
        solutions: []
      }
    }
  ],
  videoCount: 380,
  articleCount: 220,
  problemCount: 140,
  capstoneProject: {
    title: "The Ultimate Enterprise Brand Hub",
    description: "In this final project, you will build a 'Theme & Component Library' that could serve a 10,000-person organization. You will design a global Design System with 20+ design tokens for colors, shadows, and fonts. You will build a set of 10 'Smart Components' (Master Cards, Multi-stage Progress Bars, and Adaptive Data Tables) that are used across a mock UI. You must implement a 'Theme Switcher' that allows the user to toggle between 'Light', 'Dark', and 'High-Contrast' (Accessibility) modes. You will perform a full WCAG 2.1 Audit, ensuring 100% keyboard navigability and aria-label compliance. Finally, you will provide a 'Documentation Page' inside your app that shows other developers how to use your components. This project proves you are an elite UI/UX engineer in the low-code space, capable of delivering premium, accessible, and high-performance products.",
    estimatedDays: 14,
    skillsFocused: [
      "Advanced Enterprise Theming & Design Tokens",
      "Building Reusable UI Pattern Libraries",
      "WCAG 2.1 Accessibility Implementation",
      "Dynamic Layout Engineering (Grid/Flex)",
      "UI Performance Profiling & Optimization"
    ],
    steps: [
      {
        title: "Phase 1: The Design Token Architecture",
        description: "Specify and implement the global CSS variable system for all branding primitives."
      },
      {
        title: "Phase 2: The Smart Component Gallery",
        description: "Develop the 10 core reusable UI components with full responsiveness and configurability."
      },
      {
        title: "Phase 3: The Accessibility Hardening",
        description: "Implement the ARIA layers and theme-switching logic to meet 'Triple-A' accessibility standards."
      },
      {
        title: "Phase 4: Launch & Docs",
        description: "Create the developer documentation page and perform a final performance audit of the DOM structure."
      }
    ]
  },
  totalEstimatedHours: 65,
  estimatedCompletionDays: 21,
  moduleCount: 5,
  createdAt: "2026-02-28T00:00:00Z",
  updatedAt: "2026-02-28T00:00:00Z",
  version: "1.0",
  status: "published"
};