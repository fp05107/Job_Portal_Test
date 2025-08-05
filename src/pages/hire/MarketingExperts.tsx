import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Marketing specialists data
const marketingExperts = [
  {
    id: 1,
    name: "Sneha Reddy",
    title: "Digital Marketing Specialist",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    location: "Hyderabad, India",
    hourlyRate: "$25/hr",
    rating: 4.7,
    totalReviews: 156,
    skills: ["Google Ads", "SEO", "Content Marketing", "Analytics"],
    bio: "Growth-focused marketer with proven track record of increasing online visibility and conversions for B2B and B2C companies.",
    verified: true,
    responseTime: "1 hour",
    availability: "Available now",
    specialties: ["PPC Campaign Management", "Conversion Rate Optimization", "Marketing Analytics"],
    experience: "5+ years",
    category: "performance-marketing"
  },
  {
    id: 2,
    name: "Arjun Mehta",
    title: "SEO & Content Marketing Expert",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    location: "Mumbai, India",
    hourlyRate: "$30/hr",
    rating: 4.9,
    totalReviews: 89,
    skills: ["SEO", "Content Strategy", "Technical SEO", "Link Building"],
    bio: "SEO specialist who helped 50+ companies achieve first-page rankings and increase organic traffic by 300%+.",
    verified: true,
    responseTime: "2 hours",
    availability: "Available now",
    specialties: ["Technical SEO", "Content Strategy", "Local SEO"],
    experience: "6+ years",
    category: "seo-content"
  },
  {
    id: 3,
    name: "Priya Sharma",
    title: "Social Media Marketing Manager",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4d0?w=100&h=100&fit=crop&crop=face",
    location: "Delhi, India",
    hourlyRate: "$22/hr",
    rating: 4.8,
    totalReviews: 127,
    skills: ["Social Media Strategy", "Community Management", "Influencer Marketing", "Brand Building"],
    bio: "Creative social media strategist who built engaged communities of 100K+ followers for multiple brands.",
    verified: true,
    responseTime: "1 hour",
    availability: "Available now",
    specialties: ["Social Media Strategy", "Community Building", "Brand Storytelling"],
    experience: "4+ years",
    category: "social-media"
  },
  {
    id: 4,
    name: "Rahul Gupta",
    title: "Marketing Analytics Expert",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    location: "Bangalore, India",
    hourlyRate: "$35/hr",
    rating: 4.9,
    totalReviews: 73,
    skills: ["Google Analytics", "Data Analysis", "Marketing Attribution", "Dashboard Creation"],
    bio: "Data-driven marketing analyst with expertise in attribution modeling and ROI optimization for marketing campaigns.",
    verified: true,
    responseTime: "30 minutes",
    availability: "Available now",
    specialties: ["Marketing Attribution", "Campaign Analytics", "ROI Optimization"],
    experience: "7+ years",
    category: "analytics"
  }
];

const marketingServices = [
  {
    id: 1,
    name: "Performance Marketing",
    slug: "performance-marketing",
    description: "Google Ads, Facebook Ads, PPC campaign management",
    icon: "🎯",
    color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
    experts: 1,
    avgRate: "$25"
  },
  {
    id: 2,
    name: "SEO & Content",
    slug: "seo-content",
    description: "Search engine optimization and content marketing",
    icon: "🔍",
    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    experts: 1,
    avgRate: "$30"
  },
  {
    id: 3,
    name: "Social Media Marketing",
    slug: "social-media",
    description: "Social strategy, community management, influencer marketing",
    icon: "📱",
    color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
    experts: 1,
    avgRate: "$22"
  },
  {
    id: 4,
    name: "Marketing Analytics",
    slug: "analytics",
    description: "Data analysis, attribution modeling, ROI optimization",
    icon: "📊",
    color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    experts: 1,
    avgRate: "$35"
  }
];

const marketingSkills = [
  "Google Ads", "Facebook Ads", "SEO", "Content Marketing", "Social Media Marketing",
  "Email Marketing", "Marketing Analytics", "Conversion Rate Optimization", "Brand Strategy",
  "Growth Hacking", "Influencer Marketing", "Marketing Automation", "Lead Generation"
];

