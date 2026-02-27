import { CourseEnhanced } from './types';

export const hceData201: CourseEnhanced = {
    id: "HCE DATA 201",
    titleKey: "courses.hceData201",
    descKey: "courses.hceData201Desc",
    icon: "🌊",
    duration: "8 weeks",
    languages: ["Python", "SQL", "Scala", "Java"],
    category: "high-code",
    programIds: ["HCE DATA", "HCE AI"],
    trackId: "hce",
    level: "advanced",
    prerequisites: ["HCE DATA 101"],
    targetAudience: "Data Engineers moving into Enterprise Data Platforms handling Petabyte-scale streaming and distributed batch processing.",
    learningOutcomes: [
        "Architect distributed Big Data pipelines using Apache Spark & Spark SQL",
        "Engineer real-time streaming architectures using Kafka and Spark Structured Streaming",
        "Master the Modern Data Stack (MDS) utilizing dbt (data build tool) for ELT",
        "Implement Enterprise Lakehouses using Apache Iceberg, Delta Lake, or Hudi",
        "Design MLOps feature stores and data-drift monitoring systems"
    ],
    modules: [
        {
            id: "HCE-DATA-201-M1",
            title: "Distributed Computing with Apache Spark",
            description: "Scaling processing to clusters and petabytes.",
            sequenceNumber: 1,
            estimatedHours: 15,
            topics: ["HCE-DATA-201-M1-T1", "HCE-DATA-201-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Optimize Spark memory management and shuffle partitions",
                "Identify and resolve 'Data Skew' in distributed joins",
                "Deploy Spark jobs on AWS EMR, Databricks, or Kubernetes"
            ]
        },
        {
            id: "HCE-DATA-201-M2",
            title: "Advanced Transformations with dbt (ELT)",
            description: "Bringing software engineering best practices to data modeling.",
            sequenceNumber: 2,
            estimatedHours: 12,
            topics: ["HCE-DATA-201-M2-T1", "HCE-DATA-201-M2-T2"],
            prerequisiteModuleIds: ["HCE-DATA-201-M1"],
            outcomes: [
                "Build modular data models using dbt macros and Jinja templates",
                "Implement CI/CD for data pipelines with automated testing",
                "Orchestrate complex dbt DAGs within modern cloud warehouses"
            ]
        },
        {
            id: "HCE-DATA-201-M3",
            title: "Stream Processing & Real-Time Data",
            description: "Processing infinite data flows with low latency.",
            sequenceNumber: 3,
            estimatedHours: 18,
            topics: ["HCE-DATA-201-M3-T1", "HCE-DATA-201-M3-T2"],
            prerequisiteModuleIds: ["HCE-DATA-201-M2"],
            outcomes: [
                "Consume and process Kafka streams using Structured Streaming",
                "Handle late-arriving data using Watermarks and Event-time windowing",
                "Implement 'Exactly-once' processing semantics in streaming jobs"
            ]
        },
        {
            id: "HCE-DATA-201-M4",
            title: "The Enterprise Lakehouse Architecture",
            description: "Unifying Data Lakes and Data Warehouses.",
            sequenceNumber: 4,
            estimatedHours: 15,
            topics: ["HCE-DATA-201-M4-T1", "HCE-DATA-201-M4-T2"],
            prerequisiteModuleIds: ["HCE-DATA-201-M3"],
            outcomes: [
                "Implement ACID transactions on S3/Data Lakes using Apache Iceberg",
                "Manage Schema Evolution and Time Travel in massive tables",
                "Optimize file-layouts and partitioning for columnar storage"
            ]
        },
        {
            id: "HCE-DATA-201-M5",
            title: "MLOps: Data for Machine Learning",
            description: "The intersection of Data Engineering and AI.",
            sequenceNumber: 5,
            estimatedHours: 10,
            topics: ["HCE-DATA-201-M5-T1", "HCE-DATA-201-M5-T2"],
            prerequisiteModuleIds: ["HCE-DATA-201-M4"],
            outcomes: [
                "Architect Feature Stores for real-time and batch ML training",
                "Automate Data Ingestion and Validation for ML pipelines",
                "Monitor Data Drift and Model performance in production"
            ]
        }
    ],
    topics: [
        {
            id: "HCE-DATA-201-M1-T1",
            moduleId: "HCE-DATA-201-M1",
            sequenceNumber: 1,
            title: "Apache Spark: RDDs, DataFrames & Memory Tuning",
            estimatedMinutes: 240,
            what: "Apache Spark is a unified, distributed analytics engine for large-scale data processing. It operates on a Master/Worker architecture (Driver/Executors). While it provides low-level RDDs (Resilient Distributed Datasets), modern engineering focuses on DataFrames and Spark SQL which utilize the Catalyst Optimizer and Tungsten execution engine.",
            why: "Vertical scaling (bigger RAM) has limits. When processing Petabytes of data, you must scale horizontally across a cluster of 100+ machines. Spark's in-memory processing and 'Lazy Evaluation' make it 10-100x faster than legacy MapReduce systems.",
            when: "When data size exceeds single-node memory (usually >100GB) or when complex iterative processing (like ML or Graph analysis) is required on massive datasets.",
            how: "Use PySpark or Spark SQL. Define transformations (filter, join, map). These are lazy and only execute when an 'Action' (count, write, collect) is called. The Spark Driver builds a DAG of tasks and distributes them across the cluster.",
            ecosystem: "Spark SQL, Spark Streaming, MLlib (ML), GraphX (Graph), Databricks, AWS EMR, Google Dataproc.",
            realWorld: "E-bay uses Spark to process 100+ Petabytes of user interaction data daily to optimize search results and ad placements. They use Spark's SQL engine to run complex analytics across their massive data lake in S3.",
            useCases: [
                "Processing massive web logs for security audit analysis",
                "Batch processing financial transactions for end-of-day reconciliation at scale",
                "Distributed feature engineering for deep learning models"
            ],
            advantages: [
                "Fault-tolerant: Automatically recovers from worker node failures via lineage",
                "Highly versatile: One engine for Batch, Streaming, ML, and SQL",
                "Massive community and ecosystem support across all cloud vendors"
            ],
            disadvantages: [
                "High memory overhead and complex JVM tuning requirements",
                "Can be expensive if cluster resources aren't managed (IDLE clusters cost money)"
            ],

            interviewTip: "If asked 'Why is Spark faster than MapReduce?', explain that Spark keeps data in memory between transformation stages, whereas MapReduce writes to disk after every single step. Also, mention the 'Catalyst Optimizer' which optimizes the execution plan.",
            resumeBullet: "Engineered distributed Spark pipelines processing 10TB+ of data daily, implementing custom partition strategies to resolve data skew and cutting cluster costs by 40%.",

            videos: [
                { type: "public", title: "Apache Spark Architecture Explained", author: "Fireship", views: "300K views", duration: "10:45", url: "https://www.youtube.com/watch?v=_C8kWso4ne4" },
                { type: "public", title: "Spark Performance Tuning: Data Skew", author: "Databricks", views: "80K views", duration: "25:20", url: "https://www.youtube.com/watch?v=5W_mH87u8I4" }
            ],
            moocs: [
                { platform: "Coursera", rating: 4.8, title: "Big Data Analysis with Scala and Spark", instructor: "EPFL", enrolled: "150K+", duration: "20 hours", url: "https://www.coursera.org/learn/scala-spark-big-data" }
            ],
            blogs: [
                { type: "Engineering", title: "Deep Dive into Spark Memory Management", publisher: "Databricks Blog", readTime: "30 min", url: "https://www.databricks.com/blog/2015/04/28/tuning-java-garbage-collection-for-spark-applications.html" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Hard", title: "The 99% Stuck Job", category: "Big Data Ops", estimatedTime: "4 hours",
                    scenarioDescription: "A Spark job is processing 1 billion sales records. 199 tasks finish in 5 minutes, but the 200th task hangs for 2 hours and eventually crashes with an OutOfMemory (OOM) error.",
                    problemAnalysis: "This is a classic 'Data Skew' issue. One join key (e.g., 'Unknown' or a massive null category) contains 50% of the entire dataset. Spark partitions data based on the key, so one executor gets slammed with 500 million rows while others get 2 million each. The slammed executor runs out of memory.",
                    architectureLayers: ["Distributed Compute Layer", "Partitioning Strategy", "Memory Management"],
                    toolsAndTech: [{ name: "Salting & Broadcast Joins", justification: "By 'Salting' the skewed key (adding a random suffix), we can split the massive bucket into 10 smaller ones. Alternatively, use a Broadcast Join if the other table is small enough to fit in the executor's memory." }],
                    tradeOffs: ["Salting makes the logic slightly more complex; Broadcast joins can crash the Driver if the table is too large."],
                    nfrConsiderations: ["Reliability: Zero OOM failures on varying data distributions."],
                    kpis: ["Target 100% executor utilization parity (even distribution of task time)."],
                    keyInsights: "Distributed systems are only as fast as their slowest node. Skew is the #1 killer of Spark performance."
                }
            ],
            playgrounds: [
                {
                    title: "Broadcast Join Optimization",
                    description: "Forcing a broadcast join to speed up lookups.",
                    examples: [
                        {
                            language: "python",
                            code: "from pyspark.sql.functions import broadcast\n\n# small_df is 50MB, large_df is 500GB\n# Forcing Spark to copy small_df to every worker instead of shuffling the 500GB\nresult = large_df.join(broadcast(small_df), \"id\")\nresult.write.parquet(\"/output/optimized_join\")"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "perf/spark-salting",
                commitMessage: "perf: implemented key salting for historical sales aggregation to resolve data skew on 'Direct' channel",
                files: [{ name: "jobs/aggregate_sales.py", type: "file", content: "salting logic" }],
                activeFileSnippet: { filename: "aggregate_sales.py", code: "df = df.withColumn('salted_key', concat(col('id'), lit('_'), floor(rand()*10)))" }
            },
            community: {
                aiSummary: "Spark is the OS of the Data Cluster. If you don't understand Shuffling and Partitioning, you aren't an engineer; you're just a script-runner.",
                solutions: []
            }
        },
        {
            id: "HCE-DATA-201-M2-T1",
            moduleId: "HCE-DATA-201-M2",
            sequenceNumber: 1,
            title: "dbt: The Analytics Engineering Standard",
            estimatedMinutes: 240,
            what: "dbt (data build tool) is the standard for 'T' in 'ELT' (Extract, Load, Transform). It allows anyone who knows SQL to author, test, and document data models directly in the data warehouse. It uses Jinja templates to allow for modularity (ref), variables, and macros.",
            why: "Old school 'Stored Procedures' are a nightmare to version control and test. dbt brings CI/CD, documentation-as-code, and automated data quality testing to the SQL world. It treats a data warehouse like a code project.",
            when: "Every time you build a modern data stack centered around Snowflake, BigQuery, or Redshift where you need to transform raw 'Bronze' data into cleaned 'Gold' tables.",
            how: "Install dbt, define your sources. Write `.sql` files that are simple `SELECT` statements. Use `{{ ref('source_table') }}` to let dbt build the dependency DAG automatically. Run `dbt run` and `dbt test` in your CI/CD pipeline.",
            ecosystem: "dbt Cloud, dbt Core, Snowflake, BigQuery, dbt-expectations, dbt-checkpoint.",
            realWorld: "A SaaS company like Hubspot uses dbt to transform raw JSON events from their web app into clean 'Monthly Active User' (MAU) tables. They have 1,000+ models, all version-controlled in Git and tested on every PR to ensure dashboard accuracy.",
            useCases: [
                "Migrating legacy ETL scripts into a maintainable version-controlled SQL project",
                "Enforcing data quality checks (uniqueness, not-null) on the warehouse load path",
                "Automatically generating documentation for every table and column in your warehouse"
            ],
            advantages: [
                "Enables 'Analytics Engineering' - modular, DRY SQL",
                "Built-in testing framework for high-trust data",
                "Automatic documentation generation including lineage graphs"
            ],
            disadvantages: [
                "Can lead to 'SQL Sprawl' if models aren't managed carefully",
                "Does not handle the 'E' (Extract) or 'L' (Load) stages; requires other tools like Fivetran/Airbyte"
            ],

            interviewTip: "If asked 'How do you test your data?', mention dbt. Explain the difference between 'Generic Tests' (uniqueness, not-null) and 'Singular Tests' (business logic checks). Mention that dbt tests run AFTER the data is in the warehouse but BEFORE users see it in BI.",
            resumeBullet: "Implemented dbt for enterprise data modeling, establishing a CI/CD pipeline for SQL and achieving 100% test coverage for critical financial reporting models.",

            videos: [
                { type: "public", title: "dbt in 100 Seconds", author: "Fireship", views: "150K views", duration: "2:10", url: "https://www.youtube.com/watch?v=Ff_67X7fKXA" },
                { type: "public", title: "Building a Modern Data Stack with dbt", author: "DataWithDanny", views: "40K views", duration: "1:20:00", url: "https://www.youtube.com/watch?v=8p_hL0bVq_U" }
            ],
            moocs: [
                { platform: "dbt Learn", rating: 5.0, title: "dbt Fundamentals", instructor: "dbt Lab Team", enrolled: "200K+", duration: "5 hours", url: "https://courses.getdbt.com/courses/fundamentals" }
            ],
            blogs: [
                { type: "Core", title: "Why dbt? The Analytics Engineering Shift", publisher: "dbt Blog", readTime: "20 min", url: "https://blog.getdbt.com/what-is-analytics-engineering/" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Medium", title: "The Ghost Order Bug", category: "Data Governance", estimatedTime: "2 hours",
                    scenarioDescription: "A marketing dashboard shows an extra $1 million in sales that doesn't exist. It's found that an ETL job accidentally duplicated rows when a transaction had multiple line items.",
                    problemAnalysis: "The SQL used a join that wasn't unique, causing 'Fan-out' where one order was counted 5 times. This reached the dashboard because there were no uniqueness checks on the `order_id` in the final reporting table.",
                    architectureLayers: ["ELT Transformation Layer", "Data Validation Layer", "Governance Framework"],
                    toolsAndTech: [{ name: "dbt Unique & Not Null Tests", justification: "By adding a `unique` test to the `order_id` in the dbt `schema.yml`, the build would have FAILED in staging. The bad data would never have touched the production warehouse or the CEO's dashboard." }],
                    tradeOffs: ["Adding tests to every column can slow down the build time."],
                    nfrConsiderations: ["Data Integrity: 100% accuracy for financial metrics."],
                    kpis: ["Block 100% of 'Join Fan-out' errors before production deployment."],
                    keyInsights: "SQL code without tests is not engineering; it's a prayer. Use dbt to verify your logic."
                }
            ],
            playgrounds: [
                {
                    title: "Modular dbt Model",
                    description: "Using the ref() macro to build on previous models.",
                    examples: [
                        {
                            language: "sql",
                            code: "-- models/marts/fct_orders.sql\nWITH orders AS (\n  SELECT * FROM {{ ref('stg_orders') }}\n),\nitems AS (\n  SELECT * FROM {{ ref('stg_items') }}\n)\nSELECT \n  orders.id, \n  SUM(items.price) as total\nFROM orders\nJOIN items ON orders.id = items.order_id\nGROUP BY 1"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "data/order-mart-update",
                commitMessage: "data: added dbt uniqueness tests to fct_orders and documented lineage for finance",
                files: [{ name: "models/marts/fct_orders.yml", type: "file", content: "test config" }],
                activeFileSnippet: { filename: "fct_orders.yml", code: "columns:\n  - name: order_id\n    tests:\n      - unique\n      - not_null" }
            },
            community: {
                aiSummary: "The 'Analytics Engineer' is the hottest role in data. It's for people who love SQL but want to work like a Software Engineer with Git, Tests, and CI/CD.",
                solutions: []
            }
        },
        {
            id: "HCE-DATA-201-M3-T1",
            moduleId: "HCE-DATA-201-M3",
            sequenceNumber: 1,
            title: "Real-Time Streaming with Kafka & Spark",
            estimatedMinutes: 240,
            what: "Stream Processing is the practice of ingesting and computing data as it arrives (near-real-time), rather than in batches. Apache Kafka acts as the 'Distributed Log' (Broker), while Spark Structured Streaming provides a high-level API to process those logs using the same DataFrame syntax as batch jobs. It supports 'Event-time windowing' and 'Watermarks' to handle data that arrives late or out of order.",
            why: "Batching is for yesterday's data. For 'Surge Pricing', 'Fraud Detection', or 'Emergency Alerts', you need to know what's happening RIGHT NOW. Waiting for a nightly ETL job is unacceptable for high-stakes real-world applications.",
            when: "Implementing real-time dashboards, IoT sensor monitoring, or immediate user notifications based on clickstream behavior.",
            how: "Define a Spark read stream source (Kafka). Transform the data (JSON parsing, aggregation). Define a write stream sink (Delta Lake, Console, or another Kafka topic). Use `.start()` to launch a continuous processing query.",
            ecosystem: "Apache Kafka, Spark Structured Streaming, Flink, Kafka Streams, Confluent, Kinesis.",
            realWorld: "Uber uses Kafka and Spark Streaming to match drivers and riders in real-time. Every 10 seconds, they calculate surge multipliers for every grid block in a city based on the stream of rider app-opens and driver availability.",
            useCases: [
                "Detecting credit card fraud within 500ms of a transaction swipe",
                "Updating live leaderboard scores for millions of concurrent gamers",
                "Monitoring server health and triggering auto-scaling in response to sudden load spikes"
            ],
            advantages: [
                "Extremely low latency (Seconds vs Hours)",
                "Unified API between Batch and Streaming in Spark makes code reuse easy",
                "Handles data volume spikes gracefully via Kafka's buffering capability"
            ],
            disadvantages: [
                "Much higher operational complexity than batch jobs",
                "Incredibly difficult to 'reprocess' or 'fix' old data once it's streamed"
            ],

            interviewTip: "Explain 'Exactly-once' semantics. Tell the interviewer that Spark achieves this via 'Checkpoints' and 'Idempotent Sinks'—even if a worker crashes, it knows exactly where it left off in the Kafka stream and won't count the same event twice.",
            resumeBullet: "Architected a real-time event processing engine using Kafka and Spark Structured Streaming, reducing data latency from 24 hours to < 10 seconds for critical business KPIs.",

            videos: [
                { type: "public", title: "Kafka & Streaming Explained", author: "Fireship", views: "400K views", duration: "12:15", url: "https://www.youtube.com/watch?v=06iPUH6DsnM" },
                { type: "public", title: "Spark Structured Streaming Tutorial", author: "Codedamn", views: "60K views", duration: "1:10:00", url: "https://www.youtube.com/watch?v=kYJvR_d-5dM" }
            ],
            moocs: [
                { platform: "Udemy", rating: 4.8, title: "Spark Streaming using Python", instructor: "Frank Kane", enrolled: "25K+", duration: "8 hours", url: "https://www.udemy.com/course/spark-streaming-python/" }
            ],
            blogs: [
                { type: "Engineering", title: "Watermarking in Spark: Handling Late Data", publisher: "Databricks", readTime: "15 min", url: "https://www.databricks.com/blog/2017/05/08/event-time-aggregation-watermarking-structured-streaming-apache-spark.html" }
            ],
            scenarios: [
                {
                    id: "3.1", difficulty: "Expert", title: "The Midnight Lag", category: "Streaming Ops", estimatedTime: "5 hours",
                    scenarioDescription: "A gaming company tracks 'Kills' in a battle-royale in real-time. At peak times (Midnight), the Kafka queue grows to 10 million unprocessed events. The streaming job is only processing 100 events/second, creating a 2-hour delay in the leaderboard.",
                    problemAnalysis: "This is 'Backpressure'. The processing code is too slow for the incoming data rate, usually because it's doing an expensive external API lookup for every single record or the 'Shuffling' is causing a bottleneck. The job is CPU-bound or I/O-bound.",
                    architectureLayers: ["Ingestion Buffer (Kafka)", "Stream Processing (Spark)", "Checkpointing Store (S3)"],
                    toolsAndTech: [{ name: "Parallelism & Batch Size", justification: "Increase the `maxOffsetsPerTrigger` to pull larger batches and increase the number of Spark executors to process Kafka partitions in parallel. Also, implement 'Async Lookups' for external DB hits to avoid blocking the stream." }],
                    tradeOffs: ["Adding more executors costs more money; increasing batch size can increase memory usage in workers."],
                    nfrConsiderations: ["Latency: P99 latency must be < 1.0 seconds."],
                    kpis: ["Target zero growth in Kafka 'Consumer Lag' during peak traffic spikes."],
                    keyInsights: "Streaming is a race. If you aren't faster than the input, you've already lost."
                }
            ],
            playgrounds: [
                {
                    title: "Spark Streaming Setup",
                    description: "Connecting Spark to a Kafka topic.",
                    examples: [
                        {
                            language: "python",
                            code: "# Reading a stream from Kafka\ndf = spark.readStream \\\n  .format(\"kafka\") \\\n  .option(\"kafka.bootstrap.servers\", \"host:9092\") \\\n  .option(\"subscribe\", \"user_events\") \\\n  .load()\n\n# Selecting and casting the payload\nquery = df.selectExpr(\"CAST(value AS STRING)\") \\\n  .writeStream \\\n  .format(\"console\") \\\n  .start()"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "feat/streaming-monitoring",
                commitMessage: "feat: implemented watermarking and windowed aggregation for real-time mobile event telemetry",
                files: [{ name: "streaming/telemetry_job.py", type: "file", content: "streaming code" }],
                activeFileSnippet: { filename: "telemetry_job.py", code: "df.withWatermark('timestamp', '10 minutes') \\\n  .groupBy(window('timestamp', '1 minute'), 'event_type') \\\n  .count()" }
            },
            community: {
                aiSummary: "The 'Watermark' is the most misunderstood concept in streaming. It's the browser's way of saying 'I'll wait 10 minutes for your slow WiFi, but then I'm moving on and closing the window'.",
                solutions: []
            }
        },
        {
            id: "HCE-DATA-201-M4-T1",
            moduleId: "HCE-DATA-201-M4",
            sequenceNumber: 1,
            title: "The Lakehouse: Iceberg, Delta & ACID Lakes",
            estimatedMinutes: 240,
            what: "A Lakehouse is a modern architecture that brings the structured management, performance, and reliability of a Data Warehouse to the massive, low-cost storage of a Data Lake (S3, GCS). Key technologies like Apache Iceberg, Delta Lake, and Hudi provide 'Table Formats' that enable ACID transactions, Schema Evolution, and Time Travel directly on raw file storage (Parquet).",
            why: "Old Data Lakes were 'Data Swamps'—impossible to update, difficult to query fast, and prone to corruption if two jobs wrote at once. Warehouses were 'Data Silos'—very expensive and proprietary. Lakehouses provide the best of both: Open-source formats with Enterprise-grade reliability.",
            when: "Whenever you are building a central Data Platform that needs to store Petabytes of data while supporting both SQL analysts and Python ML engineers seamlessly.",
            how: "Use a compute engine (Spark, Flink, Trino) and configure it to use a Lakehouse catalog (Nessie, Glue). Write data as an 'Iceberg Table' rather than raw Parquet. This creates a metadata layer that tracks every change as a snapshot.",
            ecosystem: "Apache Iceberg, Delta Lake 3.0, Apache Hudi, Project Nessie, Tabular, Databricks, AWS Glue.",
            realWorld: "Apple migrated their entire data platform to Apache Iceberg. They store millions of tables on S3. Before Iceberg, an error in a nightly job meant a 3-day recovery process. With Iceberg, they 'Time Travel' back to the snapshot before the error in 10 seconds, ensuring zero business downtime.",
            useCases: [
                "Implementing GDPR 'Right to be Forgotten' by deleting specific user rows in a Peta-byte Data Lake",
                "Enabling 'Snapshot Isolation' so analysts can query a table while it's being updated",
                "Maintaining a historical audit log (Slowly Changing Dimensions) with 'Time Travel' capabilities"
            ],
            advantages: [
                "Eliminates vendor lock-in: your data is always in open Parquet files on your storage",
                "Drastically lowers costs compared to proprietary warehouses like Snowflake",
                "Provides a single source of truth for both Data Engineering and Data Science"
            ],
            disadvantages: [
                "Significantly more complex to set up and tune than a SaaS warehouse",
                "Requires ongoing 'Vacuum' or 'Optimization' jobs to clean up old snapshot files"
            ],

            interviewTip: "When asked about Lakehouses, emphasize 'ACID on S3'. Explain that Iceberg doesn't store data differently; it just adds a 'Manifest' file that tells the reader exactly which Parquet files make up the current version of the table. This prevents reading 'Partial Writes'.",
            resumeBullet: "Architected an enterprise Lakehouse on AWS S3 using Apache Iceberg, enabling ACID transactions on petabyte-scale datasets and reducing storage spend by 60%.",

            videos: [
                { type: "public", title: "Apache Iceberg: The Architectural Deep Dive", author: "Tabular", views: "60K views", duration: "45:30", url: "https://www.youtube.com/watch?v=FOf6iE6u_is" },
                { type: "public", title: "Delta Lake vs Iceberg vs Hudi", author: "Onehouse", views: "100K views", duration: "18:45", url: "https://www.youtube.com/watch?v=uK8f1T0N1wa" }
            ],
            moocs: [
                { platform: "Databricks Academy", rating: 4.9, title: "Lakehouse Fundamentals", instructor: "Databricks", enrolled: "100K+", duration: "4 hours", url: "https://www.databricks.com/learn/training/lakehouse-fundamentals" }
            ],
            blogs: [
                { type: "Architecture", title: "Iceberg: A Table Format for Huge Datasets", publisher: "Netflix Technology Blog", readTime: "30 min", url: "https://netflixtechblog.com/introducing-and-using-apache-iceberg-at-netflix-71a7a107ef46" }
            ],
            scenarios: [
                {
                    id: "4.1", difficulty: "Expert", title: "The GDPR Delete", category: "Data Architecture", estimatedTime: "6 hours",
                    scenarioDescription: "A regulator demands that a user's data be deleted across all history. The company has 10 Petabytes of logs in S3 stored as Parquet files. In a traditional Data Lake, this requires re-writing 10,000 files to remove one row, costing $50,000 in compute every time.",
                    problemAnalysis: "Traditional Data Lakes are 'Append-Only'. Deleting a row is impossible without a full rewrite. A Lakehouse architecture with Iceberg handles this via 'Delete Files'—it marks the row as deleted in metadata. The actual cleanup happens later in the background with 'Compaction'.",
                    architectureLayers: ["Object Storage (Physical)", "Table Spec (Iceberg)", "Metadata Layer (Manifests)"],
                    toolsAndTech: [{ name: "Iceberg 'Merge On Read'", justification: "MOR allows the user to write a 'Delete' marker instantly. When someone queries the table, Iceberg automatically hides that row. No massive file rewrite is needed immediately." }],
                    tradeOffs: ["'Merge On Read' makes queries slightly slower until compaction runs; 'Copy On Write' makes deletes slower but queries faster."],
                    nfrConsiderations: ["Compliance: 100% deletion coverage across PII data. Performance: Deletion must not disrupt concurrent analytics."],
                    kpis: ["Reduce deletion compute cost from $50K to < $5 per request."],
                    keyInsights: "ACID is not just for databases. In the era of privacy laws, it's mandatory for Data Lakes."
                }
            ],
            playgrounds: [
                {
                    title: "Iceberg Time Travel",
                    description: "Querying historical versions of a table.",
                    examples: [
                        {
                            language: "sql",
                            code: "-- Querying the current state\nSELECT * FROM prod.db.inventory;\n\n-- Querying the state from 1 hour ago (Time Travel)\nSELECT * FROM prod.db.inventory FOR SYSTEM_TIME AS OF TIMESTAMP '2026-02-27 15:00:00';\n\n-- Querying a specific historical snapshot ID\nSELECT * FROM prod.db.inventory FOR SNAPSHOT AS OF 1234567890;"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "infra/iceberg-migration",
                commitMessage: "infra: migrated core customer-hub to Apache Iceberg format to support GDPR deletes and schema evolution",
                files: [{ name: "terraform/lakehouse.tf", type: "file", content: "iceberg config" }],
                activeFileSnippet: { filename: "lakehouse.tf", code: "resource \"aws_glue_catalog_table\" \"main\" {\n  parameters = { \"table_type\" = \"ICEBERG\" }\n}" }
            },
            community: {
                aiSummary: "The 'Data Warehouse' as a proprietary software box is dying. The 'Lakehouse' as a set of file-standards on your own S3 is the future.",
                solutions: []
            }
        }
    ],
    videoCount: 220,
    articleCount: 150,
    problemCount: 90,
    capstoneProject: {
        title: "The Omni-Channel Streaming Data Platform",
        description: "You will architect and build a petabyte-scale ready data platform. First, you'll configure a Spark Structured Streaming job that consumes user clickstream events from a Kafka cluster. You'll implement 'Watermarking' to handle late-arriving events and 'Windowed Aggregations' to calculate live session counts. Next, you will write these events into an Apache Iceberg Lakehouse on S3, ensuring ACID transactions and Schema Evolution. You will then build a dbt project on top of this Lakehouse to transform the raw events into a clean 'Dimensional Model' for BI analysts. Finally, you will implement a 'Data Quality' test suite that halts the pipeline if critical metrics like 'Bounce Rate' exceed 100%. This project demonstrates mastery of the complete Modern Data Stack at enterprise scale.",
        estimatedDays: 20,
        skillsFocused: [
            "Spark Structured Streaming",
            "Apache Kafka",
            "Apache Iceberg",
            "Modern Data Stack (dbt)",
            "Distributed System Debugging",
            "Data Governance & Quality"
        ],
        steps: [
            {
                title: "Foundation: Kafka to Spark",
                description: "Set up the real-time ingestion layer from Kafka into Spark executors."
            },
            {
                title: "Architecture: The Iceberg Lakehouse",
                description: "Configure S3 to act as an ACID-compliant Lakehouse using the Iceberg table format."
            },
            {
                title: "Analytics: dbt Transformation Layer",
                description: "Develop the SQL models to turn raw JSON streams into structured Dimension and Fact tables."
            },
            {
                title: "Reliability: Monitoring & DQ",
                description: "Implement dbt-tests and Grafana dashboards to monitor streaming health and data accuracy."
            }
        ]
    },
    totalEstimatedHours: 70,
    estimatedCompletionDays: 60,
    moduleCount: 4,
    createdAt: "2026-02-27T00:00:00Z",
    updatedAt: "2026-02-27T00:00:00Z",
    version: "1.0",
    status: "published"
};
