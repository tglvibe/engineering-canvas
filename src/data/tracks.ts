export interface Module {
  id: string;
  titleKey?: string;
  title?: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  titleKey?: string;
  title?: string;
  whatKey?: string;
  what?: string;
  whyKey?: string;
  why?: string;
  whenKey?: string;
  when?: string;
  howKey?: string;
  how?: string;
  ecosystemKey?: string;
  ecosystem?: string;
  realWorldKey?: string;
  realWorld?: string;
  useCasesKeys?: string[];
  useCases?: string[];
  advantagesKeys?: string[];
  advantages?: string[];
  disadvantagesKeys?: string[];
  disadvantages?: string[];
  interviewTipKey?: string;
  interviewTip?: string;
  resumeBulletKey?: string;
  resumeBullet?: string;
  codeSnippet?: { language: string; code: string; output: string };
  scenario?: { titleKey?: string; title?: string; contextKey?: string; context?: string; constraintsKeys?: string[]; constraints?: string[]; deliverableKey?: string; deliverable?: string };
}

export interface VideoResource {
  id: string;
  titleKey: string;
  channel: string;
  duration: string;
  views: string;
  thumbnail: string;
  type: "public" | "premium";
  url?: string;
}

export interface BlogResource {
  id: string;
  titleKey: string;
  source: string;
  readTimeKey: string;
  url: string;
  tagKey: string;
}

export interface MOOCResource {
  id: string;
  titleKey: string;
  platform: string;
  instructor: string;
  rating: number;
  enrolled: string;
  durationKey: string;
}

export interface ScenarioProblem {
  id: string;
  titleKey: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Expert";
  domainKey: string;
  contextKey: string;
  constraintsKeys: string[];
  deliverableKey: string;
  estimatedTimeKey: string;
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
  summaryKey: string;
  upvotes: number;
  comments: number;
  isTopSolution: boolean;
  createdAtKey: string;
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
  { id: "cs1", userId: "u4", scenarioId: "sp1", summaryKey: "solutions.cs1.summary", upvotes: 142, comments: 23, isTopSolution: true, createdAtKey: "common.time.2daysAgo" },
  { id: "cs2", userId: "u1", scenarioId: "sp1", summaryKey: "solutions.cs2.summary", upvotes: 89, comments: 15, isTopSolution: false, createdAtKey: "common.time.3daysAgo" },
  { id: "cs3", userId: "u3", scenarioId: "sp1", summaryKey: "solutions.cs3.summary", upvotes: 76, comments: 11, isTopSolution: false, createdAtKey: "common.time.5daysAgo" },
  { id: "cs4", userId: "u2", scenarioId: "sp1", summaryKey: "solutions.cs4.summary", upvotes: 54, comments: 8, isTopSolution: false, createdAtKey: "common.time.1weekAgo" },
  { id: "cs5", userId: "u6", scenarioId: "sp1", summaryKey: "solutions.cs5.summary", upvotes: 41, comments: 6, isTopSolution: false, createdAtKey: "common.time.1weekAgo" },
];

