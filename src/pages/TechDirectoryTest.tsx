import { useState } from "react";
import { Link, useLocation } from "wouter";

// Enhanced tech categories with more options
const techCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "💻",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
    technologies: [
      { name: "React", count: 1245 },
      { name: "Vue.js", count: 872 },
      { name: "Angular", count: 756 },
      { name: "Svelte", count: 342 },
      { name: "Next.js", count: 987 },
      { name: "TypeScript", count: 1532 },
      { name: "JavaScript", count: 2100 },
      { name: "HTML/CSS", count: 1850 },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: "🖥️",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200",
    technologies: [
      { name: "Node.js", count: 1876 },
      { name: "Python", count: 2145 },
      { name: "Django", count: 765 },
      { name: "Ruby on Rails", count: 543 },
      { name: "Java", count: 1234 },
      { name: "Spring Boot", count: 876 },
      { name: ".NET", count: 987 },
      { name: "PHP", count: 765 },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Development",
    icon: "📱",
    color: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200",
    technologies: [
      { name: "React Native", count: 987 },
      { name: "Flutter", count: 765 },
      { name: "Swift", count: 654 },
      { name: "Kotlin", count: 543 },
      { name: "Android", count: 876 },
      { name: "iOS", count: 765 },
      { name: "Xamarin", count: 432 },
      { name: "Ionic", count: 321 },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: "☁️",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200",
    technologies: [
      { name: "AWS", count: 1432 },
      { name: "Docker", count: 1654 },
      { name: "Kubernetes", count: 987 },
      { name: "Azure", count: 876 },
      { name: "GCP", count: 765 },
      { name: "Terraform", count: 654 },
      { name: "CI/CD", count: 543 },
      { name: "Serverless", count: 432 },
    ],
  },
  {
    id: "database",
    name: "Database",
    icon: "🗄️",
    color: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200",
    technologies: [
      { name: "MongoDB", count: 987 },
      { name: "PostgreSQL", count: 876 },
      { name: "MySQL", count: 765 },
      { name: "Redis", count: 654 },
      { name: "Firebase", count: 543 },
      { name: "SQL", count: 1432 },
      { name: "Oracle", count: 432 },
      { name: "Cassandra", count: 321 },
    ],
  },
  {
    id: "design",
    name: "UI/UX Design",
    icon: "🎨",
    color: "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200",
    technologies: [
      { name: "Figma", count: 1432 },
      { name: "Adobe XD", count: 876 },
      { name: "UI Design", count: 987 },
      { name: "UX Design", count: 876 },
      { name: "Prototyping", count: 654 },
      { name: "User Research", count: 543 },
      { name: "Sketch", count: 432 },
      { name: "Illustration", count: 321 },
    ],
  },
  {
    id: "ai-ml",
    name: "AI/ML",
    icon: "🤖",
    color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200",
    technologies: [
      { name: "Python", count: 2145 },
      { name: "TensorFlow", count: 876 },
      { name: "PyTorch", count: 765 },
      { name: "Machine Learning", count: 987 },
      { name: "Deep Learning", count: 654 },
      { name: "NLP", count: 543 },
      { name: "Computer Vision", count: 432 },
      { name: "Data Science", count: 321 },
    ],
  },
  {
    id: "testing",
    name: "Testing & QA",
    icon: "🧪",
    color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200",
    technologies: [
      { name: "Selenium", count: 876 },
      { name: "Jest", count: 765 },
      { name: "Cypress", count: 654 },
      { name: "QA Automation", count: 543 },
      { name: "Unit Testing", count: 432 },
      { name: "Integration Testing", count: 321 },
      { name: "Manual Testing", count: 210 },
      { name: "Performance Testing", count: 109 },
    ],
  },
];

export default function TechDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [,navigate] = useLocation();

  const filteredCategories = techCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.technologies.some(tech => 
      tech.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleTechSelect = (tech) => {
    navigate(`/tech/${tech.toLowerCase().replace(/ /g, '-')}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Find Top Tech Talent
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Browse our exclusive network of pre-vetted Indian tech professionals
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search by skill, technology, or role..."
              className="w-full pl-12 pr-4 py-4 text-base rounded-xl border-0 shadow-lg focus:ring-2 focus:ring-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400"></i>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {!selectedCategory ? (
          <>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Browse by Category
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories.map((category) => (
                <div 
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className={`${category.color} p-6 rounded-xl cursor-pointer hover:shadow-md transition-all duration-200 border border-slate-200 dark:border-slate-700`}
                >
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {category.technologies.length} technologies
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center mb-6">
              <button 
                onClick={() => setSelectedCategory(null)}
                className="mr-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back to categories
              </button>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {selectedCategory.name}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {selectedCategory.technologies.map((tech) => (
                <div
                  key={tech.name}
                  onClick={() => handleTechSelect(tech.name)}
                  className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <h3 className="font-semibold text-lg mb-1">{tech.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {tech.count.toLocaleString()} professionals
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}