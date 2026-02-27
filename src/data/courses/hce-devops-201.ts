import { CourseEnhanced } from './types';

export const hceDevops201: CourseEnhanced = {
    id: "HCE DEVOPS 201",
    titleKey: "courses.hceDevops201",
    descKey: "courses.hceDevops201Desc",
    icon: "🌊",
    duration: "8 weeks",
    languages: ["Terraform", "Kubernetes", "PromQL", "Go", "Helm"],
    category: "high-code",
    programIds: ["HCE DEVOPS"],
    trackId: "hce",
    level: "advanced",
    prerequisites: ["HCE DEVOPS 101", "HCE BACK 201"],
    targetAudience: "Systems engineers aiming to master cloud-native orchestration, automated infrastructure provisioning, and Google's SRE reliability paradigms.",
    learningOutcomes: [
        "Architect and manage immutable infrastructure using Terraform and Terragrunt",
        "Master Kubernetes (K8s) internals including Control Plane, Etcd, and CNI",
        "Implement enterprise Observability stacks with Prometheus, Grafana, and Opentelemetry",
        "Engineer Service Level Objectives (SLOs) and automated Error Budget policies",
        "Design multi-region Disaster Recovery architectures with high-availability failover"
    ],
    modules: [
        {
            id: "HCE-DEVOPS-201-M1",
            title: "Infrastructure as Code (IaC) Architecture",
            description: "Declarative cloud management at scale.",
            sequenceNumber: 1,
            estimatedHours: 15,
            topics: ["HCE-DEVOPS-201-M1-T1", "HCE-DEVOPS-201-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Architect modular Terraform codebases using Private Registries",
                "Securely manage state locking using DynamoDB and S3 Backends",
                "Implement Infrastructure testing using Terratest and Checkov"
            ]
        },
        {
            id: "HCE-DEVOPS-201-M2",
            title: "Kubernetes & Cloud-Native Orchestration",
            description: "Scaling thousands of containers with algorithmic precision.",
            sequenceNumber: 2,
            estimatedHours: 20,
            topics: ["HCE-DEVOPS-201-M2-T1", "HCE-DEVOPS-201-M2-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-201-M1"],
            outcomes: [
                "Deploy and scale microservices using Deployments, StatefulSets, and DaemonSets",
                "Implement Service Mesh (Istio/Linkerd) for advanced traffic management",
                "Optimise cluster resource usage via Horizontal/Vertical Pod Auto-scalers"
            ]
        },
        {
            id: "HCE-DEVOPS-201-M3",
            title: "Site Reliability Engineering (SRE) Principles",
            description: "Treating Operations as a Software Engineering problem.",
            sequenceNumber: 3,
            estimatedHours: 12,
            topics: ["HCE-DEVOPS-201-M3-T1", "HCE-DEVOPS-201-M3-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-201-M2"],
            outcomes: [
                "Define and monitor SLIs, SLOs, and SLAs for critical business services",
                "Manage Error Budgets to balance feature velocity and system stability",
                "Execute blameless post-mortems and automated incident response"
            ]
        },
        {
            id: "HCE-DEVOPS-201-M4",
            title: "Observability & Performance Engineering",
            description: "Gaining deep visibility into distributed system health.",
            sequenceNumber: 4,
            estimatedHours: 15,
            topics: ["HCE-DEVOPS-201-M4-T1", "HCE-DEVOPS-201-M4-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-201-M3"],
            outcomes: [
                "Architect centralized logging pipelines using ELK or Loki",
                "Implement high-fidelity alerting using PromQL and Alertmanager",
                "Trace distributed requests across microservices using OpenTelemetry"
            ]
        },
        {
            id: "HCE-DEVOPS-201-M5",
            title: "Advanced Cloud Architecture & DR",
            description: "Designing systems that survive catastrophe.",
            sequenceNumber: 5,
            estimatedHours: 12,
            topics: ["HCE-DEVOPS-201-M5-T1", "HCE-DEVOPS-201-M5-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-201-M4"],
            outcomes: [
                "Design multi-region Active-Active cloud architectures for failover",
                "Implement zero-downtime database migrations with AWS DMS",
                "Conduct Chaos Engineering experiments to verify system resilience"
            ]
        }
    ],
    topics: [
        {
            id: "HCE-DEVOPS-201-M1-T1",
            moduleId: "HCE-DEVOPS-201-M1",
            sequenceNumber: 1,
            title: "Terraform & Immutable Infrastructure",
            estimatedMinutes: 240,
            what: "Infrastructure as Code (IaC) with Terraform is the practice of managing and provisioning cloud resources (servers, databases, networks) through machine-readable definition files rather than manual console clicking. Terraform uses a declarative language called HCL (HashiCorp Configuration Language) to describe the 'Desired State' of the infrastructure.",
            why: "Manual infrastructure is 'Snowflake Infrastructure'—every server is slightly different, and no one knows why. IaC ensures that your infrastructure is version-controlled in Git, just like your code. If a production database is accidentally deleted, it can be restored to its exact previous state in seconds by re-running the Terraform script.",
            when: "IaC must be used from the very beginning of any professional cloud project. It is the core requirement for achieving 'Scale' and 'Repeatability'.",
            how: "Define 'Providers' (e.g. AWS, GCP). Write `resource` blocks to define services. Use `terraform plan` to see a diff of what will happen. Use `terraform apply` to instruct the Cloud API to make it real. Manage 'State' in an encrypted remote backend like S3 with DynamoDB for locking.",
            ecosystem: "Terragrunt (for DRY code), TFLint (for linting), Checkov (for security scanning), Pulumi (alternative using TS/Python).",
            realWorld: "During a major regional outage at AWS, Netflix uses Terraform to instantly 'Shift' their entire infrastructure from one region (US-East-1) to another (US-West-2) by simply changing a variable and re-applying their code. This is impossible with manual console clicking.",
            useCases: [
                "Provisioning complex VPC networks with private subnets and NAT gateways",
                "Automating the creation of 500+ identical development environments",
                "Managing Cloud Identity and Access Management (IAM) at an enterprise scale"
            ],
            advantages: [
                "Reproducibility: Create a exact carbon copy of Production in 5 minutes",
                "Auditability: See exactly who changed what, when, and why via Git history",
                "Speed: Provision 1,000 servers in the same time it takes to provision 1"
            ],
            disadvantages: [
                "The 'State File' is a single point of failure; if lost/corrupted, managing the cloud becomes a manual nightmare",
                "HCL is a specialized language with some learning curve for complex logic (loops, conditionals)"
            ],

            interviewTip: "If asked 'How do you handle terraform state?', always say 'Remote Backend with State Locking'. Explain that if two engineers run `apply` at the same time without a lock (via DynamoDB), the state file will corrupt, potentially destroying your cloud resources.",
            resumeBullet: "Architected a modularized Terraform infrastructure supporting multi-region AWS deployments, implementing remote state locking and reducing provisioning errors by 95%.",

            videos: [
                { type: "public", title: "Terraform Course - From Beginner to Expert", author: "FreeCodeCamp", views: "1.2M views", duration: "2:05:00", url: "https://www.youtube.com/watch?v=7xngnjfIlK4" },
                { type: "public", title: "Infrastructure as Code Explained", author: "IBM Technology", views: "300K views", duration: "12:10", url: "https://www.youtube.com/watch?v=f5Epc9L2_8U" }
            ],
            moocs: [
                { platform: "Pluralsight", rating: 4.8, title: "Terraform - Getting Started", instructor: "Ned Bellavance", enrolled: "100K+", duration: "4 hours", url: "https://www.pluralsight.com/courses/terraform-getting-started" }
            ],
            blogs: [
                { type: "Architecture", title: "Comprehensive Guide to Terraform", publisher: "Gruntwork", readTime: "50 min", url: "https://blog.gruntwork.io/a-comprehensive-guide-to-terraform-b3d14ce69ad4" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Expert", title: "The State Split", category: "Infrastructure Recovery", estimatedTime: "5 hours",
                    scenarioDescription: "A lead engineer deletes the Terraform State file from S3. The cloud infrastructure (100 servers) is still running, but Terraform now thinks the world is empty and wants to recreate everything, which would cause an outage.",
                    problemAnalysis: "This is a 'State Disconnect'. The actual cloud resources are 'Orphaned' because Terraform has lost its 'Memory' of them. We must perform a 'Terraform Import' operation to re-sync the state file without destroying the live assets.",
                    architectureLayers: ["State Management Layer", "Cloud Resource Layer", "Provisioning Layer"],
                    toolsAndTech: [{ name: "terraform import & terraformer", justification: "By using `terraform import`, we can tell Terraform: 'Look at this specific AWS Instance ID and treat it as the resource named web_server in my code'. This re-builds the state file bit-by-bit while the app stays online." }],
                    tradeOffs: ["Manual import is tedious; it's better to enable S3 Bucket Versioning on the state bucket to prevent deletion in the first place."],
                    nfrConsiderations: ["Continuity: Zero downtime for end-users during state recovery."],
                    kpis: ["Restore 100% of state-to-resource mappings within 4 hours of detection."],
                    keyInsights: "Terraform State is the 'Brain' of your infrastructure. Protect it more than the infrastructure itself."
                }
            ],
            playgrounds: [
                {
                    title: "The Multi-Cloud Resource",
                    description: "Declaring a server and a database in one file.",
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
                commitMessage: "infra: migrated monolithic tf state to modular architecture with remote S3 backend and DynamoDB locking",
                files: [{ name: "main.tf", type: "file", content: "terraform logic" }],
                activeFileSnippet: { filename: "main.tf", code: "terraform { backend \"s3\" { bucket = \"my-tf-state\"; key = \"prod.tfstate\"; lock_table = \"tf-locks\" } }" }
            },
            community: {
                aiSummary: "The Cloud is an API. If you aren't using Terraform, you are essentially trying to build a modern skyscraper using a hammer and nails instead of a 3D printer.",
                solutions: []
            }
        },
        {
            id: "HCE-DEVOPS-201-M2-T1",
            moduleId: "HCE-DEVOPS-201-M2",
            sequenceNumber: 1,
            title: "Kubernetes Control Plane & Scheduling",
            estimatedMinutes: 240,
            what: "Kubernetes (K8s) is an orchestration platform that manages the lifecycle of containerized applications. The 'Control Plane' is the brain of K8s, consisting of the API Server, Etcd (database), Scheduler, and Controller Manager. The 'Scheduler' is responsible for watching for newly created Pods and assigning them to the healthiest 'Nodes' (Servers) based on resource availability.",
            why: "In a system with 1,000 servers, you cannot manually decide where to put 5,000 containers. K8s does this for you automatically. If a server dies, the Control Plane notices the 'Actual State' no longer matches the 'Desired State' and instantly re-schedules the lost containers onto other active servers.",
            when: "Professional orchestration is required for any application consisting of multiple microservices needing high availability and auto-scaling.",
            how: "Define applications in YAML 'Manifests'. Use `kubectl apply` to send them to the API Server. Kubernetes will record your 'Desired State' in Etcd and the Scheduler will bin-pack your containers across the cluster nodes efficiently.",
            ecosystem: "EKS (AWS), GKE (Google), AKS (Azure), K3s (Lightweight), Helm (Package Manager), ArgoCD (GitOps).",
            realWorld: "During a flash sale at an e-commerce giant, K8s monitors the CPU metrics. If the 'Checkout Service' hits 80% usage, K8s triggers the Horizontal Pod Autoscaler (HPA) to spin up 50 new copies of that service in seconds, then shuts them down once the sale ends to save money.",
            useCases: [
                "Running thousands of microservices with zero-downtime rolling updates",
                "Self-healing: automatically restarting crashed containers without human intervention",
                "Resource Isolation: Ensuring a buggy service doesn't steal RAM from a critical service"
            ],
            advantages: [
                "Incredible Resilience: The cluster is essentially indestructible if properly configured",
                "Cloud Portability: Move your entire company from AWS to GCP in days, not years",
                "Storage & Network Orchestration: K8s handles mounting disks and routing traffic automatically"
            ],
            disadvantages: [
                "Immense Complexity: Managing a raw K8s cluster is a full-time job (often called K8s Fatigue)",
                "Overkill for simple projects: Don't use K8s to host a static personal blog"
            ],

            interviewTip: "Know the difference between a 'Pod' and a 'Container'. In K8s, a Pod is the smallest unit—it's a 'wrapper' that can contain one or more containers that share the same network stack and storage. Most Pods have 1 container, but 'Sidecar' containers are a critical advanced pattern.",
            resumeBullet: "Engineered scalable Kubernetes clusters on AWS EKS, managing 200+ microservices and implementing HPA (Horizontal Pod Autoscaling) to handle 10x traffic bursts.",

            videos: [
                { type: "public", title: "Kubernetes Explained in 15 Minutes", author: "TechWorld with Nana", views: "3M views", duration: "16:15", url: "https://www.youtube.com/watch?v=VnvRFRk_51k" },
                { type: "public", title: "K8s Architecture Deep Dive", author: "Codedamn", views: "150K views", duration: "1:05:00", url: "https://www.youtube.com/watch?v=6XGv4vK2r_c" }
            ],
            moocs: [
                { platform: "Linux Foundation", rating: 4.9, title: "Certified Kubernetes Administrator (CKA)", instructor: "CNCF Team", enrolled: "200K+", duration: "60 hours", url: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/" }
            ],
            blogs: [
                { type: "Technical", title: "Understanding Kubernetes Objects", publisher: "K8s Official Docs", readTime: "30 min", url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Hard", title: "The Cascade Failure", category: "Incident Management", estimatedTime: "4 hours",
                    scenarioDescription: "A developer deploys a new version of the 'Auth Service'. It has a memory leak. Within 10 minutes, it crashes. K8s restarts it. It crashes again. Every time it restarts, it kills the Node it's on, eventually taking down the whole cluster.",
                    problemAnalysis: "This is a 'CrashLoopBackOff' leading to a 'Noisy Neighbor' problem. Because no 'Resource Limits' were set in the YAML, the buggy container expanded until it consumed 100% of the server's RAM, causing the Kernel to kill the server itself.",
                    architectureLayers: ["Application Manifest Layer", "Resource Management Layer", "Node Control Plane"],
                    toolsAndTech: [{ name: "Resource Quotas & Limits", justification: "By defining `resources.limits.memory: 256Mi`, we give K8s a 'Hard Limit'. If the container tries to take 257Mi, K8s will kill ONLY that container, saving the server and the rest of the cluster from crashing." }],
                    tradeOffs: ["Setting limits too low will cause 'OOMKilled' errors for healthy traffic spikes; you must profile your app first."],
                    nfrConsiderations: ["Stability: A single microservice failure must never affect the rest of the cluster."],
                    kpis: ["Achieve 100% 'Hard-Limit' coverage for all production deployments."],
                    keyInsights: "Limits are like fuses in an electrical box. They break so that the whole house doesn't burn down."
                }
            ],
            playgrounds: [
                {
                    title: "The K8s App Manifest",
                    description: "Defining a Deployment and a LoadBalancer Service.",
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
                commitMessage: "feat: implemented Horizontal Pod Autoscaling (HPA) and resource limits for the checkout microservice",
                files: [{ name: "k8s/hpa.yaml", type: "file", content: "k8s yaml" }],
                activeFileSnippet: { filename: "hpa.yaml", code: "minReplicas: 2\nmaxReplicas: 10\ntargetCPUUtilizationPercentage: 75" }
            },
            community: {
                aiSummary: "Kubernetes is a language, not just a tool. Once you learn to speak 'YAML', you can control an unlimited amount of compute power with a single command.",
                solutions: []
            }
        },
        {
            id: "HCE-DEVOPS-201-M3-T1",
            moduleId: "HCE-DEVOPS-201-M3",
            sequenceNumber: 1,
            title: "SRE: SLO Management & Error Budgets",
            estimatedMinutes: 240,
            what: "Site Reliability Engineering (SRE) is a discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems. SLOs (Service Level Objectives) are specific target levels for the reliability of a service. Error Budgets are the amount of 'unreliability' you are allowed to have in a given period (e.g., if you want 99.9% uptime, you have a 43-minute error budget/month).",
            why: "Operating at 100% reliability is impossible. If you try, you will never ship new features because you'll be too busy testing. Error Budgets provide a 'Mathematical Truce' between Product (who want features) and Engineering (who want stability). If you have budget left, you can ship. If the budget is empty, you stop shipping and fix bugs.",
            when: "Implementing SRE is mandatory for companies moving from 'Ad-hoc' operations to 'Industrial-scale' reliability (like Google, Stripe, or Airbnb).",
            how: "Define SLIs (Indicators) like 'Successful Request Latency'. Set an SLO like '99% of requests < 200ms'. Track the 'Monthly Error Budget Burn'. Use tools like Prometheus to alert when the budget is burning too fast.",
            ecosystem: "Google SRE Book (the Bible), Sloth (SLO generator), Nobl9, Prometheus, Grafana.",
            realWorld: "At LinkedIn, if a team 'Burns their budget' by week 3 of a quarter, their feature-flag system is programmatically locked. They can no longer toggle on new features until they spend the remaining week fixing the reliability issues that caused the budget burn.",
            useCases: [
                "Aligning feature velocity with infrastructure stability",
                "Determining when to pause development for a 'Reliability Sprint'",
                "Reporting objective system health to non-technical stakeholders (Execs)"
            ],
            advantages: [
                "Data-Driven Culture: No more arguing about whether a system is 'Lately slow'; the data shows the SLO status",
                "Permission to Fail: Engineers can experiment boldly as long as they stay within budget",
                "Prioritization: Automatically tells you when to stop feature work and start tech-debt work"
            ],
            disadvantages: [
                "Requires deep instrumentation: You can't have an SLO for something you aren't measuring",
                "Culturally difficult: Requires 'Buy-in' from the very top (CEO/CTO) to enforce the budget pauses"
            ],

            interviewTip: "Know the 'Golden Signals' of monitoring: Latency, Traffic, Errors, and Saturation. If asked how to start an SRE program, say 'I'd start by defining SLOs for the 4 Golden Signals of our most critical path'.",
            resumeBullet: "Pioneered SRE methodologies across the engineering org, establishing SLOs and automated Error Budget tracking that improved availability from 99.5% to 99.95%.",

            videos: [
                { type: "public", title: "What is SRE?", author: "Google Cloud Tech", views: "800K views", duration: "10:15", url: "https://www.youtube.com/watch?v=uTEL8Ff1Zvk" },
                { type: "public", title: "SLIs, SLOs, SLAs, oh my!", author: "Grafana Labs", views: "100K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Coursera", rating: 4.8, title: "Site Reliability Engineering: Measuring and Managing Reliability", instructor: "Google Team", enrolled: "500K+", duration: "20 hours", url: "https://www.coursera.org/learn/site-reliability-engineering-measuring-and-managing-reliability" }
            ],
            blogs: [
                { type: "Core", title: "The SRE Book", publisher: "Google (Free Online)", readTime: "Infinite", url: "https://sre.google/sre-book/table-of-contents/" }
            ],
            scenarios: [
                {
                    id: "3.1", difficulty: "Medium", title: "The Burn Rate Alert", category: "Observability", estimatedTime: "3 hours",
                    scenarioDescription: "At 2 AM, the on-call engineer gets an alert: 'Error Budget Burn Rate is 10x'. The budget will be empty in 4 hours if current error rates continue. The app is still 'running' but 5% of users are seeing errors.",
                    problemAnalysis: "A standard threshold alert (e.g. 'Alert if > 1% errors') is too noisy. SRE uses 'Burn Rate' alerts. This tells us a catastrophic problem is slowly eating our future reliability, giving us time to fix it before we violate our monthly goal.",
                    architectureLayers: ["Telemetry Collection Layer", "Alerting Logic Layer", "Incident Response Layer"],
                    toolsAndTech: [{ name: "Prometheus Recording Rules", justification: "By using PromQL to calculate the 'Averaged Error Rate' over a sliding window, we can create sophisticated burn-rate alerts that ignore tiny blips but scream when a real, budget-killing trend starts." }],
                    tradeOffs: ["Burn-rate alerts are mathematically complex to set up correctly compared to static thresholds."],
                    nfrConsiderations: ["Reliability: Zero unplanned budget violations."],
                    kpis: ["Reduce 'False Positive' alerts by 70% using SRE-based alerting patterns."],
                    keyInsights: "Don't alert when a fire starts. Alert when the house starts getting abnormally warm."
                }
            ],
            playgrounds: [
                {
                    title: "The SLO Dashboard Builder",
                    description: "Calculating a Latency SLO in PromQL.",
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
                commitMessage: "sre: added multi-window multi-burn rate alerts to the Prometheus stack for the payments gateway",
                files: [{ name: "monitoring/alerts.yaml", type: "file", content: "prometheus alerts" }],
                activeFileSnippet: { filename: "alerts.yaml", code: "expr: (job:errors:rate5m / job:requests:rate5m) > 10 * (1 - 0.99) / (30 * 24)" }
            },
            community: {
                aiSummary: "The most important job of an SRE is to automate themselves out of a job. If you are doing a manual task twice, write a script. If you are doing it three times, write a system.",
                solutions: []
            }
        }
    ],
    videoCount: 260,
    articleCount: 180,
    problemCount: 90,
    capstoneProject: {
        title: "The Self-Healing Global Infrastructure",
        description: "You will architect and build a truly resilient world-class infrastructure. First, you'll use Terraform to provision a multi-region AWS setup including an EKS cluster and a Global Aurora Database. Next, you will deploy a high-traffic microservice API using Kubernetes, complete with Sidecars for Observability and Horizontal Pod Autoscalers. You will then set up a Prometheus/Grafana stack and define strict SLOs for Latency and Error Rate. To prove the system's reliability, you will write a 'Chaos Script' that randomly kills Pods and Nodes during a high-traffic load test, and you must prove (via your Grafana Dashboard) that the system maintains its 99.9% SLO throughout the chaos. This is as close as it gets to being a Senior SRE at a FAANG company.",
        estimatedDays: 20,
        skillsFocused: [
            "Advanced Terraform (Modules & State Locking)",
            "Production K8s (HPA, Ingress, IAM integration)",
            "Advanced Observability (PromQL & Grafana)",
            "SRE Error Budget Management",
            "Chaos Engineering principles"
        ],
        steps: [
            {
                title: "Phase 1: Immutable Foundation",
                description: "Develop the Terraform modules to build a secure, multi-region production cloud."
            },
            {
                title: "Phase 2: Orchestration & Auto-Scaling",
                description: "Deploy the Kubernetes manifested and configure HPA to respond to synthetic traffic."
            },
            {
                title: "Phase 3: The Observability Watchtower",
                description: "Instrument the cluster with Prometheus and build an SLO-tracking dashboard."
            },
            {
                title: "Phase 4: Chaos & Verification",
                description: "Run 'Chaos Monkey'-style tests and verify that the self-healing K8s logic preserves the budget."
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
