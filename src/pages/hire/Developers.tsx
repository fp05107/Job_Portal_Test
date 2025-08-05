import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Sample developer data - reduced for a new company
const featuredDevelopers = [
  {
    id: 1,
    name: "Arjun Sharma",
    title: "Senior Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    location: "Mumbai, India",
    hourlyRate: "$45/hr",
    rating: 4.9,
    totalReviews: 127,
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    bio: "8+ years building scalable web applications for global clients. Specialized in e-commerce and fintech solutions.",
    experience: "8+ years",
    timezone: "IST (UTC+5:30)",
    languages: ["English", "Hindi"],
    availability: "Available now"
  },
  {
    id: 2,
    name: "Vikram Singh",
    title: "Senior Mobile Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    location: "Bangalore, India",
    hourlyRate: "$42/hr",
    rating: 4.8,
    totalReviews: 89,
    skills: ["React Native", "Flutter", "Swift", "Kotlin"],
    bio: "Mobile development specialist with 6+ years creating award-winning iOS and Android applications.",
    experience: "6+ years",
    timezone: "IST (UTC+5:30)",
    languages: ["English", "Hindi", "Kannada"],
    availability: "Available now"
  },
  {
    id: 3,
    name: "Priya Patel",
    title: "Senior Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4d0?w=100&h=100&fit=crop&crop=face",
    location: "Pune, India",
    hourlyRate: "$38/hr",
    rating: 4.9,
    totalReviews: 156,
    skills: ["React", "Vue.js", "TypeScript", "Next.js"],
    bio: "Frontend specialist focused on creating beautiful, performant user interfaces with modern frameworks.",
    experience: "5+ years",
    timezone: "IST (UTC+5:30)",
    languages: ["English", "Hindi", "Marathi"],
    availability: "Available now"
  }
];

const developmentCategories = [
  {
    id: 1,
    name: "Full Stack Development",
    description: "End-to-end web application development with modern frameworks",
    icon: "🚀",
    skills: ["React", "Node.js", "Python", "PostgreSQL", "MongoDB"],
    projects: 45,
    avgRate: "$45/hr"
  },
  {
    id: 2,
    name: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    icon: "📱",
    skills: ["React Native", "Flutter", "Swift", "Kotlin"],
    projects: 32,
    avgRate: "$42/hr"
  },
  {
    id: 3,
    name: "Frontend Development",
    description: "Modern, responsive user interfaces and web applications",
    icon: "💻",
    skills: ["React", "Vue.js", "Angular", "TypeScript"],
    projects: 67,
    avgRate: "$38/hr"
  },
  {
    id: 4,
    name: "Backend Development",
    description: "Scalable server-side applications and APIs",
    icon: "⚙️",
    skills: ["Node.js", "Python", "Java", "Go"],
    projects: 58,
    avgRate: "$44/hr"
  },
  {
    id: 5,
    name: "DevOps & Cloud",
    description: "Infrastructure, deployment, and cloud solutions",
    icon: "☁️",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    projects: 28,
    avgRate: "$48/hr"
  },
  {
    id: 6,
    name: "Data Science & AI",
    description: "Machine learning, data analysis, and AI solutions",
    icon: "🤖",
    skills: ["Python", "TensorFlow", "PyTorch", "SQL"],
    projects: 21,
    avgRate: "$52/hr"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Tell us your needs",
    description: "Share your project requirements and ideal developer profile",
    icon: "📋"
  },
  {
    step: "2",
    title: "Meet your matches",
    description: "Review hand-picked developers within 48 hours",
    icon: "🎯"
  },
  {
    step: "3",
    title: "Start your project",
    description: "Begin working with your chosen developer immediately",
    icon: "🚀"
  }
];

function DeveloperCard({ developer }: any) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border border-slate-200 dark:border-slate-700 h-full">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="w-16 h-16">
              <AvatarImage src={developer.avatar} alt={developer.name} />
              <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                {developer.name.split(' ').map((n: any) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <i className="fas fa-check text-white text-xs"></i>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 truncate">
                  {developer.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {developer.title}
                </p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {developer.hourlyRate}
                </div>
                <div className="text-xs text-green-600 dark:text-green-400">
                  {developer.availability}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <span className="flex items-center space-x-1">
                <i className="fas fa-map-marker-alt text-xs"></i>
                <span>{developer.location}</span>
              </span>
              <span className="flex items-center space-x-1">
                <i className="fas fa-star text-yellow-400 text-xs"></i>
                <span>{developer.rating} ({developer.totalReviews})</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {developer.bio}
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                <i className="fas fa-clock w-4 mr-2"></i>
                <span>{developer.timezone}</span>
              </div>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                <i className="fas fa-briefcase w-4 mr-2"></i>
                <span>{developer.experience} experience</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {developer.skills.map((skill: any) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
            
            <Button className="w-full">
              <i className="fas fa-user-plus mr-2"></i>
              View Profile
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CategoryCard({ category }: any) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border border-slate-200 dark:border-slate-700 h-full">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div className="text-4xl mb-3">{category.icon}</div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
            {category.name}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            {category.description}
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600 dark:text-slate-400">Projects completed</span>
            <span className="font-semibold text-slate-900 dark:text-slate-100">{category.projects}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600 dark:text-slate-400">Average rate</span>
            <span className="font-semibold text-slate-900 dark:text-slate-100">{category.avgRate}</span>
          </div>
          
          <div className="pt-2">
            <div className="flex flex-wrap gap-1">
              {category.skills.slice(0, 3).map((skill: any) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {category.skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{category.skills.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ProcessStep({ step }: any) {
  return (
    <div className="text-center">
      <div className="relative mb-4">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
          <span className="text-2xl">{step.icon}</span>
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
          {step.step}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
        {step.title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {step.description}
      </p>
    </div>
  );
}

export default function Developers() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Hire Top
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Indian Developers
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Connect with pre-vetted developers who have been rigorously screened for technical excellence and professional reliability. Start building your dream team today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <i className="fas fa-rocket mr-2"></i>
                Hire Developers Now
              </Button>
              
              <Button size="lg" variant="outline">
                <i className="fas fa-play mr-2"></i>
                How It Works
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  150+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Vetted Developers
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  48hr
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Match Time
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  95%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Success Rate
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  4.8/5
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Client Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Categories */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Development Expertise
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our developers specialize in the latest technologies and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Developers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Meet Our Top Developers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Pre-vetted professionals ready to join your team
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredDevelopers.map((developer) => (
              <DeveloperCard key={developer.id} developer={developer} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Developers
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Get matched with the perfect developer in just 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <ProcessStep key={step.step} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Technical Skills We Cover
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our developers are proficient in modern technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Frontend Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Vue.js", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Backend Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Python", "Java", "Go", "PHP", "Ruby", "C#", ".NET"].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Database & Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "PostgreSQL", "MySQL", "AWS", "Azure", "Docker", "Kubernetes", "Redis"].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to hire your next developer?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join companies that trust TopSkyll for their development needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <i className="fas fa-rocket mr-2"></i>
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <i className="fas fa-calendar mr-2"></i>
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}