export const topicVideos: Record<string, VideoResource[]> = {
  t1: [
    { id: "v1", titleKey: "trackContent.t1.videos.v1.title", channel: "Fireship", duration: "12:34", views: "2.1M", thumbnail: "", type: "public" },
    { id: "v2", titleKey: "trackContent.t1.videos.v2.title", channel: "ByteByteGo", duration: "18:22", views: "890K", thumbnail: "", type: "public" },
    { id: "v3", titleKey: "trackContent.t1.videos.v3.title", channel: "TGL Academy", duration: "45:10", views: "12K", thumbnail: "", type: "premium" },
    { id: "v4", titleKey: "trackContent.t1.videos.v4.title", channel: "TGL Academy", duration: "1:22:00", views: "8.4K", thumbnail: "", type: "premium" },
  ],
  t2: [
    { id: "v5", titleKey: "trackContent.t2.videos.v5.title", channel: "Traversy Media", duration: "32:15", views: "1.5M", thumbnail: "", type: "public" },
    { id: "v6", titleKey: "trackContent.t2.videos.v6.title", channel: "ThePrimeagen", duration: "14:08", views: "620K", thumbnail: "", type: "public" },
    { id: "v7", titleKey: "trackContent.t2.videos.v7.title", channel: "TGL Academy", duration: "58:30", views: "15K", thumbnail: "", type: "premium" },
    { id: "v8", titleKey: "trackContent.t2.videos.v8.title", channel: "TGL Academy", duration: "42:00", views: "9.2K", thumbnail: "", type: "premium" },
  ],
  t3: [
    { id: "v9", titleKey: "trackContent.t3.videos.v9.title", channel: "freeCodeCamp", duration: "4:20:00", views: "18M", thumbnail: "", type: "public" },
    { id: "v10", titleKey: "trackContent.t3.videos.v10.title", channel: "Hussein Nasser", duration: "28:45", views: "340K", thumbnail: "", type: "public" },
    { id: "v11", titleKey: "trackContent.t3.videos.v11.title", channel: "TGL Academy", duration: "1:05:00", views: "11K", thumbnail: "", type: "premium" },
    { id: "v12", titleKey: "trackContent.t3.videos.v12.title", channel: "TGL Academy", duration: "52:00", views: "7.8K", thumbnail: "", type: "premium" },
  ],
};

export const topicBlogs: Record<string, BlogResource[]> = {
  t1: [
    { id: "b1", titleKey: "trackContent.t1.blogs.b1.title", source: "roadmap.sh", readTimeKey: "common.readTime.15min", url: "#", tagKey: "common.tags.guide" },
    { id: "b2", titleKey: "trackContent.t1.blogs.b2.title", source: "Netflix Tech Blog", readTimeKey: "common.readTime.12min", url: "#", tagKey: "common.tags.caseStudy" },
    { id: "b3", titleKey: "trackContent.t1.blogs.b3.title", source: "Dev.to", readTimeKey: "common.readTime.8min", url: "#", tagKey: "common.tags.opinion" },
  ],
  t2: [
    { id: "b4", titleKey: "trackContent.t2.blogs.b4.title", source: "Vinay Sahni", readTimeKey: "common.readTime.20min", url: "#", tagKey: "common.tags.guide" },
    { id: "b5", titleKey: "trackContent.t2.blogs.b5.title", source: "Stripe Engineering", readTimeKey: "common.readTime.10min", url: "#", tagKey: "common.tags.caseStudy" },
    { id: "b6", titleKey: "trackContent.t2.blogs.b6.title", source: "Postman Blog", readTimeKey: "common.readTime.7min", url: "#", tagKey: "common.tags.tutorial" },
  ],
  t3: [
    { id: "b7", titleKey: "trackContent.t3.blogs.b7.title", source: "use-the-index-luke.com", readTimeKey: "common.readTime.25min", url: "#", tagKey: "common.tags.deepDive" },
    { id: "b8", titleKey: "trackContent.t3.blogs.b8.title", source: "Instagram Engineering", readTimeKey: "common.readTime.14min", url: "#", tagKey: "common.tags.caseStudy" },
    { id: "b9", titleKey: "trackContent.t3.blogs.b9.title", source: "MongoDB Blog", readTimeKey: "common.readTime.9min", url: "#", tagKey: "common.tags.comparison" },
  ],
};

export const topicMOOCs: Record<string, MOOCResource[]> = {
  t1: [
    { id: "mc1", titleKey: "trackContent.t1.moocs.mc1.title", platform: "Coursera", instructor: "Jogesh Muppala", rating: 4.7, enrolled: "120K+", durationKey: "common.duration.52hours" },
    { id: "mc2", titleKey: "trackContent.t1.moocs.mc2.title", platform: "Udemy", instructor: "Dr. Angela Yu", rating: 4.8, enrolled: "350K+", durationKey: "common.duration.65hours" },
  ],
  t2: [
    { id: "mc3", titleKey: "trackContent.t2.moocs.mc3.title", platform: "Udacity", instructor: "Google Engineers", rating: 4.5, enrolled: "85K+", durationKey: "common.duration.8hours" },
    { id: "mc4", titleKey: "trackContent.t2.moocs.mc4.title", platform: "Coursera", instructor: "Google Cloud", rating: 4.6, enrolled: "45K+", durationKey: "common.duration.24hours" },
  ],
  t3: [
    { id: "mc5", titleKey: "trackContent.t3.moocs.mc5.title", platform: "Coursera", instructor: "IBM", rating: 4.6, enrolled: "280K+", durationKey: "common.duration.20hours" },
    { id: "mc6", titleKey: "trackContent.t3.moocs.mc6.title", platform: "Udemy", instructor: "Jose Portilla", rating: 4.7, enrolled: "680K+", durationKey: "common.duration.9hours" },
  ],
};

