import { CourseEnhanced } from './types';

export const lceDataModeling: CourseEnhanced = {
  id: "LCE-DATA",
  titleKey: "courses.lceData",
  descKey: "courses.lceDataDesc",
  icon: "💾",
  duration: "4 weeks",
  languages: ["SQL", "Relational Mapping", "OML Data Entities", "JSON Schema", "NoSQL (Conceptual)"],
  category: "low-code",
  programIds: ["LCE-APP", "LCE-ENTERPRISE", "LCE-INTEGRATE", "LCE-MOBILE", "LCE-AI"],
  trackId: "lce",
  level: "intermediate",
  prerequisites: ["LCE-FOUND"],
  targetAudience: "Developers and architects who want to master the art of designing high-performance, scalable, and secure database architectures within enterprise low-code ecosystems.",
  learningOutcomes: [
    "Design and implement 'Professional Relational Models' using 3rd Normal Form (3NF) and BCNF guidelines in a visual environment.",
    "Master 'Performance Tuning' techniques, including index selection, query optimization, and denormalization strategies for high-load apps.",
    "Architect 'Data Isolation' and 'Multi-Tenancy' patterns to serve multiple clients from a single database instance securely.",
    "Implement 'Data Migration' and 'Sync Engines' to move information between legacy SQL systems and cloud-native low-code entities.",
    "Establish 'Data Governance' rules, including audit logging, field-level encryption, and GDPR-compliant record lifecycle management."
  ],
  modules: [
    {
      id: "LCE-DATA-M1",
      title: "Enterprise Relational Theory",
      description: "Applying computer science fundamentals to visual data modeling.",
      sequenceNumber: 1,
      estimatedHours: 12,
      topics: ["LCE-DATA-M1-T1", "LCE-DATA-M1-T2"],
      prerequisiteModuleIds: [],
      outcomes: [
        "Explain the impact of 'Referential Integrity' on data consistency.",
        "Perform a 'Normalization Audit' on a visual entity diagram.",
        "Identify 'Candidate Keys' and 'Composite Keys' in complex business entities."
      ]
    },
    {
      id: "LCE-DATA-M2",
      title: "Query Optimization & Indexing",
      description: "The science of making visual searches run at lightning speed.",
      sequenceNumber: 2,
      estimatedHours: 15,
      topics: ["LCE-DATA-M2-T1", "LCE-DATA-M2-T2"],
      prerequisiteModuleIds: ["LCE-DATA-M1"],
      outcomes: [
        "Configure 'Indexes' to eliminate 'Full Table Scans' for critical search paths.",
        "Analyze 'Execution Plans' (Visual/Textual) to pinpoint slow database JOINS.",
        "Implement 'Filtering at the Source' to minimize the data payload sent to the client."
      ]
    },
    {
      id: "LCE-DATA-M3",
      title: "Advanced Relationship Patterns",
      description: "Handling hierarchies, recursive data, and junction tables.",
      sequenceNumber: 3,
      estimatedHours: 12,
      topics: ["LCE-DATA-M3-T1", "LCE-DATA-M3-T2"],
      prerequisiteModuleIds: ["LCE-DATA-M2"],
      outcomes: [
        "Master 'Self-Referencing' entities for parent-child hierarchies (e.g., Orgs/Comments).",
        "Design 'Polymorphic' relationships where one record can point to multiple entity types.",
        "Implement 'Soft-Delete' vs. 'Hard-Delete' strategies for enterprise data resilience."
      ]
    },
    {
      id: "LCE-DATA-M4",
      title: "Data Orchestration & Sync",
      description: "Connecting low-code entities to the wider data world.",
      sequenceNumber: 4,
      estimatedHours: 10,
      topics: ["LCE-DATA-M4-T1", "LCE-DATA-M4-T2"],
      prerequisiteModuleIds: ["LCE-DATA-M3"],
      outcomes: [
        "Construct an 'External Database Integration' (EDI) to access on-premise SQL servers.",
        "Design 'Change Data Capture' (CDC) flows to keep two systems in sync.",
        "Handle 'Conflict Resolution' during bi-directional data synchronization."
      ]
    },
    {
      id: "LCE-DATA-M5",
      title: "Security & Governance in the DB Layer",
      description: "Hardening the data center of your application.",
      sequenceNumber: 5,
      estimatedHours: 8,
      topics: ["LCE-DATA-M5-T1", "LCE-DATA-M5-T2"],
      prerequisiteModuleIds: ["LCE-DATA-M4"],
      outcomes: [
        "Apply 'Field-Level Encryption' for PII (Personally Identifiable Information).",
        "Configure 'Audit Trails' that automatically record Every Insert, Update, and Delete.",
        "Implement 'Static Entities' for consistent metadata across all app modules."
      ]
    }
  ],
  topics: [
    {
      id: "LCE-DATA-M1-T1",
      moduleId: "LCE-DATA-M1",
      sequenceNumber: 1,
      title: "The Normalization Audit: Cleaning the Canvas",
      estimatedMinutes: 180,
      what: "Database Normalization is the process of organizing data to minimize redundancy and prevent 'Anomalies' (errors during data entry or deletion). In LCE, this means auditing your visual IDE's entity diagram to ensure that every 'Attribute' (field) depends directly on the 'Primary Key.' The goal is to reach 3rd Normal Form (3NF), where there are no transitive dependencies.",
      why: "If you store a 'Customer's Address' directly inside every 'Order' record, and that customer moves house, you have an 'Update Anomaly.' You'd have to find and change 1,000 orders. In a normalized system, you change the address ONCE in the Customer table, and all orders automatically reflect the correct current address. This is the foundation of data integrity.",
      when: "Every time you add a new business requirement that requires new fields in the database.",
      how: "1. Look for repeated groups of fields (move them to a separate table). 2. Ensure every field relates only to the ID of that table. 3. Use 'Static Entities' for dropdowns and constants to ensure value consistency.",
      ecosystem: "SQL Standards, ACID Properties (Atomicity, Consistency, Isolation, Durability), Database Normalization Theory.",
      realWorld: "A major insurance company suffered from 'Data Drift' because they didn't normalize their 'Policy' and 'Client' entities. Clients had different spellings of their names across 10 products. By performing a Normalization Audit and centralizing 'Client Info' into a single entity, the company reduced its 'Duplicate Customer Index' by 40%, saving millions in unnecessary marketing spend.",
      useCases: [
        "Auditing a legacy HR system to separate 'Employees' from 'Internal Training History'",
        "Design a relational model for a logistics app where one 'Truck' has many 'Shipments'",
        "Normalizing a product catalog where 'Categories' and 'Tax Rates' are separate from 'Item Names'"
      ],
      advantages: [
        "Storage Efficiency: Less redundant data means smaller, faster database instances.",
        "Total Integrity: A single source of truth for every piece of information.",
        "Ease of Search: Faster lookups when tables are lean and focused."
      ],
      disadvantages: [
        "Join Complexity: 3NF requires more 'JOINS' to get a full view, which can be slower without proper indexing."
      ],

      interviewTip: "If asked 'When would you denormalize?', answer: 'I only denormalize (duplicate data) for performance reasons in Read-Heavy scenarios. For example, storing a \"Total Sales\" count on a Customer record to avoid doing a sum query on 1 million order lines every time the page loads. But I always start with a clean 3NF model first.'",
      resumeBullet: "Executed a comprehensive database normalization strategy for a high-traffic fintech application, achieving 3rd Normal Form (3NF) and improving data consistency by 100%.",

      videos: [
        { type: "public", title: "Normalization: 1NF, 2NF, 3NF Explained", author: "Caleb Curry", views: "1.2M views", duration: "25:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Visual Modeling Patterns", author: "OutSystems Community", views: "30K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Alison", rating: 4.7, title: "Database Design and Normalization", instructor: "Luminis", enrolled: "150K+", duration: "6 hours", url: "https://alison.com/course/database-design-and-normalization" }
      ],
      blogs: [
        { type: "Technical", title: "Normalization in the Low-Code Age", publisher: "DZone", readTime: "20 min", url: "https://dzone.com/articles/database-normalization-for-low-code-developers" }
      ],
      scenarios: [
        {
          id: "1.1", difficulty: "Medium", title: "The Redundant Store", category: "Relational Theory", estimatedTime: "4 hours",
          scenarioDescription: "A retail client build a 'Store' table where they typed the 'City Name' and 'Zip Code' for every store. They have 500 stores in London. They accidentally spelled London as 'Lonon' in 50 records. Now, when the CEO searches for 'London Sales,' those 50 stores are missing.",
          problemAnalysis: "This is a 'Data Entry Anomaly' caused by failing to normalize. 'City' and 'Zip' should be in a separate `Geography` table. The `Store` table should only have a `GeographyId` link. This ensures that the spelling of 'London' is stored in exactly ONE place and is always correct.",
          architectureLayers: ["Relational Model", "Enforced Dropdowns", "Data Cleanup Script"],
          toolsAndTech: [{ name: "Standard Entity Relations", justification: "Professional platforms allow you to enforce that a field MUST be a link to another table, preventing free-text typos in critical categorical fields." }],
          tradeOffs: ["Adding a table requires one extra click during build but saves days of manual data cleaning later."],
          nfrConsiderations: ["Consistency: 100% agreement on city names."],
          kpis: ["Achieve 0% typo rate in geographic reporting."],
          keyInsights: "If you type the same thing twice in a database, you should probably have a new table for it."
        }
      ],
      playgrounds: [
        {
          title: "The Normalizer",
          description: "Visualizing the Split.",
          examples: [
            {
              language: "Logic Flow",
              code: "BAD: Store{Name, City, Zip}\nGOOD: Store{Name, GeoId} <---> Geo{Id, City, Zip}"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "db/normalize-geo",
        commitMessage: "fix: normalized geographic data into separate entity to prevent spelling inconsistencies in reporting",
        files: [{ name: "Database/GeoEntities.oml", type: "file", content: "relational-map" }],
        activeFileSnippet: { filename: "Migration.sql", code: "INSERT INTO Geography (City, Zip) SELECT DISTINCT City, Zip FROM Stores;" }
      },
      community: {
        aiSummary: "The 'Normalization' habit is what separates amateur builders from professional visual architects. Do it early, do it often.",
        solutions: []
      }
    },
    {
      id: "LCE-DATA-M2-T1",
      moduleId: "LCE-DATA-M2",
      sequenceNumber: 1,
      title: "Index Engineering: Solving the 10-Second Search",
      estimatedMinutes: 240,
      what: "An Index is a database structure that speeds up 'Queries' (searches) by creating a 'Shortcut' to specific rows. Without an index, the database must perform a 'Full Table Scan'—looking at every single row one by one. In LCE, you configure 'Attribute Indexes' (Single or Composite) visually in the Modeler. A composite index (e.g., Search by `LastName` + `ZipCode`) allows the database to narrow down millions of records in milliseconds.",
      why: "As your Low-Code app grows from 100 records to 1 million records, searches that were 'Instant' will suddenly take 10 or 20 seconds. This is 'Linear Scaling Lag.' Effective index engineering ensures your app stays fast regardless of its size. Adding too many indexes, however, slows down 'Inserts' (saving data), so you must balance 'Read Speed' vs. 'Write Speed.'",
      when: "Every time you build a browse/search screen that will eventually hold more than 10,000 records.",
      how: "1. Identify the 'Filter' attributes (e.g. `Email`, `OrderDate`, `Status`). 2. Open the 'Indexes' tab in the Modeler. 3. Create a new index. 4. Select the attributes and set 'Unique' or 'Non-unique'.",
      ecosystem: "B-Tree Indexes, Clustered vs Non-Clustered, Index Selectivity.",
      realWorld: "A healthcare portal built with OutSystems had a 'Patient Search' that timed out after 30 seconds because the table had 2 million rows. The architect added a 'Composite Index' on `Surname` and `DateOfBirth`. The search time dropped to 0.05 seconds instantly. This simple 'Visual Config' changed the app from 'Broken' to 'Elite.'",
      useCases: [
        "Optimizing a global product catalog with 500,000 SKUs",
        "Speeding up 'Recent Transactions' views for a digital banking app",
        "Configuring 'Unique Indexes' to prevent duplicate email registrations automatically"
      ],
      advantages: [
        "Dramatic Speed: 1,000x faster searches on large datasets.",
        "System Stability: Prevents 'Long-Running Queries' from locking up the server.",
        "Automatic Uniqueness: Unique indexes prevent 'Dirty Data' at the physical database level."
      ],
      disadvantages: [
        "Write Overhead: Each index adds a tiny delay when saving new records.",
        "Storage: Indexes take up disk space."
      ],

      interviewTip: "If asked 'How do you choose what to index?', answer: 'I index the attributes used in \"WHERE\" clauses and \"JOINS.\" I prioritize high-selectivity fields (like Email) over low-selectivity ones (like Gender). For complex searches, I use Composite Indexes to match the exact query pattern.'",
      resumeBullet: "Optimized enterprise database performance by implementing strategic indexing and query tuning, resulting in a 90% reduction in average search latency.",

      videos: [
        { type: "public", title: "How Database Indexes Work", author: "Computerphile", views: "1.5M views", duration: "10:45", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
        { type: "public", title: "Query Optimization in Low-Code", author: "Mendix Technical Center", views: "25K views", duration: "15:20", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
      ],
      moocs: [
        { platform: "Udemy", rating: 4.9, title: "SQL Portfolio Project: Database Performance", instructor: "Colt Steele", enrolled: "20K+", duration: "8 hours", url: "https://www.udemy.com/course/sql-performance-tuning/" }
      ],
      blogs: [
        { type: "Core", title: "Indexing 101 for App Builders", publisher: "AWS Database Blog", readTime: "18 min", url: "https://aws.amazon.com/blogs/database/best-practices-for-indexing-relational-databases/" }
      ],
      scenarios: [
        {
          id: "2.1", difficulty: "Expert", title: "The Dashboard Bottleneck", category: "Performance Tuning", estimatedTime: "8 hours",
          scenarioDescription: "A Logistics manager has a dashboard that shows 'Delays per City.' The table has 5 million shipments. The developer added an index on `City`. It's still slow. Why?",
          problemAnalysis: "The query isn't just filtering by `City`; it's also filtering by `ShipmentStatus = 'Delayed'` and `ShippedDate > LastMonth`. The single index on `City` is only doing 30% of the work. The database still has to manually check the status and date for every shipment in London.",
          architectureLayers: ["Query Execution Plan", "Composite Indexing", "Materialized Views"],
          toolsAndTech: [{ name: "Composite Indexing", justification: "By creating ONE index that contains (`City`, `ShipmentStatus`, `ShippedDate`) in that specific order, the database can 'Jump' directly to the exact subset of data needed, bypassing billions of irrelevant comparisons. This is 'Precision Tuning'." }],
          tradeOffs: ["The composite index is larger than a single one, but the performance gain is mandatory for high-volume logs."],
          nfrConsiderations: ["Latency: Dashboard charts must refresh in under 1 second."],
          kpis: ["Achieve 95% reduction in 'Query Scanned Lines' compared to single indexing."],
          keyInsights: "Indexes should mirror the way your users actually search."
        }
      ],
      playgrounds: [
        {
          title: "The Index Simulator",
          description: "Visualizing the search speedup.",
          examples: [
            {
              language: "JSON (Config)",
              code: "{\n  \"Entity\": \"Shipment\",\n  \"Index\": \"idx_Performance_Dashboard\",\n  \"Attributes\": [\"City\", \"Status\", \"ShipmentDate\"]\n}"
            }
          ]
        }
      ],
      gitSimulation: {
        branchName: "opt/dashboard-indexing",
        commitMessage: "perf: implemented composite indexing on Shipment entity to optimize management dashboard performance",
        files: [{ name: "Database/ShipmentIndexes.oml", type: "file", content: "index-metadata" }],
        activeFileSnippet: { filename: "Logs.md", code: "Latency Before: 8.5s; Latency After: 0.2s; Index: City+Status;" }
      },
      community: {
        aiSummary: "Don't let your app 'Search' manually. Build 'Maps' (Indexes). It's the difference between a library with an index and a pile of books on the floor.",
        solutions: []
      }
    }
  ],
  videoCount: 420,
  articleCount: 310,
  problemCount: 220,
  capstoneProject: {
    title: "The Global Asset Tracking Backbone",
    description: "In this mastery project, you will architect the data storage engine for a worldwide logistics firm. You will design a schema managing 'Assets,' 'Warehouses,' and 'Inventory Logs' (Millions of rows). You must implement a 'Soft-Delete' architecture so no record is ever truly lost, only archived. You will configure 'Composite Indexes' to optimize a custom 'Advanced Search' page that filters by Status, Region, and Date simultaneously. Next, you will integrate an 'External Data Sync' flow that pulls inventory levels from an on-premise Oracle DB into your low-code entities. Finally, you will perform a 'Security Audit' to ensure that 'Role 1' can only see assets in 'Region A,' while 'Admin' can see everything—implemented strictly at the database level using 'Tenant Scoping.' Your deliverable is a high-performance, secure, and fully normalized relational system capable of handling enterprise scale.",
    estimatedDays: 14,
    skillsFocused: [
      "Advanced Relational Normalization (3NF/BCNF)",
      "Strategic Composite Indexing & Query Tuning",
      "Enterprise Data Sync (On-Prem to Cloud)",
      "Database-Level Privacy & Multi-Tenancy",
      "Transactional Integrity & Soft-Delete Patterns"
    ],
    steps: [
      {
        title: "Phase 1: The Scalable Schema",
        description: "Design the core normalized relational model with multi-region support."
      },
      {
        title: "Phase 2: Performance Hardening",
        description: "Analyze the 'Most Common Queries' and implement composite indexes to ensure < 300ms response times."
      },
      {
        title: "Phase 3: The Data Bridge",
        description: "Build the scheduled sync engine that keeps your low-code entities aligned with the legacy Oracle system."
      },
      {
        title: "Phase 4: Security & Audit Lock",
        description: "Implement the Tenant-Scoping rules and automated Audit Trail for global compliance."
      }
    ]
  },
  totalEstimatedHours: 85,
  estimatedCompletionDays: 30,
  moduleCount: 5,
  createdAt: "2026-02-28T00:00:00Z",
  updatedAt: "2026-02-28T00:00:00Z",
  version: "1.0",
  status: "published"
};