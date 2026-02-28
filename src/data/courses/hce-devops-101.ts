import { CourseEnhanced } from './types';

export const hceDevops101: CourseEnhanced = {
    id: "HCE DEVOPS 101",
    titleKey: "courses.hceDevops101",
    descKey: "courses.hceDevops101Desc",
    icon: "☁️",
    durationKey: "common.duration.6weeks",
    languagesKeys: ["common.langs.bash", "common.langs.linux", "common.langs.docker", "common.langs.yaml"],
    category: "high-code",
    programIds: ["HCE DEVOPS", "HCE BACK", "HCE FULL"],
    trackId: "hce",
    level: "beginner",
    prerequisitesKeys: ["courses.coreCs101", "courses.coreProgPy"],
    targetAudienceKey: "courses.hceDevops101.targetAudience",
    learningOutcomesKeys: [
        "courses.hceDevops101.outcomes.o1",
        "courses.hceDevops101.outcomes.o2",
        "courses.hceDevops101.outcomes.o3",
        "courses.hceDevops101.outcomes.o4",
        "courses.hceDevops101.outcomes.o5"
    ],
    modules: [
        {
            id: "HCE-DEVOPS-101-M1",
            titleKey: "courses.hceDevops101.m1.title",
            descriptionKey: "courses.hceDevops101.m1.description",
            sequenceNumber: 1,
            estimatedHours: 12,
            topics: ["HCE-DEVOPS-101-M1-T1", "HCE-DEVOPS-101-M1-T2"],
            prerequisiteModuleIds: [],
            outcomesKeys: [
                "courses.hceDevops101.m1.outcomes.o1",
                "courses.hceDevops101.m1.outcomes.o2",
                "courses.hceDevops101.m1.outcomes.o3"
            ]
        },
        {
            id: "HCE-DEVOPS-101-M2",
            titleKey: "courses.hceDevops101.m2.title",
            descriptionKey: "courses.hceDevops101.m2.description",
            sequenceNumber: 2,
            estimatedHours: 10,
            topics: ["HCE-DEVOPS-101-M2-T1", "HCE-DEVOPS-101-M2-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-101-M1"],
            outcomesKeys: [
                "courses.hceDevops101.m2.outcomes.o1",
                "courses.hceDevops101.m2.outcomes.o2",
                "courses.hceDevops101.m2.outcomes.o3"
            ]
        },
        {
            id: "HCE-DEVOPS-101-M3",
            titleKey: "courses.hceDevops101.m3.title",
            descriptionKey: "courses.hceDevops101.m3.description",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["HCE-DEVOPS-101-M3-T1", "HCE-DEVOPS-101-M3-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-101-M2"],
            outcomesKeys: [
                "courses.hceDevops101.m3.outcomes.o1",
                "courses.hceDevops101.m3.outcomes.o2",
                "courses.hceDevops101.m3.outcomes.o3"
            ]
        },
        {
            id: "HCE-DEVOPS-101-M4",
            titleKey: "courses.hceDevops101.m4.title",
            descriptionKey: "courses.hceDevops101.m4.description",
            sequenceNumber: 4,
            estimatedHours: 15,
            topics: ["HCE-DEVOPS-101-M4-T1", "HCE-DEVOPS-101-M4-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-101-M3"],
            outcomesKeys: [
                "courses.hceDevops101.m4.outcomes.o1",
                "courses.hceDevops101.m4.outcomes.o2",
                "courses.hceDevops101.m4.outcomes.o3"
            ]
        },
        {
            id: "HCE-DEVOPS-101-M5",
            titleKey: "courses.hceDevops101.m5.title",
            descriptionKey: "courses.hceDevops101.m5.description",
            sequenceNumber: 5,
            estimatedHours: 10,
            topics: ["HCE-DEVOPS-101-M5-T1", "HCE-DEVOPS-101-M5-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-101-M4"],
            outcomesKeys: [
                "courses.hceDevops101.m5.outcomes.o1",
                "courses.hceDevops101.m5.outcomes.o2",
                "courses.hceDevops101.m5.outcomes.o3"
            ]
        }
    ],
    topics: [
        {
            id: "HCE-DEVOPS-101-M1-T1",
            moduleId: "HCE-DEVOPS-101-M1",
            sequenceNumber: 1,
            titleKey: "courses.hceDevops101.t1.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceDevops101.t1.what",
            whyKey: "courses.hceDevops101.t1.why",
            whenKey: "courses.hceDevops101.t1.when",
            howKey: "courses.hceDevops101.t1.how",
            ecosystemKey: "courses.hceDevops101.t1.ecosystem",
            realWorldKey: "courses.hceDevops101.t1.realWorld",
            useCasesKeys: [
                "courses.hceDevops101.t1.useCases.uc1",
                "courses.hceDevops101.t1.useCases.uc2",
                "courses.hceDevops101.t1.useCases.uc3"
            ],
            advantagesKeys: [
                "courses.hceDevops101.t1.advantages.ad1",
                "courses.hceDevops101.t1.advantages.ad2",
                "courses.hceDevops101.t1.advantages.ad3"
            ],
            disadvantagesKeys: [
                "courses.hceDevops101.t1.disadvantages.da1",
                "courses.hceDevops101.t1.disadvantages.da2"
            ],
            interviewTipKey: "courses.hceDevops101.t1.interviewTip",
            resumeBulletKey: "courses.hceDevops101.t1.resumeBullet",
            videos: [
                { type: "public", titleKey: "courses.hceDevops101.t1.videos.v1.title", authorKey: "courses.hceDevops101.t1.videos.v1.author", viewsKey: "courses.hceDevops101.t1.videos.v1.views", durationKey: "courses.hceDevops101.t1.videos.v1.duration", url: "https://www.youtube.com/watch?v=wH9p_m5H-m4" },
                { type: "public", titleKey: "courses.hceDevops101.t1.videos.v2.title", authorKey: "courses.hceDevops101.t1.videos.v2.author", viewsKey: "courses.hceDevops101.t1.videos.v2.views", durationKey: "courses.hceDevops101.t1.videos.v2.duration", url: "https://www.youtube.com/watch?v=5VAnYv3K5kI" }
            ],
            moocs: [
                { platform: "Linux Foundation", rating: 4.8, titleKey: "courses.hceDevops101.t1.moocs.m1.title", instructorKey: "courses.hceDevops101.t1.moocs.m1.instructor", enrolledKey: "courses.hceDevops101.t1.moocs.m1.enrolled", durationKey: "courses.hceDevops101.t1.moocs.m1.duration", url: "https://training.linuxfoundation.org/training/introduction-to-linux/" }
            ],
            blogs: [
                { type: "Core", titleKey: "courses.hceDevops101.t1.blogs.b1.title", publisherKey: "courses.hceDevops101.t1.blogs.b1.publisher", readTimeKey: "courses.hceDevops101.t1.blogs.b1.readTime", url: "https://docs.freebsd.org/en/books/handbook/basics/#basics-file-system" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", titleKey: "courses.hceDevops101.t1.scenarios.s1.title", categoryKey: "common.categories.securityOps", estimatedTimeKey: "common.duration.3hours",
                    scenarioDescriptionKey: "courses.hceDevops101.t1.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceDevops101.t1.scenarios.s1.analysis",
                    architectureLayersKeys: ["common.layers.processManagement", "common.layers.systemPermissions", "common.layers.application"],
                    toolsAndTech: [{ nameKey: "common.tools.chown_usermod", justificationKey: "courses.hceDevops101.t1.scenarios.s1.tools.j1" }],
                    tradeOffsKeys: ["courses.hceDevops101.t1.scenarios.s1.tradeOffs.t1"],
                    nfrConsiderationsKeys: ["courses.hceDevops101.t1.scenarios.s1.nfr.n1"],
                    kpisKeys: ["courses.hceDevops101.t1.scenarios.s1.kpis.k1"],
                    keyInsightsKey: "courses.hceDevops101.t1.scenarios.s1.insights"
                }
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceDevops101.t1.playgrounds.p1.title",
                    descriptionKey: "courses.hceDevops101.t1.playgrounds.p1.description",
                    examples: [
                        {
                            language: "bash",
                            code: "# 1. Symbolic: User (u) gets Read/Write, Others (o) get nothing\nchmod u+rw,g-rwx,o-rwx secret.txt\n\n# 2. Octal: 6 (Read+Write for Owner), 0 (None for Group), 0 (None for Others)\nchmod 600 secret.txt\n\n# 3. Verifying with 'ls -l'\nls -l secret.txt\n# Output: -rw------- 1 user group 0 Feb 27 10:00 secret.txt"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "security/harden-linux",
                commitMessageKey: "courses.hceDevops101.t1.git.commit",
                files: [{ name: "scripts/setup.sh", type: "file", contentKey: "courses.hceDevops101.t1.git.f1.content" }],
                activeFileSnippet: { filename: "setup.sh", codeKey: "courses.hceDevops101.t1.git.snippetCode" }
            },
            community: {
                aiSummaryKey: "courses.hceDevops101.t1.community.summary",
                solutions: []
            }
        },
        {
            id: "HCE-DEVOPS-101-M3-T1",
            moduleId: "HCE-DEVOPS-101-M3",
            sequenceNumber: 1,
            titleKey: "courses.hceDevops101.t3.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceDevops101.t3.what",
            whyKey: "courses.hceDevops101.t3.why",
            whenKey: "courses.hceDevops101.t3.when",
            howKey: "courses.hceDevops101.t3.how",
            ecosystemKey: "courses.hceDevops101.t3.ecosystem",
            realWorldKey: "courses.hceDevops101.t3.realWorld",
            useCasesKeys: [
                "courses.hceDevops101.t3.useCases.uc1",
                "courses.hceDevops101.t3.useCases.uc2",
                "courses.hceDevops101.t3.useCases.uc3"
            ],
            advantagesKeys: [
                "courses.hceDevops101.t3.advantages.ad1",
                "courses.hceDevops101.t3.advantages.ad2",
                "courses.hceDevops101.t3.advantages.ad3"
            ],
            disadvantagesKeys: [
                "courses.hceDevops101.t3.disadvantages.da1",
                "courses.hceDevops101.t3.disadvantages.da2"
            ],
            interviewTipKey: "courses.hceDevops101.t3.interviewTip",
            resumeBulletKey: "courses.hceDevops101.t3.resumeBullet",
            videos: [
                { type: "public", titleKey: "courses.hceDevops101.t3.videos.v1.title", authorKey: "courses.hceDevops101.t3.videos.v1.author", viewsKey: "courses.hceDevops101.t3.videos.v1.views", durationKey: "courses.hceDevops101.t3.videos.v1.duration", url: "https://www.youtube.com/watch?v=pg19Z8LL06w" },
                { type: "public", titleKey: "courses.hceDevops101.t3.videos.v2.title", authorKey: "courses.hceDevops101.t3.videos.v2.author", viewsKey: "courses.hceDevops101.t3.videos.v2.views", durationKey: "courses.hceDevops101.t3.videos.v2.duration", url: "https://www.youtube.com/watch?v=0m_S_A9_T_E" }
            ],
            moocs: [
                { platform: "Udemy", rating: 4.8, titleKey: "courses.hceDevops101.t3.moocs.m1.title", instructorKey: "courses.hceDevops101.t3.moocs.m1.instructor", enrolledKey: "courses.hceDevops101.t3.moocs.m1.enrolled", durationKey: "courses.hceDevops101.t3.moocs.m1.duration", url: "https://www.udemy.com/course/docker-mastery/" }
            ],
            blogs: [
                { type: "Architecture", titleKey: "courses.hceDevops101.t3.blogs.b1.title", publisherKey: "courses.hceDevops101.t3.blogs.b1.publisher", readTimeKey: "courses.hceDevops101.t3.blogs.b1.readTime", url: "https://snyk.io/blog/10-docker-image-security-best-practices/" }
            ],
            scenarios: [
                {
                    id: "3.1", difficulty: "Hard", titleKey: "courses.hceDevops101.t3.scenarios.s1.title", categoryKey: "common.categories.performanceEngineering", estimatedTimeKey: "common.duration.2hours",
                    scenarioDescriptionKey: "courses.hceDevops101.t3.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceDevops101.t3.scenarios.s1.analysis",
                    architectureLayersKeys: ["courses.hceDevops101.t3.scenarios.s1.layers.l1", "courses.hceDevops101.t3.scenarios.s1.layers.l2", "courses.hceDevops101.t3.scenarios.s1.layers.l3"],
                    toolsAndTech: [{ nameKey: "common.tools.dockerBuildKit", justificationKey: "courses.hceDevops101.t3.scenarios.s1.tools.j1" }],
                    tradeOffsKeys: ["courses.hceDevops101.t3.scenarios.s1.tradeOffs.t1"],
                    nfrConsiderationsKeys: ["courses.hceDevops101.t3.scenarios.s1.nfr.n1"],
                    kpisKeys: ["courses.hceDevops101.t3.scenarios.s1.kpis.k1"],
                    keyInsightsKey: "courses.hceDevops101.t3.scenarios.s1.insights"
                }
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceDevops101.t3.playgrounds.p1.title",
                    descriptionKey: "courses.hceDevops101.t3.playgrounds.p1.description",
                    examples: [
                        {
                            language: "dockerfile",
                            code: "# Stage 1: Build\nFROM node:20-alpine AS build\nWORKDIR /app\nCOPY package.json ./\nRUN npm install\nCOPY . .\nRUN npm run build\n\n# Stage 2: Runtime\nFROM node:20-alpine AS runner\nWORKDIR /app\n# Only copy the final DIST folder from previous stage!\nCOPY --from=build /app/dist ./dist\nCOPY --from=build /app/package.json ./\nRUN npm install --omit=dev\n\nUSER node\nCMD [\"node\", \"dist/index.js\"]"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "feat/optimized-builds",
                commitMessageKey: "courses.hceDevops101.t3.git.commit",
                files: [{ name: "Dockerfile", type: "file", contentKey: "courses.hceDevops101.t3.git.f1.content" }],
                activeFileSnippet: { filename: "Dockerfile", codeKey: "courses.hceDevops101.t3.git.snippetCode" }
            },
            community: {
                aiSummaryKey: "courses.hceDevops101.t3.community.summary",
                solutions: []
            }
        },
        {
            id: "HCE-DEVOPS-101-M5-T1",
            moduleId: "HCE-DEVOPS-101-M5",
            sequenceNumber: 1,
            titleKey: "courses.hceDevops101.t5.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceDevops101.t5.what",
            whyKey: "courses.hceDevops101.t5.why",
            whenKey: "courses.hceDevops101.t5.when",
            howKey: "courses.hceDevops101.t5.how",
            ecosystemKey: "courses.hceDevops101.t5.ecosystem",
            realWorldKey: "courses.hceDevops101.t5.realWorld",
            useCasesKeys: [
                "courses.hceDevops101.t5.useCases.uc1",
                "courses.hceDevops101.t5.useCases.uc2",
                "courses.hceDevops101.t5.useCases.uc3"
            ],
            advantagesKeys: [
                "courses.hceDevops101.t5.advantages.ad1",
                "courses.hceDevops101.t5.advantages.ad2",
                "courses.hceDevops101.t5.advantages.ad3"
            ],
            disadvantagesKeys: [
                "courses.hceDevops101.t5.disadvantages.da1",
                "courses.hceDevops101.t5.disadvantages.da2"
            ],
            interviewTipKey: "courses.hceDevops101.t5.interviewTip",
            resumeBulletKey: "courses.hceDevops101.t5.resumeBullet",
            videos: [
                { type: "public", titleKey: "courses.hceDevops101.t5.videos.v1.title", authorKey: "courses.hceDevops101.t5.videos.v1.author", viewsKey: "courses.hceDevops101.t5.videos.v1.views", durationKey: "courses.hceDevops101.t5.videos.v1.duration", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
                { type: "public", titleKey: "courses.hceDevops101.t5.videos.v2.title", authorKey: "courses.hceDevops101.t5.videos.v2.author", viewsKey: "courses.hceDevops101.t5.videos.v2.views", durationKey: "courses.hceDevops101.t5.videos.v2.duration", url: "https://www.youtube.com/watch?v=scEDHsr3APg" }
            ],
            moocs: [
                { platform: "GitHub Skills", rating: 5.0, titleKey: "courses.hceDevops101.t5.moocs.m1.title", instructorKey: "courses.hceDevops101.t5.moocs.m1.instructor", enrolledKey: "courses.hceDevops101.t5.moocs.m1.enrolled", durationKey: "courses.hceDevops101.t5.moocs.m1.duration", url: "https://skills.github.com/" }
            ],
            blogs: [
                { type: "Architecture", titleKey: "courses.hceDevops101.t5.blogs.b1.title", publisherKey: "courses.hceDevops101.t5.blogs.b1.publisher", readTimeKey: "courses.hceDevops101.t5.blogs.b1.readTime", url: "https://cloud.google.com/architecture/devops/devops-process-continuous-delivery" }
            ],
            scenarios: [
                {
                    id: "5.1", difficulty: "Expert", titleKey: "courses.hceDevops101.t5.scenarios.s1.title", categoryKey: "common.categories.devSecOps", estimatedTimeKey: "common.duration.4hours",
                    scenarioDescriptionKey: "courses.hceDevops101.t5.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceDevops101.t5.scenarios.s1.analysis",
                    architectureLayersKeys: ["courses.hceDevops101.t5.scenarios.s1.layers.l1", "courses.hceDevops101.t5.scenarios.s1.layers.l2", "courses.hceDevops101.t5.scenarios.s1.layers.l3"],
                    toolsAndTech: [{ nameKey: "common.tools.trufflehog", justificationKey: "courses.hceDevops101.t5.scenarios.s1.tools.j1" }],
                    tradeOffsKeys: ["courses.hceDevops101.t5.scenarios.s1.tradeOffs.t1"],
                    nfrConsiderationsKeys: ["courses.hceDevops101.t5.scenarios.s1.nfr.n1"],
                    kpisKeys: ["courses.hceDevops101.t5.scenarios.s1.kpis.k1"],
                    keyInsightsKey: "courses.hceDevops101.t5.scenarios.s1.insights"
                }
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceDevops101.t5.playgrounds.p1.title",
                    descriptionKey: "courses.hceDevops101.t5.playgrounds.p1.description",
                    examples: [
                        {
                            language: "yaml",
                            code: "name: CI Pipeline\non: [push]\njobs:\n  run-tests:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Setup Node\n        uses: actions/setup-node@v3\n        with: [node-version: 20]\n      - run: npm install\n      - run: npm test"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "infra/cicd-v1",
                commitMessageKey: "courses.hceDevops101.t5.git.commit",
                files: [{ name: ".github/workflows/ci.yml", type: "file", contentKey: "courses.hceDevops101.t5.git.f1.content" }],
                activeFileSnippet: { filename: "ci.yml", codeKey: "courses.hceDevops101.t5.git.snippetCode" }
            },
            community: {
                aiSummaryKey: "courses.hceDevops101.t5.community.summary",
                solutions: []
            }
        }
    ],
    videoCount: 240,
    articleCount: 160,
    problemCount: 95,
    capstoneProject: {
        titleKey: "courses.hceDevops101.capstone.title",
        descriptionKey: "courses.hceDevops101.capstone.description",
        estimatedDays: 15,
        skillsFocusedKeys: [
            "courses.hceDevops101.capstone.skills.s1",
            "courses.hceDevops101.capstone.skills.s2",
            "courses.hceDevops101.capstone.skills.s3",
            "courses.hceDevops101.capstone.skills.s4",
            "courses.hceDevops101.capstone.skills.s5"
        ],
        steps: [
            {
                titleKey: "courses.hceDevops101.capstone.steps.p1.title",
                descriptionKey: "courses.hceDevops101.capstone.steps.p1.description"
            },
            {
                titleKey: "courses.hceDevops101.capstone.steps.p2.title",
                descriptionKey: "courses.hceDevops101.capstone.steps.p2.description"
            },
            {
                titleKey: "courses.hceDevops101.capstone.steps.p3.title",
                descriptionKey: "courses.hceDevops101.capstone.steps.p3.description"
            },
            {
                titleKey: "courses.hceDevops101.capstone.steps.p4.title",
                descriptionKey: "courses.hceDevops101.capstone.steps.p4.description"
            }
        ]
    },
    totalEstimatedHours: 65,
    estimatedCompletionDays: 60,
    moduleCount: 5,
    createdAt: "2026-02-27T00:00:00Z",
    updatedAt: "2026-02-27T00:00:00Z",
    version: "1.0",
    status: "published"
};
