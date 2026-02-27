import { CourseEnhanced } from './types';

export const hceFront301: CourseEnhanced = {
    id: "HCE FRONT 301",
    titleKey: "courses.hceFront301",
    descKey: "courses.hceFront301Desc",
    icon: "✨",
    duration: "6 weeks",
    languages: ["TypeScript", "CSS", "React", "Next.js"],
    category: "high-code",
    programIds: ["HCE FRONT", "HCE FULL"],
    trackId: "hce",
    level: "advanced",
    prerequisites: ["HCE FRONT 201"],
    targetAudience: "Senior Frontend Engineers aiming to architect reusable design systems and optimize Web Vitals for global scale.",
    learningOutcomes: [
        "Architect and publish world-class Design Systems using Atomic Design & Storybook",
        "Engineer for Perfect Core Web Vitals (LCP < 1.0s, 0 CLS)",
        "Master React Server Components (RSC) & Streaming SSR Architectures",
        "Implement WCAG 2.2 AA compliant focus-management and screen-reader support",
        "Orchestrate Micro-Frontend architectures via Webpack Module Federation"
    ],
    modules: [
        {
            id: "HCE-FRONT-301-M1",
            title: "Design Systems & Component Architecture",
            description: "Moving from ad-hoc styling to repeatable engineering systems.",
            sequenceNumber: 1,
            estimatedHours: 12,
            topics: ["HCE-FRONT-301-M1-T1", "HCE-FRONT-301-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Create a system of Design Tokens (Colors, Spacing, Typography)",
                "Build a headless component library using Radix UI or Headless UI",
                "Implement Visual Regression Testing in Storybook"
            ]
        },
        {
            id: "HCE-FRONT-301-M2",
            title: "Web Performance & Core Web Vitals",
            description: "Advanced metrics and rendering optimizations.",
            sequenceNumber: 2,
            estimatedHours: 15,
            topics: ["HCE-FRONT-301-M2-T1", "HCE-FRONT-301-M2-T2"],
            prerequisiteModuleIds: ["HCE-FRONT-301-M1"],
            outcomes: [
                "Optimize Largest Contentful Paint (LCP) via critical CSS and image priority",
                "Implement code-splitting patterns (Route-based, Component-based)",
                "Debug Layout shifts using the Chrome Performance tab"
            ]
        },
        {
            id: "HCE-FRONT-301-M3",
            title: "The Modern Server: SSR, ISR & RSC",
            description: "Why the backend is taking over the frontend rendering layer.",
            sequenceNumber: 3,
            estimatedHours: 18,
            topics: ["HCE-FRONT-301-M3-T1", "HCE-FRONT-301-M3-T2"],
            prerequisiteModuleIds: ["HCE-FRONT-301-M2"],
            outcomes: [
                "Architect applications using Next.js App Router (RSC)",
                "Handle mutations with Server Actions and Optimistic UI",
                "Implement Streaming with Suspense for non-blocking data fetching"
            ]
        },
        {
            id: "HCE-FRONT-301-M4",
            title: "Enterprise Scale: Accessibility & Micro-Frontends",
            description: "Scaling to millions of users and hundreds of developers.",
            sequenceNumber: 4,
            estimatedHours: 12,
            topics: ["HCE-FRONT-301-M4-T1", "HCE-FRONT-301-M4-T2"],
            prerequisiteModuleIds: ["HCE-FRONT-301-M3"],
            outcomes: [
                "Achieve WCAG 2.2 compliance for complex UI patterns (Modals, ComboBoxes)",
                "Set up a Micro-Frontend bridge using Module Federation",
                "Manage shared state across distinct MFE applications"
            ]
        }
    ],
    topics: [
        {
            id: "HCE-FRONT-301-M1-T1",
            moduleId: "HCE-FRONT-301-M1",
            sequenceNumber: 1,
            title: "Atomic Design & Component Primitives",
            estimatedMinutes: 240,
            what: "Atomic Design is a methodology (created by Brad Frost) that breaks UI down into five distinct levels: Atoms, Molecules, Organisms, Templates, and Pages. Component Primitives (or 'Headless UI') are unstyled, accessible foundations that handle logic/behavior while allowing engineers to apply custom styling at the 'Atom' level.",
            why: "Without a system, UI development is a 'Copy-Paste' disaster. In an enterprise with 500+ developers, if the 'Brand Red' changes, you shouldn't have to find and replace 4,000 hex codes. Atomic design ensures that changing an 'Atom' updates every 'Page' in the ecosystem instantly.",
            when: "The moment a dev team grows beyond 10-15 people or the company starts managing more than 3 distinct web applications (Consumer, Admin, Marketing).",
            how: "Define Design Tokens in JSON (e.g., `primary-blue: '#0052cc'`). Use a headless library like Radix UI to get 'free' accessibility. Wrap those primitives in your brand's CSS to create your internal component library.",
            ecosystem: "Storybook, Figma, Radix UI, Headless UI, Styled Components, Tailwind CSS, Chromatic.",
            realWorld: "At Airbnb, their 'DLS' (Design Language System) allows a designer to create a component in Figma and have it automatically synced to code via tokens. This reduces UI drift and allows engineers to focus on business logic rather than pixel-pushing.",
            useCases: [
                "Building a unified UI across Web, iOS, and Android (Platform Parity)",
                "Enforcing brand consistency across multiple white-labeled products",
                "Accelerating onboarding: a new dev can build a page using existing blocks in hours, not days"
            ],
            advantages: [
                "Single source of truth for UI/UX",
                "Significantly faster development lifecycle for downstream product teams",
                "Enforced consistency reduces bugs related to inconsistent states"
            ],
            disadvantages: [
                "High initial overhead to build and document properly",
                "Can lead to 'System Stagnation' if the library isn't updated to keep up with design trends"
            ],

            interviewTip: "If asked 'How do you prevent CSS bloat in a large team?', talk about Design Tokens and Component Primitives. Explain that you shouldn't write new CSS for a button; you should consume a 'Button' primitive that already has the brand tokens applied.",
            resumeBullet: "Architected a multi-app Design System using Storybook and Styled Components, reducing frontend code duplication by 65% across 4 global web properties.",

            videos: [
                { type: "public", title: "Atomic Design Principles", author: "Brad Frost", views: "200K views", duration: "45:10", url: "https://www.youtube.com/watch?v=Yi-76pSInS0" },
                { type: "public", title: "Scale Your UI with Design Tokens", author: "Figma", views: "100K views", duration: "12:15", url: "https://www.youtube.com/watch?v=L5K8b_9zU24" }
            ],
            moocs: [
                { platform: "Frontend Masters", rating: 4.9, title: "Design Systems with React & Storybook", instructor: "Emma Bostian", enrolled: "25K+", duration: "10 hours", url: "https://frontendmasters.com/courses/design-systems/" }
            ],
            blogs: [
                { type: "Architecture", title: "The Anatomy of a Design System", publisher: "Sparkbox", readTime: "20 min", url: "https://sparkbox.com/foundry/design_system_anatomy" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Hard", title: "The Brand Refresh Crisis", category: "System Architecture", estimatedTime: "4 hours",
                    scenarioDescription: "A global bank rebrands. They change their primary color from 'Navy Blue' to 'Forest Green'. They have 15 different apps, all using different CSS-in-JS libraries, raw CSS, and Sass. The CEO wants the change live in 24 hours.",
                    problemAnalysis: "The company lacks 'Design Tokens'. The colors are hardcoded as HEX values across 10,000 files. There is no central library to pull from, making a project-wide change an operation of extreme risk and manual labour.",
                    architectureLayers: ["Design Tokens (JSON)", "Component Primitives", "Theming Context Providers"],
                    toolsAndTech: [{ name: "Style Dictionary", justification: "Style Dictionary converts a single JSON of tokens into variables for CSS, Sass, iOS (Swift), and Android (XML), ensuring a rebrand is a single-second deploy for the entire company." }],
                    tradeOffs: ["A centralized system can become a bottleneck if the 'Platform Team' is too slow to approve new component requests."],
                    nfrConsiderations: ["Maintainability: A single engineer should be able to trigger a brand-wide style change without touching product code."],
                    kpis: ["Reduce 'Time-to-UI-Parity' from weeks to minutes."],
                    keyInsights: "Hardcoded colors are technical debt. Use tokens or you will fail at scale."
                }
            ],
            playgrounds: [
                {
                    title: "Token Mapping Sandbox",
                    description: "Seeing how abstract tokens map to concrete component styles.",
                    examples: [
                        {
                            language: "javascript",
                            code: "// 1. Global Tokens (Abstract)\nconst tokens = {\n  colors: { brand: '#0052cc', error: '#de350b' },\n  space: { sm: '4px', md: '8px', lg: '16px' }\n};\n\n// 2. Component Primitives (Implementation)\nconst Button = styled.button`\n  background: ${props => tokens.colors[props.variant]};\n  padding: ${tokens.space.md};\n`;"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "feat/design-system-v1",
                commitMessage: "feat: implemented base design tokens and core 'Button' and 'Input' primitives with Storybook docs",
                files: [{ name: "packages/ui/src/tokens.json", type: "file", content: "token definitions" }],
                activeFileSnippet: { filename: "tokens.json", code: "{\n  \"color\": { \"primary\": { \"value\": \"#0052cc\" } }\n}" }
            },
            community: {
                aiSummary: "The future is Headless. Logic is hard; styling is subjective. Build your logic once into accessible primitives, then theme them forever.",
                solutions: []
            }
        },
        {
            id: "HCE-FRONT-301-M2-T1",
            moduleId: "HCE-FRONT-301-M2",
            sequenceNumber: 1,
            title: "Core Web Vitals & Performance Engineering",
            estimatedMinutes: 240,
            what: "Core Web Vitals are three metrics (LCP, INP, CLS) that Google uses to determine user experience quality. Largest Contentful Paint (Speed), Interaction to Next Paint (Responsiveness), and Cumulative Layout Shift (Visual Stability). Performance Engineering is the discipline of optimizing these via code splitting, asset management, and critical-path delivery.",
            why: "A 1-second delay in mobile load time can drop conversion rates by 20%. If your button jumps 50px right before a user clicks it (CLS), they might accidentally click 'Buy Now' twice or 'Delete'. Google also uses these metrics for SEO rankings; slow sites are buried on page 2.",
            when: "Every day. Performance is a 'budget'. If you add a heavy 1MB library (like a chart library), you must 'pay' for it elsewhere or load it asynchronously.",
            how: "Use `Next/Image` for automatic optimization. Use dynamic imports (`React.lazy`) for code splitting. Use 'Priority Hints' (`fetchpriority='high'`) for the above-the-fold hero image. Audit constantly using Lighthouse and the Performance profiler.",
            ecosystem: "Lighthouse, Vercel Analytics, PageSpeed Insights, Chrome Performance Tab, Web Vitals Library, Vite/Webpack Bundle Analyzers.",
            realWorld: "Amazon famously found that every 100ms of latency cost them 1% in sales. They optimized their critical byte delivery using Server-Side Rendering and Edge Caching to ensure the 'Buy' button is visible in < 500ms on even the slowest devices.",
            useCases: [
                "Optimizing a high-traffic e-commerce landing page for mobile conversions",
                "Fixing layout shift on a news site with dynamic ad placements",
                "Reducing Time-to-Interactive (TTI) for complex SaaS dashboards"
            ],
            advantages: [
                "Massive boost to SEO rankings",
                "Directly correlates with higher user retention and lower bounce rates",
                "Better support for users in developing countries with slow 3G connections"
            ],
            disadvantages: [
                "Optimization can lead to complex code (e.g., manual chunking and prefetching)",
                "Hard to maintain: a single new NPM dependency can ruin months of performance work"
            ],

            interviewTip: "If asked 'How would you improve page speed?', don't just say 'Compress images'. Talk about the 'Critical Rendering Path', 'Code Splitting', and 'Avoiding Main Thread Blocking'. Mention measuring 'Interaction to Next Paint' (INP), the new standard metric.",
            resumeBullet: "Engineered a performance optimization strategy that improved Core Web Vital scores from 'Poor' to 'Excellent', resulting in a 15% increase in organic search traffic.",

            videos: [
                { type: "public", title: "Web Vitals: LCP, CLS, and INP", author: "Google Chrome Developers", views: "150K views", duration: "25:40", url: "https://www.youtube.com/watch?v=AQqFZ5t8u3c" },
                { type: "public", title: "Advanced React Performance Patterns", author: "Codedamn", views: "80K views", duration: "18:20", url: "https://www.youtube.com/watch?v=IIG_un9-F1g" }
            ],
            moocs: [
                { platform: "Udacity", rating: 4.8, title: "Website Performance Optimization", instructor: "Ilya Grigorik (Google)", enrolled: "100K+", duration: "8 hours", url: "https://www.udacity.com/course/website-performance-optimization--ud884" }
            ],
            blogs: [
                { type: "Core", title: "Optimizing the Critical Rendering Path", publisher: "MDN Web Docs", readTime: "30 min", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Hard", title: "The 10-Second Spinner", category: "Performance Analysis", estimatedTime: "3 hours",
                    scenarioDescription: "A marketing landing page takes 10 seconds to load on a mobile device. The lighthouse score is 15/100. The dev team says 'It's because we have 50 large images', but the images are actually only 100kb each.",
                    problemAnalysis: "The real killer is 'JavaScript Execution Time'. The site is loading a massive 2MB 'All-in-one' component bundle that includes every single feature of the app, including complex charts and modals that aren't even on the landing page. This blocks the main thread for 4 seconds, preventing the browser from paintng anything.",
                    architectureLayers: ["Code Splitting Layer", "Bundler Configuration", "Main Thread Budgeting"],
                    toolsAndTech: [{ name: "Webpack Bundle Analyzer", justification: "Visualize exactly what is inside your JS files. Usually, you'll find 'hidden' dependencies like a full Lodash or D3.js library being imported for a tiny single function." }],
                    tradeOffs: ["Too much code splitting can lead to 'Waterfall' requests where the browser waits for one JS file to load the next one."],
                    nfrConsiderations: ["Speed: Time to First Byte (TTFB) < 200ms, LCP < 1.2s."],
                    kpis: ["Improve Lighthouse Performance score from 15 to 95+."],
                    keyInsights: "It's not the images; it's the JavaScript. Stop sending code that isn't being executed right now."
                }
            ],
            playgrounds: [
                {
                    title: "Code Splitting Implementation",
                    description: "Using React.lazy to split a heavy component into its own file.",
                    examples: [
                        {
                            language: "tsx",
                            code: "// ❌ THE SLOW WAY (Imported at start)\nimport HeavyChart from './HeavyChart';\n\n// ✅ THE FAST WAY (Loaded on demand)\nconst HeavyChart = React.lazy(() => import('./HeavyChart'));\n\nfunction Dashboard() {\n  return (\n    <React.Suspense fallback={<Spinner />}>\n      <HeavyChart />\n    </React.Suspense>\n  );\n}"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "perf/code-splitting",
                commitMessage: "perf: implemented route-based code splitting and component-level lazy loading for heavy visualizations",
                files: [{ name: "src/App.tsx", type: "file", content: "lazy rules" }],
                activeFileSnippet: { filename: "App.tsx", code: "const Admin = lazy(() => import('./routes/Admin'));\nconst Shop = lazy(() => import('./routes/Shop'));" }
            },
            community: {
                aiSummary: "The fastest code is the code that NEVER runs. If you can avoid downloading a library until a user clicks, you win the performance war.",
                solutions: []
            }
        },
        {
            id: "HCE-FRONT-301-M3-T1",
            moduleId: "HCE-FRONT-301-M3",
            sequenceNumber: 1,
            title: "RSC & Server Actions: The Next Gen Web",
            estimatedMinutes: 240,
            what: "React Server Components (RSC) are a new paradigm where components run on the server and stream their UI to the client. Unlike SSR (Server-Side Rendering) which hydrates the whole page, RSC sends only the final rendered HTML/Data for static parts, keeping the client bundle tiny. Server Actions allow you to define backend functions (like database writes) directly within your UI components, triggered by standard HTML forms.",
            why: "Traditional React apps have grown too heavy. We send 150KB of JS just to render a static header. RSC moves that logic to the server, where it has direct access to the database (zero-latency queries). Server Actions remove the need for a separate 'API Route' layer, drastically simplifying the architecture.",
            when: "Moving forward, this is the default architecture for Next.js applications and the recommended way to build high-performance React apps by the React core team.",
            how: "Use Next.js 14+ App Router. All components are 'Server' by default. Query your DB with Prisma or Drizzle directly inside the `async function Component()`. Use `'use client'` at the top of a file only if you need `useState` or browser APIs.",
            ecosystem: "Next.js App Router, React Server Components, Server Actions, Edge Runtime, Vercel, Prisma, Drizzle ORM.",
            realWorld: "Platforms like 'Hacker News' clones built with RSC have zero JavaScript on the client for reading stories. Only when you want to 'Comment' or 'Upvote' (Interactivity) does the browser download a tiny bit of JS for that specific component.",
            useCases: [
                "Building e-commerce sites where SEO and low-bundle size are mission-critical",
                "Developing internal CRUD tools without writing a separate Express/Node API",
                "Simplifying 'Auth-Checked' data fetching inside the UI layer"
            ],
            advantages: [
                "Massive reduction in JavaScript sent to the client (up to 95% for content sites)",
                "Drastically simpler developer experience (DX) - no more `useEffect(fetch)`",
                "Better security - database keys never leave the server environment"
            ],
            disadvantages: [
                "Steep learning curve and 'Paradigm Shift' from traditional React",
                "Requires specialized server infrastructure (cannot be hosted on static S3/Netlify)"
            ],

            interviewTip: "Differentiate clearly between 'SSR' (the server generates HTML once at start) and 'RSC' (the server always handles parts of the component tree, and sends a specific format to the live client without reloading). Mention that RSC never hydrates.",
            resumeBullet: "Engineered a Next.js 14 enterprise application using React Server Components, achieving a 75% reduction in client-side JS and improving first-load TTI by 2.0s.",

            videos: [
                { type: "public", title: "React Server Components Explained", author: "Fireship", views: "650K views", duration: "12:45", url: "https://www.youtube.com/watch?v=tjSRE7_Tll4" },
                { type: "public", title: "Next.js 14 Server Actions Masterclass", author: "Josh W. Comeau", views: "120K views", duration: "35:10", url: "https://www.youtube.com/watch?v=FNop86o0Yks" }
            ],
            moocs: [
                { platform: "Next.js Official", rating: 5.0, title: "Next.js Foundations & App Router", instructor: "Vercel Team", enrolled: "500K+", duration: "20 hours", url: "https://nextjs.org/learn" }
            ],
            blogs: [
                { type: "Technical", title: "RSC: From the React Team", publisher: "React Labs", readTime: "40 min", url: "https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components" }
            ],
            scenarios: [
                {
                    id: "3.1", difficulty: "Expert", title: "The Zero-JS Dashboard", category: "Full-Stack UI Architecture", estimatedTime: "5 hours",
                    scenarioDescription: "A massive SaaS dashboard shows 100 widgets. It takes 5 seconds to become 'Interactive' because of the sheer amount of JS needed to hydrate 100 charting components, even if the user only looks at the top 3.",
                    problemAnalysis: "This is 'Hydration Overhead'. The browser is re-running all the JS to attach listeners to static HTML once it arrives. In a modern architecture, we would use RSC for 97 of those widgets, only sending JS for the 3 interactive ones. This eliminates the hydration bottleneck.",
                    architectureLayers: ["Server-Component Layer", "Client-Component Boundaries", "Partial Hydration Zones"],
                    toolsAndTech: [{ name: "Next.js Suspense & Streaming", justification: "Streaming allows us to send the shell of the page immediately, and 'stream' the heavy data-widgets as they finish loading from the DB, without blocking the visual paint of the header/sidebar." }],
                    tradeOffs: ["Testing is harder as you must simulate server-side environment states in your tests."],
                    nfrConsiderations: ["SEO: 100% crawlable content without JS. DX: Unified codebase for DB and UI."],
                    kpis: ["Reduce Client Bundle size from 1.5MB to < 100KB."],
                    keyInsights: "Don't move the data to the client; move the component to the data."
                }
            ],
            playgrounds: [
                {
                    title: "Simple Server Action",
                    description: "Updating the database directly from a React component.",
                    examples: [
                        {
                            language: "tsx",
                            code: "// This function runs 100% on the server!\nasync function createTodo(formData: FormData) {\n  'use server';\n  const text = formData.get('text');\n  await db.todo.create({ data: { text } });\n  revalidatePath('/todos'); // Instant UI Update!\n}\n\nexport default function AddTodo() {\n  return (\n    <form action={createTodo}>\n      <input name=\"text\" />\n      <button type=\"submit\">Add</button>\n    </form>\n  );\n}"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "feat/rsc-migration",
                commitMessage: "feat: migrated product-grid to React Server Components to eliminate client-side API round-trips",
                files: [{ name: "src/app/products/page.tsx", type: "file", content: "server logic" }],
                activeFileSnippet: { filename: "page.tsx", code: "export default async function Page() {\n  const products = await db.product.findMany();\n  return <ProductGrid data={products} />;\n}" }
            },
            community: {
                aiSummary: "The boundary between 'Frontend' and 'Backend' is blurring. If you know React, you are now effectively a Full-Stack developer by default in a Next.js world.",
                solutions: []
            }
        },
        {
            id: "HCE-FRONT-301-M4-T2",
            moduleId: "HCE-FRONT-301-M4",
            sequenceNumber: 2,
            title: "Micro-Frontends & Module Federation",
            estimatedMinutes: 240,
            what: "Micro-Frontends (MFE) is an architectural style where independently deliverable frontend applications are composed into a greater whole. Module Federation (introduced in Webpack 5) is the primary technology that allows a 'Host' app to dynamically load components from a 'Remote' app at runtime without sharing build-time types or dependencies.",
            why: "At enterprise scale (e.g. Amazon, Netflix), having a single repo for the whole site is dangerous. If one team breaks the 'Login' button, the 'Checkout' team can't deploy their fix. MFEs allow teams to deploy independently. If the 'Search' team wants to use Vue while the 'Account' team uses React, they can (though it's not recommended).",
            when: "When your frontend team exceeds 100+ engineers or the codebase becomes so large that 'npm install' or 'npm build' takes 20+ minutes.",
            how: "Configure Webpack's `ModuleFederationPlugin`. Define 'Exposes' in the child app and 'Remotes' in the parent app. Use dynamic imports to fetch the remote code, essentially 'Stitching' the web apps together at the user's browser.",
            ecosystem: "Webpack 5, Module Federation, Single-SPA, Bit.dev, Import Maps, Monorepos (Nx, Turborepo).",
            realWorld: "IKEA and Spotify use Micro-Frontends. The 'Header' and 'Sidebar' might be owned by a 'Platform Team', while the 'Shopping Cart' is a completely separate application owned by the 'Commerce Team'. They are built and deployed on different schedules but look like one app to the user.",
            useCases: [
                "Migrating a massive legacy jQuery app to React piece-by-piece",
                "Enabling independent deployment cycles for different product features",
                "Integrating a specialized 3rd party tool as an seamless part of your app"
            ],
            advantages: [
                "Decoupled deployment cycles - no more 'Deployment Congestion'",
                "Smaller, more manageable codebases for individual teams",
                "Technology agnostic (at the cost of bundle size)"
            ],
            disadvantages: [
                "Incredibly high architectural complexity",
                "Risk of 'Dependency Bloat' if not careful (loading 3 versions of React)",
                "Hard to maintain global CSS and state consistency"
            ],

            interviewTip: "If asked 'How do you scale a frontend team?', talk about Micro-Frontends. Mention 'Module Federation' as the technical solution, but warn that it should only be used as a 'Last Resort' for massive organizations because of the overhead.",
            resumeBullet: "Implemented a Micro-Frontend architecture using Webpack Module Federation, enabling 6 different agile teams to deploy independently without cross-team blockers.",

            videos: [
                { type: "public", title: "Microfrontends: The Architecture Explained", author: "Jack Herrington", views: "300K views", duration: "22:15", url: "https://www.youtube.com/watch?v=lKKsjHuk-o0" },
                { type: "public", title: "Webpack Module Federation in 5 Minutes", author: "Codedamn", views: "90K views", duration: "10:30", url: "https://www.youtube.com/watch?v=-ei6RqZilpI" }
            ],
            moocs: [
                { platform: "Udemy", rating: 4.7, title: "Microfrontends with React", instructor: "Stephen Grider", enrolled: "50K+", duration: "12 hours", url: "https://www.udemy.com/course/microfrontend-course/" }
            ],
            blogs: [
                { type: "Architecture", title: "Micro-Frontends Guide", publisher: "Martin Fowler", readTime: "45 min", url: "https://martinfowler.com/articles/micro-frontends.html" }
            ],
            scenarios: [
                {
                    id: "4.2", difficulty: "Expert", title: "The Deployment Gridlock", category: "Organization Architecture", estimatedTime: "6 hours",
                    scenarioDescription: "A large enterprise has a single 'Big Repo'. The 'Checkout' team has a critical bug fix, but they can't deploy because the 'Landing Page' team broke the integration tests in an unrelated part of the app. The build takes 45 minutes to run.",
                    problemAnalysis: "The company has a monolithic frontend. This architectural 'Tight Coupling' means everyone depends on everyone else's code for a successful build. We need to split the app into 'Domain-Driven' modules that can be built and tested in isolation.",
                    architectureLayers: ["Shell/Host Application", "Remote Module Provider", "Shared Library Layer"],
                    toolsAndTech: [{ name: "Turborepo & Module Federation", justification: "Turborepo speeds up local 'Monorepo' builds by caching tasks. Module Federation allows the Shell app to pull the 'Checkout' app's build artifact directly at runtime, even if the 'Landing Page' app is broken." }],
                    tradeOffs: ["Complexity! You now have to manage distributed state and cross-app communication via custom events or a shared bus."],
                    nfrConsiderations: ["Availability: If a 'Remote' app crashes, the 'Host' shell must stay alive and show a fallback UI."],
                    kpis: ["Reduce 'Cycle Time' (Idea to Production) by 50%."],
                    keyInsights: "Architecture is about boundaries. Micro-frontends are the ultimate boundary."
                }
            ],
            playgrounds: [
                {
                    title: "Module Federation Config",
                    description: "Stitching two apps together in Webpack.",
                    examples: [
                        {
                            language: "javascript",
                            code: "// In the Remote App (Provider)\nnew ModuleFederationPlugin({\n  name: 'app_account',\n  filename: 'remoteEntry.js',\n  exposes: { './Profile': './src/Profile' }\n});\n\n// In the Host App (Consumer)\nnew ModuleFederationPlugin({\n  name: 'shell',\n  remotes: { app_account: 'app_account@http://localhost:3001/remoteEntry.js' }\n});"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "arch/module-federation",
                commitMessage: "arch: split account management into a separate remote module to enable independent deployment",
                files: [{ name: "webpack.config.js", type: "file", content: "federation rules" }],
                activeFileSnippet: { filename: "webpack.config.js", code: "remotes: { \n  billing: 'billing@http://cdn.com/billing/remoteEntry.js' \n}" }
            },
            community: {
                aiSummary: "Don't use Micro-Frontends unless you HAVE to. They solve organizational problems, not technical ones. But at 1,000 engineers, they are mandatory.",
                solutions: []
            }
        }
    ],
    videoCount: 210,
    articleCount: 120,
    problemCount: 45,
    capstoneProject: {
        title: "The Enterprise Micro-Frontend Commerce Engine",
        description: "You will architect a high-scale e-commerce platform using the 'Shell and Remotes' pattern. The primary 'Host' application will be built with Next.js (RSC) to ensure perfect SEO and Web Vitals. You will then build a separate 'Remote' React application for the 'Shopping Cart' and 'User Reviews', dynamically federating them into the Shell at runtime. The entire project must utilize a custom Design System built in a shared monorepo package with Storybook documentation. Final verification involves achieving a 95+ Lighthouse score across all metrics.",
        estimatedDays: 20,
        skillsFocused: [
            "Next.js App Router (RSC)",
            "Module Federation",
            "Design Systems (Storybook)",
            "Web Vital Optimization",
            "Monorepo Management (Turborepo)"
        ],
        steps: [
            {
                title: "Foundation: The Monorepo",
                description: "Set up a Turborepo with shared design tokens and a basic UI package."
            },
            {
                title: "Architecture: The Shell",
                description: "Build the Next.js App Router Shell with optimized image and font loading."
            },
            {
                title: "Integration: Module Federation",
                description: "Stitch a legacy or separate React app into the shell using Webpack 5."
            },
            {
                title: "Optimization: The Performance Audit",
                description: "Debug layout shifts and implement critical CSS to hit 'Green' Web Vitals."
            }
        ]
    },
    totalEstimatedHours: 60,
    estimatedCompletionDays: 60,
    moduleCount: 4,
    createdAt: "2026-02-27T00:00:00Z",
    updatedAt: "2026-02-27T00:00:00Z",
    version: "1.0",
    status: "published"
};
