import { CourseEnhanced } from './types';

export const hceAiNative101: CourseEnhanced = {
    id: "HCE AINATIVE 101",
    titleKey: "courses.hceAiNative101",
    descKey: "courses.hceAiNative101Desc",
    icon: "🧠",
    duration: "6 weeks",
    languages: ["Python", "TypeScript", "JSON", "Markdown"],
    category: "high-code",
    programIds: ["HCE AI", "HCE FULL"],
    trackId: "hce",
    level: "advanced",
    prerequisites: ["HCE BACK 201", "HCE AI 101"],
    targetAudience: "Advanced engineers preparing to shift from deterministic coding to orchestrating non-deterministic AI agents and integrating Generative AI into core system logic.",
    learningOutcomes: [
        "Architect sophisticated LLM applications using LangChain, LlamaIndex, and LangGraph",
        "Engineer programmatic prompts that yield deterministic, parseable, and high-quality outputs",
        "Master the complete RAG lifecycle: from raw data ingestion to evaluation via Ragas",
        "Develop autonomous AI Agents capable of tool-execution, self-correction, and planning",
        "Implement and deploy specialized open-weights models (Llama 3, Mistral) via native fine-tuning"
    ],
    modules: [
        {
            id: "HCE-AINATIVE-101-M1",
            title: "Prompt Engineering & Programmatic LLMs",
            description: "Treating natural language as a structured API.",
            sequenceNumber: 1,
            estimatedHours: 10,
            topics: ["HCE-AINATIVE-101-M1-T1", "HCE-AINATIVE-101-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Implement Few-Shot, Chain-of-Thought, and ReAct prompting patterns",
                "Enforce strict JSON schema outputs using Pydantic and Instructor",
                "Manage complex Context Windows using dynamic token-truncation algorithms"
            ]
        },
        {
            id: "HCE-AINATIVE-101-M2",
            title: "Embeddings, Vectors & Semantic Memory",
            description: "Building the infrastructure for meaning-based search.",
            sequenceNumber: 2,
            estimatedHours: 12,
            topics: ["HCE-AINATIVE-101-M2-T1", "HCE-AINATIVE-101-M2-T2"],
            prerequisiteModuleIds: ["HCE-AINATIVE-101-M1"],
            outcomes: [
                "Generate and store high-dimensional text embeddings in Pinecone or ChromaBD",
                "Implement advanced chunking strategies (Recursive, Semantic, Parent-Document)",
                "Design Hybrid Search systems combining Keyword BM25 and Vector Cosine Similarity"
            ]
        },
        {
            id: "HCE-AINATIVE-101-M3",
            title: "Advanced RAG Pipelines & Evaluation",
            description: "Connecting enterprise truth to the reasoning engine.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["HCE-AINATIVE-101-M3-T1", "HCE-AINATIVE-101-M3-T2"],
            prerequisiteModuleIds: ["HCE-AINATIVE-101-M2"],
            outcomes: [
                "Architect multi-stage RAG flows with Query Transformation and Re-ranking",
                "Evaluate RAG accuracy quantitatively using Faithfulness and Relevance metrics",
                "Build enterprise-grade Knowledge Graphs to ground LLMs in structured facts"
            ]
        },
        {
            id: "HCE-AINATIVE-101-M4",
            title: "Agentic Engineering & Tool Integration",
            description: "Transitioning from Chatbots to Autonomous Workers.",
            sequenceNumber: 4,
            estimatedHours: 15,
            topics: ["HCE-AINATIVE-101-M4-T1", "HCE-AINATIVE-101-M4-T2"],
            prerequisiteModuleIds: ["HCE-AINATIVE-101-M3"],
            outcomes: [
                "Author strictly-typed JSON Schema tools for LLM Function Calling",
                "Design multi-agent systems using LangGraph for complex task decomposition",
                "Implement Human-in-the-Loop patterns for sensitive AI tool executions"
            ]
        },
        {
            id: "HCE-AINATIVE-101-M5",
            title: "Custom Models: Fine-Tuning & Local Ops",
            description: "Taking full ownership of the AI backbone.",
            sequenceNumber: 5,
            estimatedHours: 13,
            topics: ["HCE-AINATIVE-101-M5-T1", "HCE-AINATIVE-101-M5-T2"],
            prerequisiteModuleIds: ["HCE-AINATIVE-101-M4"],
            outcomes: [
                "Execute Parameter-Efficient Fine-Tuning (PEFT) on Llama-3/Mistral models",
                "Deploy optimized locally-hosted models using Ollama, vLLM, and Docker",
                "Optimize inference latency using quantization (GGUF, GPTQ) and KV-caching"
            ]
        }
    ],
    topics: [
        {
            id: "HCE-AINATIVE-101-M1-T1",
            moduleId: "HCE-AINATIVE-101-M1",
            sequenceNumber: 1,
            title: "The Prompt Engineering API",
            estimatedMinutes: 240,
            what: "Prompt Engineering is the discipline of crafting structured text inputs to Large Language Models (LLMs) to ensure the outputs are reliable, accurate, and parseable by computer programs. In an 'AI-Native' workflow, a prompt isn't just a question; it is a 'Program' written in natural language that tells the model exactly how to think, what data to prioritize, and what format to return (e.g., a specific JSON schema).",
            why: "LLMs are non-deterministic—the same input can produce different outputs. If you are building a production app, you can't have your UI break because the LLM decided to use bullet points instead of a list. Prompt Engineering uses techniques like 'Few-Shot' (giving examples) and 'Chain-of-Thought' (telling the model to think step-by-step) to force the model into a deterministic, reliable behavior suitable for enterprise software.",
            when: "Every time a software system communicates with an AI model. It is the new 'Integration Layer' between humans, data, and machines.",
            how: "Define a 'System Prompt' to set the persona. Use 'Few-Shot' examples to demonstrate the desired output format. Implement 'Output Parsing' using libraries like Pydantic or Instructor to catch and fix malformed JSON automatically. Use 'Dynamic Variables' to inject real-time data into the prompt template.",
            ecosystem: "OpenAI API, Anthropic Claude, LangChain, Pydantic, Instructor, Promptfoo (for testing).",
            realWorld: "At companies like Intercom, AI-native engineers don't just 'ask' the AI to answer a customer. They have a 2,000-word system prompt that includes the company's tone of voice, a list of forbidden words, and five examples of 'Perfect Conversations'. This ensures that the AI feels like a real employee, not a generic chatbot.",
            useCases: [
                "Forcing an LLM to output valid SQL queries based on a database schema",
                "Extracting structured 'Invoice Data' (Date, Amount, Vendor) from messy OCR text",
                "Building a 'Code-Reviewer' that only comments on security vulnerabilities in a specific format"
            ],
            advantages: [
                "Reliability: Converts 'Chaotic' AI output into 'Structured' data that your database can store",
                "Programmability: Allows developers to guide the 'Reasoning' of the model through explicit logic",
                "Cost-Efficiency: Well-crafted prompts generate correct answers the first time, reducing expensive API retries"
            ],
            disadvantages: [
                "Prompt Drift: New model versions (like GPT-4 vs GPT-4o) might interpret the same prompt differently",
                "Latency: Longer, more structured prompts (especially with many examples) take longer to process"
            ],

            interviewTip: "If asked 'How do you prevent hallucinations?', mention 'Grounding' and 'Systemic Formatting'. Explain that you provide the LLM with the 'Truth' (the document) and tell it: 'If the answer is not in the text, say NO DATA. Do not use your own knowledge'. This shows you prioritize accuracy over 'creative' answers.",
            resumeBullet: "Engineered production prompt templates utilizing Chain-of-Thought and Few-Shot prompting, increasing JSON output accuracy from 65% to 99% for mission-critical data extraction pipelines.",

            videos: [
                { type: "public", title: "ChatGPT Prompt Engineering for Developers", author: "Andrew Ng / OpenAI", views: "2M views", duration: "1:30:00", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" },
                { type: "public", title: "Advanced Prompting Patterns", author: "Codedamn", views: "100K views", duration: "25:40", url: "https://www.youtube.com/watch?v=XvSIn0V8rX4" }
            ],
            moocs: [
                { platform: "Coursera", rating: 4.9, title: "Generative AI with Large Language Models", instructor: "DeepLearning.AI", enrolled: "200K+", duration: "30 hours", url: "https://www.coursera.org/learn/generative-ai-with-llms" }
            ],
            blogs: [
                { type: "Core", title: "Prompt Engineering Guide", publisher: "DAIR.AI", readTime: "4 hours", url: "https://www.promptingguide.ai/" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The JSON Meltdown", category: "Output Validation", estimatedTime: "3 hours",
                    scenarioDescription: "An AI agent is supposed to output a JSON list of products. 10% of the time, it adds conversational text like 'Sure! Here are the products:' at the beginning, causing the backend `JSON.parse()` to crash the whole app.",
                    problemAnalysis: "The LLM is 'Leaking' natural language into a programmatic interface. We are missing an 'Output Guardrail' and a sufficiently strict 'System Prompt'.",
                    architectureLayers: ["Prompt Template Layer", "LLM Inference Layer", "Schema Validation Layer (Pydantic)"],
                    toolsAndTech: [{ name: "Pydantic & instructor", justification: "By using the 'Instructor' library, we force the LLM to use the 'Tools' or 'JSON Mode' API features. If the model still fails, Pydantic's validation error triggers an automatic 'Re-try' prompt to the model, telling it exactly where it made a formatting error so it can fix itself automatically." }],
                    tradeOffs: ["Retries increase latency and cost; it's better to invest in a stronger initial prompt."],
                    nfrConsiderations: ["Robustness: Zero application crashes due to malformed AI responses."],
                    kpis: ["Achieve 100% valid JSON parsing across 10,000 consecutive API calls."],
                    keyInsights: "AI-native engineering is about building 'Deterministic Wrappers' around 'Non-Deterministic Engines'."
                }
            ],
            playgrounds: [
                {
                    title: "The Programmatic Prompt",
                    description: "Forcing an LLM to be an JSON API with Python.",
                    examples: [
                        {
                            language: "python",
                            code: "import instructor\nfrom pydantic import BaseModel\nfrom openai import OpenAI\n\n# 1. Define the 'Contract'\nclass UserProfile(BaseModel):\n    name: str\n    age: int\n    skills: list[str]\n\n# 2. Patch the client to handle validation\nclient = instructor.patch(OpenAI())\n\n# 3. Call the model with a strict 'Response Model'\nuser = client.chat.completions.create(\n    model=\"gpt-4\",\n    response_model=UserProfile,\n    messages=[{\"role\": \"user\", \"content\": \"Extract data: John is 25, loves Python and AI\"}]\n)\n\nprint(user.skills) # ['Python', 'AI']"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "feat/llm-validation",
                commitMessage: "feat: implemented Pydantic-based output validation for the CV-parsing pipeline, eliminating 99% of JSON parsing errors",
                files: [{ name: "agents/parser.py", type: "file", content: "validation logic" }],
                activeFileSnippet: { filename: "parser.py", code: "try:\n    response = client.chat.completions.create(response_model=MySchema, ...)\nexcept ValidationError as e:\n    # Auto-healing logic here" }
            },
            community: {
                aiSummary: "The 'System Prompt' is your source code. Treat it with the same respect as C++ or Python. Version it, test it, and never assume the model 'Just Understood' what you meant.",
                solutions: []
            }
        },
        {
            id: "HCE-AINATIVE-101-M4-T1",
            moduleId: "HCE-AINATIVE-101-M4",
            sequenceNumber: 1,
            title: "Agentic Tool Use (Function Calling)",
            estimatedMinutes: 240,
            what: "Agentic Tool Use (often called 'Function Calling') is the ability of an LLM to proactively select and utilize external tools—like searching a database, browsing the web, or calling an internal API—to complete a complex task. The LLM doesn't just chat; it generates a structured 'Request' (JSON) that your code executes, and the results are fed back to the LLM to inform its next step.",
            why: "An LLM's knowledge is static and cut off from the live world. Tool-use turns the LLM into a 'Coordinator'. If you ask 'What is my current bank balance?', the LLM realizes it doesn't know, 'Decides' to call the `get_balance(user_id)` tool, receives the real-time data from your database, and then summarizes the answer for you. This is the foundation of Autonomous Agents.",
            when: "Whenever an AI needs to interact with your company's private data, perform math accurately (using a calculator tool), or execute actions (like 'Send Email') instead of just talking about it.",
            how: "Define your Python/TS functions. Describe them in JSON Schema format (Metadata). Pass these descriptions to the LLM. If the LLM returns a `tool_call`, extract the name and arguments, execute the actual code in your backend, and send the result back to the model as a 'tool' role message.",
            ecosystem: "LangChain Agents, LangGraph, AutoGPT, OpenAI Assistants API, CrewAI.",
            realWorld: "At Klarna, their AI agent handles millions of support tickets. It isn't just a chatbot; it has 'Tools' to query the logistics database, check refund status, and even 'Escalate to Human'. The model chooses these tools based on the flow of the conversation, reducing human support costs by millions.",
            useCases: [
                "Natural Language interfaces for Database querying (Text-to-SQL Agents)",
                "Customer Support bots that can actually 'Cancel Subscriptions' via Tool Use",
                "Research Agents that independently browse several websites to write a summary"
            ],
            advantages: [
                "Intelligence + Action: Enables the model to do real work, not just provide information",
                "Security: The LLM never touches your data directly; your code acts as a 'Gatekeeper' that only runs the tool if the request is valid",
                "Scalability: One LLM orchestrated by a tool-loop can replace thousands of lines of fragile 'If/Else' logic"
            ],
            disadvantages: [
                "Looping: If a tool output is confusing, the LLM might try to call it again and again, wasting high costs",
                "Latency: Every 'Turn' (Model decision -> Tool run -> Model summary) adds seconds of delay"
            ],

            interviewTip: "Know the 'ReAct' pattern (Reason + Act). Explain that the model first outputs a 'Thought' (Why I am doing this), then an 'Action' (The Tool I will call), then waits for an 'Observation' (The Tool Result), and finally provides the 'Response'. Senior engineers value this transparency for debugging.",
            resumeBullet: "Architected autonomous AI support agents utilizing Function Calling to reduce tier-1 support manual interventions by 70%, handling 50k+ automated resolutions monthly.",

            videos: [
                { type: "public", title: "Introduction to AI Agents", author: "DeepLearning.AI", views: "500K views", duration: "1:05:00", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/" },
                { type: "public", title: "Function Calling with GPT-4", author: "OpenAI Cookbook", views: "200K views", duration: "20:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Udemy", rating: 4.8, title: "LangChain Masterclass: Build AI Agents", instructor: "Eden Marco", enrolled: "50K+", duration: "15 hours", url: "https://www.udemy.com/course/langchain/" }
            ],
            blogs: [
                { type: "Architecture", title: "Wait, What is an AI Agent?", publisher: "LangChain Blog", readTime: "30 min", url: "https://blog.langchain.dev/what-is-an-agent/" }
            ],
            scenarios: [
                {
                    id: "4.1", difficulty: "Expert", title: "The Agent Loop of Death", category: "Agent Reliability", estimatedTime: "5 hours",
                    scenarioDescription: "A researcher builds a 'Web Research Agent'. It is asked to find a specific stock price. The website structure has changed, and the 'Scraper' tool returns an error message. The LLM keeps trying the same scraper tool over and over, spending $50 in API credits in 10 minutes.",
                    problemAnalysis: "The agent lacks a 'Self-Correction' or 'Max Retry' logic. It is stuck in a logic loop because it thinks 'trying again' will yield a different result without changing its strategy.",
                    architectureLayers: ["Agent Orchestrator (Decision Maker)", "Tool Execution Layer", "Monitoring & Cost-Limiter Layer"],
                    toolsAndTech: [{ name: "LangGraph & Token Quotas", justification: "By using LangGraph, we can define the agent's logic as a 'State Machine'. We can add a counter node that says 'If you have tried tool X three times and failed, stop and ask the human for help'. This prevents 'Credit Drain' and improves reliability." }],
                    tradeOffs: ["Adding state logic makes the code more complex to write initially."],
                    nfrConsiderations: ["Cost Control: Never spend more than $5 on a single research task."],
                    kpis: ["Reduce 'Stuck Agent' incidents to zero via automated loop-detection."],
                    keyInsights: "Autonomous does not mean unsupervised. Every agent needs a leash."
                }
            ],
            playgrounds: [
                {
                    title: "The Simple Agent",
                    description: "Giving an LLM a 'Calculator' tool.",
                    examples: [
                        {
                            language: "python",
                            code: "import json\n\n# 1. The Real Python Tool\ndef multiply(a, b):\n    return a * b\n\n# 2. Telling the LLM about the tool\ntool_definition = {\n    \"name\": \"multiply\",\n    \"description\": \"Use this for complex math\",\n    \"parameters\": {\"type\": \"object\", \"properties\": {\"a\": {\"type\": \"number\"}, \"b\": {\"type\": \"number\"}}}\n}\n\n# 3. Handling the LLM's 'Decision'\n# (Hypothetical response from GPT-4)\nllm_decision = {\"name\": \"multiply\", \"args\": {\"a\": 12, \"b\": 24}}\n\n# 4. Executing code based on AI choice\nif llm_decision['name'] == \"multiply\":\n    result = multiply(**llm_decision['args'])\n    print(f\"The AI asked us to calculate: {result}\")"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "feat/agentic-tools",
                commitMessage: "feat: implemented agentic tool-calling with LangGraph, enabling the bot to query the internal SQL DB for user orders",
                files: [{ name: "agents/order_bot.py", type: "file", content: "agent code" }],
                activeFileSnippet: { filename: "order_bot.py", code: "graph.add_node('tool_executor', run_tools)\ngraph.add_edge('tool_executor', 'reasoning_engine')" }
            },
            community: {
                aiSummary: "The future of software is not UI buttons. It is 'Natural Language Agents' that understand what you want and use tools to make it happen. Master the Tool-Loop and you master the next decade.",
                solutions: []
            }
        },
        {
            id: "HCE-AINATIVE-101-M5-T1",
            moduleId: "HCE-AINATIVE-101-M5",
            sequenceNumber: 1,
            title: "Local Models, Quantization & vLLM",
            estimatedMinutes: 240,
            what: "Local Model Labs is the practice of hosting open-weights Large Language Models (like Llama-3, Mistral, or Phi-3) on your own private hardware or cloud instances rather than using paid APIs like OpenAI. It involves 'Quantization'—the process of compressing model weights (e.g., from 16-bit to 4-bit) so that massive models can fit into smaller GPU memory (VRAM).",
            why: "For enterprises with strict data privacy (Banks, Healthcare), sending data to ChatGPT is a legal risk. Hosting models locally ensures 100% data sovereignty. Furthermore, at high volumes, hosting your own model (using high-speed inference engines like vLLM) can be 80% cheaper than paying per-token to an external provider.",
            when: "When you need to build private, secure AI applications or when your inference volume reaches 'Scale' where API costs become unsustainable.",
            how: "Use 'Ollama' for easy local testing. Use 'vLLM' or 'TGI' (Text Generation Inference) for high-performance production serving. Utilize 'Quantized' weights from the HuggingFace repository to run 70B parameter models on a single consumer GPU.",
            ecosystem: "HuggingFace, Ollama, vLLM, GGUF, GPTQ, AWQ, NVIDIA Triton Server.",
            realWorld: "A legal firm uses private Llama-3-70B models hosted on their own VPC. By using 4-bit quantization, they can process 10,000 legal contracts a day for the cost of one NVIDIA A100 server, without any data ever leaving their firewall.",
            useCases: [
                "Building a private 'Medical Assistant' that complies with HIPAA data laws",
                "Reducing inference costs for an AI writing-assistant app with 1M users",
                "Deploying 'Edge AI' on laptops for developers working in high-security air-gapped environments"
            ],
            advantages: [
                "Privacy: Your data never leaves your server (Zero 'AI training' on your IP)",
                "Latency: No network delay to external APIs; models respond at the speed of your local GPU",
                "Ownership: Use the model as much as you want without 'Rate Limits' from providers"
            ],
            disadvantages: [
                "Operational Overhead: You are responsible for GPU monitoring, driver updates, and uptime",
                "Initial Cost: Buying an H100 or A100 GPU costs thousands of dollars upfront"
            ],

            interviewTip: "Know the math of VRAM. A 7B parameter model in 16-bit precision takes ~14GB of VRAM. A 4-bit quantized version of the same model takes only ~4GB. If asked how to run a model on a budget, mention '4-bit quantization (GGUF)'—every senior AI engineer uses it.",
            resumeBullet: "Deployed high-performance local inference clusters utilizing vLLM and 4-bit GGUF quantization, reducing cloud API costs by $12k/month while ensuring 100% data privacy.",

            videos: [
                { type: "public", title: "Local LLMs with Ollama", author: "NetworkChuck", views: "1M views", duration: "18:20", url: "https://www.youtube.com/watch?v=Wjrdr0NU4Sk" },
                { type: "public", title: "vLLM: High-throughput Serving", author: "vLLM Team", views: "50K views", duration: "35:10", url: "https://www.youtube.com/watch?v=5VAnYv3K5kI" }
            ],
            moocs: [
                { platform: "DeepLearning.AI", rating: 4.8, title: "Open Source Models with Hugging Face", instructor: "Clem Delangue", enrolled: "100K+", duration: "10 hours", url: "https://www.deeplearning.ai/short-courses/open-source-models-hugging-face/" }
            ],
            blogs: [
                { type: "Technical", title: "Introduction to Quantization", publisher: "Hugging Face Blog", readTime: "45 min", url: "https://huggingface.co/blog/introduction-to-quantization" }
            ],
            scenarios: [
                {
                    id: "5.1", difficulty: "Expert", title: "The Privacy Lockdown", category: "AI Architecture", estimatedTime: "6 hours",
                    scenarioDescription: "A government agency wants to use an LLM to summarize top-secret documents. They physically cannot use OpenAI or Anthropic due to national security. You must build a system that works on a single, disconnected server in a bunker.",
                    problemAnalysis: "This is the 'Air-gapped AI' problem. We need locally hosted models that are extremely efficient because we cannot easily upgrade the hardware in the bunker.",
                    architectureLayers: ["Local Model Layer (Mistral/Llama)", "Quantization Layer (GGUF)", "Inference Engine (Ollama/vLLM)"],
                    toolsAndTech: [{ name: "Ollama & Llama-3-70B-GGUF", justification: "GGUF is a file format that allows the model to run on both CPU and GPU interchangeably. By using a 4-bit GGUF version of Llama-3-70B, we get performance nearing GPT-4 but running entirely on private hardware without any internet connection required." }],
                    tradeOffs: ["Local models require manual setup of weights and updates, which is slower than an API."],
                    nfrConsiderations: ["Privacy: Absolute zero external network transmissions allowed."],
                    kpis: ["Deploy a functional, 100% local summarization API within 24 hours."],
                    keyInsights: "The 'High-Code' engineer of today is the 'System Admin' of the local AI brain."
                }
            ],
            playgrounds: [
                {
                    title: "The Local API Call",
                    description: "Pulling and running a model with one command.",
                    examples: [
                        {
                            language: "bash",
                            code: "# 1. Install Ollama and pull Llama-3\nollama pull llama3\n\n# 2. Run the model locally in your terminal\nollama run llama3 \"Why is the sky blue?\"\n\n# 3. Call it as a Local API (Compatible with OpenAI library!)\ncurl http://localhost:11434/api/generate -d '{\n  \"model\": \"llama3\",\n  \"prompt\": \"Write a Python function to sort a list\"\n}'"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "ops/local-llm-hosting",
                commitMessage: "ops: containerized vLLM serving engine with Auto-Quantization for Llama-3 deployment on private A100 nodes",
                files: [{ name: "docker-compose.yml", type: "file", content: "docker logic" }],
                activeFileSnippet: { filename: "docker-compose.yml", code: "image: vllm/vllm-openai\ncommand: --model meta-llama/Meta-Llama-3-8B --quantization awq" }
            },
            community: {
                aiSummary: "The 'Privacy' vs 'Convenience' battle is over. You can now have both. Hosting your own high-intelligence brain is no longer a luxury; it is a standard engineering skill.",
                solutions: []
            }
        }
    ],
    videoCount: 280,
    articleCount: 190,
    problemCount: 110,
    capstoneProject: {
        title: "The Autonomous Enterprise AI Brain",
        description: "You will build the ultimate AI-native architecture. First, you'll perform an 'Identity-Based RAG' ingestion, where 100+ company documents are embedded and stored in a Vector DB with strict per-user permissioning. Next, you will develop a 'Multi-Agent Orchestrator' using LangGraph, where one AI acts as the 'Lead Engineer' and delegates work to two specialized 'Researcher' and 'Coder' agents. These agents will have access to real 'Tools' (like a Python REPL and a Google Search API) to solve complex user requests iteratively. Finally, you will optimize the entire system to run on a private, locally-hosted Llama-3 model using vLLM to ensure total data privacy. This project is the gold standard for proving you can build industrial-grade, secure, and truly 'Intelligent' software systems.",
        estimatedDays: 20,
        skillsFocused: [
            "Advanced RAG (Hybrid & Identity Search)",
            "Multi-Agent Orchestration (LangGraph)",
            "Agentic Tool Use (Function Calling)",
            "Local LLM Ops (vLLM & Quantization)",
            "System Security & Privacy"
        ],
        steps: [
            {
                title: "Phase 1: Knowledge Fortress",
                description: "Build a permission-aware RAG pipeline that grounds the AI in company truth."
            },
            {
                title: "Phase 2: The Agentic Boardroom",
                description: "Configure the multi-agent graph to handle task delegation and reasoning loops."
            },
            {
                title: "Phase 3: The Tool-Belt",
                description: "Connect the agents to real-world APIs and code execution environments securely."
            },
            {
                title: "Phase 4: Optimization & Privacy",
                description: "Migrate the backend to use a locally hosted, quantized model for scale and safety."
            }
        ]
    },
    totalEstimatedHours: 90,
    estimatedCompletionDays: 60,
    moduleCount: 5,
    createdAt: "2026-02-27T00:00:00Z",
    updatedAt: "2026-02-27T00:00:00Z",
    version: "1.0",
    status: "published"
};