export const topicScenarios: Record<string, ScenarioProblem[]> = {
  t1: [
    { id: "sp1", titleKey: "trackContent.t1.scenarios.sp1.title", difficulty: "Medium", domainKey: "common.domains.fintech", contextKey: "trackContent.t1.scenarios.sp1.context", constraintsKeys: ["trackContent.t1.scenarios.sp1.constraints.c1", "trackContent.t1.scenarios.sp1.constraints.c2", "trackContent.t1.scenarios.sp1.constraints.c3", "trackContent.t1.scenarios.sp1.constraints.c4"], deliverableKey: "trackContent.t1.scenarios.sp1.deliverable", estimatedTimeKey: "common.duration.4-6hours" },
    { id: "sp2", titleKey: "trackContent.t1.scenarios.sp2.title", difficulty: "Hard", domainKey: "common.domains.saas", contextKey: "trackContent.t1.scenarios.sp2.context", constraintsKeys: ["trackContent.t1.scenarios.sp2.constraints.c1", "trackContent.t1.scenarios.sp2.constraints.c2", "trackContent.t1.scenarios.sp2.constraints.c3", "trackContent.t1.scenarios.sp2.constraints.c4"], deliverableKey: "trackContent.t1.scenarios.sp2.deliverable", estimatedTimeKey: "common.duration.6-8hours" },
  ],
  t2: [
    { id: "sp8", titleKey: "trackContent.t2.scenarios.sp8.title", difficulty: "Hard", domainKey: "common.domains.ecommerce", contextKey: "trackContent.t2.scenarios.sp8.context", constraintsKeys: ["trackContent.t2.scenarios.sp8.constraints.c1", "trackContent.t2.scenarios.sp8.constraints.c2", "trackContent.t2.scenarios.sp8.constraints.c3", "trackContent.t2.scenarios.sp8.constraints.c4"], deliverableKey: "trackContent.t2.scenarios.sp8.deliverable", estimatedTimeKey: "common.duration.5-7hours" },
  ],
  t3: [
    { id: "sp13", titleKey: "trackContent.t3.scenarios.sp13.title", difficulty: "Medium", domainKey: "common.domains.infrastructure", contextKey: "trackContent.t3.scenarios.sp13.context", constraintsKeys: ["trackContent.t3.scenarios.sp13.constraints.c1", "trackContent.t3.scenarios.sp13.constraints.c2", "trackContent.t3.scenarios.sp13.constraints.c3", "trackContent.t3.scenarios.sp13.constraints.c4"], deliverableKey: "trackContent.t3.scenarios.sp13.deliverable", estimatedTimeKey: "common.duration.4-5hours" },
  ],
};

