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

export interface VideoResource {
  id: string;
  title: string;
  channel: string;
  duration: string;
  views: string;
  thumbnail: string;
  type: "public" | "premium";
  url?: string;
}

export interface BlogResource {
  id: string;
  title: string;
  source: string;
  readTime: string;
  url: string;
  tag: string;
}

export interface MOOCResource {
  id: string;
  title: string;
  platform: string;
  instructor: string;
  rating: number;
  enrolled: string;
  duration: string;
}

export interface ScenarioProblem {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Expert";
  domain: string;
  context: string;
  constraints: string[];
  deliverable: string;
  estimatedTime: string;
}

export interface CommunityUser {
  id: string;
  name: string;
  avatar: string;
  role: string;
  level: string;
}

export interface CommunitySolution {
  id: string;
  userId: string;
  scenarioId: string;
  summary: string;
  upvotes: number;
  comments: number;
  isTopSolution: boolean;
  createdAt: string;
}

// Mock community users
export const communityUsers: CommunityUser[] = [
  { id: "u1", name: "Arjun Mehta", avatar: "AM", role: "Backend Engineer", level: "Advanced" },
  { id: "u2", name: "Sarah Chen", avatar: "SC", role: "Full Stack Dev", level: "Intermediate" },
  { id: "u3", name: "Olumide Adekunle", avatar: "OA", role: "Cloud Engineer", level: "Advanced" },
  { id: "u4", name: "Priya Sharma", avatar: "PS", role: "SDE-2 @ Amazon", level: "Expert" },
  { id: "u5", name: "James Okonkwo", avatar: "JO", role: "Platform Engineer", level: "Intermediate" },
  { id: "u6", name: "Maria Rodriguez", avatar: "MR", role: "Data Engineer", level: "Advanced" },
  { id: "u7", name: "Kenji Tanaka", avatar: "KT", role: "DevOps Lead", level: "Expert" },
];

export const communitySolutions: CommunitySolution[] = [
  { id: "cs1", userId: "u4", scenarioId: "sp1", summary: "Implemented horizontal scaling with Redis session store and JWT rotation. Used connection pooling with PgBouncer for database optimization.", upvotes: 142, comments: 23, isTopSolution: true, createdAt: "2 days ago" },
  { id: "cs2", userId: "u1", scenarioId: "sp1", summary: "Built microservice architecture with gRPC inter-service communication. Added circuit breaker pattern for resilience.", upvotes: 89, comments: 15, isTopSolution: false, createdAt: "3 days ago" },
  { id: "cs3", userId: "u3", scenarioId: "sp1", summary: "Deployed on Kubernetes with HPA. Used Istio service mesh for traffic management and mTLS.", upvotes: 76, comments: 11, isTopSolution: false, createdAt: "5 days ago" },
  { id: "cs4", userId: "u2", scenarioId: "sp1", summary: "Monolith-first approach with clean module boundaries. Added event sourcing for audit trail.", upvotes: 54, comments: 8, isTopSolution: false, createdAt: "1 week ago" },
  { id: "cs5", userId: "u6", scenarioId: "sp1", summary: "Event-driven architecture using Kafka. Implemented CQRS for read/write separation.", upvotes: 41, comments: 6, isTopSolution: false, createdAt: "1 week ago" },
];

// Topic resources
export const topicVideos: Record<string, VideoResource[]> = {
  t1: [
    { id: "v1", title: "Backend Engineering Explained — Complete Roadmap 2024", channel: "Fireship", duration: "12:34", views: "2.1M", thumbnail: "", type: "public" },
    { id: "v2", title: "How Backend Systems Actually Work", channel: "ByteByteGo", duration: "18:22", views: "890K", thumbnail: "", type: "public" },
    { id: "v3", title: "Production Backend Architecture Deep Dive", channel: "TGL Academy", duration: "45:10", views: "12K", thumbnail: "", type: "premium" },
    { id: "v4", title: "Building Your First Backend — Hands-on Workshop", channel: "TGL Academy", duration: "1:22:00", views: "8.4K", thumbnail: "", type: "premium" },
  ],
  t2: [
    { id: "v5", title: "RESTful API Design — Best Practices", channel: "Traversy Media", duration: "32:15", views: "1.5M", thumbnail: "", type: "public" },
    { id: "v6", title: "API Design is Hard — Here's Why", channel: "ThePrimeagen", duration: "14:08", views: "620K", thumbnail: "", type: "public" },
    { id: "v7", title: "Enterprise API Architecture Masterclass", channel: "TGL Academy", duration: "58:30", views: "15K", thumbnail: "", type: "premium" },
    { id: "v8", title: "Idempotent APIs & Error Handling Patterns", channel: "TGL Academy", duration: "42:00", views: "9.2K", thumbnail: "", type: "premium" },
  ],
  t3: [
    { id: "v9", title: "SQL Tutorial — Full Course for Beginners", channel: "freeCodeCamp", duration: "4:20:00", views: "18M", thumbnail: "", type: "public" },
    { id: "v10", title: "PostgreSQL Performance Tuning", channel: "Hussein Nasser", duration: "28:45", views: "340K", thumbnail: "", type: "public" },
    { id: "v11", title: "Advanced SQL Query Optimization", channel: "TGL Academy", duration: "1:05:00", views: "11K", thumbnail: "", type: "premium" },
    { id: "v12", title: "Database Indexing Strategies Workshop", channel: "TGL Academy", duration: "52:00", views: "7.8K", thumbnail: "", type: "premium" },
  ],
};

