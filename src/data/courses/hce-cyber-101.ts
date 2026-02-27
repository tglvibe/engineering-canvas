import { CourseEnhanced } from './types';

export const hceCyber101: CourseEnhanced = {
    id: "HCE CYBER 101",
    titleKey: "courses.hceCyber101",
    descKey: "courses.hceCyber101Desc",
    icon: "🛡️",
    duration: "6 weeks",
    languages: ["Python", "Bash", "SQL", "JavaScript", "HTML"],
    category: "high-code",
    programIds: ["HCE CYBER", "HCE BACK"],
    trackId: "hce",
    level: "beginner",
    prerequisites: ["CORE CS 101", "HCE BACK 101"],
    targetAudience: "Aspiring security engineers and developers aiming to master the 'Hacker Mindset' to build inherently secure, resilient web applications using modern DevSecOps standards.",
    learningOutcomes: [
        "Identify and remediate the OWASP Top 10 vulnerabilities (Injection, XSS, Broken Auth)",
        "Implement robust Cryptographic primitives including Argon2 hashing and AES-GCM encryption",
        "Architect secure Identity Management using OAuth2, OIDC, and JWT with RS256",
        "Analyze network traffic patterns using Nmap and Wireshark to detect Man-in-the-Middle (MITM) attacks",
        "Perform enterprise-level Threat Modeling using the STRIDE methodology to find architectural flaws"
    ],
    modules: [
        {
            id: "HCE-CYBER-101-M1",
            title: "Offensive Web Security: The OWASP Framework",
            description: "Breaking and fixing the web's most common flaws.",
            sequenceNumber: 1,
            estimatedHours: 12,
            topics: ["HCE-CYBER-101-M1-T1", "HCE-CYBER-101-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Exploit and patch SQL Injection (SQLi) vulnerabilities in real-world backends",
                "Prevent Cross-Site Scripting (XSS) via strict Content Security Policies (CSP)",
                "Mitigate Cross-Site Request Forgery (CSRF) using Anti-Forgery Tokens and SameSite cookies"
            ]
        },
        {
            id: "HCE-CYBER-101-M2",
            title: "Applied Cryptography & Data Protection",
            description: "Securing data at rest and in transit.",
            sequenceNumber: 2,
            estimatedHours: 10,
            topics: ["HCE-CYBER-101-M2-T1", "HCE-CYBER-101-M2-T2"],
            prerequisiteModuleIds: ["HCE-CYBER-101-M1"],
            outcomes: [
                "Implement memory-hard password hashing using Argon2id",
                "Differentiate Symmetric (AES) vs Asymmetric (RSA/ECC) encryption use cases",
                "Manage Public Key Infrastructure (PKI) and SSL/TLS certificates securely"
            ]
        },
        {
            id: "HCE-CYBER-101-M3",
            title: "Identity, Authentication & Authorization",
            description: "The 'Who' and 'What' of system access.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["HCE-CYBER-101-M3-T1", "HCE-CYBER-101-M3-T2"],
            prerequisiteModuleIds: ["HCE-CYBER-101-M2"],
            outcomes: [
                "Implement secure OAuth 2.0 Authorization Code flows with PKCE",
                "Validate and sign JSON Web Tokens (JWT) using asymmetric RS256 private keys",
                "Enforce Multi-Factor Authentication (MFA) using TOTP and FIDO2 standards"
            ]
        },
        {
            id: "HCE-CYBER-101-M4",
            title: "Network Defense & Traffic Analysis",
            description: "Listening to the wire to find the silent attacker.",
            sequenceNumber: 4,
            estimatedHours: 15,
            topics: ["HCE-CYBER-101-M4-T1", "HCE-CYBER-101-M4-T2"],
            prerequisiteModuleIds: ["HCE-CYBER-101-M3"],
            outcomes: [
                "Identify unauthorized port scanning using Nmap and IDS evasion techniques",
                "Capture and decrypt HTTPS traffic (in a controlled lab) using Wireshark",
                "Detect and block DNS Spoofing and ARP Poisoning attacks on a local network"
            ]
        },
        {
            id: "HCE-CYBER-101-M5",
            title: "Architectural Security: Threat Modeling",
            description: "Finding bugs before a single line of code is written.",
            sequenceNumber: 5,
            estimatedHours: 13,
            topics: ["HCE-CYBER-101-M5-T1", "HCE-CYBER-101-M5-T2"],
            prerequisiteModuleIds: ["HCE-CYBER-101-M4"],
            outcomes: [
                "Conduct STRIDE threat modeling sessions for microservice architectures",
                "Define clear Trust Boundaries on system interaction diagrams",
                "Adopt Zero Trust principles: Never Trust, Always Verify"
            ]
        }
    ],
    topics: [
        {
            id: "HCE-CYBER-101-M1-T1",
            moduleId: "HCE-CYBER-101-M1",
            sequenceNumber: 1,
            title: "SQL Injection (SQLi) & Defense-in-Depth",
            estimatedMinutes: 240,
            what: "SQL Injection is a vulnerability where untrusted user input is directly concatenated into a backend database query. This allows an attacker to 'Break out' of the intended query and execute their own commands—such as skipping authentication, dumping entire user tables, or even deleting the whole database. It is the most impactful vulnerability in history.",
            why: "Because it's simple and devastating. A single `' OR '1'='1` in a login form can bypass security for millions of users. Even in the age of modern frameworks, legacy systems and poorly written 'Dynamic SQL' still leave doors open for automated hacking tools like SQLMap to wreak havoc on corporate data.",
            when: "Every time your application accepts a string from a user (form, URL parameter, API header) and uses it to look something up in a database.",
            how: "NEVER use string concatenation. ALWAYS use 'Parameterized Queries' (also known as Prepared Statements). This ensures the database driver treats user input as 'Literal Data' and never as 'Executable Code'. Additionally, implement the 'Principle of Least Privilege' by ensuring the database user has zero permission to drop tables.",
            ecosystem: "SQLMap (Exploitation), Burp Suite (Analysis), Prisma/TypeORM (Defense), OWASP ZAP (Scanning).",
            realWorld: "The 2015 TalkTalk breach resulted in the theft of 150,000 customers' data and a £400,000 fine. The attack was performed via a very basic, automated SQL injection on a legacy web page. If they had simply used a prepared statement, the company's reputation would have remained intact.",
            useCases: [
                "Securing a login form against 'Bypass' attacks",
                "Sanitizing search filters in an e-commerce dashboard",
                "Auditing legacy PHP or Python code for raw string-formatted SQL queries"
            ],
            advantages: [
                "Total Mitigation: Parameterization completely eliminates the SQLi vulnerability category",
                "Performance: Prepared statements are often faster because the DB pre-plans the query",
                "Developer Clarity: Separates the 'Logic' of the query from the 'Data' of the user"
            ],
            disadvantages: [
                "Developer Fatigue: Manually writing parameterized SQL for 100+ endpoints is tedious without an ORM",
                "Dynamic Edge Cases: Implementing complex 'Dynamic WHERE' clauses securely requires advanced design patterns"
            ],

            interviewTip: "If asked 'How do you prevent SQLi?', don't just say 'Escape the input'. That's outdated. Say 'I use Parameterized Queries to separate the command from the data'. Explain that escaping can be bypassed by character-encoding tricks, but parameterization cannot.",
            resumeBullet: "Remediated critical SQL Injection vulnerabilities across a legacy Rails backend by implementing standardized Parameterized Queries, securing 2M+ sensitive PII records.",

            videos: [
                { type: "public", title: "SQL Injection Explained", author: "Computerphile", views: "1.2M views", duration: "12:40", url: "https://www.youtube.com/watch?v=_jKylhJtFbI" },
                { type: "public", title: "Hacking with SQLMap", author: "LiveOverFlow", views: "500K views", duration: "25:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Pentester Academy", rating: 4.9, title: "Web Application Security (WAP)", instructor: "Vivek Ramachandran", enrolled: "50K+", duration: "40 hours", url: "https://www.pentesteracademy.com/course?id=1" }
            ],
            blogs: [
                { type: "Defense", title: "SQL Injection Prevention Cheat Sheet", publisher: "OWASP", readTime: "30 min", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Hard", title: "The Blind Extraction", category: "Offensive Security", estimatedTime: "4 hours",
                    scenarioDescription: "A backend API rejects all `' OR '1'='1` attempts with a 403. However, you notice that the response time for `admin' AND SLEEP(5)--` is exactly 5 seconds slower than a normal query. You must prove you can steal the admin password purely through 'Timing Analysis'.",
                    problemAnalysis: "This is a 'Blind Time-Based SQL Injection'. The database doesn't show you the data, but it REACTS to your commands. By asking a series of True/False questions (e.g., 'Is the first letter of the password A? If yes, sleep 5s'), you can rebuild the entire password bit-by-bit.",
                    architectureLayers: ["Application Network Gateway", "Query Execution Engine", "Database Storage Layer"],
                    toolsAndTech: [{ name: "Python Scripting & SQLMap", justification: "Manually doing this takes years. A Python script can automate 100 queries a second, measuring the latency and rebuilding the hash. To defend, we must use Parameterized Queries so the `AND SLEEP` part is treated as a literal string 'AND SLEEP' and never executed as a command." }],
                    tradeOffs: ["Time-based attacks are sensitive to network lag; they are slow but 100% reliable if the vulnerability exists."],
                    nfrConsiderations: ["Detection: Implement Rate-Limiting and WAF rules to detect 'Sleep' commands in URLs."],
                    kpis: ["Reduce 'Time-to-Detection' for automated SQLi probes to under 10 seconds."],
                    keyInsights: "Information doesn't just leak through text; it leaks through time, heat, and power consumption."
                }
            ],
            playgrounds: [
                {
                    title: "The Exploit Sandbox",
                    description: "Visualizing the vulnerable vs secure code flow.",
                    examples: [
                        {
                            language: "python",
                            code: "# --- VULNERABLE --- \nuserInput = \"admin' --\"\n# Results in: SELECT * FROM users WHERE user='admin' --' AND pass='...'\n# The '--' comments out the password check! \n\n# --- SECURE --- \n# Database treats the entire input as ONE literal string\ncursor.execute(\"SELECT * FROM users WHERE user=%s\", (userInput,))"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "security/sqli-patch",
                commitMessage: "security: migrated all raw-string database queries to parameterized statements in the auth-service",
                files: [{ name: "services/db.js", type: "file", content: "parameter logic" }],
                activeFileSnippet: { filename: "db.js", code: "const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);" }
            },
            community: {
                aiSummary: "The database is the treasure chest. SQL Injection is like giving the thief your keys. Use Prepared Statements to build a vault that can't be tricked.",
                solutions: []
            }
        },
        {
            id: "HCE-CYBER-101-M2-T1",
            moduleId: "HCE-CYBER-101-M2",
            sequenceNumber: 1,
            title: "Password Security: Salting & Hashing",
            estimatedMinutes: 240,
            what: "Password Hashing is the practice of converting a user's password into a fixed-length string of random-looking characters using a one-way mathematical function. Salting is the addition of a unique, random string to the password before hashing, ensuring that two users with the same password have completely different hashes.",
            why: "If a database is stolen, you cannot 'Un-hash' the passwords. Without salting, a hacker can use a 'Rainbow Table' (a precomputed list of billions of common hashes) to reveal 50% of your users' passwords in minutes. With salting and modern 'Slow' algorithms (Argon2, Bcrypt), it would take centuries to crack a single password.",
            when: "Every time a user creates an account or logs in. NEVER store passwords in plaintext or using outdated algorithms like MD5 or SHA-1.",
            how: "1. Generate a 16-byte random salt per user. 2. Combine Salt + Password. 3. Pass through Argon2id with a high 'Memory Cost' and 'Iteration Count'. 4. Store the Salt and the resulting Hash together in the DB.",
            ecosystem: "Argon2 (The Gold Standard), Bcrypt (Legacy Reliable), Scrypt, OWASP Password Storage Guidelines.",
            realWorld: "LinkedIn was hacked in 2012. Because they failed to use 'Salts', hackers were able to use precomputed tables to crack 117 million passwords in a fraction of the time it should have taken. Today, standard practice requires unique salting to make such automated attacks impossible.",
            useCases: [
                "Architecting a secure 'User' table in a massive SaaS product",
                "Implementing a 'Login' endpoint that is resistant to GPU-accelerated cracking",
                "Comparing file integrity using SHA-256 (Hashing without salting for non-password data)"
            ],
            advantages: [
                "Safety: Even if the DB is leaked, the intruder doesn't have the passwords",
                "Salted Uniqueness: Identical passwords look completely different in the database",
                "Adaptable: You can increase the hashing 'Cost' as computers get faster over the years"
            ],
            disadvantages: [
                "Computation: Hashing an Argon2 password takes ~100ms, which adds slight latency to login",
                "Complexity: Managing salts and pepper (global salts) requires careful DB design"
            ],

            interviewTip: "Know the difference: 'Encryption is two-way (requires a key to reverse). Hashing is one-way (un-reversible). Passwords must be HASHED because we don't want anyone—even the admins—to be able to see the user's password.'",
            resumeBullet: "Engineered a high-security authentication system using Argon2id with unique per-user salting, successfully securing 500k+ credentials against modern GPU-based brute-force attacks.",

            videos: [
                { type: "public", title: "Hashing & Salting Explained", author: "Tom Scott", views: "3M views", duration: "10:15", url: "https://www.youtube.com/watch?v=8ZtInClNj1Q" },
                { type: "public", title: "Why Bcrypt is Better than SHA-256", author: "Codedamn", views: "100K views", duration: "12:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Pluralsight", rating: 4.8, title: "Modern Cryptography for Developers", instructor: "Kevin Henry", enrolled: "50K+", duration: "8 hours", url: "https://www.pluralsight.com/courses/cryptography-developers-modern" }
            ],
            blogs: [
                { type: "Architecture", title: "Why you should use Argon2", publisher: "IETF RFC 9106", readTime: "50 min", url: "https://www.rfc-editor.org/rfc/rfc9106.html" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Medium", title: "The Rainbow Protocol", category: "Defensive Security", estimatedTime: "3 hours",
                    scenarioDescription: "A legacy app uses SHA-1 to store passwords with NO salt. A leak occurs. The hacker has a 'Rainbow Table' for SHA-1. You must predict how many of the 10,000 leaked passwords they will crack in the first hour.",
                    problemAnalysis: "Without a salt, every '123456' has the same hash: `7c4a8d...`. A Rainbow Table is like a dictionary. The hacker doesn't need to compute anything; they just 'Look it up'. Statistics show that for unsalted hashes, ~60% of user passwords are recovered within minutes.",
                    architectureLayers: ["Application Logic", "Database Storage", "Credential Lifecycle"],
                    toolsAndTech: [{ name: "Argon2 Upgrade", justification: "We must run a migration script. We cannot un-hash the old SHA-1. Instead, on the next login, we take the user's plaintext password, hash it with Argon2 + Salt, and UPDATE the database. We mark old passwords as 'Tainted' until they are upgraded." }],
                    tradeOffs: ["Users must login to be 'Upgraded'; we could force a reset for everyone if the risk is high enough."],
                    nfrConsiderations: ["Data Integrity: Never allow a user to use an unsalted hash once the migration starts."],
                    kpis: ["Migrate 90% of active users to salted Argon2 within 30 days of release."],
                    keyInsights: "Hashing is a promise of privacy. Salting is the lock on that promise."
                }
            ],
            playgrounds: [
                {
                    title: "The Hashing Lab",
                    description: "Seeing why salts are necessary in Node.js.",
                    examples: [
                        {
                            language: "javascript",
                            code: "const crypto = require('crypto');\n\nconst pass = \"password123\";\nconst salt1 = crypto.randomBytes(16).toString('hex');\nconst salt2 = crypto.randomBytes(16).toString('hex');\n\n// SAME password, DIFFERENT salts = DIFFERENT hashes\nconst hash1 = crypto.scryptSync(pass, salt1, 64).toString('hex');\nconst hash2 = crypto.scryptSync(pass, salt2, 64).toString('hex');\n\nconsole.log(hash1 === hash2); // false"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "auth/argon2-migration",
                commitMessage: "auth: replaced legacy MD5 hashing with Argon2id and unique per-user salting",
                files: [{ name: "lib/auth.js", type: "file", content: "hashing logic" }],
                activeFileSnippet: { filename: "auth.js", code: "const hash = await argon2.hash(password, { type: argon2.argon2id });" }
            },
            community: {
                aiSummary: "The most expensive hardware in the world—NVIDIA H100s—can be used to crack passwords. Use 'Memory-Hard' algorithms like Argon2 to make it too expensive for the hacker to even try.",
                solutions: []
            }
        },
        {
            id: "HCE-CYBER-101-M5-T1",
            moduleId: "HCE-CYBER-101-M5",
            sequenceNumber: 1,
            title: "Threat Modeling with STRIDE",
            estimatedMinutes: 240,
            what: "Threat Modeling is a structured process to identify, quantify, and address the security risks associated with an application's architecture. STRIDE is the premier framework for this, standing for Spoofing (Identity), Tampering (Data), Repudiation (Denial of action), Information Disclosure (Privacy), Denial of Service (Availability), and Elevation of Privilege (Access).",
            why: "If you build a house and forget to put a lock on the back door, it's easier to fix during the blueprint phase than after the house is built. STRIDE allows engineers to find 'Design Flaws' that standard code-scanners miss. It shifts security 'Left'—moving it to the very start of the engineering process.",
            when: "During the initial architecture review of any new project, microservice, or major API enhancement. Every 'Senior' design document should have a Threat Model section.",
            how: "1. Draw a Data Flow Diagram (DFD) of your system. 2. Define 'Trust Boundaries' (e.g. between the Internet and your Backend). 3. For every arrow crossing a boundary, apply the STRIDE questions: 'Could someone spoof this user?', 'Could they tamper with this database entry?'",
            ecosystem: "Microsoft Threat Modeling Tool, OWASP Threat Dragon, STRIDE-per-Element, PTM (Python Threat Modeling).",
            realWorld: "An IoT startup designed a 'Smart Camera'. In their STRIDE review, they realized that while the video was encrypted, the 'Health Status' heartbeat was unauthenticated (Spoofing). An attacker could send a fake 'Everything is OK' pulse while they were physically disabling the camera. They caught this in design and saved their brand from a disaster.",
            useCases: [
                "Analyzing a new OAuth2 implementation for 'Token Tampering' risks",
                "Reviewing a cloud 'Data Lake' architecture for 'Information Disclosure' flaws",
                "Validating a 'Payment Gateway' integration against 'Repudiation' attacks"
            ],
            advantages: [
                "Proactive: Finds logic flaws that no automated scanner can ever see",
                "Educational: Teaches developers to 'Think like a hacker' during every feature build",
                "Documented Safety: Provides proof to auditors that security was a first-class citizen in the design"
            ],
            disadvantages: [
                "Time Intensive: A deep STRIDE workshop can take 4-8 hours for complex systems",
                "Subjectivity: Depends on the creativity and experience of the engineers involved"
            ],

            interviewTip: "If asked to design a system, don't just talk about 'Scalability'. Mention 'Security Boundaries'. Say: 'I'll place a trust boundary here between the public API and the internal DB, and use STRIDE to ensure we mitigate Elevation of Privilege risks'. This is the hallmark of a Senior Architecture interview.",
            resumeBullet: "Instituted a company-wide STRIDE threat modeling initiative for new feature designs, reducing post-launch security vulnerabilities by 65%.",

            videos: [
                { type: "public", title: "The STRIDE Threat Model", author: "Microsoft Security", views: "300K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Threat Modeling for Developers", author: "Codedamn", views: "50K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Pluralsight", rating: 4.8, title: "Threat Modeling: STRIDE and More", instructor: "Brook S.E. Schoenfield", enrolled: "30K+", duration: "5 hours", url: "https://www.pluralsight.com/courses/threat-modeling-stride-fundamentals" }
            ],
            blogs: [
                { type: "Core", title: "The Threat Modeling Manifesto", publisher: "ThreatModelingManifesto.org", readTime: "25 min", url: "https://www.threatmodelingmanifesto.org/" }
            ],
            scenarios: [
                {
                    id: "5.1", difficulty: "Expert", title: "The Admin Escalation", category: "Architecture Security", estimatedTime: "6 hours",
                    scenarioDescription: "A new HR portal allows managers to view their direct reports' salaries. The system uses a URL like `/api/v1/salary?empId=123`. A junior engineer didn't perform an 'Elevation of Privilege' (E) review. An attacker changes the URL to `?empId=1` and sees the CEO's salary.",
                    problemAnalysis: "This is an 'Insecure Direct Object Reference' (IDOR). The system trusted the Client (the UI) to provide the ID without verifying if the *currently logged in* user is actually allowed to see that specific ID's data. In STRIDE terms, this is a failure of Elevation of Privilege.",
                    architectureLayers: ["API Gateway", "Access Control Layer (ACL)", "Business Logic"],
                    toolsAndTech: [{ name: "Attribute-Based Access Control (ABAC)", justification: "In the design phase, we should have mandated an 'Ownership Check'. Before the SQL query runs, the code MUST check: `Is req.user.managerId === requestedEmp.managerId?`. If not, return 401. This simple architectural check, caught during STRIDE, prevents a massive privacy leak." }],
                    tradeOffs: ["Adding ABAC checks adds a small amount of code complexity but is essential for PII safety."],
                    nfrConsiderations: ["Privacy: Absolute zero unauthorized data access across tenant boundaries."],
                    kpis: ["Achieve 100% STRIDE coverage for all PII-handling API endpoints."],
                    keyInsights: "Bugs in code are cheap. Bugs in 'Trust Assumptions' are expensive."
                }
            ],
            playgrounds: [
                {
                    title: "The Trust Boundary Mapper",
                    description: "Visualizing where data becomes dangerous.",
                    examples: [
                        {
                            language: "text",
                            code: "[USER] --(untrusted input)--> |TRUST BOUNDARY| --> [API SERVER] --(sanitized input)--> [DB]\n\nSTRIDE Questions at the Boundary:\n- Spoofing: Can I be 'Admin'?\n- Tampering: Can I change the 'Amount'?\n- Repudiation: Can I say 'I didn't buy that'?"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "security/threat-audit",
                commitMessage: "docs: added STRIDE threat model to the architecture documentation for the new billing microservice",
                files: [{ name: "docs/security/threat-model.md", type: "file", content: "stride analysis" }],
                activeFileSnippet: { filename: "threat-model.md", code: "Threat: E - Elevation of Privilege\nMitigation: Role-based Guard on the /admin/* routes" }
            },
            community: {
                aiSummary: "The most dangerous code is the code you didn't think about. Use STRIDE to find your blind spots before a hacker does.",
                solutions: []
            }
        }
    ],
    videoCount: 290,
    articleCount: 165,
    problemCount: 130,
    capstoneProject: {
        title: "The Hacked Enterprise: Audit & Remediation",
        description: "You are the newly hired CISO for a startup that was just breached. You will be given a 'Broken' Node.js app. First, you'll perform a 'Black Box' penetration test using Burp Suite to find three vulnerabilities: SQL Injection, IDOR, and a Weak JWT configuration. Next, you will perform a complete STRIDE Threat Model on the architecture to identify WHY these vulnerabilities existed in the first place. Finally, you will write the remediation code (using Parameterized Queries, ABAC checks, and Argon2 hashing) and provide a 'Security Audit Report' proving the system is now resilient to the top 10 OWASP risks. This project demonstrates to employers that you possess both the 'Offensive Hacker' skills and the 'Defensive Engineer' wisdom necessary for high-level security roles.",
        estimatedDays: 14,
        skillsFocused: [
            "OWASP Top 10 Mitigation",
            "STRIDE Threat Modeling",
            "JWT Security (RS256 vs HS256)",
            "Vulnerability Identification (Burp Suite)",
            "Secure Coding Lifecycle (DevSecOps)"
        ],
        steps: [
            {
                title: "Phase 1: Offensive Identification",
                description: "Break into the provided application using SQLi and token-tampering techniques."
            },
            {
                title: "Phase 2: Architectural Autopsy",
                description: "Analyze the design flaws using STRIDE and map the trust boundaries."
            },
            {
                title: "Phase 3: Defensive Engineering",
                description: "Implement code-level fixes and migrate the data to secure hashing formats."
            },
            {
                title: "Phase 4: Final Audit & Certification",
                description: "Run automated scanners to verify zero high-risk findings and document the remediations."
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
