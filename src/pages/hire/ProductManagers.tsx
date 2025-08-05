import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Product managers data
const productManagers = [
  {
    id: 1,
    name: "Kavya Nair",
    title: "Senior Product Manager",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    location: "Kochi, India",
    hourlyRate: "$35/hr",
    rating: 4.9,
    totalReviews: 112,
    skills: ["Product Strategy", "Agile", "User Research", "Analytics"],
    bio: "Certified PMP with 8+ years managing complex software products. Expert in product lifecycle management and cross-functional team leadership.",
    verified: true,
    responseTime: "1 hour",
    availability: "Available now",
    specialties: ["Product Strategy", "Roadmap Planning", "Stakeholder Management"],
    experience: "8+ years",
    category: "product-strategy",
    achievements: ["Led 3 successful product launches", "Increased user engagement by 45%", "Managed $2M+ product budgets"]
  },
  {
    id: 2,
    name: "Rajesh Gupta",
    title: "Technical Product Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    location: "Pune, India",
    hourlyRate: "$42/hr",
    rating: 4.8,
    totalReviews: 89,
    skills: ["Technical PM", "API Strategy", "System Architecture", "Developer Tools"],
    bio: "Technical PM with engineering background. Specialized in developer tools and API products with 7+ years building scalable platforms.",
    verified: true,
    responseTime: "2 hours",
    availability: "Available now",
    specialties: ["API Product Management", "Developer Experience", "Technical Architecture"],
    experience: "7+ years",
    category: "technical-pm",
    achievements: ["Built API platform serving 10M+ requests/day", "Reduced dev onboarding time by 60%", "Led technical product teams of 15+"]
  },
  {
    id: 3,
    name: "Priya Sharma",
    title: "Growth Product Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    location: "Mumbai, India",
    hourlyRate: "$38/hr",
    rating: 4.9,
    totalReviews: 127,
    skills: ["Growth Strategy", "A/B Testing", "User Acquisition", "Analytics"],
    bio: "Growth-focused PM with proven track record of scaling products from 0 to 1M users. Expert in experimentation and data-driven decisions.",
    verified: true,
    responseTime: "1 hour",
    availability: "Available now",
    specialties: ["User Growth", "Experimentation", "Conversion Optimization"],
    experience: "6+ years",
    category: "growth-pm",
    achievements: ["Grew user base from 50K to 1M+", "Improved conversion rates by 120%", "Led growth experiments with 95% confidence"]
  },
  {
    id: 4,
    name: "Ankit Mehta",
    title: "AI Product Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    location: "Bangalore, India",
    hourlyRate: "$45/hr",
    rating: 4.8,
    totalReviews: 73,
    skills: ["AI/ML Products", "Data Science", "ML Ops", "Product Analytics"],
    bio: "AI Product Manager with deep ML expertise. 5+ years building AI-powered products for fintech and healthcare industries.",
    verified: true,
    responseTime: "30 minutes",
    availability: "Available now",
    specialties: ["AI Product Development", "ML Model Integration", "Data Strategy"],
    experience: "5+ years",
    category: "ai-pm",
    achievements: ["Launched 3 AI products with 90%+ accuracy", "Reduced manual processes by 70%", "Built ML pipelines serving 1M+ users"]
  },
  {
    id: 5,
    name: "Sneha Reddy",
    title: "B2B Product Manager",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4d0?w=100&h=100&fit=crop&crop=face",
    location: "Hyderabad, India",
    hourlyRate: "$40/hr",
    rating: 4.7,
    totalReviews: 95,
    skills: ["B2B Products", "Enterprise Sales", "Customer Success", "SaaS"],
    bio: "B2B Product Manager with 6+ years in enterprise SaaS. Expert in customer-driven product development and enterprise integrations.",
    verified: true,
    responseTime: "1 hour",
    availability: "Available now",
    specialties: ["Enterprise Products", "Customer Development", "B2B Strategy"],
    experience: "6+ years",
    category: "b2b-pm",
    achievements: ["Increased enterprise ARR by 200%", "Reduced churn by 35%", "Led integrations with 20+ enterprise tools"]
  }
];

const productCategories = [
  {
    id: 1,
    name: "Product Strategy",
    slug: "product-strategy",
    description: "Strategic planning, roadmaps, and vision development",
    icon: "🎯",
    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    experts: 1,
    avgRate: "$35"
  },
  {
    id: 2,
    name: "Technical PM",
    slug: "technical-pm",
    description: "API products, developer tools, and platform management",
    icon: "⚙️",
    color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
    experts: 1,
    avgRate: "$42"
  },
  {
    id: 3,
    name: "Growth PM",
    slug: "growth-pm",
    description: "User acquisition, retention, and product growth",
    icon: "📈",
    color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    experts: 1,
    avgRate: "$38"
  },
  {
    id: 4,
    name: "AI Product Management",
    slug: "ai-pm",
    description: "AI/ML products, data science, and intelligent systems",
    icon: "🤖",
    color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
    experts: 1,
    avgRate: "$45"
  },
  {
    id: 5,
    name: "B2B Product Management",
    slug: "b2b-pm",
    description: "Enterprise products, SaaS, and B2B strategy",
    icon: "🏢",
    color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
    experts: 1,
    avgRate: "$40"
  }
];

const productSkills = [
  "Product Strategy", "Roadmap Planning", "User Research", "A/B Testing", "Analytics",
  "Agile/Scrum", "Stakeholder Management", "Customer Development", "Growth Hacking",
  "Technical PM", "API Strategy", "Data Analysis", "Product Marketing", "UX/UI Collaboration",
  "Competitive Analysis", "Go-to-Market Strategy", "Feature Prioritization", "KPI Management"
];

