import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Sample designer data - reduced for a new company
const featuredDesigners = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Senior UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4d0?w=100&h=100&fit=crop&crop=face",
    location: "Bangalore, India",
    hourlyRate: "$38/hr",
    rating: 4.9,
    totalReviews: 89,
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    bio: "Creating beautiful and intuitive user experiences for SaaS products. 6+ years in design thinking and user-centered design.",
    experience: "6+ years",
    timezone: "IST (UTC+5:30)",
    languages: ["English", "Hindi", "Kannada"],
    availability: "Available now",
    portfolio: "15+ projects"
  },
  {
    id: 2,
    name: "Ankit Verma",
    title: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    location: "Mumbai, India",
    hourlyRate: "$42/hr",
    rating: 4.8,
    totalReviews: 127,
    skills: ["Sketch", "Figma", "Design Systems", "Prototyping"],
    bio: "Product designer specializing in fintech and healthcare applications. Expert in creating scalable design systems.",
    experience: "7+ years",
    timezone: "IST (UTC+5:30)",
    languages: ["English", "Hindi", "Marathi"],
    availability: "Available now",
    portfolio: "25+ projects"
  },
  {
    id: 3,
    name: "Kavitha Nair",
    title: "Brand & Visual Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    location: "Chennai, India",
    hourlyRate: "$35/hr",
    rating: 4.9,
    totalReviews: 156,
    skills: ["Illustrator", "Photoshop", "Branding", "Print Design"],
    bio: "Creative visual designer with expertise in brand identity and marketing materials. Worked with 50+ global brands.",
    experience: "5+ years",
    timezone: "IST (UTC+5:30)",
    languages: ["English", "Hindi", "Tamil"],
    availability: "Available now",
    portfolio: "40+ projects"
  }
];

const designCategories = [
  {
    id: 1,
    name: "UI/UX Design",
    description: "User interface and experience design for web and mobile applications",
    icon: "🎨",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
    projects: 67,
    avgRate: "$38/hr"
  },
  {
    id: 2,
    name: "Product Design",
    description: "End-to-end product design from concept to launch",
    icon: "📱",
    skills: ["Design Systems", "Wireframing", "User Testing", "Prototyping"],
    projects: 45,
    avgRate: "$42/hr"
  },
  {
    id: 3,
    name: "Brand Design",
    description: "Brand identity, logos, and visual communication design",
    icon: "🎭",
    skills: ["Illustrator", "Photoshop", "Branding", "Logo Design"],
    projects: 58,
    avgRate: "$35/hr"
  },
  {
    id: 4,
    name: "Web Design",
    description: "Responsive website design and landing page creation",
    icon: "💻",
    skills: ["Figma", "Webflow", "WordPress", "HTML/CSS"],
    projects: 89,
    avgRate: "$36/hr"
  },
  {
    id: 5,
    name: "Motion Design",
    description: "Animation, micro-interactions, and motion graphics",
    icon: "🎬",
    skills: ["After Effects", "Principle", "Framer", "Lottie"],
    projects: 23,
    avgRate: "$44/hr"
  },
  {
    id: 6,
    name: "Illustration",
    description: "Custom illustrations, icons, and visual assets",
    icon: "✏️",
    skills: ["Illustrator", "Procreate", "Digital Art", "Icon Design"],
    projects: 34,
    avgRate: "$32/hr"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Share your vision",
    description: "Tell us about your design needs and project requirements",
    icon: "💡"
  },
  {
    step: "2",
    title: "Review portfolios",
    description: "See hand-picked designers and their work within 48 hours",
    icon: "👁️"
  },
  {
    step: "3",
    title: "Start designing",
    description: "Begin your project with the perfect designer match",
    icon: "🚀"
  }
];

const designTools = [
  {
    category: "Design Tools",
    tools: ["Figma", "Adobe XD", "Sketch", "Adobe Creative Suite", "Canva", "Framer"]
  },
  {
    category: "Prototyping",
    tools: ["InVision", "Principle", "Marvel", "Axure", "Balsamiq", "Zeplin"]
  },
  {
    category: "Collaboration",
    tools: ["Miro", "Notion", "Slack", "Trello", "Asana", "Abstract"]
  }
];

