
// =====================
// Component Mapping

import ApiDevelopersPage from "./users_page/APIAndMicroservices/ApiDevelopersPage";
import JavaDevelopersPage from "./users_page/Backend/JavaDevelopersPage";
import NodeJsDevelopersPage from "./users_page/Backend/NodeJsDevelopersPage";
import PythonDevelopersPage from "./users_page/Backend/PythonDevelopersPage";
import BlockchainDevelopersPage from "./users_page/BlockChainAndWeb3/BlockchainDevelopersPage";
import AwsDevelopersPage from "./users_page/CloudAndDevops/AwsDevelopersPage";
import DatabaseDevelopersPage from "./users_page/Database/DatabaseDevelopersPage";
import AngularDevelopersPage from "./users_page/Frontend/AngularDevelopersPage";
import ReactDevelopersPage from "./users_page/Frontend/ReactDevelopersPage";
import VueJsDevelopersPage from "./users_page/Frontend/VueJsDevelopersPage";
import FullStackDevelopersPage from "./users_page/FullStack/FullStackDevelopersPage";
import MeanStackDevelopersPage from "./users_page/FullStack/MeanStackDevelopersPage";
import UnityDevelopersPage from "./users_page/GameDevelopement/UnityDevelopersPage";
import ReactNativeDevelopersPage from "./users_page/Mobile/ReactNativeDevelopersPage";

