import { CourseEnhanced } from './types';

export const nceUiUx: CourseEnhanced = {
    id: "NCE-UIUX",
    titleKey: "courses.nceUiUx",
    descKey: "courses.nceUiUxDesc",
    icon: "🎨",
    duration: "3 weeks",
    languages: ["CSS (Conceptual)", "Flexbox", "Grid", "Style Variables", "Hex/HSL"],
    category: "no-code",
    programIds: ["NCE-APP", "NCE-WEB", "NCE-MOBILE"],
    trackId: "nce",
    level: "beginner",
    prerequisites: ["NCE-FOUND"],
    targetAudience: "Aspiring visual designers and no-code developers who want to bridge the gap between 'pretty design' and 'functional engineering' using professional layout principles.",
    learningOutcomes: [
        "Implement professional 'Visual Hierarchy' to guide user attention through complex application views",
        "Master the 'Box Model' and 'Flexbox' layouts visually to create 100% responsive interfaces",
        "Architect a reusable 'Design System' inside no-code builders using Style Variables and Components",
        "Design 'State-Driven UI' that provides instant visual feedback for every user interaction",
        "Ensure 100% Accessibility (WCAG) compliance using semantic structure and contrast validation"
    ],
    modules: [
        {
            id: "NCE-UIUX-M1",
            title: "The Architecture of Sight: Visual Hierarchy",
            description: "How to use scale, color, and contrast to engineer attention.",
            sequenceNumber: 1,
            estimatedHours: 10,
            topics: ["NCE-UIUX-M1-T1", "NCE-UIUX-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Apply the 'F-Pattern' and 'Z-Pattern' to layout complex data dashboards",
                "Use 'White Space' as a functional engineering tool to reduce cognitive load",
                "Select harmonious color palettes that align with brand psychology"
            ]
        },
        {
            id: "NCE-UIUX-M2",
            title: "Layout Engineering: Flexbox & Grid",
            description: "Designing for every screen size from smartwatches to ultra-wide monitors.",
            sequenceNumber: 2,
            estimatedHours: 12,
            topics: ["NCE-UIUX-M2-T1", "NCE-UIUX-M2-T2"],
            prerequisiteModuleIds: ["NCE-UIUX-M1"],
            outcomes: [
                "Configure 'Flex Containers' to distribute items evenly across dynamic widths",
                "Master 'Breakpoints' to trigger fundamental layout shifts for mobile users",
                "Explain the 'Box Model' (Padding vs Margin) to solve alignment bugs visually"
            ]
        },
        {
            id: "NCE-UIUX-M3",
            title: "Atomic Design: Building Systems, Not Pages",
            description: "Architecting a reusable UI library to speed up development by 400%.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["NCE-UIUX-M3-T1", "NCE-UIUX-M3-T2"],
            prerequisiteModuleIds: ["NCE-UIUX-M2"],
            outcomes: [
                "Deconstruct a UI into Atoms, Molecules, and Organisms",
                "Implement 'Global Style Variables' for fonts and colors to enable instant re-branding",
                "Create 'Synced Components' with visual properties (Parameters) for maximum reusability"
            ]
        },
        {
            id: "NCE-UIUX-M4",
            title: "Interaction Design & Feedback",
            description: "Bringing the app to life with micro-animations and state transitions.",
            sequenceNumber: 4,
            estimatedHours: 10,
            topics: ["NCE-UIUX-M4-T1", "NCE-UIUX-M4-T2"],
            prerequisiteModuleIds: ["NCE-UIUX-M3"],
            outcomes: [
                "Design 'Hover' and 'Active' states for every interactive element",
                "Implement 'Skeleton Loaders' to improve perceived performance during data fetching",
                "Configure visual 'Toast' notifications for success and error handling"
            ]
        },
        {
            id: "NCE-UIUX-M5",
            title: "Accessibility & Inclusive Design",
            description: "Engineering for everyone, including those with visual or motor impairments.",
            sequenceNumber: 5,
            estimatedHours: 8,
            topics: ["NCE-UIUX-M5-T1", "NCE-UIUX-M5-T2"],
            prerequisiteModuleIds: ["NCE-UIUX-M4"],
            outcomes: [
                "Verify 'Color Contrast' ratios to meet WCAG AA/AAA standards",
                "Add 'Alt Text' and 'ARIA Labels' to visual elements for screen readers",
                "Design 'Keyboard Friendly' navigation paths for power users and the disabled"
            ]
        }
    ],
    topics: [
        {
            id: "NCE-UIUX-M1-T1",
            moduleId: "NCE-UIUX-M1",
            sequenceNumber: 1,
            title: "Visual Hierarchy: Guiding the Eye",
            estimatedMinutes: 180,
            what: "Visual Hierarchy is the arrangement of elements in a way that implies importance. In no-code UI, this is achieved through 'Scale' (Bigger = More important), 'Contrast' (Bright = Actionable), and 'Proximity' (Close = Related).",
            why: "If everything is loud, nothing is heard. Without hierarchy, a user feels overwhelmed and eventually leaves the app. A well-engineered hierarchy tells the user exactly where to look first (e.g., the 'Sign Up' button) and where to look second (e.g., the 'Terms of Service').",
            when: "Every time you place more than one element on a canvas.",
            how: "1. Identify the 'Primary Action' for the page. 2. Make it the most visually distinct (Size/Color). 3. Use 'Heading Levels' (H1, H2, H3) to structure text content. 4. Use 'Grouping' (Containers) to separate unrelated sections of data.",
            ecosystem: "Design tools (Figma), No-code Builders (Webflow, Framer, Bubble), Color Theory plugins.",
            realWorld: "The 'Stripe' dashboard is considered a masterclass in no-code-style hierarchy. Despite having hundreds of data points, your eye is immediately drawn to the 'Total Volume' chart (Scale) and the 'Payments' tab (Active State). They use subtle grays for metadata so it doesn't compete with the vital business stats.",
            useCases: [
                "Designing a clean, high-converting landing page for a SaaS",
                "Building a complex analytics dashboard that highlights 'Alerts'",
                "Organizing a multi-layered navigation menu for an e-commerce store"
            ],
            advantages: [
                "Usability: Users don't have to 'think' to find what they need",
                "Conversion: Guide users toward specific business goals (Sales/Leads)",
                "Trust: Professional hierarchy makes the app feel 'Stable' and 'Expensive'"
            ],
            disadvantages: [
                "Creative Bias: It’s tempting to prioritize 'Beauty' over 'Functional Hierarchy'"
            ],

            interviewTip: "If asked 'How do you decide what goes at the top of a page?', answer: 'I prioritize based on user intent. If they are on a checkout page, the \"Pay Now\" button is the only H1-equivalent focus. Everything else is secondary metadata.'",
            resumeBullet: "Redesigned a client-facing portal using advanced visual hierarchy principles, resulting in a 40% increase in user task-completion speed.",

            videos: [
                { type: "public", title: "The 5 Laws of Visual Hierarchy", author: "Flux Academy", views: "400K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "UI Design for No-Coders", author: "CharliMarieTV", views: "100K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Interaction Design Foundation", rating: 4.9, title: "Visual Design Core", instructor: "Mads Soegaard", enrolled: "50K+", duration: "25 hours", url: "https://www.interaction-design.org/courses/visual-design" }
            ],
            blogs: [
                { type: "Core", title: "Visual Hierarchy: Principles & Practice", publisher: "Adobe Design", readTime: "20 min", url: "https://xd.adobe.com/ideas/process/ui-design/visual-hierarchy-principles-ui-design-examples/" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Wall of Text", category: "UX Design", estimatedTime: "3 hours",
                    scenarioDescription: "A helpdesk app shows every ticket in a giant list. All text is 14px black. Users are complaining they can't see which tickets are 'Urgent' or 'New'. Even the Ticket ID looks the same as the Description.",
                    problemAnalysis: "This is 'Visual Leveling'. There is zero contrast. We need to 1. Bold the Ticket IDs. 2. Use a 'Red Label' for Urgent status. 3. Increase the font size for the Ticket Subject. 4. Lighten the color of the 'Created Date' so it fades into the background unless the user looks for it.",
                    architectureLayers: ["UI Theming Layer", "Typography System", "Component State Rendering"],
                    toolsAndTech: [{ name: "Conditional Styling", justification: "By applying a dynamic class: `if(Ticket.Status == 'Urgent') { background: '#FF0000', color: '#FFFFFF' }`, we use Hierarchy to solve a massive usability friction point. The eye will now jump straight to the errors, saving the support team hours of scanning." }],
                    tradeOffs: ["Adding too many colors can lead to 'Color Fatigue'; use bright colors sparingly for only the most vital alerts."],
                    nfrConsiderations: ["Legibility: Contrast must remain high even on small mobile screens."],
                    kpis: ["Achieve 100% user identification of 'Urgent' tickets within 1 second of page load."],
                    keyInsights: "Contrast is the volume control of your design. Turn it up for the important parts."
                }
            ],
            playgrounds: [
                {
                    title: "The Hierarchy Lab",
                    description: "Visualizing scale and contrast.",
                    examples: [
                        {
                            language: "CSS (Conceptual)",
                            code: "/* PRIMARY FOCUS */\n.btn-confirm { font-size: 24px; font-weight: 800; color: #00FF00; }\n\n/* SECONDARY FOCUS */\n.btn-cancel { font-size: 16px; font-weight: 400; color: #888888; text-decoration: underline; }"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "design/hierarchy-v1",
                commitMessage: "design: implemented tiered typography and color contrast for enhanced dashboard readability",
                files: [{ name: "Design/Typography.json", type: "file", content: "font styles" }],
                activeFileSnippet: { filename: "Hierarchy.md", code: "H1: 32px Bold -> Body: 16px Regular -> Metadata: 12px Light Gray" }
            },
            community: {
                aiSummary: "The interface is a conversation. Visual hierarchy is the emphasis you put on your words. Without it, you are just mumbling at the user.",
                solutions: []
            }
        },
        {
            id: "NCE-UIUX-M2-T1",
            moduleId: "NCE-UIUX-M2",
            sequenceNumber: 1,
            title: "Layout Engineering: The Flexbox Mental Model",
            estimatedMinutes: 240,
            what: "Flexbox (Flexible Box) is a layout model that allows elements to align and distribute space within a container, even when their size is unknown or dynamic. In no-code builders (Bubble, Webflow), this is the most important setting for 'Responsive Design'—ensuring your app looks good on an iPhone 13 and a 4K Monitor simultaneously.",
            why: "The old way of 'Absolute Positioning' (dragging things to exact X/Y pixels) breaks as soon as the screen width changes. Flexbox allows you to say 'Keep these 3 buttons centered and spaced apart, and if the screen gets too small, stack them vertically.' This 'Geometric Intelligence' is what makes modern apps feel premium and fluid.",
            when: "Every time you build a navigation bar, a list of items (Repeating Group), or a multi-column landing page.",
            how: "1. Set the Parent Container to 'Flex' (or 'Layout: Row/Column' in Bubble). 2. Choose the 'Direction' (Horizontal/Vertical). 3. Set 'Justify' (Spacing along the axis) and 'Align' (Spacing across the axis). 4. Set 'Flex-Wrap' to allow elements to drop to a new line on smaller screens.",
            ecosystem: "CSS Flexbox Standard (implemented visually in Webflow, Framer, Bubble, FlutterFlow).",
            realWorld: "The 'Twitter' (X) feed is a complex vertical Flexbox. Each tweet is a child 'Column' container. Inside each tweet, the 'Like/Retweet' icons are a horizontal Flexbox with 'Space-Between' alignment. This allows the icons to stay perfectly spaced regardless of whether you are viewing on a narrow phone or a wide iPad.",
            useCases: [
                "Building a responsive navigation bar that hides elements on mobile",
                "Designing a 'Service Card' grid that shifts from 3 columns to 1 column",
                "Centering a login form perfectly in the middle of a user's screen"
            ],
            advantages: [
                "Responsiveness: Designs adapt instantly to any width without manual resizing",
                "Stability: Elements don't 'Overlap' or 'Float Away' as data length changes",
                "Speed: Aligning items perfectly takes 2 clicks instead of 20 manual drags"
            ],
            disadvantages: [
                "Learning Curve: Understanding the difference between 'Main Axis' and 'Cross Axis' takes practice"
            ],

            interviewTip: "If asked 'How do you center an item in Webflow or Bubble?', don't say 'I drag it'. Say 'I set the parent container to Flex, justify-center, and align-center.' This shows you understand the underlying CSS engine.",
            resumeBullet: "Architected a 100% responsive component library using Flexbox and CSS Grid, reducing mobile-specific layout bugs by 90%.",

            videos: [
                { type: "public", title: "Flexbox in 10 Minutes", author: "DesignCourse", views: "1M views", duration: "10:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Bubble's New Layout Engine", author: "BuildCamp", views: "40K views", duration: "25:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Webflow University", rating: 4.9, title: "Flexbox Deep Dive", instructor: "McGuire Brannon", enrolled: "300K+", duration: "5 hours", url: "https://university.webflow.com/lesson/flexbox" }
            ],
            blogs: [
                { type: "Core", title: "A Complete Guide to Flexbox", publisher: "CSS-Tricks", readTime: "40 min", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Hard", title: "The Mobile Overlap", category: "Layout Engineering", estimatedTime: "4 hours",
                    scenarioDescription: "A horizontal navbar has 6 links. On Desktop, it looks great. On iPhone, the links are overlapping each other and bleeding off the right side of the screen. The user can't click the 'Login' button.",
                    problemAnalysis: "The navbar is likely set to a 'Fixed Width' or a horizontal row that doesn't 'Wrap'. We need to 1. Set the navbar to `flex-wrap: wrap;` (so links drop down) OR 2. Use a 'Breakpoint' to hide the 6 links at 768px and show a 'Hamburger Menu' icon instead.",
                    architectureLayers: ["CSS Layout Engine", "Media Query System (Breakpoints)", "Component Visibility Hierarchy"],
                    toolsAndTech: [{ name: "Response Breakpoints", justification: "By using a 'Conditional Visibility' rule: `Visible when screen_width < 768px`, we solve the overlap problem by fundamentally changing the UI for the mobile use case. This is standard professional responsive engineering." }],
                    tradeOffs: ["A hamburger menu hides navigation, adding one extra click, but saves the UI from being unusable."],
                    nfrConsiderations: ["Accessibility: Touch targets for mobile navigation must be at least 44px x 44px."],
                    kpis: ["Achieve 100% 'Non-Overlapping' navigation status across all standard device viewports (320px to 1920px)."],
                    keyInsights: "Don't fight the screen size. Let the layout flow into it."
                }
            ],
            playgrounds: [
                {
                    title: "The Flexbox Visualizer",
                    description: "Understanding Directions.",
                    examples: [
                        {
                            language: "Flex Configuration",
                            code: "Parent {\n  Display: Flex;\n  Direction: Column; /* VERTICAL STACK */\n  Justify: Space-Between; /* MAX DISTANCE */\n  Align: Center; /* HORIZONTAL CENTER */\n}"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "ui/flex-layout",
                commitMessage: "ui: migrated all absolute-positioned landing page sections to a responsive flexbox architecture",
                files: [{ name: "UI/GridSystem.json", type: "file", content: "grid settings" }],
                activeFileSnippet: { filename: "Layout.md", code: "Container: Flex-Row -> Wrap: Enabled -> Item-Growth: Fill Available Space" }
            },
            community: {
                aiSummary: "The 'Grid' and 'Flex' are the skeletal system of your app. If the bones are straight and flexible, the skin (visuals) will look perfectly healthy.",
                solutions: []
            }
        }
    ],
    videoCount: 280,
    articleCount: 165,
    problemCount: 110,
    capstoneProject: {
        title: "The Responsive Design System Showcase",
        description: "You will build the visual foundation for a complete SaaS application. First, you will architect a comprehensive 'Design System' including a Global Color Palette (using HSL variables), a Typography Scale (H1-H6), and a Grid System (12-column flex). You will build reaching 'Master Components' for every UI element (Buttons, Inputs, Cards) including their Hover, Focused, and Disabled states. Next, you will assemble a complex 'Data Dashboard' that perfectly adapts from a multi-column desktop view to a single-column swipeable mobile interface using Flexbox Wrap and Media Queries. Finally, you will perform an 'Accessibility Audit' on your interface, ensuring that all elements are navigable by keyboard and meet the 4.5:1 contrast requirement for color-blind users. This project proves you are not just a 'No-Coder', but a Visual Engineer capable of building professional, accessible enterprise software.",
        estimatedDays: 14,
        skillsFocused: [
            "Layout Engineering (Flexbox/Grid)",
            "Design System Architecture (Style Variables)",
            "Atomic Design (Components & Parameters)",
            "Adaptive UI (Mobile Breakpoints)",
            "WCAG Accessibility Compliance"
        ],
        steps: [
            {
                title: "Phase 1: The Atomic Foundation",
                description: "Configure all style variables and build the core reusable component library (Atoms)."
            },
            {
                title: "Phase 2: The Complex Organism",
                description: "Assemble the main high-fidelity dashboard view using the component library."
            },
            {
                title: "Phase 3: The Response Test",
                description: "Configure 3 mobile breakpoints and implement the layout shifts (e.g. Nav-to-Hamburger conversion)."
            },
            {
                title: "Phase 4: The Inclusion Audit",
                description: "Validate color contrast and add ARIA labels to ensure 100% accessible compliance."
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
