import { CourseEnhanced } from './types';

export const hceAi101: CourseEnhanced = {
    id: "HCE AI 101",
    titleKey: "courses.hceAi101",
    descKey: "courses.hceAi101Desc",
    icon: "🧠",
    duration: "8 weeks",
    languages: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    category: "high-code",
    programIds: ["HCE AI", "HCE DATA"],
    trackId: "hce",
    level: "beginner",
    prerequisites: ["CORE PROG PY", "CORE DSA"],
    targetAudience: "Engineers transitioning into Machine Learning, focusing on statistical rigour, algorithm implementation, and production-ready ML pipelines.",
    learningOutcomes: [
        "Master Exploratory Data Analysis (EDA) and Feature Engineering workflows",
        "Implement and optimize Linear and Logistic Regression for binary/multiclass outcomes",
        "Engineer advanced tree-based ensembles using Random Forests and Gradient Boosting",
        "Deploy Unsupervised Learning patterns for clustering and anomaly detection",
        "Architect production ML pipelines with FastAPI, Pydantic, and automated validation"
    ],
    modules: [
        {
            id: "HCE-AI-101-M1",
            title: "Exploratory Data Analysis (EDA) & Statistics",
            description: "Foundational data understanding and pre-processing.",
            sequenceNumber: 1,
            estimatedHours: 12,
            topics: ["HCE-AI-101-M1-T1", "HCE-AI-101-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Visualize data distributions and identify outliers using Seaborn/Matplotlib",
                "Handle missing data using advanced imputation strategies (KNN, MICE)",
                "Perform statistical hypothesis testing (t-tests, ANOVA) for feature significance"
            ]
        },
        {
            id: "HCE-AI-101-M2",
            title: "Linear Models & Statistical Inference",
            description: "The mathematical backbone of predictive analysis.",
            sequenceNumber: 2,
            estimatedHours: 15,
            topics: ["HCE-AI-101-M2-T1", "HCE-AI-101-M2-T2"],
            prerequisiteModuleIds: ["HCE-AI-101-M1"],
            outcomes: [
                "Optimize Regression models using Gradient Descent and Elastic Net regularization",
                "Map classification probabilities via the Sigmoid/Softmax activation functions",
                "Diagnose multicollinearity using Variance Inflation Factor (VIF) analysis"
            ]
        },
        {
            id: "HCE-AI-101-M3",
            title: "Ensemble Methods & Tree Architectures",
            description: "Scaling to complex, non-linear real-world datasets.",
            sequenceNumber: 3,
            estimatedHours: 18,
            topics: ["HCE-AI-101-M3-T1", "HCE-AI-101-M3-T2"],
            prerequisiteModuleIds: ["HCE-AI-101-M2"],
            outcomes: [
                "Implement Bagging vs Boosting strategies (Random Forest vs XGBoost)",
                "Optimize hyperparameters using Bayesian Optimization and GridSearchCV",
                "Explain model decisions utilizing SHAP values and Feature Importance"
            ]
        },
        {
            id: "HCE-AI-101-M4",
            title: "Unsupervised Discovery & Dimensionality",
            description: "Finding patterns in unlabeled data environments.",
            sequenceNumber: 4,
            estimatedHours: 12,
            topics: ["HCE-AI-101-M4-T1", "HCE-AI-101-M4-T2"],
            prerequisiteModuleIds: ["HCE-AI-101-M3"],
            outcomes: [
                "Segment users using K-Means++ and Hierarchical Clustering",
                "Compress high-dimensional features using PCA and t-SNE",
                "Detect anomalies in network/financial data using Isolation Forests"
            ]
        },
        {
            id: "HCE-AI-101-M5",
            title: "Deployment, MLOps & Ethics",
            description: "Moving from Notebooks to Production Infrastructure.",
            sequenceNumber: 5,
            estimatedHours: 10,
            topics: ["HCE-AI-101-M5-T1", "HCE-AI-101-M5-T2"],
            prerequisiteModuleIds: ["HCE-AI-101-M4"],
            outcomes: [
                "Serve ML models via asynchronous FastAPI endpoints with Pydantic validation",
                "Implement model versioning and experimentation tracking (MLflow)",
                "Evaluate model bias and enforce algorithmic fairness"
            ]
        }
    ],
    topics: [
        {
            id: "HCE-AI-101-M1-T1",
            moduleId: "HCE-AI-101-M1",
            sequenceNumber: 1,
            title: "Exploratory Data Analysis (EDA) Masterclass",
            estimatedMinutes: 240,
            what: "Exploratory Data Analysis is the critical first phase of any Machine Learning project. It involves using statistical summaries and visualization techniques (histograms, scatter plots, box plots) to understand data distributions, detect anomalies, identify outliers, and discover relationships between variables before any modeling begins. It is where you determine if the data is high-quality or just 'Gigo' (Garbage in, Garbage out).",
            why: "A model is only as good as the data it's fed. If you train on biased data or ignore massive outliers, your model will fail in production. EDA allows an engineer to catch data-leakage (where the answer is accidentally hidden in the features) and ensure the assumptions of the chosen algorithm (like normality or homoscedasticity) are met.",
            when: "EDA happens the moment you receive a raw dataset from a Data Engineer or a database. It must be repeated every time the data source or schema changes.",
            how: "Utilize Python libraries like Pandas for data manipulation, and Seaborn/Matplotlib for visualization. Start with `df.describe()` and `df.info()`, then move to correlation matrices and pair-plots to see how variables interact. Use the 'Interquartile Range' (IQR) method to programmatically identify outliers.",
            ecosystem: "Pandas, NumPy, Seaborn, Matplotlib, Plotly, Pandas-Profiling (now YData-Profiling), SweetViz.",
            realWorld: "At Netflix, before training a recommendation model, engineers perform extensive EDA to see if certain regions or device types are over-represented. If 80% of data comes from high-end iPhones, the model might not generalize well to budget Android users in emerging markets.",
            useCases: [
                "Identifying seasonal trends in e-commerce sales data",
                "Cleaning medical sensor data by removing invalid technical spikes",
                "Discovering hidden correlations between user age and app engagement time"
            ],
            advantages: [
                "Prevents 'Blind Modeling' which leads to catastrophic production failures",
                "Helps in Feature Selection: identifying which variables actually matter",
                "Improves model accuracy by guiding correct pre-processing (Scaling, Normalization)"
            ],
            disadvantages: [
                "Can be extremely time-consuming (often 80% of the project time)",
                "Requires deep domain knowledge to distinguish between 'True Outliers' and 'Rare Events'"
            ],

            interviewTip: "If asked 'How do you start a new ML project?', do NOT say 'I'll use XGBoost'. Say: 'I'll begin with a thorough EDA to check for missing values, imbalance, and skewness'. This shows you are a senior engineer who values data integrity.",
            resumeBullet: "Pioneered automated EDA pipelines using Python and Seaborn, reducing initial data discovery time by 60% and catching 3 critical data leakage bugs before production.",

            videos: [
                { type: "public", title: "EDA with Pandas and Seaborn", author: "Keith Galli", views: "450K views", duration: "1:20:15", url: "https://www.youtube.com/watch?v=R67XuYc9NQ4" },
                { type: "public", title: "The 80/20 Rule of Machine Learning: Data Prep", author: "Codedamn", views: "100K views", duration: "18:20", url: "https://www.youtube.com/watch?v=XvSIn0V8rX4" }
            ],
            moocs: [
                { platform: "Kaggle Learn", rating: 4.9, title: "Data Cleaning & EDA", instructor: "Kaggle Team", enrolled: "500K+", duration: "4 hours", url: "https://www.kaggle.com/learn/data-cleaning" }
            ],
            blogs: [
                { type: "Core", title: "A Comprehensive Guide to EDA", publisher: "Towards Data Science", readTime: "40 min", url: "https://towardsdatascience.com/exploratory-data-analysis-8fc195e6d498" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Corrupted Sensor", category: "Data Validation", estimatedTime: "2.5 hours",
                    scenarioDescription: "A smart-home company's 'Temperature Predictor' suddenly starts predicting 500°C for every house in Alaska. The ML team is confused because the model hasn't changed in months.",
                    problemAnalysis: "The failure is in the 'Data Feed'. A specific batch of sensors started returning `-999` for frozen temperatures, which the script interpreted as a number. Without an EDA step in the pipeline to check the 'Minimum' and 'Maximum' values, this 'Sensor Noise' was fed directly into the prediction engine.",
                    architectureLayers: ["Data Ingestion Layer", "EDA/Validation Layer", "Inference Layer"],
                    toolsAndTech: [{ name: "Pandas Assertions & Histograms", justification: "By using simple `df['temp'].describe()` or visualizing a histogram, the outlier `-999` would have appeared as a massive isolated peak. Implementing a Z-score outlier detector would have automatically flagged this for human review." }],
                    tradeOffs: ["Strict validation can stop the pipeline; use 'Flexible Imputation' or 'Alerting' based on business criticality."],
                    nfrConsiderations: ["Robustness: The pipeline must never accept physically impossible values."],
                    kpis: ["Reduce 'Mean Time to Detection' (MTTD) of data corruption from 48 hours to < 5 minutes."],
                    keyInsights: "Models don't break; data does. Always audit your input distribution."
                }
            ],
            playgrounds: [
                {
                    title: "The Cleaning Sandbox",
                    description: "Handling missing values with Pandas.",
                    examples: [
                        {
                            language: "python",
                            code: "import pandas as pd\n\n# Loading a dataset with gaps\ndf = pd.read_csv('user_data.csv')\n\n# 1. Check for nulls\nprint(df.isnull().sum())\n\n# 2. Strategy: Impute with Median (Robust to outliers)\ndf['age'] = df['age'].fillna(df['age'].median())\n\n# 3. Strategy: Drop rows with too many missing values\ndf = df.dropna(thresh=3)\n\nprint(\"Cleaned Data Distribution:\", df.describe())"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "data/eda-discovery",
                commitMessage: "data: added automated data-quality report generation and outlier detection scripts",
                files: [{ name: "scripts/eda_report.py", type: "file", content: "eda logic" }],
                activeFileSnippet: { filename: "eda_report.py", code: "report = df.profile_report(title='Training Data Audit')\nreport.to_file('eda.html')" }
            },
            community: {
                aiSummary: "The most successful AI engineers are those who love data more than algorithms. Spend your time in Pandas, and your scikit-learn code will work the first time.",
                solutions: []
            }
        },
        {
            id: "HCE-AI-101-M3-T1",
            moduleId: "HCE-AI-101-M3",
            sequenceNumber: 1,
            title: "Random Forests & Ensemble Learning",
            estimatedMinutes: 240,
            what: "Ensemble learning is the technique of combining multiple weak models (like single Decision Trees) to create one strong, accurate model. Random Forest is the most famous 'Bagging' (Bootstrap Aggregating) ensemble. It builds hundreds of decision trees on random subsets of data and features, then averages their results (Regression) or takes a majority vote (Classification).",
            why: "A single Decision Tree is 'High Variance'—it overfits to every tiny noise in the training data, leading to poor 'Generalization'. Random Forests use 'Wisdom of the Crowd'. By averaging the errors of 100 different trees, the individual errors cancel out, leaving a robust, high-performance model.",
            when: "Whenever you have tabular data (SQL tables, CSVs) and you want a high-accuracy baseline that doesn't require complex hyperparameter tuning like Deep Learning.",
            how: "Use `RandomForestClassifier` from scikit-learn. Set `n_estimators` to the number of trees (e.g. 100). Use `max_depth` to control the complexity of individual trees. Fit the model and use `feature_importances_` to see what drove the results.",
            ecosystem: "Scikit-Learn, XGBoost, LightGBM, CatBoost (all 'Ensemble' brothers).",
            realWorld: "Expedia uses ensemble models to sort hotel results. They don't use one giant model; they use hundreds of trees that evaluate price, location, and user history. This ensures that even if one tree is 'confused' by a weird price spike, the average of the trees still shows a relevant result.",
            useCases: [
                "Predicting Bank Loan Default (High accuracy requirement)",
                "Classifying patient risk scores in healthcare",
                "Estimating real-estate prices based on thousands of features"
            ],
            advantages: [
                "Incredibly robust to outliers and noisy data",
                "Provides 'Out-of-the-Box' ranking of feature importance",
                "Parallelizable: You can train 100 trees on 100 CPU cores simultaneously"
            ],
            disadvantages: [
                "Models can become massive (Gigabytes) if the trees are too deep",
                "It is a 'Black Box'—harder to explain a specific 'Why' compared to Linear Regression"
            ],

            interviewTip: "If asked 'How does Random Forest reduce variance?', mention 'Bagging'. Explain that by training on random 'Bootstrapped' samples and random 'Feature Subsets', it ensures individual trees are decorrelated, which is the key to preventing overfitting.",
            resumeBullet: "Engineered a high-precision fraud detection system using Random Forest Ensembles, achieving a 12% boost in F1-score and identifying the top 5 risk-indicators via SHAP analysis.",

            videos: [
                { type: "public", title: "Random Forest Algorithm Clearly Explained", author: "StatQuest", views: "2M views", duration: "18:40", url: "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ" },
                { type: "public", title: "Bagging vs Boosting", author: "Codedamn", views: "85K views", duration: "12:15", url: "https://www.youtube.com/watch?v=sOnLw-m1nKE" }
            ],
            moocs: [
                { platform: "Udemy", rating: 4.8, title: "Machine Learning A-Z: Random Forest Section", instructor: "Kirill Eremenko", enrolled: "1M+", duration: "10 hours", url: "https://www.udemy.com/course/machinelearning/" }
            ],
            blogs: [
                { type: "Architecture", title: "Why Random Forest is still the Data Scientist's favorite", publisher: "KDnuggets", readTime: "25 min", url: "https://www.kdnuggets.com/2022/02/random-forest-algorithm-overview.html" }
            ],
            scenarios: [
                {
                    id: "3.1", difficulty: "Hard", title: "The Overfitting Trap", category: "Model Evaluation", estimatedTime: "3.5 hours",
                    scenarioDescription: "A student builds a 'Stock Market Predictor' using a Decision Tree. It gets 99.9% accuracy on historical data. They go live, and it loses 50% of its value in one day. Why?",
                    problemAnalysis: "The student fell into the 'Overfitting' trap. A single Decision Tree memorized the specific noise of the training period. In a Random Forest, this wouldn't happen because the ensemble averages out these noisy individual 'opinions'. However, even with ensembles, they likely had 'Data Leakage' (using future information in training).",
                    architectureLayers: ["Model Selection Layer", "Cross-Validation Layer", "Feature Engineering Layer"],
                    toolsAndTech: [{ name: "K-Fold Cross-Validation", justification: "Instead of a single Train-Test split, K-Fold ensures the model is tested on multiple distinct segments of the data. If the performance drops significantly on one fold, you know the model hasn't truly 'Generalised'." }],
                    tradeOffs: ["Ensembles take significantly more RAM and CPU to run than simple models."],
                    nfrConsiderations: ["Generalizability: The Gap between Training and Test accuracy must be < 5%."],
                    kpis: ["Achieve a stable F1-score across 5 different temporal data folds."],
                    keyInsights: "Accuracy on training data is vanity. Generalization on unseen data is sanity."
                }
            ],
            playgrounds: [
                {
                    title: "The Forest Grower",
                    description: "Training an ensemble in 5 lines.",
                    examples: [
                        {
                            language: "python",
                            code: "from sklearn.ensemble import RandomForestClassifier\n\n# Initialize with 100 trees and limited depth to prevent overfitting\nrf = RandomForestClassifier(n_estimators=100, max_depth=5, random_state=42)\n\n# Training (Fitting)\nrf.fit(X_train, y_train)\n\n# Identifying the 'MVP' features\nfor name, score in zip(feature_names, rf.feature_importances_):\n    print(f\"Feature {name}: {score:.2%}\")"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "feat/model-ensemble",
                commitMessage: "feat: implemented Random Forest model with GridSearch cross-validation to optimize hyper-parameters",
                files: [{ name: "models/churn_forest.py", type: "file", content: "ensemble logic" }],
                activeFileSnippet: { filename: "churn_forest.py", code: "search = GridSearchCV(RandomForestClassifier(), param_grid={'n_estimators': [50, 100, 200]})" }
            },
            community: {
                aiSummary: "Ensembles are a free lunch. By combining many diverse 'weak' opinions, you get a 'strong' truth. Never rely on a single tree in production.",
                solutions: []
            }
        },
        {
            id: "HCE-AI-101-M5-T1",
            moduleId: "HCE-AI-101-M5",
            sequenceNumber: 1,
            title: "Production ML: FastAPI & Model Serving",
            estimatedMinutes: 240,
            what: "Model Serving is the stage where a trained model (usually a `.pkl` or `.onnx` file) is wrapped in a production-grade web service (FastAPI) so that other applications (Web, Mobile) can send data (JSON) and receive predictions in real-time.",
            why: "A model inside a Jupyter Notebook is useless to a business. To provide value, the model must be available 24/7 as an API. High-Code Engineering (HCE) means building this with proper type-checking (Pydantic), asynchronous processing (FastAPI), and automated testing.",
            when: "The moment a model passes performance validation and is ready to be 'Integrated' into the actual software product.",
            how: "Export ('Pickle') the trained model from scikit-learn. Create a FastAPI app. Define a Pydantic `BaseModel` for the input schema. Load the model on startup (`@app.on_event('startup')`). Build a `/predict` endpoint that takes the JSON input, converts it to a NumPy array, and returns the model output.",
            ecosystem: "FastAPI, Pydantic, Uvicorn, Gunicorn, Docker, BentoML, MLflow.",
            realWorld: "DoorDash uses thousands of FastAPI-based ML services. When you open the app, your phone makes an API call to a specific model to predict 'Delivery Time'. That model must respond in < 50ms using optimized serving logic.",
            useCases: [
                "Serving an Image Classification model for a medical app",
                "Deploying a Fraud-Check API for a fintech checkout page",
                "Enabling 'Instant Recommendations' on a streaming platform"
            ],
            advantages: [
                "Asynchronous architecture allows handling thousands of requests per second",
                "Pydantic provides 'Automatic Validation'—the API rejects bad data before it hits the model",
                "Separates 'Model Logic' from 'Product Logic', allowing independent updates"
            ],
            disadvantages: [
                "Requires knowledge of web development (HTTP, JSON, Async) in addition to ML",
                "Models can consume massive memory; the server must be sized correctly"
            ],

            interviewTip: "If asked 'How do you deploy a model?', talk about the 'Cold Start' problem. Explain that you load the model weight files ONCE at startup, not inside the prediction function. This ensures high-speed response times.",
            resumeBullet: "Architected a scalable ML inference API using FastAPI and Docker, serving 500+ requests per second with sub-50ms latency and Pydantic-enforced data validation.",

            videos: [
                { type: "public", title: "Deploy ML Models with FastAPI", author: "Ken Jee", views: "120K views", duration: "45:10", url: "https://www.youtube.com/watch?v=S-I98_KthOQ" },
                { type: "public", title: "FastFlow: From Model to Production", author: "Tiangolo (FastAPI creator)", views: "50K views", duration: "35:45", url: "https://www.youtube.com/watch?v=33m38y7_C_M" }
            ],
            moocs: [
                { platform: "Coursera", rating: 4.8, title: "Machine Learning Engineering for Production (MLOps)", instructor: "Andrew Ng", enrolled: "300K+", duration: "40 hours", url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops" }
            ],
            blogs: [
                { type: "Engineering", title: "Serving ML at Scale", publisher: "Uber Engineering", readTime: "30 min", url: "https://eng.uber.com/michelangelo-machine-learning-platform/" }
            ],
            scenarios: [
                {
                    id: "5.1", difficulty: "Hard", title: "The Crashing API", category: "MLOps", estimatedTime: "4 hours",
                    scenarioDescription: "An ML model for 'Spam Detection' works perfectly in testing. After deployment, the FastAPI server crashes every hour. The logs show 'Shape Mismatch' errors.",
                    problemAnalysis: "The production API is receiving JSON that lacks certain keys (like 'User Region') that were present in the training CSV. Because the code didn't have strict schema validation, it tried to feed a 'None' value or a missing column into the model, which expected a NumPy array of a specific shape.",
                    architectureLayers: ["API Interface (JSON)", "Validation Layer (Pydantic)", "Pre-processing Layer (Scaler)", "Model Layer"],
                    toolsAndTech: [{ name: "Pydantic & Joblib", justification: "Pydantic ensures the API returns a 422 error to the client if the data is wrong, protecting the model. Joblib is used to save not just the model, but also the 'Scaler' object, ensuring that production data is normalized exactly like training data." }],
                    tradeOffs: ["Adding a validation layer adds ~2ms of latency, which is almost always worth the stability."],
                    nfrConsiderations: ["Availability: Zero app-crashes due to malformed input data."],
                    kpis: ["Reduce 'Production Error Rate' (HTTP 500) to < 0.01%."],
                    keyInsights: "A model without an API is a toy. An API without validation is a landmine."
                }
            ],
            playgrounds: [
                {
                    title: "The Prediction Endpoint",
                    description: "A minimal FastAPI wrapper for an ML model.",
                    examples: [
                        {
                            language: "python",
                            code: "from fastapi import FastAPI\nfrom pydantic import BaseModel\nimport joblib\n\n# 1. Load the brain (Pre-trained model)\nmodel = joblib.load(\"model.pkl\")\napp = FastAPI()\n\n# 2. Define the 'Expectation'\nclass UserData(BaseModel):\n    credit_score: int\n    debt_ratio: float\n\n@app.post(\"/predict\")\ndef predict_churn(data: UserData):\n    # 3. Model Inference\n    result = model.predict([[data.credit_score, data.debt_ratio]])\n    return {\"prediction\": int(result[0])}"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "deploy/ml-api",
                commitMessage: "deploy: wrapped churn-forest model in asynchronous FastAPI service with Docker healthchecks",
                files: [{ name: "app/main.py", type: "file", content: "api code" }],
                activeFileSnippet: { filename: "main.py", code: "@app.get('/health')\ndef health():\n    return {'status': 'live'}" }
            },
            community: {
                aiSummary: "Don't just be an ML Researcher. Be an ML Engineer. Success is defined by the uptime of your prediction service, not just the accuracy of your notebook.",
                solutions: []
            }
        }
    ],
    videoCount: 205,
    articleCount: 130,
    problemCount: 85,
    capstoneProject: {
        title: "The Intelligent Risk Guard",
        description: "You will build a full-lifecycle Machine Learning product. First, you'll perform a deep Exploratory Data Analysis (EDA) on a dataset of 500,000 credit card transactions to identify key fraud markers and handle skewed distributions. Next, you will engineer a robust Random Forest classifier, optimizing it via Cross-Validation to ensure stability. You will then develop a complete FastAPI wrapper for this model, implementing strict Pydantic schema validation to catch malformed requests. Finally, you will containerize the entire service using Docker and set up an automated quality-assurance test suite that simulates synthetic traffic to verify that the API handles both 'Healthy' and 'Attacker' inputs correctly. This project serves as a professional portfolio piece proving you can bridge the gap between Data Science and Software Engineering.",
        estimatedDays: 14,
        skillsFocused: [
            "Advanced EDA (Seaborn/Pandas)",
            "Ensemble Methods (Random Forest)",
            "Model Persistence (Joblib)",
            "Asynchronous APIs (FastAPI)",
            "Production Containerization (Docker)"
        ],
        steps: [
            {
                title: "Phase 1: Knowledge Discovery",
                description: "Analyze the fraud dataset to find correlations and visualize the 'Decision Boundary' needed."
            },
            {
                title: "Phase 2: The Ensemble Engine",
                description: "Train and tune a Random Forest, evaluating it with a detailed Confusion Matrix and F1-Report."
            },
            {
                title: "Phase 3: The API Gateway",
                description: "Serve the model via FastAPI, handling async requests and input validation."
            },
            {
                title: "Phase 4: Serialization & Ops",
                description: "Dockerize the app and verify the end-to-end flow with curl/postman tests."
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