function ExpertCard({ expert }: any) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border border-slate-200 dark:border-slate-700">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="w-16 h-16">
              <AvatarImage src={expert.avatar} alt={expert.name} />
              <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                {expert.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            {expert.verified && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <i className="fas fa-check text-white text-xs"></i>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 truncate">
                  {expert.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {expert.title}
                </p>
                <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center space-x-1">
                    <i className="fas fa-map-marker-alt text-xs"></i>
                    <span>{expert.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <i className="fas fa-star text-yellow-400 text-xs"></i>
                    <span>{expert.rating} ({expert.totalReviews})</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <i className="fas fa-briefcase text-xs"></i>
                    <span>{expert.experience}</span>
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {expert.hourlyRate}
                </div>
                <div className="text-xs text-green-600 dark:text-green-400">
                  {expert.availability}
                </div>
              </div>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              {expert.bio}
            </p>
            
            <div className="mb-3">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Specialties:
              </p>
              <div className="flex flex-wrap gap-1">
                {expert.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {expert.skills.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {expert.skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{expert.skills.length - 3}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Responds in {expert.responseTime}
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

function ServiceCard({ service }: any) {
  return (
    <Card className={`hover:shadow-lg transition-all duration-200 cursor-pointer border ${service.color}`}>
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
          {service.name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          {service.description}
        </p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500 dark:text-slate-400">
            {service.experts} expert{service.experts > 1 ? 's' : ''}
          </span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            From {service.avgRate}/hr
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function MarketingExperts() {
  const [selectedService, setSelectedService] = useState("all");
  
  const filteredExperts = selectedService === "all" 
    ? marketingExperts 
    : marketingExperts.filter(expert => expert.category === selectedService);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Hire the top 5% of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Marketing Experts
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl mx-auto">
              Connect with elite marketing professionals from India who have been rigorously vetted for their expertise in digital marketing, SEO, social media, and analytics. Ready to drive growth for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <i className="fas fa-rocket mr-2"></i>
                Hire Marketing Experts
              </Button>
              
              <Button size="lg" variant="outline">
                <i className="fas fa-play mr-2"></i>
                View Success Stories
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <i className="fas fa-chart-line text-green-600"></i>
                <span>ROI-focused strategies</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-target text-red-600"></i>
                <span>Performance marketing</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-search text-blue-600"></i>
                <span>SEO & content experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-users text-purple-600"></i>
                <span>Social media specialists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Marketing Services We Offer
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Comprehensive marketing solutions to grow your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Skills */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Marketing Skills & Expertise
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Our marketing experts specialize in cutting-edge tools and strategies
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {marketingSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Marketing Experts */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Meet Our Marketing Experts
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Hand-picked professionals ready to accelerate your growth
            </p>
            
            {/* Service Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button
                variant={selectedService === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedService("all")}
              >
                All Experts
              </Button>
              {marketingServices.map((service) => (
                <Button
                  key={service.slug}
                  variant={selectedService === service.slug ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedService(service.slug)}
                >
                  {service.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredExperts.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
          
          {filteredExperts.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-search text-4xl text-slate-400 mb-4"></i>
              <p className="text-slate-600 dark:text-slate-400">
                No experts found for this category. We're constantly adding new talent!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Marketing Experts */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Why Choose TopSkyll Marketing Experts?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-medal text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Proven Results
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Our experts have consistently delivered measurable results, from increasing organic traffic to improving conversion rates across various industries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Quick Turnaround
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Get matched with the perfect marketing expert within 48 hours. Our streamlined process ensures you can start your campaigns quickly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Risk-Free Trial
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Try our marketing experts risk-free for 2 weeks. If you're not completely satisfied, we'll help you find a better match at no extra cost.
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
                150+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Marketing Experts
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                300%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Avg. Traffic Increase
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                2.5x
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Avg. ROI Improvement
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                4.8/5
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to accelerate your marketing growth?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get matched with expert marketing professionals in just 48 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <i className="fas fa-rocket mr-2"></i>
              Start Your Marketing Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <i className="fas fa-phone mr-2"></i>
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}