export const topicBlogs: Record<string, BlogResource[]> = {
  t1: [
    { id: "b1", title: "The Complete Guide to Backend Development in 2024", source: "roadmap.sh", readTime: "15 min", url: "#", tag: "Guide" },
    { id: "b2", title: "Backend Architecture at Scale — Lessons from Netflix", source: "Netflix Tech Blog", readTime: "12 min", url: "#", tag: "Case Study" },
    { id: "b3", title: "Choosing the Right Backend Language", source: "Dev.to", readTime: "8 min", url: "#", tag: "Opinion" },
  ],
  t2: [
    { id: "b4", title: "Best Practices for Designing a Pragmatic RESTful API", source: "Vinay Sahni", readTime: "20 min", url: "#", tag: "Guide" },
    { id: "b5", title: "How Stripe Builds Beautiful APIs", source: "Stripe Engineering", readTime: "10 min", url: "#", tag: "Case Study" },
    { id: "b6", title: "API Versioning — The Complete Guide", source: "Postman Blog", readTime: "7 min", url: "#", tag: "Tutorial" },
  ],
  t3: [
    { id: "b7", title: "Use the Index, Luke — A Guide to Database Performance", source: "use-the-index-luke.com", readTime: "25 min", url: "#", tag: "Deep Dive" },
    { id: "b8", title: "How Instagram Scaled PostgreSQL to 1B+ Users", source: "Instagram Engineering", readTime: "14 min", url: "#", tag: "Case Study" },
    { id: "b9", title: "SQL vs NoSQL — The Complete Comparison", source: "MongoDB Blog", readTime: "9 min", url: "#", tag: "Comparison" },
  ],
};

export const topicMOOCs: Record<string, MOOCResource[]> = {
  t1: [
    { id: "mc1", title: "Server-side Development with NodeJS, Express and MongoDB", platform: "Coursera", instructor: "Jogesh Muppala", rating: 4.7, enrolled: "120K+", duration: "52 hours" },
    { id: "mc2", title: "The Complete Backend Bootcamp", platform: "Udemy", instructor: "Dr. Angela Yu", rating: 4.8, enrolled: "350K+", duration: "65 hours" },
  ],
  t2: [
    { id: "mc3", title: "Designing RESTful APIs", platform: "Udacity", instructor: "Google Engineers", rating: 4.5, enrolled: "85K+", duration: "8 hours" },
    { id: "mc4", title: "API Design & Fundamentals of Google Cloud Apigee", platform: "Coursera", instructor: "Google Cloud", rating: 4.6, enrolled: "45K+", duration: "24 hours" },
  ],
  t3: [
    { id: "mc5", title: "Databases and SQL for Data Science", platform: "Coursera", instructor: "IBM", rating: 4.6, enrolled: "280K+", duration: "20 hours" },
    { id: "mc6", title: "The Complete SQL Bootcamp", platform: "Udemy", instructor: "Jose Portilla", rating: 4.7, enrolled: "680K+", duration: "9 hours" },
  ],
};

