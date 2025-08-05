export const SKILL_CATEGORIES = ['Programming', 'Design', 'DevOps', 'Data', 'Other'] as const;
export const PROFICIENCY_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'] as const;
export const TECHNOLOGY_STACK = [
    // Programming Languages (General Purpose)
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'PHP', 'Ruby', 'Go', 'Rust', 'Swift', 
    'Kotlin', 'Scala', 'Dart', 'Elixir', 'Clojure', 'Haskell', 'OCaml', 'Perl', 'R', 'Julia',
    'C', 'C++', 'Objective-C', 'Assembly', 'Bash', 'PowerShell', 'Lua', 'Groovy', 'Erlang',
    
    // Frontend Technologies
    'React', 'Angular', 'Vue', 'Svelte', 'Next.js', 'Nuxt.js', 'Gatsby', 'Remix', 'Astro',
    'HTML5', 'CSS3', 'SASS', 'LESS', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Chakra UI',
    'Web Components', 'Stencil', 'Ember', 'Backbone', 'jQuery', 'D3.js', 'Three.js',
    'WebGL', 'Canvas API', 'WebAssembly', 'Electron', 'React Native Web',
    
    // Backend Technologies
    'Node.js', 'Express', 'NestJS', 'Fastify', 'Django', 'Flask', 'FastAPI', 'Spring', 'Spring Boot',
    'Laravel', 'Symfony', 'Ruby on Rails', 'Sinatra', 'Phoenix', 'Gin', 'Echo', 'Actix', 'Rocket',
    'ASP.NET', 'ASP.NET Core', 'Play Framework', 'Grails', 'Micronaut', 'Quarkus',
    
    // Mobile Development
    'React Native', 'Flutter', 'Android', 'iOS', 'Xamarin', 'Ionic', 'Cordova', 'Capacitor',
    'SwiftUI', 'Jetpack Compose', 'KMM', 'MAUI',
    
    // Databases
    'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Microsoft SQL Server', 'Oracle', 'MariaDB',
    'Redis', 'Firebase', 'Firestore', 'DynamoDB', 'Cassandra', 'CouchDB', 'Neo4j', 'ArangoDB',
    'Elasticsearch', 'Solr', 'InfluxDB', 'TimescaleDB', 'Snowflake', 'BigQuery', 'Redshift',
    'HBase', 'Cosmos DB', 'FaunaDB', 'CockroachDB',
    
    // DevOps & Cloud
    'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Terraform', 'CI/CD', 'Ansible', 'Puppet', 'Chef',
    'Jenkins', 'GitHub Actions', 'GitLab CI', 'CircleCI', 'Travis CI', 'ArgoCD', 'Flux', 'Helm',
    'Prometheus', 'Grafana', 'ELK Stack', 'Splunk', 'New Relic', 'Datadog', 'OpenShift', 'Rancher',
    'Serverless', 'Lambda', 'Cloud Functions', 'Cloud Run', 'ECS', 'EKS', 'GKE', 'AKS',
    'Vagrant', 'Packer', 'Vault', 'Consul', 'Nomad', 'Linkerd', 'Istio',
    
    // Data Science & AI/ML
    'TensorFlow', 'PyTorch', 'Keras', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn',
    'OpenCV', 'NLTK', 'spaCy', 'Hugging Face', 'LangChain', 'LLMs', 'GPT', 'BERT', 'Stable Diffusion',
    'Apache Spark', 'Hadoop', 'Hive', 'Pig', 'Flink', 'Kafka', 'Ray', 'Airflow', 'Luigi',
    'Jupyter', 'Colab', 'Databricks', 'Tableau', 'Power BI', 'Looker', 'Metabase',
    'RStudio', 'MATLAB', 'SAS', 'SPSS', 'Stata',
    
    // Design & UX/UI
    'Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InDesign', 'After Effects',
    'Premiere Pro', 'Framer', 'ProtoPie', 'Principle', 'InVision', 'Zeplin', 'Abstract',
    'Blender', 'Maya', '3ds Max', 'Cinema 4D', 'Unity', 'Unreal Engine', 'Godot',
    'UX Research', 'User Testing', 'Accessibility', 'WCAG', 'Design Systems', 'Motion Design',
    
    // Blockchain & Web3
    'Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js', 'Ethers.js', 'Hardhat', 'Truffle',
    'IPFS', 'Filecoin', 'Polygon', 'Solana', 'Cardano', 'Polkadot', 'Cosmos', 'Hyperledger',
    'NFTs', 'DeFi', 'DAOs', 'Zero Knowledge Proofs', 'Cryptography',
    
    // Testing
    'Jest', 'Mocha', 'Chai', 'Jasmine', 'Cypress', 'Playwright', 'Puppeteer', 'Selenium',
    'Testing Library', 'Vitest', 'Karma', 'Enzyme', 'Appium', 'Detox', 'JMeter', 'Locust',
    'SonarQube', 'Postman', 'Insomnia', 'Swagger', 'GraphQL Playground',
    
    // Other Technologies
    'GraphQL', 'Apollo', 'REST', 'gRPC', 'WebSockets', 'WebRTC', 'OAuth', 'JWT', 'OIDC',
    'Linux', 'Windows Server', 'macOS', 'Bash Scripting', 'Zsh', 'PowerShell', 'Vim', 'Emacs',
    'Git', 'SVN', 'Mercurial', 'Jira', 'Confluence', 'Trello', 'Asana', 'Notion',
    'Markdown', 'LaTeX', 'YAML', 'JSON', 'XML', 'CSV', 'Excel', 'Google Sheets',
    'WordPress', 'Shopify', 'Webflow', 'Squarespace', 'Wix', 'Drupal', 'Joomla', 'Magento',
    'Technical Writing', 'Documentation', 'SEO', 'Google Analytics', 'GTM', 'Hotjar',
    'Microservices', 'Monoliths', 'SOA', 'EDA', 'CQRS', 'Domain Driven Design',
    'Functional Programming', 'Object-Oriented Programming', 'Procedural Programming',
    'Algorithms', 'Data Structures', 'System Design', 'Design Patterns', 'Clean Code',
    'Agile', 'Scrum', 'Kanban', 'SAFe', 'Lean', 'XP', 'DevOps', 'SRE', 'Platform Engineering',
    'Quantum Computing', 'AR/VR', 'IoT', 'Embedded Systems', 'Robotics', 'Computer Vision',
    'Natural Language Processing', 'Speech Recognition', 'Reinforcement Learning',
    'Bioinformatics', 'Computational Neuroscience', 'FinTech', 'HealthTech', 'EdTech',
    'Cybersecurity', 'Ethical Hacking', 'Penetration Testing', 'Digital Forensics',
    'Network Security', 'Cryptography', 'OWASP', 'NIST', 'GDPR', 'HIPAA', 'PCI DSS',
    
    // Hardware & Low-Level
    'ARM', 'x86', 'RISC-V', 'FPGA', 'VHDL', 'Verilog', 'Embedded C', 'RTOS', 'Arduino',
    'Raspberry Pi', 'PCB Design', 'Altium', 'KiCad', 'CAD', 'SolidWorks', 'AutoCAD',
    
    // Legacy Systems
    'COBOL', 'Fortran', 'Pascal', 'Ada', 'Lisp', 'Prolog', 'VB.NET', 'Silverlight',
    'Flash', 'ActionScript', 'ColdFusion', 'Classic ASP', 'VB6', 'WinForms', 'WPF',
    
    // Emerging Technologies
    'WebGPU', 'WASM', 'Deno', 'Bun', 'Rome', 'Tauri', 'Web3', 'Metaverse', 'Generative AI',
    'Diffusion Models', 'LLM Ops', 'MLOps', 'DataOps', 'AIOps', 'FinOps', 'Green Computing',
    'Sustainable Tech', 'Ethical AI', 'Responsible AI', 'Explainable AI',
    
    // Soft Skills
    'Problem Solving', 'Critical Thinking', 'Communication', 'Collaboration', 'Leadership',
    'Mentoring', 'Public Speaking', 'Time Management', 'Project Management', 'Product Management',
    'Business Analysis', 'Stakeholder Management', 'Conflict Resolution', 'Negotiation',
    'Emotional Intelligence', 'Creativity', 'Adaptability', 'Resilience'
] as const;

export type SkillCategory = typeof SKILL_CATEGORIES[number];
export type ProficiencyLevel = typeof PROFICIENCY_LEVELS[number];
export type Technology = typeof TECHNOLOGY_STACK[number];
