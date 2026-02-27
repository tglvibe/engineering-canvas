import { CourseEnhanced } from "./types";

// PART 1: MODULES 1 & 2
// Part 2 (Modules 3 & 4) will be appended shortly.

export const hceBack201: CourseEnhanced = {
  id: "HCE BACK 201",
  titleKey: "courses.hceBack201",
  descKey: "courses.hceBack201Desc",
  icon: "🔬",
  duration: "6 weeks",
  languages: [
    "Go",
    "Java",
    "Node.js",
    "Python",
    "Kafka",
    "Docker",
    "Kubernetes",
  ],
  category: "high-code",
  programIds: ["HCE BACK"],
  roleIds: ["backend-dev", "system-architect", "platform-engineer"],
  trackId: "hce",
  level: "intermediate",
  prerequisites: ["HCE BACK 101", "CORE DSA"],
  targetAudience:
    "Engineers transitioning from monolithic architectures to complex, geographically distributed, fault-tolerant microservice environments driven by events.",
  learningOutcomes: [
    "Decompose monolithic codebases utilizing strict Domain-Driven Design (DDD) Bounded Contexts.",
    "Architect asynchronous inter-service communication using Apache Kafka and RabbitMQ.",
    "Implement the Saga Pattern for distributed transactional integrity across multiple databases.",
    "Deploy Service Mesh architectures utilizing Istio for mTLS and intelligent traffic routing.",
    "Engineer resilient systems utilizing Circuit Breakers, Bulkheads, and Distributed Tracing.",
  ],
  modules: [
    {
      id: "HCE-BACK-201-M1",
      title: "Monolithic Decomposition & Domain-Driven Design",
      description:
        "The architectural shift. Understanding when a monolith becomes a liability and mastering the mathematical boundaries required to extract services without creating a distributed monolith.",
      sequenceNumber: 1,
      estimatedHours: 14,
      topics: ["HCE-BACK-201-M1-T1", "HCE-BACK-201-M1-T2"],
      prerequisiteModuleIds: [],
      outcomes: [
        "Identify Bounded Contexts",
        "Execute the Strangler Fig Pattern",
        "Avoid Distributed Monolith Anti-Patterns",
      ],
    },
    {
      id: "HCE-BACK-201-M2",
      title: "Asynchronous Communication & Event-Driven Architecture",
      description:
        "Moving from synchronous HTTP blocking to asynchronous message passing. Architecting systems that react to events rather than waiting for responses.",
      sequenceNumber: 2,
      estimatedHours: 16,
      topics: ["HCE-BACK-201-M2-T1", "HCE-BACK-201-M2-T2"],
      prerequisiteModuleIds: ["HCE-BACK-201-M1"],
      outcomes: [
        "Deploy Apache Kafka brokers",
        "Contrast Pub/Sub vs Message Queues",
        "Guarantee At-Least-Once delivery",
      ],
    },
    {
      id: "HCE-BACK-201-M3",
      title: "Distributed Data Management (Sagas & CQRS)",
      description:
        "Data cannot be shared. Mastering the Database-per-Service paradigm, ensuring multi-service transactional integrity, and segregating reads from writes.",
      sequenceNumber: 3,
      estimatedHours: 18,
      topics: ["HCE-BACK-201-M3-T1", "HCE-BACK-201-M3-T2"],
      prerequisiteModuleIds: ["HCE-BACK-201-M2"],
      outcomes: [
        "Execute Orchestrated Sagas",
        "Implement Event Sourcing",
        "Deploy CQRS read models",
      ],
    },
    {
      id: "HCE-BACK-201-M4",
      title: "Resilience & Distributed Observability",
      description:
        "Designing for failure. When you have 500 microservices, instances will die every minute. Ensure the system survives and engineers can trace the corpse.",
      sequenceNumber: 4,
      estimatedHours: 12,
      topics: ["HCE-BACK-201-M4-T1"],
      prerequisiteModuleIds: ["HCE-BACK-201-M3"],
      outcomes: [
        "Implement Circuit Breakers via Istio",
        "Trace requests via OpenTelemetry",
        "Prevent cascading network failures",
      ],
    },
  ],
  topics: [
    {
      id: "HCE-BACK-201-M1-T1",
      moduleId: "HCE-BACK-201-M1",
      sequenceNumber: 1,
      title: "Domain-Driven Design (DDD) & Bounded Contexts",
      estimatedMinutes: 240,

      what: "DDD is a software engineering approach that centers development on programming a domain model that has a rich understanding of the processes and rules of a business. A 'Bounded Context' is the explicit logical boundary within which a specific domain model applies.",
      why: "Microservices fail when boundaries are drawn arbitrarily (e.g., 'API Service' vs 'DB Service'). True microservices must be structured around business capabilities. If you get boundaries wrong, every change requires tight coordination across 5 different teams, completely negating the agility of microservices.",
      when: "Before writing a single line of microservice code. If your monolith has 50 developers stepping on each other's toes, it is time to map the domain.",
      how: "Utilize 'Event Storming' with domain experts (product managers) to map business processes. Extract services representing distinct contexts (e.g., 'Inventory Context' and 'Shipping Context'). The 'Item' entity in Inventory is completely distinct from the 'Item' entity in Shipping.",
      ecosystem:
        "Event Storming, Context Mapping, Ubiquitous Language, Strangler Fig Pattern.",
      realWorld:
        "In an e-commerce platform, 'Product' means something entirely different to the Billing department (tax codes, prices) than to the Shipping department (weight, physical dimensions). DDD mandates creating two completely separate microservices with isolated databases for these contexts.",
      useCases: [
        "Breaking up a legacy monolith",
        "Organizing massive engineering organizations into autonomous squads (Conway's Law)",
      ],
      advantages: [
        "Unlocks autonomous team velocity",
        "Changes in the Billing domain mathematically cannot break the Shipping domain",
      ],
      disadvantages: [
        "Astronomically steep learning curve.",
        "Requires rigorous upfront architectural coordination.",
      ],

      interviewTip:
        "When asked how to split a monolith, never say 'I will split the frontend from backend'. Say: 'I will apply Domain-Driven Design to identify Bounded Contexts, ensuring our microservices reflect organizational capabilities, thereby minimizing synchronous inter-service dependencies.'",
      resumeBullet:
        "Pioneered the decomposition of a 500K-line legacy monolith into 12 distinct Bounded Contexts utilizing Domain-Driven Design, increasing deployment velocity by 300%.",

      videos: [
        {
          type: "public",
          title: "Domain-Driven Design: Hidden Lessons",
          author: "GOTO Conferences (Udi Dahan)",
          views: "450K views",
          duration: "50:10",
          url: "https://www.youtube.com/watch?v=pMuiVlnGqjk",
        },
        {
          type: "public",
          title: "Microservices & Bounded Contexts Explained",
          author: "TechWorld with Nana",
          views: "820K views",
          duration: "18:22",
          url: "https://www.youtube.com/watch?v=1xo-0gCVhCU",
        },
      ],
      moocs: [
        {
          platform: "Udemy",
          rating: 4.6,
          title: "Microservices Architecture - The Complete Guide",
          instructor: "in28Minutes",
          enrolled: "150K+",
          duration: "18 hours",
          url: "https://www.udemy.com/course/microservices-architecture-and-spring-boot/",
        },
      ],
      blogs: [
        {
          type: "Case Study",
          title: "Deconstructing the Monolith",
          publisher: "Shopify Engineering",
          readTime: "15 min",
          url: "https://shopify.engineering/deconstructing-monolith-designing-software-that-grows",
        },
        {
          type: "Documentation",
          title: "Bounded Context",
          publisher: "Martin Fowler",
          readTime: "8 min",
          url: "https://martinfowler.com/bliki/BoundedContext.html",
        },
      ],
      scenarios: [
        {
          id: "1",
          difficulty: "Hard",
          title: "The Distributed Monolith Crisis",
          category: "Architecture",
          estimatedTime: "5 hours",
          scenarioDescription:
            "The engineering team broke the Python monolith into 6 Go microservices. However, latency has somehow increased, and every time the 'Order' service deploys, the 'Billing' service randomly crashes.",
          problemAnalysis:
            "The team created a 'Distributed Monolith'. The services are split, but their databases are still highly coupled, requiring massive synchronous HTTP chains (Service A calls B, which calls C, which calls D). A failure in D cascades back to A.",
          architectureLayers: [
            "API Gateway",
            "Synchronous HTTP Web Mesh",
            "Shared Database Anti-Pattern",
          ],
          toolsAndTech: [
            {
              name: "Context Mapping",
              justification:
                "To visually diagram the data dependencies and sever the synchronous chains, forcing asynchronous eventual consistency where necessary.",
            },
          ],
          tradeOffs: [
            "Agility vs Consistency. To fix the distributed monolith, we must accept that 'Order' and 'Billing' might not be perfectly synchronized at the millisecond scale (Eventual Consistency).",
          ],
          nfrConsiderations: [
            "Latency: Synchronous HTTP chaining mathematically adds network latency to every hop.",
          ],
          kpis: ["Reduce inter-service synchronous API calls by 80%"],
          keyInsights:
            "Microservices are not just 'running code on different ports'. If your services cannot function entirely autonomously when other services are offline, you do not have microservices.",
        },
      ],
      playgrounds: [
        {
          title: "Strangler Fig Routing Configuration",
          description:
            "How to slowly migrate traffic from the Monolith to a new Microservice at the Load Balancer level without risking a big-bang rewrite.",
          examples: [
            {
              language: "nginx",
              code: "server {\n    listen 80;\n\n    # The new isolated domain (Bounded Context)\n    location /api/v1/billing {\n        proxy_pass http://new_billing_microservice:8080;\n    }\n\n    # Fallback: Everything else still hits the legacy monolith\n    location / {\n        proxy_pass http://legacy_monolith:3000;\n    }\n}",
            },
            {
              language: "typescript",
              code: "// Express API Gateway utilizing http-proxy-middleware\nimport express from 'express';\nimport { createProxyMiddleware } from 'http-proxy-middleware';\n\nconst app = express();\n\n// Route specific Bounded Context traffic to new Go microservice\napp.use('/billing', createProxyMiddleware({ target: 'http://billing-go-svc:8080', changeOrigin: true }));\n\n// Legacy Fallback\napp.use('/', createProxyMiddleware({ target: 'http://monolith-ruby:3000', changeOrigin: true }));\n\napp.listen(80, () => console.log('API Gateway Routing Traffic'));",
            },
          ],
        },
      ],
      gitSimulation: {
        branchName: "arch/strangler-fig",
        commitMessage:
          "infra: configure API gateway to siphon billing traffic off monolith",
        files: [
          {
            name: "infra",
            type: "folder",
            children: [
              { name: "gateway.ts", type: "file", content: "proxy config" },
            ],
          },
        ],
        activeFileSnippet: {
          filename: "gateway.ts",
          code: "app.use('/billing', proxy);",
        },
      },
      community: {
        aiSummary:
          "DDD is heavily theoretical but absolutely crucial to understand before touching microservice code, lest you build an unmaintainable web of dependencies.",
        solutions: [
          {
            authorInitials: "JB",
            authorName: "John B.",
            badge: "Architect",
            role: "Principal Engineer",
            level: "Expert",
            timeAgo: "1 month ago",
            upvotes: 342,
            comments: 25,
            content:
              "Do NOT start with Microservices. Build a well-structured modular monolith first. You cannot accurately guess the Bounded Contexts on Day 1 of a startup.",
          },
        ],
      },
    },
    {
      id: "HCE-BACK-201-M2-T1",
      moduleId: "HCE-BACK-201-M2",
      sequenceNumber: 1,
      title: "Event-Driven Architecture (EDA) & Message Brokers",
      estimatedMinutes: 240,

      what: "A software design paradigm where microservices communicate by publishing and subscribing to 'Events' (state changes) asynchronously via a central broker, rather than polling or directly calling each other.",
      why: "Synchronous REST over HTTP tightly couples services. If Service A MUST hit Service B to complete an order, A goes down when B goes down. EDA decouples them; A fires a message into a queue and immediately returns 200 OK to the client. B processes it later.",
      when: "Background processing (video rendering), high-throughput data pipelines (clickstream tracking), and any system where immediate execution is not necessary but guaranteed eventual execution is.",
      how: "A Publisher pushes a message to Apache Kafka or RabbitMQ. The message sits in a Queue/Topic. A Consumer fetches the message at its own pace, processes it, and acknowledges (ACK) completion. If the consumer crashes halfway, the broker retains the message for retry.",
      ecosystem:
        "Apache Kafka (Log-based Pub/Sub), RabbitMQ (Smart Broker/Dumb Consumer), AWS SQS/SNS, Redis Pub/Sub.",
      realWorld:
        "Uber uses Kafka to stream millions of geographic coordinates per second. The driver app publishes location events; the trip-pricing service, ETA-prediction service, and fraud-detection service all consume those events independently.",
      useCases: [
        "Decoupling payment processing from checkout UI",
        "Real-time analytics pipelines",
        "Fan-out notifications (1 event triggers 10 different systems)",
      ],
      advantages: [
        "Absolute isolation of failures (Consumer offline? Queue safely holds data)",
        "Elastic horizontal scaling of consumers to burn down queue backlogs",
      ],
      disadvantages: [
        "Massively complicates observability (you cannot easily 'trace' a completely disconnected background task)",
        "Event ordering is notoriously difficult in distributed queues",
      ],

      interviewTip:
        "Interviewers will ask: 'Kafka vs RabbitMQ?'. Your answer: 'RabbitMQ is a traditional message queue (FIFO, messages are deleted when read, good for task queues). Kafka is an append-only distributed log (messages persist, good for event streaming and replayability).'",
      resumeBullet:
        "Re-architected the checkout flow to utilize async AWS SQS queues, reducing synchronous user wait time from 4 seconds to 300ms while guaranteeing order durability.",

      videos: [
        {
          type: "public",
          title: "Kafka System Design",
          author: "Gaurav Sen",
          views: "1.1M views",
          duration: "16:20",
          url: "https://www.youtube.com/watch?v=kHsJid-MIsA",
        },
        {
          type: "public",
          title: "RabbitMQ in 100 Seconds",
          author: "Fireship",
          views: "850K views",
          duration: "2:15",
          url: "https://www.youtube.com/watch?v=k6CpdX0Tngc",
        },
      ],
      moocs: [
        {
          platform: "Coursera",
          rating: 4.7,
          title: "Data Streaming with Apache Kafka",
          instructor: "Confluent",
          enrolled: "90K+",
          duration: "14 hours",
          url: "https://www.coursera.org/learn/data-streaming-apache-kafka",
        },
      ],
      blogs: [
        {
          type: "Architecture",
          title: "Putting Apache Kafka to Use",
          publisher: "LinkedIn Engineering",
          readTime: "10 min",
          url: "https://engineering.linkedin.com/blog/2019/apache-kafka-trillion-messages",
        },
        {
          type: "Guide",
          title: "RabbitMQ Basics",
          publisher: "RabbitMQ Docs",
          readTime: "12 min",
          url: "https://www.rabbitmq.com/tutorials/tutorial-one-python.html",
        },
      ],
      scenarios: [
        {
          id: "2",
          difficulty: "Expert",
          title: "The At-Least-Once Delivery Trap",
          category: "Data Integrity",
          estimatedTime: "4 hours",
          scenarioDescription:
            "Your billing consumer reads a message from RabbitMQ, charges the credit card, but crashes EXACTLY before it can send the ACK (Acknowledge) back to RabbitMQ. The broker assumes the message failed and re-queues it.",
          problemAnalysis:
            "In distributed systems, networks drop ACKs. Message brokers guarantee 'At-Least-Once' delivery, meaning duplicates ARE mathematically guaranteed to happen. You cannot fix the network.",
          architectureLayers: [
            "RabbitMQ Broker",
            "Billing Consumer Logic",
            "Redis Locks",
          ],
          toolsAndTech: [
            {
              name: "Idempotent Consumer Pattern",
              justification:
                "The consumer MUST keep a record (e.g., in Redis) of every Message ID it has successfully processed. Every intake function must start by checking: 'Have I seen this ID before?'",
            },
          ],
          tradeOffs: [
            "Exactly-Once Processing is a myth without infinite performance overhead. We accept At-Least-Once delivery and build defensive, idempotent application logic instead.",
          ],
          nfrConsiderations: [
            "Database Storage: Storing processed Message IDs requires a fast, scalable cache (Redis) with TTL expirations.",
          ],
          kpis: ["0 double charges during simulated consumer crash tests"],
          keyInsights:
            "Message brokers deliver messages. It is the application's sole responsibility to gracefully handle accidentally receiving the exact same message twice.",
        },
      ],
      playgrounds: [
        {
          title: "Publish/Subscribe with RabbitMQ",
          description:
            "Demonstrating decoupling. The Publisher fires the event without knowing who/what the Consumer is.",
          examples: [
            {
              language: "python",
              code: "import pika\n\n# ========================================\n# PUBLISHER (Microservice A - Checkout)\n# ========================================\ndef publish_event():\n    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))\n    channel = connection.channel()\n    channel.queue_declare(queue='order_queue', durable=True)\n    \n    message = '{\"orderId\": \"ABC-123\", \"amount\": 500}'\n    channel.basic_publish(\n        exchange='',\n        routing_key='order_queue',\n        body=message,\n        properties=pika.BasicProperties(delivery_mode=2) # Make message persistent\n    )\n    print(\"[x] Published Event: Order Created\")\n    connection.close()\n\n# ========================================\n# CONSUMER (Microservice B - Billing)\n# ========================================\ndef callback(ch, method, properties, body):\n    print(f\"[x] Consuming Event: {body}\")\n    # Process payment here...\n    \n    # WE MUST ACKNOWLEDGE COMPLETION manually\n    ch.basic_ack(delivery_tag=method.delivery_tag)\n\ndef start_consumer():\n    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))\n    channel = connection.channel()\n    channel.queue_declare(queue='order_queue', durable=True)\n    channel.basic_consume(queue='order_queue', on_message_callback=callback)\n    print('Waiting for events...')\n    channel.start_consuming()",
            },
            {
              language: "go",
              code: 'package main\n\nimport (\n\t"log"\n\t"github.com/streadway/amqp"\n)\n\nfunc main() {\n\tconn, _ := amqp.Dial("amqp://guest:guest@localhost:5672/")\n\tdefer conn.Close()\n\tch, _ := conn.Channel()\n\tdefer ch.Close()\n\n\t// Queue declaration\n\tq, _ := ch.QueueDeclare("order_queue", true, false, false, false, nil)\n\n\t// Publish\n\tmsg := []byte(`{"orderId": "ABC-123", "amount": 500}`)\n\tch.Publish("", q.Name, false, false, amqp.Publishing{\n\t\tDeliveryMode: amqp.Persistent,\n\t\tContentType:  "application/json",\n\t\tBody:         msg,\n\t})\n\tlog.Println("[x] Sent Order Event")\n}',
            },
          ],
        },
      ],
      gitSimulation: {
        branchName: "feat/async-emails",
        commitMessage:
          "feat: Move welcome emails off the main HTTP thread to RabbitMQ worker",
        files: [
          {
            name: "workers",
            type: "folder",
            children: [
              {
                name: "email_consumer.py",
                type: "file",
                content: "channel.basic_consume...",
              },
            ],
          },
        ],
        activeFileSnippet: {
          filename: "email_consumer.py",
          code: "def send_email():\n  // logic",
        },
      },
      community: {
        aiSummary:
          "Message brokers are the silver bullet for scaling I/O bottlenecks, but they introduce massive debugging complexity.",
        solutions: [
          {
            authorInitials: "TR",
            authorName: "Todd R.",
            badge: "Kafka Expert",
            role: "Data Engineer",
            level: "Expert",
            timeAgo: "2 months ago",
            upvotes: 412,
            comments: 45,
            content:
              "Kafka is NOT a queue, it is a log. If you just need to delay a background task (like sending an email 5 minutes from now), use RabbitMQ or AWS SQS. Only use Kafka if you need to retain gigabytes of events for replay analytics.",
          },
        ],
      },
    },
    // ==========================================
    // MODULE 3 TOPICS
    // ==========================================
    {
      id: "HCE-BACK-201-M3-T1",
      moduleId: "HCE-BACK-201-M3",
      sequenceNumber: 1,
      title: "Database-per-Service & The Saga Pattern",
      estimatedMinutes: 240,
      what: "The Database-per-Service pattern mandates that each microservice encapsulates its own database; no two services can query the same underlying SQL tables. The Saga Pattern is a sequence of local transactions used to maintain data consistency across these isolated databases.",
      why: "If 5 microservices read/write to the same massive PostgreSQL database, you haven't built microservices; you've built a 'Distributed Monolith' with a single point of failure (the DB). However, isolating databases destroys ACID compliance across service boundaries. You can no longer 'BEGIN TRANSACTION' across Billing and Shipping.",
      when: "Whenever a business transaction spans multiple microservices. E.g., placing an order requires mutating the 'Order' DB, deducting funds in the 'Billing' DB, and reserving items in the 'Inventory' DB.",
      how: "Instead of one massive locked ACID transaction, a Saga breaks it down into individual chunks. If Order succeeds, it fires an event. Billing listens, deducts funds, and fires an event. If Inventory then fails because an item is out of stock, the Saga fires 'Compensating Transactions' backwards to refund the user and cancel the order.",
      ecosystem:
        "Orchestration Sagas (Central Coordinator App), Choreography Sagas (Event-driven without central brain), Temporal.io, AWS Step Functions.",
      realWorld:
        "Booking a flight on Expedia. Expedia reaches out to Delta (Airline), Marriott (Hotel), and Enterprise (Car) APIs. If the car rental fails, Expedia cannot 'SQL Rollback' Delta Airlines. It must send a brand new API request to Delta asking to cancel the just-booked flight.",
      useCases: [
        "E-commerce checkouts spanning multiple domains",
        "Travel itinerary booking",
        "Financial ledger reconciling",
      ],
      advantages: [
        "Removes database bottlenecks and single points of failure",
        "Services can choose the best DB for their domain (e.g., Neptune for Social Graph, Postgres for Billing)",
      ],
      disadvantages: [
        "Astronomical complexity in handling compensating transactions (rollbacks)",
        "Hard to observe where a transaction failed without distributed tracing",
      ],

      interviewTip:
        "If you are asked how to handle transactions in Microservices, never answer 'Two-Phase Commit (2PC)'. 2PC is notoriously slow and unreliable in cloud environments. Instantly discuss the Saga Pattern and the difference between Orchestration vs Choreography.",
      resumeBullet:
        "Engineered a distributed Saga orchestration engine utilizing AWS Step Functions, guaranteeing transactional integrity across 6 independent domain services with automated rollback compensations.",

      videos: [
        {
          type: "public",
          title: "Saga Design Pattern Explained",
          author: "CodeOpinion",
          views: "300K views",
          duration: "16:20",
          url: "https://www.youtube.com/watch?v=0UT-1oGkK1I",
        },
        {
          type: "public",
          title: "Microservices Transactions: Orchestration vs Choreography",
          author: "Tech Primers",
          views: "250K views",
          duration: "14:45",
          url: "https://www.youtube.com/watch?v=1xo-0gCVhCU",
        },
      ],
      moocs: [
        {
          platform: "Udemy",
          rating: 4.8,
          title: "Microservices Design Patterns",
          instructor: "Sean Campbell",
          enrolled: "40K+",
          duration: "8 hours",
          url: "https://www.udemy.com/course/microservices-design-patterns/",
        },
      ],
      blogs: [
        {
          type: "Documentation",
          title: "Saga distributed transactions",
          publisher: "Microsoft Azure Architecture",
          readTime: "15 min",
          url: "https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga",
        },
      ],
      scenarios: [
        {
          id: "3",
          difficulty: "Expert",
          title: "Compensating Transactions in E-Commerce",
          category: "Fintech",
          estimatedTime: "6 hours",
          scenarioDescription:
            "A customer buys a rare pair of sneakers. The 'Order' service creates the order. The 'Payment' service successfully charges $500. Then the 'Inventory' service reports the sneakers were just bought by someone else 1 millisecond earlier.",
          problemAnalysis:
            "We have an inconsistent state. The user has lost $500 but will never receive the shoes. Because the DBs are isolated, we cannot just 'ROLLBACK'. We must implement a Compensating Transaction.",
          architectureLayers: [
            "Saga Orchestrator Service",
            "Payment Service",
            "Inventory Service",
            "Kafka Event Bus",
          ],
          toolsAndTech: [
            {
              name: "Saga Orchestrator Workflow",
              justification:
                "A central state machine (like Temporal.io or custom code) that tracks the saga. If Step 3 (Inventory) fails, the Orchestrator explicitly calls Step 2_Rollback (Refund Payment) and Step 1_Rollback (Cancel Order).",
            },
          ],
          tradeOffs: [
            "Orchestration vs Choreography. We chose Orchestration because Choreography (services just reacting to each other's failures) becomes an unmaintainable 'spaghetti' of events at scale.",
          ],
          nfrConsiderations: [
            "Idempotency: The Refund service MUST be idempotent in case the network fails while sending the refund command.",
          ],
          kpis: [
            "100% automated refund rate on inventory failures without human intervention",
          ],
          keyInsights:
            "In microservices, 'Rollbacks' are not database commands. They are entirely new, inverse business operations that you must meticulously code yourself.",
        },
      ],
      playgrounds: [
        {
          title: "Simulating a Saga Orchestrator",
          description:
            "A stark look at how complex cross-service transactions become when you can't rely on database-level locks.",
          examples: [
            {
              language: "typescript",
              code: "// Simplified Saga Orchestrator\nclass CheckoutSaga {\n  async execute(orderId: string, userId: string, amount: number) {\n    try {\n      console.log('Step 1: Creating Order (Pending)');\n      await OrderService.createOrder(orderId, userId);\n      \n      console.log('Step 2: Charging Credit Card');\n      await PaymentService.charge(userId, amount);\n\n      console.log('Step 3: Reserving Inventory');\n      await InventoryService.reserveItem('SNEAKERS-1'); // THROWS ERROR if Out of Stock\n\n      console.log('🟢 Saga Complete. Order Approved.');\n      await OrderService.approveOrder(orderId);\n\n    } catch (error) {\n      console.log(`🔴 Saga Failed: ${error.message}. Initiating Compensating Transactions...`);\n      \n      // THE COMPENSATIONS (Manual Rollbacks)\n      await PaymentService.refund(userId, amount).catch(e => console.error('CRITICAL: Refund Failed', e));\n      await OrderService.cancelOrder(orderId);\n      console.log('Saga Rolled Back Successfully');\n    }\n  }\n}",
            },
          ],
        },
      ],
      gitSimulation: {
        branchName: "feat/checkout-saga",
        commitMessage:
          "feat: Implement Step Functions orchestrator for checkout",
        files: [],
        activeFileSnippet: {
          filename: "saga.ts",
          code: "execute() catches and calls refund()",
        },
      },
      community: {
        aiSummary:
          "Sagas are the single hardest part of microservices. Avoid distributed transactions unless absolutely mandated by the business.",
        solutions: [],
      },
    },
    // ==========================================
    // MODULE 4 TOPICS
    // ==========================================
    {
      id: "HCE-BACK-201-M4-T1",
      moduleId: "HCE-BACK-201-M4",
      sequenceNumber: 1,
      title: "Resilience Mechanisms: Circuit Breakers & Distributed Tracing",
      estimatedMinutes: 240,
      what: "Resilience engineering acknowledges that hardware and network failures are continuous. A 'Circuit Breaker' stops hitting a failing service so it can recover. 'Distributed Tracing' injects correlation IDs into requests to track them across hundreds of microservices.",
      why: "If Service A calls Service B, and Service B is freezing for 30 seconds, Service A will exhaust all its threads waiting for B. Service A will crash. Then the API gateway will crash. One small failure causes a cascading global outage. Furthermore, when the 500 Error finally reaches the client, without Distributed Tracing, you have literally zero idea which of the 50 services actually threw the exception.",
      when: "Required day-one in any synchronous microservice interaction.",
      how: "Circuit Breakers (e.g., Istio or Resilience4j) monitor error rates. If 50% of requests to Service B fail, the breaker 'Trips' (Opens), instantly returning a fast localized error to Service A instead of waiting 30 seconds. Distributed Tracing (Jaeger/OpenTelemetry) injects a 'Trace-Id' header at the API gateway that every service logs.",
      ecosystem:
        "Istio Service Mesh, OpenTelemetry, Jaeger Tracing, Resilience4j, Envoy Proxy.",
      realWorld:
        "Netflix's 'Hystrix' library (now largely replaced by Service Meshes) was famous for Circuit Breaking. If the Netflix 'Recommendation Engine' API failed, the Circuit Breaker tripped, and instead of crashing the app, it instantly returned a hardcoded list of 'Top 10 Classic Movies' to ensure the user could still watch something.",
      useCases: [
        "Preventing cascading network failures",
        "Providing elegant degradation of service to end users",
        "Debugging P99 latency issues across complex meshes",
      ],
      advantages: [
        "Transforms catastrophic global outages into localized, manageable degradations",
      ],
      disadvantages: [
        "Service Meshes (Istio) add massive operational complexity and RAM overhead to Kubernetes clusters",
      ],

      interviewTip:
        "Understand the 3 states of a Circuit Breaker: Closed (Traffic flows normal), Open (Traffic is instantly blocked, failing fast), Half-Open (Lets 1 request through to test if the failing service has recovered).",
      resumeBullet:
        "Deployed Istio Service Mesh across 40 Kubernetes deployments, implementing automated Circuit Breakers that reduced global cascading outage incidents to zero.",

      videos: [
        {
          type: "public",
          title: "Circuit Breaker Pattern - Fault Tolerant Microservices",
          author: "Defog Tech",
          views: "180K views",
          duration: "12:15",
          url: "https://www.youtube.com/watch?v=ADHcBxLs3EQ",
        },
        {
          type: "public",
          title: "Observability: OpenTelemetry & Jaeger",
          author: "Nana",
          views: "200K views",
          duration: "15:30",
          url: "https://www.youtube.com/watch?v=open_telemetry_primer",
        },
      ],
      moocs: [],
      blogs: [
        {
          type: "Documentation",
          title: "Circuit Breaker pattern",
          publisher: "Microsoft Architecture",
          readTime: "12 min",
          url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker",
        },
      ],
      scenarios: [
        {
          id: "4",
          difficulty: "Medium",
          title: "Graceful Degradation vs Failure",
          category: "UX Architecture",
          estimatedTime: "3 hours",
          scenarioDescription:
            "An e-commerce homepage pulls data from 'Product Catalog' and 'Review Service'. The Review Service database locks up, causing 10-second delays.",
          problemAnalysis:
            "Without a circuit breaker, the homepage takes 10+ seconds to load, frustrating the user so they leave. We need to cut the dead weight fast.",
          architectureLayers: [
            "API Gateway",
            "Review Service",
            "Circuit Breaker Middleware",
            "Product Catalog",
          ],
          toolsAndTech: [
            {
              name: "Circuit Breaker",
              justification:
                "Configured to timeout at 500ms. If the Review Service takes longer, it instantly returns an empty array `[]`.",
            },
          ],
          tradeOffs: [
            "Accuracy vs Availability. The user will see products with '0 Reviews' instead of real reviews. But they CAN still buy the product. Revenue is saved.",
          ],
          nfrConsiderations: [
            "Timeout Tuning: Finding the exact p99 threshold before aggressively tripping the circuit.",
          ],
          kpis: [
            "Homepage loads in < 800ms regardless of downstream Review service health",
          ],
          keyInsights:
            "A partial failure is infinitely better than a complete outage. Always design fallback payloads.",
        },
      ],
      playgrounds: [
        {
          title: "Circuit Breaker State Machine Simulation",
          description:
            "Simulating how a circuit breaker trips from CLOSED -> OPEN -> HALF-OPEN.",
          examples: [
            {
              language: "python",
              code: 'import time\nimport random\n\nclass CircuitBreaker:\n    def __init__(self, failure_threshold=3, retry_timeout=5):\n        self.state = \'CLOSED\'\n        self.failures = 0\n        self.threshold = failure_threshold\n        self.timeout = retry_timeout\n        self.last_failure_time = 0\n\n    def call_service(self):\n        if self.state == \'OPEN\':\n            if time.time() - self.last_failure_time > self.timeout:\n                self.state = \'HALF_OPEN\'\n                print("[Breaker] State -> HALF_OPEN. Testing recovering service...")\n            else:\n                return "[Breaker] FAIL FAST - Service is down."\n\n        # Simulate Service Call (60% chance to fail)\n        success = random.random() > 0.6\n        \n        if success:\n            self.failures = 0\n            if self.state == \'HALF_OPEN\':\n                 self.state = \'CLOSED\'\n                 print("[Breaker] State -> CLOSED. Service recovered.")\n            return "Service Data Successfully Reclaimed"\n        else:\n            self.failures += 1\n            self.last_failure_time = time.time()\n            if self.failures >= self.threshold:\n                 self.state = \'OPEN\'\n                 print("[Breaker] STATE -> OPEN. Tripping to protect cluster!")\n            return "Service Timeout Error!"\n\n# Run simulation\ncb = CircuitBreaker()\nfor i in range(10):\n    print(f"Req {i}: {cb.call_service()}")\n    time.sleep(1)',
            },
          ],
        },
      ],
      gitSimulation: {
        branchName: "infra/tracing",
        commitMessage: "ops: Inject X-B3-TraceId propagation across all APIs",
        files: [],
        activeFileSnippet: {
          filename: "middleware.js",
          code: "req.headers['x-correlation-id']",
        },
      },
      community: {
        aiSummary:
          "The most important header in microservices is the Correlation-ID. Without it, logs are useless.",
        solutions: [],
      },
    },
  ],
  videoCount: 65,
  articleCount: 30,
  problemCount: 15,
  capstoneProject: {
    title: "Microservice Event-Driven Ecosystem: E-Commerce Deconstruction",
    description:
      "You will migrate a legacy monolithic e-commerce application into three distinct Bounded Contexts (Order, Billing, Inventory) connected entirely via asynchronous RabbitMQ events, securing the synchronous edge with an API Gateway and Circuit Breakers.",
    estimatedDays: 25,
    skillsFocused: [
      "Domain-Driven Design",
      "RabbitMQ Configuration",
      "Saga Orchestration",
      "Resilience4j / Circuit Breaking",
      "Go Microservices",
      "PostgreSQL Isolation",
    ],
    steps: [
      {
        sequenceNumber: 1,
        title: "Context Mapping and Monolith Split",
        objective:
          "Analyze the legacy DB schema. Vertically slice it into 3 isolated PostgreSQL instances for Order, Billing, and Inventory.",
        skills: ["DDD", "Data Modeling", "Database-per-Service"],
        status: "Not Started",
      },
      {
        sequenceNumber: 2,
        title: "Asynchronous Infrastructure",
        objective:
          "Provision a RabbitMQ broker via Docker Compose. Write Go producers and consumers utilizing dead-letter queues.",
        skills: ["RabbitMQ", "AMQP", "Docker Compose"],
        status: "Not Started",
      },
      {
        sequenceNumber: 3,
        title: "Saga Choreography Implementation",
        objective:
          "Implement the distributed transaction. Order publishes 'OrderCreated'. Billing consumes it, charges the card, and publishes 'Billed'. Inventory consumes it.",
        skills: ["Event-Driven Mutators", "Pub/Sub"],
        status: "Not Started",
      },
      {
        sequenceNumber: 4,
        title: "Compensating Transactions",
        objective:
          "Introduce deliberate inventory failures. Program the Inventory service to publish an 'InventoryFailed' event that triggers the Billing service to automatically issue a Stripe refund.",
        skills: ["Saga Rollbacks", "Idempotent Consumers"],
        status: "Not Started",
      },
      {
        sequenceNumber: 5,
        title: "API Edge Gateway",
        objective:
          "Build an Nginx or Express Edge API Gateway to route client traffic to the appropriate autonomous microservice.",
        skills: ["API Gateway", "Reverse Proxy"],
        status: "Not Started",
      },
      {
        sequenceNumber: 6,
        title: "Circuit Breaking Simulation",
        objective:
          "Implement a Circuit Breaker on the Gateway. Simulate the Billing service crashing, and verify the Gateway fails fast, returning a graceful error to the user instantly.",
        skills: ["Resilience Engineering", "Fail-Fast Parameters"],
        status: "Not Started",
      },
    ],
  },
  totalEstimatedHours: 60,
  moduleCount: 4,
  estimatedCompletionDays: 60,
  createdAt: "2026-02-28T00:00:00Z",
  updatedAt: "2026-02-28T00:00:00Z",
  version: "3.0",
  status: "published",
};