export const topicCodeExamples: Record<string, { titleKey: string; language: string; code: string; output: string }[]> = {
  t1: [
    {
      titleKey: "trackContent.t1.codeExamples.ex1.title",
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
      titleKey: "trackContent.t1.codeExamples.ex2.title",
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
      titleKey: "trackContent.t1.codeExamples.ex3.title",
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
      titleKey: "trackContent.t2.codeExamples.ex1.title",
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
      titleKey: "trackContent.t2.codeExamples.ex2.title",
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
      titleKey: "trackContent.t2.codeExamples.ex3.title",
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
      titleKey: "trackContent.t3.codeExamples.ex1.title",
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
      titleKey: "trackContent.t3.codeExamples.ex2.title",
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
  moduleKey: string;
  titleKey: string;
  descriptionKey: string;
  componentsKeys: string[];
  completed: boolean;
}

export const backendCapstone = {
  titleKey: "capstone.backend.title",
  descriptionKey: "capstone.backend.description",
  phases: [
    { moduleKey: "capstone.backend.p1.module", titleKey: "capstone.backend.p1.title", descriptionKey: "capstone.backend.p1.desc", componentsKeys: ["capstone.backend.p1.c1", "capstone.backend.p1.c2", "capstone.backend.p1.c3", "capstone.backend.p1.c4"], completed: true },
    { moduleKey: "capstone.backend.p2.module", titleKey: "capstone.backend.p2.title", descriptionKey: "capstone.backend.p2.desc", componentsKeys: ["capstone.backend.p2.c1", "capstone.backend.p2.c2", "capstone.backend.p2.c3", "capstone.backend.p2.c4"], completed: true },
    { moduleKey: "capstone.backend.p3.module", titleKey: "capstone.backend.p3.title", descriptionKey: "capstone.backend.p3.desc", componentsKeys: ["capstone.backend.p3.c1", "capstone.backend.p3.c2", "capstone.backend.p3.c3", "capstone.backend.p3.c4"], completed: false },
    { moduleKey: "capstone.backend.p4.module", titleKey: "capstone.backend.p4.title", descriptionKey: "capstone.backend.p4.desc", componentsKeys: ["capstone.backend.p4.c1", "capstone.backend.p4.c2", "capstone.backend.p4.c3", "capstone.backend.p4.c4"], completed: false },
    { moduleKey: "capstone.backend.p5.module", titleKey: "capstone.backend.p5.title", descriptionKey: "capstone.backend.p5.desc", componentsKeys: ["capstone.backend.p5.c1", "capstone.backend.p5.c2", "capstone.backend.p5.c3", "capstone.backend.p5.c4"], completed: false },
    { moduleKey: "capstone.backend.p6.module", titleKey: "capstone.backend.p6.title", descriptionKey: "capstone.backend.p6.desc", componentsKeys: ["capstone.backend.p6.c1", "capstone.backend.p6.c2", "capstone.backend.p6.c3", "capstone.backend.p6.c4"], completed: false },
    { moduleKey: "capstone.backend.p7.module", titleKey: "capstone.backend.p7.title", descriptionKey: "capstone.backend.p7.desc", componentsKeys: ["capstone.backend.p7.c1", "capstone.backend.p7.c2", "capstone.backend.p7.c3", "capstone.backend.p7.c4"], completed: false },
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
    titleKey: "trackContent.m1.title",
    topics: [
      {
        id: "t1",
        titleKey: "trackContent.t1.title",
        whatKey: "trackContent.t1.what",
        whyKey: "trackContent.t1.why",
        whenKey: "trackContent.t1.when",
        howKey: "trackContent.t1.how",
        ecosystemKey: "trackContent.t1.ecosystem",
        realWorldKey: "trackContent.t1.realWorld",
        useCasesKeys: ["trackContent.t1.useCases.uc1", "trackContent.t1.useCases.uc2", "trackContent.t1.useCases.uc3", "trackContent.t1.useCases.uc4", "trackContent.t1.useCases.uc5"],
        advantagesKeys: ["trackContent.t1.advantages.ad1", "trackContent.t1.advantages.ad2", "trackContent.t1.advantages.ad3", "trackContent.t1.advantages.ad4"],
        disadvantagesKeys: ["trackContent.t1.disadvantages.da1", "trackContent.t1.disadvantages.da2", "trackContent.t1.disadvantages.da3", "trackContent.t1.disadvantages.da4"],
        interviewTipKey: "trackContent.t1.interviewTip",
        resumeBulletKey: "trackContent.t1.resumeBullet",
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
          titleKey: "trackContent.t1.scenario.title",
          contextKey: "trackContent.t1.scenario.context",
          constraintsKeys: ["trackContent.t1.scenario.constraints.c1", "trackContent.t1.scenario.constraints.c2", "trackContent.t1.scenario.constraints.c3", "trackContent.t1.scenario.constraints.c4"],
          deliverableKey: "trackContent.t1.scenario.deliverable",
        },
      },
      {
        id: "t2",
        titleKey: "trackContent.t2.title",
        whatKey: "trackContent.t2.what",
        whyKey: "trackContent.t2.why",
        whenKey: "trackContent.t2.when",
        howKey: "trackContent.t2.how",
        ecosystemKey: "trackContent.t2.ecosystem",
        realWorldKey: "trackContent.t2.realWorld",
        useCasesKeys: ["trackContent.t2.useCases.uc1", "trackContent.t2.useCases.uc2", "trackContent.t2.useCases.uc3", "trackContent.t2.useCases.uc4", "trackContent.t2.useCases.uc5"],
        advantagesKeys: ["trackContent.t2.advantages.ad1", "trackContent.t2.advantages.ad2", "trackContent.t2.advantages.ad3", "trackContent.t2.advantages.ad4"],
        disadvantagesKeys: ["trackContent.t2.disadvantages.da1", "trackContent.t2.disadvantages.da2", "trackContent.t2.disadvantages.da3", "trackContent.t2.disadvantages.da4"],
        interviewTipKey: "trackContent.t2.interviewTip",
        resumeBulletKey: "trackContent.t2.resumeBullet",
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
          titleKey: "trackContent.t2.scenario.title",
          contextKey: "trackContent.t2.scenario.context",
          constraintsKeys: ["trackContent.t2.scenario.constraints.c1", "trackContent.t2.scenario.constraints.c2", "trackContent.t2.scenario.constraints.c3", "trackContent.t2.scenario.constraints.c4"],
          deliverableKey: "trackContent.t2.scenario.deliverable",
        },
      },
    ],
  },
  {
    id: "m2",
    titleKey: "trackContent.m2.title",
    topics: [
      {
        id: "t3",
        titleKey: "trackContent.t3.title",
        whatKey: "trackContent.t3.what",
        whyKey: "trackContent.t3.why",
        whenKey: "trackContent.t3.when",
        howKey: "trackContent.t3.how",
        ecosystemKey: "trackContent.t3.ecosystem",
        realWorldKey: "trackContent.t3.realWorld",
        useCasesKeys: ["trackContent.t3.useCases.uc1", "trackContent.t3.useCases.uc2", "trackContent.t3.useCases.uc3", "trackContent.t3.useCases.uc4", "trackContent.t3.useCases.uc5"],
        advantagesKeys: ["trackContent.t3.advantages.ad1", "trackContent.t3.advantages.ad2", "trackContent.t3.advantages.ad3", "trackContent.t3.advantages.ad4"],
        disadvantagesKeys: ["trackContent.t3.disadvantages.da1", "trackContent.t3.disadvantages.da2", "trackContent.t3.disadvantages.da3", "trackContent.t3.disadvantages.da4"],
        interviewTipKey: "trackContent.t3.interviewTip",
        resumeBulletKey: "trackContent.t3.resumeBullet",
      },
    ],
  },
];

