import { CourseEnhanced } from './types';

export const lceMobileDev: CourseEnhanced = {
  id: "LCE-MOBILE",
  titleKey: "courses.lceMobile",
  descKey: "courses.lceMobileDesc",
  icon: "📱",
  duration: "4 weeks",
  languages: ["Visual Flow", "Cordova/Capacitor (Conceptual)", "Offline Data Logic", "SQLite", "Native API Hooks"],
  category: "low-code",
  programIds: ["LCE-APP", "LCE-MOBILE", "LCE-ENTERPRISE"],
  trackId: "lce",
  level: "intermediate",
  prerequisites: ["LCE-FOUND", "LCE-DATA", "LCE-LOGIC"],
  targetAudience: "Developers looking to build high-performance, native-like mobile applications for iOS and Android using professional low-code platforms, with a focus on offline data resilience and hardware sensor integration.",
  learningOutcomes: [
    "Architect 'Offline-First' mobile applications that maintain high usability and data integrity without a persistent network connection.",
    "Master the implementation of 'Bi-directional Data Sync' patterns (Local SQLite to Remote SQL) with conflict resolution logic.",
    "Integrate 'Native Hardware Features'—including Camera, GPS, Biometrics (FaceID/TouchID), and Push Notifications—using visual connectors.",
    "Design 'Mobile-Optimized UX' that follows platform-specific human interface guidelines for touch targets and navigation gestures.",
    "Manage the 'App Store & Google Play' deployment lifecycle, including certificate management, beta testing (TestFlight), and store listing optimization."
  ],
  modules: [
    {
      id: "LCE-MOBILE-M1",
      title: "The Mobile Architecture & PWA vs. Native",
      description: "Choosing the right execution shell for your use case.",
      sequenceNumber: 1,
      estimatedHours: 10,
      topics: ["LCE-MOBILE-M1-T1", "LCE-MOBILE-M1-T2"],
      prerequisiteModuleIds: [],
      outcomes: [
        "Explain the difference between 'Progressive Web Apps' (PWA) and 'Native Shells' in low-code.",
        "Select the correct distribution method based on sensor requirements and offline needs.",
        "Perform a 'Mobile Performance Audit' to minimize the initial 'App Bundle' size."
      ]
    },
    {
      id: "LCE-MOBILE-M2",
      title: "Offline Data Resilience & Local Storage",
      description: "Keeping the app alive in the 'Dead Zone'.",
      sequenceNumber: 2,
      estimatedHours: 15,
      topics: ["LCE-MOBILE-M2-T1", "LCE-MOBILE-M2-T2"],
      prerequisiteModuleIds: ["LCE-MOBILE-M1"],
      outcomes: [
        "Design 'Local Entities' (SQLite) that mirror a subset of server-side data for offline use.",
        "Implement 'Bulk Sync' logic that downloads reference data during the app's first launch.",
        "Manage 'Local Storage Encrytion' to protect sensitive data on the device hardware."
      ]
    },
    {
      id: "LCE-MOBILE-M3",
      title: "Sync Engines & Conflict Resolution",
      description: "Merging the truth when the network returns.",
      sequenceNumber: 3,
      estimatedHours: 15,
      topics: ["LCE-MOBILE-M3-T1", "LCE-MOBILE-M3-T2"],
      prerequisiteModuleIds: ["LCE-MOBILE-M2"],
      outcomes: [
        "Construct a 'Read-Write-Sync' engine that handles pending local updates.",
        "Implement 'Conflict Detection' where server and client versions of a record differ.",
        "Design a 'Resolution UX' where users can manually choose which data to keep (Manual vs. Auto-Merge)."
      ]
    },
    {
      id: "LCE-MOBILE-M4",
      title: "Native Feature Integration (Sensors & Push)",
      description: "Interacting with the physical world.",
      sequenceNumber: 4,
      estimatedHours: 12,
      topics: ["LCE-MOBILE-M4-T1", "LCE-MOBILE-M4-T2"],
      prerequisiteModuleIds: ["LCE-MOBILE-M3"],
      outcomes: [
        "Integrate 'GPS & Geofencing' to trigger logic when a user enters a specific location.",
        "Implement 'Push Notifications' using Firebase (FCM) or Apple Push Service (APNs).",
        "Utilize 'Image Recognition' locally on the device for barcode parsing and document scanning."
      ]
    },
    {
      id: "LCE-MOBILE-M5",
      title: "Deployment & Store Governance",
      description: "Getting your app into the hands of 10,000 users.",
      sequenceNumber: 5,
      estimatedHours: 8,
      topics: ["LCE-MOBILE-M5-T1", "LCE-MOBILE-M5-T2"],
      prerequisiteModuleIds: ["LCE-MOBILE-M4"],
      outcomes: [
        "Generate 'Production Packages' (IPA/APK) using automated cloud build services.",
        "Configure 'Feedback & Crash Reporting' to monitor app stability in the field.",
        "Implement 'App Update Management' ensuring users are forced to update for critical security fix."
      ]
    }
  ],
  topics: [
    {
      id: "LCE-MOBILE-M1-T1",
      moduleId: "LCE-MOBILE-M1",
      sequenceNumber: 1,
      title: "The Mobile Shell: Native vs. PWA",
      estimatedMinutes: 180,
      what: "In LCE, you have two primary ways to deliver a mobile app. 1. A PWA (Progressive Web App) runs in the mobile browser but can be 'Installed' on the home screen. 2. A Native Shell (Cordova/Capacitor based) is a bridge that allows your web-based low-code logic to talk to hardware sensors like FaceID, NFC, and Bluetooth. Both use the same visual logic, but the 'Shell' determines the level of hardware access.",
      why: "Distribution is the biggest challenge in mobile. PWAs are 'Instant' (just a URL), but they have limited access to push notifications on iOS. Native Shells are 'Deeply Integrated' (access to everything), but require Apple/Google approval and certificate management. Professional developers choose based on the 'Capabilities' required by the business.",
      when: "Select a PWA for internal tools or simple information apps. Select a Native Shell for high-frequency field-service apps, biometric-protected banking apps, or apps needing background GPS tracking.",
      how: "1. Open the 'Platform Configurations'. 2. Toggle 'Enable PWA' for instant testing. 3. Configure 'Native Plugins' and 'Build Certificates' for Store distribution.",
      ecosystem: "Cordova, Capacitor, PWA Standard, Manifest.json, Service Workers.",
      realWorld: "A major fast-food chain built a 'Manager App' in OutSystems. They initially used a PWA, but managers complained they weren't getting 'Inventory Low' alerts while their phones were locked. The team switched to a 'Native Shell' and implemented Firebase Push Notifications. Result: Alert response time dropped by 90% because the app could now reach the user anywhere, even when closed.",
      useCases: [
        "Developing a 'Guest Check-in' app for a hotel that must work as a PWA for speed",
        "Building a 'Police Reporting' app that requires Native GPS and Camera stability in the field",
        "Creating a 'Personal Banking' app that uses Native Biometrics for secure login"
      ],
      advantages: [
        "Single Codebase: Build once, deploy as a Website, PWA, iOS app, and Android app simultaneously.",
        "Native Performance: Professional shells ensure UI transitions feel like 60fps native code.",
        "Hardware Power: Control the Camera, NFC, and Bluetooth directly without complex Java/Swift code."
      ],
      disadvantages: [
        "Complexity: Store approval processes (Apple/Google) are rigorous and can take days for each update."
      ],

      interviewTip: "If asked 'When do you choose Native over PWA?', answer: 'I choose Native when I need persistent Push Notifications (especially on older iOS), access to advanced sensors like Bluetooth/NFC, or a presence in the App Store for branding. If I just need a responsive UI that works offline, I choose PWA for its friction-less distribution.'",
      resumeBullet: "Engineered a dual-delivery mobile strategy (PWA & Native), optimizing distribution friction and sensor access for a workforce of 2,000+ field technicians.",

      videos: [
        { type: "public", title: "PWA vs Native: Which is Better?", author: "Academind", views: "400K views", duration: "12:45", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Mobile UI Design Best Practices", author: "Figma", views: "1.2M views", duration: "15:20", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Alison", rating: 4.7, title: "Mobile App Development for Beginners", instructor: "NPTEL", enrolled: "200K+", duration: "10 hours", url: "https://alison.com/course/diploma-in-mobile-app-development" }
      ],
      blogs: [
        { type: "Core", title: "The State of Mobile Low-Code", publisher: "Gartner Research", readTime: "30 min", url: "https://www.gartner.com/en/information-technology/glossary/low-code-development-platforms" }
      ],
      scenarios: [
        {
          id: "1.1", difficulty: "Medium", title: "The Dead Battery Drain", category: "Performance", estimatedTime: "4 hours",
          scenarioDescription: "A developer added a 'Background GPS' tracker to a delivery app. When drivers finish their 8-hour shift, their phones are dead. The app is 'Eating the Battery.'",
          problemAnalysis: "This is 'Over-Polling'. The developer likely set the GPS to track every 1 meter. The solution is 'Distance-Based Polling' or 'Stationary Detection'. We should tell the app: 'Only check GPS if the user has moved 50 meters' or 'Stop checking if the user hasn't moved for 5 minutes.'",
          architectureLayers: ["Sensor Logic Layer", "Power Management Policy", "Hardware Bridge"],
          toolsAndTech: [{ name: "Significant Location Change API", justification: "By using the platform's 'Adaptive Location' plugin, we rely on the OS (iOS/Android) to manage the battery efficiently, only waking the app when the user significantly moves, rather than pinging the satellite every second." }],
          tradeOffs: ["Lower precision (within 10-50m) but saves 80% of battery life, making the app viable for all-day use."],
          nfrConsiderations: ["Utility: The app must last for a full 10-hour shift without charging."],
          kpis: ["Achieve < 5% battery drain per hour of active background tracking."],
          keyInsights: "Don't ask the hardware 'Where am I?' more often than you actually need to know."
        }
      ],
      playgrounds: [
        {
          title: "The Sensor Simulator",
          description: "Visualizing the Battery impact.",
          examples: [
            {
              language: "JSON (Config)",
              code: "{\n  \"Sensor\": \"GPS\",\n  \"Mode\": \"Adaptive\",\n  \"Accuracy\": \"Balanced\",\n  \"Interval\": 30000 // 30 seconds, not 1!\n}"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "opt/battery-gps-fix",
        commitMessage: "perf: optimized GPS polling interval to significant location changes to reduce battery consumption",
        files: [{ name: "Native/LocationConfig.json", type: "file", content: "sensor-metadata" }],
        activeFileSnippet: { filename: "Sensors.md", code: "Mode: Power_Save; DistanceFilter: 50; StopOnStationary: True;" }
      },
      community: {
        aiSummary: "Modern mobile dev is an 'Optimization' game. Be precise with your sensors, or you'll lose your users.",
        solutions: []
      }
    },
    {
      id: "LCE-MOBILE-M2-T1",
      moduleId: "LCE-MOBILE-M2",
      sequenceNumber: 1,
      title: "Offline Mastery: The Local Data Cache",
      estimatedMinutes: 240,
      what: "Offline Data Resilience is the ability of a mobile app to function perfectly without the Internet. In LCE, you don't just 'Cache' images; you create a 'Local Database' (SQLite) on the device. When the user is in a basement or on a plane, your 'Visual Logic' reads and writes to this local DB. When the network returns, your 'Sync Engine' (Logic) merges those local records back to the main server.",
      why: "Mission-critical apps (like an aircraft maintenance log or a field inspection tool) cannot afford to stop working if a signal is lost. If a mechanic can't log a repair because of 'No WiFi,' the plane can't fly. An 'Offline-First' architecture ensures 100% uptime for the user's workflow, regardless of their environment.",
      when: "Every time an application is intended for 'Field Use' (Logistics, Construction, Emergency Services, Air Travel).",
      how: "1. Identify the 'Core Entities' for offline use. 2. Create 'Local Entities' in the visual IDE. 3. Use 'OnInitialize' logic to populate the local DB from the server. 4. Wrap all 'Save' actions in logic that detects the 'Network Status'.",
      ecosystem: "SQLite, IndexedDB. Service Workers, Sync Patterns (Read-Only, Read-Write, On-Demand).",
      realWorld: "A major oil company built a 'Rig Inspection' app in OutSystems. Inspectors go hundreds of meters underground with zero Signal. The app stores 50+ photos and 200 data points locally on the iPad. When they return to the surface, the app detects 'Signal' and performs a 'Background Sync.' Result: Zero data loss and 100% inspector compliance with safety logs, even in the most remote locations on earth.",
      useCases: [
        "Building a 'Product Catalog' for sales reps that works in rural areas with poor 4G",
        "Developing a 'Patient Health Tracker' for doctors in remote clinics with intermittent satellite link",
        "Creating a 'Utility Meter Reader' app that allows capturing of data in deep concrete basements"
      ],
      advantages: [
        "Indestructible Uptime: The user never sees a 'No Connection' error during their work.",
        "Extreme Speed: Reading from local SQLite is 100x faster than reading from a remote cloud DB.",
        "Data Integrity: Changes are saved instantly to disk, preventing form-loss during crashes."
      ],
      disadvantages: [
        "Sync Complexity: Handling 'Two people edited the same record at once' (Conflict Resolution) requires advanced logic architecture."
      ],

      interviewTip: "If asked 'How do you design for offline?', answer: 'I follow the \"Offline-First\" pattern. My UI always binds to the Local Entity. I decouple the \"Business Action\" from the \"Network Action.\" The app saves locally immediately, and a separate background process handles the server synchronization when possible.'",
      resumeBullet: "Architected a high-performance offline-first data sync engine for an industrial field-service application, ensuring 100% data availability in signal-dead zones.",

      videos: [
        { type: "public", title: "Designing Offline-First Web Apps", author: "Google Chrome Developers", views: "100K views", duration: "25:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Syncing Data in OutSystems Mobile", author: "OutSystems Academy", views: "20K views", duration: "14:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Udemy", rating: 4.8, title: "Mastering SQLite for Mobile", instructor: "Joe Parys", enrolled: "25K+", duration: "6 hours", url: "https://www.udemy.com/course/sqlite-tutorial/" }
      ],
      blogs: [
        { type: "Technical", title: "The 3 Pillars of Mobile Sync", publisher: "Mendix Technical Blog", readTime: "25 min", url: "https://www.mendix.com/blog/data-synchronization-offline-first-mobile-apps/" }
      ],
      scenarios: [
        {
          id: "2.1", difficulty: "Expert", title: "The Double Update Clash", category: "Conflict resolution", estimatedTime: "8 hours",
          scenarioDescription: "Two mechanics, Bob and Alice, are working on the same engine. Bob is offline in the hangar and changes the 'Oil Level' to 'Full'. Alice is online in the office and changes it to 'Warning'. When Bob returns to the office, his app tries to sync. Whose update wins?",
          problemAnalysis: "This is a 'Race Condition'. If Bob's app just overwrites Alice's, the server will have 'Incorrect' data. The solution is 'Last Write Wins' (Simple but dangerous) or 'Attribute-Level Merging' (Professional). The system should check the `LastModifiedTimestamp` and, if they clash, ask Bob: 'Alice changed this to Warning, you have it as Full. Which is correct?'",
          architectureLayers: ["Local Change Tracking", "Server Validation Logic", "Conflict Resolution UI"],
          toolsAndTech: [{ name: "Optimistic Locking", justification: "By including a `VersionNumber` on every record, the server can detect if the record has changed since the mobile user last saw it, preventing accidental overwrites of newer data." }],
          tradeOffs: ["Adding a resolution UI is more work, but it's the only way to ensure 100% data accuracy in collaborative environments."],
          nfrConsiderations: ["Consistency: The server must never store contradictory data from two users."],
          kpis: ["Achieve 0% accidental data loss during multi-user synchronization events."],
          keyInsights: "Don't just sync data; sync intent."
        }
      ],
      playgrounds: [
        {
          title: "The Sync Simulator",
          description: "Visualizing the Conflict.",
          examples: [
            {
              language: "JSON (Sync Record)",
              code: "{\n  \"RecordId\": \"ENG-101\",\n  \"LocalValue\": \"Full\",\n  \"ServerValue\": \"Warning\",\n  \"Status\": \"CONFLICT\",\n  \"SuggestedAction\": \"UserPrompt\"\n}"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "feat/offline-conflict-resolver",
        commitMessage: "feat: implemented robust conflict resolution logic for offline data synchronization with version-tracking support",
        files: [{ name: "Logic/SyncOrchestrator.oml", type: "file", content: "sync-logic" }],
        activeFileSnippet: { filename: "Sync.md", code: "if (Local.Version != Server.Version) triggerConflictUI();" }
      },
      community: {
        aiSummary: "The cloud is a lie. Your local DB is the only truth. Build for the basement, and the cloud will follow.",
        solutions: []
      }
    }
  ],
  videoCount: 580,
  articleCount: 390,
  problemCount: 245,
  capstoneProject: {
    title: "The Zero-Signal Logistics Commander",
    description: "In this final project, you will build a professional 'Fleet Delivery App' that works in the world's most remote environments. You will implement a full 'Offline-First' architecture using local SQLite entities. You must design a 'Sync Engine' that performs a background upload of delivery photos and signatures once a signal is detected. You will integrate the 'Native Camera' for barcode scanning and the 'Native GPS' for tracking. Your app must handle a 'Data Conflict' scenario where a dispatcher changes a delivery route while the driver is offline. Finally, you will configure a 'Remote Wipe' feature—if the driver loses their phone, the admin can trigger a logic flow that deletes all local SQLite data on that device for security. This project proves you are an elite mobile engineer capable of building resilient, hardware-integrated systems for the enterprise.",
    estimatedDays: 14,
    skillsFocused: [
      "Advanced Offline-First Architecture (SQLite)",
      "Native Hardware Sensor Orchestration (GPS/Camera)",
      "Bi-directional Data Sync & Conflict Resolution",
      "Enterprise Remote Management (Wipe/Security)",
      "Mobile Performance & UX Optimization"
    ],
    steps: [
      {
        title: "Phase 1: The Local Core",
        description: "Architect the local entity schema and populate the initial cache for offline use."
      },
      {
        title: "Phase 2: The Hardware Bridge",
        description: "Implement the visual logic for barcode scanning and battery-optimized GPS tracking."
      },
      {
        title: "Phase 3: The Intelligent Sync",
        description: "Develop the conflict resolution logic that handles version-mismatches between mobile and server."
      },
      {
        title: "Phase 4: Hardening & Security",
        description: "Implement the Remote-Wipe command receiver and perform an offline stability audit."
      }
    ]
  },
  totalEstimatedHours: 110,
  estimatedCompletionDays: 30,
  moduleCount: 6,
  createdAt: "2026-02-28T00:00:00Z",
  updatedAt: "2026-02-28T00:00:00Z",
  version: "1.0",
  status: "published"
};