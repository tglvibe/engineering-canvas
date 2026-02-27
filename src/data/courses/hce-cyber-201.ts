import { CourseEnhanced } from './types';

export const hceCyber201: CourseEnhanced = {
    id: "HCE CYBER 201",
    titleKey: "courses.hceCyber201",
    descKey: "courses.hceCyber201Desc",
    icon: "🏴‍☠️",
    duration: "8 weeks",
    languages: ["Python", "C", "Go", "Assembly (x86/ARM)", "PowerShell"],
    category: "high-code",
    programIds: ["HCE CYBER"],
    trackId: "hce",
    level: "advanced",
    prerequisites: ["HCE CYBER 101", "HCE BACK 201"],
    targetAudience: "Advanced security researchers, penetration testers, and red-team engineers aiming to master sophisticated exploitation techniques, binary analysis, and enterprise-scale cloud security.",
    learningOutcomes: [
        "Conduct end-to-end Red Team engagements using the MITRE ATT&CK framework",
        "Exploit advanced memory corruption flaws including Heap Overflows and ROP Chains",
        "Identify and exploit complex Cloud-Native vulnerabilities (SSRF to Metadata leak)",
        "Engineer custom malware and C2 (Command & Control) agents for persistence",
        "Perform deep Binary Reverse Engineering using Ghidra and IDA Pro"
    ],
    modules: [
        {
            id: "HCE-CYBER-201-M1",
            title: "Advanced Offensive Infrastructure & Recon",
            description: "Building the digital sniper nest.",
            sequenceNumber: 1,
            estimatedHours: 15,
            topics: ["HCE-CYBER-201-M1-T1", "HCE-CYBER-201-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Architect stealthy Command & Control (C2) servers using Cobalt Strike or Mythic",
                "Perform deep-recon (OSINT) utilizing specialized search engines (Shodan, Censys)",
                "Implement automated scanning pipelines with custom Nmap Scripting Engine (NSE) scripts"
            ]
        },
        {
            id: "HCE-CYBER-201-M2",
            title: "Exploiting Modern Web & Cloud Stacks",
            description: "Breaking the high-trust boundaries of the cloud.",
            sequenceNumber: 2,
            estimatedHours: 18,
            topics: ["HCE-CYBER-201-M2-T1", "HCE-CYBER-201-M2-T2"],
            prerequisiteModuleIds: ["HCE-CYBER-201-M1"],
            outcomes: [
                "Execute SSRF (Server-Side Request Forgery) to extract Cloud Provider Metadata",
                "Exploit Insecure Deserialization in Java and Python (ysoserial/pickle)",
                "Bypass WAF (Web Application Firewall) filters using advanced encoding and fragmentation"
            ]
        },
        {
            id: "HCE-CYBER-201-M3",
            title: "Binary Exploitation & Memory Safety Bypasses",
            description: "When C code bites back.",
            sequenceNumber: 3,
            estimatedHours: 20,
            topics: ["HCE-CYBER-201-M3-T1", "HCE-CYBER-201-M3-T2"],
            prerequisiteModuleIds: ["HCE-CYBER-201-M2"],
            outcomes: [
                "Engineer Return-Oriented Programming (ROP) chains to bypass DEP/NX",
                "Leak memory addresses to defeat ASLR (Address Space Layout Randomization)",
                "Fuzz proprietary network protocols using American Fuzzy Lop (AFL++)"
            ]
        },
        {
            id: "HCE-CYBER-201-M4",
            title: "Enterprise Post-Exploitation & Pivoting",
            description: "Owning the domain from the inside.",
            sequenceNumber: 4,
            estimatedHours: 15,
            topics: ["HCE-CYBER-201-M4-T1", "HCE-CYBER-201-M4-T2"],
            prerequisiteModuleIds: ["HCE-CYBER-201-M3"],
            outcomes: [
                "Execute lateral movement via Pass-the-Hash and Kerberoasting",
                "Compromise Active Directory (AD) using BloodHound and BloodHound.py",
                "Establish long-term persistent access via Domain Controller persistence"
            ]
        },
        {
            id: "HCE-CYBER-201-M5",
            title: "Reverse Engineering & Malware Analysis",
            description: "Dissecting the enemy's logic.",
            sequenceNumber: 5,
            estimatedHours: 17,
            topics: ["HCE-CYBER-201-M5-T1", "HCE-CYBER-201-M5-T2"],
            prerequisiteModuleIds: ["HCE-CYBER-201-M4"],
            outcomes: [
                "Analyze malware behavior in a safe, air-gapped sandbox environment",
                "Decompile/Disassemble x86/ARM binaries using Ghidra or IDA Pro",
                "Bypass anti-debugging and anti-VM techniques in modern malware"
            ]
        }
    ],
    topics: [
        {
            id: "HCE-CYBER-201-M2-T1",
            moduleId: "HCE-CYBER-201-M2",
            sequenceNumber: 1,
            title: "Server-Side Request Forgery (SSRF) & Cloud Pivoting",
            estimatedMinutes: 240,
            what: "SSRF is a vulnerability where an attacker tricks a web server into making HTTP requests to internal resources it shouldn't access. In cloud environments (AWS/Azure/GCP), the target is often the 'Metadata Service'—an internal API that provides sensitive info, including temporary security credentials (IAM keys).",
            why: "Inside a corporate VPC, servers have high trust. If an attacker can force a server to call `http://169.254.169.254`, they can effectively 'Impersonate' that server. This transforms a web-layer bug into a full-scale cloud takeover, allowing the attacker to steal snapshots, databases, or entire storage buckets.",
            when: "Applications that fetch external content (PDF generators, Image previewers, Webhooks) are at high risk if they don't strictly validate the destination URL.",
            how: "Inject an internal IP or hostname into the URL fetcher. Use techniques like 'DNS Rebinding' to bypass simple blacklist filters. Capture the response and look for 169.254.169.254 headers or internal admin panel content.",
            ecosystem: "Burp Suite (SSRF plugin), Interactsh (Out-of-band), AWS IMDSv2 (Defensive standard).",
            realWorld: "The 2019 Capital One breach (one of the largest in history) was caused by a massive SSRF vulnerability in a misconfigured WAF. The attacker used it to steal AWS credentials, which provided access to thousands of S3 buckets containing 100 million credit applications.",
            useCases: [
                "Escalating from a 'Broken Image' bug to an AWS Account Takeover",
                "Mapping internal network services (Redis, Memcached) through a blind SSRF",
                "Bypassing internal firewalls to access 'Admin-Only' microservices"
            ],
            advantages: [
                "Stealth: The attack comes from the trusted IP of the server itself",
                "Impact: Bypasses the entire 'External' security perimeter in one step",
                "Cloud-Specific: Devastating for modern AWS/GCP infrastructures"
            ],
            disadvantages: [
                "Difficulty: Modern cloud providers (AWS IMDSv2) now require a custom header, making basic SSRF much harder to exploit",
                "Visibility: High-volume scanning for SSRF is easily caught by modern SIEMs"
            ],

            interviewTip: "If asked how to DEFEND against SSRF, mention 'VPC Endpoint Isolation' and 'IMDSv2'. Explain that the server should only be allowed to visit specific domains (Whitelist) and that any internal metadata request must require a session token that an attacker cannot forge.",
            resumeBullet: "Engineered robust SSRF protection layers for cloud-native microservices, implementing strict URL whitelisting and migrating infrastructure to AWS IMDSv2, preventing potential $M-level credential leaks.",

            videos: [
                { type: "public", title: "SSRF to Cloud Provider Credentials", author: "LiveOverflow", views: "400K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Advanced SSRF Bypasses", author: "DefCon", views: "200K views", duration: "45:10", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Hack The Box", rating: 4.8, title: "Cloud Security Pathways", instructor: "HTB Academy", enrolled: "50K+", duration: "30 hours", url: "https://academy.hackthebox.com/module/77" }
            ],
            blogs: [
                { type: "Technical", title: "The Capital One Breach: An Analysis", publisher: "Cloud Security Alliance", readTime: "40 min", url: "https://cloudsecurityalliance.org/blog/2019/08/01/capital-one-breach-the-ssrf-attack/" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Expert", title: "The Metadata Mine", category: "Cloud Security", estimatedTime: "6 hours",
                    scenarioDescription: "A company uses a Node.js 'Screenshot Service' that accepts any URL. The app is running on AWS EC2. Standard filters block `169.254.169.254`. You must find a way to extract the IAM Role keys using a 'Redirect' or 'DNS Rebinding' attack.",
                    problemAnalysis: "The app checks the URL at the START, but doesn't check it during a '302 Redirect'. We can host a server at `attacker.com` that immediately redirects the Fetcher to the AWS Metadata IP. This skips the initial filter check.",
                    architectureLayers: ["Network Ingress Layer", "Application URL Validator", "EC2 Metadata API"],
                    toolsAndTech: [{ name: "Interactsh & Burp Collaborator", justification: "By using an Out-of-Band (OOB) listener, we can see if the server 'pings back'. Once we confirm the redirect works, we can capture the raw JSON of the IAM credentials, which gives us the AccessKey and SecretKey needed to dump the company's S3 buckets." }],
                    tradeOffs: ["DNS Rebinding is complex to set up; redirects are often blocked by modern `fetch` libraries unless explicitly allowed."],
                    nfrConsiderations: ["Detection: Log all outgoing requests from microservices to find abnormal 'Internal-Fetch' patterns."],
                    kpis: ["Achieve 100% 'Zero-Trust' egress filtering for all public-facing fetchers."],
                    keyInsights: "It's not about what the server IS; it's about what the server is ALLOWED to talk to."
                }
            ],
            playgrounds: [
                {
                    title: "The SSRF Laboratory",
                    description: "Testing a redirect bypass in a Python lab.",
                    examples: [
                        {
                            language: "python",
                            code: "import requests\nfrom flask import Flask, request\n\napp = Flask(__name__)\n\n@app.route(\"/proxy\")\ndef proxy():\n    url = request.args.get('url')\n    # ATTACKER INPUT: url=http://attacker.com/302-redirect-to-metadata\n    return requests.get(url).text\n\nif __name__ == \"__main__\":\n    app.run(port=8080)"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "security/ssrf-hardening",
                commitMessage: "security: implemented strict domain whitelisting and disabled 3xx redirects for the PDF generation service",
                files: [{ name: "services/pdf.py", type: "file", content: "security logic" }],
                activeFileSnippet: { filename: "pdf.py", code: "if not is_domain_whitelisted(url): raise SecurityError();\nresponse = requests.get(url, allow_redirects=False)" }
            },
            community: {
                aiSummary: "The 'Metadata' endpoint is the crown jewel. If your server is in the cloud, someone IS trying to make it talk to 169.254.169.254. Build your walls accordingly.",
                solutions: []
            }
        },
        {
            id: "HCE-CYBER-201-M3-T1",
            moduleId: "HCE-CYBER-201-M3",
            sequenceNumber: 1,
            title: "Binary Exploitation: ROP Chains & ASLR Bypasses",
            estimatedMinutes: 240,
            what: "Return-Oriented Programming (ROP) is an advanced technique used to execute malicious code in the presence of security measures like 'Non-Executable Stack' (NX/DEP). Instead of injecting new code, the attacker 'Stitches together' tiny snippets of existing assembly code (called 'Gadgets') already present in the binary or its libraries (like libc) to perform their task.",
            why: "In the 90s, you just put code on the stack and ran it. Modern systems mark the stack as 'Data Only'—it won't run. ROP bypasses this by finding snippets that end in a `RET` (Return) instruction. By overwriting the stack with the addresses of these gadgets, you can make the CPU dance to your melody without ever 'Loading' a single new byte of code.",
            when: "Exploiting high-security targets (C/C++ enterprise apps, browsers, kernels) where modern DEP/NX and ASLR protections are enabled.",
            how: "1. Find a buffer overflow. 2. Use `ROPgadget` to find snippets like `pop rdi; ret`. 3. Find the address of `system()` in memory using a 'Memory Leak' (to bypass ASLR). 4. String the addresses together on the stack to call `/bin/sh`.",
            ecosystem: "GDB (Peda/GEF), pwntools (Python library for exploit dev), ROPgadget, Ghidra (Reverse Engineering).",
            realWorld: "The 'Stagefright' vulnerability on Android allowed a remote attacker to gain full control of a phone just by sending a crafted video message. It relied on a complex ROP chain in a C++ library to bypass Android's advanced security protections. It is the 'Master Key' of the binary world.",
            useCases: [
                "Developing a 'Jailbreak' for a locked-down IoT device or console",
                "Achieving Remote Code Execution (RCE) on a legacy military radar system",
                "Researching Zero-Day vulnerabilities in high-performance networking drivers"
            ],
            advantages: [
                "Unstoppable: Virtually impossible to detect with traditional antivirus because no 'New' code is introduced",
                "Bypasses NX: Bypasses the most common hardware-level memory protection",
                "Reliability: On specific binary versions, a good ROP chain is 100% deterministic"
            ],
            disadvantages: [
                "Fragile: If the binary is recompiled (changing even one byte), the ROP chain breaks",
                "Extreme Complexity: Requires deep knowledge of x86-64 assembly and CPU registers"
            ],

            interviewTip: "Know the 'Gadget'. Explain that a gadget is 1-3 assembly instructions ending in a `RET`. Senior pwners value the ability to explain 'Stack Pivoting'—a technique where you move the stack pointer into your controlled buffer to run an even longer ROP chain.",
            resumeBullet: "Developed sophisticated ROP-based exploits bypassing DEP/ASLR during authorized red-team assessments, resulting in critical RCE findings on legacy C++ infrastructure.",

            videos: [
                { type: "public", title: "Introduction to ROP", author: "LiveOverflow", views: "600K views", duration: "15:20", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Pwntools for Pwners", author: "Codedamn", views: "50K views", duration: "25:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Offensive Security", rating: 4.9, title: "OSEE: Advanced Windows Exploitation", instructor: "OffSec Team", enrolled: "5K+", duration: "80 hours", url: "https://www.offensive-security.com/osee-awe/" }
            ],
            blogs: [
                { type: "Core", title: "The Return-to-libc Attack", publisher: "Insecure.org", readTime: "50 min", url: "https://insecure.org/sploits/return-to-libc.html" }
            ],
            scenarios: [
                {
                    id: "3.1", difficulty: "Expert", title: "The ASLR Leak", category: "Binary Exploitation", estimatedTime: "8 hours",
                    scenarioDescription: "A C binary is protected by ASLR. You have a buffer overflow, but you don't know WHERE the `system()` function is because it moves every time the app starts. You must find a 'Memory Leak' vulnerability to 'See' the address of a known function, calculate the 'Offset', and then land your ROP chain.",
                    problemAnalysis: "ASLR is like a moving target. To hit it, we need an 'Infleak' (Information Leak). If we can trick the program into printing a pointer from its internal GOT (Global Offset Table), we can solve the math: `LeakedAddr - StaticOffset = BaseLibcAddr`. Once we have the Base, we have everything.",
                    architectureLayers: ["CPU Memory Map", "Linker/loader (Dynamic Linking)", "C Runtime (libc)"],
                    toolsAndTech: [{ name: "Pwntools & GDB-GEF", justification: "We use Pwntools to script the two-stage exploit. Stage 1: Trigger the memory leak and parse the pointer. Stage 2: Calculate the ROP chain using the now-known addresses and send the final payload to pop a shell." }],
                    tradeOffs: ["A two-stage exploit is slower and more likely to be logged by an EDR than a one-shot attack."],
                    nfrConsiderations: ["Reliability: The exploit must not crash the parent process, allowing for infinite retries."],
                    kpis: ["Achieve 100% exploit reliability across 50 simulated ASLR-enabled reboots."],
                    keyInsights: "ASLR is not a lock; it's a blindfold. If you can see through it once, the protection is gone."
                }
            ],
            playgrounds: [
                {
                    title: "The Gadget Hunter",
                    description: "Finding a POP/RET sequence using ROPgadget.",
                    examples: [
                        {
                            language: "text",
                            code: "$ ROPgadget --binary /bin/ls | grep \"pop rdi ; ret\"\n0x0000000000401882 : pop rdi ; ret\n\nExplanation: This address (0x401882) is now our 'Magic Address'. When the CPU 'Returns' to it, it will take the next value on the stack and put it in the RDI register (the first argument register in x64 Linux). This is how we pass '/bin/sh' to system()!"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "research/pwn-binary",
                commitMessage: "research: developed a 2nd-stage ROP chain to bypass ASLR on the legacy telemetry service",
                files: [{ name: "exploit.py", type: "file", content: "python exploit" }],
                activeFileSnippet: { filename: "exploit.py", code: "rop = ROP(libc)\nrop.system(next(libc.search(b'/bin/sh')))\npayload = flat({offset: rop.chain()})" }
            },
            community: {
                aiSummary: "The stack is a canvas. The Instruction Pointer is your brush. With a good ROP chain, you can make C do things it was never meant to do.",
                solutions: []
            }
        }
    ],
    videoCount: 380,
    articleCount: 210,
    problemCount: 160,
    capstoneProject: {
        title: "The Ultimate Breach: From Web to Domain Admin",
        description: "You will execute a full-chain professional penetration test. First, you'll find an SSRF vulnerability in a public-facing web app and use it to 'Pivot' into the internal AWS network to steal metadata keys. Next, you'll use those keys to access an internal legacy C++ server, where you will develop a two-stage ROP exploit to bypass ASLR and gain a 'Reverse Shell'. Once inside the server, you will use BloodHound to map the Active Directory environment, identify a 'Kerberoasting' path, and eventually execute a 'Golden Ticket' attack to become the Domain Administrator of the entire organization. This project is the pinnacle of the Cyber track, proving you possess the skills to enter an elite Red Team or Security Research organization.",
        estimatedDays: 20,
        skillsFocused: [
            "Cloud Pivoting (SSRF to Metadata)",
            "Advanced Binary Exploitation (ROP/ASLR Bypass)",
            "Active Directory Compromise (BloodHound/Kerberos)",
            "Persistence Engineering (C2 logic)",
            "Post-Exploitation Strategy"
        ],
        steps: [
            {
                title: "Phase 1: The Cloud Hook",
                description: "Bypass URL filters and steal IAM credentials from the internal metadata API."
            },
            {
                title: "Phase 2: Shattering the Silicon",
                description: "Develop a multi-stage memory corruption exploit to gain an internal shell."
            },
            {
                title: "Phase 3: The Lateral Ghost",
                description: "Move silently across the domain using Kerberoasting and Pass-the-Hash."
            },
            {
                title: "Phase 4: Domain Takeover",
                description: "Compromise the Central Identity store and establish permanent persistence."
            }
        ]
    },
    totalEstimatedHours: 110,
    estimatedCompletionDays: 60,
    moduleCount: 5,
    createdAt: "2026-02-27T00:00:00Z",
    updatedAt: "2026-02-27T00:00:00Z",
    version: "1.0",
    status: "published"
};