// placeholder curriculum until dedicated HCE modules are created
export const lceModules: Module[] = [
  {
    id: "lcem1",
    titleKey: "trackContent.lcem1.title",
    topics: [
      {
        id: "lcet1",
        titleKey: "trackContent.lcet1.title",
        whatKey: "trackContent.lcet1.what",
        whyKey: "trackContent.lcet1.why",
        whenKey: "trackContent.lcet1.when",
        howKey: "trackContent.lcet1.how",
        ecosystemKey: "trackContent.lcet1.ecosystem",
        realWorldKey: "trackContent.lcet1.realWorld",
        useCasesKeys: ["trackContent.lcet1.useCases.uc1", "trackContent.lcet1.useCases.uc2", "trackContent.lcet1.useCases.uc3"],
        advantagesKeys: ["trackContent.lcet1.advantages.ad1", "trackContent.lcet1.advantages.ad2", "trackContent.lcet1.advantages.ad3"],
        disadvantagesKeys: ["trackContent.lcet1.disadvantages.da1", "trackContent.lcet1.disadvantages.da2", "trackContent.lcet1.disadvantages.da3"],
        interviewTipKey: "trackContent.lcet1.interviewTip",
        resumeBulletKey: "trackContent.lcet1.resumeBullet",
      },
    ],
  },
];

export const hceModules: Module[] = backendModules;
