import { CourseEnhanced } from './types';

export const lceAiServices: CourseEnhanced = {
  id: "LCE-AI-SERVICES",
  titleKey: "courses.lceAiServices",
  descKey: "courses.lceAiServicesDesc",
  icon: "🧠",
  duration: "4 weeks",
  languages: ["Python (for custom AI logic)", "Prompt Engineering", "JSON (AI Response processing)", "Cognitive Services SDK", "Vector Search Logic"],
  category: "low-code",
  programIds: ["LCE-AI", "LCE-APP", "LCE-ENTERPRISE"],
  trackId: "lce",
  level: "intermediate",
  prerequisites: ["LCE-FOUND", "LCE-INTEGRATE"],
  targetAudience: "Developers who want to integrate cutting-edge Artificial Intelligence capabilities—such as Computer Vision, Generative AI (LLMs), and Vector Search—into their low-code applications without needing a PhD in Machine Learning.",
  learningOutcomes: [
    "Master the integration of 'Cognitive Services' (Azure AI, AWS Bedrock, Google Vertex) to add vision, speech, and translation to visual apps.",
    "Architect 'RAG' (Retrieval-Augmented Generation) systems that connect private enterprise data to Large Language Models securely.",
    "Implement 'AI-Powered Workflows' that automatically classify support tickets, route approvals, and extract data from documents.",
    "Apply 'Prompt Engineering' best practices to ensure consistent and reliable AI responses within a low-code context.",
    "Design 'Human-in-the-Loop' AI systems that use visual logic to verify and correct AI predictions before they hit production."
  ],
  modules: [
    {
      id: "LCE-AI-SERVICES-M1",
      title: "The AI Abstraction Layer",
      description: "Moving from manual code to Intelligent Services.",
      sequenceNumber: 1,
      estimatedHours: 10,
      topics: ["LCE-AI-SERVICES-M1-T1", "LCE-AI-SERVICES-M1-T2"],
      prerequisiteModuleIds: [],
      outcomes: [
        "Explain the 'Service-Oriented AI' model (consuming pre-trained models via APIs).",
        "Perform a 'Feasibility Audit' to decide between pre-trained vs. custom-trained models.",
        "Implement a basic 'Sentiment Analysis' flow using a ready-made cognitive service."
      ]
    },
    {
      id: "LCE-AI-SERVICES-M2",
      title: "Vision & Document Intelligence",
      description: "Teaching your app to 'See' and 'Read'.",
      sequenceNumber: 2,
      estimatedHours: 12,
      topics: ["LCE-AI-SERVICES-M2-T1", "LCE-AI-SERVICES-M2-T2"],
      prerequisiteModuleIds: ["LCE-AI-SERVICES-M1"],
      outcomes: [
        "Integrate 'Object Detection' to identify equipment in field-service images.",
        "Master 'OCR' (Optical Character Recognition) to extract structured JSON from flattened PDF invoices.",
        "Implement 'Facial Recognition' (Security) as a second-factor authentication layer."
      ]
    },
    {
      id: "LCE-AI-SERVICES-M3",
      title: "Generative AI & LLM Integration",
      description: "Adding a 'Brain' to your visual application.",
      sequenceNumber: 3,
      estimatedHours: 15,
      topics: ["LCE-AI-SERVICES-M3-T1", "LCE-AI-SERVICES-M3-T2"],
      prerequisiteModuleIds: ["LCE-AI-SERVICES-M2"],
      outcomes: [
        "Connect to 'OpenAI' or 'Anthropic' APIs to build a custom 'Enterprise Chatbot'.",
        "Implement 'Semantic Function' calls where the LLM can trigger low-code actions.",
        "Design 'Structured AI Output' patterns using JSON schema enforcement."
      ]
    },
    {
      id: "LCE-AI-SERVICES-M4",
      title: "RAG: Knowledge Engines for Enterprise",
      description: "Connecting your LLM to your own company data.",
      sequenceNumber: 4,
      estimatedHours: 15,
      topics: ["LCE-AI-SERVICES-M4-T1", "LCE-AI-SERVICES-M4-T2"],
      prerequisiteModuleIds: ["LCE-AI-SERVICES-M3"],
      outcomes: [
        "Understand the 'Embeddings' pipeline—turning text into vector coordinates.",
        "Integrate 'Vector Databases' (Pinecone, Weaviate) to retrieve relevant facts for prompts.",
        "Implement 'Source Citations' to prevent AI hallucinations in business reports."
      ]
    },
    {
      id: "LCE-AI-SERVICES-M5",
      title: "Responsible AI & Governance",
      description: "Securing the future of intelligent low-code.",
      sequenceNumber: 5,
      estimatedHours: 8,
      topics: ["LCE-AI-SERVICES-M5-T1", "LCE-AI-SERVICES-M5-T2"],
      prerequisiteModuleIds: ["LCE-AI-SERVICES-M4"],
      outcomes: [
        "Configure 'Content Safety' filters to prevent toxic AI outputs.",
        "Implement 'PII Redaction'—ensuring no sensitive customer data is sent to external LLMs.",
        "Analyze 'Cost Management'—monitoring token usage to stay within budget."
      ]
    }
  ],
  topics: [
    {
      id: "LCE-AI-SERVICES-M1-T1",
      moduleId: "LCE-AI-SERVICES-M1",
      sequenceNumber: 1,
      title: "Cognitive Services vs. Manual ML",
      estimatedMinutes: 180,
      what: "Cognitive Services are pre-trained AI models offered by cloud providers like Microsoft, AWS, and Google. Instead of training your own neural network with thousands of images, you simply 'Call an API' and send your image. The service returns a JSON list of objects detected (e.g. 'Hard Hat: 99% probability'). This is the true 'Low-Code' way of implementing AI.",
      why: "99% of business problems don't need a custom ML model. They need a fast, reliable, and scalable way to 'See,' 'Listen,' or 'Understand' text. Cognitive services allow any developer to add super-human abilities to their app in minutes, focusing on the 'Application Logic' rather than 'Hyperparameter Tuning.'",
      when: "Select Cognitive Services for standard tasks: Image classification, language translation, document extraction, and speech-to-text. Use custom ML only for unique industrial niche data (e.g. predicting failures in a very specific jet engine turbine).",
      how: "1. Obtain an API Key from Azure AI or AWS Bedrock. 2. Create an 'Integration Service' in your low-code platform. 3. Send the User's Input (e.g. a Microphone recording). 4. Receive and parse the AI's JSON response.",
      ecosystem: "Azure AI Services, AWS Rekognition, Google Cloud Vision, Hugging Face (Inference API).",
      realWorld: "A global construction firm used 'Azure Computer Vision' inside a Mendix mobile app to automatically check if workers were wearing safety gear. Workers took a selfie before entering the site, and the 'Cognitive Service' verified the Hard Hat and High-Vis vest in 2 seconds. This reduced safety incidents by 60% without the firm having to hire a single Data Scientist.",
      useCases: [
        "Building an 'Expense App' that automatically reads paper receipts and fills out the form",
        "Developing a 'Multilingual Customer Support' portal that translates chats in real-time",
        "Creating a 'Moderation System' that automatically hides offensive images in a community forum"
      ],
      advantages: [
        "Speed: Go from 'Idea' to 'AI-Powered App' in a single afternoon.",
        "Cost: Pay-as-you-go pricing—no need to buy expensive GPU servers.",
        "Reliability: Managed by world-class AI teams with 99.9% uptime SLA."
      ],
      disadvantages: [
        "Generalization: Pre-trained models might struggle with very specific industry jargon or low-quality local images."
      ],

      interviewTip: "If asked 'Should we build our own AI model?', answer: 'Not if a Cognitive Service already exists. I prefer to \"Buy\" the commodity (Vision/Speech) so I can \"Build\" the unique business value. Why reinvent the wheel when I can just plug in a world-class engine?'",
      resumeBullet: "Integrated advanced 'Vision-as-a-Service' capabilities into a field-service mobile app, automating safety compliance checks for 1,000+ daily users.",

      videos: [
        { type: "public", title: "Introduction to Azure AI Services", author: "Microsoft Mechanics", views: "300K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Integrating AI in Low-Code", author: "OutSystems Developer Hub", views: "20K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Udacity", rating: 4.8, title: "AI for Business Leaders", instructor: "Google Cloud", enrolled: "50K+", duration: "8 hours", url: "https://www.udacity.com/course/ai-for-business-leaders--nd054" }
      ],
      blogs: [
        { type: "Core", title: "The Low-Code AI Boom", publisher: "MIT Technology Review", readTime: "25 min", url: "https://www.technologyreview.com/2023/04/13/1071424/low-code-ai-software-development/" }
      ],
      scenarios: [
        {
          id: "1.1", difficulty: "Medium", title: "The Blurred Receipt", category: "Error Handling", estimatedTime: "4 hours",
          scenarioDescription: "An employee uploads a very blurry receipt photo. The 'AI Extraction Service' returns a 'Low Confidence (30%)' score for the Total Amount. The app automatically accepts it and pays the employee $10,000 instead of $10.00.",
          problemAnalysis: "This is a 'Trusting the Machine' error. AI is probabilistic, not deterministic. The app should have a 'Confidence Threshold'. If the AI score is < 85%, the app must FLAG the record for manual review and PAUSE the payment workflow.",
          architectureLayers: ["Input Validation Layer", "Confidence Gate Logic", "Human-in-the-Loop Workflow"],
          toolsAndTech: [{ name: "AI Threshold Logic", justification: "By implementing a simple `IF Confidence < 0.85`, we protect the company's finances while still automating 90% of the easy-to-read receipts." }],
          tradeOffs: ["Slightly more manual work for the 10% blurry cases, but prevents 100% of catastrophic financial errors."],
          nfrConsiderations: ["Reliability: Automated payments must have a 0% error rate for high-value transactions."],
          kpis: ["Achieve 100% accuracy in financial data extraction by combining AI with manual gates."],
          keyInsights: "AI is a helper, not the boss. Always verify the 'Low Confidence' results."
        }
      ],
      playgrounds: [
        {
          title: "The Confidence Tester",
          description: "Visualizing the 'Gate' logic.",
          examples: [
            {
              language: "Logic Flow",
              code: "AI_RESULT = Call_Extraction(Image);\nIF (AI_RESULT.Confidence > 0.85)\n  THEN Process_Payment();\n  ELSE ASSIGN_TASK TO Manager(\"Verify this blurred image\");\nEND"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "feat/ai-safety-threshold",
        commitMessage: "feat: implemented confidence-score gating for the AI receipt extraction to prevent incorrect auto-payments",
        files: [{ name: "Logic/AIRouting.oml", type: "file", content: "gate-metadata" }],
        activeFileSnippet: { filename: "AI.md", code: "Threshold: 0.85; Action_If_Low: Escalation_Task;" }
      },
      community: {
        aiSummary: "The smarter the AI, the more you need 'Dumb' logic to govern it. Build thresholds early.",
        solutions: []
      }
    },
    {
      id: "LCE-AI-SERVICES-M3-T1",
      moduleId: "LCE-AI-SERVICES-M3",
      sequenceNumber: 1,
      title: "Generative AI: The LLM Handshake",
      estimatedMinutes: 240,
      what: "Generative AI refers to models (Large Language Models or LLMs) that can create new text, code, or images from a 'Prompt'. In professional LCE, you connect your app to a 'Brain' like GPT-4 or Claude. You send a 'System Prompt' (defining the AI's identity) and 'User Input'. The challenge is 'Context Management'—ensuring the AI only answers based on your company's data, not its general training data.",
      why: "Traditional chatbots were rigid and frustrating. LLM-powered apps can understand 'Context' and 'Nuance.' They can summarize 50-page legal documents in seconds, translate complex technical jargon into simple English, and even suggest next-steps in a workflow. This 'Intelligent Layer' makes your app feel like it has a human soul.",
      when: "Every time your application needs to handle 'Unstructured Data' (Emails, long reports, free-text feedback).",
      how: "1. Create an 'OpenAI REST Connector'. 2. Write the 'System Message' (e.g. 'You are a helpful HR Assistant'). 3. Send the 'Conversation History' to maintain context. 4. Parse the AI's response and display it in a 'Chat-UI' widget.",
      ecosystem: "OpenAI API, Anthropic Claude, LangChain (Conceptual), Vector Databases.",
      realWorld: "A major insurance firm built a Mendix portal that analyzed 'Claim Descriptions'. When a customer described their accident in 500 words, the 'LLM Integration' automatically extracted the 'Location,' 'Date,' and 'Damage Severity,' filling out 80% of the claim form instantly. This reduced 'Time-to-File' from 30 minutes to 3 minutes, significantly increasing customer satisfaction during a crisis.",
      useCases: [
        "Building an 'Email Autoreply' that drafts responses for customer service agents to review",
        "Developing a 'Code Converter' tool that explains legacy COBOL logic in plain English",
        "Creating a 'Meeting Summarizer' that turns raw notes into action items and stores them in the DB"
      ],
      advantages: [
        "Human-Level Understanding: Can parse complex, messy text better than any hard-coded logic.",
        "Flexibility: One AI engine can handle 100 different tasks just by changing the 'Prompt'.",
        "Speed: Summarizes thousands of pages of data in sub-millisecond speeds."
      ],
      disadvantages: [
        "Hallucinations: AI can confidently state 'Facts' that are completely false unless constrained by RAG logic.",
        "Cost: High-end LLM models charge per 'Token' (roughly every 0.75 words)."
      ],

      interviewTip: "If asked 'How do you stop an AI from lying?', answer: 'I use a pattern called \"Retrieval-Augmented Generation\" (RAG). I don't ask the AI to remember things; I \"Feed\" it the correct documents in the prompt and tell it to \"Only use this information.\" This grounds the AI in reality.'",
      resumeBullet: "Engineered an intelligent Generative AI integration for an enterprise knowledge-base app, achieving 95% accuracy in automated document summarization.",

      videos: [
        { type: "public", title: "LLM Basics: What is a Transformer?", author: "3Blue1Brown", views: "2M views", duration: "18:45", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "OpenAI API Tutorial for Beginners", author: "FreeCodeCamp", views: "500K views", duration: "1:20:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "DeepLearning.AI", rating: 4.9, title: "Generative AI for Everyone", instructor: "Andrew Ng", enrolled: "500K+", duration: "6 hours", url: "https://www.deeplearning.ai/courses/generative-ai-for-everyone/" }
      ],
      blogs: [
        { type: "Technical", title: "The RAG Architecture for Enterprise", publisher: "Pinecone Blog", readTime: "30 min", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/" }
      ],
      scenarios: [
        {
          id: "3.1", difficulty: "Hard", title: "The Secret Leak", category: "Security", estimatedTime: "6 hours",
          scenarioDescription: "A developer builds a 'Marketing Generator' that sends all new product descriptions to OpenAI to create social media posts. The product descriptions contain 'Secret Launch Dates' and 'Pricing Strategies' that shouldn't be public yet. OpenAI might use this data to train its next model.",
          problemAnalysis: "This is a 'Data Sovereignty' failure. You should never send 'Top Secret' PII or Proprietary data to a 'Public' LLM. The solution is to use 'Enterprise Subscriptions' (which guarantee data privacy) or implement 1. A 'Redaction Workflow' (hiding dates/specific names before sending) or 2. Using a 'Local/Private' LLM instance on Azure or AWS.",
          architectureLayers: ["PII Scanner Logic", "Data Redaction Layer", "Enterprise API Tunnel"],
          toolsAndTech: [{ name: "Azure OpenAI (Enterprise)", justification: "Azure guarantees that the data you send to their OpenAI instance is NOT used to train the global model, ensuring enterprise-grade privacy and compliance." }],
          tradeOffs: ["A bit more expensive than a personal account, but the only legal way to handle corporate data."],
          nfrConsiderations: ["Privacy: zero data leakage into public training sets."],
          kpis: ["Achieve 100% compliance with corporate Data Sovereignty policies."],
          keyInsights: "Your prompt is your data. Protect it accordingly."
        }
      ],
      playgrounds: [
        {
          title: "The Redaction simulator",
          description: "Cleaning the context before sending.",
          examples: [
            {
              language: "Logic Config",
              code: "RAW = \"Launch date is Dec 12, code is 44x\";\nCLEAN = Regex_Replace(RAW, \"\\d{2}\", \"[REDACTED]\");\nSend_To_AI(CLEAN);"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "security/ai-data-privacy-redactor",
        commitMessage: "security: implemented Regex-based PII redaction for all outgoing LLM requests to ensure GDPR compliance",
        files: [{ name: "Logic/PIIFilter.oml", type: "file", content: "regex-logic" }],
        activeFileSnippet: { filename: "Privacy.md", code: "Filter: Email, CC_Number, Date; Replacement: [HIDDEN];" }
      },
      community: {
        aiSummary: "The 'Prompt' is the new 'Source Code'. Version it, test it, and secure it.",
        solutions: []
      }
    }
  ],
  videoCount: 520,
  articleCount: 360,
  problemCount: 230,
  capstoneProject: {
    title: "THE INTELLIGENT ENTERPRISE ADVISOR",
    description: "In this mastery project, you will architect the 'Brain' of a corporate internal tool. You will choose a complex domain—such as 'Legal Compliance,' 'Financial Risk,' or 'Technical Support'. You will build a system that: 1. Uses 'OCR' to read incoming PDFs and extracts metadata. 2. Uses a 'Vector Database' to search for relevant company laws/policies. 3. Sends a 'High-Context Prompt' to an LLM (using RAG) to generate a summary of whether the document is 'Compliant' or 'Risky'. 4. Implements a 'Confidence Trigger'—if the AI is unsure, it automatically generates a Task for a human Lawyer in the low-code portal. Finally, you will customize the 'System Prompt' to ensure the AI speaks in a professional corporate tone. This project proves you can engineer a multi-layered AI system that brings super-human intelligence to standard business processes.",
    estimatedDays: 14,
    skillsFocused: [
      "Multi-service Cognitive AI Orchestration",
      "Production-Grade RAG (Retrieval-Augmented Generation)",
      "Prompt Engineering & Context Management",
      "AI Confidence Gating & Human-in-the-Loop",
      "AI Privacy & Enterprise Data Sovereignty"
    ],
    steps: [
      {
        title: "Phase 1: The Vision & Extraction",
        description: "Configure the OCR service to extract structured fields from raw business documents."
      },
      {
        title: "Phase 2: The Knowledge Bridge",
        description: "Implement the Vector Search logic that retrieves policy documents from your internal database."
      },
      {
        title: "Phase 3: The LLM Brain",
        description: "Develop the RAG workflow that combines the extracted data + policies into an intelligent summary."
      },
      {
        title: "Phase 4: Safety & Deployment",
        description: "Implement the PII redaction layer and the confidence-threshold gating for human verification."
      }
    ]
  },
  totalEstimatedHours: 110,
  estimatedCompletionDays: 30,
  moduleCount: 5,
  createdAt: "2026-02-28T00:00:00Z",
  updatedAt: "2026-02-28T00:00:00Z",
  version: "1.0",
  status: "published"
};