export const topicScenarios: Record<string, ScenarioProblem[]> = {
  t1: [
    { id: "sp1", title: "Design a User Service for a Fintech Startup", difficulty: "Medium", domain: "Fintech", context: "A fintech startup needs a user management service handling registration, auth, profile updates, and account deactivation. Expected: 5K DAU → 100K in 12 months.", constraints: ["Data privacy compliance", "Social OAuth + email/password", "Concurrent profile update safety", "Horizontally scalable"], deliverable: "Working user service with REST API, JWT auth, rate limiting, and DB migrations.", estimatedTime: "4-6 hours" },
    { id: "sp2", title: "Build a Notification Engine", difficulty: "Hard", domain: "SaaS", context: "Multi-channel notification system supporting email, SMS, push, and in-app notifications with user preferences and rate limiting.", constraints: ["Sub-second delivery for critical alerts", "User preference management", "Template engine with i18n", "Deduplication logic"], deliverable: "Notification service with priority queuing and delivery tracking.", estimatedTime: "6-8 hours" },
    { id: "sp3", title: "Rate Limiter Service", difficulty: "Medium", domain: "Infrastructure", context: "Build a distributed rate limiter that protects APIs from abuse while allowing legitimate burst traffic.", constraints: ["Support sliding window algorithm", "Redis-backed for distributed use", "Configurable per-endpoint rules", "Must handle 50K req/sec"], deliverable: "Rate limiter middleware with dashboard for rule management.", estimatedTime: "3-4 hours" },
    { id: "sp4", title: "Health Check & Monitoring System", difficulty: "Easy", domain: "DevOps", context: "Implement comprehensive health checks for a microservices backend with dependency monitoring.", constraints: ["Check DB, cache, queue connections", "Expose /health and /ready endpoints", "Aggregate service health", "Alert on degradation"], deliverable: "Health check service with status dashboard.", estimatedTime: "2-3 hours" },
    { id: "sp5", title: "Multi-Tenant Configuration Service", difficulty: "Expert", domain: "Enterprise", context: "Build a configuration management service supporting multi-tenancy with feature flags, A/B testing, and gradual rollouts.", constraints: ["Real-time config propagation", "Audit trail for all changes", "Rollback capability", "SDK for 3 languages"], deliverable: "Config service with admin UI and client SDKs.", estimatedTime: "8-12 hours" },
    { id: "sp6", title: "API Gateway Implementation", difficulty: "Hard", domain: "Platform", context: "Design and implement an API gateway that handles routing, auth, rate limiting, and request transformation.", constraints: ["Plugin architecture", "Circuit breaker pattern", "Request/response transformation", "Analytics collection"], deliverable: "API gateway with plugin system and admin console.", estimatedTime: "6-10 hours" },
    { id: "sp7", title: "Background Job Processing System", difficulty: "Medium", domain: "Infrastructure", context: "Build a reliable background job processing system with retry logic, dead letter queues, and job prioritization.", constraints: ["At-least-once delivery", "Configurable retry strategies", "Job dependency chains", "Monitoring dashboard"], deliverable: "Job processor with web UI for monitoring.", estimatedTime: "4-6 hours" },
  ],
  t2: [
    { id: "sp8", title: "Design an E-Commerce API", difficulty: "Hard", domain: "E-Commerce", context: "Design the API for a marketplace with sellers listing products and buyers placing orders.", constraints: ["Pagination and filtering", "Concurrent inventory updates", "API versioning", "Rate limiting per API key"], deliverable: "OpenAPI spec + implementation of 5 core endpoints.", estimatedTime: "5-7 hours" },
    { id: "sp9", title: "Build a Webhook System", difficulty: "Medium", domain: "Platform", context: "Design a webhook delivery system with retry logic, signature verification, and delivery tracking.", constraints: ["Exponential backoff", "HMAC signature verification", "Delivery logs with replay", "Concurrent delivery"], deliverable: "Webhook service with management API.", estimatedTime: "4-5 hours" },
    { id: "sp10", title: "GraphQL API for Social Platform", difficulty: "Hard", domain: "Social", context: "Build a GraphQL API for a social platform supporting feeds, connections, and real-time updates.", constraints: ["N+1 query prevention", "Cursor-based pagination", "Subscriptions for real-time", "Query complexity limiting"], deliverable: "GraphQL server with schema, resolvers, and subscriptions.", estimatedTime: "6-8 hours" },
    { id: "sp11", title: "API Documentation Generator", difficulty: "Easy", domain: "Developer Tools", context: "Build an automated API documentation system from code annotations.", constraints: ["Support OpenAPI 3.0", "Interactive try-it-out", "Auto-generate examples", "Version comparison"], deliverable: "Doc generator with hosted output.", estimatedTime: "3-4 hours" },
    { id: "sp12", title: "REST API Testing Framework", difficulty: "Medium", domain: "Testing", context: "Build a framework for automated API contract testing.", constraints: ["Schema validation", "Snapshot testing", "CI/CD integration", "Report generation"], deliverable: "Testing framework with CLI and CI integration.", estimatedTime: "4-6 hours" },
  ],
  t3: [
    { id: "sp13", title: "Database Migration System", difficulty: "Medium", domain: "Infrastructure", context: "Build a database migration tool supporting forward/backward migrations with safety checks.", constraints: ["Zero-downtime migrations", "Rollback support", "Migration dependency graph", "Dry-run mode"], deliverable: "Migration tool with CLI and safety checks.", estimatedTime: "4-5 hours" },
    { id: "sp14", title: "Query Performance Analyzer", difficulty: "Hard", domain: "DBA", context: "Build a tool that analyzes slow queries, suggests indexes, and visualizes execution plans.", constraints: ["Parse EXPLAIN output", "Suggest optimal indexes", "Track query patterns over time", "Alert on regressions"], deliverable: "Query analyzer with recommendation engine.", estimatedTime: "6-8 hours" },
    { id: "sp15", title: "Data Access Layer Generator", difficulty: "Medium", domain: "Developer Tools", context: "Build a type-safe data access layer generator from database schemas.", constraints: ["Support PostgreSQL", "Generate TypeScript types", "Include query builder", "Handle relations"], deliverable: "Code generator with CLI.", estimatedTime: "5-6 hours" },
    { id: "sp16", title: "Connection Pool Manager", difficulty: "Hard", domain: "Infrastructure", context: "Build a smart connection pool manager with health checks and auto-scaling.", constraints: ["Dynamic pool sizing", "Connection health monitoring", "Read/write splitting", "Metrics export"], deliverable: "Connection pool library with monitoring.", estimatedTime: "5-7 hours" },
    { id: "sp17", title: "Database Backup & Recovery System", difficulty: "Expert", domain: "Operations", context: "Build automated backup system with point-in-time recovery.", constraints: ["Incremental backups", "Cross-region replication", "Encryption at rest", "Recovery testing"], deliverable: "Backup service with recovery procedures.", estimatedTime: "8-10 hours" },
  ],
};

