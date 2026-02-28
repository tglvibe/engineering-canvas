import { CourseEnhanced } from './types';

export const hceDevops201: CourseEnhanced = {
    id: "HCE DEVOPS 201",
    titleKey: "courses.hceDevops201",
    descKey: "courses.hceDevops201Desc",
    icon: "🌊",
    durationKey: "common.duration.8weeks",
    languagesKeys: ["common.langs.terraform", "common.langs.kubernetes", "common.langs.promQL", "common.langs.go", "common.langs.helm"],
    category: "high-code",
    programIds: ["HCE DEVOPS"],
    trackId: "hce",
    level: "advanced",
    prerequisitesKeys: ["courses.hceDevops101", "courses.hceBack201"],
    targetAudienceKey: "courses.hceDevops201.targetAudience",
    learningOutcomesKeys: [
        "courses.hceDevops201.outcomes.o1",
        "courses.hceDevops201.outcomes.o2",
        "courses.hceDevops201.outcomes.o3",
        "courses.hceDevops201.outcomes.o4",
        "courses.hceDevops201.outcomes.o5"
    ],
    modules: [
        {
            id: "HCE-DEVOPS-201-M1",
            titleKey: "courses.hceDevops201.m1.title",
            descriptionKey: "courses.hceDevops201.m1.description",
            sequenceNumber: 1,
            estimatedHours: 15,
            topics: ["HCE-DEVOPS-201-M1-T1", "HCE-DEVOPS-201-M1-T2"],
            prerequisiteModuleIds: [],
            outcomesKeys: [
                "courses.hceDevops201.m1.outcomes.o1",
                "courses.hceDevops201.m1.outcomes.o2",
                "courses.hceDevops201.m1.outcomes.o3"
            ]
        },
        {
            id: "HCE-DEVOPS-201-M2",
            titleKey: "courses.hceDevops201.m2.title",
            descriptionKey: "courses.hceDevops201.m2.description",
            sequenceNumber: 2,
            estimatedHours: 20,
            topics: ["HCE-DEVOPS-201-M2-T1", "HCE-DEVOPS-201-M2-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-201-M1"],
            outcomesKeys: [
                "courses.hceDevops201.m2.outcomes.o1",
                "courses.hceDevops201.m2.outcomes.o2",
                "courses.hceDevops201.m2.outcomes.o3"
            ]
        },
        {
            id: "HCE-DEVOPS-201-M3",
            titleKey: "courses.hceDevops201.m3.title",
            descriptionKey: "courses.hceDevops201.m3.description",
            sequenceNumber: 3,
            estimatedHours: 12,
            topics: ["HCE-DEVOPS-201-M3-T1", "HCE-DEVOPS-201-M3-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-201-M2"],
            outcomesKeys: [
                "courses.hceDevops201.m3.outcomes.o1",
                "courses.hceDevops201.m3.outcomes.o2",
                "courses.hceDevops201.m3.outcomes.o3"
            ]
        },
        {
            id: "HCE-DEVOPS-201-M4",
            titleKey: "courses.hceDevops201.m4.title",
            descriptionKey: "courses.hceDevops201.m4.description",
            sequenceNumber: 4,
            estimatedHours: 15,
            topics: ["HCE-DEVOPS-201-M4-T1", "HCE-DEVOPS-201-M4-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-201-M3"],
            outcomesKeys: [
                "courses.hceDevops201.m4.outcomes.o1",
                "courses.hceDevops201.m4.outcomes.o2",
                "courses.hceDevops201.m4.outcomes.o3"
            ]
        },
        {
            id: "HCE-DEVOPS-201-M5",
            titleKey: "courses.hceDevops201.m5.title",
            descriptionKey: "courses.hceDevops201.m5.description",
            sequenceNumber: 5,
            estimatedHours: 12,
            topics: ["HCE-DEVOPS-201-M5-T1", "HCE-DEVOPS-201-M5-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-201-M4"],
            outcomesKeys: [
                "courses.hceDevops201.m5.outcomes.o1",
                "courses.hceDevops201.m5.outcomes.o2",
                "courses.hceDevops201.m5.outcomes.o3"
            ]
        }
    ],
    topics: [
        {
            id: "HCE-DEVOPS-201-M1-T1",
            moduleId: "HCE-DEVOPS-201-M1",
            sequenceNumber: 1,
            titleKey: "courses.hceDevops201.t1.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceDevops201.t1.what",
            whyKey: "courses.hceDevops201.t1.why",
            whenKey: "courses.hceDevops201.t1.when",
            howKey: "courses.hceDevops201.t1.how",
            ecosystemKey: "courses.hceDevops201.t1.ecosystem",
            realWorldKey: "courses.hceDevops201.t1.realWorld",
            useCasesKeys: [
                "courses.hceDevops201.t1.useCases.uc1",
                "courses.hceDevops201.t1.useCases.uc2",
                "courses.hceDevops201.t1.useCases.uc3"
            ],
            advantagesKeys: [
                "courses.hceDevops201.t1.advantages.ad1",
                "courses.hceDevops201.t1.advantages.ad2",
                "courses.hceDevops201.t1.advantages.ad3"
            ],
            disadvantagesKeys: [
                "courses.hceDevops201.t1.disadvantages.da1",
                "courses.hceDevops201.t1.disadvantages.da2"
            ],
            interviewTipKey: "courses.hceDevops201.t1.interviewTip",
            resumeBulletKey: "courses.hceDevops201.t1.resumeBullet",
            videos: [
                { type: "public", titleKey: "courses.hceDevops201.t1.videos.v1.title", authorKey: "courses.hceDevops201.t1.videos.v1.author", viewsKey: "courses.hceDevops201.t1.videos.v1.views", durationKey: "courses.hceDevops201.t1.videos.v1.duration", url: "https://www.youtube.com/watch?v=7xngnjfIlK4" },
                { type: "public", titleKey: "courses.hceDevops201.t1.videos.v2.title", authorKey: "courses.hceDevops201.t1.videos.v2.author", viewsKey: "courses.hceDevops201.t1.videos.v2.views", durationKey: "courses.hceDevops201.t1.videos.v2.duration", url: "https://www.youtube.com/watch?v=f5Epc9L2_8U" }
            ],
            moocs: [
                { platform: "Pluralsight", rating: 4.8, titleKey: "courses.hceDevops201.t1.moocs.m1.title", instructorKey: "courses.hceDevops201.t1.moocs.m1.instructor", enrolledKey: "courses.hceDevops201.t1.moocs.m1.enrolled", durationKey: "courses.hceDevops201.t1.moocs.m1.duration", url: "https://www.pluralsight.com/courses/terraform-getting-started" }
            ],
            blogs: [
                { type: "Architecture", titleKey: "courses.hceDevops201.t1.blogs.b1.title", publisherKey: "courses.hceDevops201.t1.blogs.b1.publisher", readTimeKey: "courses.hceDevops201.t1.blogs.b1.readTime", url: "https://blog.gruntwork.io/a-comprehensive-guide-to-terraform-b3d14ce69ad4" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Expert", titleKey: "courses.hceDevops201.t1.scenarios.s1.title", categoryKey: "courses.common.categories.infrastructureRecovery", estimatedTimeKey: "courses.common.duration.5hours",
                    scenarioDescriptionKey: "courses.hceDevops201.t1.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceDevops201.t1.scenarios.s1.analysis",
                    architectureLayersKeys: ["courses.common.layers.stateManagement", "courses.common.layers.cloudResource", "courses.common.layers.provisioning"],
                    toolsAndTech: [{ nameKey: "courses.common.tools.terraformImport", justificationKey: "courses.hceDevops201.t1.scenarios.s1.tools.j1" }],
                    tradeOffsKeys: ["courses.hceDevops201.t1.scenarios.s1.tradeOffs.t1"],
                    nfrConsiderationsKeys: ["courses.hceDevops201.t1.scenarios.s1.nfr.n1"],
                    kpisKeys: ["courses.hceDevops201.t1.scenarios.s1.kpis.k1"],
                    keyInsightsKey: "courses.hceDevops201.t1.scenarios.s1.insights"
                }
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceDevops201.t1.playgrounds.p1.title",
                    descriptionKey: "courses.hceDevops201.t1.playgrounds.p1.description",
                    examples: [
                        {
                            language: "hcl",
                            code: "provider \"aws\" { region = \"us-east-1\" }\n\n# 1. The Virtual Server\nresource \"aws_instance\" \"app\" {\n  ami           = \"ami-0d5eff06f840b45e9\"\n  instance_type = \"t3.medium\"\n}\n\n# 2. The Database\nresource \"aws_db_instance\" \"db\" {\n  allocated_storage = 20\n  engine            = \"postgres\"\n  instance_class    = \"db.t3.micro\"\n  password          = var.db_password # Never hardcode!\n}\n\noutput \"server_ip\" { value = aws_instance.app.public_ip }"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "infra/terraform-modules",
                commitMessageKey: "courses.hceDevops201.t1.git.commit",
                files: [{ name: "main.tf", type: "file", contentKey: "courses.hceDevops201.t1.git.f1.content" }],
                activeFileSnippet: { filename: "main.tf", codeKey: "courses.hceDevops201.t1.git.snippetCode" }
            },
            community: {
                aiSummaryKey: "courses.hceDevops201.t1.community.summary",
                solutions: []
            }
        },
        {
            id: "HCE-DEVOPS-201-M2-T1",
            moduleId: "HCE-DEVOPS-201-M2",
            sequenceNumber: 1,
            titleKey: "courses.hceDevops201.t2.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceDevops201.t2.what",
            whyKey: "courses.hceDevops201.t2.why",
            whenKey: "courses.hceDevops201.t2.when",
            howKey: "courses.hceDevops201.t2.how",
            ecosystemKey: "courses.hceDevops201.t2.ecosystem",
            realWorldKey: "courses.hceDevops201.t2.realWorld",
            useCasesKeys: [
                "courses.hceDevops201.t2.useCases.uc1",
                "courses.hceDevops201.t2.useCases.uc2",
                "courses.hceDevops201.t2.useCases.uc3"
            ],
            advantagesKeys: [
                "courses.hceDevops201.t2.advantages.ad1",
                "courses.hceDevops201.t2.advantages.ad2",
                "courses.hceDevops201.t2.advantages.ad3"
            ],
            disadvantagesKeys: [
                "courses.hceDevops201.t2.disadvantages.da1",
                "courses.hceDevops201.t2.disadvantages.da2"
            ],
            interviewTipKey: "courses.hceDevops201.t2.interviewTip",
            resumeBulletKey: "courses.hceDevops201.t2.resumeBullet",
            videos: [
                { type: "public", titleKey: "courses.hceDevops201.t2.videos.v1.title", authorKey: "courses.hceDevops201.t2.videos.v1.author", viewsKey: "courses.hceDevops201.t2.videos.v1.views", durationKey: "courses.hceDevops201.t2.videos.v1.duration", url: "https://www.youtube.com/watch?v=VnvRFRk_51k" },
                { type: "public", titleKey: "courses.hceDevops201.t2.videos.v2.title", authorKey: "courses.hceDevops201.t2.videos.v2.author", viewsKey: "courses.hceDevops201.t2.videos.v2.views", durationKey: "courses.hceDevops201.t2.videos.v2.duration", url: "https://www.youtube.com/watch?v=6XGv4vK2r_c" }
            ],
            moocs: [
                { platform: "Linux Foundation", rating: 4.9, titleKey: "courses.hceDevops201.t2.moocs.m1.title", instructorKey: "courses.hceDevops201.t2.moocs.m1.instructor", enrolledKey: "courses.hceDevops201.t2.moocs.m1.enrolled", durationKey: "courses.hceDevops201.t2.moocs.m1.duration", url: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/" }
            ],
            blogs: [
                { type: "Technical", titleKey: "courses.hceDevops201.t2.blogs.b1.title", publisherKey: "courses.hceDevops201.t2.blogs.b1.publisher", readTimeKey: "courses.hceDevops201.t2.blogs.b1.readTime", url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Hard", titleKey: "courses.hceDevops201.t2.scenarios.s1.title", categoryKey: "courses.common.categories.incidentManagement", estimatedTimeKey: "courses.common.duration.4hours",
                    scenarioDescriptionKey: "courses.hceDevops201.t2.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceDevops201.t2.scenarios.s1.analysis",
                    architectureLayersKeys: ["courses.common.layers.appManifest", "courses.common.layers.resourceManagement", "courses.common.layers.nodeControlPlane"],
                    toolsAndTech: [{ nameKey: "courses.common.tools.resourceQuotas", justificationKey: "courses.hceDevops201.t2.scenarios.s1.tools.j1" }],
                    tradeOffsKeys: ["courses.hceDevops201.t2.scenarios.s1.tradeOffs.t1"],
                    nfrConsiderationsKeys: ["courses.hceDevops201.t2.scenarios.s1.nfr.n1"],
                    kpisKeys: ["courses.hceDevops201.t2.scenarios.s1.kpis.k1"],
                    keyInsightsKey: "courses.hceDevops201.t2.scenarios.s1.insights"
                }
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceDevops201.t2.playgrounds.p1.title",
                    descriptionKey: "courses.hceDevops201.t2.playgrounds.p1.description",
                    examples: [
                        {
                            language: "yaml",
                            code: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-server\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: frontend\n  template:\n    metadata:\n      labels:\n        app: frontend\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.21\n        resources:\n          limits:\n            memory: \"128Mi\"\n            cpu: \"500m\"\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: web-service\nspec:\n  selector:\n    app: frontend\n  ports:\n  - port: 80\n  type: LoadBalancer"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "feat/k8s-autoscale",
                commitMessageKey: "courses.hceDevops201.t2.git.commit",
                files: [{ name: "k8s/hpa.yaml", type: "file", contentKey: "courses.hceDevops201.t2.git.f1.content" }],
                activeFileSnippet: { filename: "hpa.yaml", codeKey: "courses.hceDevops201.t2.git.snippetCode" }
            },
            community: {
                aiSummaryKey: "courses.hceDevops201.t2.community.summary",
                solutions: []
            }
        },
        {
            id: "HCE-DEVOPS-201-M3-T1",
            moduleId: "HCE-DEVOPS-201-M3",
            sequenceNumber: 1,
            titleKey: "courses.hceDevops201.t3.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceDevops201.t3.what",
            whyKey: "courses.hceDevops201.t3.why",
            whenKey: "courses.hceDevops201.t3.when",
            howKey: "courses.hceDevops201.t3.how",
            ecosystemKey: "courses.hceDevops201.t3.ecosystem",
            realWorldKey: "courses.hceDevops201.t3.realWorld",
            useCasesKeys: [
                "courses.hceDevops201.t3.useCases.uc1",
                "courses.hceDevops201.t3.useCases.uc2",
                "courses.hceDevops201.t3.useCases.uc3"
            ],
            advantagesKeys: [
                "courses.hceDevops201.t3.advantages.ad1",
                "courses.hceDevops201.t3.advantages.ad2",
                "courses.hceDevops201.t3.advantages.ad3"
            ],
            disadvantagesKeys: [
                "courses.hceDevops201.t3.disadvantages.da1",
                "courses.hceDevops201.t3.disadvantages.da2"
            ],
            interviewTipKey: "courses.hceDevops201.t3.interviewTip",
            resumeBulletKey: "courses.hceDevops201.t3.resumeBullet",
            videos: [
                { type: "public", titleKey: "courses.hceDevops201.t3.videos.v1.title", authorKey: "courses.hceDevops201.t3.videos.v1.author", viewsKey: "courses.hceDevops201.t3.videos.v1.views", durationKey: "courses.hceDevops201.t3.videos.v1.duration", url: "https://www.youtube.com/watch?v=uTEL8Ff1Zvk" },
                { type: "public", titleKey: "courses.hceDevops201.t3.videos.v2.title", authorKey: "courses.hceDevops201.t3.videos.v2.author", viewsKey: "courses.hceDevops201.t3.videos.v2.views", durationKey: "courses.hceDevops201.t3.videos.v2.duration", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Coursera", rating: 4.8, titleKey: "courses.hceDevops201.t3.moocs.m1.title", instructorKey: "courses.hceDevops201.t3.moocs.m1.instructor", enrolledKey: "courses.hceDevops201.t3.moocs.m1.enrolled", durationKey: "courses.hceDevops201.t3.moocs.m1.duration", url: "https://www.coursera.org/learn/site-reliability-engineering-measuring-and-managing-reliability" }
            ],
            blogs: [
                { type: "Core", titleKey: "courses.hceDevops201.t3.blogs.b1.title", publisherKey: "courses.hceDevops201.t3.blogs.b1.publisher", readTimeKey: "courses.hceDevops201.t3.blogs.b1.readTime", url: "https://sre.google/sre-book/table-of-contents/" }
            ],
            scenarios: [
                {
                    id: "3.1", difficulty: "Medium", titleKey: "courses.hceDevops201.t3.scenarios.s1.title", categoryKey: "courses.common.categories.observability", estimatedTimeKey: "courses.common.duration.3hours",
                    scenarioDescriptionKey: "courses.hceDevops201.t3.scenarios.s1.description",
                    problemAnalysisKey: "courses.hceDevops201.t3.scenarios.s1.analysis",
                    architectureLayersKeys: ["courses.common.layers.telemetryCollection", "courses.common.layers.alertingLogic", "courses.common.layers.incidentResponse"],
                    toolsAndTech: [{ nameKey: "courses.common.tools.prometheusRules", justificationKey: "courses.hceDevops201.t3.scenarios.s1.tools.j1" }],
                    tradeOffsKeys: ["courses.hceDevops201.t3.scenarios.s1.tradeOffs.t1"],
                    nfrConsiderationsKeys: ["courses.hceDevops201.t3.scenarios.s1.nfr.n1"],
                    kpisKeys: ["courses.hceDevops201.t3.scenarios.s1.kpis.k1"],
                    keyInsightsKey: "courses.hceDevops201.t3.scenarios.s1.insights"
                }
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceDevops201.t3.playgrounds.p1.title",
                    descriptionKey: "courses.hceDevops201.t3.playgrounds.p1.description",
                    examples: [
                        {
                            language: "promql",
                            code: "# Goal: 99% of requests < 0.2 seconds\n\n# 1. Total Requests\nsum(rate(http_request_duration_seconds_count[5m]))\n\n# 2. 'Good' Requests (under 200ms)\nsum(rate(http_request_duration_seconds_bucket{le=\"0.2\"}[5m]))\n\n# 3. The SLO Calculation (% of Success)\nsum(rate(http_request_duration_seconds_bucket{le=\"0.2\"}[1h])) \n/ \nsum(rate(http_request_duration_seconds_count[1h]))"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "sre/burn-alerts",
                commitMessageKey: "courses.hceDevops201.t3.git.commit",
                files: [{ name: "monitoring/alerts.yaml", type: "file", contentKey: "courses.hceDevops201.t3.git.f1.content" }],
                activeFileSnippet: { filename: "alerts.yaml", codeKey: "courses.hceDevops201.t3.git.snippetCode" }
            },
            community: {
                aiSummaryKey: "courses.hceDevops201.t3.community.summary",
                solutions: []
            }
        }
    ],
    videoCount: 260,
    articleCount: 180,
    problemCount: 90,
    capstoneProject: {
        titleKey: "courses.hceDevops201.capstone.title",
        descriptionKey: "courses.hceDevops201.capstone.description",
        estimatedDays: 20,
        skillsFocusedKeys: [
            "courses.hceDevops201.capstone.skills.s1",
            "courses.hceDevops201.capstone.skills.s2",
            "courses.hceDevops201.capstone.skills.s3",
            "courses.hceDevops201.capstone.skills.s4",
            "courses.hceDevops201.capstone.skills.s5"
        ],
        steps: [
            {
                titleKey: "courses.hceDevops201.capstone.steps.p1.title",
                descriptionKey: "courses.hceDevops201.capstone.steps.p1.description"
            },
            {
                titleKey: "courses.hceDevops201.capstone.steps.p2.title",
                descriptionKey: "courses.hceDevops201.capstone.steps.p2.description"
            },
            {
                titleKey: "courses.hceDevops201.capstone.steps.p3.title",
                descriptionKey: "courses.hceDevops201.capstone.steps.p3.description"
            },
            {
                titleKey: "courses.hceDevops201.capstone.steps.p4.title",
                descriptionKey: "courses.hceDevops201.capstone.steps.p4.description"
            }
        ]
    },
    totalEstimatedHours: 85,
    estimatedCompletionDays: 60,
    moduleCount: 5,
    createdAt: "2026-02-27T00:00:00Z",
    updatedAt: "2026-02-27T00:00:00Z",
    version: "1.0",
    status: "published"
};
