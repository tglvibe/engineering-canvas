import { CourseEnhanced } from "./types";

// PART 1: MODULES 1 & 2
// Part 2 (Modules 3 & 4) will be appended shortly.

export const hceBack101: CourseEnhanced = {
    id: "HCE BACK 101",
    titleKey: "courses.hceBack101",
    descKey: "courses.hceBack101Desc",
    icon: "⚙️",
    durationKey: "common.duration.6weeks",
    languagesKeys: [
        "common.langs.node",
        "common.langs.python",
        "common.langs.go",
        "common.langs.java",
        "common.langs.rust",
        "common.langs.postgresql",
        "common.langs.redis",
        "common.langs.docker",
    ],
    category: "high-code",
    programIds: ["HCE BACK"],
    roleIds: ["backend-dev", "fullstack-dev", "system-architect"],
    trackId: "hce",
    levelKey: "common.levels.beginner",
    prerequisitesKeys: ["courses.coreCs101", "courses.coreProgPy"],
    targetAudienceKey: "courses.hceBack101.targetAudience",
    learningOutcomesKeys: [
        "courses.hceBack101.outcomes.o1",
        "courses.hceBack101.outcomes.o2",
        "courses.hceBack101.outcomes.o3",
        "courses.hceBack101.outcomes.o4",
        "courses.hceBack101.outcomes.o5"
    ],
    modules: [
        {
            id: "HCE-BACK-101-M1",
            titleKey: "courses.hceBack101.m1.title",
            descriptionKey: "courses.hceBack101.m1.description",
            sequenceNumber: 1,
            estimatedHours: 12,
            topics: [
                "HCE-BACK-101-M1-T1",
                "HCE-BACK-101-M1-T2",
                "HCE-BACK-101-M1-T3",
            ],
            prerequisiteModuleIds: [],
            outcomesKeys: [
                "courses.hceBack101.m1.outcomes.o1",
                "courses.hceBack101.m1.outcomes.o2",
                "courses.hceBack101.m1.outcomes.o3",
            ],
        },
        {
            id: "HCE-BACK-101-M2",
            titleKey: "courses.hceBack101.m2.title",
            descriptionKey: "courses.hceBack101.m2.description",
            sequenceNumber: 2,
            estimatedHours: 14,
            topics: ["HCE-BACK-101-M2-T1", "HCE-BACK-101-M2-T2"],
            prerequisiteModuleIds: ["HCE-BACK-101-M1"],
            outcomesKeys: [
                "courses.hceBack101.m2.outcomes.o1",
                "courses.hceBack101.m2.outcomes.o2",
                "courses.hceBack101.m2.outcomes.o3",
            ],
        },
        {
            id: "HCE-BACK-101-M3",
            titleKey: "courses.hceBack101.m3.title",
            descriptionKey: "courses.hceBack101.m3.description",
            sequenceNumber: 3,
            estimatedHours: 16,
            topics: ["HCE-BACK-101-M3-T1", "HCE-BACK-101-M3-T2"],
            prerequisiteModuleIds: ["HCE-BACK-101-M2"],
            outcomesKeys: [
                "courses.hceBack101.m3.outcomes.o1",
                "courses.hceBack101.m3.outcomes.o2",
                "courses.hceBack101.m3.outcomes.o3",
            ],
        },
        {
            id: "HCE-BACK-101-M4",
            titleKey: "courses.hceBack101.m4.title",
            descriptionKey: "courses.hceBack101.m4.description",
            sequenceNumber: 4,
            estimatedHours: 10,
            topics: ["HCE-BACK-101-M4-T1"],
            prerequisiteModuleIds: ["HCE-BACK-101-M3"],
            outcomesKeys: [
                "courses.hceBack101.m4.outcomes.o1",
                "courses.hceBack101.m4.outcomes.o2",
                "courses.hceBack101.m4.outcomes.o3",
            ],
        },
    ],
    topics: [
        {
            id: "HCE-BACK-101-M1-T1",
            moduleId: "HCE-BACK-101-M1",
            sequenceNumber: 1,
            titleKey: "courses.hceBack101.m1.t1.title",
            estimatedMinutes: 180,

            whatKey: "courses.hceBack101.m1.t1.what",
            whyKey: "courses.hceBack101.m1.t1.why",
            whenKey: "courses.hceBack101.m1.t1.when",
            howKey: "courses.hceBack101.m1.t1.how",

            ecosystemKey: "courses.hceBack101.m1.t1.ecosystem",
            realWorldKey: "courses.hceBack101.m1.t1.realWorld",
            useCasesKeys: [
                "courses.hceBack101.m1.t1.u1",
                "courses.hceBack101.m1.t1.u2",
                "courses.hceBack101.m1.t1.u3",
                "courses.hceBack101.m1.t1.u4",
                "courses.hceBack101.m1.t1.u5",
            ],
            advantagesKeys: [
                "courses.hceBack101.m1.t1.a1",
                "courses.hceBack101.m1.t1.a2",
            ],
            disadvantagesKeys: [
                "courses.hceBack101.m1.t1.d1",
                "courses.hceBack101.m1.t1.d2",
            ],

            interviewTipKey: "courses.hceBack101.m1.t1.interviewTip",
            resumeBulletKey: "courses.hceBack101.m1.t1.resumeBullet",

            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceBack101.m1.t1.v1.title",
                    authorKey: "courses.hceBack101.m1.t1.v1.author",
                    viewsKey: "courses.hceBack101.m1.t1.v1.views",
                    durationKey: "common.duration.18min",
                    url: "https://www.youtube.com/watch?v=3b_jVQsqC2Q",
                },
                {
                    type: "public",
                    titleKey: "courses.hceBack101.m1.t1.v2.title",
                    authorKey: "courses.hceBack101.m1.t1.v2.author",
                    viewsKey: "courses.hceBack101.m1.t1.v2.views",
                    durationKey: "common.duration.11min",
                    url: "https://www.youtube.com/watch?v=_SigvXyv22o",
                },
                {
                    type: "public",
                    titleKey: "courses.hceBack101.m1.t1.v3.title",
                    authorKey: "courses.hceBack101.m1.t1.v3.author",
                    viewsKey: "courses.hceBack101.m1.t1.v3.views",
                    durationKey: "common.duration.8min",
                    url: "https://www.youtube.com/watch?v=IPvYjXCsTg8",
                },
                {
                    type: "platform",
                    titleKey: "courses.hceBack101.m1.t1.v4.title",
                    authorKey: "courses.hceBack101.m1.t1.v4.author",
                    viewsKey: "courses.hceBack101.m1.t1.v4.views",
                    durationKey: "common.duration.45min",
                    isPremium: true,
                },
            ],
            moocs: [
                {
                    platform: "Coursera",
                    rating: 4.8,
                    titleKey: "courses.hceBack101.m1.t1.mooc1.title",
                    instructorKey: "courses.hceBack101.m1.t1.mooc1.instructor",
                    enrolledKey: "courses.hceBack101.m1.t1.mooc1.enrolled",
                    durationKey: "common.duration.26hours",
                    url: "https://www.coursera.org/learn/computer-networking",
                },
                {
                    platform: "Udemy",
                    rating: 4.7,
                    titleKey: "courses.hceBack101.m1.t1.mooc2.title",
                    instructorKey: "courses.hceBack101.m1.t1.mooc2.instructor",
                    enrolledKey: "courses.hceBack101.m1.t1.mooc2.enrolled",
                    durationKey: "common.duration.12hours",
                    url: "https://www.udemy.com/course/network-protocols-from-scratch/",
                },
            ],
            blogs: [
                {
                    type: "Documentation",
                    titleKey: "courses.hceBack101.m1.t1.blog1.title",
                    publisherKey: "courses.hceBack101.m1.t1.blog1.publisher",
                    readTimeKey: "courses.hceBack101.m1.t1.blog1.readTime",
                    url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/",
                },
                {
                    type: "Case Study",
                    titleKey: "courses.hceBack101.m1.t1.blog2.title",
                    publisherKey: "courses.hceBack101.m1.t1.blog2.publisher",
                    readTimeKey: "courses.hceBack101.m1.t1.blog2.readTime",
                    url: "https://aws.amazon.com/route53/what-is-dns/",
                },
            ],
            scenarios: [
                {
                    id: "1",
                    difficulty: "Hard",
                    titleKey: "courses.hceBack101.m1.t1.s1.title",
                    categoryKey: "courses.hceBack101.m1.t1.s1.category",
                    estimatedTimeKey: "courses.hceBack101.m1.t1.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceBack101.m1.t1.s1.scenarioDescription",
                    problemAnalysisKey: "courses.hceBack101.m1.t1.s1.problemAnalysis",
                    architectureLayersKeys: [
                        "courses.hceBack101.m1.t1.s1.layer1",
                        "courses.hceBack101.m1.t1.s1.layer2",
                        "courses.hceBack101.m1.t1.s1.layer3",
                        "courses.hceBack101.m1.t1.s1.layer4",
                    ],
                    toolsAndTech: [
                        {
                            name: "Wireshark / tcpdump",
                            justificationKey: "courses.hceBack101.m1.t1.s1.tool1Justification",
                        },
                        {
                            name: "netstat",
                            justificationKey: "courses.hceBack101.m1.t1.s1.tool2Justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceBack101.m1.t1.s1.tradeOff1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceBack101.m1.t1.s1.nfr1",
                    ],
                    kpisKeys: [
                        "courses.hceBack101.m1.t1.s1.kpi1",
                        "courses.hceBack101.m1.t1.s1.kpi2",
                    ],
                    keyInsightsKey: "courses.hceBack101.m1.t1.s1.keyInsights",
                },
                {
                    id: "2",
                    difficulty: "Expert",
                    titleKey: "courses.hceBack101.m1.t1.s2.title",
                    categoryKey: "courses.hceBack101.m1.t1.s2.category",
                    estimatedTimeKey: "courses.hceBack101.m1.t1.s2.estimatedTime",
                    scenarioDescriptionKey: "courses.hceBack101.m1.t1.s2.scenarioDescription",
                    problemAnalysisKey: "courses.hceBack101.m1.t1.s2.problemAnalysis",
                    architectureLayersKeys: [
                        "courses.hceBack101.m1.t1.s2.layer1",
                        "courses.hceBack101.m1.t1.s2.layer2",
                        "courses.hceBack101.m1.t1.s2.layer3",
                        "courses.hceBack101.m1.t1.s2.layer4",
                    ],
                    toolsAndTech: [
                        {
                            name: "UDP (User Datagram Protocol)",
                            justificationKey: "courses.hceBack101.m1.t1.s2.tool1Justification",
                        },
                        {
                            name: "WebRTC",
                            justificationKey: "courses.hceBack101.m1.t1.s2.tool2Justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceBack101.m1.t1.s2.tradeOff1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceBack101.m1.t1.s2.nfr1",
                    ],
                    kpisKeys: ["courses.hceBack101.m1.t1.s2.kpi1"],
                    keyInsightsKey: "courses.hceBack101.m1.t1.s2.keyInsights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceBack101.m1.t1.pg1.title",
                    descriptionKey: "courses.hceBack101.m1.t1.pg1.description",
                    examples: [
                        {
                            language: "typescript",
                            code: "import net from 'net';\nimport express from 'express';\n\n// =========================================\n// LAYER 4: Raw TCP Socket Server\n// =========================================\nconst tcpServer = net.createServer((socket) => {\n  socket.on('data', (data) => {\n    console.log('TCP Received Raw Bytes:', data.toString());\n    // We MUST manually construct the HTTP string!\n    const httpResp = \"HTTP/1.1 200 OK\\r\\nContent-Type: text/plain\\r\\n\\r\\nHello from Layer 4!\";\n    socket.write(httpResp);\n    socket.end();\n  });\n});\ntcpServer.listen(8080, () => console.log('TCP Listening on :8080'));\n\n// =========================================\n// LAYER 7: Application HTTP Framework\n// =========================================\nconst app = express();\napp.get('/', (req, res) => {\n  // TCP connection & headers handled automatically\n  res.send('Hello from Layer 7 Application!');\n});\napp.listen(8081, () => console.log('HTTP Listening on :8081'));",
                        },
                        {
                            language: "python",
                            code: 'import socket\nimport threading\nfrom fastapi import FastAPI\nimport uvicorn\n\n# =========================================\n# LAYER 4: Raw TCP Socket\n# =========================================\ndef start_tcp_server():\n    tcp_server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    tcp_server.bind((\'127.0.0.1\', 8080))\n    tcp_server.listen(5)\n    print(\'Listening on TCP port 8080...\')\n    \n    while True:\n        conn, addr = tcp_server.accept()\n        data = conn.recv(1024)\n        if not data: break\n        response = b"HTTP/1.1 200 OK\\r\\nContent-Type: text/plain\\r\\n\\r\\nHello from Python TCP!"\n        conn.sendall(response)\n        conn.close()\n\nthreading.Thread(target=start_tcp_server, daemon=True).start()\n\n# =========================================\n# LAYER 7: FastAPI (Application)\n# =========================================\napp = FastAPI()\n\n@app.get("/")\ndef read_root():\n    return {"message": "Hello from Layer 7 FastAPI"}\n\n# Run via: uvicorn main:app --port 8081',
                        },
                        {
                            language: "go",
                            code: 'package main\n\nimport (\n\t"fmt"\n\t"net"\n\t"net/http"\n)\n\n// LAYER 4: Raw TCP \nfunc startTCP() {\n\tlistener, _ := net.Listen("tcp", ":8080")\n\tfmt.Println("Listening on TCP port 8080...")\n\n\tfor {\n\t\tconn, _ := listener.Accept()\n\t\tgo func(c net.Conn) {\n\t\t\tdefer c.Close()\n\t\t\tc.Write([]byte("HTTP/1.1 200 OK\\r\\n\\r\\nHello from Go TCP!"))\n\t\t}(conn)\n\t}\n}\n\n// LAYER 7: HTTP Mux\nfunc startHTTP() {\n\tmux := http.NewServeMux()\n\tmux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {\n\t\tw.Write([]byte("Hello from Go HTTP Layer 7!"))\n\t})\n\thttp.ListenAndServe(":8081", mux)\n}\n\nfunc main() {\n\tgo startTCP()\n\tstartHTTP()\n}',
                        },
                        {
                            language: "java",
                            code: 'import java.io.*;\nimport java.net.*;\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\npublic class ProtocolDemo {\n\n    // LAYER 4 RAW TCP\n    public static void startTCP() throws IOException {\n        ServerSocket serverSocket = new ServerSocket(8080);\n        System.out.println("TCP Listening on 8080");\n        while (true) {\n            Socket clientSocket = serverSocket.accept();\n            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);\n            out.println("HTTP/1.1 200 OK\\r\\n\\r\\nHello from Java TCP!");\n            clientSocket.close();\n        }\n    }\n\n    // LAYER 7 SPRING BOOT APP\n    @SpringBootApplication\n    @RestController\n    public static class HttpApp {\n        @GetMapping("/")\n        public String home() { return "Hello from Java Spring Boot (Layer 7)!"; }\n        public static void main(String[] args) {\n             SpringApplication.run(HttpApp.class, args);\n        }\n    }\n}',
                        },
                        {
                            language: "rust",
                            code: 'use std::net::{TcpListener, TcpStream};\nuse std::io::{Read, Write};\nuse std::thread;\n\n// LAYER 4: Raw TCP Server\nfn handle_client(mut stream: TcpStream) {\n    let mut buffer = [0; 512];\n    stream.read(&mut buffer).unwrap();\n    let response = "HTTP/1.1 200 OK\\r\\n\\r\\nHello from Rust TCP!";\n    stream.write(response.as_bytes()).unwrap();\n    stream.flush().unwrap();\n}\n\nfn main() {\n    let listener = TcpListener::bind("127.0.0.1:8080").unwrap();\n    println!("Rust TCP Listening on 8080");\n\n    for stream in listener.incoming() {\n        match stream {\n            Ok(stream) => {\n                thread::spawn(move || { handle_client(stream) });\n            }\n            Err(e) => { println!("Error: {}", e); }\n        }\n    }\n}',
                        },
                    ],
                },
                {
                    titleKey: "courses.hceBack101.m1.t1.pg2.title",
                    descriptionKey: "courses.hceBack101.m1.t1.pg2.description",
                    examples: [
                        {
                            language: "python",
                            code: 'import socket\nimport time\n\n# UDP Client (Fire and Forget)\nclient = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\nserver_addr = ("127.0.0.1", 9999)\n\nprint("Blasting UDP Packets...")\nfor i in range(100):\n    # Send missing the 3-Way Handshake overhead completely\n    client.sendto(f"Frame {i}".encode(), server_addr)\n    # UDP doesn\'t care if the server is off. It just sends.\n    time.sleep(0.01)',
                        },
                        {
                            language: "go",
                            code: 'package main\n\nimport (\n\t"fmt"\n\t"net"\n\t"time"\n)\n\nfunc main() {\n\tServerAddr, _ := net.ResolveUDPAddr("udp", "127.0.0.1:9999")\n\tConn, _ := net.DialUDP("udp", nil, ServerAddr)\n\tdefer Conn.Close()\n\n\tfmt.Println("Blasting UDP Packets (Go)...")\n\tfor i := 0; i < 100; i++ {\n\t\tmsg := fmt.Sprintf("Frame %d", i)\n\t\tConn.Write([]byte(msg))\n\t\ttime.Sleep(10 * time.Millisecond)\n\t}\n}',
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "debug/network-tracing",
                commitMessage:
                    "chore: Add tcp_ping and wireshark capture scripts for debugging ALB issues",
                files: [
                    {
                        name: "scripts",
                        type: "folder",
                        children: [
                            {
                                name: "tcp_ping.py",
                                type: "file",
                                content:
                                    "import socket\nimport time\ndef ping():\n  s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n  start = time.time()\n  s.connect(('example.com', 80))\n  print(f'TCP Time: {(time.time() - start) * 1000:.2f}ms')\n  s.close()\nping()",
                            },
                        ],
                    },
                    {
                        name: "docs",
                        type: "folder",
                        children: [
                            {
                                name: "incident-report-01.md",
                                type: "file",
                                content: "# Incident: Ephemeral Port Exhaustion\n...",
                            },
                        ],
                    },
                ],
                activeFileSnippet: {
                    filename: "tcp_ping.py",
                    code: "import socket\nimport time\n\n# Isolate exactly how long raw DNS and TCP take before HTTP\ndef tcp_ping(host, port):\n  s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n  s.settimeout(2.0)\n  start = time.time()\n  try:\n    s.connect((host, port))\n    elapsed = (time.time() - start) * 1000\n    print(f'SUCCESS: {host}:{port} TCP Handshake took {elapsed:.2f}ms')\n  except Exception as e:\n    print(f'FAIL: {e}')\n  s.close()\n\ntcp_ping('google.com', 443)",
                },
            },
            community: {
                aiSummaryKey: "courses.hceBack101.m1.t1.community.aiSummary",
                solutions: [
                    {
                        authorInitials: "JL",
                        authorName: "James L",
                        badgeKey: "common.badges.cloudArchitect",
                        roleKey: "common.roles.principalEngineer",
                        levelKey: "common.levels.expert",
                        timeAgoKey: "common.time.1monthAgo",
                        upvotes: 215,
                        comments: 40,
                        contentKey: "courses.hceBack101.m1.t1.community.s1.content",
                    },
                    {
                        authorInitials: "SA",
                        authorName: "Sarah A.",
                        badgeKey: "common.badges.sre",
                        roleKey: "common.roles.sre",
                        levelKey: "common.levels.expert",
                        timeAgoKey: "common.time.2monthsAgo",
                        upvotes: 188,
                        comments: 25,
                        contentKey: "courses.hceBack101.m1.t1.community.s2.content",
                    },
                    {
                        authorInitials: "MK",
                        authorName: "Mike K.",
                        badgeKey: "common.badges.topSolution",
                        roleKey: "common.roles.backendDev",
                        levelKey: "common.levels.advanced",
                        timeAgoKey: "common.time.3monthsAgo",
                        upvotes: 156,
                        comments: 12,
                        contentKey: "courses.hceBack101.m1.t1.community.s3.content",
                    },
                    {
                        authorInitials: "KW",
                        authorName: "Kevin W",
                        badgeKey: "",
                        roleKey: "common.roles.devOps",
                        levelKey: "common.levels.advanced",
                        timeAgoKey: "common.time.4monthsAgo",
                        upvotes: 89,
                        comments: 5,
                        contentKey: "courses.hceBack101.m1.t1.community.s4.content",
                    },
                ],
            },
        },
        {
            id: "HCE-BACK-101-M1-T2",
            moduleId: "HCE-BACK-101-M1",
            sequenceNumber: 2,
            titleKey: "courses.hceBack101.m1.t2.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceBack101.m1.t2.what",
            whyKey: "courses.hceBack101.m1.t2.why",
            whenKey: "courses.hceBack101.m1.t2.when",
            howKey: "courses.hceBack101.m1.t2.how",
            ecosystemKey: "courses.hceBack101.m1.t2.ecosystem",
            realWorldKey: "courses.hceBack101.m1.t2.realWorld",
            useCasesKeys: [
                "courses.hceBack101.m1.t2.u1",
                "courses.hceBack101.m1.t2.u2",
                "courses.hceBack101.m1.t2.u3",
            ],
            advantagesKeys: [
                "courses.hceBack101.m1.t2.a1",
                "courses.hceBack101.m1.t2.a2",
            ],
            disadvantagesKeys: [
                "courses.hceBack101.m1.t2.d1",
                "courses.hceBack101.m1.t2.d2",
            ],

            interviewTipKey: "courses.hceBack101.m1.t2.interviewTip",
            resumeBulletKey: "courses.hceBack101.m1.t2.resumeBullet",

            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceBack101.m1.t2.v1.title",
                    authorKey: "courses.hceBack101.m1.t2.v1.author",
                    viewsKey: "courses.hceBack101.m1.t2.v1.views",
                    durationKey: "common.duration.19min",
                    url: "https://www.youtube.com/watch?v=K0Ta65OqQkY",
                },
                {
                    type: "public",
                    titleKey: "courses.hceBack101.m1.t2.v2.title",
                    authorKey: "courses.hceBack101.m1.t2.v2.author",
                    viewsKey: "courses.hceBack101.m1.t2.v2.views",
                    durationKey: "common.duration.2min",
                    url: "https://www.youtube.com/watch?v=mpQZVYPuDGU",
                },
                {
                    type: "platform",
                    titleKey: "courses.hceBack101.m1.t2.v3.title",
                    authorKey: "courses.hceBack101.m1.t2.v3.author",
                    viewsKey: "courses.hceBack101.m1.t2.v3.views",
                    durationKey: "common.duration.55min",
                    isPremium: true,
                },
            ],
            moocs: [
                {
                    platform: "Udemy",
                    rating: 4.8,
                    titleKey: "courses.hceBack101.m1.t2.mooc1.title",
                    instructorKey: "courses.hceBack101.m1.t2.mooc1.instructor",
                    enrolledKey: "courses.hceBack101.m1.t2.mooc1.enrolled",
                    durationKey: "common.duration.4hours",
                    url: "https://www.udemy.com/course/nginx-fundamentals/",
                },
            ],
            blogs: [
                {
                    type: "Guide",
                    titleKey: "courses.hceBack101.m1.t2.blog1.title",
                    publisherKey: "courses.hceBack101.m1.t2.blog1.publisher",
                    readTimeKey: "courses.hceBack101.m1.t2.blog1.readTime",
                    url: "https://aws.amazon.com/what-is/load-balancing/",
                },
                {
                    type: "Documentation",
                    titleKey: "courses.hceBack101.m1.t2.blog2.title",
                    publisherKey: "courses.hceBack101.m1.t2.blog2.publisher",
                    readTimeKey: "courses.hceBack101.m1.t2.blog2.readTime",
                    url: "https://www.digitalocean.com/community/tutorials/understanding-nginx-http-proxying-load-balancing-buffering-and-caching",
                },
            ],
            scenarios: [
                {
                    id: "3",
                    difficulty: "Medium",
                    titleKey: "courses.hceBack101.m1.t2.s1.title",
                    categoryKey: "courses.hceBack101.m1.t2.s1.category",
                    estimatedTimeKey: "courses.hceBack101.m1.t2.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceBack101.m1.t2.s1.scenarioDescription",
                    problemAnalysisKey: "courses.hceBack101.m1.t2.s1.problemAnalysis",
                    architectureLayersKeys: [
                        "courses.hceBack101.m1.t2.s1.layer1",
                        "courses.hceBack101.m1.t2.s1.layer2",
                        "courses.hceBack101.m1.t2.s1.layer3",
                    ],
                    toolsAndTech: [
                        {
                            name: "Redis",
                            justificationKey: "courses.hceBack101.m1.t2.s1.tool1Justification",
                        },
                        {
                            name: "JWT stateless tokens",
                            justificationKey: "courses.hceBack101.m1.t2.s1.tool2Justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceBack101.m1.t2.s1.tradeOff1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceBack101.m1.t2.s1.nfr1",
                    ],
                    kpisKeys: [
                        "courses.hceBack101.m1.t2.s1.kpi1",
                    ],
                    keyInsightsKey: "courses.hceBack101.m1.t2.s1.keyInsights",
                },
                {
                    id: "4",
                    difficulty: "Expert",
                    titleKey: "courses.hceBack101.m1.t2.s2.title",
                    categoryKey: "courses.hceBack101.m1.t2.s2.category",
                    estimatedTimeKey: "courses.hceBack101.m1.t2.s2.estimatedTime",
                    scenarioDescriptionKey: "courses.hceBack101.m1.t2.s2.scenarioDescription",
                    problemAnalysisKey: "courses.hceBack101.m1.t2.s2.problemAnalysis",
                    architectureLayersKeys: [
                        "courses.hceBack101.m1.t2.s2.layer1",
                        "courses.hceBack101.m1.t2.s2.layer2",
                        "courses.hceBack101.m1.t2.s2.layer3",
                        "courses.hceBack101.m1.t2.s2.layer4",
                    ],
                    toolsAndTech: [
                        {
                            name: "Geolocation DNS Routing",
                            justificationKey: "courses.hceBack101.m1.t2.s2.tool1Justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceBack101.m1.t2.s2.tradeOff1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceBack101.m1.t2.s2.nfr1",
                    ],
                    kpisKeys: [
                        "courses.hceBack101.m1.t2.s2.kpi1",
                    ],
                    keyInsightsKey: "courses.hceBack101.m1.t2.s2.keyInsights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceBack101.m1.t2.pg1.title",
                    descriptionKey: "courses.hceBack101.m1.t2.pg1.description",
                    examples: [
                        {
                            language: "python",
                            code: "class RoundRobinBalancer:\n    def __init__(self, servers):\n        self.servers = servers\n        self.index = 0\n\n    def get_server(self):\n        if not self.servers: return None\n        server = self.servers[self.index]\n        self.index = (self.index + 1) % len(self.servers)\n        return server\n\nbalancer = RoundRobinBalancer(['Server_A (10.0.0.1)', 'Server_B (10.0.0.2)', 'Server_C (10.0.0.3)'])\n\nprint(\"Simulating 5 concurrent requests...\")\nfor i in range(5):\n    print(f\"Request {i+1} routed to IP: {balancer.get_server()}\")",
                        },
                        {
                            language: "typescript",
                            code: "class LoadBalancer {\n  private servers: string[];\n  private index: number = 0;\n\n  constructor(servers: string[]) {\n    this.servers = servers;\n  }\n\n  getServer(): string {\n    if (this.servers.length === 0) return '503 Service Unavailable';\n    const server = this.servers[this.index];\n    this.index = (this.index + 1) % this.servers.length;\n    return server;\n  }\n}\n\nconst lb = new LoadBalancer(['Node_Pod_1', 'Node_Pod_2', 'Node_Pod_3']);\nfor (let i = 0; i < 5; i++) {\n  console.log(`Req ${i+1} -> Proxying to ${lb.getServer()}`);\n}",
                        },
                        {
                            language: "go",
                            code: 'package main\n\nimport (\n\t"fmt"\n\t"sync"\n)\n\ntype RoundRobin struct {\n\tservers []string\n\tcurrent int\n\tmu      sync.Mutex\n}\n\nfunc (rr *RoundRobin) Next() string {\n\trr.mu.Lock()\n\tdefer rr.mu.Unlock()\n\tif len(rr.servers) == 0 { return "" }\n\t\n\tserver := rr.servers[rr.current]\n\trr.current = (rr.current + 1) % len(rr.servers)\n\treturn server\n}\n\nfunc main() {\n\tbalancer := &RoundRobin{servers: []string{"EC2_A", "EC2_B", "EC2_C"}}\n\tfor i := 1; i <= 5; i++ {\n\t\tfmt.Printf("Request %d -> %s\\n", i, balancer.Next())\n\t}\n}',
                        },
                    ],
                },
                {
                    titleKey: "courses.hceBack101.m1.t2.pg2.title",
                    descriptionKey: "courses.hceBack101.m1.t2.pg2.description",
                    examples: [
                        {
                            language: "nginx",
                            code: "http {\n    # Define the Pool of Backend Servers\n    upstream backend_api {\n        # Utilizing default Round-Robin\n        server 10.0.1.15:3000;\n        server 10.0.1.16:3000;\n        server 10.0.1.17:3000 down; # Manually removed for maintenance\n    }\n\n    server {\n        listen 80;\n        server_name api.startup.com;\n\n        location / {\n            # Proxy the incoming Client request to the Backend Pool\n            proxy_pass http://backend_api;\n            \n            # Forward actual client IP headers\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header Host $host;\n        }\n    }\n}",
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "infra/nginx-setup",
                commitMessage:
                    "chore: Provision Nginx reverse proxy with Round-Robin upstreams",
                files: [
                    {
                        name: "ops",
                        type: "folder",
                        children: [
                            {
                                name: "nginx.conf",
                                type: "file",
                                content:
                                    "upstream backend { server 127.0.0.1:3001; server 127.0.0.1:3002; }",
                            },
                            {
                                name: "docker-compose.yml",
                                type: "file",
                                content: "version: '3'...",
                            },
                        ],
                    },
                ],
                activeFileSnippet: {
                    filename: "nginx.conf",
                    code: "upstream backend {\n  server api_1:3000;\n  server api_2:3000;\n}",
                },
            },
            community: {
                aiSummaryKey: "courses.hceBack101.m1.t2.community.aiSummary",
                solutions: [
                    {
                        authorInitials: "KW",
                        authorName: "Kevin W",
                        badgeKey: "",
                        roleKey: "common.roles.backendDev",
                        levelKey: "common.levels.advanced",
                        timeAgoKey: "common.time.2weeksAgo",
                        upvotes: 95,
                        comments: 12,
                        contentKey: "courses.hceBack101.m1.t2.community.s1.content",
                    },
                    {
                        authorInitials: "DP",
                        authorName: "David P",
                        badgeKey: "common.badges.topSolution",
                        roleKey: "common.roles.srSystemsEngineer",
                        levelKey: "common.levels.expert",
                        timeAgoKey: "common.time.1monthAgo",
                        upvotes: 142,
                        comments: 18,
                        contentKey: "courses.hceBack101.m1.t2.community.s2.content",
                    },
                ],
            },
        },
        {
            id: "HCE-BACK-101-M1-T3",
            moduleId: "HCE-BACK-101-M1",
            sequenceNumber: 3,
            titleKey: "courses.hceBack101.m1.t3.title",
            estimatedMinutes: 200,
            whatKey: "courses.hceBack101.m1.t3.what",
            whyKey: "courses.hceBack101.m1.t3.why",
            whenKey: "courses.hceBack101.m1.t3.when",
            howKey: "courses.hceBack101.m1.t3.how",
            ecosystemKey: "courses.hceBack101.m1.t3.ecosystem",
            realWorldKey: "courses.hceBack101.m1.t3.realWorld",
            useCasesKeys: [
                "courses.hceBack101.m1.t3.u1",
                "courses.hceBack101.m1.t3.u2",
                "courses.hceBack101.m1.t3.u3",
            ],
            advantagesKeys: [
                "courses.hceBack101.m1.t3.a1",
            ],
            disadvantagesKeys: [
                "courses.hceBack101.m1.t3.d1",
            ],

            interviewTipKey: "courses.hceBack101.m1.t3.interviewTip",
            resumeBulletKey: "courses.hceBack101.m1.t3.resumeBullet",

            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceBack101.m1.t3.v1.title",
                    authorKey: "courses.hceBack101.m1.t3.v1.author",
                    viewsKey: "courses.hceBack101.m1.t3.v1.views",
                    durationKey: "common.duration.4min",
                    url: "https://www.youtube.com/watch?v=k-Yaq8AHlFA",
                },
                {
                    type: "public",
                    titleKey: "courses.hceBack101.m1.t3.v2.title",
                    authorKey: "courses.hceBack101.m1.t3.v2.author",
                    viewsKey: "courses.hceBack101.m1.t3.v2.views",
                    durationKey: "common.duration.45min",
                    url: "https://www.youtube.com/watch?v=Y6Ev8GIlbxc",
                },
            ],
            moocs: [
                {
                    platform: "Coursera",
                    rating: 4.8,
                    titleKey: "courses.hceBack101.m1.t3.mooc1.title",
                    instructorKey: "courses.hceBack101.m1.t3.mooc1.instructor",
                    enrolledKey: "courses.hceBack101.m1.t3.mooc1.enrolled",
                    durationKey: "common.duration.20hours",
                    url: "https://www.coursera.org/learn/cloud-computing",
                },
            ],
            blogs: [
                {
                    type: "Documentation",
                    titleKey: "courses.hceBack101.m1.t3.blog1.title",
                    publisherKey: "courses.hceBack101.m1.t3.blog1.publisher",
                    readTimeKey: "courses.hceBack101.m1.t3.blog1.readTime",
                    url: "https://www.freecodecamp.org/news/a-plain-english-introduction-to-cap-theorem-baed41db1b18",
                },
                {
                    type: "Opinion",
                    titleKey: "courses.hceBack101.m1.t3.blog2.title",
                    publisherKey: "courses.hceBack101.m1.t3.blog2.publisher",
                    readTimeKey: "courses.hceBack101.m1.t3.blog2.readTime",
                    url: "https://cloud.google.com/blog/products/gcp/inside-cloud-spanner-and-the-cap-theorem",
                },
            ],
            scenarios: [
                {
                    id: "5",
                    difficulty: "Expert",
                    titleKey: "courses.hceBack101.m1.t3.s1.title",
                    categoryKey: "courses.hceBack101.m1.t3.s1.category",
                    estimatedTimeKey: "courses.hceBack101.m1.t3.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceBack101.m1.t3.s1.scenarioDescription",
                    problemAnalysisKey: "courses.hceBack101.m1.t3.s1.problemAnalysis",
                    architectureLayersKeys: [
                        "courses.hceBack101.m1.t3.s1.layer1",
                        "courses.hceBack101.m1.t3.s1.layer2",
                        "courses.hceBack101.m1.t3.s1.layer3",
                        "courses.hceBack101.m1.t3.s1.layer4",
                    ],
                    toolsAndTech: [
                        {
                            name: "Cassandra",
                            justificationKey: "courses.hceBack101.m1.t3.s1.tool1Justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceBack101.m1.t3.s1.tradeOff1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceBack101.m1.t3.s1.nfr1",
                    ],
                    kpisKeys: ["courses.hceBack101.m1.t3.s1.kpi1"],
                    keyInsightsKey: "courses.hceBack101.m1.t3.s1.keyInsights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceBack101.m1.t3.pg1.title",
                    descriptionKey: "courses.hceBack101.m1.t3.pg1.description",
                    examples: [
                        {
                            language: "typescript",
                            code: "class DatabaseNode {\n  private data: Record<string, string> = {};\n  public replicas: DatabaseNode[] = [];\n\n  // CP Approach: Block the client until ALL replicas acknowledge the write\n  async strongWrite(key: string, value: string) {\n    this.data[key] = value;\n    await Promise.all(this.replicas.map(r => r.sync(key, value))); // Blocks!\n    return 'Write Confirmed across all nodes';\n  }\n\n  // AP Approach: Acknowledge immediately, sync in the background\n  async eventualWrite(key: string, value: string) {\n    this.data[key] = value;\n    this.replicas.forEach(r => r.sync(key, value)); // Fire and forget\n    return 'Write Accepted (Background Syncing)';\n  }\n\n  async sync(key: string, value: string) {\n    await new Promise(r => setTimeout(r, 50)); // Simulating 50ms network lag\n    this.data[key] = value;\n  }\n}",
                        },
                        {
                            language: "python",
                            code: 'import asyncio\n\nclass DBReplica:\n    def __init__(self, id):\n        self.id = id\n        self.data = {}\n    async def sync(self, key, value):\n        await asyncio.sleep(0.05) # Network latency\n        self.data[key] = value\n        print(f"Node {self.id} Synced")\n\nasync def eventual_write(leader, key, val, replicas):\n    leader.data[key] = val\n    # Do NOT await the replicas here to maintain High Availability (A in CAP)\n    for r in replicas:\n        asyncio.create_task(r.sync(key, val))\n    return "Success"\n\nasync def strong_write(leader, key, val, replicas):\n    leader.data[key] = val\n    # Block the client to maintain Consistency (C in CAP)\n    await asyncio.gather(*(r.sync(key, val) for r in replicas))\n    return "Success (Fully Consistent)"',
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "arch/scaffolding",
                commitMessage: "docs: Add ADR for Cassandra selection",
                files: [],
                activeFileSnippet: {
                    filename: "adr-01-database.md",
                    code: "We chose Cassandra because Availability...",
                },
            },
            community: {
                aiSummary: "Trade-offs are engineering reality.",
                solutions: [],
            },
        },
        // ==========================================
        // MODULE 2 TOPICS (CONT)
        // ==========================================
        {
            id: "HCE-BACK-101-M2-T1",
            moduleId: "HCE-BACK-101-M2",
            sequenceNumber: 1,
            titleKey: "courses.hceBack101.m2.t1.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceBack101.m2.t1.what",
            whyKey: "courses.hceBack101.m2.t1.why",
            whenKey: "courses.hceBack101.m2.t1.when",
            howKey: "courses.hceBack101.m2.t1.how",
            ecosystemKey: "courses.hceBack101.m2.t1.ecosystem",
            realWorldKey: "courses.hceBack101.m2.t1.realWorld",
            useCasesKeys: [
                "courses.hceBack101.m2.t1.u1",
                "courses.hceBack101.m2.t1.u2",
                "courses.hceBack101.m2.t1.u3",
            ],
            advantagesKeys: [
                "courses.hceBack101.m2.t1.a1",
                "courses.hceBack101.m2.t1.a2",
            ],
            disadvantagesKeys: [
                "courses.hceBack101.m2.t1.d1",
                "courses.hceBack101.m2.t1.d2",
            ],
            interviewTipKey: "courses.hceBack101.m2.t1.interviewTip",
            resumeBulletKey: "courses.hceBack101.m2.t1.resumeBullet",
            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceBack101.m2.t1.v1.title",
                    authorKey: "courses.hceBack101.m2.t1.v1.author",
                    viewsKey: "courses.hceBack101.m2.t1.v1.views",
                    durationKey: "common.duration.25min",
                    url: "https://www.youtube.com/watch?v=RJWqfD1X-B4",
                },
                {
                    type: "public",
                    titleKey: "courses.hceBack101.m2.t1.v2.title",
                    authorKey: "courses.hceBack101.m2.t1.v2.author",
                    viewsKey: "courses.hceBack101.m2.t1.v2.views",
                    durationKey: "common.duration.10min",
                    url: "https://www.youtube.com/watch?v=mock_stripe",
                },
            ],
            moocs: [],
            blogs: [
                {
                    type: "Documentation",
                    titleKey: "courses.hceBack101.m2.t1.blog1.title",
                    publisherKey: "courses.hceBack101.m2.t1.blog1.publisher",
                    readTimeKey: "courses.hceBack101.m2.t1.blog1.readTime",
                    url: "https://docs.stripe.com/api/idempotent_requests",
                },
                {
                    type: "Case Study",
                    titleKey: "courses.hceBack101.m2.t1.blog2.title",
                    publisherKey: "courses.hceBack101.m2.t1.blog2.publisher",
                    readTimeKey: "courses.hceBack101.m2.t1.blog2.readTime",
                    url: "https://www.uber.com/en-IN/blog/microservice-architecture/",
                },
            ],
            scenarios: [
                {
                    id: "6",
                    difficulty: "Expert",
                    titleKey: "courses.hceBack101.m2.t1.s1.title",
                    categoryKey: "courses.hceBack101.m2.t1.s1.category",
                    estimatedTimeKey: "courses.hceBack101.m2.t1.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceBack101.m2.t1.s1.scenarioDescription",
                    problemAnalysisKey: "courses.hceBack101.m2.t1.s1.problemAnalysis",
                    architectureLayersKeys: [
                        "courses.hceBack101.m2.t1.s1.layer1",
                        "courses.hceBack101.m2.t1.s1.layer2",
                        "courses.hceBack101.m2.t1.s1.layer3",
                    ],
                    toolsAndTech: [
                        {
                            name: "Redis",
                            justificationKey: "courses.hceBack101.m2.t1.s1.tool1Justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceBack101.m2.t1.s1.tradeOff1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceBack101.m2.t1.s1.nfr1",
                    ],
                    kpisKeys: ["courses.hceBack101.m2.t1.s1.kpi1"],
                    keyInsightsKey: "courses.hceBack101.m2.t1.s1.keyInsights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceBack101.m2.t1.pg1.title",
                    descriptionKey: "courses.hceBack101.m2.t1.pg1.description",
                    examples: [
                        {
                            language: "typescript",
                            code: "import express from 'express';\nimport Redis from 'ioredis';\n\nconst redis = new Redis();\nconst app = express();\napp.use(express.json());\n\napp.post('/charge', async (req, res) => {\n  const idempotencyKey = req.headers['idempotency-key'] as string;\n  if (!idempotencyKey) return res.status(400).send('Missing Key');\n\n  // Atomic Lock: Set key only if it does not exist (NX), expire in 24 hours (EX)\n  const acquiredLock = await redis.set(`lock:${idempotencyKey}`, 'processing', 'EX', 86400, 'NX');\n  \n  if (!acquiredLock) {\n     return res.status(409).send('Duplicate Request Caught');\n  }\n\n  // Process transaction...\n  await redis.set(`result:${idempotencyKey}`, 'Success');\n  res.send('Transaction Completed Successfully');\n});",
                        },
                        {
                            language: "go",
                            code: 'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"net/http"\n\t"time"\n\t"github.com/go-redis/redis/v8"\n)\n\nvar rdb = redis.NewClient(&redis.Options{Addr: "localhost:6379"})\nvar ctx = context.Background()\n\nfunc chargeHandler(w http.ResponseWriter, r *http.Request) {\n\tkey := r.Header.Get("Idempotency-Key")\n\tif key == "" {\n\t\thttp.Error(w, "Missing Key", 400)\n\t\treturn\n\t}\n\n\t// Atomic SetNX\n\tacquired, _ := rdb.SetNX(ctx, "lock:"+key, "processing", 24*time.Hour).Result()\n\tif !acquired {\n\t\thttp.Error(w, "Duplicate Request", 409)\n\t\treturn\n\t}\n\n\tfmt.Fprint(w, "Transaction Processed")\n}',
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "feat/idempotent-api",
                commitMessageKey: "courses.hceBack101.m2.t1.git.commitMessage",
                files: [],
                activeFileSnippet: {
                    filename: "server.ts",
                    codeKey: "courses.hceBack101.m1.t2.git.f1.code",
                },
            },
            community: {
                aiSummaryKey: "courses.hceBack101.m2.t1.community.aiSummary",
                solutions: [
                    {
                        authorInitials: "JS",
                        authorName: "John Smith",
                        badgeKey: "Top Solution",
                        roleKey: "Senior Backend Engineer",
                        levelKey: "Expert",
                        timeAgoKey: "common.time.1monthAgo",
                        upvotes: 215,
                        comments: 40,
                        contentKey: "courses.hceBack101.m2.t1.community.s1.summary",
                    },
                    {
                        authorInitials: "AL",
                        authorName: "Alice Lee",
                        badgeKey: "Helpful",
                        roleKey: "Backend Developer",
                        levelKey: "Advanced",
                        timeAgoKey: "common.time.2monthsAgo",
                        upvotes: 188,
                        comments: 25,
                        contentKey: "courses.hceBack101.m2.t1.community.s2.summary",
                    },
                ],
            },
        },
        {
            id: "HCE-BACK-101-M2-T2",
            moduleId: "HCE-BACK-101-M2",
            sequenceNumber: 2,
            titleKey: "courses.hceBack101.m2.t2.title",
            estimatedMinutes: 200,
            whatKey: "courses.hceBack101.m2.t2.what",
            whyKey: "courses.hceBack101.m2.t2.why",
            whenKey: "courses.hceBack101.m2.t2.when",
            howKey: "courses.hceBack101.m2.t2.how",
            ecosystemKey: "courses.hceBack101.m2.t2.ecosystem",
            realWorldKey: "courses.hceBack101.m2.t2.realWorld",
            useCasesKeys: [
                "courses.hceBack101.m2.t2.u1",
                "courses.hceBack101.m2.t2.u2",
                "courses.hceBack101.m2.t2.u3",
            ],
            advantagesKeys: [
                "courses.hceBack101.m2.t2.a1",
                "courses.hceBack101.m2.t2.a2",
            ],
            disadvantagesKeys: [
                "courses.hceBack101.m2.t2.d1",
                "courses.hceBack101.m2.t2.d2",
            ],
            interviewTipKey: "courses.hceBack101.m2.t2.interviewTip",
            resumeBulletKey: "courses.hceBack101.m2.t2.resumeBullet",
            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceBack101.m2.t2.v1.title",
                    authorKey: "courses.hceBack101.m2.t2.v1.author",
                    viewsKey: "courses.hceBack101.m2.t2.v1.views",
                    durationKey: "common.duration.15min",
                    url: "https://www.youtube.com/watch?v=y_E_y_B_y_B",
                },
                {
                    type: "public",
                    titleKey: "courses.hceBack101.m2.t2.v2.title",
                    authorKey: "courses.hceBack101.m2.t2.v2.author",
                    viewsKey: "courses.hceBack101.m2.t2.v2.views",
                    durationKey: "common.duration.45min",
                    url: "https://www.youtube.com/watch?v=z_E_z_B_z_B",
                },
            ],
            moocs: [
                {
                    platform: "Udemy",
                    rating: 4.8,
                    titleKey: "courses.hceBack101.m2.t2.mooc1.title",
                    instructorKey: "courses.hceBack101.m2.t2.mooc1.instructor",
                    enrolledKey: "courses.hceBack101.m2.t2.mooc1.enrolled",
                    durationKey: "common.duration.15hours",
                    url: "https://www.udemy.com/course/rest-api-design/",
                },
            ],
            blogs: [
                {
                    type: "Documentation",
                    titleKey: "courses.hceBack101.m2.t2.blog1.title",
                    publisherKey: "courses.hceBack101.m2.t2.blog1.publisher",
                    readTimeKey: "courses.hceBack101.m2.t2.blog1.readTime",
                    url: "https://restfulapi.net/",
                },
                {
                    type: "Opinion",
                    titleKey: "courses.hceBack101.m2.t2.blog2.title",
                    publisherKey: "courses.hceBack101.m2.t2.blog2.publisher",
                    readTimeKey: "courses.hceBack101.m2.t2.blog2.readTime",
                    url: "https://graphql.org/learn/",
                },
            ],
            scenarios: [
                {
                    id: "7",
                    difficulty: "Medium",
                    titleKey: "courses.hceBack101.m2.t2.s1.title",
                    categoryKey: "courses.hceBack101.m2.t2.s1.category",
                    estimatedTimeKey: "courses.hceBack101.m2.t2.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceBack101.m2.t2.s1.scenarioDescription",
                    problemAnalysisKey: "courses.hceBack101.m2.t2.s1.problemAnalysis",
                    architectureLayersKeys: [
                        "courses.hceBack101.m2.t2.s1.layer1",
                        "courses.hceBack101.m2.t2.s1.layer2",
                    ],
                    toolsAndTech: [
                        {
                            name: "OpenAPI/Swagger",
                            justificationKey: "courses.hceBack101.m2.t2.s1.tool1Justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceBack101.m2.t2.s1.tradeOff1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceBack101.m2.t2.s1.nfr1",
                    ],
                    kpisKeys: ["courses.hceBack101.m2.t2.s1.kpi1"],
                    keyInsightsKey: "courses.hceBack101.m2.t2.s1.keyInsights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceBack101.m2.t2.pg1.title",
                    descriptionKey: "courses.hceBack101.m2.t2.pg1.description",
                    examples: [
                        {
                            language: "json",
                            code: "// REST: Over-fetching\nGET /users/123\nResponse: {\n  \"id\": \"123\",\n  \"name\": \"Alice\",\n  \"email\": \"alice@example.com\",\n  \"address\": \"123 Main St\",\n  \"phone\": \"555-1234\",\n  \"lastLogin\": \"2023-01-01T12:00:00Z\"\n}\n\n// GraphQL: Exact-fetching\nquery {\n  user(id: \"123\") {\n    name\n    email\n  }\n}\nResponse: {\n  \"data\": {\n    \"user\": {\n      \"name\": \"Alice\",\n      \"email\": \"alice@example.com\"\n    }\n  }\n}",
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "feat/graphql-endpoint",
                commitMessageKey: "courses.hceBack101.m2.t2.git.commitMessage",
                files: [],
                activeFileSnippet: {
                    filename: "schema.graphql",
                    codeKey: "courses.hceBack101.m2.t2.git.f1.code",
                },
            },
            community: {
                aiSummaryKey: "courses.hceBack101.m2.t2.community.aiSummary",
                solutions: [
                    {
                        authorInitials: "JD",
                        authorName: "Jane Doe",
                        badgeKey: "Top Solution",
                        roleKey: "API Architect",
                        levelKey: "Expert",
                        timeAgoKey: "common.time.3monthsAgo",
                        upvotes: 156,
                        comments: 12,
                        contentKey: "courses.hceBack101.m2.t2.community.s1.summary",
                    },
                ],
            },
        },
        {
            id: "HCE-BACK-101-M3-T1",
            moduleId: "HCE-BACK-101-M3",
            sequenceNumber: 1,
            titleKey: "courses.hceBack101.m3.t1.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceBack101.m3.t1.what",
            whyKey: "courses.hceBack101.m3.t1.why",
            whenKey: "courses.hceBack101.m3.t1.when",
            howKey: "courses.hceBack101.m3.t1.how",
            ecosystemKey: "courses.hceBack101.m3.t1.ecosystem",
            realWorldKey: "courses.hceBack101.m3.t1.realWorld",
            useCasesKeys: [
                "courses.hceBack101.m3.t1.u1",
                "courses.hceBack101.m3.t1.u2",
                "courses.hceBack101.m3.t1.u3",
            ],
            advantagesKeys: [
                "courses.hceBack101.m3.t1.a1",
                "courses.hceBack101.m3.t1.a2",
            ],
            disadvantagesKeys: [
                "courses.hceBack101.m3.t1.d1",
                "courses.hceBack101.m3.t1.d2",
            ],
            interviewTipKey: "courses.hceBack101.m3.t1.interviewTip",
            resumeBulletKey: "courses.hceBack101.m3.t1.resumeBullet",
            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceBack101.m3.t1.v1.title",
                    authorKey: "courses.hceBack101.m3.t1.v1.author",
                    viewsKey: "courses.hceBack101.m3.t1.v1.views",
                    durationKey: "common.duration.20min",
                    url: "https://www.youtube.com/watch?v=-pjdqB_sKAA",
                },
            ],
            moocs: [
                {
                    platform: "Udemy",
                    rating: 4.9,
                    titleKey: "courses.hceBack101.m3.t1.mooc1.title",
                    instructorKey: "courses.hceBack101.m3.t1.mooc1.instructor",
                    enrolledKey: "courses.hceBack101.m3.t1.mooc1.enrolled",
                    durationKey: "common.duration.25hours",
                    url: "https://www.udemy.com/course/advanced-sql-and-database-design/",
                },
            ],
            blogs: [
                {
                    type: "Documentation",
                    titleKey: "courses.hceBack101.m3.t1.blog1.title",
                    publisherKey: "courses.hceBack101.m3.t1.blog1.publisher",
                    readTimeKey: "courses.hceBack101.m3.t1.blog1.readTime",
                    url: "https://www.postgresql.org/docs/current/transaction-iso.html",
                },
            ],
            scenarios: [
                {
                    id: "8",
                    difficulty: "Hard",
                    titleKey: "courses.hceBack101.m3.t1.s1.title",
                    categoryKey: "courses.hceBack101.m3.t1.s1.category",
                    estimatedTimeKey: "courses.hceBack101.m3.t1.s1.estimatedTime",
                    scenarioDescriptionKey: "courses.hceBack101.m3.t1.s1.scenarioDescription",
                    problemAnalysisKey: "courses.hceBack101.m3.t1.s1.problemAnalysis",
                    architectureLayersKeys: [
                        "courses.hceBack101.m3.t1.s1.layer1",
                        "courses.hceBack101.m3.t1.s1.layer2",
                    ],
                    toolsAndTech: [
                        {
                            nameKey: "courses.hceBack101.m3.t1.s1.tool1",
                            justificationKey: "courses.hceBack101.m3.t1.s1.tool1Justification",
                        },
                    ],
                    tradeOffsKeys: [
                        "courses.hceBack101.m3.t1.s1.tradeOff1",
                    ],
                    nfrConsiderationsKeys: [
                        "courses.hceBack101.m3.t1.s1.nfr1",
                    ],
                    kpisKeys: ["courses.hceBack101.m3.t1.s1.kpi1"],
                    keyInsightsKey: "courses.hceBack101.m3.t1.s1.keyInsights",
                },
            ],
            playgrounds: [
                {
                    titleKey: "courses.hceBack101.m3.t1.pg1.title",
                    descriptionKey: "courses.hceBack101.m3.t1.pg1.description",
                    examples: [
                        {
                            language: "sql",
                            code: "BEGIN;\n  UPDATE accounts SET balance = balance - 500 WHERE account_id = 'A' AND balance >= 500;\n  UPDATE accounts SET balance = balance + 500 WHERE account_id = 'B';\nCOMMIT;",
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "fix/race-condition",
                commitMessage: "fix: Add transaction isolation",
                files: [],
                activeFileSnippet: {
                    filename: "db.ts",
                    code: "BEGIN transaction logic",
                },
            },
            community: {
                aiSummaryKey: "courses.hceBack101.m3.t1.community.aiSummary",
                solutions: [
                    {
                        authorInitials: "ML",
                        authorName: "Mike Lowery",
                        badgeKey: "Top Solution",
                        roleKey: "Database Engineer",
                        levelKey: "Expert",
                        timeAgoKey: "common.time.1monthAgo",
                        upvotes: 215,
                        comments: 40,
                        contentKey: "courses.hceBack101.m3.t1.community.s1.summary",
                    },
                ],
            },
        },
        {
            id: "HCE-BACK-101-M4-T1",
            moduleId: "HCE-BACK-101-M4",
            sequenceNumber: 1,
            titleKey: "courses.hceBack101.m4.t1.title",
            estimatedMinutes: 240,
            whatKey: "courses.hceBack101.m4.t1.what",
            whyKey: "courses.hceBack101.m4.t1.why",
            whenKey: "courses.hceBack101.m4.t1.when",
            howKey: "courses.hceBack101.m4.t1.how",
            ecosystemKey: "courses.hceBack101.m4.t1.ecosystem",
            realWorldKey: "courses.hceBack101.m4.t1.realWorld",
            useCasesKeys: [
                "courses.hceBack101.m4.t1.u1",
                "courses.hceBack101.m4.t1.u2",
                "courses.hceBack101.m4.t1.u3",
            ],
            advantagesKeys: [
                "courses.hceBack101.m4.t1.a1",
                "courses.hceBack101.m4.t1.a2",
            ],
            disadvantagesKeys: [
                "courses.hceBack101.m4.t1.d1",
            ],
            interviewTipKey: "courses.hceBack101.m4.t1.interviewTip",
            resumeBulletKey: "courses.hceBack101.m4.t1.resumeBullet",
            videos: [
                {
                    type: "public",
                    titleKey: "courses.hceBack101.m4.t1.v1.title",
                    authorKey: "courses.hceBack101.m4.t1.v1.author",
                    viewsKey: "courses.hceBack101.m4.t1.v1.views",
                    durationKey: "common.duration.10min",
                    url: "https://www.youtube.com/watch?v=mbsmsi7pe3A",
                },
            ],
            moocs: [],
            blogs: [],
            scenarios: [],
            playgrounds: [
                {
                    titleKey: "courses.hceBack101.m4.t1.pg1.title",
                    descriptionKey: "courses.hceBack101.m4.t1.pg1.description",
                    examples: [
                        {
                            language: "typescript",
                            code: "import bcrypt from 'bcrypt';\nasync function hashPwd(p: string) { return await bcrypt.hash(p, 12); }",
                        },
                    ],
                },
            ],
            gitSimulation: {
                branchName: "security/auth",
                commitMessage: "sec: Migrate to Bcrypt",
                files: [],
                activeFileSnippet: { filename: "auth.ts", code: "" },
            },
            community: {
                aiSummaryKey: "courses.hceBack101.m4.t1.community.aiSummary",
                solutions: [],
            },
        },
    ],
    videoCount: 84,
    articleCount: 42,
    problemCount: 20,
    capstoneProject: {
        titleKey: "courses.hceBack101.capstone.title",
        descriptionKey: "courses.hceBack101.capstone.description",
        estimatedDays: 20,
        skillsFocusedKeys: [
            "courses.hceBack101.capstone.skills.s1",
            "courses.hceBack101.capstone.skills.s2",
            "courses.hceBack101.capstone.skills.s3",
            "courses.hceBack101.capstone.skills.s4",
            "courses.hceBack101.capstone.skills.s5",
            "courses.hceBack101.capstone.skills.s6",
            "courses.hceBack101.capstone.skills.s7",
        ],
        steps: [
            {
                sequenceNumber: 1,
                titleKey: "courses.hceBack101.capstone.steps.p1.title",
                objectiveKey: "courses.hceBack101.capstone.steps.p1.objective",
                skillsKeys: ["common.skills.sqlSchema", "common.skills.dockerCompose", "common.skills.foreignKeys"],
                status: "Not Started",
            },
            {
                sequenceNumber: 2,
                titleKey: "courses.hceBack101.capstone.steps.p2.title",
                objectiveKey: "courses.hceBack101.capstone.steps.p2.objective",
                skillsKeys: ["common.skills.expressGin", "common.skills.schemaValidation", "common.skills.middleware"],
                status: "Not Started",
            },
            {
                sequenceNumber: 3,
                titleKey: "courses.hceBack101.capstone.steps.p3.title",
                objectiveKey: "courses.hceBack101.capstone.steps.p3.objective",
                skillsKeys: ["common.skills.bcrypt", "common.skills.jwt", "common.skills.xssDefense"],
                status: "Not Started",
            },
            {
                sequenceNumber: 4,
                titleKey: "courses.hceBack101.capstone.steps.p4.title",
                objectiveKey: "courses.hceBack101.capstone.steps.p4.objective",
                skillsKeys: ["common.skills.redisAtomic", "common.skills.distributedLocking"],
                status: "Not Started",
            },
            {
                sequenceNumber: 5,
                titleKey: "courses.hceBack101.capstone.steps.p5.title",
                objectiveKey: "courses.hceBack101.capstone.steps.p5.objective",
                skillsKeys: ["common.skills.rabbitmq", "common.skills.pubSub", "common.skills.workerNodes"],
                status: "Not Started",
            },
            {
                sequenceNumber: 6,
                titleKey: "courses.hceBack101.capstone.steps.p6.title",
                objectiveKey: "courses.hceBack101.capstone.steps.p6.objective",
                skillsKeys: ["common.skills.sqlCommit", "common.skills.rollback", "common.skills.isolationLevels"],
                status: "Not Started",
            },
        ],
    },
    totalEstimatedHours: 65,
    moduleCount: 4,
    estimatedCompletionDays: 70,
    createdAt: "2026-02-28T00:00:00Z",
    updatedAt: "2026-02-28T00:00:00Z",
    version: "5.0",
    status: "published",
};