const industries = [
  { name: "Fintech", icon: "💳", count: 8 },
  { name: "Healthcare", icon: "🏥", count: 6 },
  { name: "E-commerce", icon: "🛒", count: 12 },
  { name: "SaaS", icon: "☁️", count: 15 },
  { name: "EdTech", icon: "📚", count: 5 },
  { name: "IoT", icon: "🔗", count: 4 }
];

function ProductManagerCard({ manager }: any) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border border-slate-200 dark:border-slate-700">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="w-16 h-16">
              <AvatarImage src={manager.avatar} alt={manager.name} />
              <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                {manager.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            {manager.verified && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <i className="fas fa-check text-white text-xs"></i>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 truncate">
                  {manager.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {manager.title}
                </p>
                <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center space-x-1">
                    <i className="fas fa-map-marker-alt text-xs"></i>
                    <span>{manager.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <i className="fas fa-star text-yellow-400 text-xs"></i>
                    <span>{manager.rating} ({manager.totalReviews})</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <i className="fas fa-briefcase text-xs"></i>
                    <span>{manager.experience}</span>
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {manager.hourlyRate}
                </div>
                <div className="text-xs text-green-600 dark:text-green-400">
                  {manager.availability}
                </div>
              </div>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              {manager.bio}
            </p>
            
            <div className="mb-3">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Key Achievements:
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                {manager.achievements.slice(0, 2).map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-1">
                    <i className="fas fa-check text-green-500 text-xs mt-0.5"></i>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-3">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Specialties:
              </p>
              <div className="flex flex-wrap gap-1">
                {manager.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {manager.skills.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {manager.skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{manager.skills.length - 3}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Responds in {manager.responseTime}
              </span>
              <Button size="sm" variant="outline">
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CategoryCard({ category }: any) {
  return (
    <Card className={`hover:shadow-lg transition-all duration-200 cursor-pointer border ${category.color}`}>
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4">{category.icon}</div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
          {category.name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          {category.description}
        </p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500 dark:text-slate-400">
            {category.experts} expert{category.experts > 1 ? 's' : ''}
          </span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            From {category.avgRate}/hr
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

function IndustryCard({ industry }: any) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 border border-slate-200 dark:border-slate-700">
      <CardContent className="p-4 text-center">
        <div className="text-3xl mb-2">{industry.icon}</div>
        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
          {industry.name}
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          {industry.count} experts
        </p>
      </CardContent>
    </Card>
  );
}

export default function ProductManagers() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredManagers = selectedCategory === "all" 
    ? productManagers 
    : productManagers.filter(manager => manager.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Hire the top 5% of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Product Managers
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl mx-auto">
              Connect with elite product managers from India who have been rigorously vetted for their expertise in product strategy, technical leadership, and growth. Ready to drive your product vision forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <i className="fas fa-rocket mr-2"></i>
                Hire Product Managers
              </Button>
              
              <Button size="lg" variant="outline">
                <i className="fas fa-play mr-2"></i>
                View Case Studies
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <i className="fas fa-lightbulb text-yellow-600"></i>
                <span>Strategic vision</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-users text-blue-600"></i>
                <span>Cross-functional leadership</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-chart-line text-green-600"></i>
                <span>Data-driven decisions</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-cogs text-purple-600"></i>
                <span>Technical expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Management Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Product Management Expertise
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Specialized product managers for every stage of your product journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Our product managers have deep expertise across various industries
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry) => (
                <IndustryCard key={industry.name} industry={industry} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Management Skills */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Core Product Management Skills
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Our product managers master the essential skills for successful product development
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {productSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Managers */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Meet Our Product Managers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Experienced product leaders ready to drive your product strategy
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
              >
                All Managers
              </Button>
              {productCategories.map((category) => (
                <Button
                  key={category.slug}
                  variant={selectedCategory === category.slug ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {filteredManagers.map((manager) => (
              <ProductManagerCard key={manager.id} manager={manager} />
            ))}
          </div>
          
          {filteredManagers.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-search text-4xl text-slate-400 mb-4"></i>
              <p className="text-slate-600 dark:text-slate-400">
                No product managers found for this category. We're constantly adding new talent!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Product Managers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Why Choose TopSkyll Product Managers?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-trophy text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Proven Track Record
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Our product managers have successfully launched products that generated millions in revenue and served millions of users.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-brain text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Strategic Thinking
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Expert at translating business objectives into actionable product strategies with clear roadmaps and measurable outcomes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Cross-Functional Leadership
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Skilled at leading diverse teams including engineering, design, marketing, and sales to deliver exceptional products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Management Process */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Our Product Management Process
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              From discovery to delivery, our PMs follow proven methodologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Discovery</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Market research, user interviews, and competitive analysis
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Strategy</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Product vision, roadmap planning, and feature prioritization
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Execution</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Agile development, stakeholder management, and delivery
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 dark:text-orange-400 font-bold">4</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Optimization</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Performance monitoring, A/B testing, and continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                75+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Product Managers
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                200+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Products Launched
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                15+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Industries Served
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                4.8/5
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Average Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to hire a top product manager?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Our product managers can help you define your vision, build your roadmap, and deliver exceptional products that users love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <i className="fas fa-calendar-check mr-2"></i>
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <i className="fas fa-question-circle mr-2"></i>
              Ask About Our Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}