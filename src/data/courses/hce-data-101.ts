import { CourseEnhanced } from './types';

export const hceData101: CourseEnhanced = {
    id: "HCE DATA 101",
    titleKey: "courses.hceData101",
    descKey: "courses.hceData101Desc",
    icon: "📊",
    duration: "6 weeks",
    languages: ["SQL", "Python", "Airflow"],
    category: "high-code",
    programIds: ["HCE DATA", "HCE AI"],
    trackId: "hce",
    level: "beginner",
    prerequisites: ["CORE PROG PY", "CORE CS 101"],
    targetAudience: "Engineers transitioning into Data Engineering, focusing on building high-reliability pipelines and analytical warehouses.",
    learningOutcomes: [
        "Design and optimize complex SQL queries using Window Functions and CTEs",
        "Model analytical data warehouses using Kimball Star Schema methodology",
        "Engineer resilient ETL pipelines in Python with robust error handling",
        "Understand the internal architecture of Cloud Data Warehouses (Snowflake, BigQuery)",
        "Orchestrate complex task dependencies using Apache Airflow DAGs"
    ],
    modules: [
        {
            id: "HCE-DATA-101-M1",
            title: "Advanced Analytical SQL",
            description: "Mastering the language of data for professional engineering.",
            sequenceNumber: 1,
            estimatedHours: 10,
            topics: ["HCE-DATA-101-M1-T1", "HCE-DATA-101-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Write complex Window functions for time-series and ranking analysis",
                "Implement Recursive CTEs to model hierarchical data (Org Charts, BOM)",
                "Analyze and optimize SQL execution plans for multi-billion row tables"
            ]
        },
        {
            id: "HCE-DATA-101-M2",
            title: "Dimensional Data Modeling",
            description: "Structuring data for decision-making and performance.",
            sequenceNumber: 2,
            estimatedHours: 12,
            topics: ["HCE-DATA-101-M2-T1", "HCE-DATA-101-M2-T2"],
            prerequisiteModuleIds: ["HCE-DATA-101-M1"],
            outcomes: [
                "Design Fact and Dimension tables for sub-second BI performance",
                "Implement Slowly Changing Dimensions (SCD Type 2) for historical auditing",
                "Translate business requirements into efficient Star Schemas"
            ]
        },
        {
            id: "HCE-DATA-101-M3",
            title: "ETL Engineering with Python",
            description: "Extracting, Transforming, and Loading at scale.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["HCE-DATA-101-M3-T1", "HCE-DATA-101-M3-T2"],
            prerequisiteModuleIds: ["HCE-DATA-101-M2"],
            outcomes: [
                "Build robust scrapers and API extractors with exponential backoff",
                "Transform data efficiently using Pandas and Vectorized operations",
                "Implement Bulk Loading patterns for high-throughput DB inserts"
            ]
        },
        {
            id: "HCE-DATA-101-M4",
            title: "Modern Data Warehouse Architectures",
            description: "Cloud-native storage and compute engine optimization.",
            sequenceNumber: 4,
            estimatedHours: 10,
            topics: ["HCE-DATA-101-M4-T1", "HCE-DATA-101-M4-T2"],
            prerequisiteModuleIds: ["HCE-DATA-101-M3"],
            outcomes: [
                "Understand Columnar storage architecture (Parquet, ORC, Avro)",
                "Optimize partitioning and clustering for BigQuery and Snowflake",
                "Compare Shared-Nothing vs Shared-Storage architectures"
            ]
        },
        {
            id: "HCE-DATA-101-M5",
            title: "Orchestration & Data Operations",
            description: "Running pipelines reliably in a production environment.",
            sequenceNumber: 5,
            estimatedHours: 12,
            topics: ["HCE-DATA-101-M5-T1", "HCE-DATA-101-M5-T2"],
            prerequisiteModuleIds: ["HCE-DATA-101-M4"],
            outcomes: [
                "Author complex Airflow DAGs with conditional execution paths",
                "Monitor pipeline health and set up SLA-based alerting",
                "Implement Data Quality (DQ) tests within the orchestration layer"
            ]
        }
    ],
    topics: [
        {
            id: "HCE-DATA-101-M1-T1",
            moduleId: "HCE-DATA-101-M1",
            sequenceNumber: 1,
            title: "Window Functions & Analytical SQL Patterns",
            estimatedMinutes: 240,
            what: "Window functions (also known as Analytic functions) perform calculations across a set of table rows that are somehow related to the current row, without losing the individual row detail. Key components include `OVER()`, `PARTITION BY`, and `Window Frames` (e.g. `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`).",
            why: "Standard `GROUP BY` collapses your rows, losing the context. Window functions allow you to calculate 'Running Totals' while still seeing every individual transaction. They are computationally efficient because they avoid the 'Self-Join' mess that traditional SQL requires for ranking.",
            when: "Every time you need to compare a row's value to its neighbors—calculating Month-over-Month growth, finding the top 3 customers per region, or computing a moving average of stock prices.",
            how: "Use the `OVER` clause: `SUM(amount) OVER (PARTITION BY user_id ORDER BY created_at)`. This calculates a running balance per user, ordered by time, without needing complex subqueries.",
            ecosystem: "Standard SQL-2003, PostgreSQL, Snowflake, BigQuery, Redshift, SparkSQL.",
            realWorld: "E-commerce giants like Amazon use Window functions to calculate 'Suggested Product' rankings in real-time. By partitioning views by 'Category' and ordering by 'Sales Velocity', their SQL engine can instantly identify trends without deep nested loops.",
            useCases: [
                "Time-series analysis: Moving averages and Year-to-Date totals",
                "Ranking systems: Assigning loyalty tiers to customers based on spend",
                "Data cleaning: Identifying and removing duplicate records using `ROW_NUMBER()`"
            ],
            advantages: [
                "Drastically improved readability for complex analytical queries",
                "Better performance than self-joins via the database's internal windowing engine",
                "Allows for advanced calculations (like lead/lag) that are impossible in simple SQL"
            ],
            disadvantages: [
                "Subsets of window functions vary slightly between DB vendors (Postgres vs T-SQL)",
                "Over-use can lead to slow queries if partitioning is done on unindexed columns"
            ],

            interviewTip: "If asked to deduplicate a table, don't say 'SELECT DISTINCT'. Say: 'I'll use a CTE with ROW_NUMBER() PARTITION BY the unique keys, then delete where row_number > 1'. This shows you handle the 'Which one to keep' logic correctly.",
            resumeBullet: "Engineered high-performance analytical views using Window Functions and recursive CTEs, replacing legacy procedural logic and reducing report generation time by 80%.",

            videos: [
                { type: "public", title: "SQL Window Functions in 10 Minutes", author: "Web Dev Simplified", views: "300K views", duration: "12:15", url: "https://www.youtube.com/watch?v=Ww71knvhQ-s" },
                { type: "public", title: "Advanced SQL: Window Functions Masterclass", author: "Alex The Analyst", views: "150K views", duration: "25:40", url: "https://www.youtube.com/watch?v=H6OTas0R_L8" }
            ],
            moocs: [
                { platform: "Udemy", rating: 4.8, title: "The Ultimate Guide to SQL Analytic Functions", instructor: "Maven Analytics", enrolled: "40K+", duration: "12 hours", url: "https://www.udemy.com/course/advanced-sql-window-functions/" }
            ],
            blogs: [
                { type: "Core", title: "PostgreSQL Window Functions Deep Dive", publisher: "Postgres Wiki", readTime: "25 min", url: "https://www.postgresql.org/docs/current/tutorial-window.html" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Fraudulent Spender", category: "Analytic SQL", estimatedTime: "2 hours",
                    scenarioDescription: "A bank needs to flag 'Velocity Attacks' where a user makes more than 5 transactions of exactly $100 within a 1-hour window. The database has 500 million rows.",
                    problemAnalysis: "A simple `GROUP BY user_id, date` won't work because the window is 'rolling'. We need to look 'backwards' from every individual transaction to see if the previous 4 transactions happened within the last 60 minutes and had the same amount.",
                    architectureLayers: ["Data Analysis Layer", "Fraud Detection Engine", "SQL Query Strategy"],
                    toolsAndTech: [{ name: "LAG() function", justification: "By using `LAG(created_at, 4) OVER (PARTITION BY user_id ORDER BY created_at)`, we can instantly check the gap between the current transaction and the one 4 slots before it." }],
                    tradeOffs: ["Running this query across the whole DB is expensive; it should be limited to the 'last 2 hours' of data using an index."],
                    nfrConsiderations: ["Freshness: Detection must happen within 5 minutes of the transaction."],
                    kpis: ["Flag 99% of synthetic transaction attacks without blocking legitimate users."],
                    keyInsights: "Windows are relative. The power of SQL is defining the frame, not just the filter."
                }
            ],
            playgrounds: [
                {
                    title: "Running Total Sandbox",
                    description: "Calculating a rolling sum of revenue per day.",
                    examples: [
                        {
                            language: "sql",
                            code: "-- Calculating daily revenue and a cumulative 'Total to Date'\nSELECT\n  sale_date,\n  daily_amount,\n  SUM(daily_amount) OVER (ORDER BY sale_date) as rolling_total\nFROM daily_sales\nORDER BY sale_date;"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "feat/fraud-detection-views",
                commitMessage: "feat: implemented rolling velocity check views for real-time fraud monitoring",
                files: [{ name: "db/views/fraud_checks.sql", type: "file", content: "analytical sql" }],
                activeFileSnippet: { filename: "fraud_checks.sql", code: "CREATE VIEW velocity_alerts AS \nSELECT *, \nEXTRACT(EPOCH FROM (created_at - LAG(created_at, 5) OVER(PARTITION BY user_id ORDER BY created_at))) as interval_sec\nFROM transactions;" }
            },
            community: {
                aiSummary: "The transition from standard SQL to Analytical SQL is the bridge between a 'Developer' and a 'Data Engineer'. Master partitioning or you'll be stuck in the CRUD loop.",
                solutions: []
            }
        },
        {
            id: "HCE-DATA-101-M2-T1",
            moduleId: "HCE-DATA-101-M2",
            sequenceNumber: 1,
            title: "Dimensional Modeling: The Star Schema",
            estimatedMinutes: 240,
            what: "Dimensional Modeling (Kimball Methodology) is a data structure designed for analytical queries. It consists of Fact Tables (events like 'Sale', 'Login', 'Click') and Dimension Tables (attributes like 'User Profile', 'Product Details', 'Location'). The Star Schema is the simplest form, where a central Fact table is surrounded by Dimension tables.",
            why: "Application databases (normalized) are designed for writing consistent data (OLTP). Analytical databases need to be denormalized for reading massive amounts of data (OLAP) without thousands of slow joins. Star schemas allow a BI tool like Tableau or PowerBI to generate reports in seconds instead of minutes.",
            when: "Every time you move data from your production app database into a Data Warehouse (like Snowflake or BigQuery) for reporting and AI training.",
            how: "Identity 'Business Processes' (the facts). Define 'Grain' (what does one row represent?). Create 'Dimensions' (the context). Map keys (Foreign Keys in Fact point to Primary Keys in Dimensions).",
            ecosystem: "Star Schema, Snowflake Schema, Kimball Methodology, Inmon Architecture, Data Vault 2.0.",
            realWorld: "Walmart's data architecture is built on thousands of Star Schemas. Every 'Scan' at a checkout is a row in a 'Sales Fact' table, linking to dimensions for 'Store', 'Item', 'Employee', and 'Promotion'. This allows them to see global inventory trends across 10,000 stores instantly.",
            useCases: [
                "Designing the backend for a Business Intelligence (BI) Dashboard",
                "Structuring data for high-performance Machine Learning feature engineering",
                "Building a unified 'Single Source of Truth' for company-wide reporting"
            ],
            advantages: [
                "Massively faster query performance for aggregations (`SUM`, `AVG`)",
                "Intuitively understandable for non-technical business analysts",
                "Highly scalable across distributed data warehouses like BigQuery"
            ],
            disadvantages: [
                "Data redundancy (denormalization) leads to higher storage costs",
                "ETL process to convert data from regular DB to Star Schema is complex to maintain"
            ],

            interviewTip: "When asked to 'Model a system', start by asking: 'Is this for a production app or for data analysis?'. If analysis, immediately start drawing a central Fact table. This proves you understand the OLTP/OLAP divide.",
            resumeBullet: "Architected a multi-subject Star Schema data warehouse, migrating from siloed production mirrors to a unified Kimball model and improving analyst speed by 400%.",

            videos: [
                { type: "public", title: "Dimensional Modeling Explained", author: "Intellipaat", views: "200K views", duration: "18:30", url: "https://www.youtube.com/watch?v=D_9kH2D9Ekg" },
                { type: "public", title: "Star vs Snowflake Schema", author: "Codedamn", views: "100K views", duration: "12:15", url: "https://www.youtube.com/watch?v=uK8f1T0N1wA" }
            ],
            moocs: [
                { platform: "Coursera", rating: 4.7, title: "Data Warehousing for Business Intelligence", instructor: "University of Colorado", enrolled: "50K+", duration: "15 hours", url: "https://www.coursera.org/specializations/data-warehousing" }
            ],
            blogs: [
                { type: "Architecture", title: "The Kimball Group: Dimensional Modeling 101", publisher: "Kimball Group", readTime: "45 min", url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/" }
            ],
            scenarios: [
                {
                    id: "2.1", difficulty: "Hard", title: "The Slow Dashboard", category: "Data Architecture", estimatedTime: "4 hours",
                    scenarioDescription: "A VP of Sales tries to see 'Revenue by Region by Month'. The dashboard takes 2 minutes to load. The engineering team is querying the production Postgres DB, which has 50 joins across highly normalized 'User', 'Address', 'Order', 'Product', 'Coupon' tables.",
                    problemAnalysis: "The production DB is normalized (3rd Normal Form) to prevent data anomalies during writes. However, joining 50 tables across 100M rows for a simple sum is a 'Relational Nightmare'. The data must be denormalized into a 'Sales Fact' table where region and date are pre-indexed dimension keys.",
                    architectureLayers: ["OLTP Layer", "ETL Transformation Layer", "OLAP Storage Layer"],
                    toolsAndTech: [{ name: "Snowflake + dbt", justification: "dbt (data build tool) allows engineers to transform normalized Postgres data into Star Schemas using simple SQL in a version-controlled way, then materialize them as fast tables in Snowflake." }],
                    tradeOffs: ["A Star Schema update might lag 15-60 minutes behind production, which is usually acceptable for business reporting."],
                    nfrConsiderations: ["Performance: Analytical queries must return in < 3 seconds."],
                    kpis: ["Reduce total join count for the core sales report from 50 to < 5."],
                    keyInsights: "Normalization protects data integrity; Denormalization enables data analysis. Know which one applies when."
                }
            ],
            playgrounds: [
                {
                    title: "Star Schema Design Lab",
                    description: "Defining the structure of a core Fact table.",
                    examples: [
                        {
                            language: "sql",
                            code: "/* The central 'Sales' Fact Table */\nCREATE TABLE fact_sales (\n  order_id BIGINT PRIMARY KEY, -- The Grain\n  date_key INT REFERENCES dim_date(key),\n  product_key INT REFERENCES dim_product(key),\n  user_key INT REFERENCES dim_user(key),\n  quantity INT,\n  total_amount_usd DECIMAL(18,2) -- The Metric\n);"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "data/modeling-kimball",
                commitMessage: "data: defined core star schema for marketing attribution modeling",
                files: [{ name: "warehouse/models/marketing_fact.sql", type: "file", content: "dbt model" }],
                activeFileSnippet: { filename: "marketing_fact.sql", code: "SELECT \n  md5(user_id || event_time) as fact_key,\n  event_time,\n  region_id,\n  count(*) as hit_count\nFROM {{ ref('stg_events') }} GROUP BY 1,2,3" }
            },
            community: {
                aiSummary: "Data Modeling is the invisible architecture of every AI company. If your data isn't modeled for analysis, your AI models will spend 90% of their time just cleaning your mess.",
                solutions: []
            }
        },
        {
            id: "HCE-DATA-101-M3-T1",
            moduleId: "HCE-DATA-101-M3",
            sequenceNumber: 1,
            title: "Resilient Data Extraction & API Engineering",
            estimatedMinutes: 240,
            what: "Data Extraction is the 'E' in ETL—the process of retrieving raw data from external sources (SaaS APIs, Web Scrapers, Change Data Capture streams). Resilient extraction requires handling network jitter, HTTP 429 (Rate Limiting), 503 (Server Busy), and 'Schema Drift' where the source suddenly changes its data format.",
            why: "External sources are unreliable. If your Python script crashes because a JSON key disappeared or an API limited you, your whole company's data pipeline stops. Professional engineers build 'Defensive Extractors' that self-heal and alert precisely on failure.",
            when: "Consuming data from Shopify, Salesforce, Google Ads, or custom internal production microservices.",
            how: "Use the `requests` library in Python combined with a retry library like `tenacity`. Implement 'Checkpoints' (Cursor) so if a job fails halfway, it restarts from the last successful record using a timestamp like `updated_at`.",
            ecosystem: "Python Requests, Tenacity, BeautifulSoup, Selenium, Airbyte, Fivetran, CDC (Debezium).",
            realWorld: "Expedia extracts flight pricing data from hundreds of airline APIs every second. They use 'Circuit Breakers'—if an airline's API is slow, the extractor stops asking it for 1 minute to prevent clogging their own worker threads and to avoid getting IP-blocked by the airline.",
            useCases: [
                "Syncing customer tickets from Zendesk to a central Data Lake",
                "Building a competitive price tracker by scraping retail sites nightly",
                "Capturing real-time stock market data via WebSockets"
            ],
            advantages: [
                "Lowers data ingestion costs compared to expensive 'Drag-and-Drop' vendors",
                "Provides total control over data normalization and mapping logic",
                "Enables real-time ingestion patterns that standard tools can't handle"
            ],
            disadvantages: [
                "High maintenance: the 'Web' is a moving target and scrapers break constantly",
                "Significant responsibility: you must manage your own secret rotation and API keys safely"
            ],

            interviewTip: "If asked 'How do you handle a slow API?', mention 'Exponential Backoff' and 'Batching'. Explain that you won't just loop; you'll wait progressively longer (2s, 4s, 8s) between retries to be a 'Good Net Citizen'.",
            resumeBullet: "Engineered a distributed Python extraction engine supporting 50+ SaaS APIs, utilizing exponential backoff and cursor-based syncing to achieve 99.9% ingestion reliability.",

            videos: [
                { type: "public", title: "API Integrations with Python", author: "Corey Schafer", views: "500K views", duration: "45:10", url: "https://www.youtube.com/watch?v=tb8gHV68OoY" },
                { type: "public", title: "Web Scraping at Scale", author: "Codedamn", views: "120K views", duration: "22:15", url: "https://www.youtube.com/watch?v=XQgXKtPSzUI" }
            ],
            moocs: [
                { platform: "Coursera", rating: 4.8, title: "Python for Data Extraction", instructor: "University of Michigan", enrolled: "200K+", duration: "12 hours", url: "https://www.coursera.org/learn/python-network-data" }
            ],
            blogs: [
                { type: "Engineering", title: "Handling Rate Limits in Python", publisher: "FullStackPython", readTime: "15 min", url: "https://www.fullstackpython.com/api-integration.html" }
            ],
            scenarios: [
                {
                    id: "3.1", difficulty: "Hard", title: "The Vanishing JSON Key", category: "Data Engineering", estimatedTime: "3 hours",
                    scenarioDescription: "A pipeline syncs product data from a 3rd party vendor. Suddenly, the entire 'Price' column in the warehouse becomes empty. The Python script didn't crash because the vendor simply renamed the JSON key from `price_usd` to `amount`.",
                    problemAnalysis: "This is 'Schema Drift'. The code was not 'Strict'. It assumed the presence of the key. In production data engineering, every extraction should start with a 'Contract Validation' step using a library like Pydantic.",
                    architectureLayers: ["API Consumer Layer", "Schema Validation Layer", "Warehouse Load Layer"],
                    toolsAndTech: [{ name: "Pydantic & Great Expectations", justification: "Pydantic forces Python to throw an error if a JSON doesn't match a predefined schema. 'Great Expectations' runs post-load tests to ensure the data 'looks valid' (e.g. Price is not negative)." }],
                    tradeOffs: ["Strict validation can stop the pipeline frequently; configure 'Alerting' vs 'Hard Block' based on column criticality."],
                    nfrConsiderations: ["Robustness: One bad row should not crash a 10-million row ingestion job."],
                    kpis: ["Eliminate 100% of 'Silent Failures' in the data ingestion layer."],
                    keyInsights: "Trust no one. Validate every API response before it touches your permanent storage."
                }
            ],
            playgrounds: [
                {
                    title: "The Safe Request Engine",
                    description: "Implementing retries with exponential backoff.",
                    examples: [
                        {
                            language: "python",
                            code: "import requests\nfrom tenacity import retry, wait_exponential, stop_after_attempt\n\n@retry(wait=wait_exponential(multiplier=1, min=4, max=10), stop=stop_after_attempt(5))\ndef fetch_data(url):\n    print(f\"Fetching {url}...\")\n    response = requests.get(url, timeout=10)\n    response.raise_for_status() # Throws exception if 4xx or 5xx\n    return response.json()"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "fix/resilient-api-loader",
                commitMessage: "fix: added Pydantic validation and exponential backoff to handle unreliable vendor API",
                files: [{ name: "loaders/api_sync.py", type: "file", content: "resilient code" }],
                activeFileSnippet: { filename: "api_sync.py", code: "try:\n    data = fetch_data(api_url)\n    validated = ProductSchema(**data)\nexcept ValidationError as e:\n    notify_engineering(f\"Schema Drift: {e}\")" }
            },
            community: {
                aiSummary: "Extraction is the most fragile part of the stack. Build for failure. Log everything. Assume the API will return junk 1% of the time.",
                solutions: []
            }
        },
        {
            id: "HCE-DATA-101-M5-T1",
            moduleId: "HCE-DATA-101-M5",
            sequenceNumber: 1,
            title: "Apache Airflow: Orchestrating the DAG",
            estimatedMinutes: 240,
            what: "Orchestration is the process of coordinating complex, multi-step data workflows. Apache Airflow (created by Airbnb) allows you to define these workflows as Directed Acyclic Graphs (DAGs) in Python. Unlike 'Cron', Airflow handles dependency tracking—ensuring that a 'Transform' task only starts if the 'Extract' task succeeded.",
            why: "In a production data ecosystem, you have hundreds of moving parts. If a Snowflake table is being updated while an ML model is trying to read from it, the model will fail or get corrupted data. Airflow provides a unified 'Control Plane' to see exactly where your data is and why a specific job failed at 3 AM.",
            when: "Whenever you have more than 2 scripts that need to run in a specific order, or need to schedule recurring data jobs with built-in retries and alerting.",
            how: "Write a Python file defining a `DAG` object. Instantiate `Operators` (PostgresOperator, PythonOperator). Link them using the 'Bitshift' operators: `extract_task >> transform_task >> load_task`.",
            ecosystem: "Apache Airflow, Astronomer, MWAA (AWS Managed Airflow), Google Cloud Composer, Prefect, Dagster.",
            realWorld: "Spotify uses Airflow to manage the massive DAG that generates 'Discover Weekly'. It involves thousands of tasks: gathering listen logs from S3, running Spark jobs for feature extraction, training ML models, and finally pushing the results to a high-speed KV store for the app to read.",
            useCases: [
                "Scheduling nightly ETL jobs to sync Salesforce data to BigQuery",
                "Automating complex PDF report generation and emailing to stakeholders",
                "Running weekly database maintenance and index optimization routines"
            ],
            advantages: [
                "Visualizes your entire data architecture's dependencies",
                "Extremely flexible: if you can write it in Python, Airflow can run it",
                "Fault-tolerant: automatically handles retries, timeouts, and SLA tracking"
            ],
            disadvantages: [
                "Infrastructure heavy: requires a Web Server, Scheduler, and Metadata Database (Postgres) to run",
                "Potential for 'Dependency Hell': if the Airflow server goes down, all your company's data stops moving"
            ],

            interviewTip: "If asked 'How do you handle a data pipeline failure?', don't say 'I'll fix it manually'. Say: 'I use Airflow's retry policies to handle transient errors, and XComs for passing metadata between tasks to diagnose the root cause quickly.'",
            resumeBullet: "Migrated 100+ legacy shell scripts to a centralized Apache Airflow orchestration platform, reducing pipeline downtime by 90% and providing full visibility into data lineage.",

            videos: [
                { type: "public", title: "Airflow for Beginners", author: "Marc Lamberti", views: "250K views", duration: "20:15", url: "https://www.youtube.com/watch?v=K9AnJ9_ZAXE" },
                { type: "public", title: "Advanced Airflow: SubDAGs vs Task Groups", author: "Astronomer", views: "50K views", duration: "15:40", url: "https://www.youtube.com/watch?v=yYm-M3rR7kM" }
            ],
            moocs: [
                { platform: "Udemy", rating: 4.9, title: "The Complete Hands-On Introduction to Apache Airflow", instructor: "Marc Lamberti", enrolled: "30K+", duration: "10 hours", url: "https://www.udemy.com/course/the-complete-hands-on-course-to-master-apache-airflow/" }
            ],
            blogs: [
                { type: "Architecture", title: "Airflow at Airbnb: Why we built it", publisher: "Airbnb Engineering", readTime: "25 min", url: "https://medium.com/airbnb-engineering/airflow-a-workflow-management-platform-4631819ad77b" }
            ],
            scenarios: [
                {
                    id: "5.1", difficulty: "Medium", title: "The Invisible Failure", category: "Orchestration Ops", estimatedTime: "2.5 hours",
                    scenarioDescription: "A company has a 'Cron' job that runs a Python script to move data. One night, the network goes down for 5 minutes. The script fails. The next night, the next script runs but sees 'State Mismatch' and corrupts the production data. No one noticed until a customer complained 3 days later.",
                    problemAnalysis: "Cron is 'Fire and Forget'. It doesn't care if the job succeeded. It doesn't have an 'Alerting' hook. We need a system that knows the 'State' of the previous run and prevents the 'Next' run if the 'Previous' failed (Dependency Management).",
                    architectureLayers: ["Scheduler Layer", "State Store (Postgres)", "Execution Workers (Celery)"],
                    toolsAndTech: [{ name: "Airflow DAGs", justification: "Airflow DAGs have built-in 'State'. If Task A fails, Task B will show up as 'Upstream Failed' and won't run. Airflow will then automatically email the on-call engineer with the logs of why Task A failed." }],
                    tradeOffs: ["Airflow is more complex to set up than a simple Cron job, but mandatory for high-stakes financial or user data."],
                    nfrConsiderations: ["Observability: 100% visibility into pipeline health. Reliability: Fail-fast behavior on errors."],
                    kpis: ["Reduce 'Mean Time to Recovery' (MTTR) for pipeline failures from 72 hours to < 1 hour."],
                    keyInsights: "Scheduling is not Orchestration. Orchestration is knowing what failed and why."
                }
            ],
            playgrounds: [
                {
                    title: "The Airflow DAG Factory",
                    description: "Building a simple Python pipeline in the Airflow UI.",
                    examples: [
                        {
                            language: "python",
                            code: "from airflow import DAG\nfrom airflow.operators.bash import BashOperator\nfrom datetime import datetime\n\nwith DAG('daily_cleanup', start_date=datetime(2026,1,1), schedule='@daily') as dag:\n  t1 = BashOperator(task_id='delete_logs', bash_command='rm -rf /tmp/logs/*')\n  t2 = BashOperator(task_id='notify_admin', bash_command='echo \"Cleanup Done\"')\n  \n  t1 >> t2 # This bitshift operator creates the 'Arrow' in the graph"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "infra/airflow-dags",
                commitMessage: "infra: migrated staging database cleanup logic to Airflow DAGs for better visibility",
                files: [{ name: "dags/cleanup_dag.py", type: "file", content: "airflow logic" }],
                activeFileSnippet: { filename: "cleanup_dag.py", code: "with DAG('inventory_sync', ...) as dag:\n  extract = PythonOperator(...)\n  load = PostgresOperator(...)\n  extract >> load" }
            },
            community: {
                aiSummary: "The DAG is the blueprint of your company's brain. If the DAG is messy, the brain is confused. Keep your tasks atomic and your dependencies clear.",
                solutions: []
            }
        }
    ],
    videoCount: 215,
    articleCount: 140,
    problemCount: 80,
    capstoneProject: {
        title: "The Weather Sensing Data Lake",
        description: "You will architect and build a professional-grade automated data pipeline. First, you'll write a resilient Python extractor that pulls weather and flight data from two separate public APIs, handling rate limiting and potential network failures using the Tenacity library. Next, you will model a Star Schema in PostgreSQL, designing Fact tables for 'Flight Delay Events' and Dimension tables for 'Airports' and 'Weather Conditions'. Finally, you will orchestrate the entire flow into an Apache Airflow DAG that runs every hour, performs automated Data Quality (DQ) checks to ensure no null prices or logically impossible dates are loaded, and sends a Slack notification upon completion or failure. This project proves you can handle the complete lifecycle of a modern Data Engineering role.",
        estimatedDays: 15,
        skillsFocused: [
            "Advanced SQL (Window Functions)",
            "Dimensional Modeling (Star Schema)",
            "Resilient Python (Tenacity, Logging)",
            "Data Orchestration (Airflow)",
            "Data Quality Testing"
        ],
        steps: [
            {
                title: "Phase 1: The Resilient Extractor",
                description: "Develop a Python script to fetch data from OpenWeatherMap API with exponential backoff."
            },
            {
                title: "Phase 2: The Analytical Warehouse",
                description: "Model and create the PostgreSQL tables using Kimball methodology."
            },
            {
                title: "Phase 3: The Airflow Orchestrator",
                description: "Wrap the logic into an Airflow DAG and implement retry and alerting logic."
            },
            {
                title: "Phase 4: Data Quality & Cleanup",
                description: "Write SQL validation checks to ensure zero 'dirty data' enters the warehouse."
            }
        ]
    },
    totalEstimatedHours: 65,
    estimatedCompletionDays: 60,
    moduleCount: 5,
    createdAt: "2026-02-27T00:00:00Z",
    updatedAt: "2026-02-27T00:00:00Z",
    version: "1.0",
    status: "published"
};
