// utils/suggestedSkills.ts

export const suggestedSkillsMap: Record<string, string[]> = {
  // Frontend Development
  "React Developers": ["React", "Redux", "JavaScript", "React Native"],
  "Angular Developers": ["Angular", "TypeScript", "RxJS"],
  "Vue.js Developers": ["Vue.js", "Pinia", "JavaScript"],
  "JavaScript Developers": ["JavaScript", "ES6+", "DOM", "Fetch API"],
  "TypeScript Developers": ["TypeScript", "Interfaces", "Generics", "Enums"],
  "HTML/CSS Developers": ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"],
  "Frontend Developers": ["JavaScript", "React", "HTML", "CSS", "Webpack"],
  "UI/UX Developers": ["Figma", "Adobe XD", "User Research", "Accessibility", "CSS"],
  "Svelte Developers": ["Svelte", "SvelteKit", "JavaScript", "Vite"],
  "Next.js Developers": ["Next.js", "React", "SSR", "API Routes"],
  "Nuxt.js Developers": ["Nuxt.js", "Vue.js", "SSR", "Vuex"],
  "Gatsby Developers": ["Gatsby", "React", "GraphQL", "Static Site Generation"],
  "jQuery Developers": ["jQuery", "AJAX", "DOM Manipulation"],
  "Bootstrap Developers": ["Bootstrap", "HTML", "CSS", "Responsive Grids"],
  "Tailwind CSS Developers": ["Tailwind CSS", "Utility-First CSS", "PostCSS"],
  "SASS/SCSS Developers": ["SASS", "SCSS", "Variables", "Mixins"],
  "WebPack Developers": ["Webpack", "Loaders", "Plugins", "Code Splitting"],
  "Vite Developers": ["Vite", "ESBuild", "Hot Module Reloading"],

  // Backend Development
  "Node.js Developers": ["Node.js", "Express", "MongoDB", "JavaScript"],
  "Python Developers": ["Python", "Flask", "Django", "FastAPI"],
  "Java Developers": ["Java", "Spring Boot", "Maven", "JPA"],
  "C# Developers": ["C#", ".NET", "LINQ", "Entity Framework"],
  "PHP Developers": ["PHP", "Laravel", "MySQL", "Composer"],
  "Ruby Developers": ["Ruby", "Rails", "ActiveRecord"],
  "Go Developers": ["Go", "Gin", "Goroutines", "Channels"],
  "Rust Developers": ["Rust", "Cargo", "Actix Web"],
  "Kotlin Developers": ["Kotlin", "Spring", "Coroutines"],
  "Scala Developers": ["Scala", "Akka", "Play Framework"],
  "Backend Developers": ["Node.js", "Express", "PostgreSQL", "APIs"],
  "API Developers": ["REST", "GraphQL", "Swagger", "OAuth"],
  "Express.js Developers": ["Express.js", "Node.js", "Middlewares"],
  "Django Developers": ["Django", "ORM", "DRF", "Admin Panel"],
  "Flask Developers": ["Flask", "Blueprints", "Jinja2"],
  "Spring Boot Developers": ["Spring Boot", "Java", "REST APIs"],
  "Laravel Developers": ["Laravel", "Eloquent", "Blade Templates"],
  "Ruby on Rails Developers": ["Rails", "ActiveRecord", "MVC"],
  "FastAPI Developers": ["FastAPI", "Pydantic", "AsyncIO"],
  ".NET Developers": [".NET", "C#", "ASP.NET Core"],
  "ASP.NET Developers": ["ASP.NET", "Razor Pages", "Entity Framework"],

  // Full Stack Development
  "Full-stack Developers": ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
  "MEAN Stack Developers": ["MongoDB", "Express", "Angular", "Node.js"],
  "MERN Stack Developers": ["MongoDB", "Express", "React", "Node.js"],
  "LAMP Stack Developers": ["Linux", "Apache", "MySQL", "PHP"],
  "Django + React Developers": ["Django", "React", "REST APIs"],
  "Rails + Vue Developers": ["Ruby on Rails", "Vue.js"],
  "Python Full Stack Developers": ["Python", "Flask/Django", "React", "PostgreSQL"],
  "Java Full Stack Developers": ["Java", "Spring", "React/Angular", "MySQL"],

  // Mobile Development
  "React Native Developers": ["React Native", "Expo", "Redux"],
  "Flutter Developers": ["Flutter", "Dart", "Firebase"],
  "iOS Developers": ["Swift", "Xcode", "UIKit"],
  "Android Developers": ["Kotlin", "Android Studio", "Jetpack"],
  "Mobile Developers": ["React Native", "Flutter", "iOS", "Android"],
  "Ionic Developers": ["Ionic", "Angular", "Capacitor"],
  "Xamarin Developers": ["Xamarin", "C#", "XAML"],
  "Swift Developers": ["Swift", "SwiftUI", "iOS SDK"],
  "Objective-C Developers": ["Objective-C", "Xcode", "UIKit"],
  "Kotlin Mobile Developers": ["Kotlin", "Android SDK"],
  "Cordova Developers": ["Cordova", "HTML", "JavaScript", "Mobile Plugins"],
  "PhoneGap Developers": ["PhoneGap", "Hybrid Apps", "JavaScript"],

  // Database
  "Database Developers": ["SQL", "Stored Procedures", "Query Optimization"],
  "SQL Developers": ["SQL", "PostgreSQL", "MySQL"],
  "MongoDB Developers": ["MongoDB", "Mongoose", "Aggregation Pipeline"],
  "PostgreSQL Developers": ["PostgreSQL", "PL/pgSQL", "Indexes"],
  "MySQL Developers": ["MySQL", "InnoDB", "Triggers"],
  "Redis Developers": ["Redis", "Caching", "Pub/Sub"],
  "Elasticsearch Developers": ["Elasticsearch", "Kibana", "Lucene"],
  "Neo4j Developers": ["Neo4j", "Cypher Query Language"],
  "Cassandra Developers": ["Cassandra", "CQL", "NoSQL"],
  "Oracle Developers": ["Oracle DB", "PL/SQL", "Data Modelling"],
  "Database Administrators": ["Database Tuning", "Replication", "Backup/Restore"],
  "Data Architects": ["Data Modeling", "Schema Design", "Data Warehousing"],

  // Cloud & DevOps
  "AWS Developers": ["AWS", "Lambda", "EC2", "S3", "CloudFormation"],
  "Azure Developers": ["Azure", "App Services", "Functions", "Cosmos DB"],
  "Google Cloud Developers": ["GCP", "Cloud Functions", "Firestore"],
  "DevOps Engineers": ["CI/CD", "Docker", "Kubernetes", "Monitoring"],
  "Cloud Engineers": ["Cloud Architecture", "Security", "Scaling"],
  "Site Reliability Engineers": ["SLIs", "SLOs", "Monitoring", "Incident Response"],
  "Kubernetes Engineers": ["Kubernetes", "Helm", "Kustomize"],
  "Docker Specialists": ["Docker", "Compose", "Containers"],
  "Terraform Engineers": ["Terraform", "IaC", "HCL"],
  "Jenkins Engineers": ["Jenkins", "Pipelines", "Groovy"],
  "CI/CD Engineers": ["GitHub Actions", "CircleCI", "GitLab CI"],
  "Infrastructure Engineers": ["Provisioning", "Monitoring", "Automation"],
  "CloudFormation Developers": ["AWS CloudFormation", "YAML", "Stacks"],
  "Serverless Developers": ["Serverless Framework", "Lambda", "API Gateway"],
  "Microservices Architects": ["Microservices", "Event-Driven Design", "gRPC"],

  // Data Science Core
  "Data Scientist": ["Python", "Pandas", "NumPy", "Scikit-Learn", "Jupyter"],
  "Research Data Scientist": ["Deep Learning", "Research Papers", "PyTorch", "ML Experiments"],
  "ML Engineer": ["Machine Learning", "Model Deployment", "MLFlow", "TensorFlow"],
  "MLOps Engineer": ["CI/CD for ML", "Kubeflow", "Airflow", "ML Monitoring"],
  "AI Specialist": ["Artificial Intelligence", "Deep Learning", "Neural Networks"],
  "Deep Learning Engineer": ["Deep Learning", "TensorFlow", "PyTorch", "Keras"],

  // Specialized AI
  "NLP Engineer": ["NLP", "SpaCy", "Hugging Face", "Text Classification"],
  "Computer Vision Engineer": ["OpenCV", "YOLO", "CNN", "Object Detection"],
  "Generative AI Engineer": ["LLMs", "Prompt Engineering", "LangChain"],
  "Speech Recognition Engineer": ["ASR", "DeepSpeech", "Wav2Vec", "Speech-to-Text"],
  "Image/Video Analytics Specialist": ["Video Processing", "CV", "FFmpeg"],
  "Medical Imaging Expert": ["Medical Datasets", "DICOM", "Segmentation Models"],

  // Data Engineering
  "Data Engineer": ["ETL", "Airflow", "Spark", "SQL"],
  "Big Data Engineer": ["Hadoop", "Spark", "Hive", "Kafka"],
  "ETL Engineer": ["ETL Pipelines", "SSIS", "Data Warehousing"],
  "Streaming Data Engineer": ["Kafka", "Spark Streaming", "Flink"],
  "Cloud Data Engineer (AWS/Azure/GCP)": ["BigQuery", "Redshift", "Snowflake", "Dataflow"],
  "Snowflake Engineer": ["Snowflake", "SQL", "Data Sharing"],
  "Databricks Engineer": ["Databricks", "Spark", "Delta Lake"],
  "Airflow/dbt Developer": ["Airflow", "dbt", "Data Modeling"],

  // Analytics & BI
  "Data Analyst": ["SQL", "Excel", "Power BI", "Tableau", "Python"],
  "BI Developer": ["Power BI", "Tableau", "ETL", "SSRS"],
  "Analytics Engineer": ["dbt", "SQL", "Data Modeling", "Looker"],
  "Product Analyst": ["Product Metrics", "A/B Testing", "SQL"],
  "Statistician": ["R", "Statistical Models", "Hypothesis Testing"],
  "Quantitative Analyst": ["Python", "Mathematical Modeling", "Risk Models"],
  "Econometrician": ["Econometrics", "Stata", "Regression Models"]
};


export const getSuggestedSkills = (domain: string): string[] => {
  const lowerDomain = domain.toLowerCase();

  for (const key in suggestedSkillsMap) {
    if (key.toLowerCase().includes(lowerDomain)) {
      return suggestedSkillsMap[key];
    }
  }

  return [];
};