export const topicCodeExamples: Record<string, { title: string; language: string; code: string; output: string }[]> = {
  t1: [
    {
      title: "Express Server with Middleware",
      language: "typescript",
      code: `import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.path}\`);
  next();
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/api/users/:id', async (req, res) => {
  const user = await db.users.findById(req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

app.listen(3000, () => console.log('Server on :3000'));`,
      output: `Server on :3000
[2024-01-15T10:30:00.000Z] GET /health
→ { "status": "ok", "uptime": 42.5 }`
    },
    {
      title: "Error Handling Pattern",
      language: "typescript",
      code: `class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
}

// Global error handler
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  res.status(status).json({
    error: {
      message: err.isOperational ? err.message : 'Internal error',
      code: err.code || 'UNKNOWN',
    }
  });
});`,
      output: `// Usage:
throw new AppError(404, 'User not found');
→ { "error": { "message": "User not found", "code": "UNKNOWN" } }`
    },
    {
      title: "Environment Configuration",
      language: "typescript",
      code: `import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
});

export const env = envSchema.parse(process.env);`,
      output: `✓ Environment validated
  NODE_ENV=production
  PORT=3000
  DATABASE_URL=postgresql://...
  REDIS_URL=redis://...`
    },
  ],
  t2: [
    {
      title: "Idempotent POST Endpoint",
      language: "typescript",
      code: `app.post('/api/v1/orders', validateBody(OrderSchema), async (req, res) => {
  const idempotencyKey = req.headers['idempotency-key'];
  
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
  "data": { "id": "ord_abc123", "status": "pending" },
  "links": { "self": "/api/v1/orders/ord_abc123" }
}`
    },
    {
      title: "Pagination Middleware",
      language: "typescript",
      code: `function paginate(defaultLimit = 20, maxLimit = 100) {
  return (req, res, next) => {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(maxLimit, parseInt(req.query.limit) || defaultLimit);
    req.pagination = { page, limit, offset: (page - 1) * limit };
    next();
  };
}

app.get('/api/products', paginate(), async (req, res) => {
  const { rows, count } = await Product.findAndCountAll({
    offset: req.pagination.offset,
    limit: req.pagination.limit,
  });
  res.json({
    data: rows,
    meta: {
      total: count,
      page: req.pagination.page,
      pages: Math.ceil(count / req.pagination.limit),
    }
  });
});`,
      output: `GET /api/products?page=2&limit=10
{
  "data": [...10 products...],
  "meta": { "total": 156, "page": 2, "pages": 16 }
}`
    },
    {
      title: "Rate Limiter Middleware",
      language: "typescript",
      code: `import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests', retryAfter: '15m' },
  keyGenerator: (req) => req.headers['x-api-key'] || req.ip,
});

app.use('/api/', apiLimiter);`,
      output: `GET /api/data → 200 OK
Headers: X-RateLimit-Remaining: 99

After 100 requests:
GET /api/data → 429 Too Many Requests
{ "error": "Too many requests", "retryAfter": "15m" }`
    },
  ],
  t3: [
    {
      title: "Complex JOIN Query",
      language: "sql",
      code: `-- Find top 10 customers by order value with their last order date
SELECT 
  c.id,
  c.name,
  c.email,
  COUNT(o.id) AS total_orders,
  SUM(o.total_amount) AS lifetime_value,
  MAX(o.created_at) AS last_order_date
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
WHERE o.status != 'cancelled'
  AND o.created_at >= NOW() - INTERVAL '1 year'
GROUP BY c.id, c.name, c.email
HAVING SUM(o.total_amount) > 1000
ORDER BY lifetime_value DESC
LIMIT 10;`,
      output: ` id  | name          | total_orders | lifetime_value | last_order_date
-----+---------------+--------------+----------------+------------------
 142 | Ada Lovelace  |           47 |      $12,450.00 | 2024-01-14
 891 | Grace Hopper  |           35 |       $9,320.00 | 2024-01-12
 ...`
    },
    {
      title: "Index Strategy Analysis",
      language: "sql",
      code: `-- Before: Sequential scan (800ms)
EXPLAIN ANALYZE
SELECT * FROM events 
WHERE user_id = 'usr_123' 
  AND event_type = 'purchase'
  AND created_at > '2024-01-01';

-- Create composite index
CREATE INDEX CONCURRENTLY idx_events_user_type_date 
ON events (user_id, event_type, created_at DESC);

-- After: Index scan (2ms)
EXPLAIN ANALYZE
SELECT * FROM events 
WHERE user_id = 'usr_123' 
  AND event_type = 'purchase'
  AND created_at > '2024-01-01';`,
      output: `Before: Seq Scan on events → 800ms, 2.1M rows scanned
After:  Index Scan using idx_events_user_type_date → 2ms, 47 rows`
    },
  ],
};

