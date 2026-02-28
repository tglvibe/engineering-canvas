import { CourseEnhanced } from "./types";

export const hceFront101: CourseEnhanced = {
    id: "HCE FRONT 101",
    titleKey: "courses.hceFront101",
    descKey: "courses.hceFront101Desc",
    icon: "🎨",
    durationKey: "common.duration.6weeks",
    languagesKeys: ["common.langs.html", "common.langs.css", "common.langs.javascript"],
    category: "high-code",
    programIds: ["HCE FRONT", "HCE FULL"],
    roleIds: ["front-end", "full-stack", "ui-engineer", "web-developer"],
    trackId: "hce",
    level: "beginner",
    prerequisitesKeys: ["courses.coreCS101", "courses.coreProgPy"],
    targetAudienceKey: "courses.hceFront101.targetAudience",
    learningOutcomesKeys: [
        "courses.hceFront101.outcomes.o1",
        "courses.hceFront101.outcomes.o2",
        "courses.hceFront101.outcomes.o3",
        "courses.hceFront101.outcomes.o4",
        "courses.hceFront101.outcomes.o5",
    ],
    modules: [
        {
            id: "HCE-FRONT-101-M1",
            titleKey: "courses.hceFront101.modules.m1.title",
            descriptionKey: "courses.hceFront101.modules.m1.desc",
            sequenceNumber: 1,
            estimatedHours: 12,
            topics: ["HCE-FRONT-101-M1-T1", "HCE-FRONT-101-M1-T2"],
            prerequisiteModuleIds: [],
            outcomesKeys: [
                "courses.hceFront101.modules.m1.outcomes.o1",
                "courses.hceFront101.modules.m1.outcomes.o2",
            ],
        },
        {
            id: "HCE-FRONT-101-M2",
            titleKey: "courses.hceFront101.modules.m2.title",
            descriptionKey: "courses.hceFront101.modules.m2.desc",
            sequenceNumber: 2,
            estimatedHours: 16,
            topics: ["HCE-FRONT-101-M2-T1", "HCE-FRONT-101-M2-T2"],
            prerequisiteModuleIds: ["HCE-FRONT-101-M1"],
            outcomesKeys: [
                "courses.hceFront101.modules.m2.outcomes.o1",
                "courses.hceFront101.modules.m2.outcomes.o2",
                "courses.hceFront101.modules.m2.outcomes.o3",
            ],
        },
        {
            id: "HCE-FRONT-101-M3",
            titleKey: "courses.hceFront101.modules.m3.title",
            descriptionKey: "courses.hceFront101.modules.m3.desc",
            sequenceNumber: 3,
            estimatedHours: 20,
            topics: ["HCE-FRONT-101-M3-T1", "HCE-FRONT-101-M3-T2"],
            prerequisiteModuleIds: ["HCE-FRONT-101-M2"],
            outcomesKeys: [
                "courses.hceFront101.modules.m3.outcomes.o1",
                "courses.hceFront101.modules.m3.outcomes.o2",
                "courses.hceFront101.modules.m3.outcomes.o3",
            ],
        },
        {
            id: "HCE-FRONT-101-M4",
            titleKey: "courses.hceFront101.modules.m4.title",
            descriptionKey: "courses.hceFront101.modules.m4.desc",
            sequenceNumber: 4,
            estimatedHours: 18,
            topics: ["HCE-FRONT-101-M4-T1", "HCE-FRONT-101-M4-T2"],
            prerequisiteModuleIds: ["HCE-FRONT-101-M3"],
            outcomesKeys: [
                "courses.hceFront101.modules.m4.outcomes.o1",
                "courses.hceFront101.modules.m4.outcomes.o2",
                "courses.hceFront101.modules.m4.outcomes.o3",
            ],
        },
    ],
    topics: [
        // ==========================================
        // MODULE 1 TOPICS
        // ==========================================
        {
            id: "HCE-FRONT-101-M1-T1",
            moduleId: "HCE-FRONT-101-M1",
            sequenceNumber: 1,
            titleKey: "courses.hceFront101.modules.m1.topics.t1.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceFront101.modules.m1.topics.t1.what",
            whyKey: "courses.hceFront101.modules.m1.topics.t1.why",
            whenKey: "courses.hceFront101.modules.m1.topics.t1.when",
            howKey: "courses.hceFront101.modules.m1.topics.t1.how",
            ecosystemKey: "courses.hceFront101.modules.m1.topics.t1.ecosystem",
            realWorldKey: "courses.hceFront101.modules.m1.topics.t1.realWorld",
            useCasesKeys: [
                "courses.hceFront101.modules.m1.topics.t1.useCases.u1",
                "courses.hceFront101.modules.m1.topics.t1.useCases.u2",
                "courses.hceFront101.modules.m1.topics.t1.useCases.u3",
            ],
            advantagesKeys: [
                "courses.hceFront101.modules.m1.topics.t1.advantages.a1",
                "courses.hceFront101.modules.m1.topics.t1.advantages.a2",
                "courses.hceFront101.modules.m1.topics.t1.advantages.a3",
            ],
            disadvantagesKeys: [
                "courses.hceFront101.modules.m1.topics.t1.disadvantages.d1",
            ],
            interviewTipKey: "courses.hceFront101.modules.m1.topics.t1.interviewTip",
            resumeBulletKey: "courses.hceFront101.modules.m1.topics.t1.resumeBullet",

            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m1.topics.t1.videos.v1.title",
                    authorKey: "courses.hceFront101.modules.m1.topics.t1.videos.v1.author",
                    viewsKey: "courses.hceFront101.modules.m1.topics.t1.videos.v1.views",
                    durationKey: "courses.hceFront101.modules.m1.topics.t1.videos.v1.duration",
                    url: "https://www.youtube.com/watch?v=dlboOta2kE0",
                },
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m1.topics.t1.videos.v2.title",
                    authorKey: "courses.hceFront101.modules.m1.topics.t1.videos.v2.author",
                    viewsKey: "courses.hceFront101.modules.m1.topics.t1.videos.v2.views",
                    durationKey: "courses.hceFront101.modules.m1.topics.t1.videos.v2.duration",
                    url: "https://www.youtube.com/watch?v=kGW8AlZZ1kA",
                },
            ],
            moocs: [
                {
                    platform: "Frontend Masters",
                    rating: 4.8,
                    titleKey: "courses.hceFront101.modules.m1.topics.t1.moocs.m1.title",
                    instructorKey: "courses.hceFront101.modules.m1.topics.t1.moocs.m1.instructor",
                    enrolledKey: "courses.hceFront101.modules.m1.topics.t1.moocs.m1.enrolled",
                    durationKey: "courses.hceFront101.modules.m1.topics.t1.moocs.m1.duration",
                    url: "https://frontendmasters.com/courses/web-perf/",
                },
            ],
            blogs: [
                {
                    type: "Architecture",
                    titleKey: "courses.hceFront101.modules.m1.topics.t1.blogs.b1.title",
                    publisherKey: "courses.hceFront101.modules.m1.topics.t1.blogs.b1.publisher",
                    readTimeKey: "courses.hceFront101.modules.m1.topics.t1.blogs.b1.readTime",
                    url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path",
                },
            ],
            scenarios: [
                {
                    id: "HCE-FRONT-101-M1-T1-S1",
                    difficulty: "Medium",
                    titleKey: "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.title",
                    categoryKey: "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.category",
                    estimatedTimeKey: "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.analysis",
                    architectureLayersKeys: [
                        "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.layers.l1",
                        "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.layers.l2",
                        "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.layers.l3",
                    ],
                    toolsAndTech: [
                        {
                            nameKey: "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.tools.t1.name",
                            justificationKey: "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.tools.t1.justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.tradeOffs.t1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.nfr.n1",
                    ],
                    kpisKeys: [
                        "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.kpis.k1",
                    ],
                    keyInsightsKey: "courses.hceFront101.modules.m1.topics.t1.scenarios.s1.insights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceFront101.modules.m1.topics.t1.playgrounds.p1.title",
                    descriptionKey: "courses.hceFront101.modules.m1.topics.t1.playgrounds.p1.desc",
                    examples: [
                        {
                            language: "html",
                            code: "<!-- Blocking vs Non-Blocking Script Testing -->\n<!DOCTYPE html>\n<html>\n<head>\n  <title>CRP Test</title>\n  <!-- 1. Try removing 'defer' and see how rendering is blocked -->\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js\" defer></script>\n</head>\n<body>\n  <h1>CRP Visualization</h1>\n  <p>If the script blocks, this text won't appear until lodash loads.</p>\n</body>\n</html>",
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "feature/semantic-markup",
                files: [
                    {
                        name: "index.html",
                        type: "file",
                        contentKey: "courses.hceFront101.modules.m1.topics.t1.git.f1.content",
                    },
                ],
                commitMessageKey: "courses.hceFront101.modules.m1.topics.t1.git.commit",
                activeFileSnippet: {
                    filename: "index.html",
                    codeKey: "courses.hceFront101.modules.m1.topics.t1.git.snippet",
                },
            },
            community: {
                aiSummaryKey: "courses.hceFront101.modules.m1.topics.t1.community.aiSummary",
                solutions: [
                    {
                        authorInitials: "JD",
                        authorName: "Jane Doe",
                        badgeKey: "Top Solution",
                        roleKey: "Senior Web Architect",
                        levelKey: "Expert",
                        timeAgoKey: "2 days ago",
                        upvotes: 154,
                        comments: 12,
                        contentKey: "courses.hceFront101.modules.m1.topics.t1.community.s1.content",
                    },
                ],
            },
        },
        {
            id: "HCE-FRONT-101-M1-T2",
            moduleId: "HCE-FRONT-101-M1",
            sequenceNumber: 2,
            titleKey: "courses.hceFront101.modules.m1.topics.t2.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceFront101.modules.m1.topics.t2.what",
            whyKey: "courses.hceFront101.modules.m1.topics.t2.why",
            whenKey: "courses.hceFront101.modules.m1.topics.t2.when",
            howKey: "courses.hceFront101.modules.m1.topics.t2.how",
            ecosystemKey: "courses.hceFront101.modules.m1.topics.t2.ecosystem",
            realWorldKey: "courses.hceFront101.modules.m1.topics.t2.realWorld",
            useCasesKeys: [
                "courses.hceFront101.modules.m1.topics.t2.useCases.u1",
                "courses.hceFront101.modules.m1.topics.t2.useCases.u2",
                "courses.hceFront101.modules.m1.topics.t2.useCases.u3",
            ],
            advantagesKeys: [
                "courses.hceFront101.modules.m1.topics.t2.advantages.a1",
                "courses.hceFront101.modules.m1.topics.t2.advantages.a2",
            ],
            disadvantagesKeys: [
                "courses.hceFront101.modules.m1.topics.t2.disadvantages.d1",
                "courses.hceFront101.modules.m1.topics.t2.disadvantages.d2",
            ],
            interviewTipKey: "courses.hceFront101.modules.m1.topics.t2.interviewTip",
            resumeBulletKey: "courses.hceFront101.modules.m1.topics.t2.resumeBullet",

            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m1.topics.t2.videos.v1.title",
                    authorKey: "courses.hceFront101.modules.m1.topics.t2.videos.v1.author",
                    viewsKey: "courses.hceFront101.modules.m1.topics.t2.videos.v1.views",
                    durationKey: "courses.hceFront101.modules.m1.topics.t2.videos.v1.duration",
                    url: "https://www.youtube.com/watch?v=WjDrMKZw6S4",
                },
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m1.topics.t2.videos.v2.title",
                    authorKey: "courses.hceFront101.modules.m1.topics.t2.videos.v2.author",
                    viewsKey: "courses.hceFront101.modules.m1.topics.t2.videos.v2.views",
                    durationKey: "courses.hceFront101.modules.m1.topics.t2.videos.v2.duration",
                    url: "https://www.youtube.com/watch?v=p-ii_pX8Xno",
                },
            ],
            moocs: [
                {
                    platform: "Udacity",
                    rating: 4.7,
                    titleKey: "courses.hceFront101.modules.m1.topics.t2.moocs.m1.title",
                    instructorKey: "courses.hceFront101.modules.m1.topics.t2.moocs.m1.instructor",
                    enrolledKey: "courses.hceFront101.modules.m1.topics.t2.moocs.m1.enrolled",
                    durationKey: "courses.hceFront101.modules.m1.topics.t2.moocs.m1.duration",
                    url: "https://www.udacity.com/course/browser-rendering-optimization--ud860",
                },
            ],
            blogs: [
                {
                    type: "Core",
                    titleKey: "courses.hceFront101.modules.m1.topics.t2.blogs.b1.title",
                    publisherKey: "courses.hceFront101.modules.m1.topics.t2.blogs.b1.publisher",
                    readTimeKey: "courses.hceFront101.modules.m1.topics.t2.blogs.b1.readTime",
                    url: "https://web.dev/howbrowserswork/",
                },
            ],
            scenarios: [
                {
                    id: "HCE-FRONT-101-M1-T2-S1",
                    difficulty: "Hard",
                    titleKey: "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.title",
                    categoryKey: "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.category",
                    estimatedTimeKey: "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.analysis",
                    architectureLayersKeys: [
                        "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.layers.l1",
                        "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.layers.l2",
                        "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.layers.l3",
                    ],
                    toolsAndTech: [
                        {
                            nameKey: "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.tools.t1.name",
                            justificationKey: "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.tools.t1.justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.tradeOffs.t1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.nfr.n1",
                    ],
                    kpisKeys: [
                        "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.kpis.k1",
                    ],
                    keyInsightsKey: "courses.hceFront101.modules.m1.topics.t2.scenarios.s1.insights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceFront101.modules.m1.topics.t2.playgrounds.p1.title",
                    descriptionKey: "courses.hceFront101.modules.m1.topics.t2.playgrounds.p1.desc",
                    examples: [
                        {
                            language: "css",
                            code: "/* Before Autoprefixer */\n.glass-panel {\n  backdrop-filter: blur(10px);\n}\n\n/* After Autoprefixer (Targeting Safari/WebKit) */\n.glass-panel {\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}",
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "fix/safari-compat",
                files: [
                    {
                        name: "postcss.config.js",
                        type: "file",
                        contentKey: "courses.hceFront101.modules.m1.topics.t2.git.f1.content",
                    },
                ],
                commitMessageKey: "courses.hceFront101.modules.m1.topics.t2.git.commit",
                activeFileSnippet: {
                    filename: "postcss.config.js",
                    codeKey: "courses.hceFront101.modules.m1.topics.t2.git.snippet",
                },
            },
            community: {
                aiSummaryKey: "courses.hceFront101.modules.m1.topics.t2.community.aiSummary",
                solutions: [],
            },
        },
        // ==========================================
        // MODULE 2 TOPICS
        // ==========================================
        {
            id: "HCE-FRONT-101-M2-T1",
            moduleId: "HCE-FRONT-101-M2",
            sequenceNumber: 1,
            titleKey: "courses.hceFront101.modules.m2.topics.t1.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceFront101.modules.m2.topics.t1.what",
            whyKey: "courses.hceFront101.modules.m2.topics.t1.why",
            whenKey: "courses.hceFront101.modules.m2.topics.t1.when",
            howKey: "courses.hceFront101.modules.m2.topics.t1.how",
            ecosystemKey: "courses.hceFront101.modules.m2.topics.t1.ecosystem",
            realWorldKey: "courses.hceFront101.modules.m2.topics.t1.realWorld",
            useCasesKeys: [
                "courses.hceFront101.modules.m2.topics.t1.useCases.u1",
                "courses.hceFront101.modules.m2.topics.t1.useCases.u2",
                "courses.hceFront101.modules.m2.topics.t1.useCases.u3",
            ],
            advantagesKeys: [
                "courses.hceFront101.modules.m2.topics.t1.advantages.a1",
                "courses.hceFront101.modules.m2.topics.t1.advantages.a2",
                "courses.hceFront101.modules.m2.topics.t1.advantages.a3",
            ],
            disadvantagesKeys: [
                "courses.hceFront101.modules.m2.topics.t1.disadvantages.d1",
            ],

            interviewTipKey: "courses.hceFront101.modules.m2.topics.t1.interviewTip",
            resumeBulletKey: "courses.hceFront101.modules.m2.topics.t1.resumeBullet",

            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m2.topics.t1.videos.v1.title",
                    authorKey: "courses.hceFront101.modules.m2.topics.t1.videos.v1.author",
                    viewsKey: "courses.hceFront101.modules.m2.topics.t1.videos.v1.views",
                    durationKey: "courses.hceFront101.modules.m2.topics.t1.videos.v1.duration",
                    url: "https://www.youtube.com/watch?v=jV8B24rSN5o",
                },
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m2.topics.t1.videos.v2.title",
                    authorKey: "courses.hceFront101.modules.m2.topics.t1.videos.v2.author",
                    viewsKey: "courses.hceFront101.modules.m2.topics.t1.videos.v2.views",
                    durationKey: "courses.hceFront101.modules.m2.topics.t1.videos.v2.duration",
                    url: "https://www.youtube.com/watch?v=v=7kVeCqQCxlk",
                },
            ],
            moocs: [
                {
                    platform: "Coursera",
                    rating: 4.9,
                    titleKey: "courses.hceFront101.modules.m2.topics.t1.moocs.m1.title",
                    instructorKey: "courses.hceFront101.modules.m2.topics.t1.moocs.m1.instructor",
                    enrolledKey: "courses.hceFront101.modules.m2.topics.t1.moocs.m1.enrolled",
                    durationKey: "courses.hceFront101.modules.m2.topics.t1.moocs.m1.duration",
                    url: "https://www.coursera.org/learn/responsive-web-design",
                },
            ],
            blogs: [
                {
                    type: "Architecture",
                    titleKey: "courses.hceFront101.modules.m2.topics.t1.blogs.b1.title",
                    publisherKey: "courses.hceFront101.modules.m2.topics.t1.blogs.b1.publisher",
                    readTimeKey: "courses.hceFront101.modules.m2.topics.t1.blogs.b1.readTime",
                    url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
                },
            ],
            scenarios: [
                {
                    id: "HCE-FRONT-101-M2-T1-S1",
                    difficulty: "Medium",
                    titleKey: "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.title",
                    categoryKey: "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.category",
                    estimatedTimeKey: "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.analysis",
                    architectureLayersKeys: [
                        "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.layers.l1",
                        "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.layers.l2",
                        "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.layers.l3",
                    ],
                    toolsAndTech: [
                        {
                            nameKey: "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.tools.t1.name",
                            justificationKey: "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.tools.t1.justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.tradeOffs.t1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.nfr.n1",
                    ],
                    kpisKeys: [
                        "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.kpis.k1",
                    ],
                    keyInsightsKey: "courses.hceFront101.modules.m2.topics.t1.scenarios.s1.insights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceFront101.modules.m2.topics.t1.playgrounds.p1.title",
                    descriptionKey: "courses.hceFront101.modules.m2.topics.t1.playgrounds.p1.desc",
                    examples: [
                        {
                            language: "html",
                            code: '<div class="app-container">\n  <header class="navbar">Top Navigation</header>\n  <aside class="sidebar">Tool List</aside>\n  <main class="content">Main Data View</main>\n  <footer class="footer">Legal Info</footer>\n</div>',
                        },
                        {
                            language: "css",
                            code: "/* The Holy Grail Layout in 6 lines of CSS */\n.app-container {\n  display: grid;\n  /* 2 Rows: Top is auto-sized to content, bottom stretches forever */\n  grid-template-rows: auto 1fr auto;\n  /* 2 Columns: Sidebar is 250px, Main Content takes 1 fractional unit of remaining space */\n  grid-template-columns: 250px 1fr;\n  /* Force the container to encompass the entire viewport height */\n  height: 100vh;\n}\n\n.navbar {\n  /* Span horizontally across both columns (from line 1 to 3) */\n  grid-column: 1 / 3;\n  background: #111827;\n  color: white;\n  padding: 1rem;\n}\n\n.sidebar {\n  background: #374151;\n  color: #D1D5DB;\n  padding: 1rem;\n}\n\n.content {\n  background: #F3F4F6;\n  padding: 2rem;\n}\n\n.footer {\n  /* Span horizontally across both columns */\n  grid-column: 1 / 3;\n  background: #111827;\n  color: #6B7280;\n  padding: 1rem;\n  text-align: center;\n}",
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "ui/responsive-grid",
                commitMessageKey:
                    "ui: ripped out brittle float-based layouts and replaced with scalable fractional CSS Grid architecture",
                files: [
                    {
                        name: "src/styles",
                        type: "folder",
                        children: [
                            { name: "dashboard.css", type: "file", contentKey: "grid rules" },
                        ],
                    },
                ],
                activeFileSnippet: {
                    filename: "dashboard.css",
                    codeKey: "courses.hceFront101.modules.m2.topics.t1.git.snippet",
                },
            },
            community: {
                aiSummaryKey:
                    "The transition from `float` to `flex`/`grid` is one of the biggest paradigm shifts in front-end engineering history, finally giving developers native layout control without relying on hacks.",
                solutions: [],
            },
        },
        {
            id: "HCE-FRONT-101-M2-T2",
            moduleId: "HCE-FRONT-101-M2",
            sequenceNumber: 2,
            titleKey: "courses.hceFront101.modules.m2.topics.t2.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceFront101.modules.m2.topics.t2.what",
            whyKey: "courses.hceFront101.modules.m2.topics.t2.why",
            whenKey: "courses.hceFront101.modules.m2.topics.t2.when",
            howKey: "courses.hceFront101.modules.m2.topics.t2.how",
            ecosystemKey: "courses.hceFront101.modules.m2.topics.t2.ecosystem",
            realWorldKey: "courses.hceFront101.modules.m2.topics.t2.realWorld",
            useCasesKeys: [
                "courses.hceFront101.modules.m2.topics.t2.useCases.u1",
                "courses.hceFront101.modules.m2.topics.t2.useCases.u2",
                "courses.hceFront101.modules.m2.topics.t2.useCases.u3",
            ],
            advantagesKeys: [
                "courses.hceFront101.modules.m2.topics.t2.advantages.a1",
                "courses.hceFront101.modules.m2.topics.t2.advantages.a2",
                "courses.hceFront101.modules.m2.topics.t2.advantages.a3",
            ],
            disadvantagesKeys: [
                "courses.hceFront101.modules.m2.topics.t2.disadvantages.d1",
            ],
            interviewTipKey: "courses.hceFront101.modules.m2.topics.t2.interviewTip",
            resumeBulletKey: "courses.hceFront101.modules.m2.topics.t2.resumeBullet",

            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m2.topics.t2.videos.v1.title",
                    authorKey: "courses.hceFront101.modules.m2.topics.t2.videos.v1.author",
                    viewsKey: "courses.hceFront101.modules.m2.topics.t2.videos.v1.views",
                    durationKey: "courses.hceFront101.modules.m2.topics.t2.videos.v1.duration",
                    url: "https://www.youtube.com/watch?v=er1JEDuPb_w",
                },
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m2.topics.t2.videos.v2.title",
                    authorKey: "courses.hceFront101.modules.m2.topics.t2.videos.v2.author",
                    viewsKey: "courses.hceFront101.modules.m2.topics.t2.videos.v2.views",
                    durationKey: "courses.hceFront101.modules.m2.topics.t2.videos.v2.duration",
                    url: "https://www.youtube.com/watch?v=mrHNSnL1JIs",
                },
            ],
            moocs: [
                {
                    platform: "Frontend Masters",
                    rating: 4.9,
                    titleKey: "courses.hceFront101.modules.m2.topics.t2.moocs.m1.title",
                    instructorKey: "courses.hceFront101.modules.m2.topics.t2.moocs.m1.instructor",
                    enrolledKey: "courses.hceFront101.modules.m2.topics.t2.moocs.m1.enrolled",
                    durationKey: "courses.hceFront101.modules.m2.topics.t2.moocs.m1.duration",
                    url: "https://frontendmasters.com/courses/css-architecture/",
                },
            ],
            blogs: [
                {
                    type: "Architecture",
                    titleKey: "courses.hceFront101.modules.m2.topics.t2.blogs.b1.title",
                    publisherKey: "courses.hceFront101.modules.m2.topics.t2.blogs.b1.publisher",
                    readTimeKey: "courses.hceFront101.modules.m2.topics.t2.blogs.b1.readTime",
                    url: "https://en.bem.info/methodology/key-concepts/",
                },
            ],
            scenarios: [
                {
                    id: "HCE-FRONT-101-M2-T2-S1",
                    difficulty: "Medium",
                    titleKey: "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.title",
                    categoryKey: "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.category",
                    estimatedTimeKey: "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.analysis",
                    architectureLayersKeys: [
                        "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.layers.l1",
                        "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.layers.l2",
                        "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.layers.l3",
                    ],
                    toolsAndTech: [
                        {
                            nameKey: "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.tools.t1.name",
                            justificationKey: "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.tools.t1.justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.tradeOffs.t1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.nfr.n1",
                    ],
                    kpisKeys: [
                        "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.kpis.k1",
                    ],
                    keyInsightsKey: "courses.hceFront101.modules.m2.topics.t2.scenarios.s1.insights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceFront101.modules.m2.topics.t2.playgrounds.p1.title",
                    descriptionKey: "courses.hceFront101.modules.m2.topics.t2.playgrounds.p1.desc",
                    examples: [
                        {
                            language: "html",
                            code: "<!-- BEM Approach -->\n<button class=\"btn btn--primary btn--large\">\n  Click Me\n</button>\n\n<!-- Tailwind (Utility) Approach -->\n<button class=\"px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition\">\n  Click Me\n</button>",
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "style/refactor-to-bem",
                files: [
                    {
                        name: "src/styles/Header.css",
                        type: "file",
                        contentKey: "courses.hceFront101.modules.m2.topics.t2.git.f1.content",
                    },
                ],
                commitMessageKey: "courses.hceFront101.modules.m2.topics.t2.git.commit",
                activeFileSnippet: {
                    filename: "reset.css",
                    codeKey: "courses.hceFront101.modules.m1.topics.t2.git.snippet",
                },
            },
            community: {
                aiSummaryKey: "courses.hceFront101.modules.m2.topics.t2.community.aiSummary",
                solutions: [],
            },
        },
        // ==========================================
        // MODULE 3 TOPICS
        // ==========================================
        {
            id: "HCE-FRONT-101-M3-T1",
            moduleId: "HCE-FRONT-101-M3",
            sequenceNumber: 1,
            titleKey: "courses.hceFront101.modules.m3.topics.t1.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceFront101.modules.m3.topics.t1.what",
            whyKey: "courses.hceFront101.modules.m3.topics.t1.why",
            whenKey: "courses.hceFront101.modules.m3.topics.t1.when",
            howKey: "courses.hceFront101.modules.m3.topics.t1.how",
            ecosystemKey: "courses.hceFront101.modules.m3.topics.t1.ecosystem",
            realWorldKey: "courses.hceFront101.modules.m3.topics.t1.realWorld",
            useCasesKeys: [
                "courses.hceFront101.modules.m3.topics.t1.useCases.u1",
                "courses.hceFront101.modules.m3.topics.t1.useCases.u2",
                "courses.hceFront101.modules.m3.topics.t1.useCases.u3",
            ],
            advantagesKeys: [
                "courses.hceFront101.modules.m3.topics.t1.advantages.a1",
                "courses.hceFront101.modules.m3.topics.t1.advantages.a2",
            ],
            disadvantagesKeys: [
                "courses.hceFront101.modules.m3.topics.t1.disadvantages.d1",
                "courses.hceFront101.modules.m3.topics.t1.disadvantages.d2",
            ],

            interviewTipKey: "courses.hceFront101.modules.m3.topics.t1.interviewTip",
            resumeBulletKey: "courses.hceFront101.modules.m3.topics.t1.resumeBullet",

            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m3.topics.t1.videos.v1.title",
                    authorKey: "courses.hceFront101.modules.m3.topics.t1.videos.v1.author",
                    viewsKey: "courses.hceFront101.modules.m3.topics.t1.videos.v1.views",
                    durationKey: "courses.hceFront101.modules.m3.topics.t1.videos.v1.duration",
                    url: "https://www.youtube.com/watch?v=pKcbZUpX2A8",
                },
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m3.topics.t1.videos.v2.title",
                    authorKey: "courses.hceFront101.modules.m3.topics.t1.videos.v2.author",
                    viewsKey: "courses.hceFront101.modules.m3.topics.t1.videos.v2.views",
                    durationKey: "courses.hceFront101.modules.m3.topics.t1.videos.v2.duration",
                    url: "https://www.youtube.com/watch?v=F1anRyL37lE",
                },
            ],
            moocs: [
                {
                    platform: "Udemy",
                    rating: 4.8,
                    titleKey: "courses.hceFront101.modules.m3.topics.t1.moocs.m1.title",
                    instructorKey: "courses.hceFront101.modules.m3.topics.t1.moocs.m1.instructor",
                    enrolledKey: "courses.hceFront101.modules.m3.topics.t1.moocs.m1.enrolled",
                    durationKey: "courses.hceFront101.modules.m3.topics.t1.moocs.m1.duration",
                    url: "https://www.udemy.com/course/modern-javascript-from-the-beginning/",
                },
            ],
            blogs: [
                {
                    type: "Tutorial",
                    titleKey: "courses.hceFront101.modules.m3.topics.t1.blogs.b1.title",
                    publisherKey: "courses.hceFront101.modules.m3.topics.t1.blogs.b1.publisher",
                    readTimeKey: "courses.hceFront101.modules.m3.topics.t1.blogs.b1.readTime",
                    url: "https://davidwalsh.name/event-delegate",
                },
            ],
            scenarios: [
                {
                    id: "HCE-FRONT-101-M3-T1-S1",
                    difficulty: "Hard",
                    titleKey: "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.title",
                    categoryKey: "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.category",
                    estimatedTimeKey: "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.analysis",
                    architectureLayersKeys: [
                        "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.layers.l1",
                        "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.layers.l2",
                        "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.layers.l3",
                    ],
                    toolsAndTech: [
                        {
                            nameKey: "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.tools.t1.name",
                            justificationKey: "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.tools.t1.justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.tradeOffs.t1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.nfr.n1",
                    ],
                    kpisKeys: [
                        "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.kpis.k1",
                    ],
                    keyInsightsKey: "courses.hceFront101.modules.m3.topics.t1.scenarios.s1.insights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceFront101.modules.m3.topics.t1.playgrounds.p1.title",
                    descriptionKey: "courses.hceFront101.modules.m3.topics.t1.playgrounds.p1.desc",
                    examples: [
                        {
                            language: "html",
                            code: '<div id="massive-grid">\n  <!-- Imagine an API injects 10,000 of these buttons -->\n  <button data-id="1" class="delete-btn">Delete #1</button>\n  <button data-id="2" class="delete-btn">Delete #2</button>\n  <button data-id="3" class="delete-btn">Delete #3</button>\n</div>',
                        },
                        {
                            language: "javascript",
                            code: "const container = document.getElementById('massive-grid');\n\n// ❌ THE HORRIBLE WAY (Memory Leak waiting to happen)\n// document.querySelectorAll('.delete-btn').forEach(btn => {\n//   btn.addEventListener('click', () => deleteItem(btn.dataset.id));\n// });\n\n\n// ✅ THE MASTER ARCHITECT WAY (Event Delegation)\n// We attach exactly ONE listener to the parent container.\ncontainer.addEventListener('click', (event) => {\n  \n  // Check if what they clicked (or its parent) was a delete button\n  const clickedButton = event.target.closest('.delete-btn');\n  \n  if (clickedButton) {\n    const id = clickedButton.getAttribute('data-id');\n    console.log(`[API CALL] Deleting item ${id} via delegated event!`);\n    \n    // Usually you would remove the node here: clickedButton.remove();\n  }\n});",
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "perf/event-delegation",
                commitMessageKey:
                    "perf: refactored widget interactivity to use event delegation, solving strict OOM memory leak crashes",
                files: [
                    {
                        name: "src/js",
                        type: "folder",
                        children: [
                            {
                                name: "dashboard.js",
                                type: "file",
                                contentKey: "delegation logic",
                            },
                        ],
                    },
                ],
                activeFileSnippet: {
                    filename: "dashboard.js",
                    codeKey: "courses.hceFront101.modules.m3.topics.t1.git.snippet",
                },
            },
            community: {
                aiSummaryKey:
                    "The difference between an amateur and a senior JavaScript engineer often comes down to one question: Do they know how and when to use Event Bubbling to their advantage?",
                solutions: [],
            },
        },
        {
            id: "HCE-FRONT-101-M3-T2",
            moduleId: "HCE-FRONT-101-M3",
            sequenceNumber: 2,
            titleKey: "courses.hceFront101.modules.m3.topics.t2.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceFront101.modules.m3.topics.t2.what",
            whyKey: "courses.hceFront101.modules.m3.topics.t2.why",
            whenKey: "courses.hceFront101.modules.m3.topics.t2.when",
            howKey: "courses.hceFront101.modules.m3.topics.t2.how",
            ecosystemKey: "courses.hceFront101.modules.m3.topics.t2.ecosystem",
            realWorldKey: "courses.hceFront101.modules.m3.topics.t2.realWorld",
            useCasesKeys: [
                "courses.hceFront101.modules.m3.topics.t2.useCases.u1",
                "courses.hceFront101.modules.m3.topics.t2.useCases.u2",
                "courses.hceFront101.modules.m3.topics.t2.useCases.u3",
            ],
            advantagesKeys: [
                "courses.hceFront101.modules.m3.topics.t2.advantages.a1",
                "courses.hceFront101.modules.m3.topics.t2.advantages.a2",
                "courses.hceFront101.modules.m3.topics.t2.advantages.a3",
            ],
            disadvantagesKeys: [
                "courses.hceFront101.modules.m3.topics.t2.disadvantages.d1",
            ],
            interviewTipKey: "courses.hceFront101.modules.m3.topics.t2.interviewTip",
            resumeBulletKey: "courses.hceFront101.modules.m3.topics.t2.resumeBullet",

            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m3.topics.t2.videos.v1.title",
                    authorKey: "courses.hceFront101.modules.m3.topics.t2.videos.v1.author",
                    viewsKey: "courses.hceFront101.modules.m3.topics.t2.videos.v1.views",
                    durationKey: "courses.hceFront101.modules.m3.topics.t2.videos.v1.duration",
                    url: "https://www.youtube.com/watch?v=2IbRtjez6ag",
                },
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m3.topics.t2.videos.v2.title",
                    authorKey: "courses.hceFront101.modules.m3.topics.t2.videos.v2.author",
                    viewsKey: "courses.hceFront101.modules.m3.topics.t2.videos.v2.views",
                    durationKey: "courses.hceFront101.modules.m3.topics.t2.videos.v2.duration",
                    url: "https://www.youtube.com/watch?v=M2c3NjE8N9c",
                },
            ],
            moocs: [
                {
                    platform: "Frontend Masters",
                    rating: 4.8,
                    titleKey: "courses.hceFront101.modules.m3.topics.t2.moocs.m1.title",
                    instructorKey: "courses.hceFront101.modules.m3.topics.t2.moocs.m1.instructor",
                    enrolledKey: "courses.hceFront101.modules.m3.topics.t2.moocs.m1.enrolled",
                    durationKey: "courses.hceFront101.modules.m3.topics.t2.moocs.m1.duration",
                    url: "https://frontendmasters.com/courses/browser-apis/",
                },
            ],
            blogs: [
                {
                    type: "Architecture",
                    titleKey: "courses.hceFront101.modules.m3.topics.t2.blogs.b1.title",
                    publisherKey: "courses.hceFront101.modules.m3.topics.t2.blogs.b1.publisher",
                    readTimeKey: "courses.hceFront101.modules.m3.topics.t2.blogs.b1.readTime",
                    url: "https://developer.chrome.com/blog/intersectionobserver/",
                },
            ],
            scenarios: [
                {
                    id: "HCE-FRONT-101-M3-T2-S1",
                    difficulty: "Medium",
                    titleKey: "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.title",
                    categoryKey: "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.category",
                    estimatedTimeKey: "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.analysis",
                    architectureLayersKeys: [
                        "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.layers.l1",
                        "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.layers.l2",
                        "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.layers.l3",
                    ],
                    toolsAndTech: [
                        {
                            nameKey: "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.tools.t1.name",
                            justificationKey: "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.tools.t1.justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.tradeOffs.t1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.nfr.n1",
                    ],
                    kpisKeys: [
                        "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.kpis.k1",
                    ],
                    keyInsightsKey: "courses.hceFront101.modules.m3.topics.t2.scenarios.s1.insights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceFront101.modules.m3.topics.t2.playgrounds.p1.title",
                    descriptionKey: "courses.hceFront101.modules.m3.topics.t2.playgrounds.p1.desc",
                    examples: [
                        {
                            language: "javascript",
                            code: "// ❌ THE OLD (SLOW) WAY\nwindow.addEventListener('scroll', () => {\n  console.log('Fires 100 times per scroll!');\n  checkVisibility();\n});\n\n// ✅ THE NEW (FAST) WAY\nconst obs = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      console.log('Fires ONCE when element arrives!');\n      entry.target.classList.add('visible');\n    }\n  });\n});\n\nobs.observe(document.querySelector('.target-box'));",
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "perf/lazy-observer",
                files: [
                    {
                        name: "src/effects",
                        type: "folder",
                        children: [
                            {
                                name: "scrollReveal.js",
                                type: "file",
                                contentKey: "courses.hceFront101.modules.m3.topics.t2.git.f1.content",
                            },
                        ],
                    },
                ],
                commitMessageKey: "courses.hceFront101.modules.m3.topics.t2.git.commit",
                activeFileSnippet: {
                    filename: "scrollReveal.js",
                    codeKey: "courses.hceFront101.modules.m3.topics.t2.git.snippet",
                },
            },
            community: {
                aiSummaryKey: "courses.hceFront101.modules.m3.topics.t2.community.aiSummary",
                solutions: [],
            },
        },
        // ==========================================
        // MODULE 4 TOPICS
        // ==========================================
        {
            id: "HCE-FRONT-101-M4-T1",
            moduleId: "HCE-FRONT-101-M4",
            sequenceNumber: 1,
            titleKey: "courses.hceFront101.modules.m4.topics.t1.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceFront101.modules.m4.topics.t1.what",
            whyKey: "courses.hceFront101.modules.m4.topics.t1.why",
            whenKey: "courses.hceFront101.modules.m4.topics.t1.when",
            howKey: "courses.hceFront101.modules.m4.topics.t1.how",
            ecosystemKey: "courses.hceFront101.modules.m4.topics.t1.ecosystem",
            realWorldKey: "courses.hceFront101.modules.m4.topics.t1.realWorld",
            useCasesKeys: [
                "courses.hceFront101.modules.m4.topics.t1.useCases.u1",
                "courses.hceFront101.modules.m4.topics.t1.useCases.u2",
                "courses.hceFront101.modules.m4.topics.t1.useCases.u3",
            ],
            advantagesKeys: [
                "courses.hceFront101.modules.m4.topics.t1.advantages.a1",
                "courses.hceFront101.modules.m4.topics.t1.advantages.a2",
            ],
            disadvantagesKeys: [
                "courses.hceFront101.modules.m4.topics.t1.disadvantages.d1",
            ],
            interviewTipKey: "courses.hceFront101.modules.m4.topics.t1.interviewTip",
            resumeBulletKey: "courses.hceFront101.modules.m4.topics.t1.resumeBullet",

            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m4.topics.t1.videos.v1.title",
                    authorKey: "courses.hceFront101.modules.m4.topics.t1.videos.v1.author",
                    viewsKey: "courses.hceFront101.modules.m4.topics.t1.videos.v1.views",
                    durationKey: "courses.hceFront101.modules.m4.topics.t1.videos.v1.duration",
                    url: "https://www.youtube.com/watch?v=DHjqpvDnNGE",
                },
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m4.topics.t1.videos.v2.title",
                    authorKey: "courses.hceFront101.modules.m4.topics.t1.videos.v2.author",
                    viewsKey: "courses.hceFront101.modules.m4.topics.t1.videos.v2.views",
                    durationKey: "courses.hceFront101.modules.m4.topics.t1.videos.v2.duration",
                    url: "https://www.youtube.com/watch?v=vn3tm0quoqE",
                },
            ],
            moocs: [
                {
                    platform: "Pluralsight",
                    rating: 4.7,
                    titleKey: "courses.hceFront101.modules.m4.topics.t1.moocs.m1.title",
                    instructorKey: "courses.hceFront101.modules.m4.topics.t1.moocs.m1.instructor",
                    enrolledKey: "courses.hceFront101.modules.m4.topics.t1.moocs.m1.enrolled",
                    durationKey: "courses.hceFront101.modules.m4.topics.t1.moocs.m1.duration",
                    url: "https://www.pluralsight.com/courses/javascript-asynchronous",
                },
            ],
            blogs: [
                {
                    type: "Architecture",
                    titleKey: "courses.hceFront101.modules.m4.topics.t1.blogs.b1.title",
                    publisherKey: "courses.hceFront101.modules.m4.topics.t1.blogs.b1.publisher",
                    readTimeKey: "courses.hceFront101.modules.m4.topics.t1.blogs.b1.readTime",
                    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
                },
            ],
            scenarios: [
                {
                    id: "HCE-FRONT-101-M4-T1-S1",
                    difficulty: "Medium",
                    titleKey: "courses.hceFront101.modules.m4.topics.t1.scenarios.s1.title",
                    categoryKey: "courses.hceFront101.modules.m4.topics.t1.scenarios.s1.category",
                    estimatedTimeKey: "courses.hceFront101.modules.m4.topics.t1.scenarios.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceFront101.modules.m4.topics.t1.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceFront101.modules.m4.topics.t1.scenarios.s1.analysis",
                    architectureLayersKeys: [
                        "courses.hceFront101.modules.m4.topics.t1.scenarios.s1.layers.l1",
                        "courses.hceFront101.modules.m4.topics.t1.scenarios.s1.layers.l2",
                    ],
                    toolsAndTech: [
                        {
                            nameKey: "courses.hceFront101.modules.m4.topics.t1.scenarios.s1.tools.t1.name",
                            justificationKey: "courses.hceFront101.modules.m4.topics.t1.scenarios.s1.tools.t1.justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceFront101.modules.m4.topics.t1.scenarios.s1.tradeOffs.t1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceFront101.modules.m4.topics.t1.scenarios.s1.nfr.n1",
                    ],
                    kpisKeys: [
                        "courses.hceFront101.modules.m4.topics.t1.scenarios.s1.kpis.k1",
                    ],
                    keyInsightsKey: "courses.hceFront101.modules.m4.topics.t1.scenarios.s1.insights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceFront101.modules.m4.topics.t1.playgrounds.p1.title",
                    descriptionKey: "courses.hceFront101.modules.m4.topics.t1.playgrounds.p1.desc",
                    examples: [
                        {
                            language: "javascript",
                            code: '// 1. Modern ES8 Async Function\nasync function fetchUserData(userId) {\n  \n  // 2. State Management (Toggle Loading UI ON)\n  console.log("[UI] Showing Spinner...");\n  \n  try {\n    // 3. Asynchronously request data over the network\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);\n    \n    // 4. Handle HTTP Status Errors (404, 500) because fetch() DOES NOT throw on them!\n    if (!response.ok) {\n      throw new Error(`CRITICAL: Server rejected request with status ${response.status}`);\n    }\n    \n    // 5. Asynchronously parse the massive text stream into a JSON object\n    const data = await response.json();\n    \n    // 6. State Management (Update DOM)\n    console.log(`[UI] Welcome, ${data.name}! Your email is ${data.email}.`);\n    return data;\n    \n  } catch (error) {\n    // 7. Graceful Degradation (Internet disconnected, CORS error, etc)\n    console.error("[UI] Showing Error Banner:", error.message);\n  } finally {\n    // 8. Guaranteed Execution (Toggle Loading UI OFF)\n    console.log("[UI] Hiding Spinner...");\n  }\n}\n\n// Execute the function\nfetchUserData(1);',
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "network/parallel-fetch",
                files: [
                    {
                        name: "src/api",
                        type: "folder",
                        children: [
                            {
                                name: "loaders.js",
                                type: "file",
                                contentKey: "courses.hceFront101.modules.m4.topics.t1.git.f1.content",
                            },
                        ],
                    },
                ],
                commitMessageKey: "courses.hceFront101.modules.m4.topics.t1.git.commit",
                activeFileSnippet: {
                    filename: "loaders.js",
                    codeKey: "courses.hceFront101.modules.m4.topics.t1.git.snippet",
                },
            },
            community: {
                aiSummaryKey: "courses.hceFront101.modules.m4.topics.t1.community.aiSummary",
                solutions: [],
            },
        },
        {
            id: "HCE-FRONT-101-M4-T2",
            moduleId: "HCE-FRONT-101-M4",
            sequenceNumber: 2,
            titleKey: "courses.hceFront101.modules.m4.topics.t2.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceFront101.modules.m4.topics.t2.what",
            whyKey: "courses.hceFront101.modules.m4.topics.t2.why",
            whenKey: "courses.hceFront101.modules.m4.topics.t2.when",
            howKey: "courses.hceFront101.modules.m4.topics.t2.how",
            ecosystemKey: "courses.hceFront101.modules.m4.topics.t2.ecosystem",
            realWorldKey: "courses.hceFront101.modules.m4.topics.t2.realWorld",
            useCasesKeys: [
                "courses.hceFront101.modules.m4.topics.t2.useCases.u1",
                "courses.hceFront101.modules.m4.topics.t2.useCases.u2",
                "courses.hceFront101.modules.m4.topics.t2.useCases.u3",
            ],
            advantagesKeys: [
                "courses.hceFront101.modules.m4.topics.t2.advantages.a1",
                "courses.hceFront101.modules.m4.topics.t2.advantages.a2",
                "courses.hceFront101.modules.m4.topics.t2.advantages.a3",
            ],
            disadvantagesKeys: [
                "courses.hceFront101.modules.m4.topics.t2.disadvantages.d1",
            ],
            interviewTipKey: "courses.hceFront101.modules.m4.topics.t2.interviewTip",
            resumeBulletKey: "courses.hceFront101.modules.m4.topics.t2.resumeBullet",

            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m4.topics.t2.videos.v1.title",
                    authorKey: "courses.hceFront101.modules.m4.topics.t2.videos.v1.author",
                    viewsKey: "courses.hceFront101.modules.m4.topics.t2.videos.v1.views",
                    durationKey: "courses.hceFront101.modules.m4.topics.t2.videos.v1.duration",
                    url: "https://www.youtube.com/watch?v=tyG7WJIkZKg",
                },
                {
                    type: "public",
                    titleKey: "courses.hceFront101.modules.m4.topics.t2.videos.v2.title",
                    authorKey: "courses.hceFront101.modules.m4.topics.t2.videos.v2.author",
                    viewsKey: "courses.hceFront101.modules.m4.topics.t2.videos.v2.views",
                    durationKey: "courses.hceFront101.modules.m4.topics.t2.videos.v2.duration",
                    url: "https://www.youtube.com/watch?v=jV8B24rSN5o",
                },
            ],
            moocs: [
                {
                    platform: "Udacity",
                    rating: 4.8,
                    titleKey: "courses.hceFront101.modules.m4.topics.t2.moocs.m1.title",
                    instructorKey: "courses.hceFront101.modules.m4.topics.t2.moocs.m1.instructor",
                    enrolledKey: "courses.hceFront101.modules.m4.topics.t2.moocs.m1.enrolled",
                    durationKey: "courses.hceFront101.modules.m4.topics.t2.moocs.m1.duration",
                    url: "https://www.udacity.com/course/offline-web-applications--ud899",
                },
            ],
            blogs: [
                {
                    type: "Engineering",
                    titleKey: "courses.hceFront101.modules.m4.topics.t2.blogs.b1.title",
                    publisherKey: "courses.hceFront101.modules.m4.topics.t2.blogs.b1.publisher",
                    readTimeKey: "courses.hceFront101.modules.m4.topics.t2.blogs.b1.readTime",
                    url: "https://web.dev/service-workers-cache-storage/",
                },
            ],
            scenarios: [
                {
                    id: "HCE-FRONT-101-M4-T2-S1",
                    difficulty: "Hard",
                    titleKey: "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.title",
                    categoryKey: "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.category",
                    estimatedTimeKey: "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.analysis",
                    architectureLayersKeys: [
                        "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.layers.l1",
                        "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.layers.l2",
                        "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.layers.l3",
                    ],
                    toolsAndTech: [
                        {
                            nameKey: "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.tools.t1.name",
                            justificationKey: "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.tools.t1.justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.tradeOffs.t1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.nfr.n1",
                    ],
                    kpisKeys: [
                        "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.kpis.k1",
                    ],
                    keyInsightsKey: "courses.hceFront101.modules.m4.topics.t2.scenarios.s1.insights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceFront101.modules.m4.topics.t2.playgrounds.p1.title",
                    descriptionKey: "courses.hceFront101.modules.m4.topics.t2.playgrounds.p1.desc",
                    examples: [
                        {
                            language: "javascript",
                            code: "// Main JS file\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js')\n    .then(() => console.log('SW Registered!'))\n    .catch(err => console.error('SW Failed', err));\n}\n\n// sw.js (The Worker File)\nself.addEventListener('fetch', (event) => {\n  // Intercept every network request!\n  console.log('Intercepting request to:', event.request.url);\n});",
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "feat/offline-first",
                files: [
                    {
                        name: "public/sw.js",
                        type: "file",
                        contentKey: "courses.hceFront101.modules.m4.topics.t2.git.f1.content",
                    },
                ],
                commitMessageKey: "courses.hceFront101.modules.m4.topics.t2.git.commit",
                activeFileSnippet: {
                    filename: "sw.js",
                    codeKey: "courses.hceFront101.modules.m4.topics.t2.git.snippet",
                },
            },
            community: {
                aiSummaryKey: "courses.hceFront101.modules.m4.topics.t2.community.aiSummary",
                solutions: [],
            },
        },
    ],
    videoCount: 220,
    articleCount: 145,
    problemCount: 85,
    capstoneProject: {
        titleKey: "courses.hceFront101.capstone.title",
        descriptionKey: "courses.hceFront101.capstone.description",
        estimatedDays: 12,
        skillsFocusedKeys: [
            "courses.hceFront101.capstone.skills.s1",
            "courses.hceFront101.capstone.skills.s2",
            "courses.hceFront101.capstone.skills.s3",
            "courses.hceFront101.capstone.skills.s4",
            "courses.hceFront101.capstone.skills.s5",
        ],
        steps: [
            {
                sequenceNumber: 1,
                titleKey: "courses.hceFront101.capstone.steps.step1.title",
                objectiveKey: "courses.hceFront101.capstone.steps.step1.objective",
                skillsKeys: [
                    "courses.hceFront101.capstone.steps.step1.skills.s1",
                    "courses.hceFront101.capstone.steps.step1.skills.s2",
                    "courses.hceFront101.capstone.steps.step1.skills.s3",
                ],
                status: "Not Started",
            },
            {
                sequenceNumber: 2,
                titleKey: "courses.hceFront101.capstone.steps.step2.title",
                objectiveKey: "courses.hceFront101.capstone.steps.step2.objective",
                skillsKeys: [
                    "courses.hceFront101.capstone.steps.step2.skills.s1",
                    "courses.hceFront101.capstone.steps.step2.skills.s2",
                    "courses.hceFront101.capstone.steps.step2.skills.s3",
                ],
                status: "Not Started",
            },
            {
                sequenceNumber: 3,
                titleKey: "courses.hceFront101.capstone.steps.step3.title",
                objectiveKey: "courses.hceFront101.capstone.steps.step3.objective",
                skillsKeys: [
                    "courses.hceFront101.capstone.steps.step3.skills.s1",
                    "courses.hceFront101.capstone.steps.step3.skills.s2",
                ],
                status: "Not Started",
            },
            {
                sequenceNumber: 4,
                titleKey: "courses.hceFront101.capstone.steps.step4.title",
                objectiveKey: "courses.hceFront101.capstone.steps.step4.objective",
                skillsKeys: [
                    "courses.hceFront101.capstone.steps.step4.skills.s1",
                    "courses.hceFront101.capstone.steps.step4.skills.s2",
                    "courses.hceFront101.capstone.steps.step4.skills.s3",
                ],
                status: "Not Started",
            },
            {
                sequenceNumber: 5,
                titleKey: "courses.hceFront101.capstone.steps.step5.title",
                objectiveKey: "courses.hceFront101.capstone.steps.step5.objective",
                skillsKeys: [
                    "courses.hceFront101.capstone.steps.step5.skills.s1",
                    "courses.hceFront101.capstone.steps.step5.skills.s2",
                ],
                status: "Not Started",
            },
        ],
    },
    totalEstimatedHours: 66,
    moduleCount: 4,
    estimatedCompletionDays: 30,
    createdAt: "2026-02-28T00:00:00Z",
    updatedAt: "2026-02-28T00:00:00Z",
    version: "3.0",
    status: "published",
};
