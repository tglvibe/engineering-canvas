import { CourseEnhanced } from "./types";

// PART 1: MODULES 1 & 2
// Part 2 (Modules 3 & 4) will be appended shortly.

export const coreCs101: CourseEnhanced = {
  id: "CORE CS 101",
  titleKey: "courses.coreCs101",
  descKey: "courses.coreCs101Desc",
  icon: "💻",
  duration: "6 weeks",
  languages: ["C", "Assembly", "Python", "Bash"],
  category: "high-code",
  programIds: ["CORE CS"],
  roleIds: ["backend-dev", "systems-engineer"],
  trackId: "core",
  level: "beginner",
  prerequisites: [],
  targetAudience:
    "First-principle engineers aiming to understand exactly how silicon, memory, and the operating system execute code before adding high-level abstractions like Node.js or Python.",
  learningOutcomes: [
    "Deconstruct the architecture of the CPU, GPU, and modern AI TPUs.",
    "Manipulate raw memory securely via pointers, mastering Stack frames and Heap allocations.",
    "Execute systemic bitwise logic to optimize storage and data transmission.",
    "Architect foundational Operating System primitives: processes, threads, and context switches.",
    "Bypass the kernel entirely using modern zero-copy packet processing paradigms.",
  ],
  modules: [
    {
      id: "CORE-CS-101-M1",
      title: "From Silicon to Software",
      description:
        "The journey from raw transistors to the Operating System kernel. Understanding precisely how electricity becomes logic.",
      sequenceNumber: 1,
      estimatedHours: 12,
      topics: ["CORE-CS-101-M1-T1", "CORE-CS-101-M1-T2"],
      prerequisiteModuleIds: [],
      outcomes: [
        "Explain the Von Neumann Architecture",
        "Differentiate User Space vs Kernel Space",
        "Analyze CPU Caches (L1/L2/L3)",
      ],
    },
    {
      id: "CORE-CS-101-M2",
      title: "Memory: The Stack, Heap & Pointers",
      description:
        "Memory is just a massive array of bytes. Mastering how languages allocate, track, and destroy that memory.",
      sequenceNumber: 2,
      estimatedHours: 16,
      topics: ["CORE-CS-101-M2-T1", "CORE-CS-101-M2-T2"],
      prerequisiteModuleIds: ["CORE-CS-101-M1"],
      outcomes: [
        "Trace Stack frames",
        "Identify Dangling Pointers",
        "Implement Bitwise math optimizations",
      ],
    },
    {
      id: "CORE-CS-101-M3",
      title: "Operating Systems & Concurrency",
      description:
        "How one CPU pretends to run 1,000 programs at once. The magic and overhead of the OS Scheduler.",
      sequenceNumber: 3,
      estimatedHours: 15,
      topics: ["CORE-CS-101-M3-T1", "CORE-CS-101-M3-T2"],
      prerequisiteModuleIds: ["CORE-CS-101-M2"],
      outcomes: [
        "Contrast OS Threads vs Processes",
        "Diagnose Race Conditions",
        "Execute IPC (Inter-process Communication)",
      ],
    },
    {
      id: "CORE-CS-101-M4",
      title: "Virtualization & Modern Compute",
      description:
        "From bare metal to the cloud. How hypervisors and Linux namespaces (Docker) partition hardware.",
      sequenceNumber: 4,
      estimatedHours: 12,
      topics: ["CORE-CS-101-M4-T1"],
      prerequisiteModuleIds: ["CORE-CS-101-M3"],
      outcomes: [
        "Understand Linux cgroups",
        "Implement Docker container isolation",
        "Contrast VMs vs Containers",
      ],
    },
  ],
  topics: [
    {
      id: "CORE-CS-101-M1-T1",
      moduleId: "CORE-CS-101-M1",
      sequenceNumber: 1,
      title: "The CPU, GPU, and Cache Locality",
      estimatedMinutes: 240,

      what: "The CPU (Central Processing Unit) is optimized for sequential, complex logic with deep pipelines. The GPU (Graphics Processing Unit) is optimized for massive parallel throughput. L1/L2 Caches are infinitesimally small, incredibly fast memory banks built directly into the silicon to feed the CPU.",
      why: "Fetching data from RAM takes ~100 nanoseconds. Fetching data from L1 Cache takes ~1 nanosecond. If your code is not optimized for 'Cache Locality' (storing related data contiguously in memory), the CPU will spend 99% of its time idling, waiting for RAM.",
      when: "Crucial when writing database engines, game rendering loops, and algorithmic high-frequency trading platforms.",
      how: "Instead of creating 'Arrays of Objects' (where objects are scattered randomly across the Heap), game developers use 'Structs of Arrays' or contiguous blocks of memory, guaranteeing that when the CPU fetches 1 item, it implicitly drags the next 10 items into the L1 cache for free.",
      ecosystem:
        "Von Neumann architecture, L1/L2/L3 Cache, Branch Prediction, SIMD (Single Instruction Multiple Data), TPUs.",
      realWorld:
        "Data-Oriented Design (DOD) revolutionized game engines (like Unity's DOTS). By abandoning Object-Oriented spaghetti in favor of contiguous memory arrays, frame rates jump 10x merely by pleasing the CPU Cache.",
      useCases: [
        "Physics simulations",
        "Cryptographic hashing",
        "Video transcoding pipelines",
      ],
      advantages: [
        "Unlocks the true hardware speed of a computer without upgrading the physical chip",
        "Reduces server fleet costs by maximizing CPU utilization",
      ],
      disadvantages: [
        "Breaks traditional 'Object Oriented' design principles",
        "Incredibly difficult to maintain and read",
      ],

      interviewTip:
        "If asked to optimize a loop, mention 'Cache Misses'. Explain that accessing a massive 2D matrix by Columns is 10x slower than accessing it by Rows because of how memory is laid out contiguously.",
      resumeBullet:
        "Optimized a core sorting algorithm for cache locality, reducing L3 cache misses by 85% and dropping CPU execution time from 400ms to 40ms.",

      videos: [
        {
          type: "public",
          title: "CPU Caches and Data-Oriented Design",
          author: "CppCon",
          views: "350K views",
          duration: "1:05:20",
          url: "https://www.youtube.com/watch?v=WDIkqP4JbkE",
        },
        {
          type: "public",
          title: "How a CPU Works",
          author: "Branch Education",
          views: "2.1M views",
          duration: "20:15",
          url: "https://www.youtube.com/watch?v=cNN_tTXABUA",
        },
      ],
      moocs: [
        {
          platform: "Coursera",
          rating: 4.9,
          title: "Computer Architecture",
          instructor: "Princeton University",
          enrolled: "120K+",
          duration: "20 hours",
          url: "https://www.coursera.org/learn/comparch",
        },
      ],
      blogs: [
        {
          type: "Documentation",
          title: "Gallery of Processor Cache Effects",
          publisher: "Igor Ostrovsky",
          readTime: "25 min",
          url: "http://igoro.com/archive/gallery-of-processor-cache-effects/",
        },
        {
          type: "Case Study",
          title: "Data Oriented Design",
          publisher: "Richard Fabian",
          readTime: "15 min",
          url: "https://www.dataorienteddesign.com/dodbook/",
        },
      ],
      scenarios: [
        {
          id: "1",
          difficulty: "Hard",
          title: "The Cache Locality Matrix Disaster",
          category: "Performance",
          estimatedTime: "4 hours",
          scenarioDescription:
            "An AI company wrote a massive matrix multiplication algorithm in C. It iterates through a 10,000 x 10,000 data set conceptually correctly, but it takes 15 seconds to run. The CPU utilization is at 100%, but throughput is zero.",
          problemAnalysis:
            "The developer is iterating through the matrix 'Column-Major' (i.e., `array[x][y]` where `y` increments first). In C, arrays are stored in memory 'Row-Major'. Every single loop iteration is forcing the CPU to jump across RAM, completely flushing the L1 Cache every cycle (100% Cache Miss Rate).",
          architectureLayers: [
            "C Compiler",
            "L1 / L2 Hardware Cache",
            "System RAM",
          ],
          toolsAndTech: [
            {
              name: "Valgrind Cachegrind",
              justification:
                "A profiler that simulates CPU caches to precisely count the number of cache misses per line of code.",
            },
          ],
          tradeOffs: [
            "Mathematical intuition vs Hardware reality. Writing algorithms that match human math logic often perform terribly on actual silicon.",
          ],
          nfrConsiderations: [
            "Latency: Memory physics strictly govern execution speed.",
          ],
          kpis: ["Reduce Cache Misses to under 1%"],
          keyInsights:
            "The CPU is so fast that RAM has become the new bottleneck. You are not programming the CPU; you are programming the Cache.",
        },
      ],
      playgrounds: [
        {
          title: "Row-Major vs Column-Major Iteration",
          description:
            "Proof that traversing RAM in the wrong direction incurs a 10x penalty.",
          examples: [
            {
              language: "c",
              code: '#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\n\n#define SIZE 10000\n\nint matrix[SIZE][SIZE];\n\nint main() {\n    clock_t start, end;\n    long long sum = 0;\n\n    // 🟢 ROW-MAJOR (CACHE FRIENDLY)\n    // Memory is continuous.\n    start = clock();\n    for (int i = 0; i < SIZE; i++) {\n        for (int j = 0; j < SIZE; j++) {\n            sum += matrix[i][j];\n        }\n    }\n    end = clock();\n    printf("Row-Major (Fast): %f seconds\\n", ((double) (end - start)) / CLOCKS_PER_SEC);\n\n    sum = 0;\n    // 🔴 COLUMN-MAJOR (CACHE HOSTILE)\n    // Forcing the CPU to jump exactly SIZE bytes every iteration.\n    start = clock();\n    for (int j = 0; j < SIZE; j++) {\n        for (int i = 0; i < SIZE; i++) {\n            sum += matrix[i][j];\n        }\n    }\n    end = clock();\n    printf("Column-Major (Slow): %f seconds\\n", ((double) (end - start)) / CLOCKS_PER_SEC);\n\n    return 0;\n}',
            },
            {
              language: "python",
              code: 'import numpy as np\nimport time\n\n# Numpy is written in C and is highly optimized for cache locality\nSIZE = 10000\nmatrix = np.zeros((SIZE, SIZE))\n\n# Fast - contiguous memory\nstart_time = time.time()\nmatrix.sum(axis=1) # Row-wise\nprint(f"Row-wise: {time.time() - start_time} seconds")\n\n# Slow - jumping memory\nstart_time = time.time()\nmatrix.sum(axis=0) # Column-wise\nprint(f"Column-wise: {time.time() - start_time} seconds")',
            },
          ],
        },
      ],
      gitSimulation: {
        branchName: "perf/matrix-transposition",
        commitMessage:
          "perf: refactor math library to utilize memory-contiguous row parsing",
        files: [
          {
            name: "math",
            type: "folder",
            children: [
              { name: "matrix.c", type: "file", content: "row major loops" },
            ],
          },
        ],
        activeFileSnippet: {
          filename: "matrix.c",
          code: "for(i..){ for(j..) } ",
        },
      },
      community: {
        aiSummary:
          "Object-oriented programming broke modern hardware. If you want maximum performance, you must write code that treats memory as flat, continuous sheets of data.",
        solutions: [
          {
            authorInitials: "DR",
            authorName: "Dave R.",
            badge: "Hardware Hacker",
            role: "C++ Engine Dev",
            level: "Expert",
            timeAgo: "1 year ago",
            upvotes: 512,
            comments: 30,
            content:
              "Node devs complain about Javascript being slow. It's actually fast. What's slow is that every JS object is allocated randomly on the Heap, meaning you get a cache miss on literally every variable read.",
          },
        ],
      },
    },
    {
      id: "CORE-CS-101-M2-T1",
      moduleId: "CORE-CS-101-M2",
      sequenceNumber: 1,
      title: "Memory Vectors: Pointers, The Stack & The Heap",
      estimatedMinutes: 240,

      what: "The Stack is LIFO (Last-In-First-Out) memory used for function calls and local variables; it is incredibly fast but strictly limited in size. The Heap is a massive pool of global memory used for dynamic, unpredictable data structures (e.g., a massive JSON string) requiring explicit allocation and de-allocation.",
      why: "If you declare a massive 10-megabyte array on the Stack recursively, your program crashes instantly ('Stack Overflow'). If you declare it on the Heap and forget to clear it, your server slowly runs out of memory until it dies ('Memory Leak').",
      when: "Every time you instantiate an object, pass a variable to a function, or return a payload.",
      how: "A 'Pointer' is merely an integer that stores the physical memory address (e.g., 0xA1F3) of the actual data on the Heap. The pointer itself lives on the Stack. Passing the Pointer to a function is 1000x faster than copying all 10 megabytes of the Heap data.",
      ecosystem: "sizeof(), malloc/free, Garbage Collectors, Buffer Overflows.",
      realWorld:
        "Heartbleed, one of the most catastrophic security vulnerabilities in internet history, occurred because OpenSSL lacked bounds-checking on pointers. Hackers tricked the C code into returning raw Heap memory adjacent to the target pointer—which happened to contain private SSL encryption keys.",
      useCases: [
        "Buffer overflow exploitation mitigation",
        "Performance passing of massive datasets ('Pass-by-Reference')",
        "Parsing binary protocols",
      ],
      advantages: [
        "Pointers allow zero-copy manipulation of gigabytes of data",
        "Stack allocation is practically zero-latency",
      ],
      disadvantages: [
        "Dangling Pointers (pointing to memory that has been freed) causes silent data corruption",
        "Writing past the buffer length allows severe security hacks",
      ],

      interviewTip:
        "In technical interviews, state clearly: 'Pass-by-Value copies the data (safest, but slow for large objects). Pass-by-Reference copies the memory address pointer (blazingly fast, but dangerous if mutated improperly).'",
      resumeBullet:
        "Audited core C daemons for pointer vulnerabilities, mitigating critical buffer overflow vectors and ensuring rigid segmentation of the execution stack.",

      videos: [
        {
          type: "public",
          title: "Pointers and dynamic memory - stack vs heap",
          author: "mycodeschool",
          views: "1.8M views",
          duration: "14:20",
          url: "https://www.youtube.com/watch?v=_8-ht2AKyH4",
        },
        {
          type: "public",
          title: "Stack Overflow & Buffer Overflows Explained",
          author: "LiveOverflow",
          views: "850K views",
          duration: "10:15",
          url: "https://www.youtube.com/watch?v=1xo_Z_yTzQQ",
        },
      ],
      moocs: [
        {
          platform: "edX",
          rating: 4.8,
          title: "C Programming: Pointers and Memory Management",
          instructor: "Dartmouth College",
          enrolled: "90K+",
          duration: "14 hours",
          url: "https://www.edx.org/course/c-programming-pointers-and-memory-management",
        },
      ],
      blogs: [
        {
          type: "Architecture",
          title: "Understanding the Virtual Memory Manager",
          publisher: "Microsoft Docs",
          readTime: "20 min",
          url: "https://learn.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/virtual-memory",
        },
        {
          type: "Guide",
          title: "Smashing The Stack For Fun And Profit",
          publisher: "Aleph One (Phrack)",
          readTime: "45 min",
          url: "http://phrack.org/issues/49/14.html",
        },
      ],
      scenarios: [
        {
          id: "2",
          difficulty: "Expert",
          title: "Hunting the Silent Data Corrupter",
          category: "Debugging",
          estimatedTime: "6 hours",
          scenarioDescription:
            "A C-based networking router occasionally routes packets to completely wrong IP addresses. Only happens under extreme load. The codebase compiles perfectly.",
          problemAnalysis:
            "A 'Dangling Pointer' or 'Use-After-Free' bug. Thread A allocated a connection object. Thread B closed it and freed the memory. Thread A then tries to read the IP address from that pointer. Because the OS hasn't overwritten that memory block yet, it doesn't crash immediately; it just reads garbage bytes.",
          architectureLayers: ["C Runtime", "Heap Manager", "Multithreading"],
          toolsAndTech: [
            {
              name: "Valgrind (Memcheck)",
              justification:
                "A dynamic binary instrumentation framework that intercepts every single `malloc` and `free` to detect if you ever read memory after it has been freed.",
            },
          ],
          tradeOffs: [
            "Running Valgrind slows down the application by 20x, making it impossible to run in production, only in CI testing beds.",
          ],
          nfrConsiderations: [
            "Reliability: Memory bugs are non-deterministic. They don't happen every time.",
          ],
          kpis: ["0 Memory Leaks and 0 Invalid Reads in the test suite"],
          keyInsights:
            "Higher-level languages (Java/Python) were invented literally to protect humans from pointers.",
        },
      ],
      playgrounds: [
        {
          title: "Pass by Value vs Pass by Reference",
          description:
            "Modifying variables securely. Why pointers are necessary to actually update state.",
          examples: [
            {
              language: "c",
              code: '#include <stdio.h>\n\n// 🔴 PASS BY VALUE\n// Copies the actual integer. The original \'x\' is safe, but untouched.\nvoid passByValue(int num) {\n    num = 99;\n}\n\n// 🟢 PASS BY REFERENCE (POINTERS)\n// Takes the ADDRESS of the integer in memory, and modifies it directly.\nvoid passByReference(int *ptr) {\n    *ptr = 99;  // Dereference the pointer and alter the master value\n}\n\nint main() {\n    int x = 5;\n    \n    passByValue(x);\n    printf("After Pass By Value, x is: %d\\n", x); // Outputs: 5\n    \n    passByReference(&x); // Send the Memory Address of x (e.g., 0xA1)\n    printf("After Pass By Reference, x is: %d\\n", x); // Outputs: 99\n    \n    return 0;\n}',
            },
            {
              language: "typescript",
              code: "// JS/TS automatically Passes Primitive Types (Int/String) by Value\n// JS/TS automatically Passes Objects/Arrays by Reference (Memory Address)\n\nlet num = 5;\nconst passByValue = (n: number) => { n = 99; };\npassByValue(num);\nconsole.log(num); // 5\n\nconst obj = { value: 5 };\nconst passByReference = (o: {value: number}) => { o.value = 99; };\n// We pass the pointer to the heap object\npassByReference(obj);\nconsole.log(obj.value); // 99",
            },
          ],
        },
      ],
      gitSimulation: {
        branchName: "sec/mitigate-buffer-overflow",
        commitMessage:
          "sec: Replace unsafe strcpy with strncpy to prevent stack smashing",
        files: [
          {
            name: "string_utils",
            type: "folder",
            children: [
              { name: "parser.c", type: "file", content: "strncpy logic" },
            ],
          },
        ],
        activeFileSnippet: {
          filename: "parser.c",
          code: "strncpy(dest, src, sizeof(dest) - 1);",
        },
      },
      community: {
        aiSummary:
          "Pointers are the foundational DNA of software engineering. Without understanding memory addresses, the magic behind every database and network socket is completely invisible to you.",
        solutions: [
          {
            authorInitials: "CP",
            authorName: "Chris P.",
            badge: "Kernel Dev",
            role: "Sr Systems Engineer",
            level: "Expert",
            timeAgo: "6 months ago",
            upvotes: 912,
            comments: 65,
            content:
              "Start with C. If you start your career in Python, you will fundamentally misunderstand why some things are fast and some things are slow. Build a linked list from scratch in C, segfault 10 times, and you will become a true engineer.",
          },
        ],
      },
    },
    // ==========================================
    // MODULE 3 TOPICS
    // ==========================================
    {
      id: "CORE-CS-101-M3-T1",
      moduleId: "CORE-CS-101-M3",
      sequenceNumber: 1,
      title: "Operating Systems, Processes & Threads",
      estimatedMinutes: 240,
      what: "An Operating System (Linux, Windows) is a hardware manager. The OS wraps running programs into 'Processes'. Each Process has its own independent virtual memory space. A Process can spawn multiple 'Threads', which share the exact same memory space.",
      why: "If you run 5 Node.js apps on a server, they run as 5 isolated Processes. If App A crashes, App B is totally unaffected because their memory cannot intersect. However, if App A spawns 10 Threads, and Thread 1 has a memory bug, it crashes the entire App A Process because threads share memory.",
      when: "Whenever designing backend architectures, deciding between deploying multiple microservices (Processes) vs writing multithreaded logic (Threads) to scale throughput.",
      how: "When a CPU has 4 cores but is running 500 threads, the OS 'Scheduler' performs a 'Context Switch'. It halts Thread 1, saves its exact processor state to RAM, loads Thread 2's state from RAM into the CPU, and lets it run for 10 milliseconds. This happens thousands of times a second, creating the illusion of 500 things running perfectly in parallel.",
      ecosystem:
        "Process Control Block (PCB), Context Switches, Preemptive Scheduling, Page Tables, `fork()`.",
      realWorld:
        "Nginx famously operates using an 'Event-Driven, Asynchronous, Single-Threaded' architecture (one process per CPU core). Apache historically used a 'One Thread Per Connection' model. When 10,000 users connected, Apache spawned 10,000 threads, exhausting RAM and crashing. Nginx handled 10,000 users on a single thread by never blocking.",
      useCases: [
        "Architecting high-concurrency web servers",
        "Understanding 'Out of Memory' killer triggers",
        "Writing CPU-bound parallel processing jobs",
      ],
      advantages: [
        "Processes provide complete isolation and security",
        "Threads provide extremely fast communication because they share memory natively",
      ],
      disadvantages: [
        "Context Switching between 10,000 threads wastes 90% of the CPU's cycles on overhead rather than actual work",
        "Processes are heavy to start and stop compared to Threads",
      ],

      interviewTip:
        "Interviewers will ask: 'What is the difference between a Process and a Thread?'. Say: 'A Process is an execution environment with its own isolated virtual memory space. A Thread is the unit of execution within that process. Multiple threads within the same process share the same memory heap.'",
      resumeBullet:
        "Diagnosed critical API latency dropouts by profiling Linux kernel Context Switch rates, migrating from a Thread-per-Connection model to an asynchronous event loop, increasing throughput by 400%.",

      videos: [
        {
          type: "public",
          title: "Processes vs Threads - Operating System Concepts",
          author: "Neso Academy",
          views: "1.2M views",
          duration: "12:15",
          url: "https://www.youtube.com/watch?v=4r3w4f_7R3Y",
        },
        {
          type: "public",
          title: "What is a Context Switch?",
          author: "Computerphile",
          views: "450K views",
          duration: "8:30",
          url: "https://www.youtube.com/watch?v=1xo_Z_yTzQQ",
        },
      ],
      moocs: [
        {
          platform: "Coursera",
          rating: 4.8,
          title: "Operating Systems and You",
          instructor: "Google Career Certificates",
          enrolled: "300K+",
          duration: "32 hours",
          url: "https://www.coursera.org/learn/os-power-user",
        },
      ],
      blogs: [
        {
          type: "Documentation",
          title: "Anatomy of a Program in Memory",
          publisher: "Gustavo Duarte",
          readTime: "25 min",
          url: "https://manybutfinite.com/post/anatomy-of-a-program-in-memory/",
        },
      ],
      scenarios: [
        {
          id: "3",
          difficulty: "Expert",
          title: "The Context Switching Death Spiral",
          category: "Systems",
          estimatedTime: "5 hours",
          scenarioDescription:
            "During Black Friday, a Java Spring Boot monolith is hit with 20,000 requests per second. The CPU is at 100%, but no database queries are being executed and all users are seeing 504 Gateway Timeouts.",
          problemAnalysis:
            "The server is configured to spawn a new OS Thread for every incoming HTTP request. 20,000 active threads caused 'Thread Trashing'. The OS Scheduler is spending 99% of its CPU cycles just swapping threads in and out of the CPU cores (Context Switching), leaving 0% CPU for actual application logic.",
          architectureLayers: [
            "Linux Kernel Scheduler",
            "JVM Threads",
            "Tomcat Connection Pool",
          ],
          toolsAndTech: [
            {
              name: "vmstat / pidstat",
              justification:
                "Running `vmstat 1` reveals the `cs` (Context Switch) column is over 500,000 per second. The server is hyperventilating.",
            },
          ],
          tradeOffs: [
            "Thread Pools vs Event Loops. We cap the Tomcat thread pool at 200. This means request 201 must wait in a queue, but it guarantees the first 200 requests actually finish instead of crashing the server.",
          ],
          nfrConsiderations: [
            "Throughput: Throughput drops to 0 if the overhead exceeds the payload generation.",
          ],
          kpis: [
            "Cap OS Context Switches to < 10,000 per second",
            "Recover server from 0 TPS to 5,000 TPS under extreme load",
          ],
          keyInsights:
            "Adding more threads does not make a computer run faster. It just makes the computer divide its limited time into smaller, less efficient slices.",
        },
      ],
      playgrounds: [
        {
          title: "Processes (Forking) vs Threads",
          description:
            "How memory isolation works. Notice how the Child Process gets a COPY of the variable, while the Thread shares the EXACT variable.",
          examples: [
            {
              language: "python",
              code: 'import os\nfrom multiprocessing import Process\nimport threading\nimport time\n\n# ============================\n# 1. PROCESS FORKING (Isolation)\n# ============================\nvalue_process = 5\n\ndef run_process():\n    global value_process\n    value_process += 10\n    print(f"Process Child: Value is {value_process}") # Prints 15\n\np = Process(target=run_process)\np.start()\np.join()\nprint(f"Process Master: Value remains {value_process}\\n") # Prints 5. The memory is totally isolated.\n\n\n# ============================\n# 2. THREADING (Shared State)\n# ============================\nvalue_thread = 5\n\ndef run_thread():\n    global value_thread\n    value_thread += 10\n    print(f"Thread Child: Value is {value_thread}") # Prints 15\n\nt = threading.Thread(target=run_thread)\nt.start()\nt.join()\nprint(f"Thread Master: Value is mutated to {value_thread}") # Prints 15! The memory is shared.',
            },
            {
              language: "c",
              code: '#include <stdio.h>\n#include <unistd.h>\n#include <sys/wait.h>\n#include <pthread.h>\n\nint shared_var = 5;\n\nvoid* thread_func(void* arg) {\n    shared_var += 10;\n    printf("Thread: Mutated to %d\\n", shared_var);\n    return NULL;\n}\n\nint main() {\n    printf("----- FORKING (PROCESSES) -----\\n");\n    int process_var = 5;\n    pid_t pid = fork();\n    \n    if (pid == 0) {\n        // Child Process (Gets a complete copy of RAM)\n        process_var += 10;\n        printf("Child Process: Memory Copy = %d\\n", process_var);\n        return 0;\n    } else {\n        wait(NULL); // Wait for child\n        printf("Parent Process: Original Memory = %d\\n\\n", process_var); // Still 5\n    }\n    \n    printf("----- PTHREADS (THREADS) -----\\n");\n    pthread_t thread_id;\n    pthread_create(&thread_id, NULL, thread_func, NULL);\n    pthread_join(thread_id, NULL);\n    \n    printf("Main Thread: Mutated to %d\\n", shared_var); // Now 15\n    return 0;\n}',
            },
          ],
        },
      ],
      gitSimulation: {
        branchName: "perf/thread-pool",
        commitMessage:
          "perf: Implement thread pooling to prevent connection bombardment",
        files: [],
        activeFileSnippet: {
          filename: "server.py",
          code: "executor = ThreadPoolExecutor(max_workers=50)",
        },
      },
      community: {
        aiSummary:
          "The OS is a hyper-complex traffic cop. If you ignore how it routes traffic (threads vs processes), you will inevitably build APIs that crash under pressure.",
        solutions: [],
      },
    },
    // ==========================================
    // MODULE 4 TOPICS
    // ==========================================
    {
      id: "CORE-CS-101-M4-T1",
      moduleId: "CORE-CS-101-M4",
      sequenceNumber: 1,
      title: "Virtualization & Namespaces: How Docker Works",
      estimatedMinutes: 240,
      what: "A Virtual Machine (VM) runs an incredibly heavy 'Hypervisor' that emulates an entire motherboad, booting a full 10GB Operating System on top of your host OS. A Container (Docker) does none of that. It uses Linux 'cgroups' and 'namespaces' to simply trick a standard Process into thinking it is the only process on the computer.",
      why: "Booting a VM takes 45 seconds and wastes 2GB of RAM just running the secondary OS background tasks. Booting a Docker Container takes 100 milliseconds and utilizes 0 extra RAM, because it is literally just a standard Linux Process with invisible walls drawn around it.",
      when: "Always. Modern cloud infrastructure relies entirely on containerization. You package your code and all its exact dependencies (Python 3.10, exact apt-get libs) into an Immutable Image, ensuring 'It runs on my machine' means 'It runs in production'.",
      how: "Linux Namespaces provide isolation (e.g., Mount namespace gives the container its own fake root `/` filesystem; PID namespace makes the container's app think it is PID 1). Control Groups (cgroups) provide restriction (e.g., the OS forces this specific process to never exceed 512MB of RAM). Docker is just a UI wrapper over these two native Linux Kernel features.",
      ecosystem:
        "Docker, chroot, Control Groups (cgroups), Linux Namespaces, Hypervisors (KVM/ESXi).",
      realWorld:
        "When you spin up an AWS EC2 instance, you are renting a hardware-level Virtual Machine inside an AWS Hypervisor. When you run Docker inside that EC2 instance, you are running software-isolated container processes.",
      useCases: [
        "Microservice deployment",
        "Reproducible CI/CD pipelines",
        "Achieving exact dev/prod parity",
      ],
      advantages: [
        "Deploying 100 containers on a server shares the same kernel, maximizing hardware density",
        "Rapid horizontal scaling during traffic spikes",
      ],
      disadvantages: [
        "Security: Because containers share the host Kernel, a kernel exploit in Container A gives the hacker access to Container B. VMs do not share kernels and are thus 'Hardware Secure'.",
      ],

      interviewTip:
        "When asked 'What is the difference between Docker and a VM?', be precise: 'A VM virtualizes the hardware, requiring a full guest OS. A Container virtualizes the Operating System, sharing the host Linux Kernel, making it orders of magnitude lighter.'",
      resumeBullet:
        "Dockerized 15 legacy monolithic services, reducing CI/CD pipeline deployment times by 80% and mitigating all environmentally driven 'works on my machine' outages.",

      videos: [
        {
          type: "public",
          title: "Containers vs VMs",
          author: "IBM Technology",
          views: "1.5M views",
          duration: "8:45",
          url: "https://www.youtube.com/watch?v=cjXI-yxqGTI",
        },
        {
          type: "public",
          title: "Build a Container from Scratch in Go",
          author: "Liz Rice",
          views: "450K views",
          duration: "45:20",
          url: "https://www.youtube.com/watch?v=Utf-A4rODH8",
        },
      ],
      moocs: [],
      blogs: [
        {
          type: "Architecture",
          title: "Cgroups, namespaces, and beyond",
          publisher: "Google Cloud",
          readTime: "15 min",
          url: "https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-node-management-cgroups-namespaces",
        },
      ],
      scenarios: [
        {
          id: "4",
          difficulty: "Medium",
          title: "The Shared Kernel Exploit",
          category: "Security Architecture",
          estimatedTime: "3 hours",
          scenarioDescription:
            "A hacker finds a vulnerability in your Node.js app running inside a Docker container. They execute a 'Dirty COW' exploit (a famous Linux kernel bug) to overwrite read-only files.",
          problemAnalysis:
            "Because Docker containers share the Host OS Linux Kernel, if the hacker exploits the Kernel from within the container, they gain 'root' access over the Host OS, and thus, over every other container running on that EC2 instance.",
          architectureLayers: [
            "Docker Namespace Isolation",
            "Host Linux Kernel",
            "EC2 Hypervisor",
          ],
          toolsAndTech: [
            {
              name: "gVisor / Firecracker",
              justification:
                "To prevent kernel sharing, cloud providers (like AWS Fargate) wrap containers in ultra-lightweight microVMs. This provides VM-level hardware security with Container-level boot times.",
            },
          ],
          tradeOffs: [
            "Speed vs Security. Running bare Docker is fast but shares the kernel. Running Firecracker microVMs adds slight overhead but isolates the kernel mathematically.",
          ],
          nfrConsiderations: [
            "Security: Multi-tenant SaaS architectures MUST assume containers will be breached.",
          ],
          kpis: ["0 shared-kernel vulnerabilities escaping isolation"],
          keyInsights:
            "Containers are not a security boundary. They are an operational boundary. Never run untrusted massive third-party workloads in a shared-kernel container without a microVM.",
        },
      ],
      playgrounds: [
        {
          title: "Simulating a Namespace (chroot jail)",
          description:
            "Docker is just a fancy wrapper around old Linux tools. Watch how we trick a process into thinking it is isolated.",
          examples: [
            {
              language: "bash",
              code: "# 1. Create a fake root folder\nmkdir -p /tmp/my_fake_os/bin\nmkdir -p /tmp/my_fake_os/lib\n\n# 2. Copy the 'bash' binary and its dependencies into the fake OS\ncp /bin/bash /tmp/my_fake_os/bin/\n# (In reality, you'd also curl/cp all the .so shared libraries bash needs)\n\n# 3. Enter the Chroot Jail!\nsudo chroot /tmp/my_fake_os /bin/bash\n\n# You are now running bash INSIDE the fake OS.\n# If you type 'ls /', you will ONLY see the /bin and /lib folders you created.\n# You literally cannot access the host machine's /etc/passwd or /home files.\n# This is the foundational concept behind how a Docker Container works.",
            },
          ],
        },
      ],
      gitSimulation: {
        branchName: "ops/containerization",
        commitMessage:
          "ops: Write Dockerfile mapping port 8080 to isolate runtime dependencies",
        files: [],
        activeFileSnippet: {
          filename: "Dockerfile",
          code: "FROM node:18-alpine\nCOPY . /app",
        },
      },
      community: {
        aiSummary:
          "Docker is arguably the most important paradigm shift in backend engineering in the last 15 years. Once you understand namespaces, you understand modern cloud infrastructure.",
        solutions: [],
      },
    },
  ],
  videoCount: 85,
  articleCount: 40,
  problemCount: 22,
  capstoneProject: {
    title: "Building an Operating System Execution Wrapper (Mini-Docker)",
    description:
      "To prove you understand how processes, memory, and kernels interact, you will write a custom execution wrapper in C or Python that replicates Docker. Your tool will execute an arbitrary program, isolate its CPU layout via Linux mechanisms, track its memory utilization via explicit pointers, and kill it safely using IPC signals.",
    estimatedDays: 20,
    skillsFocused: [
      "Kernel Syscalls",
      "Linux Namespaces",
      "Cgroup Profiling",
      "Memory Pointers",
      "Multiprocessing",
      "Signal Handling",
    ],
    steps: [
      {
        sequenceNumber: 1,
        title: "Process Instantiation via Fork",
        objective:
          "Write a high-performance C or Python script that utilizes the `fork()` syscall to spawn a child process.",
        skills: ["OS Syscalls", "POSIX APIS"],
        status: "Not Started",
      },
      {
        sequenceNumber: 2,
        title: "Isolating the Environment",
        objective:
          "Utilize `chroot` or `unshare` commands programmatically to trap the child process in a fake root directory, ensuring it cannot access the host machine's sensitive files.",
        skills: ["Linux Namespaces", "Isolation Boundaries"],
        status: "Not Started",
      },
      {
        sequenceNumber: 3,
        title: "Resource Constriction (Cgroups)",
        objective:
          "Configure Linux Control Groups programmatically to throttle the child process, mathematically preventing it from using more than 100MB of RAM or 50% of the CPU core.",
        skills: ["Cgroups", "Hardware Throttling"],
        status: "Not Started",
      },
      {
        sequenceNumber: 4,
        title: "Pointer Bomb Simulation",
        objective:
          "Write a malicious 'C' payload that attempts a massive Heap reallocation (Memory Leak). Run it inside your wrapper and prove the cgroup successfully OOM-kills the payload without crashing the Host machine.",
        skills: ["Memory Leaks", "OOM Killer"],
        status: "Not Started",
      },
      {
        sequenceNumber: 5,
        title: "Inter-Process Communication",
        objective:
          "Implement asynchronous IPC Pipes or Shared Memory regions between the Master wrapper and the Child process to stream STDOUT logs back safely.",
        skills: ["IPC", "Piping"],
        status: "Not Started",
      },
      {
        sequenceNumber: 6,
        title: "Graceful Signal Handling",
        objective:
          "Implement `SIGTERM` and `SIGKILL` handlers. The Master wrapper must be able to gracefully issue a shutdown broadcast to the child process and forcefully terminate it if it hangs.",
        skills: ["POSIX Signals", "Daemon Management"],
        status: "Not Started",
      },
    ],
  },
  totalEstimatedHours: 55,
  moduleCount: 4,
  estimatedCompletionDays: 60,
  createdAt: "2026-02-28T00:00:00Z",
  updatedAt: "2026-02-28T00:00:00Z",
  version: "4.0",
  status: "published",
};