// =====================
const skillComponentMap: Record<string, React.ComponentType> = {
  // =====================
  // Frontend Development
  // =====================
  'react-developers': ReactDevelopersPage,
  'angular-developers': AngularDevelopersPage,
  'vue.js-developers': VueJsDevelopersPage,
  //   'javascript-developers': JavaScriptDevelopersPage,
  //   'typescript-developers': TypeScriptDevelopersPage,
  //   'html-css-developers': HtmlCssDevelopersPage,
  //   'frontend-developers': FrontendDevelopersPage,
  //   'ui-ux-developers': UiUxDevelopersPage,
  //   'svelte-developers': SvelteDevelopersPage,
  //   'next.js-developers': NextJsDevelopersPage,
  //   'nuxt.js-developers': NuxtJsDevelopersPage,
  //   'gatsby-developers': GatsbyDevelopersPage,
  //   'jquery-developers': JQueryDevelopersPage,
  //   'bootstrap-developers': BootstrapDevelopersPage,
  //   'tailwind-css-developers': TailwindCssDevelopersPage,
  //   'sass-scss-developers': SassScssDevelopersPage,
  //   'webpack-developers': WebPackDevelopersPage,
  //   'vite-developers': ViteDevelopersPage,
  //   'three.js-developers': ThreeJsDevelopersPage,
  //   'd3.js-developers': D3JsDevelopersPage,
  //   'webassembly-developers': WebAssemblyDevelopersPage,
  //   'electron-developers': ElectronDevelopersPage,

  // =====================
  // Backend Development
  // =====================
  'node.js-developers': NodeJsDevelopersPage,
  'python-developers': PythonDevelopersPage,
  'java-developers': JavaDevelopersPage,
  //   'c#-developers': CSharpDevelopersPage,
  //   'php-developers': PhpDevelopersPage,
  //   'ruby-developers': RubyDevelopersPage,
  //   'go-developers': GoDevelopersPage,
  //   'rust-developers': RustDevelopersPage,
  //   'kotlin-developers': KotlinDevelopersPage,
  //   'scala-developers': ScalaDevelopersPage,
  //   'backend-developers': BackendDevelopersPage,
  //   'express.js-developers': ExpressJsDevelopersPage,
  //   'django-developers': DjangoDevelopersPage,
  //   'flask-developers': FlaskDevelopersPage,
  //   'spring-boot-developers': SpringBootDevelopersPage,
  //   'laravel-developers': LaravelDevelopersPage,
  //   'ruby-on-rails-developers': RubyOnRailsDevelopersPage,
  //   'fastapi-developers': FastApiDevelopersPage,
  //   '.net-developers': DotNetDevelopersPage,
  //   'asp.net-developers': AspDotNetDevelopersPage,
  //   'nestjs-developers': NestJsDevelopersPage,
  //   'deno-developers': DenoDevelopersPage,

  // =====================
  // API & Microservices
  // =====================
  'api-developers': ApiDevelopersPage,
  //   'graphql-developers': GraphQLDevelopersPage,
  //   'microservices-architects': MicroservicesArchitectsPage,
  //   'rest-api-developers': RestApiDevelopersPage,
  //   'grpc-developers': GrpcDevelopersPage,

  // =====================
  // Full Stack Development
  // =====================
  'full-stack-developers': FullStackDevelopersPage,
  'mean-stack-developers': MeanStackDevelopersPage,
  //   'mern-stack-developers': MernStackDevelopersPage,
  //   'lamp-stack-developers': LampStackDevelopersPage,
  //   'django-react-developers': DjangoReactDevelopersPage,
  //   'rails-vue-developers': RailsVueDevelopersPage,
  //   'python-full-stack-developers': PythonFullStackDevelopersPage,
  //   'java-full-stack-developers': JavaFullStackDevelopersPage,

  // =====================
  // Mobile Development
  // =====================
  'react-native-developers': ReactNativeDevelopersPage,
  //   'flutter-developers': FlutterDevelopersPage,
  //   'ios-developers': IosDevelopersPage,
  //   'android-developers': AndroidDevelopersPage,
  //   'mobile-developers': MobileDevelopersPage,
  //   'ionic-developers': IonicDevelopersPage,
  //   'xamarin-developers': XamarinDevelopersPage,
  //   'swift-developers': SwiftDevelopersPage,
  //   'objective-c-developers': ObjectiveCDevelopersPage,
  //   'kotlin-mobile-developers': KotlinMobileDevelopersPage,
  //   'cordova-developers': CordovaDevelopersPage,
  //   'phonegap-developers': PhoneGapDevelopersPage,

  // =====================
  // Database Specialists
  // =====================
  'database-developers': DatabaseDevelopersPage,
  //   'sql-developers': SqlDevelopersPage,
  //   'mongodb-developers': MongoDbDevelopersPage,
  //   'postgresql-developers': PostgreSqlDevelopersPage,
  //   'mysql-developers': MySqlDevelopersPage,
  //   'redis-developers': RedisDevelopersPage,
  //   'elasticsearch-developers': ElasticsearchDevelopersPage,
  //   'neo4j-developers': Neo4jDevelopersPage,
  //   'cassandra-developers': CassandraDevelopersPage,
  //   'oracle-developers': OracleDevelopersPage,
  //   'database-administrators': DatabaseAdministratorsPage,
  //   'data-architects': DataArchitectsPage,
  //   'firebase-developers': FirebaseDevelopersPage,
  //   'supabase-developers': SupabaseDevelopersPage,
  //   'prisma-developers': PrismaDevelopersPage,
  //   'hasura-developers': HasuraDevelopersPage,

  // =====================
  // Cloud & DevOps
  // =====================
  'aws-developers': AwsDevelopersPage,
  //   'azure-developers': AzureDevelopersPage,
  //   'google-cloud-developers': GoogleCloudDevelopersPage,
  //   'devops-engineers': DevOpsEngineersPage,
  //   'cloud-engineers': CloudEngineersPage,
  //   'site-reliability-engineers': SiteReliabilityEngineersPage,
  //   'kubernetes-engineers': KubernetesEngineersPage,
  //   'docker-specialists': DockerSpecialistsPage,
  //   'terraform-engineers': TerraformEngineersPage,
  //   'jenkins-engineers': JenkinsEngineersPage,
  //   'ci-cd-engineers': CiCdEngineersPage,
  //   'infrastructure-engineers': InfrastructureEngineersPage,
  //   'cloudformation-developers': CloudFormationDevelopersPage,
  //   'serverless-developers': ServerlessDevelopersPage,

  // =====================
  // Blockchain & Web3
  // =====================
  'blockchain-developers': BlockchainDevelopersPage,
  //   'solidity-developers': SolidityDevelopersPage,
  //   'web3-developers': Web3DevelopersPage,
  //   'ethereum-developers': EthereumDevelopersPage,
  //   'smart-contract-developers': SmartContractDevelopersPage,

  // =====================
  // AI/ML & Data Science
  // =====================
  //   'machine-learning-developers': MachineLearningDevelopersPage,
  //   'data-science-developers': DataScienceDevelopersPage,
  //   'computer-vision-developers': ComputerVisionDevelopersPage,
  //   'nlp-developers': NlpDevelopersPage,
  //   'tensorflow-developers': TensorflowDevelopersPage,
  //   'pytorch-developers': PytorchDevelopersPage,

  // =====================
  // Game Development
  // =====================
  'unity-developers': UnityDevelopersPage,
  //   'game-developers': GameDevelopersPage,
  //   'unreal-engine-developers': UnrealEngineDevelopersPage,
  //   'c++-game-developers': CppGameDevelopersPage,
  //   'c#-game-developers': CSharpGameDevelopersPage,

  // =====================
  // Embedded & IoT
  // =====================
  //   'embedded-developers': EmbeddedDevelopersPage,
  //   'iot-developers': IotDevelopersPage,
  //   'arduino-developers': ArduinoDevelopersPage,
  //   'raspberry-pi-developers': RaspberryPiDevelopersPage,

  // =====================
  // Cybersecurity
  // =====================
  //   'cybersecurity-developers': CybersecurityDevelopersPage,
  //   'pentesting-developers': PentestingDevelopersPage,
  //   'appsec-developers': AppSecDevelopersPage,
  //   'security-engineers': SecurityEngineersPage,

  // =====================
  // Testing & QA
  // =====================
  //   'qa-automation-developers': QaAutomationDevelopersPage,
  //   'test-automation-developers': TestAutomationDevelopersPage,
  //   'performance-engineers': PerformanceEngineersPage,
};

export default skillComponentMap;