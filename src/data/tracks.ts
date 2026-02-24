export interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  title: string;
  what: string;
  why: string;
  when: string;
  how: string;
  ecosystem: string;
  realWorld: string;
  useCases: string[];
  advantages: string[];
  disadvantages: string[];
  interviewTip: string;
  resumeBullet: string;
  codeSnippet?: { language: string; code: string; output: string };
  scenario?: { title: string; context: string; constraints: string[]; deliverable: string };
}

export const backendModules: Module[] = [
  {
    id: "m1",
    title: "Foundations of Backend Engineering",
    topics: [
      {
        id: "t1",
        title: "What is Backend Engineering?",
        what: "Backend engineering is the discipline of building server-side systems that power applications — APIs, databases, authentication, business logic, and infrastructure.",
        why: "Every product needs a reliable, scalable backend. Frontend is the face; backend is the brain and backbone. Without it, no data persists, no logic executes, no system scales.",
        when: "Whenever you build anything beyond a static page: user accounts, data storage, real-time features, payments, AI integrations, or multi-service architectures.",
        how: "A client sends an HTTP request → the server routes it → middleware processes auth/validation → a handler executes business logic → the database is queried → a response is returned. This cycle repeats millions of times per second at scale.",
        ecosystem: "Node.js, Python (Django/Flask/FastAPI), Go, Java (Spring Boot), Rust, PostgreSQL, Redis, RabbitMQ, Kafka, Docker, Kubernetes, AWS/GCP/Azure.",
        realWorld: "Netflix processes 2+ billion API requests daily. Stripe's backend handles idempotent payment processing across 46 countries. Uber's backend orchestrates 25M+ rides daily across microservices.",
        useCases: ["REST/GraphQL APIs", "Authentication & authorization", "Background job processing", "Real-time event streaming", "Data pipeline orchestration"],
        advantages: ["Full control over data and business logic", "Language-agnostic — choose the best tool", "Scales independently from frontend", "Security boundaries at the server level"],
        disadvantages: ["Complexity grows with scale", "Debugging distributed systems is hard", "Infrastructure costs at scale", "Requires deep understanding of networking"],
        interviewTip: "When asked 'What does a backend engineer do?', go beyond 'write APIs.' Talk about system reliability, data integrity, scalability patterns, and operational excellence.",
        resumeBullet: "Designed and implemented RESTful backend services handling 10K+ requests/sec with <50ms p99 latency using Node.js and PostgreSQL.",
        codeSnippet: {
          language: "typescript",
          code: `import express from 'express';

const app = express();
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Users endpoint
app.get('/api/users/:id', async (req, res) => {
  const user = await db.users.findById(req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

app.listen(3000, () => console.log('Server running on :3000'));`,
          output: `Server running on :3000
GET /health → { "status": "ok", "uptime": 42.5 }
GET /api/users/1 → { "id": 1, "name": "Ada Lovelace", "role": "engineer" }`,
        },
        scenario: {
          title: "Design a User Service for a Startup",
          context: "A fintech startup needs a user management service that handles registration, authentication, profile updates, and account deactivation. Expected load: 5,000 DAU growing to 100,000 in 12 months.",
          constraints: ["Must comply with data privacy regulations", "Must support social OAuth + email/password", "Must handle concurrent profile updates safely", "Must be horizontally scalable"],
          deliverable: "A working user service with REST API, JWT auth, rate limiting, and database migrations.",
        },
      },
      {
        id: "t2",
        title: "HTTP, REST & API Design",
        what: "REST (Representational State Transfer) is an architectural style for designing networked applications using HTTP methods to perform CRUD operations on resources.",
        why: "REST is the lingua franca of web APIs. Understanding it deeply separates junior developers from engineers who can design systems that last. Every backend system exposes or consumes REST APIs.",
        when: "Whenever you need machine-to-machine or client-server communication. REST is ideal for stateless, cacheable, resource-oriented interactions.",
        how: "Resources are identified by URIs. HTTP methods (GET, POST, PUT, PATCH, DELETE) map to operations. Status codes communicate outcomes. Headers carry metadata. The body carries payloads in JSON/XML.",
        ecosystem: "OpenAPI/Swagger, Postman, cURL, Express.js, FastAPI, Spring Boot, API Gateway (AWS/GCP), rate limiters, API versioning strategies.",
        realWorld: "GitHub's REST API serves millions of developers daily. Stripe's API is considered the gold standard — consistent naming, idempotent operations, pagination, versioning, and incredible documentation.",
        useCases: ["Public/partner APIs", "Mobile app backends", "Microservice communication", "CRUD applications", "Webhook integrations"],
        advantages: ["Simple and well-understood", "Stateless — easy to scale", "Cacheable with HTTP semantics", "Tooling ecosystem is massive"],
        disadvantages: ["Over-fetching and under-fetching", "No real-time push (need polling/WebSocket)", "Can become chatty for complex operations", "Versioning can be painful"],
        interviewTip: "Know the difference between PUT and PATCH. Understand idempotency. Be able to design a clean API for any domain in under 5 minutes on a whiteboard.",
        resumeBullet: "Architected RESTful API layer with OpenAPI spec, versioning strategy, and rate limiting, reducing integration time for partner teams by 60%.",
        codeSnippet: {
          language: "typescript",
          code: `// Well-designed REST endpoint
app.post('/api/v1/orders', validateBody(OrderSchema), async (req, res) => {
  const idempotencyKey = req.headers['idempotency-key'];
  
  // Check for duplicate request
  const existing = await cache.get(\`order:\${idempotencyKey}\`);
  if (existing) return res.status(200).json(existing);
  
  const order = await OrderService.create({
    ...req.body,
    userId: req.user.id,
  });
  
  await cache.set(\`order:\${idempotencyKey}\`, order, { ttl: 86400 });
  
  res.status(201).json({
    data: order,
    links: {
      self: \`/api/v1/orders/\${order.id}\`,
      payment: \`/api/v1/orders/\${order.id}/payment\`,
    }
  });
});`,
          output: `POST /api/v1/orders → 201 Created
{
  "data": { "id": "ord_abc123", "status": "pending", "total": 99.99 },
  "links": { "self": "/api/v1/orders/ord_abc123", "payment": "/api/v1/orders/ord_abc123/payment" }
}`,
        },
        scenario: {
          title: "Design an API for an E-Commerce Platform",
          context: "You're designing the API for a marketplace where sellers list products and buyers place orders. The API will be consumed by web, mobile, and partner integrations.",
          constraints: ["Must support pagination and filtering", "Must handle concurrent inventory updates", "Must version the API for backward compatibility", "Must include rate limiting per API key"],
          deliverable: "OpenAPI spec + implementation of 5 core endpoints (products CRUD + order creation).",
        },
      },
    ],
  },
  {
    id: "m2",
    title: "Database Engineering",
    topics: [
      {
        id: "t3",
        title: "SQL & Relational Databases",
        what: "Relational databases organize data into tables with defined schemas, relationships (via foreign keys), and use SQL for querying. They guarantee ACID properties for data integrity.",
        why: "Most business data is inherently relational. Understanding SQL deeply is non-negotiable for any backend engineer. It's the foundation of data modeling, reporting, and system design.",
        when: "When you need strong consistency, complex queries with joins, transactions, or well-structured data with clear relationships. Ideal for financial systems, user management, content platforms.",
        how: "Data is stored in rows within tables. Indexes speed up reads. Query planners optimize execution. Transactions ensure atomicity. Constraints enforce data integrity at the database level.",
        ecosystem: "PostgreSQL, MySQL, SQLite, SQL Server. ORMs: Prisma, TypeORM, Sequelize, SQLAlchemy, Hibernate.",
        realWorld: "Instagram runs on PostgreSQL and handles billions of rows. Banks rely on ACID-compliant relational databases for every transaction. Shopify uses MySQL for its core commerce engine.",
        useCases: ["User data storage", "Financial transactions", "Inventory management", "Content management", "Analytics and reporting"],
        advantages: ["ACID guarantees", "Mature tooling and community", "Complex queries with JOINs", "Schema enforcement"],
        disadvantages: ["Vertical scaling limits", "Schema migrations can be painful", "Not ideal for unstructured data", "Can be slower for simple key-value lookups"],
        interviewTip: "Be ready to write complex SQL queries on the spot. Know the difference between INNER JOIN, LEFT JOIN, and CROSS JOIN. Understand indexing trade-offs.",
        resumeBullet: "Optimized PostgreSQL queries reducing p95 latency from 800ms to 45ms through strategic indexing and query plan analysis.",
      },
    ],
  },
];
