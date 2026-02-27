import { CourseEnhanced } from './types';

export const hceDevops101: CourseEnhanced = {
    id: "HCE DEVOPS 101",
    titleKey: "courses.hceDevops101",
    descKey: "courses.hceDevops101Desc",
    icon: "☁️",
    duration: "6 weeks",
    languages: ["Bash", "Linux", "Docker", "YAML"],
    category: "high-code",
    programIds: ["HCE DEVOPS", "HCE BACK", "HCE FULL"],
    trackId: "hce",
    level: "beginner",
    prerequisites: ["CORE CS 101", "CORE PROG PY"],
    targetAudience: "Engineers focusing on automating deployments, infrastructure-as-code foundations, and Linux systems administration.",
    learningOutcomes: [
        "Master advanced Linux administration and complex Bash automation",
        "Engineer production-grade multi-stage Docker containers",
        "Design secure cloud architectures on AWS (EC2, VPC, IAM)",
        "Implement automated CI/CD pipelines using GitHub Actions",
        "Master network protocol security and SSH-based remote administration"
    ],
    modules: [
        {
            id: "HCE-DEVOPS-101-M1",
            title: "Linux Engineering & Shell Automation",
            description: "Controlling the server kernel without a GUI.",
            sequenceNumber: 1,
            estimatedHours: 12,
            topics: ["HCE-DEVOPS-101-M1-T1", "HCE-DEVOPS-101-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Navigate and manipulate the Linux VFS (Virtual File System)",
                "Manage complex user permissions and ACLs (Access Control Lists)",
                "Write idempotent Bash scripts for server bootstrapping"
            ]
        },
        {
            id: "HCE-DEVOPS-101-M2",
            title: "Networking & Infrastructure Security",
            description: "Securing the bits as they travel across the wire.",
            sequenceNumber: 2,
            estimatedHours: 10,
            topics: ["HCE-DEVOPS-101-M2-T1", "HCE-DEVOPS-101-M2-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-101-M1"],
            outcomes: [
                "Configure secure SSH tunnels and Key-based authentication",
                "Implement basic firewalls (iptables/UFW) and network isolation",
                "Understand DNS, TCP/IP, and the OSI model in cloud contexts"
            ]
        },
        {
            id: "HCE-DEVOPS-101-M3",
            title: "Containerization with Docker",
            description: "Atomic packaging for the modern cloud.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["HCE-DEVOPS-101-M3-T1", "HCE-DEVOPS-101-M3-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-101-M2"],
            outcomes: [
                "Write optimized multi-stage Dockerfiles to minimize image size",
                "Orchestrate complex local environments with Docker Compose",
                "Implement container security best practices (Non-root users, Secret mounting)"
            ]
        },
        {
            id: "HCE-DEVOPS-101-M4",
            title: "Public Cloud: Amazon Web Services (AWS)",
            description: "Renting massive-scale infrastructure instantly.",
            sequenceNumber: 4,
            estimatedHours: 15,
            topics: ["HCE-DEVOPS-101-M4-T1", "HCE-DEVOPS-101-M4-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-101-M3"],
            outcomes: [
                "Provision and secure EC2 instances with Security Groups",
                "Architect scalable storage using S3 and high-availability RDS databases",
                "Enforce Principle of Least Privilege using AWS IAM Roles and Policies"
            ]
        },
        {
            id: "HCE-DEVOPS-101-M5",
            title: "The CI/CD Lifecycle",
            description: "Automating the path from Code to Production.",
            sequenceNumber: 5,
            estimatedHours: 10,
            topics: ["HCE-DEVOPS-101-M5-T1", "HCE-DEVOPS-101-M5-T2"],
            prerequisiteModuleIds: ["HCE-DEVOPS-101-M4"],
            outcomes: [
                "Build automated testing and linting pipelines in GitHub Actions",
                "Automate Docker image builds and pushes to ECR (Elastic Container Registry)",
                "Implement blue/green or rolling deployment strategies via automation"
            ]
        }
    ],
    topics: [
        {
            id: "HCE-DEVOPS-101-M1-T1",
            moduleId: "HCE-DEVOPS-101-M1",
            sequenceNumber: 1,
            title: "Linux System Internals & Permissions",
            estimatedMinutes: 240,
            what: "Linux is the foundation of the modern internet. System Internals refers to understanding how the kernel manages memory, processes, and the 'Virtual File System' (VFS). Permissions (rwx) are the primary security mechanism that dictates which users or processes can access which data. Understanding `chmod`, `chown`, and `umask` is mandatory for any server operator.",
            why: "If a web application is hacked, but it is running as a restricted 'non-privileged' user, the hacker is 'Trapped' and cannot read sensitive system files or other users' data. Without master of Linux permissions, you will inevitably build insecure, 'wide-open' servers that are easy targets for ransomware.",
            when: "Every time you provision a new server, install a database, or set up a web server like Nginx or Apache.",
            how: "Use `ls -la` to view permissions. Use octal notation (e.g. `chmod 600 config.yaml`) to set precise read/write bits. Use `sudo` to escalate privileges only when absolutely necessary, following the principle of least privilege.",
            ecosystem: "Ubuntu, Debian, RHEL, CentOS, Alpine Linux, MacOS (Zsh/Bash).",
            realWorld: "At companies like Google, almost every server runs a custom version of Linux. Even 'Serverless' products like AWS Lambda actually run inside tiny, highly secured Linux containers behind the scenes. Mastery of the shell is mastery of the cloud.",
            useCases: [
                "Hardening a production database server by locking down config file access",
                "Building a secure file-upload service that doesn't allow cross-user reading",
                "Automating nightly backups with encrypted rsync scripts"
            ],
            advantages: [
                "Unbeatable performance: No GUI overhead means more RAM for your app",
                "Total Control: You can automate every single byte of the operating system",
                "Free & Open Source: No licensing fees for 10,000 servers"
            ],
            disadvantages: [
                "Steep learning curve (Zero icons, zero buttons, zero safety nets)",
                "One wrong command as 'root' (`rm -rf /`) can literally destroy an entire company's infrastructure in seconds"
            ],

            interviewTip: "If asked 'How do you secure a Linux file?', don't just say `chmod`. Talk about the 'Principle of Least Privilege'. Explain that you would create a dedicated service-user that only has 'Read' access to the config and 'Write' access only to its specific log directory.",
            resumeBullet: "Hardened 50+ Linux production nodes by implementing restrictive IAM-aligned file permissions and disabling root SSH access, reducing attack surface by 90%.",

            videos: [
                { type: "public", title: "Linux for Ethical Hackers & Engineers", author: "The Cyber Mentor", views: "2M views", duration: "2:15:00", url: "https://www.youtube.com/watch?v=wH9p_m5H-m4" },
                { type: "public", title: "Mastering Linux File Permissions", author: "NetworkChuck", views: "800K views", duration: "15:20", url: "https://www.youtube.com/watch?v=5VAnYv3K5kI" }
            ],
            moocs: [
                { platform: "Linux Foundation", rating: 4.8, title: "Introduction to Linux", instructor: "Jerry Cooperstein", enrolled: "1M+", duration: "80 hours", url: "https://training.linuxfoundation.org/training/introduction-to-linux/" }
            ],
            blogs: [
                { type: "Core", title: "The Unix File System Explained", publisher: "FreeBSD Docs", readTime: "40 min", url: "https://docs.freebsd.org/en/books/handbook/basics/#basics-file-system" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Rogue Webserver", category: "Security Ops", estimatedTime: "3 hours",
                    scenarioDescription: "A developer deploys a new PHP site. Within 1 hour, a hacker uploads a script that reads `/etc/shadow` (containing hashed passwords). The site was running as 'root'.",
                    problemAnalysis: "This is a 'Privilege Escalation' failure. Because the web server process had root permissions, the hacked script inherited those permissions. A proper setup would have the site running as `www-data`, which is physically restricted from reading system-critical shadow files.",
                    architectureLayers: ["Process Management Layer", "System Permissions Layer", "Application Layer"],
                    toolsAndTech: [{ name: "chown & usermod", justification: "By creating a dedicated user with `useradd -r` and giving it ownership of ONLY the website directory via `chown`, we 'Jail' the process. If it's hacked, the hacker can only see the website files, not the server's passwords." }],
                    tradeOffs: ["Setting up dedicated users adds overhead to the deployment script but is mandatory for security."],
                    nfrConsiderations: ["Compliance: Must meet SOC2/ISO 27001 requirements for process isolation."],
                    kpis: ["Achieve 100% 'Non-Root' process execution for all public-facing apps."],
                    keyInsights: "Root is a drug. It's powerful, but it will eventually kill your server if you use it for everything."
                }
            ],
            playgrounds: [
                {
                    title: "Permission Math Sandbox",
                    description: "Understanding octal vs symbolic modes.",
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
                commitMessage: "security: updated server bootstrap script to enforce 600 permissions on all API secret files",
                files: [{ name: "scripts/setup.sh", type: "file", content: "bash script" }],
                activeFileSnippet: { filename: "setup.sh", code: "find /etc/secrets -type f -exec chmod 600 {} +" }
            },
            community: {
                aiSummary: "Linux is 'Unforgiving but Logical'. If you get 'Permission Denied', it's because YOU didn't grant it. Don't use `sudo` to fix every problem; fix the permissions instead.",
                solutions: []
            }
        },
        {
            id: "HCE-DEVOPS-101-M3-T1",
            moduleId: "HCE-DEVOPS-101-M3",
            sequenceNumber: 1,
            title: "Docker Architectures & Multi-Stage Builds",
            estimatedMinutes: 240,
            what: "Docker is a containerization engine. 'Multi-Stage Builds' is an advanced technique where you use one Docker image to 'Build' your code (installing heavy compilers and dev-dependencies) and a second, much smaller image to 'Run' your code. This results in tiny, secure, and fast-to-deploy production images.",
            why: "If you ship your source code and build tools (`npm`, `gcc`, `git`) inside your production container, you are giving a hacker a 'Toolbox'. If they hack your app, they can use your own tools to attack the rest of your network. Multi-stage builds remove these tools, leaving ONLY the compiled application.",
            when: "Every time you build a production application in Node.js, Go, Rust, or Java.",
            how: "Use multiple `FROM` instructions in your Dockerfile. Name stages using `AS` (e.g. `FROM node AS build`). Copy the artifacts from the build stage to the final stage using `COPY --from=build`.",
            ecosystem: "Docker Desktop, Podman, BuildKit, Docker Hub, ECR (Amazon), GCR (Google).",
            realWorld: "A standard Node.js image might be 900MB. Using a Multi-Stage build with an 'Alpine Linux' base, that same app can be reduced to < 50MB. This saves thousands of dollars in monthly cloud storage and bandwidth costs for companies like Uber.",
            useCases: [
                "Reducing a 1GB Java image to 200MB for faster ECS deployments",
                "Stripping out SSH keys and Git credentials from the final container",
                "Ensuring the exact same binaries are tested in CI and run in Production"
            ],
            advantages: [
                "Incredibly small footprint: Ships 10x faster over the network",
                "Significantly more secure: Zero unnecessary binaries available to attackers",
                "Lower infrastructure costs: Alpine-based containers require less RAM"
            ],
            disadvantages: [
                "Slightly more complex Dockerfiles to write and maintain",
                "Alpine Linux (musl) can occasionally have compatibility issues with C-based Node modules"
            ],

            interviewTip: "If asked 'How do you secure a Docker image?', mention Multi-stage builds and 'Non-root users'. Explain that even if a container is small, it shouldn't run as root. Show them you know the `USER` instruction.",
            resumeBullet: "Optimized Docker build pipelines utilizing multi-stage builds and Alpine base images, reducing image sizes by 85% and cutting deployment lag by 4 minutes.",

            videos: [
                { type: "public", title: "Docker Containerization Course", author: "Codedamn", views: "300K views", duration: "1:45:00", url: "https://www.youtube.com/watch?v=pg19Z8LL06w" },
                { type: "public", title: "Docker Multi-Stage Builds Explained", author: "Nana Janashia", views: "250K views", duration: "15:10", url: "https://www.youtube.com/watch?v=0m_S_A9_T_E" }
            ],
            moocs: [
                { platform: "Udemy", rating: 4.8, title: "Docker Mastery", instructor: "Bret Fisher", enrolled: "300K+", duration: "20 hours", url: "https://www.udemy.com/course/docker-mastery/" }
            ],
            blogs: [
                { type: "Architecture", title: "Top 10 Docker Security Best Practices", publisher: "Snyk", readTime: "25 min", url: "https://snyk.io/blog/10-docker-image-security-best-practices/" }
            ],
            scenarios: [
                {
                    id: "3.1", difficulty: "Hard", title: "The Bloated Image", category: "Performance Engineering", estimatedTime: "2 hours",
                    scenarioDescription: "A Python AI app's Docker image is 5GB. It takes 10 minutes to download onto a new AWS server, meaning the 'Auto-scaling' takes too long to respond to traffic spikes. The CTO wants it under 500MB.",
                    problemAnalysis: "The image contains the entire standard Ubuntu OS, the C++ compiler (used once to build a library), and every single Python dev-dependency including testing frameworks. We need to split the Build and Runtime environments.",
                    architectureLayers: ["Build Stage (Compilers)", "Runtime Stage (Python Binary)", "Storage Layer (Registry)"],
                    toolsAndTech: [{ name: "Docker BuildKit & Multi-stage", justification: "By using `python:3.11-slim` for the final stage and only copying the `site-packages` from the build stage, we can eliminate 4GB of compilers and OS junk instantly." }],
                    tradeOffs: ["Slim images lack basic tools like `curl` or `bash` for debugging; you must install them temporarily if needed."],
                    nfrConsiderations: ["Availability: Auto-scaling must trigger in < 2 minutes (requires small images)."],
                    kpis: ["Reduce image size from 5GB to < 400MB without losing production functionality."],
                    keyInsights: "Weight is the enemy of speed. In DevOps, every extra megabyte is a liability."
                }
            ],
            playgrounds: [
                {
                    title: "Multi-Stage Dockerfile Template",
                    description: "A production-perfect Dockerfile for any Node/React app.",
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
                commitMessage: "perf: converted monolithic Dockerfile to multi-stage build, reducing storage requirements by 90%",
                files: [{ name: "Dockerfile", type: "file", content: "docker logic" }],
                activeFileSnippet: { filename: "Dockerfile", code: "FROM alpine:3.18\nRUN apk add --no-cache ca-certificates" }
            },
            community: {
                aiSummary: "Containers are NOT Virtual Machines. They are isolated processes. Treat them like transient worker bees, not pets. If it's too big, it's wrong.",
                solutions: []
            }
        },
        {
            id: "HCE-DEVOPS-101-M5-T1",
            moduleId: "HCE-DEVOPS-101-M5",
            sequenceNumber: 1,
            title: "GitHub Actions: Automated CI/CD Pipelines",
            estimatedMinutes: 240,
            what: "GitHub Actions is an automation platform built directly into GitHub. It allows you to define workflows in YAML that trigger on events (like a Code Push or a Pull Request). A pipeline typically has three stages: LINT (check code style), TEST (verify logic), and DEPLOY (push to the cloud).",
            why: "Manual deployments are the #1 cause of outages. An engineer forgets to run tests, or forgets to copy a specific file, and production goes down. A CI/CD pipeline is 'Documentation that executes'—it ensures the exact same steps are followed every single time without exception.",
            when: "Every professional project requires a pipeline before the first person is allowed to merge code.",
            how: "Create a `.github/workflows/deploy.yml` file. Define the OS (e.g. `ubuntu-latest`). Use 'Actions' from the GitHub Marketplace (like `actions/checkout@v4`). Link your AWS/Docker secrets to the GitHub repository variables so the pipeline can authenticate to your cloud safely.",
            ecosystem: "GitHub Actions, CircleCI, GitLab CI, Jenkins, ArgoCD (for Kubernetes).",
            realWorld: "At Stripe, thousands of developers commit code daily. No one 'deploys' manually. A GitHub Action runs 10,000+ tests on every commit. If even one test fails, the code is blocked from production. This is how they maintain 99.999% uptime.",
            useCases: [
                "Automatically running ESLint to catch bugs before they are merged",
                "Building and pushing a Docker image to Amazon ECR every night",
                "Deploying a static React site to AWS S3 instantly upon every Git tag"
            ],
            advantages: [
                "Fully managed: No need to maintain your own 'Build Server' (like Jenkins)",
                "Deep Integration: See the build status directly on your Pull Request page",
                "Massive Library: Thousands of ready-made actions for AWS, Slack, and Discord"
            ],
            disadvantages: [
                "YAML syntax is 'Indentation Sensitive' and can be hard to debug",
                "Security Risk: If a hacker gets access to your GitHub, they get your Production Cloud keys"
            ],

            interviewTip: "If asked 'How do you handle secrets in a pipeline?', never say 'I put them in the YAML'. Say: 'I use GitHub Encrypted Secrets, which are injected into the environment only during runtime and masked in the logs.'",
            resumeBullet: "Implemented a fully automated CI/CD pipeline using GitHub Actions, reducing deployment cycle time from 2 hours to 5 minutes and ensuring 0% un-tested code in production.",

            videos: [
                { type: "public", title: "GitHub Actions Tutorial for Beginners", author: "TechWorld with Nana", views: "600K views", duration: "45:10", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
                { type: "public", title: "CICD Pipelines for Developers", author: "Codedamn", views: "100K views", duration: "12:15", url: "https://www.youtube.com/watch?v=scEDHsr3APg" }
            ],
            moocs: [
                { platform: "GitHub Skills", rating: 5.0, title: "Automate workflows with GitHub Actions", instructor: "GitHub Team", enrolled: "500K+", duration: "4 hours", url: "https://skills.github.com/" }
            ],
            blogs: [
                { type: "Architecture", title: "Modern CI/CD Principles", publisher: "Google Cloud Blog", readTime: "30 min", url: "https://cloud.google.com/architecture/devops/devops-process-continuous-delivery" }
            ],
            scenarios: [
                {
                    id: "5.1", difficulty: "Expert", title: "The Secret Leak", category: "DevSecOps", estimatedTime: "4 hours",
                    scenarioDescription: "A junior developer accidentally commits an AWS Access Key into a public `deploy.yml` file. Within 2 minutes, bots find the key and start spinning up $50,000 worth of Bitcoin mining servers on the company's account.",
                    problemAnalysis: "This is a 'Secret Leak'. Key exposure is the most common way cloud accounts are destroyed. We need an automated way to prevent this from ever reaching GitHub, and a way to instantly 'Rotate' keys if it does.",
                    architectureLayers: ["Secret Management Layer", "Git Hook Layer", "Cloud Identity Layer"],
                    toolsAndTech: [{ name: "trufflehog & GitHub Secrets", justification: "TruffleHog scans every commit for high-entropy strings (keys). By configuring it as a 'Pre-commit hook' or a CI job, the leak would have been caught before it was ever uploaded. Additionally, we should use 'OIDC' (OpenID Connect) so that GitHub Actions has 'Temporary' access to AWS without needing any permanent keys at all." }],
                    tradeOffs: ["OIDC is harder to configure initially but significantly more secure than long-lived keys."],
                    nfrConsiderations: ["Security: Zero hard-coded credentials in the entire codebase."],
                    kpis: ["Target 100% elimination of long-lived AWS keys in favor of OIDC roles."],
                    keyInsights: "Keys are like cash; if you lose them, they are gone. Use IAM roles, which are like ID cards."
                }
            ],
            playgrounds: [
                {
                    title: "The Hello World Pipeline",
                    description: "A simple workflow to test your code on every commit.",
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
                commitMessage: "infra: added GitHub Actions workflow for automated unit testing and Docker health-checks",
                files: [{ name: ".github/workflows/ci.yml", type: "file", content: "yaml logic" }],
                activeFileSnippet: { filename: "ci.yml", code: "on:\n  pull_request:\n    branches: [main]" }
            },
            community: {
                aiSummary: "The 'YAML' era of DevOps is here. Your job isn't to click buttons in a UI; it's to write code that builds code. If it isn't automated, it doesn't exist.",
                solutions: []
            }
        }
    ],
    videoCount: 240,
    articleCount: 160,
    problemCount: 95,
    capstoneProject: {
        title: "The Secure Auto-Scaling Infrastructure",
        description: "You will architect and deploy a production-grade cloud application from scratch. First, you'll containerize a full-stack Node/React application using multi-stage Dockerfiles and non-root users for maximum security. Next, you will provision an AWS environment containing an EC2 instance, an RDS database, and an S3 bucket for static assets. You will then write a GitHub Actions workflow that automatically triggers on every Git Push, builds your Docker images, runs 100% of your unit tests, and deploys the new containers to AWS using a zero-downtime rolling update strategy. Finally, you will implement basic 'Infrastructure Monitoring' to alert you via Discord if the server goes down. This project proves you can handle the complete engineering lifecycle from Local Development to Cloud Scale.",
        estimatedDays: 15,
        skillsFocused: [
            "Linux Server Hardening",
            "Advanced Docker (Multi-Stage)",
            "Public Cloud (AWS Architecture)",
            "CI/CD Pipelines (GitHub Actions)",
            "Infrastructure Monitoring"
        ],
        steps: [
            {
                title: "Phase 1: Container Hardening",
                description: "Develop a secure, multi-stage Dockerfile that strips out all build-time tools."
            },
            {
                title: "Phase 2: Cloud Provisioning",
                description: "Set up the AWS networking (Security Groups, IAM) and database infrastructure."
            },
            {
                title: "Phase 3: The Automation Pipeline",
                description: "Author the GitHub Actions YAML to bridge your repo to your cloud servers."
            },
            {
                title: "Phase 4: Monitoring & Health",
                description: "Implement a healthcheck endpoint and an automated Uptime monitoring bot."
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
