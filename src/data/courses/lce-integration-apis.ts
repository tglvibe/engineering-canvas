import { CourseEnhanced } from './types';

export const lceIntegrationApis: CourseEnhanced = {
  id: "LCE-INTEGRATE",
  titleKey: "courses.lceIntegrate",
  descKey: "courses.lceIntegrateDesc",
  icon: "🔌",
  duration: "4 weeks",
  languages: ["REST", "SOAP", "JSON", "XML", "OAuth 2.0 (Integration)", "OData", "Swagger/OpenAPI"],
  category: "low-code",
  programIds: ["LCE-APP", "LCE-BPM", "LCE-ENTERPRISE", "LCE-INTEGRATE", "LCE-MOBILE", "LCE-AI"],
  trackId: "lce",
  level: "intermediate",
  prerequisites: ["LCE-FOUND", "LCE-DATA", "LCE-LOGIC"],
  targetAudience: "Integration specialists and backend-focused low-code developers who want to master the art of connecting visual applications to any external system, service, or legacy database using industry-standard protocols.",
  learningOutcomes: [
    "Master the consumption of REST and SOAP services, including advanced header configuration and payload mapping (JSON/XML).",
    "Implement 'Secure Authentication' flows for API calls using OAuth 2.0 Grant Types (Authorization Code, Client Credentials).",
    "Design and expose 'Custom REST APIs' from a low-code platform, complete with Swagger/OpenAPI documentation and versioning.",
    "Architect 'Resilient Integration Patterns' including exponential backoff, circuit breakers, and webhook receivers.",
    "Utilize 'Advanced Data Transformation' techniques to bridge incompatible data formats between disparate enterprise systems."
  ],
  modules: [
    {
      id: "LCE-INTEGRATE-M1",
      title: "The Integration Architecture: Consuming APIs",
      description: "Bringing external data into your visual application.",
      sequenceNumber: 1,
      estimatedHours: 12,
      topics: ["LCE-INTEGRATE-M1-T1", "LCE-INTEGRATE-M1-T2"],
      prerequisiteModuleIds: [],
      outcomes: [
        "Create a 'REST Consumer' that automatically generates data structures from a JSON response.",
        "Handle 'HTTP Status Codes' (200, 404, 500) and implement custom error logic per code.",
        "Configure 'Pagination' for large datasets retrieved via APIs."
      ]
    },
    {
      id: "LCE-INTEGRATE-M2",
      title: "OAuth 2.0 & Token Security",
      description: "Securing the handshake between systems.",
      sequenceNumber: 2,
      estimatedHours: 15,
      topics: ["LCE-INTEGRATE-M2-T1", "LCE-INTEGRATE-M2-T2"],
      prerequisiteModuleIds: ["LCE-INTEGRATE-M1"],
      outcomes: [
        "Implement 'OAuth 2.0 Client Credentials' flow for server-to-server communication.",
        "Design 'Secure Token Storage' and manual refresh logic for integration identities.",
        "Configure 'SAML' based authentication for legacy SOAP services."
      ]
    },
    {
      id: "LCE-INTEGRATE-M3",
      title: "Exposing APIs: Building your own Connectors",
      description: "Turning your app into a platform for others.",
      sequenceNumber: 3,
      estimatedHours: 12,
      topics: ["LCE-INTEGRATE-M3-T1", "LCE-INTEGRATE-M3-T2"],
      prerequisiteModuleIds: ["LCE-INTEGRATE-M2"],
      outcomes: [
        "Develop 'Exposed REST API' endpoints with POST, GET, and PATCH methods.",
        "Implement 'API Keys' and 'IP Whitelisting' for your exposed endpoints.",
        "Generate and publish 'OpenAPI / Swagger' documentation automatically."
      ]
    },
    {
      id: "LCE-INTEGRATE-M4",
      title: "Webhooks & Real-Time Sync",
      description: "Building 'Event-Driven' visual systems.",
      sequenceNumber: 4,
      estimatedHours: 10,
      topics: ["LCE-INTEGRATE-M4-T1", "LCE-INTEGRATE-M4-T2"],
      prerequisiteModuleIds: ["LCE-INTEGRATE-M3"],
      outcomes: [
        "Design 'Webhook Receivers' that handle incoming JSON pings from Stripe or Salesforce.",
        "Implement 'Idempotency' to prevent duplicate processing of the same event.",
        "Manage 'Long-Running' sync processes using background timers and status tables."
      ]
    },
    {
      id: "LCE-INTEGRATE-M5",
      title: "Advanced Data Transformation (JSON Logic)",
      description: "Mapping the unmappable.",
      sequenceNumber: 5,
      estimatedHours: 8,
      topics: ["LCE-INTEGRATE-M5-T1", "LCE-INTEGRATE-M5-T2"],
      prerequisiteModuleIds: ["LCE-INTEGRATE-M4"],
      outcomes: [
        "Use 'Custom C# / Java' extensions to perform complex JSON object transformations.",
        "Implement 'Binary Data Handling' for uploading/downloading files via APIs.",
        "Architect a 'Common Data Model' (CDM) to normalize data from 5 different APIs."
      ]
    }
  ],
  topics: [
    {
      id: "LCE-INTEGRATE-M1-T1",
      moduleId: "LCE-INTEGRATE-M1",
      sequenceNumber: 1,
      title: "REST Mastery: Consuming Professional APIs",
      estimatedMinutes: 200,
      what: "Consuming a REST API is the process of requesting data from an external server using the HTTP protocol (GET, POST, PUT, DELETE). In LCE, you 'Import' a REST service by providing its endpoint. The platform then uses 'Schema Inference' to automatically create the matching Data Structures (JSON objects) and visual logic blocks for you. You then drag these blocks into your workflows just like local data.",
      why: "Modern apps are rarely isolated 'Islands.' They are 'Orchestrators' that pull weather data from AccuWeather, payment status from Stripe, and customer records from Salesforce. Mastering API consumption allow you to build an app that is the 'Center of the Universe' for an organization's data, without having to build every feature from scratch.",
      when: "Every time your application needs information that it doesn't own (e.g. Current Exchange Rates, Address Validation, Government Identity Checks).",
      how: "1. Obtain the API Documentation (Swagger/OpenAPI). 2. Add 'REST Integration' in your platform. 3. Input the Header requirements (e.g., `X-API-Key`). 4. Map the 'Response' body to a local entity for persistent storage.",
      ecosystem: "REST (Representational State Transfer), JSON (JavaScript Object Notation), HTTP Status Codes, Postman (Testing tool).",
      realWorld: "A global logistics firm built an OutSystems app that integrated with 20 different 'Carrier APIs' (FedEx, UPS, DHL). Instead of checking 20 different websites, their customers could track any package in one single portal. The LCE platform handled the 'Payload transformation' from 20 different XML/JSON formats into a single 'Unified Tracking' screen. Result: A 90% increase in portal usage and a 50% decrease in call center tracking requests.",
      useCases: [
        "Integrating a 'Currency Converter' API to show real-time prices in a travel app",
        "Connecting to 'Twilio' to send SMS confirmations when an order is shipped",
        "Pulling 'Stock Levels' from an on-premise SAP instance via an OData connector"
      ],
      advantages: [
        "Speed: Import a complex API and have it working in under 10 minutes.",
        "Safety: The platform automatically handles JSON parsing and data type conversion.",
        "Standardization: Uses industry-standard HTTP protocols that work with any server on earth."
      ],
      disadvantages: [
        "Dependency: If the external API is down or changes its schema, your app may break unless you implement proper 'Error Handling'."
      ],

      interviewTip: "If asked 'How do you handle API failures?', answer: 'I use a \"Defensive Integration\" pattern. I always wrap API calls in an Error Handler. I check for the HTTP 200 status code before processing, and for critical services, I implement a \"Circuit Breaker\" to prevent my app from hanging if the external server is slow.'",
      resumeBullet: "Engineered complex API orchestrations across 10+ enterprise services, implementing robust error handling and automated JSON data transformation for a global cloud ecosystem.",

      videos: [
        { type: "public", title: "REST APIs Explained in 5 Minutes", author: "Fireship", views: "2M views", duration: "05:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Consuming REST Services in Mendix", author: "Mendix Academy", views: "30K views", duration: "18:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Coursera", rating: 4.8, title: "API Design and Fundamentals", instructor: "Google Cloud", enrolled: "150K+", duration: "10 hours", url: "https://www.coursera.org/learn/api-design-fundamentals" }
      ],
      blogs: [
        { type: "Technical", title: "The Art of the API Handshake", publisher: "Nordic APIs", readTime: "25 min", url: "https://nordicapis.com/blog/" }
      ],
      scenarios: [
        {
          id: "1.1", difficulty: "Medium", title: "The JSON Ghost", category: "Debugging", estimatedTime: "4 hours",
          scenarioDescription: "A developer integrated a 'Weather API'. It works for 'London' but crashes for 'Tokyo'. They check the URL and it's correct. They are stuck in a 'Ghost bug'.",
          problemAnalysis: "This is a 'Schema Mismatch'. Tokyo's weather data might include a field that London's doesn't (e.g. `TyphoonWarning`). The developer likely used 'Strict Mapping'. The solution is to use 'Loose JSON Parsing' or ensure the platform's 'Auto-Generated Structure' allows for 'Optional Nullable' fields.",
          architectureLayers: ["API Response Layer", "JSON Parser Logic", "Error Logging"],
          toolsAndTech: [{ name: "Postman / Fiddler", justification: "By inspecting the 'Raw Response' from both London and Tokyo in Postman, the developer can spot the difference in JSON structure instantly, avoiding hours of blind guessing in the low-code IDE." }],
          tradeOffs: ["A bit of extra work to handle 'Optional' fields, but ensures the app works globally."],
          nfrConsiderations: ["Resilience: The app must show 'Data Unavailable' instead of crashing if a field is missing."],
          kpis: ["Achieve 0% runtime crash rate for API responses."],
          keyInsights: "Never trust that an external API will always send the exact same data structure."
        }
      ],
      playgrounds: [
        {
          title: "The API Inspector",
          description: "Visualizing the JSON Map.",
          examples: [
            {
              language: "JSON (Response)",
              code: "{\n  \"status\": \"success\",\n  \"data\": {\n    \"temp\": 25,\n    \"city\": \"Tokyo\",\n    \"alerts\": null // Use 'Optional' in Low-Code!\n  }\n}"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "feat/integration-weather-v2",
        commitMessage: "feat: updated weather integration to handle optional alert fields and prevent schema mismatches",
        files: [{ name: "Integrations/WeatherAPI.oml", type: "file", content: "rest-metadata" }],
        activeFileSnippet: { filename: "Schema.md", code: "Structure: WeatherRes; Attribute: Alerts; Mandatory: No;" }
      },
      community: {
        aiSummary: "APIs are the 'Nerve System' of modern software. Respect the contract, but always prepare for the server to lie.",
        solutions: []
      }
    },
    {
      id: "LCE-INTEGRATE-M2-T1",
      moduleId: "LCE-INTEGRATE-M2",
      sequenceNumber: 1,
      title: "The OAuth 2.0 Handshake: Enterprise Authentication",
      estimatedMinutes: 240,
      what: "OAuth 2.0 is the industry-standard protocol for 'Authorization.' It allows your app to access data on another server (like Salesforce or SharePoint) without the user having to give you their password. In LCE, you implement 'Grant Types' like 'Client Credentials' (for server-to-server) and 'Authorization Code' (for user-level access). You manage 'Access Tokens' (short-lived) and 'Refresh Tokens' (long-lived) to maintain a continuous, secure connection.",
      why: "Simply sending a password in an API header is a massive security risk. OAuth 2.0 ensures that if your app is compromised, the attacker only gets a 'Token' with limited scope and a short lifespan, not the user's entire identity. It is the only acceptable way to perform enterprise integrations with high-sensitivity systems.",
      when: "Every time you integrate with a modern SaaS platform (Salesforce, Google, AWS, Microsoft 365).",
      how: "1. Obtain 'Client ID' and 'Client Secret' from the provider. 2. Define the 'Scopes' (e.g. `read:orders`, `write:inventory`). 3. Implement the 'Token Exchange' logic. 4. Configure an 'Automatic Refresh' timer to update the token before it expires.",
      ecosystem: "Auth0, Salesforce Connected Apps, Azure AD App Registrations, JWT (JSON Web Tokens).",
      realWorld: "A global pharmaceutical company built a Mendix app that needed to upload research data to an encrypted AWS S3 bucket. They used the 'OAuth 2.0 Client Credentials' flow to ensure the app had its own 'Service Identity.' This prevented individual researchers from needing S3 passwords and allowed the IT department to 'Rotate the Secrets' every 30 days without breaking the app—meeting strict HIPAA compliance standards.",
      useCases: [
        "Syncing employee data between 'Workday' and a low-code 'Bonus Planner' app securely",
        "Integrating 'DocuSign' to allow users to sign contracts directly inside a portal",
        "Connecting a custom portal to 'Microsoft Graph' to read a user's Outlook calendar"
      ],
      advantages: [
        "Gold-Standard Security: Follows globally recognized best practices for data authorization.",
        "Scope Control: You only get access to the specific data you need, nothing more.",
        "Seamless UX: Users don't have to re-login every time the app makes a background call."
      ],
      disadvantages: [
        "Complex Logic: Managing token expiration and multi-stage handshakes requires careful visual logic implementation."
      ],

      interviewTip: "If asked 'What is the Difference between Client Credentials and Auth Code flow?', answer: 'Client Credentials is for \"App-to-App\" communication where no user is involved. Auth Code is for \"User-to-App\" where the user must give explicit permission through a login screen. I choose based on whether the data belongs to the System or the User.'",
      resumeBullet: "Implemented secure enterprise-grade OAuth 2.0 authentication flows for complex third-party integrations, managing token lifecycles and secret rotation for 100% security uptime.",

      videos: [
        { type: "public", title: "OAuth 2.0 Explained in Simple Terms", author: "DigitalOcean", views: "1M views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Configuring OAuth2 in Power Automate", author: "Microsoft Mechanics", views: "50K views", duration: "15:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Udacity", rating: 4.7, title: "Identity and Access Management Mastery", instructor: "ForgeRock", enrolled: "30K+", duration: "8 hours", url: "https://www.udacity.com/course/identity-and-access-management--ud602" }
      ],
      blogs: [
        { type: "Technical", title: "Tokens vs. Keys: Why OAuth Wins", publisher: "Auth0 Blog", readTime: "20 min", url: "https://auth0.com/blog/access-token-vs-id-token/" }
      ],
      scenarios: [
        {
          id: "2.1", difficulty: "Hard", title: "The Expired Ticket", category: "Auth Logic", estimatedTime: "6 hours",
          scenarioDescription: "An app syncs data with Salesforce. It works for 1 hour, then fails with a '401 Unauthorized' error until the developer manually restarts it. The 'Access Token' is dying and isn't being resurrected.",
          problemAnalysis: "This is a 'Refresh Token' failure. The developer is getting a token once but not using the 'Refresh Token' to get a new one before the Access Token expires. The solution is to wrap the API call in logic: if (StatusCode == 401) { Call RefreshToken; Retry Original API }.",
          architectureLayers: ["Authentication Logic Layer", "Token Persistence Layer", "API Retry Logic"],
          toolsAndTech: [{ name: "OAuth Store & Refresh Pattern", justification: "By building a dedicated 'OAuth Manager' action in the low-code platform, we centralize the token lifecycle, ensuring the app stays authenticated 24/7 without manual intervention." }],
          tradeOffs: ["A bit of repetitive logic for the first few APIs, but it ensures a 'Set and Forget' integration stability."],
          nfrConsiderations: ["Resilience: App should recover from token expiration in < 1 second."],
          kpis: ["Achieve 100% 'Integration Availability' over a 30-day period."],
          keyInsights: "Don't build one-time logins; build persistent handshaking logic."
        }
      ],
      playgrounds: [
        {
          title: "The Handshake Designer",
          description: "Visualizing the Token Flow.",
          examples: [
            {
              language: "Logic Config",
              code: "1. SEND (ClientID + Secret) TO /token\n2. GET (AccessToken, RefreshToken)\n3. STORE (AccessToken) in Memory\n4. STORE (RefreshToken) in Encrypted DB"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "security/oauth-refresh-logic",
        commitMessage: "security: implemented automatic OAuth token refresh logic to prevent service interruptions for Salesforce sync",
        files: [{ name: "Logic/AuthManager.oml", type: "file", content: "auth-logic" }],
        activeFileSnippet: { filename: "Auth.js", code: "if (status == 401) return await refreshToken();" }
      },
      community: {
        aiSummary: "OAuth 2.0 is the 'Security Guard' of your APIs. Give it the right badge (Token), and it will open any door.",
        solutions: []
      }
    }
  ],
  videoCount: 550,
  articleCount: 380,
  problemCount: 215,
  capstoneProject: {
    title: "The Enterprise Integration Hub",
    description: "In this mastery project, you will architect the 'Integration Layer' for a global enterprise. You will choose a complex business scenario—such as a 'Unified HR Dashboard' that pulls data from Workday (API), Slack (Webhooks for notifications), and a legacy SQL Database. You will implement a full 'OAuth 2.0 Authorization Code' flow, including automated token refresh logic. You will expose your own 'Internal API' that allows other departments to securely query your data using 'API Keys'. You must implement 'Data Transformation' logic that merges JSON from two different APIs into a single normalized UI view. Finally, you will configure a 'Circuit Breaker'—if one of the 3 APIs is down, the app must gracefully degrade (showing cached data) instead of crashing. This project proves you are an 'Integration Architect' capable of bridging the gap between any software systems on earth.",
    estimatedDays: 14,
    skillsFocused: [
      "Advanced Multi-service REST Orchestration",
      "Production OAuth 2.0 Lifecycle Management",
      "Building & Securing Exposed Web Services",
      "JSON/XML Data Transformation & Normalization",
      "High-Resilience Integration Patterns (Circuit Breaker)"
    ],
    steps: [
      {
        title: "Phase 1: The Integration Map",
        description: "Specify the API endpoints, schemas, and security requirements (OAuth vs Key) for all 3 external services."
      },
      {
        title: "Phase 2: The Secure Handshake",
        description: "Develop the centralized authentication module that handles the Oauth handshake and token refresh persistence."
      },
      {
        title: "Phase 3: Transformation & Exposure",
        description: "Build the logic that merges the disparate API responses and exposes the 'Unified API' to internal consumers."
      },
      {
        title: "Phase 4: Resilience Audit",
        description: "Implement the Circuit Breaker logic and perform 'Chaos Testing' by disconnecting individual services to verify graceful degradation."
      }
    ]
  },
  totalEstimatedHours: 100,
  estimatedCompletionDays: 30,
  moduleCount: 6,
  createdAt: "2026-02-28T00:00:00Z",
  updatedAt: "2026-02-28T00:00:00Z",
  version: "1.0",
  status: "published"
};