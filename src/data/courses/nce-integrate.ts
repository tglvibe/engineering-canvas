import { CourseEnhanced } from './types';

export const nceIntegrate: CourseEnhanced = {
    id: "NCE-INTEGRATE",
    titleKey: "courses.nceIntegrate",
    descKey: "courses.nceIntegrateDesc",
    icon: "🔌",
    duration: "3 weeks",
    languages: ["JSON", "REST API", "OAuth 2.0", "cURL (Conceptual)", "Xano Logic"],
    category: "no-code",
    programIds: ["NCE-AUTOMATE", "NCE-ENTERPRISE", "NCE-APP"],
    trackId: "nce",
    level: "intermediate",
    prerequisites: ["NCE-FOUND", "NCE-AUTOMATE"],
    targetAudience: "Advanced no-code developers, solutions architects, and technical operations managers who need to connect complex enterprise systems, manage secure authentication, and architect custom backends using visual engineering tools.",
    learningOutcomes: [
        "Navigate the complete API lifecycle from 'Authentication' to 'Data Transformation' using visual connectors",
        "Implement 'OAuth 2.0' and 'Bearer Token' flows to securely access protected enterprise data",
        "Master 'JSON Path' and visual mapping to extract deeply nested data from complex API responses",
        "Architect a central 'No-Code Backend' in Xano to consolidate data from multiple 3rd-party services",
        "Implement 'Rate Limiting' and 'Retry Logic' to ensure high availability and prevent 429 API errors"
    ],
    modules: [
        {
            id: "NCE-INTEGRATE-M1",
            title: "The API Universe: REST, GraphQL & Webhooks",
            description: "Understanding how the world's software speaks.",
            sequenceNumber: 1,
            estimatedHours: 10,
            topics: ["NCE-INTEGRATE-M1-T1", "NCE-INTEGRATE-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Explain the anatomy of an HTTP request: Method, URL, Header, and Body",
                "Configure a 'Webhook Receiver' to listen for real-time events from external apps",
                "Perform a visual 'GraphQL Query' to fetch only the specific data fields needed"
            ]
        },
        {
            id: "NCE-INTEGRATE-M2",
            title: "Advanced Authentication & Security",
            description: "Locking down your integrations with industry-standard protocols.",
            sequenceNumber: 2,
            estimatedHours: 12,
            topics: ["NCE-INTEGRATE-M2-T1", "NCE-INTEGRATE-M2-T2"],
            prerequisiteModuleIds: ["NCE-INTEGRATE-M1"],
            outcomes: [
                "Implement a 'Token Refresh' flow to maintain long-term API access automatically",
                "Store and rotate 'API Keys' securely using Environment Variables in no-code builders",
                "Explain the difference between 'API Key' and 'OAuth2' security models"
            ]
        },
        {
            id: "NCE-INTEGRATE-M3",
            title: "Data Wrangling: JSON & Transformation",
            description: "Reshaping data for the perfect fit.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["NCE-INTEGRATE-M3-T1", "NCE-INTEGRATE-M3-T2"],
            prerequisiteModuleIds: ["NCE-INTEGRATE-M2"],
            outcomes: [
                "Use 'Visual Mappers' to translate an API response from one system to the format needed by another",
                "Master 'Type Conversion' (e.g., Integer to String) during the integration flow",
                "Implement 'Filtering' on API results to reduce the payload size before processing"
            ]
        },
        {
            id: "NCE-INTEGRATE-M4",
            title: "The No-Code Backend Carrier: Xano",
            description: "Building your own enterprise-grade API logic without code.",
            sequenceNumber: 4,
            estimatedHours: 15,
            topics: ["NCE-INTEGRATE-M4-T1", "NCE-INTEGRATE-M4-T2"],
            prerequisiteModuleIds: ["NCE-INTEGRATE-M3"],
            outcomes: [
                "Design 'API Endpoints' in Xano that perform multi-table relational lookups",
                "Implement 'Input Validation' at the API level to prevent bad data from entering your DB",
                "Configure 'External API Calls' from within Xano to act as a secure proxy for your frontend"
            ]
        },
        {
            id: "NCE-INTEGRATE-M5",
            title: "Enterprise Resilience & Monitoring",
            description: "Ensuring your connections never fail in production.",
            sequenceNumber: 5,
            estimatedHours: 8,
            topics: ["NCE-INTEGRATE-M5-T1", "NCE-INTEGRATE-M5-T2"],
            prerequisiteModuleIds: ["NCE-INTEGRATE-M4"],
            outcomes: [
                "Implement 'Exponential Backoff' for retrying failed API calls",
                "Configure 'Alerting' to notify your team when an external API goes down",
                "Perform a 'Throughput Audit' to ensure your app stays within third-party rate limits"
            ]
        }
    ],
    topics: [
        {
            id: "NCE-INTEGRATE-M1-T1",
            moduleId: "NCE-INTEGRATE-M1",
            sequenceNumber: 1,
            title: "The Anatomy of a REST API",
            estimatedMinutes: 120,
            what: "REST (Representational State Transfer) is the standard way software applications communicate over the internet. An API call has four parts: 1. The Method (GET, POST, PUT, DELETE), 2. The URL (The address), 3. The Headers (Metadata like 'Authorization'), and 4. The Body (The actual data, usually in JSON format).",
            why: "In no-code, almost every app eventually needs to talk to something else (Stripe for payments, Twilio for SMS, HubSpot for sales). Understanding how to read 'API Documentation' and configure these four parts is the difference between a 'Visual Hobbyist' and a 'Visual Engineer'.",
            when: "Every time you need to move data between two different software platforms.",
            how: "1. Find the API endpoint in the documentation. 2. Select the 'Method' (e.g. POST to create an order). 3. Add the 'Secret Key' to the Headers. 4. Map your no-code variables into the JSON Body.",
            ecosystem: "Postman (for testing), Zapier Developer Platform, Bubble API Connector, Xano External API module.",
            realWorld: "A popular sneaker-reselling app built with Bubble uses a REST API to pull real-time prices from 'StockX'. When you view a shoe, the app sends a GET request to the StockX API, parses the 'Last Sale Price', and displays it on the user's screen in 0.2 seconds. This ensures their pricing is always accurate to the market.",
            useCases: [
                "Pulling live weather data from OpenWeatherMap into a farming app",
                "Posting a new ticket to Jira from a custom internal support dashboard",
                "Querying a company's internal ERP to check stock levels from a mobile app"
            ],
            advantages: [
                "Connectivity: Your app can access the power of 10,000 other apps",
                "Standardization: Once you learn REST, you can connect to almost any modern software",
                "Live Data: No more manual syncing; your app is always 'Fresh'"
            ],
            disadvantages: [
                "Fragility: If the external API changes its structure, your app might break."
            ],

            interviewTip: "If asked 'What is the most important part of an API call?', answer: 'The Headers and Status Codes. Without the correct Authorization header, you can't access the data; and without checking the Status Code (like 200 vs 404), you don't know if your call actually succeeded.'",
            resumeBullet: "Engineered a robust multi-service API orchestration layer, connecting 5 disparate SaaS tools into a unified business dashboard using visual REST connectors.",

            videos: [
                { type: "public", title: "APIs for Beginners", author: "FreeCodeCamp", views: "3M views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Mastering the Bubble API Connector", author: "Coaching No Code Apps", views: "60K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Zapier University", rating: 4.8, title: "API Integration Mastery", instructor: "Zapier Team", enrolled: "50K+", duration: "10 hours", url: "https://zapier.com/university" }
            ],
            blogs: [
                { type: "Core", title: "The No-Code Guide to REST", publisher: "Makerpad", readTime: "20 min", url: "https://www.makerpad.co/blog/rest-apis" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Broken Bridge", category: "Debugging", estimatedTime: "4 hours",
                    scenarioDescription: "A CRM is supposed to send a webhook to an automation tool whenever a lead's status changes. Suddenly, the automation stops working. The CRM says it's 'Sending', but the target says it's 'Not Receiving'.",
                    problemAnalysis: "This is a 'Handshake' failure. We need to 1. Use a tool like 'Webhook.site' to see if the payload is actually hitting a public URL. 2. Check the 'Response Headers'—is the target returning a 403 Forbidden? 3. Is the JSON structure different than what we configured? (e.g. `lead_id` changed to `contact_uuid`).",
                    architectureLayers: ["Network Layer (HTTPS)", "Authentication Layer (Secrets)", "Data Parsing Layer (JSON)"],
                    toolsAndTech: [{ name: "Postman / Webhook.site", justification: "By isolating the call outside of the no-code builder, we can see the raw headers and body. We discover the CRM added a new 'Signature' header for security. We must now update our no-code connector to verify this signature, otherwise the target will reject the call as 'Unverified'." }],
                    tradeOffs: ["Updating security headers takes 10 minutes, but failing to do so leaves the system broken and insecure."],
                    nfrConsiderations: ["Reliability: Webhook payloads must be logged for audit trails."],
                    kpis: ["Achieve a 100% successful 'Handshake' rate in the integration logs."],
                    keyInsights: "If it's not working, check the raw response code, not the visual UI error."
                }
            ],
            playgrounds: [
                {
                    title: "The API Constructor",
                    description: "Visualizing an HTTP Request.",
                    examples: [
                        {
                            language: "JSON (API Object)",
                            code: "{\n  \"Method\": \"POST\",\n  \"URL\": \"https://api.stripe.com/v1/charges\",\n  \"Headers\": { \"Authorization\": \"Bearer sk_test_...\", \"Content-Type\": \"application/x-www-form-urlencoded\" },\n  \"Body\": { \"amount\": 2000, \"currency\": \"usd\", \"source\": \"tok_visa\" }\n}"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "integrate/stripe-v3",
                commitMessage: "integrate: updated Stripe API connector to V3 and added metadata mapping for improved reporting",
                files: [{ name: "API/Connector_Config.json", type: "file", content: "api settings" }],
                activeFileSnippet: { filename: "API_Map.md", code: "Map: Stripe.Charge.Amount -> Database.Order.Price" }
            },
            community: {
                aiSummary: "The API is the 'Contract' between two companies. If you break the contract, the business stops. Learn to read the fine print (Documentation).",
                solutions: []
            }
        },
        {
            id: "NCE-INTEGRATE-M2-T1",
            moduleId: "NCE-INTEGRATE-M2",
            sequenceNumber: 1,
            title: "OAuth 2.0: The Security Master",
            estimatedMinutes: 240,
            what: "OAuth 2.0 is the gold standard for secure application authorization. It allows your app to access a user's data (like their Google Calendar or Slack messages) WITHOUT ever seeing their password. Instead, it uses a 'Token'—a temporary digital key that can be revoked at any time.",
            why: "If you build an app that asks for a user's Google password, nobody will trust you. By implementing OAuth, you redirect the user to Google. Google says 'Is this okay?', the user says 'Yes', and Google sends your app a 'Bearer Token'. This is the only professional way to handle user-specific cross-app data.",
            when: "Every time you want your users to link their own external accounts (Google, Slack, Facebook, TikTok) to your no-code app.",
            how: "1. Register your app in the Developer Console (e.g. Google Cloud). 2. Get a 'Client ID' and 'Client Secret'. 3. Configure the 'OAuth Flow' in your no-code builder (Authorize URL, Token URL, Redirect URL). 4. Handle the 'Refresh Token' to keep the user logged in.",
            ecosystem: "Auth0 (External Identity), Supabase Auth, Firebase Auth, No-code OAuth Builders (Bubble, Xano).",
            realWorld: "A productivity app called 'Motion' (built with significant low-code/no-code elements) uses OAuth 2.0 to sync with your calendar. When you sign up, you see the 'Sign in with Google' screen. Motion never sees your password; they only receive a token that allows them to 'Read and Write' calendar events. This builds massive trust and is compliant with enterprise security standards.",
            useCases: [
                "Implementing 'Social Login' (Google/Apple) for a new mobile app",
                "Building a 'Gmail Add-on' that can read and label a user's emails",
                "Designing a 'Slack Bot' that can post messages to a user's private channel"
            ],
            advantages: [
                "Trust: Users feel safe when they don't have to share passwords",
                "Scope: You only ask for the data you need (e.g. 'Read Only')",
                "Automation: Tokens expire and refresh themselves, needing zero human work"
            ],
            disadvantages: [
                "Initial Setup: The 'OAuth Dance' (Redirects and Token swaps) can be tricky to configure for the first time"
            ],

            interviewTip: "If asked 'What is the difference between an ID Token and an Access Token?', answer: 'The ID Token is the digital ID card (Who the user is), while the Access Token is the digital key (What the app can do). Professional integrations handle both to ensure identity and capability are separated.'",
            resumeBullet: "Implemented secure OAuth 2.0 authentication flows across 3 external platforms, ensuring 100% data security and building user trust through industry-standard protocols.",

            videos: [
                { type: "public", title: "OAuth 2.0 Explained in 5 Minutes", author: "Okta", views: "1M views", duration: "05:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "The OAuth Dance: No-Code Version", author: "Xano Official", views: "40K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Udemy", rating: 4.9, title: "Modern OAuth 2.0 and OpenID Connect", instructor: "Dominick Baier", enrolled: "50K+", duration: "12 hours", url: "https://www.udemy.com/course/modern-oauth2-openid-connect/" }
            ],
            blogs: [
                { type: "Technical", title: "The Developer's Guide to OAuth", publisher: "Auth0 Blog", readTime: "45 min", url: "https://auth0.com/blog/developers-guide-to-oauth2-and-openid-connect/" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Hard", title: "The Expired Key", category: "Authentication", estimatedTime: "6 hours",
                    scenarioDescription: "A user successfully links their Google Calendar to your app. It works for 1 hour. Then, suddenly, the integration breaks and returns a '401 Unauthorized' error. The user has to manually relink their account every single hour.",
                    problemAnalysis: "This is a failing 'Refresh Token' logic. Access tokens for Google last exactly 60 minutes. Your app is successfully using the first token, but NOT using the 'Refresh Token' to get a new one when the old one dies. You need to implement an 'Automatic Refresh' workflow in your no-code backend.",
                    architectureLayers: ["Token Lifecycle Layer", "Database (Secret Storage)", "HTTP Interceptor Layer"],
                    toolsAndTech: [{ name: "Xano Background Tasks", justification: "In Xano, we can set a 'Pre-request' logic that checks: `if(Token.Expiry < Now()) { RefreshAccess() }`. This happens invisibly before every API call, ensuring the user never experiences a break in service. This is 'Invisible engineering' that makes the app feel flawless." }],
                    tradeOffs: ["Setting up refresh logic adds complex database steps but is the only way to build a 'Set and Forget' integration."],
                    nfrConsiderations: ["Security: Refresh tokens must be stored in encrypted 'Cipher' fields."],
                    kpis: ["Achieve a 99.9% 'Silent Refresh' success rate without user intervention."],
                    keyInsights: "If your tokens are dying, your refresh logic is missing."
                }
            ],
            playgrounds: [
                {
                    title: "The Token Visualizer",
                    description: "Visualizing the Refresh Flow.",
                    examples: [
                        {
                            language: "Logic Flow",
                            code: "Check: Is Access_Token expired?\n  YES -> Post to /token with Refresh_Token -> Store NEW Access_Token\n  NO -> Use local Access_Token\nAction: Send API Request"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "integrate/oauth-refresh",
                commitMessage: "integrate: implemented persistent refresh token storage and automatic re-authentication for the Google Calendar integration",
                files: [{ name: "Auth/OAuth_Flow.json", type: "file", content: "auth chart" }],
                activeFileSnippet: { filename: "TokenManagement.md", code: "Encrypted: Refresh_Token; Key: ENV_SECRET;" }
            },
            community: {
                aiSummary: "OAuth is the 'Lobby' of your app. If the lobby is confusing or broken, the user will never even see the rest of the building.",
                solutions: []
            }
        }
    ],
    videoCount: 480,
    articleCount: 320,
    problemCount: 230,
    capstoneProject: {
        title: "The Enterprise Data Gateway (EDG)",
        description: "You will build a centralized 'Data Orchestration Engine' for a multi-departmental corporation. First, you'll design a high-performance backend in Xano that connects to three external APIs (e.g. Slack for notifications, Airtable for records, and a custom CRM). You will implement a complex 'Authentication Gateway' using OAuth 2.0 for user-specific data access. You will build the 'Data Wrangler' layer that receives 'Mismatched JSON' from these services, cleans it, transforms it into a unified 'Enterprise Object', and stores it in your central database. To make it production-ready, you will implement 'Webhooks' that trigger real-time Slack alerts based on specific data patterns (e.g. Sales > $5k). Finally, you will design a 'Rate-Limit Monitor' in Bubble that tracks API usage and automatically throttles non-urgent calls when you approach the vendor's limit. This project proves you can architect advanced, mission-critical integration layers for the modern enterprise without code.",
        estimatedDays: 14,
        skillsFocused: [
            "Advanced API Orchestration (Xano/Make)",
            "Enterprise OAuth 2.0 Security Flows",
            "Sophisticated JSON Transformation & ETL",
            "Real-time Webhook Architecture",
            "API Performance & Rate-Limit Management"
        ],
        steps: [
            {
                title: "Phase 1: The Logic Core",
                description: "Configure Xano as the central 'Braintrust', designing the unified data model and auth gateway."
            },
            {
                title: "Phase 2: The Transform Layer",
                description: "Build the ETL (Extract, Transform, Load) logic that normalizes incoming data from 3 disparate sources."
            },
            {
                title: "Phase 3: The Pulse Alert",
                description: "Implement the Webhook listener and conditional routing that triggers different Slack notifications based on payload logic."
            },
            {
                title: "Phase 4: The Throughput Shield",
                description: "Design the rate-limiting and retry logic to protect the system from being blocked by external vendors."
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