function DesignerCard({ designer }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border border-slate-200 dark:border-slate-700 h-full">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="w-16 h-16">
              <AvatarImage src={designer.avatar} alt={designer.name} />
              <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                {designer.name.split(' ').map(n => n[0]).join('')}
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
                  {designer.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {designer.title}
                </p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {designer.hourlyRate}
                </div>
                <div className="text-xs text-green-600 dark:text-green-400">
                  {designer.availability}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <span className="flex items-center space-x-1">
                <i className="fas fa-map-marker-alt text-xs"></i>
                <span>{designer.location}</span>
              </span>
              <span className="flex items-center space-x-1">
                <i className="fas fa-star text-yellow-400 text-xs"></i>
                <span>{designer.rating} ({designer.totalReviews})</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {designer.bio}
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                <i className="fas fa-palette w-4 mr-2"></i>
                <span>{designer.portfolio}</span>
              </div>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                <i className="fas fa-briefcase w-4 mr-2"></i>
                <span>{designer.experience} experience</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {designer.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Button className="flex-1">
                <i className="fas fa-eye mr-2"></i>
                View Portfolio
              </Button>
              <Button variant="outline" size="sm">
                <i className="fas fa-heart"></i>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CategoryCard({ category }) {
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
              {category.skills.slice(0, 3).map((skill) => (
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

function ProcessStep({ step }) {
  return (
    <div className="text-center">
      <div className="relative mb-4">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2">
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

export default function Designers() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Hire Top
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Indian Designers
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Connect with talented designers who create stunning visual experiences. From UI/UX to brand design, find the perfect creative professional for your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <i className="fas fa-palette mr-2"></i>
                Hire Designers Now
              </Button>
              
              <Button size="lg" variant="outline">
                <i className="fas fa-images mr-2"></i>
                View Portfolios
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  120+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Vetted Designers
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
                  96%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Success Rate
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  4.9/5
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Client Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Categories */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Design Specializations
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our designers excel in various creative disciplines and modern design tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Designers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Meet Our Top Designers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Creative professionals with proven track records and stunning portfolios
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredDesigners.map((designer) => (
              <DesignerCard key={designer.id} designer={designer} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Designers
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
              Get matched with the perfect designer in just 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <ProcessStep key={step.step} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools & Skills */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Design Tools & Technologies
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our designers are proficient in industry-standard tools and emerging technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designTools.map((toolCategory) => (
              <div key={toolCategory.category} className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {toolCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {toolCategory.tools.map((tool) => (
                    <Badge key={tool} variant="secondary">{tool}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Design Excellence
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              See what our designers can create for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-mobile-alt text-4xl mb-4"></i>
                <h4 className="text-lg font-semibold">Mobile Apps</h4>
                <p className="text-sm opacity-90">iOS & Android</p>
              </div>
            </Card>
            
            <Card className="aspect-square bg-gradient-to-br from-green-500 to-teal-600 text-white flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-laptop text-4xl mb-4"></i>
                <h4 className="text-lg font-semibold">Web Design</h4>
                <p className="text-sm opacity-90">Responsive & Modern</p>
              </div>
            </Card>
            
            <Card className="aspect-square bg-gradient-to-br from-purple-500 to-pink-600 text-white flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-paint-brush text-4xl mb-4"></i>
                <h4 className="text-lg font-semibold">Branding</h4>
                <p className="text-sm opacity-90">Identity & Logos</p>
              </div>
            </Card>
            
            <Card className="aspect-square bg-gradient-to-br from-orange-500 to-red-600 text-white flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-chart-line text-4xl mb-4"></i>
                <h4 className="text-lg font-semibold">Dashboards</h4>
                <p className="text-sm opacity-90">Data Visualization</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Real feedback from companies who hired our designers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">5.0</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  "The designer we hired from TopSkyll completely transformed our brand. Their attention to detail and creativity exceeded our expectations."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    S
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-slate-900 dark:text-slate-100">Sarah Johnson</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">CEO, TechStart Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">5.0</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  "Working with TopSkyll designers was seamless. They understood our vision and delivered beautiful designs ahead of schedule."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    M
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-slate-900 dark:text-slate-100">Michael Chen</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Product Manager, GrowthCo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to bring your vision to life?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with world-class designers who will transform your ideas into stunning visuals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <i className="fas fa-palette mr-2"></i>
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