// Knowledge graph data
export interface GraphNode {
  id: string;
  label: string;
  mastery: number;
  x: number;
  y: number;
}

export interface GraphEdge {
  from: string;
  to: string;
}

export const knowledgeGraphNodes: GraphNode[] = [
  { id: "kg1", label: "HTTP & REST", mastery: 90, x: 300, y: 80 },
  { id: "kg2", label: "API Gateway", mastery: 45, x: 500, y: 80 },
  { id: "kg3", label: "Load Balancer", mastery: 35, x: 500, y: 200 },
  { id: "kg4", label: "Caching (Redis)", mastery: 60, x: 150, y: 200 },
  { id: "kg5", label: "Database", mastery: 70, x: 300, y: 200 },
  { id: "kg6", label: "Kafka / MQ", mastery: 20, x: 150, y: 320 },
  { id: "kg7", label: "Rate Limiting", mastery: 30, x: 500, y: 320 },
  { id: "kg8", label: "Auth (JWT/OAuth)", mastery: 55, x: 300, y: 320 },
  { id: "kg9", label: "Microservices", mastery: 15, x: 150, y: 440 },
  { id: "kg10", label: "DB Sharding", mastery: 10, x: 300, y: 440 },
  { id: "kg11", label: "System Design", mastery: 25, x: 500, y: 440 },
];

