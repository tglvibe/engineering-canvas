import { CourseEnhanced } from './types';

export const hceGame101: CourseEnhanced = {
    id: "HCE GAME 101",
    titleKey: "courses.hceGame101",
    descKey: "courses.hceGame101Desc",
    icon: "🎮",
    duration: "6 weeks",
    languages: ["C#", "HLSL", "C++", "Python (Tooling)"],
    category: "high-code",
    programIds: ["HCE GAME", "HCE FULL"],
    trackId: "hce",
    level: "beginner",
    prerequisites: ["CORE CS 101", "CORE PROG JAVA"],
    targetAudience: "Aspiring game developers and systems engineers aiming to master the internal architecture of modern game engines, real-time physics, and high-performance gameplay systems.",
    learningOutcomes: [
        "Architect decoupled gameplay systems using Entity-Component patterns and ScriptableObjects",
        "Master Vector Math and Trigonometry for deterministic real-time movement and orientation",
        "Implement high-performance collision detection and hitscan systems using Raycasting and LayerMasks",
        "Design sophisticated Animation State Machines with Blend Trees and Procedural IK",
        "Optimize CPU/GPU performance using Object Pooling and Batching techniques"
    ],
    modules: [
        {
            id: "HCE-GAME-101-M1",
            title: "Core Infrastructure: The Game Loop & Lifecycle",
            description: "How games breathe at 60+ updates per second.",
            sequenceNumber: 1,
            estimatedHours: 10,
            topics: ["HCE-GAME-101-M1-T1", "HCE-GAME-101-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Eliminate hardware-dependent movement bugs using Time.deltaTime normalization",
                "Master the Unity/Unreal execution order (Awake, Start, FixedUpdate, LateUpdate)",
                "Implement a custom frame-rate-independent Timer system"
            ]
        },
        {
            id: "HCE-GAME-101-M2",
            title: "The Physics Engine: Forces & Collisions",
            description: "Simulating reality with mathematical constraints.",
            sequenceNumber: 2,
            estimatedHours: 12,
            topics: ["HCE-GAME-101-M2-T1", "HCE-GAME-101-M2-T2"],
            prerequisiteModuleIds: ["HCE-GAME-101-M1"],
            outcomes: [
                "Apply Impulse and Torque to Rigidbodies for character and vehicle movement",
                "Design Trigger-based spatial events and high-performance Layered Collisions",
                "Master Raycasting, Spheremasking, and Hitscan weapon logic"
            ]
        },
        {
            id: "HCE-GAME-101-M3",
            title: "Mathematics for Games: Vectors & Quaternions",
            description: "The geometry of digital space.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["HCE-GAME-101-M3-T1", "HCE-GAME-101-M3-T2"],
            prerequisiteModuleIds: ["HCE-GAME-101-M2"],
            outcomes: [
                "Calculate Dot and Cross products for AI vision cones and surface normals",
                "Master Slerp and Lerp for smooth camera and character transitions",
                "Understand Quaternion basics to avoid Euler Lock during 3D rotation"
            ]
        },
        {
            id: "HCE-GAME-101-M4",
            title: "Data-Driven Design: ScriptableObjects & ECS",
            description: "Decoupling logic from data for massive scale.",
            sequenceNumber: 4,
            estimatedHours: 15,
            topics: ["HCE-GAME-101-M4-T1", "HCE-GAME-101-M4-T2"],
            prerequisiteModuleIds: ["HCE-GAME-101-M3"],
            outcomes: [
                "Implement the Flyweight pattern using ScriptableObjects to save 90% memory",
                "Architect pluggable AI behaviors and weapon systems without hardcoded logic",
                "Design persistent Game State systems using the Singleton and Event Store patterns"
            ]
        },
        {
            id: "HCE-GAME-101-M5",
            title: "Optimization & Polish: Audio, UI & Pooling",
            description: "From a working prototype to a premium experience.",
            sequenceNumber: 5,
            estimatedHours: 10,
            topics: ["HCE-GAME-101-M5-T1", "HCE-GAME-101-M5-T2"],
            prerequisiteModuleIds: ["HCE-GAME-101-M4"],
            outcomes: [
                "Implement Object Pooling to eliminate Garbage Collection 'Spikes' during combat",
                "Design responsive World-Space and Screen-Space UI layouts",
                "Engineer spatial 3D audio systems with Occlusion and Doppler effects"
            ]
        }
    ],
    topics: [
        {
            id: "HCE-GAME-101-M1-T1",
            moduleId: "HCE-GAME-101-M1",
            sequenceNumber: 1,
            title: "The Game Loop & Hardware-Agnostic Timing",
            estimatedMinutes: 240,
            what: "The Game Loop is the core architectural pattern of every interactive digital experience. It consists of three primary phases: Input, Update (Logic), and Draw (Render). `Time.deltaTime` is the variable representing the fractional time (in seconds) it took for the CPU to complete the previous loop cycle.",
            why: "If logic is speed-tied to the frame-rate, a player with a high-end 240Hz monitor will run 4x faster than someone on a 60Hz laptop. This 'Framerate Dependency' is a critical bug. By multiplying movement by `Time.deltaTime`, we normalize all physics to 'Units per Second' instead of 'Units per Frame', ensuring identical gameplay across all hardware.",
            when: "Every time you move an object, rotate a camera, or decrement a countdown timer in an `Update` function.",
            how: "Instead of `position += velocity`, write `position += velocity * Time.deltaTime`. Use `FixedUpdate` for physics-engine calculations (like applying force to a ball) to ensure the physics simulation remains stable even if the frame-rate drops.",
            ecosystem: "Unity (MonoBehaviour), Unreal (ACharacter), Godot (Node), custom C++/Vulkan engines.",
            realWorld: "The launch version of Fallout 76 famously tied its physics engine to the framerate. Players found that by looking at the ground (which boosted their FPS to 200+), they could literally 'Speed Hack' the game, running faster than the system could track. This caused a massive multiplayer imbalance that required a total engine refactor.",
            useCases: [
                "Normalizing character movement speed across PC and Console",
                "Implementing a 'Slow Motion' or 'Time Dilation' effect by scaling the DeltaTime",
                "Designing deterministic countdown timers for spell cooldowns or matches"
            ],
            advantages: [
                "Fairness: Every player moves at the same speed regardless of their hardware",
                "Stability: Prevents the physics engine from 'Exploding' during lag spikes",
                "Determinism: Essential for networked multiplayer games (Netcode)"
            ],
            disadvantages: [
                "Tunneling: If the frame-rate drops too low, a fast-moving bullet might skip entirely over a thin wall between two frames"
            ],

            interviewTip: "If asked 'Why use FixedUpdate for physics?', explain that `Update` is tied to the GPU's rendering speed (variable), while `FixedUpdate` is tied to a fixed mathematical clock (e.g. 50 times/sec). Physics engines need consistent steps to calculate momentum accurately and avoid jitter.",
            resumeBullet: "Engineered hardware-agnostic core gameplay systems by implementing robust `Time.deltaTime` normalization, ensuring 100% deterministic movement across mobile and desktop platforms.",

            videos: [
                { type: "public", title: "The Game Loop Pattern", author: "Game Programming Patterns", views: "300K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Unity Execution Order Deep Dive", author: "Tarodev", views: "150K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Unity Learn", rating: 4.9, title: "Create with Code", instructor: "Unity Team", enrolled: "500K+", duration: "40 hours", url: "https://learn.unity.com/course/create-with-code" }
            ],
            blogs: [
                { type: "Core", title: "Fix Your Timestep!", publisher: "Gaffer on Games", readTime: "40 min", url: "https://gafferongames.com/post/fix_your_timestep/" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Lag of Doom", category: "Optimization", estimatedTime: "3 hours",
                    scenarioDescription: "During a massive boss fight, the game's framerate drops to 15 FPS. The boss's 'Dash' ability, which normally moves 10 meters, suddenly teleports the boss 50 meters into a wall, getting them stuck forever. Why?",
                    problemAnalysis: "This is 'Large DeltaTime Over-correction'. When FPS drops, `Time.deltaTime` becomes a large value. If a dash uses a simple Euler-integration for position, the boss 'Skips' past the collision boundary of the wall in a single frame. The dash logic finished its math *inside* the wall.",
                    architectureLayers: ["Input/Update Loop", "Collision Detection Layer", "Level Boundary Geometry"],
                    toolsAndTech: [{ name: "Continuous Collision Detection (CCD)", justification: "Instead of just moving the boss to a new point, we must use a 'Swept' collision or a 'Raycast' along the dash path. This pre-calculates if the boss would hit a wall *between* the start and end point, stopping them exactly at the impact point regardless of how low the FPS drops." }],
                    tradeOffs: ["CCD is more expensive for the CPU; use it only for fast-moving characters."],
                    nfrConsiderations: ["Reliability: Characters must never clip through level boundaries under any load condition."],
                    kpis: ["Achieve 0% clipping rate in a 10 FPS simulated stress test."],
                    keyInsights: "High code games aren't just about moving things; they are about calculating the space between the things."
                }
            ],
            playgrounds: [
                {
                    title: "The Framerate Simulator",
                    description: "Seeing the difference between bad and good movement.",
                    examples: [
                        {
                            language: "csharp",
                            code: "// --- BAD (Speed depends on FPS) ---\nvoid Update() {\n    transform.position += Vector3.right * 0.1f;\n}\n\n// --- GOOD (Uniform performance) ---\nvoid Update() {\n    transform.position += Vector3.right * 10f * Time.deltaTime;\n}"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "feature/engine-norm",
                commitMessage: "feat: implemented hardware-agnostic movement normalization using Time.deltaTime across all character controllers",
                files: [{ name: "PlayerController.cs", type: "file", content: "controller logic" }],
                activeFileSnippet: { filename: "PlayerController.cs", code: "moveDirection = inputVector.normalized * moveSpeed * Time.deltaTime;" }
            },
            community: {
                aiSummary: "The computer is a liar. It tells you frames are happening at the same time, but they never are. `Time.deltaTime` is the truth-teller that keeps your game world sane.",
                solutions: []
            }
        },
        {
            id: "HCE-GAME-101-M3-T1",
            moduleId: "HCE-GAME-101-M3",
            sequenceNumber: 1,
            title: "Vector Math & AI Vision Cones",
            estimatedMinutes: 240,
            what: "Vectors are the fundamental language of 3D games, representing both Position and Direction. The 'Dot Product' of two vectors is a scalar value that tells us how much they are 'Pointing' in the same direction. The 'Cross Product' returns a new vector perpendicular to two others, essential for finding surface normals.",
            why: "If an AI needs to know 'Can I see the player?', you don't use a complicated image-recognition script. You use the Dot Product between the AI's 'Forward' vector and the vector pointing towards the player. If the value is > 0.8, the player is inside the AI's 60-degree vision cone.",
            when: "Every time you need to calculate distance, AI behavior, lighting reflections, or player-to-ground angles.",
            how: "Use `Vector3.Dot(a, b)` and `Vector3.Cross(a, b)`. Normalize vectors (length=1) beforehand to ensure the math only represents direction, not scale. Use `Vector3.Distance(a, b)` for proximity checks.",
            ecosystem: "GLM (C++ library), Unity.Mathematics, HLSL (for Shaders).",
            realWorld: "In Stealth games like 'Metal Gear Solid', the AI's logic is a series of Dot Product checks. If you are behind the guard (Dot Product < 0), they can't see you. If you are in front (Dot Product > 0.5), their 'Detection Alert' starts filling up. This is high-performance geometry in action.",
            useCases: [
                "Determining if a player is 'Behind' an enemy for a backstab bonus",
                "Calculating the bounce angle of a grenade off a slanted wall",
                "Aligning a character's feet to the slope of a mountain using surface normals"
            ],
            advantages: [
                "Incredible Speed: Dots and Crosses are just a few additions and multiplications (SIMD friendly)",
                "Precision: Mathematically perfect AI detection that never 'Glitches' or gets confused",
                "Scalability: One AI can check its vision against 1,000 objects every frame with zero lag"
            ],
            disadvantages: [
                "Abstraction: Hard to visualize for beginners; requires a strong grasp of linear algebra"
            ],

            interviewTip: "If asked 'How do you check if object B is within 45 degrees of object A's forward face?', say: 'I normalize both vectors, take their Dot Product, and check if it's greater than the Cosine of 45 degrees'. This shows you're not just a coder, but a mathematician.",
            resumeBullet: "Engineered performant AI detection systems utilizing Vector Dot Product vision cones, supporting up to 500 concurrent autonomous agents at 60 FPS.",

            videos: [
                { type: "public", title: "Dot Product for Game Devs", author: "Freya Holmer", views: "1M views", duration: "25:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Trigonometry in Games", author: "The Art of Code", views: "300K views", duration: "15:20", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Khan Academy", rating: 4.8, title: "Linear Algebra: Vectors & Spaces", instructor: "Sal Khan", enrolled: "1M+", duration: "20 hours", url: "https://www.khanacademy.org/math/linear-algebra" }
            ],
            blogs: [
                { type: "Technical", title: "A Math Primer for Games", publisher: "Gamasutra", readTime: "50 min", url: "https://www.gamedeveloper.com/design/a-math-primer-for-game-programmers" }
            ],
            scenarios: [
                {
                    id: "3.1", difficulty: "Hard", title: "The Backstab Bug", category: "Gameplay Logic", estimatedTime: "4 hours",
                    scenarioDescription: "In an RPG, the 'Backstab' bonus is given if the player is behind the NPC. However, if the player jumps on the NPC's head, the backstab triggers. This is because the math only checked the Z-axis, ignoring the height.",
                    problemAnalysis: "A simple `if (player.z < npc.z)` is fragile. We need a 3D Dot Product. We must subtract the Height (Y-axis) from the calculation or 'PROJECT' the vectors onto a 2D ground plane before doing the Dot Product.",
                    architectureLayers: ["AI System", "Combat Logic Engine", "Matrix Math Utility"],
                    toolsAndTech: [{ name: "Vector3.ProjectOnPlane", justification: "By projecting both the player's position and the NPC's forward vector onto the 'XZ Plane' (The floor), we ignore the height difference. The Dot Product of these flattened vectors will now accurately tell us 'Was the player horizontally behind the NPC?', regardless of if they are on a roof or jumping." }],
                    tradeOffs: ["Flat projection math is slightly slower than a 1D check, but 100% accurate."],
                    nfrConsiderations: ["Consistency: Combat mechanics must behave predictably across different verticalities."],
                    kpis: ["Reduce 'False Positive' backstab triggers to exactly zero."],
                    keyInsights: "3D space is actually three 2D spaces. Know which one your game logic lives in."
                }
            ],
            playgrounds: [
                {
                    title: "The Vision Cone Simulator",
                    description: "Visualizing the Dot Product.",
                    examples: [
                        {
                            language: "csharp",
                            code: "Vector3 npcForward = transform.forward;\nVector3 toPlayer = (player.position - transform.position).normalized;\n\nfloat visionMatch = Vector3.Dot(npcForward, toPlayer);\n\nif (visionMatch > 0.707f) { // ~45 degrees\n    Debug.Log(\"I see you!\");\n}"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "ai/vision-logic",
                commitMessage: "ai: refactored detection engine to use 3D dot-product vision cones with tiered alertness thresholds",
                files: [{ name: "AI/Vision.cs", type: "file", content: "ai math" }],
                activeFileSnippet: { filename: "Vision.cs", code: "dot = Vector3.Dot(fwd, playerDir);\nif(dot > LOS_THRESHOLD) { StartChase(); }" }
            },
            community: {
                aiSummary: "Games are just math that looks pretty. If you can move a dot accurately on a screen, you can build a universe.",
                solutions: []
            }
        },
        {
            id: "HCE-GAME-101-M4-T1",
            moduleId: "HCE-GAME-101-M4",
            sequenceNumber: 1,
            title: "The Flyweight Pattern: ScriptableObjects",
            estimatedMinutes: 240,
            what: "The Flyweight Pattern is a design paradigm for sharing state to minimize memory usage. In Unity, this is implemented as 'ScriptableObjects'—data containers that live as standalone assets in your project, rather than being attached to a specific character or object in a scene.",
            why: "Imagine an RTS game with 1,000 'Soldier' units. If each soldier holds a 'Stats' variable (Health=100, Speed=5, Damage=10), the game stores 3,000 variables in RAM. If you use a ScriptableObject, all 1,000 soldiers just hold a single 'Pointer' to one shared Stats asset. This saves massive amounts of memory and prevents 'Data Duplication' bugs.",
            when: "Managing large databases of weapons, inventory items, enemy types, or game configuration settings that multiple objects need to share.",
            how: "Define a class inheriting from `ScriptableObject`. Add the `[CreateAssetMenu]` attribute. Right-click in the Editor to create the asset (e.g., `HeavyTank.asset`). In your Tank script, add a field: `public TankData stats;`. Now, drag the asset into that slot.",
            ecosystem: "Unity (ScriptableObject), Unreal (DataAssets), Godot (Resources).",
            realWorld: "In 'Hearthstone', every one of the thousands of cards is a ScriptableObject. The 'Card Prefab' (Visuals) is identical for every card; it just 'Plugs In' a different ScriptableObject to decide its name, image, mana cost, and power. This allows Blizzard to update the game's balance by just changing data files, without touching a single line of code.",
            useCases: [
                "Creating a scalable 'Item Database' for an RPG with 5,000 items",
                "Architecture for power-ups: Define each power-up's effect as a hot-swappable data asset",
                "Global Game Settings: Storing volume levels, difficulty, and keybindings in a central asset"
            ],
            advantages: [
                "Memory Efficiency: 1000 objects share 1 set of data",
                "Workflow: Game designers can tweak 'Damage' and 'Speed' values in the Editor without needing the coder",
                "Persistence: Changes to ScriptableObjects in the Editor remain saved even after you stop the game"
            ],
            disadvantages: [
                "Runtime Danger: Because they persist, if a player's logic accidentally 'Changes' a ScriptableObject during a match, that change is permanent until you reset the project"
            ],

            interviewTip: "If asked how to build an Inventory system, don't say 'I'd make a list of classes'. Say 'I'd use a Flyweight pattern with ScriptableObjects to decouple the Item Data from the UI slots'. This shows you understand memory and architectural scalability.",
            resumeBullet: "Redesigned the game's item and enemy databases using a data-driven ScriptableObject architecture, reducing memory heap pressure by 40% and accelerating designer iteration.",

            videos: [
                { type: "public", title: "Unity ScriptableObjects Explained", author: "Brackeys", views: "2M views", duration: "10:15", url: "https://www.youtube.com/watch?v=raQ3iHhE_Kk" },
                { type: "public", title: "Advanced Data-Driven Design", author: "Unity GDC", views: "100K views", duration: "45:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Udemy", rating: 4.8, title: "Modern Game Architecture with Unity", instructor: "GameDev.tv", enrolled: "100K+", duration: "25 hours", url: "https://www.udemy.com/course/unity-architecture/" }
            ],
            blogs: [
                { type: "Core", title: "Game Programming Patterns: Flyweight", publisher: "Robert Nystrom", readTime: "30 min", url: "https://gameprogrammingpatterns.com/flyweight.html" }
            ],
            scenarios: [
                {
                    id: "4.1", difficulty: "Medium", title: "The Memory Leak", category: "Performance Engineering", estimatedTime: "5 hours",
                    scenarioDescription: "A game has 50 different weapon types. Each time a player equips a weapon, a new 'WeaponStats' object is instantiated. After 2 hours of playing and switching weapons, the game crashes with an 'Out of Memory' error.",
                    problemAnalysis: "The code is using `new WeaponStats()` every switch. These objects are accumulating in the heap and aren't being garbage collected efficiently because of lingering references. This is a classic violation of the Flyweight pattern.",
                    architectureLayers: ["Asset Management Layer", "Garbage Collection (GC) Manager", "Inventory Logic"],
                    toolsAndTech: [{ name: "ScriptableObject Migration", justification: "By converting `WeaponStats` to a ScriptableObject, we instantiate the 50 assets exactly ONCE at game startup. When the player switches weapons, we just point their 'ActiveWeapon' variable to the already-loaded asset. Zero new memory is allocated during gameplay, and the crash is permanently solved." }],
                    tradeOffs: ["Setting up 50 assets takes 10 minutes longer than writing one class, but prevents 100% of these crashes."],
                    nfrConsiderations: ["Stability: Zero memory growth during localized gameplay cycles."],
                    kpis: ["Achieve a 'Flat' memory profile (Zero new allocations) during weapon-switch stress tests."],
                    keyInsights: "Data that doesn't change during a frame should never be created during a frame."
                }
            ],
            playgrounds: [
                {
                    title: "The Data Asset Builder",
                    description: "Defining a 'Weapon' asset in C#.",
                    examples: [
                        {
                            language: "csharp",
                            code: "[CreateAssetMenu(fileName = \"NewWeapon\", menuName = \"Inventory/Weapon\")]\npublic class WeaponData : ScriptableObject {\n    public string weaponName;\n    public int baseDamage;\n    public float fireRate;\n    public GameObject meshPrefab;\n}\n\n// Usage in-game:\npublic class Gun : MonoBehaviour {\n    public WeaponData stats; // Drag asset here\n    void Fire() { /* use stats.baseDamage */ }\n}"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "arch/scriptable-data",
                commitMessage: "arch: migrated all item and enemy definitions to ScriptableObject flyweights to optimize memory and designer workflow",
                files: [{ name: "Inventory/ItemData.cs", type: "file", content: "asset code" }],
                activeFileSnippet: { filename: "ItemData.cs", code: "public abstract class Item : ScriptableObject { ... }" }
            },
            community: {
                aiSummary: "Don't hardcode health points into your scripts. Put them in assets. Your designers will love you, and your RAM will thank you.",
                solutions: []
            }
        }
    ],
    videoCount: 320,
    articleCount: 195,
    problemCount: 140,
    capstoneProject: {
        title: "The High-Performance Combat Engine",
        description: "You will build a professional-grade vertical slice of a Third-Person Action game. First, you'll implement a 'Logic Loop' that is 100% hardware-agnostic using `Time.deltaTime`. Next, you'll develop a combat system that utilizes Vector Dot Products for AI vision and Cross Products for calculating sword-deflection angles. To ensure industry-standard performance, you will architect the entire item and enemy database using ScriptableObjects (Flyweight Pattern). Finally, you will implement an 'Object Pool' for all visual effects (sparks, blood, sound-emitters) to ensure the game maintains a rock-solid 60 FPS without any Garbage Collection stutters. This project proves you understand the 'High-Code' architecture required for modern AAA game development.",
        estimatedDays: 14,
        skillsFocused: [
            "Framerate Normalization (DeltaTime)",
            "3D Vector Math (Dots & Crosses)",
            "Data-Driven Architecture (ScriptableObjects)",
            "Object Pooling & GC Optimization",
            "Event-Driven Gameplay State"
        ],
        steps: [
            {
                title: "Phase 1: The Tick Engine",
                description: "Develop the foundation logic to ensure the game runs identical on a potato laptop and a high-end PC."
            },
            {
                title: "Phase 2: The Geometry of Battle",
                description: "Author the AI detection and hit-direction logic using pure vector mathematics."
            },
            {
                title: "Phase 3: The Data Backbone",
                description: "Migrate all game entities to a data-driven ScriptableObject system for memory efficiency."
            },
            {
                title: "Phase 4: The Performance Polish",
                description: "Implement object pooling and memory-cleanup routines to hit 60 FPS target."
            }
        ]
    },
    totalEstimatedHours: 75,
    estimatedCompletionDays: 60,
    moduleCount: 5,
    createdAt: "2026-02-27T00:00:00Z",
    updatedAt: "2026-02-27T00:00:00Z",
    version: "1.0",
    status: "published"
};
