import { CourseEnhanced } from './types';

export const nceAiSvc: CourseEnhanced = {
    id: "NCE-AI-SVC",
    titleKey: "courses.nceAiSvc",
    descKey: "courses.nceAiSvcDesc",
    icon: "🤖",
    duration: "3 weeks",
    languages: ["Prompt Engineering", "JSON", "Python (Conceptual)", "Vector Embeddings", "API configuration"],
    category: "no-code",
    programIds: ["NCE-AI", "NCE-APP", "NCE-ENTERPRISE"],
    trackId: "nce",
    level: "beginner",
    prerequisites: ["NCE-FOUND", "NCE-DATABASE", "NCE-AUTOMATE"],
    targetAudience: "Product builders, innovators, and citizen developers who want to harness the power of Large Language Models (LLMs) and Generative AI to create 'Intelligent' applications without writing machine learning code.",
    learningOutcomes: [
        "Master the art of 'System Prompting' to control LLM behavior consistently within no-code applications",
        "Architect RAG (Retrieval-Augmented Generation) pipelines using visual builders and Vector Databases like Pinecone",
        "Configure automated AI workflows that perform sentiment analysis, data extraction, and content generation",
        "Implement 'AI Agents' using tools like LangChain (Visual) or Flowise to perform multi-step reasoning tasks",
        "Calculate and optimize AI operational costs (Tokens/API calls) and implement safety guardrails against 'Hallucinations'"
    ],
    modules: [
        {
            id: "NCE-AI-SVC-M1",
            title: "The AI Abstraction: Prompt Engineering for Apps",
            description: "Moving from 'Chatting' to 'Engineering' with Large Language Models.",
            sequenceNumber: 1,
            estimatedHours: 10,
            topics: ["NCE-AI-SVC-M1-T1", "NCE-AI-SVC-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Construct 'Few-Shot' prompts that provide examples to the AI for consistent output",
                "Explain the difference between Temperature, Top-P, and Max Tokens in a visual UI",
                "Implement 'Output Parsing' to force the AI to return clean JSON for your app to process"
            ]
        },
        {
            id: "NCE-AI-SVC-M2",
            title: "The AI Connector: Connecting Brains to Apps",
            description: "Integrating OpenAI, Anthropic, and Google Gemini into your no-code stack.",
            sequenceNumber: 2,
            estimatedHours: 12,
            topics: ["NCE-AI-SVC-M2-T1", "NCE-AI-SVC-M2-T2"],
            prerequisiteModuleIds: ["NCE-AI-SVC-M1"],
            outcomes: [
                "Configure the 'API Connector' to send user inputs to an LLM and receive structured data",
                "Master 'Streaming' responses to improve perceived UI speed for long AI generations",
                "Implement 'Image Generation' (DALL-E/Midjourney) workflows within a web app"
            ]
        },
        {
            id: "NCE-AI-SVC-M3",
            title: "RAG & Vector Memory: Giving AI your Data",
            description: "Retrieval-Augmented Generation without writing a line of Python.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["NCE-AI-SVC-M3-T1", "NCE-AI-SVC-M3-T2"],
            prerequisiteModuleIds: ["NCE-AI-SVC-M2"],
            outcomes: [
                "Explain how 'Embeddings' turn text into mathematical coordinates for search",
                "Connect a No-Code app to a Vector Database (Pinecone/Weaviate) to store 'Long-term Memory'",
                "Build a custom 'Chat with your Docs' feature for a internal company knowledge base"
            ]
        },
        {
            id: "NCE-AI-SVC-M4",
            title: "Visual AI Agents & Autonomous Flows",
            description: "Building software that 'Thinks' and 'Acts' on behalf of the user.",
            sequenceNumber: 4,
            estimatedHours: 10,
            topics: ["NCE-AI-SVC-M4-T1", "NCE-AI-SVC-M4-T2"],
            prerequisiteModuleIds: ["NCE-AI-SVC-M3"],
            outcomes: [
                "Design 'Agentic Workflows' where the AI decides which tool to use (e.g., Search the web vs. Calculate math)",
                "Build a 'Customer Support Bot' that can look up orders and issue refunds autonomously",
                "Understand the 'Loop' architecture of agents and how to prevent 'Infinite Cost Loops'"
            ]
        },
        {
            id: "NCE-AI-SVC-M5",
            title: "AI Governance: Security, Bias, and ROI",
            description: "Shipping AI products that are safe, ethical, and profitable.",
            sequenceNumber: 5,
            estimatedHours: 8,
            topics: ["NCE-AI-SVC-M5-T1", "NCE-AI-SVC-M5-T2"],
            prerequisiteModuleIds: ["NCE-AI-SVC-M4"],
            outcomes: [
                "Implement 'Prompt Injection' defenses to prevent users from 'Jailbreaking' your AI app",
                "Monitor and log Token usage to predict monthly cloud costs precisely",
                "Perform a 'Bias Audit' on AI-generated content to ensure brand safety"
            ]
        }
    ],
    topics: [
        {
            id: "NCE-AI-SVC-M1-T1",
            moduleId: "NCE-AI-SVC-M1",
            sequenceNumber: 1,
            title: "System Prompting: Building the AI Persona",
            estimatedMinutes: 180,
            what: "System Prompting is the 'Invisible Instruction' given to an AI before the user ever types a word. In a no-code app, this is where you define the AI's identity (e.g., 'You are a professional legal assistant specialized in GDPR'). It sets the boundaries and tone for all future interactions.",
            why: "If you just give an LLM an empty chat box, it behaves like a generalist, which is useless for a specific business app. By 'Engineering' the system prompt, you ensure the AI doesn't talk about recipes if it's supposed to be a tax calculator. This is the difference between a 'Toy' and a 'Tool'.",
            when: "Every time you build an AI-powered feature (Chatbot, Data Extractor, Content Generator).",
            how: "1. Define the 'Role' (Who are you?). 2. Define the 'Context' (What data do you have?). 3. Define the 'Format' (How should you reply? e.g., 'Always reply in JSON'). 4. Define the 'Negative Constraints' (What should you NOT do?).",
            ecosystem: "OpenAI (GPT-4), Anthropic (Claude-3), Google (Gemini Pro), Groq (for speed).",
            realWorld: "A major medical portal uses a system prompt that explicitly forbids the AI from giving 'Diagnosis'. Instead, the AI is engineered to 'Summarize patient symptoms for the doctor'. This prompt engineering reduces liability and ensures the AI stays within its professional boundary.",
            useCases: [
                "Designing a 'Ghost Writer' that adapts to a specific brand's tone and style",
                "Building a 'Code Reviewer' no-code tool that only looks for security vulnerabilities",
                "Developing a 'Language Tutor' that only replies in the target language and corrects grammar"
            ],
            advantages: [
                "Control: Ensure the AI behaves predictably for all users",
                "Format: Force the AI to return data that your app can actually use (JSON)",
                "Safety: Prevent the AI from talking about sensitive or off-brand topics"
            ],
            disadvantages: [
                "Fragility: Small changes in the prompt can sometimes lead to unexpected behavior changes"
            ],

            interviewTip: "If asked 'How do you make an AI consistent?', answer: 'I use Few-Shot Prompting and strict System Instructions. By providing 3-5 examples of the \"Perfect Answer\" inside the prompt, I reduce hallucinations and ensure the output format remains valid for my no-code database.'",
            resumeBullet: "Engineered high-fidelity system prompts for a fleet of AI agents, reducing hallucination rates by 60% through structured Chain-of-Thought prompting.",

            videos: [
                { type: "public", title: "Prompt Engineering for Beginners", author: "DeepLearning.AI", views: "1M views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "OpenAI System Prompts Explained", author: "OpenAI Developer", views: "200K views", duration: "18:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Coursera", rating: 4.9, title: "ChatGPT Prompt Engineering for Developers", instructor: "Andrew Ng", enrolled: "500K+", duration: "5 hours", url: "https://www.coursera.org/learn/chatgpt-prompt-engineering-for-developers" }
            ],
            blogs: [
                { type: "Technical", title: "The Art of the System Prompt", publisher: "Anthropic Blog", readTime: "25 min", url: "https://www.anthropic.com/blog/the-art-of-the-system-prompt" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Chatty Assistant", category: "Prompt Engineering", estimatedTime: "4 hours",
                    scenarioDescription: "A company builds an AI 'Invoice Extractor'. The user uploads a photo of an invoice, and the AI is supposed to return the 'Total Amount'. Instead, the AI replies: 'Sure! I see an invoice here from ABC Corp. The total seems to be $500. Let me know if you need anything else!' This breaks the app because the app was expecting a number, not a paragraph.",
                    problemAnalysis: "This is a 'Format Enforcement' failure. The AI is in 'Chat Mode'. To fix this, we must update the System Prompt to say: 'You are a data extraction engine. You MUST ONLY return the numeric total. Do not provide conversational filler. Output format: JSON { \"total\": 500 }'.",
                    architectureLayers: ["Prompt Logic Layer", "Output Parsing Layer", "Data Ingest Layer"],
                    toolsAndTech: [{ name: "JSON Mode (OpenAI)", justification: "By enabling 'JSON Mode' in the API configuration and updating the prompt, we guarantee that the AI's response can be parsed by the no-code builder's JSON module. This transforms the 'Speech' into 'Data' that the app can use to update a database." }],
                    tradeOffs: ["JSON mode uses slightly more tokens for the braces/quotes but is 100% more reliable for software integration."],
                    nfrConsiderations: ["Reliability: 100% of responses must be valid JSON."],
                    kpis: ["Achieve a 0% failure rate in the 'Invoice Total' database update step."],
                    keyInsights: "Don't treat AI like a person; treat it like a function that returns data."
                }
            ],
            playgrounds: [
                {
                    title: "The Prompt Builder",
                    description: "Visualizing System vs. User roles.",
                    examples: [
                        {
                            language: "JSON (API Payload)",
                            code: "[\n  { \"role\": \"system\", \"content\": \"You are a JSON extractor. Only return JSON objects.\" },\n  { \"role\": \"user\", \"content\": \"Extract the date from this email: 'See you on Tuesday, Jan 5th'\" }\n]"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "ai/prompt-v2",
                commitMessage: "ai: refactored system prompts to include XML-tagging for more reliable output parsing in the visual builder",
                files: [{ name: "Prompts/LegalBot.txt", type: "file", content: "system prompt" }],
                activeFileSnippet: { filename: "Prompt.md", code: "ROLE: Legal Analyst; CONSTRAINT: No medical advice; FORMAT: <answer></answer>" }
            },
            community: {
                aiSummary: "The better you define the 'Box', the better the AI performs inside it. Vague prompts lead to vague apps.",
                solutions: []
            }
        },
        {
            id: "NCE-AI-SVC-M3-T1",
            moduleId: "NCE-AI-SVC-M3",
            sequenceNumber: 1,
            title: "RAG: Giving AI Access to Your Documents",
            estimatedMinutes: 240,
            what: "Retrieval-Augmented Generation (RAG) is a technique where you search your own documents (PDFs, Databases) for relevant information and 'Insert' that info into the AI's prompt before it replies. This allows the AI to answer questions about 'Your Company's HR Policy' or 'Your specific Real Estate Listings' without having to retrain the model.",
            why: "Standard AI only knows things up to its training date (e.g., late 2023). It doesn't know what happened in your company meeting this morning. RAG allows you to build 'Context-Aware' apps that are 100% accurate because they are 'Looking at the source' before they speak.",
            when: "Every time you build a 'Chat with your PDF', a custom FAQ bot, or a research assistant.",
            how: "1. Upload documents to a 'Vector Database'. 2. When a user asks a question, search the Vector DB for matching 'Chunks'. 3. Pass those chunks to the LLM. 4. Say: 'Use ONLY the provided text below to answer the user's question.'",
            ecosystem: "Vector DBs: Pinecone, Weaviate, Supabase (pgvector). Orchestration: Flowise, LangFlow (No-code visual builders for RAG).",
            realWorld: "A major construction engineering firm has 50,000 pages of 'Safety Manuals'. They built a RAG chatbot for field workers. When a worker asks 'What is the torque for a Grade 8 bolt?', the app searches 50,000 pages in 0.5 seconds, finds page 402, and tells the worker: 'According to Manual B, it is 120 ft-lbs'. This prevents human error and saves hours of manual searching.",
            useCases: [
                "Building an AI Support Bot for a company with 1,000+ niche products",
                "Developing a 'Thesis Assistant' that helps students find citations in their own local research library",
                "Architecting a 'Legal Discovery' tool that summarizes 5,000 court documents for a case"
            ],
            advantages: [
                "Accuracy: Drastically reduces hallucinations because the AI 'Has the Book' open",
                "Privacy: Your data stays in your vector database, not in the LLM's public brain",
                "Scale: Can handle millions of pages of information instantly"
            ],
            disadvantages: [
                "Complexity: Requires setting up an 'Embedding' pipeline to chunk and index data"
            ],

            interviewTip: "If asked 'How is RAG better than fine-tuning?', answer: 'RAG is better for dynamic data. If an HR policy changes at 9 AM, the RAG bot knows at 9:01 AM. Fine-tuning an AI takes hours or days and costs 100x more for the same result.'",
            resumeBullet: "Architected a visual RAG pipeline using Pinecone and Flowise, enabling an AI chatbot to query 10,000 corporate documents with 98% retrieval accuracy.",

            videos: [
                { type: "public", title: "RAG Explained in 5 Minutes", author: "IBM Technology", views: "2M views", duration: "05:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Building a Chat-with-PDF App without Code", author: "No-Code Arcade", views: "40K views", duration: "25:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "DeepLearning.AI", rating: 4.8, title: "LangChain for LLM Application Development", instructor: "Harrison Chase", enrolled: "200K+", duration: "8 hours", url: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/" }
            ],
            blogs: [
                { type: "Core", title: "The RAG Revolution", publisher: "Pinecone Blog", readTime: "30 min", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/" }
            ],
            scenarios: [
                {
                    id: "3.1", difficulty: "Expert", title: "The Outdated Knowledge Base", category: "AI Architecture", estimatedTime: "8 hours",
                    scenarioDescription: "A tech company has a 'Help Center' built in Zendesk. Their AI bot is giving people 'Old Instructions' because the bot was trained 6 months ago, but the software changed 2 weeks ago. Customers are angry because the bot is telling them to click buttons that don't exist anymore.",
                    problemAnalysis: "This is a 'Knowledge Latency' problem. Training/Fine-tuning is too slow for software that moves fast. The solution is to move to a RAG architecture. Every time a Help Article is updated in Zendesk, a Make.com automation should 'Chunk' it and update the Pinecone Vector Database instantly. The bot will then always pull the 'Fresh' version.",
                    architectureLayers: ["Data Ingest Pipeline (Make.com)", "Vector Storage Layer (Pinecone)", "Inquiry Retrieval Layer (Semantic Search)"],
                    toolsAndTech: [{ name: "Flowise + Pinecone", justification: "By using Flowise, we can visually map the RAG 'Chain'. We connect the user's question to a 'Vector Store Retriever' which pulls only the 3 most relevant paragraphs. This ensures the AI always has the 'Latest Truth' and eliminates the need for expensive re-training." }],
                    tradeOffs: ["Setting up the vector index and update automation is more complex but ensures the bot is never 'Wrong' due to outdated info."],
                    nfrConsiderations: ["Latency: Semantic search + AI reply must happen in under 3 seconds."],
                    kpis: ["Achieve a 100% reduction in 'Outdated Software' complaints from AI-handled tickets."],
                    keyInsights: "Don't train the AI; give the AI a searchable library."
                }
            ],
            playgrounds: [
                {
                    title: "The Vector Map",
                    description: "Visualizing semantic similarity.",
                    examples: [
                        {
                            language: "Logic Config (Flowise)",
                            code: "Node[User Question] -> Node[OpenAI Embeddings] -> Node[Pinecone Store] -> Node[Top 3 Chunks] -> Node[LLM Prompt]"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "ai/vector-sync",
                commitMessage: "ai: implemented automated vector indexing for new helpdesk articles using Make.com webhooks",
                files: [{ name: "AI/FlowMap.png", type: "file", content: "rag diagram" }],
                activeFileSnippet: { filename: "RAG_Config.md", code: "Index: HelpArticles; ChunkSize: 512; Overlap: 20;" }
            },
            community: {
                aiSummary: "RAG is the bridge between a genius AI and your private business data. It is the most valuable skill in AI Engineering today.",
                solutions: []
            }
        }
    ],
    videoCount: 450,
    articleCount: 310,
    problemCount: 210,
    capstoneProject: {
        title: "The Intelligent Enterprise Brain",
        description: "You will build a professional-grade 'Knowledge Portal' for a large corporation. First, you'll set up an automated pipeline that ingest PDF documents, 'Chunks' them into semantic units, and stores them in a Pinecone Vector Database. Next, you will build a visual 'RAG Chain' in Flowise that retrieves relevant policy information based on user questions. You will implement a 'Safety Guardrail' that forces the AI to cite specific page numbers and refuse to answer if the information isn't in your database. Next, you will integrate an 'Agentic' feature that allows the AI to 'Book a Meeting' with an HR representative via a Google Calendar API call if it cannot find the answer in the documents. Finally, you will design a 'Cost Dashboard' in Bubble that monitors token usage and estimates monthly billing for the enterprise. This project proves you can architect advanced, secure, and context-aware AI solutions for the modern workforce without writing code.",
        estimatedDays: 14,
        skillsFocused: [
            "No-Code RAG Architecture (Flowise/LangFlow)",
            "Vector Database Engineering (Pinecone)",
            "System Prompting & Hallucination Mitigation",
            "API Orchestration & Agentic Tools",
            "Cost Monitoring & Governance"
        ],
        steps: [
            {
                title: "Phase 1: The Vector Foundation",
                description: "Configure the embedding pipeline and index the corporate document library into Pinecone."
            },
            {
                title: "Phase 2: The Neural Chain",
                description: "Build the visual RAG chain in Flowise, connecting the vector search to a GPT-4 or Claude-3 brain."
            },
            {
                title: "Phase 3: The Tooling Layer",
                description: "Configure 'Function Calling' that allows the AI to interact with the Calendar API when context is missing."
            },
            {
                title: "Phase 4: The Security Audit",
                description: "Implement 'Adversarial Prompting' to test your guardrails and set up the cost-monitoring dashboard."
            }
        ]
    },
    totalEstimatedHours: 80,
    estimatedCompletionDays: 30,
    moduleCount: 5,
    createdAt: "2026-02-28T00:00:00Z",
    updatedAt: "2026-02-28T00:00:00Z",
    version: "1.0",
    status: "published"
};