export const knowledgeGraphEdges: GraphEdge[] = [
  { from: "kg1", to: "kg2" },
  { from: "kg1", to: "kg5" },
  { from: "kg2", to: "kg3" },
  { from: "kg2", to: "kg7" },
  { from: "kg4", to: "kg5" },
  { from: "kg5", to: "kg6" },
  { from: "kg5", to: "kg10" },
  { from: "kg8", to: "kg2" },
  { from: "kg8", to: "kg1" },
  { from: "kg6", to: "kg9" },
  { from: "kg3", to: "kg9" },
  { from: "kg9", to: "kg11" },
  { from: "kg10", to: "kg11" },
  { from: "kg7", to: "kg11" },
];

// Capstone project data
export interface CapstonePhase {
  module: string;
  title: string;
  description: string;
  components: string[];
  completed: boolean;
}

export const backendCapstone = {
  title: "Build a Scalable Telemetry System",
  description: "A production-grade telemetry ingestion and analytics platform that processes millions of events per second.",
  phases: [
    { module: "Foundations", title: "Core API Server", description: "Set up Express server with health checks, error handling, and structured logging.", components: ["Express Server", "Health Endpoint", "Error Handler", "Logger"], completed: true },
    { module: "HTTP & REST", title: "Telemetry Ingestion API", description: "Build RESTful endpoints for event ingestion with validation, batching, and idempotency.", components: ["POST /events", "Batch Endpoint", "Idempotency Keys", "Rate Limiter"], completed: true },
    { module: "Database", title: "Event Storage Layer", description: "Design schema for time-series event data with proper indexing and partitioning.", components: ["PostgreSQL Schema", "TimescaleDB Extension", "Partitioned Tables", "Query Layer"], completed: false },
    { module: "Caching", title: "Redis Caching Layer", description: "Add Redis for session caching, rate limiting counters, and hot query results.", components: ["Redis Client", "Cache Middleware", "Rate Limit Store", "Query Cache"], completed: false },
    { module: "Message Queues", title: "Event Processing Pipeline", description: "Implement Kafka for async event processing with consumer groups.", components: ["Kafka Producer", "Consumer Group", "Dead Letter Queue", "Retry Logic"], completed: false },
    { module: "Scaling", title: "Horizontal Scaling", description: "Add load balancing, connection pooling, and auto-scaling configuration.", components: ["Nginx Config", "PgBouncer", "K8s HPA", "Health Probes"], completed: false },
    { module: "System Design", title: "Full Architecture", description: "Complete the system with monitoring, alerting, and disaster recovery.", components: ["Prometheus Metrics", "Grafana Dashboards", "PagerDuty Alerts", "DR Runbook"], completed: false },
  ] as CapstonePhase[],
};

