import { CourseEnhanced } from './types';

export const nceMobileDev: CourseEnhanced = {
    id: "NCE-MOBILE-DEV",
    titleKey: "courses.nceMobileDev",
    descKey: "courses.nceMobileDevDesc",
    icon: "📱",
    duration: "3 weeks",
    languages: ["Visual UI", "PWA Manifest", "Local Storage", "GPS Logic", "Push API"],
    category: "no-code",
    programIds: ["NCE-MOBILE", "NCE-APP"],
    trackId: "nce",
    level: "beginner",
    prerequisites: ["NCE-FOUND", "NCE-DATABASE", "NCE-UIUX"],
    targetAudience: "Aspiring mobile developers and entrepreneurs who want to build high-performance, native-like mobile applications for iOS and Android using professional no-code platforms like FlutterFlow, Adalo, and Glide.",
    learningOutcomes: [
        "Navigate the trade-offs between Progressive Web Apps (PWAs) and Native mobile binaries in the no-code ecosystem",
        "Engineer 'Touch-First' interfaces that adhere to Apple Human Interface and Material Design guidelines",
        "Architect 'Offline-Ready' applications using local data caching and background synchronization patterns",
        "Integrate native device sensors (GPS, Camera, Accelerometer) to build contextually aware mobile experiences",
        "Master the end-to-end deployment process: From TestFlight/Google Play Console to successful Store publication"
    ],
    modules: [
        {
            id: "NCE-MOBILE-DEV-M1",
            title: "Mobile-First Architecture: PWAs vs. Native",
            description: "Understanding the underlying runtime of your mobile app.",
            sequenceNumber: 1,
            estimatedHours: 10,
            topics: ["NCE-MOBILE-DEV-M1-T1", "NCE-MOBILE-DEV-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Explain the performance differences between a mobile browser and a native runtime",
                "Configure a PWA manifest for custom icons and splash screens",
                "Select the optimal mobile builder based on the required hardware access"
            ]
        },
        {
            id: "NCE-MOBILE-DEV-M2",
            title: "Touch-First UI/UX Engineering",
            description: "Designing for thumbs, gestures, and small screens.",
            sequenceNumber: 2,
            estimatedHours: 12,
            topics: ["NCE-MOBILE-DEV-M2-T1", "NCE-MOBILE-DEV-M2-T2"],
            prerequisiteModuleIds: ["NCE-MOBILE-DEV-M1"],
            outcomes: [
                "Apply 'Safe Area' padding to avoid interference with the notch and button-bar",
                "Implement 'Swipe-to-Action' and 'Long-Press' gestures visually",
                "Design 44px x 44px minimum touch targets for all interactive elements"
            ]
        },
        {
            id: "NCE-MOBILE-DEV-M3",
            title: "Offline Data & Local Storage",
            description: "Building apps that work in tunnels, airplanes, and basements.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["NCE-MOBILE-DEV-M3-T1", "NCE-MOBILE-DEV-M3-T2"],
            prerequisiteModuleIds: ["NCE-MOBILE-DEV-M2"],
            outcomes: [
                "Configure 'Persistent Local State' to save user progress without a network connection",
                "Design 'Sync Engines' that reconcile local changes once the device goes back online",
                "Implement 'Skeleton Screens' to maintain UI responsiveness during data hydration"
            ]
        },
        {
            id: "NCE-MOBILE-DEV-M4",
            title: "Hardware & Sensors Integration",
            description: "Triggering actions based on the user's physical world.",
            sequenceNumber: 4,
            estimatedHours: 10,
            topics: ["NCE-MOBILE-DEV-M4-T1", "NCE-MOBILE-DEV-M4-T2"],
            prerequisiteModuleIds: ["NCE-MOBILE-DEV-M3"],
            outcomes: [
                "Implement 'Geofencing' to trigger notifications based on GPS coordinates",
                "Configure 'Camera Modules' for barcode scanning and photo uploads",
                "Use 'Push Notifications' to drive user engagement and retention"
            ]
        },
        {
            id: "NCE-MOBILE-DEV-M5",
            title: "Publishing & Maintenance",
            description: "Navigating the App Store and Google Play ecosystems.",
            sequenceNumber: 5,
            estimatedHours: 8,
            topics: ["NCE-MOBILE-DEV-M5-T1", "NCE-MOBILE-DEV-M5-T2"],
            prerequisiteModuleIds: ["NCE-MOBILE-DEV-M4"],
            outcomes: [
                "Prepare App Store metadata, screenshots, and privacy policies",
                "Set up 'Over-The-Air' (OTA) updates to fix bugs without resubmitting to the stores",
                "Analyze app usage logs to identify device-specific performance bottlenecks"
            ]
        }
    ],
    topics: [
        {
            id: "NCE-MOBILE-DEV-M1-T1",
            moduleId: "NCE-MOBILE-DEV-M1",
            sequenceNumber: 1,
            title: "PWAs vs. Native: The Runtime Divide",
            estimatedMinutes: 120,
            what: "Progessive Web Apps (PWAs) are websites that look and behave like apps; they run in the mobile browser but can be 'Added to Home Screen'. Native apps (built via FlutterFlow or Adalo) are binary files installed via the App Store. Native apps have deeper access to hardware (like Bluetooth) and generally better performance for complex animations.",
            why: "Choosing the wrong architecture can kill a mobile product. PWAs are 10x cheaper to deploy and maintain because they bypass the App Store's 30% tax and strict approval rules. However, if your app needs to work perfectly offline or requires background location tracking, a Native binary is often the only professional choice.",
            when: "Selecting a mobile stack for a new project.",
            how: "1. List the required 'Native' features (Camera, Push, Offline). 2. Choose a builder (Glide for PWAs, Adalo for simple Native, FlutterFlow for high-performance Native). 3. Configure the 'App Shell' and manifest details.",
            ecosystem: "PWA Builders: Glide, Softr, Stacker. Native Builders: Adalo, FlutterFlow, Draftbit.",
            realWorld: "Starbucks built a PWA for their ordering system. It looks exactly like their native app but is 99% smaller and works even in areas with poor internet. However, their 'Rewards' and 'In-Store' experiences still use a Native app for deeper integration with mobile payment SDKs. They use both, proving that architecture follows function.",
            useCases: [
                "Building a simple internal inventory tracker as a PWA for field workers",
                "Developing a high-fidelity fitness app with native health-kit integration",
                "Architecting a mobile social network with heavy push-notification logic"
            ],
            advantages: [
                "Speed: PWAs update instantly. Native apps take days to be approved.",
                "Accessibility: PWAs work on any device with a link.",
                "Hardware: Native apps unlock the full power of the phone (Haptics, NFC)."
            ],
            disadvantages: [
                "PWA Limits: No push notifications on iOS (limited support) or background execution."
            ],

            interviewTip: "If asked 'Should everything be a Native app?', answer: 'No. I follow the \"PWA-First\" rule. If the features don't require native APIs or extreme performance, a PWA is better for the business because it's cheaper to build and easier for users to access without an install.'",
            resumeBullet: "Evaluated and selected mobile architectures for over 5 projects, resulting in an average 30% reduction in development time by utilizing PWA-first strategies.",

            videos: [
                { type: "public", title: "PWA vs Native: The Ultimate Guide", author: "Traversy Media", views: "300K views", duration: "15:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "FlutterFlow: Building for iOS/Android", author: "FlutterFlow", views: "100K views", duration: "25:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Adalo University", rating: 4.8, title: "Building Native Mobile Apps", instructor: "Adalo Experts", enrolled: "50K+", duration: "8 hours", url: "https://adalo.com/university" }
            ],
            blogs: [
                { type: "Core", title: "The State of No-Code Mobile", publisher: "Glide Blog", readTime: "15 min", url: "https://www.glideapps.com/blog/pwa-vs-native" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The App Store Rejection", category: "Strategy", estimatedTime: "4 hours",
                    scenarioDescription: "A developer builds a digital store on Adalo. Apple rejects it because it uses Apple's logo in the UI and doesn't provide enough 'Value' beyond just being a website. What is the fastest way to get to users?",
                    problemAnalysis: "Apple has strict 'Minimum Functionality' rules. If an app is just a wrapper for a website, they reject it. The solution is to 1. Add 'Native' features like Push Notifications or Camera integration to justify the app's existence, OR 2. Pivot to a PWA and bypass the App Store entirely while still giving users an 'Add to Home Screen' experience.",
                    architectureLayers: ["Compliance Layer (Apple Guidelines)", "Platform Distribution Layer", "Feature Set Expansion"],
                    toolsAndTech: [{ name: "PWA Pivot", justification: "By switching to a PWA model, the developer can launch TODAY. They can use a tool like 'Progressier' to add Push Notifications to their PWA for Android users, effectively reaching 80% of their functionality without the 'App Store Gatekeeper' delay." }],
                    tradeOffs: ["Losing the 'App Store Search' visibility but gaining 100% control over the launch timeline and revenue."],
                    nfrConsiderations: ["Time-to-Market: Must launch within 24 hours of rejection."],
                    kpis: ["Achieve 1,000 PWA installs within the first week using direct marketing links."],
                    keyInsights: "The App Store is a privilege, not a right. Have a PWA fallback plan."
                }
            ],
            playgrounds: [
                {
                    title: "The PWA Manifest Editor",
                    description: "Visualizing the app icon config.",
                    examples: [
                        {
                            language: "JSON (Metadata)",
                            code: "{\n  \"short_name\": \"MyNoCodeApp\",\n  \"name\": \"Professional No-Code Mobile Experience\",\n  \"icons\": [{ \"src\": \"/icon.png\", \"sizes\": \"192x192\" }],\n  \"start_url\": \"/\",\n  \"display\": \"standalone\"\n}"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "mobile/pwa-config",
                commitMessage: "mobile: configured web manifest and service workers for offline asset caching in the PWA",
                files: [{ name: "Mobile/Manifest.json", type: "file", content: "app config" }],
                activeFileSnippet: { filename: "App.json", code: "platform.type = 'pwa'; theme.icons = 'adaptive';" }
            },
            community: {
                aiSummary: "Mobile is about 'The Moment'. If your app isn't ready when the user opens it in a grocery line (fast, offline-ready), it's a failure.",
                solutions: []
            }
        },
        {
            id: "NCE-MOBILE-DEV-M2-T1",
            moduleId: "NCE-MOBILE-DEV-M2",
            sequenceNumber: 1,
            title: "Touch Targets & Mobile Safe Areas",
            estimatedMinutes: 180,
            what: "Mobile UI is fundamentally different from Desktop. You use fingers (Touch) instead of mice (Precision). A 'Touch Target' is the clickable area around a button. A 'Safe Area' is the part of the screen not blocked by the hardware (Notch) or software (Home Bar). Professional mobile builders (FlutterFlow) provide visual constraints to handle these automatically.",
            why: "If your 'Back' button is at the very top left and hidden behind the iPhone Notch, the user can't exit. If your buttons are too small (e.g. 12px), people with larger thumbs will misclick 50% of the time, leading to frustration and 'App Churn'. Engineering for 'Touch Accessibility' is what separates amateur apps from professional tools.",
            when: "Every time you place a button, link, or navigation element in a mobile view.",
            how: "1. Use 'Safe Area' containers to wrap your content. 2. Set all buttons to at least 44px height. 3. Add 'Space' between clickable elements (Proximity). 4. Use 'Visual Feedback' (e.g., button changes color when tapped) to confirm the touch was registered.",
            ecosystem: "Apple Human Interface Guidelines (HIG), Material Design (Google), Accessibility Checkers.",
            realWorld: "The 'Uber' app uses huge touch targets for their main 'Where to?' button. You don't even have to look—you just tap the general area. This is 'Low-Cognitive Load' design. They also automatically pad the bottom of the screen so their action buttons don't get obscured by the iPhone Home Swipe bar.",
            useCases: [
                "Designing a mobile checkout page with large, thumb-friendly 'Pay Now' buttons",
                "Configuring a list of items where the 'Edit' icon is far enough from the 'Delete' icon",
                "Ensuring the app navigation bar is always above the system's home-gestures"
            ],
            advantages: [
                "Usability: Far fewer 'Misclicks' and errors",
                "Professionalism: The app feels 'High-End' and native to the device",
                "Inclusion: Easier for older users or those with motor-skill limitations"
            ],
            disadvantages: [
                "Space Constraints: Larger buttons mean less room for other content"
            ],

            interviewTip: "If asked 'How do you design for different screen sizes?', answer: 'I use Percentages and Flexbox for layout, but FIXED PIXEL MINIMUMS for touch targets. A screen can be small, but a human thumb doesn't shrink.'",
            resumeBullet: "Implemented a standardized mobile UI design system with 100% compliance to 'Safe Area' and 'Touch Target' accessibility standards.",

            videos: [
                { type: "public", title: "Apple HIG for No-Coders", author: "DesignCourse", views: "80K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Mobile UI Bloopers and How to Fix Them", author: "NNGroup", views: "200K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Coursera", rating: 4.8, title: "Mobile UI/UX Principles", instructor: "Google", enrolled: "1M+", duration: "20 hours", url: "https://www.coursera.org/specializations/google-ux-design" }
            ],
            blogs: [
                { type: "Core", title: "Designing for Touch", publisher: "Smashing Magazine", readTime: "25 min", url: "https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-size-for-touchscreen-targets/" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Easy", title: "The Ghost Tap", category: "UI Debugging", estimatedTime: "2 hours",
                    scenarioDescription: "A user is trying to click 'Add to Cart' in your mobile app, but nothing happens. They have to tap it 3 or 4 times before it works. You look at the design and the button is only 18px tall.",
                    problemAnalysis: "The touch target is too small. Even though the 'Label' is visible, the mathematical clicking area is too tiny for a finger. The solution is to 1. Increase the button height to 44px, and 2. Add 'Padding' around the text so the 'Clickable hit-box' is much larger than the word itself.",
                    architectureLayers: ["UI Interaction Layer (Hit-box)", "Accessibility Layer", "Feedback Loop"],
                    toolsAndTech: [{ name: "Visual Hitbox Expansion", justification: "By using 'Transparent Padding' or 'Minimum Height' constraints in the layout builder, we expand the clickable area without changing the visual size of the text too drastically. This is the #1 fix for 'Non-Responsive' feeling apps." }],
                    tradeOffs: ["A larger hit-box might overlap with nearby buttons; use 'Spacing' to avoid secondary clicks."],
                    nfrConsiderations: ["Usability: 99%+ success rate on initial touch-register."],
                    kpis: ["Increase 'Add to Cart' conversion by 20% by making the button easier to hit."],
                    keyInsights: "If a user can't tap it, the feature doesn't exist."
                }
            ],
            playgrounds: [
                {
                    title: "The Target Tester",
                    description: "Visualizing the Hit-Box.",
                    examples: [
                        {
                            language: "CSS (Conceptual)",
                            code: "/* BAD: HARD TO TAP */\n.btn-tiny { height: 18px; padding: 2px; }\n\n/* GOOD: EASY TO TAP */\n.btn-pro { height: 48px; border-radius: 24px; padding: 0 20px; min-width: 100px; }"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "ui/touch-optimization",
                commitMessage: "ui: expanded all mobile button hit-boxes to 44px minimum to ensure HIG compliance",
                files: [{ name: "UI/Styles.json", type: "file", content: "style tweaks" }],
                activeFileSnippet: { filename: "Constants.md", code: "MIN_TOUCH_TARGET = 44px; SAFE_AREA_TOP = notch_height;" }
            },
            community: {
                aiSummary: "Mobile design is about 'The Thumb Zone'. Keep your most important actions where the thumb naturally rests.",
                solutions: []
            }
        }
    ],
    videoCount: 380,
    articleCount: 190,
    problemCount: 130,
    capstoneProject: {
        title: "The Hyper-Local Marketplace App",
        description: "You will build a professional mobile application that connects local buyers and sellers. First, you'll design a touch-optimized 'Product Feed' with large cards and gesture-based navigation. You will implement 'GPS Integration' to automatically show users the products closest to their current location. To handle offline scenarios (like a user in a parking garage), you will architect a local storage system that caches the top 20 listings so the app never looks 'Empty'. Next, you will integrate a 'Native Camera' module for sellers to snap and upload product photos instantly. Finally, you will prepare the app for deployment, creating a 'PWA Manifest' for instant web-launch and a 'Production Build' configuration for the Apple App Store. This project proves you can engineer high-quality mobile software that bridges the gap between the digital and physical worlds without writing code.",
        estimatedDays: 14,
        skillsFocused: [
            "Mobile-First UI/UX Engineering",
            "Native Hardware Integration (GPS/Camera)",
            "Offline Data Architecture & Sync",
            "Dynamic Geo-filtering Logic",
            "Multi-platform Deployment Strategy"
        ],
        steps: [
            {
                title: "Phase 1: The Native Canvas",
                description: "Design the core mobile UI ensuring 100% compliance with Safe Areas and Touch Target standards."
            },
            {
                title: "Phase 2: The Geo-Engine",
                description: "Connect the GPS sensor and build the relational query that filters listings by distance."
            },
            {
                title: "Phase 3: The Persistence Layer",
                description: "Implement local caching so the app remains functional and responsive during intermittent connectivity."
            },
            {
                title: "Phase 4: The Store Submission",
                description: "Configure the deployment manifest and perform a final performance audit for low-end mobile devices."
            }
        ]
    },
    totalEstimatedHours: 75,
    estimatedCompletionDays: 30,
    moduleCount: 5,
    createdAt: "2026-02-28T00:00:00Z",
    updatedAt: "2026-02-28T00:00:00Z",
    version: "1.0",
    status: "published"
};