// Git simulation data
export const gitFiles: Record<string, { name: string; content: string }[]> = {
  src: [
    { name: "index.ts", content: `import express from 'express';\nimport { router } from './routes';\nimport { errorHandler } from './middleware/error';\n\nconst app = express();\napp.use(express.json());\napp.use('/api', router);\napp.use(errorHandler);\n\napp.listen(3000);` },
    { name: "routes.ts", content: `import { Router } from 'express';\nimport { UserController } from './controllers/user';\n\nexport const router = Router();\nrouter.get('/users', UserController.list);\nrouter.get('/users/:id', UserController.getById);\nrouter.post('/users', UserController.create);` },
    { name: "service.ts", content: `import { db } from './database';\n\nexport class UserService {\n  static async findAll(opts) {\n    return db.query('SELECT * FROM users LIMIT $1 OFFSET $2', [opts.limit, opts.offset]);\n  }\n  static async findById(id: string) {\n    return db.query('SELECT * FROM users WHERE id = $1', [id]);\n  }\n}` },
    { name: "config.ts", content: `export const config = {\n  port: process.env.PORT || 3000,\n  db: {\n    host: process.env.DB_HOST || 'localhost',\n    port: parseInt(process.env.DB_PORT || '5432'),\n    database: process.env.DB_NAME || 'app_dev',\n  },\n  redis: { url: process.env.REDIS_URL || 'redis://localhost:6379' },\n};` },
  ],
  tests: [
    { name: "service.test.ts", content: `import { UserService } from '../src/service';\n\ndescribe('UserService', () => {\n  test('findAll returns paginated users', async () => {\n    const users = await UserService.findAll({ limit: 10, offset: 0 });\n    expect(users).toHaveLength(10);\n  });\n\n  test('findById returns null for missing user', async () => {\n    const user = await UserService.findById('nonexistent');\n    expect(user).toBeNull();\n  });\n});` },
  ],
  root: [
    { name: "package.json", content: `{\n  "name": "user-service",\n  "version": "1.0.0",\n  "scripts": {\n    "dev": "tsx watch src/index.ts",\n    "build": "tsc",\n    "test": "vitest run",\n    "lint": "eslint src/"\n  }\n}` },
    { name: ".env.example", content: `PORT=3000\nDB_HOST=localhost\nDB_PORT=5432\nDB_NAME=app_dev\nREDIS_URL=redis://localhost:6379\nJWT_SECRET=change-me-in-production` },
  ],
};

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

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

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
        why: "REST is the lingua franca of web APIs. Understanding it deeply separates junior developers from engineers who can design systems that last.",
        when: "Whenever you need machine-to-machine or client-server communication. REST is ideal for stateless, cacheable, resource-oriented interactions.",
        how: "Resources are identified by URIs. HTTP methods (GET, POST, PUT, PATCH, DELETE) map to operations. Status codes communicate outcomes. Headers carry metadata.",
        ecosystem: "OpenAPI/Swagger, Postman, cURL, Express.js, FastAPI, Spring Boot, API Gateway (AWS/GCP), rate limiters, API versioning strategies.",
        realWorld: "GitHub's REST API serves millions of developers daily. Stripe's API is considered the gold standard — consistent naming, idempotent operations, pagination, versioning.",
        useCases: ["Public/partner APIs", "Mobile app backends", "Microservice communication", "CRUD applications", "Webhook integrations"],
        advantages: ["Simple and well-understood", "Stateless — easy to scale", "Cacheable with HTTP semantics", "Tooling ecosystem is massive"],
        disadvantages: ["Over-fetching and under-fetching", "No real-time push (need polling/WebSocket)", "Can become chatty for complex operations", "Versioning can be painful"],
        interviewTip: "Know the difference between PUT and PATCH. Understand idempotency. Be able to design a clean API for any domain in under 5 minutes.",
        resumeBullet: "Architected RESTful API layer with OpenAPI spec, versioning strategy, and rate limiting, reducing integration time for partner teams by 60%.",
        codeSnippet: {
          language: "typescript",
          code: `app.post('/api/v1/orders', validateBody(OrderSchema), async (req, res) => {
  const idempotencyKey = req.headers['idempotency-key'];
  const existing = await cache.get(\`order:\${idempotencyKey}\`);
  if (existing) return res.status(200).json(existing);
  
  const order = await OrderService.create({
    ...req.body, userId: req.user.id,
  });
  
  await cache.set(\`order:\${idempotencyKey}\`, order, { ttl: 86400 });
  res.status(201).json({ data: order });
});`,
          output: `POST /api/v1/orders → 201 Created
{ "data": { "id": "ord_abc123", "status": "pending", "total": 99.99 } }`,
        },
        scenario: {
          title: "Design an API for an E-Commerce Platform",
          context: "You're designing the API for a marketplace where sellers list products and buyers place orders.",
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
        what: "Relational databases organize data into tables with defined schemas, relationships (via foreign keys), and use SQL for querying. They guarantee ACID properties.",
        why: "Most business data is inherently relational. Understanding SQL deeply is non-negotiable for any backend engineer.",
        when: "When you need strong consistency, complex queries with joins, transactions, or well-structured data with clear relationships.",
        how: "Data is stored in rows within tables. Indexes speed up reads. Query planners optimize execution. Transactions ensure atomicity. Constraints enforce integrity.",
        ecosystem: "PostgreSQL, MySQL, SQLite, SQL Server. ORMs: Prisma, TypeORM, Sequelize, SQLAlchemy, Hibernate.",
        realWorld: "Instagram runs on PostgreSQL and handles billions of rows. Banks rely on ACID-compliant relational databases for every transaction.",
        useCases: ["User data storage", "Financial transactions", "Inventory management", "Content management", "Analytics and reporting"],
        advantages: ["ACID guarantees", "Mature tooling and community", "Complex queries with JOINs", "Schema enforcement"],
        disadvantages: ["Vertical scaling limits", "Schema migrations can be painful", "Not ideal for unstructured data", "Can be slower for simple key-value lookups"],
        interviewTip: "Be ready to write complex SQL queries on the spot. Know the difference between INNER JOIN, LEFT JOIN, and CROSS JOIN. Understand indexing trade-offs.",
        resumeBullet: "Optimized PostgreSQL queries reducing p95 latency from 800ms to 45ms through strategic indexing and query plan analysis.",
      },
    ],
  },
];
