import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail, Shield, ArrowRight, Star, Clock, Globe, Handshake } from "lucide-react";

// Sample developer profiles data
const sampleProfiles = [
  {
    id: 1,
    name: "Arjun Krishnan",
    title: "Senior Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    location: "Bangalore, India",
    hourlyRate: "$45/hr",
    rating: 4.9,
    totalReviews: 127,
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    bio: "8+ years building scalable web applications. Previously worked at top tech companies building products used by millions.",
    verified: true,
    responseTime: "1 hour",
    availability: "Available now",
    category: "developers",
    previousCompany: "Microsoft"
  },
  {
    id: 2,
    name: "Priya Nair",
    title: "Machine Learning Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4d0?w=100&h=100&fit=crop&crop=face",
    location: "Mumbai, India",
    hourlyRate: "$52/hr",
    rating: 4.8,
    totalReviews: 89,
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps"],
    bio: "AI specialist with 6+ years in machine learning and data science. Built recommendation systems and predictive models at scale.",
    verified: true,
    responseTime: "2 hours",
    availability: "Available now",
    category: "data-science",
    previousCompany: "Google"
  },
  {
    id: 3,
    name: "Vikram Singh",
    title: "DevOps Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    location: "Hyderabad, India",
    hourlyRate: "$48/hr",
    rating: 4.9,
    totalReviews: 95,
    skills: ["Kubernetes", "Docker", "AWS", "Terraform"],
    bio: "Infrastructure automation expert with 7+ years in cloud technologies. Helped scale startups to handle millions of users.",
    verified: true,
    responseTime: "30 minutes",
    availability: "Available now",
    category: "developers",
    previousCompany: "Amazon"
  }
];

const talentCategories = [
  {
    id: 1,
    icon: "💻",
    title: "Developers",
    count: "150+",
    active: true,
    description: "Top 5% of software developers"
  },
  {
    id: 2,
    icon: "🧠",
    title: "Data Scientists",
    count: "80+",
    active: false,
    description: "Elite AI/ML specialists"
  }
];

const skills = {
  developers: [
    {
      category: "Frontend Development",
      skills: [
        "React Developers",
        "Angular Developers",
        "Vue.js Developers",
        "JavaScript Developers",
        "TypeScript Developers",
        "HTML/CSS Developers",
        "Frontend Developers",
        "UI/UX Developers",
        "Svelte Developers",
        "Next.js Developers",
        "Nuxt.js Developers",
        "Gatsby Developers",
        "jQuery Developers",
        "Bootstrap Developers",
        "Tailwind CSS Developers",
        "SASS/SCSS Developers",
        "WebPack Developers",
        "Vite Developers"
      ]
    },
    {
      category: "Backend Development",
      skills: [
        "Node.js Developers",
        "Python Developers",
        "Java Developers",
        "C# Developers",
        "PHP Developers",
        "Ruby Developers",
        "Go Developers",
        "Rust Developers",
        "Kotlin Developers",
        "Scala Developers",
        "Backend Developers",
        "API Developers",
        "Express.js Developers",
        "Django Developers",
        "Flask Developers",
        "Spring Boot Developers",
        "Laravel Developers",
        "Ruby on Rails Developers",
        "FastAPI Developers",
        ".NET Developers",
        "ASP.NET Developers"
      ]
    },
    {
      category: "Full Stack Development",
      skills: [
        "Full-stack Developers",
        "MEAN Stack Developers",
        "MERN Stack Developers",
        "LAMP Stack Developers",
        "Django + React Developers",
        "Rails + Vue Developers",
        "Python Full Stack Developers",
        "Java Full Stack Developers"
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        "React Native Developers",
        "Flutter Developers",
        "iOS Developers",
        "Android Developers",
        "Mobile Developers",
        "Ionic Developers",
        "Xamarin Developers",
        "Swift Developers",
        "Objective-C Developers",
        "Kotlin Mobile Developers",
        "Cordova Developers",
        "PhoneGap Developers"
      ]
    },
    {
      category: "Database Specialists",
      skills: [
        "Database Developers",
        "SQL Developers",
        "MongoDB Developers",
        "PostgreSQL Developers",
        "MySQL Developers",
        "Redis Developers",
        "Elasticsearch Developers",
        "Neo4j Developers",
        "Cassandra Developers",
        "Oracle Developers",
        "Database Administrators",
        "Data Architects"
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS Developers",
        "Azure Developers",
        "Google Cloud Developers",
        "DevOps Engineers",
        "Cloud Engineers",
        "Site Reliability Engineers",
        "Kubernetes Engineers",
        "Docker Specialists",
        "Terraform Engineers",
        "Jenkins Engineers",
        "CI/CD Engineers",
        "Infrastructure Engineers",
        "CloudFormation Developers",
        "Serverless Developers",
        "Microservices Architects"
      ]
    }
  ],
  dataScience: [
    {
      category: "Core Data Science Roles",
      skills: [
        "Data Scientist",
        "Research Data Scientist",
        "ML Engineer",
        "MLOps Engineer",
        "AI Specialist",
        "Deep Learning Engineer"
      ]
    },
    {
      category: "Specialized AI",
      skills: [
        "NLP Engineer",
        "Computer Vision Engineer",
        "Generative AI Engineer",
        "Speech Recognition Engineer",
        "Image/Video Analytics Specialist",
        "Medical Imaging Expert"
      ]
    },
    {
      category: "Data Engineering",
      skills: [
        "Data Engineer",
        "Big Data Engineer",
        "ETL Engineer",
        "Streaming Data Engineer",
        "Cloud Data Engineer (AWS/Azure/GCP)",
        "Snowflake Engineer",
        "Databricks Engineer",
        "Airflow/dbt Developer"
      ]
    },
    {
      category: "Analytics & BI",
      skills: [
        "Data Analyst",
        "BI Developer",
        "Analytics Engineer",
        "Product Analyst",
        "Statistician",
        "Quantitative Analyst",
        "Econometrician"
      ]
    }
  ]
};

function TalentCategoryCard({ category, isActive, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-6 rounded-xl border-2 transition-all duration-200 text-left ${
        isActive
          ? 'border-[#81004D] bg-gradient-to-b from-[#fe51822f] to-[#81004d1a]'
          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-3xl mb-3">{category.icon}</div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
            {category.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            {category.description}
          </p>
          <div className="text-sm font-semibold text-[#81004D] dark:text-[#fe5182]">
            {category.count} verified experts
          </div>
        </div>
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
            isActive
              ? 'border-[#81004D] bg-[#81004D]'
              : 'border-slate-300 dark:border-slate-600'
          }`}
        >
          {isActive && <div className="w-2 h-2 bg-white rounded-full"></div>}
        </div>
      </div>
    </button>
  );
}

function ProfileCard({ profile }: any) {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-t-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
            <div className="flex mt-8 justify-center space-x-3">
              <Avatar className="relative w-[7rem] h-[7rem] ring-4 ring-white dark:ring-slate-800">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white">
                  {profile.name.split(' ').map((n: string) => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {profile.verified && (
                <div className="absolute bottom-12 right-[35%] w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
              {profile.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Verified Expert in Engineering
            </p>
            <p className="text-sm font-semibold text-[#81004D] dark:text-[#fe5182]">
              {profile.title}
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
              Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {profile.skills.slice(0, 3).map((skill: string) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
              Previously at
            </h4>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {profile.previousCompany}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              <span>Top 5%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function DiscoverMoreCard() {
  return (
    <Card className="bg-gradient-to-br from-[#81004D] to-[#fe5182] text-white border-0 hover:shadow-xl transition-all duration-300 group overflow-hidden">
      <CardContent className="p-0 h-full">
        <div className="h-full flex flex-col justify-center items-center text-center p-8 relative">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="text-6xl mb-6 z-10">
            <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2 z-10">
            Discover 200+ More Talent
          </h3>
          <p className="text-white/80 mb-6 z-10">
            in the TopSkyll Network
          </p>
          <Button 
            className="bg-white text-[#81004D] hover:bg-white/90 z-10 group-hover:shadow-lg group-hover:shadow-[#fe5182]/30"
            variant="ghost"
          >
            Discover TopSkyll Talent
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(1);

  const currentSkills = activeCategory === 1 ? skills.developers : skills.dataScience;
  const filteredProfiles = sampleProfiles.filter(profile =>
    activeCategory === 1
      ? profile.category === 'developers'
      : profile.category === 'data-science'
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none -z-10" />
      <div className="absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10 pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-[#080106] dark:text-white mb-6">
            Hire the top 5% of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#81004D] to-[#fe5182]">
              Indian talent
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            TopSkyll is an exclusive network of the top remote talent from India.
            Hire skilled professionals who have been rigorously screened and are ready to contribute immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/hire">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#81004D] to-[#fe5182] hover:from-[#81004D]/90 hover:to-[#fe5182]/90 hover:shadow-lg hover:shadow-[#fe5182]/30"
              >
                Hire Talent
              </Button>
            </Link>

            <Link href="/apply">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-[#81004D] dark:text-[#fe5182] border-[#81004D] dark:border-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
              >
                Join as Talent
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="text-[#81004D] dark:text-[#fe5182]" />
              <span>Pre-vetted talent</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-[#81004D] dark:text-[#fe5182]" />
              <span>Hire in 48 hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="text-[#81004D] dark:text-[#fe5182]" />
              <span>Time zone aligned</span>
            </div>
            <div className="flex items-center space-x-2">
              <Handshake className="text-[#81004D] dark:text-[#fe5182]" />
              <span>Risk-free trial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#080106] dark:text-white mb-4">
              Hiring Made {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81004D] to-[#fe5182]">
                Easy
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Access India's top 5% of developers and data scientists.
              Pre-screened talent ready to contribute from day one.
            </p>
          </div>

          {/* Process Steps */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 space-y-8 md:space-y-0">
              <div className="text-center max-w-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Talk to Our Experts
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We'll understand your goals, technical needs, and team dynamics.
                </p>
              </div>

              <div className="hidden md:block text-slate-300 dark:text-slate-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="text-center max-w-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Meet Hand-Selected Talent
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We'll introduce you to the right talent within 24 hours.
                </p>
              </div>

              <div className="hidden md:block text-slate-300 dark:text-slate-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="text-center max-w-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  The Right Fit, Guaranteed
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try before you commit with our risk-free trial period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Categories */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {talentCategories.map((category) => (
              <TalentCategoryCard
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            {currentSkills.map((category) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, index) => {
                    const slug = skill.toLowerCase()
                      .replace(/\s+/g, '-')
                      .replace(/[^\w\-]+/g, '')
                      .replace(/\-\-+/g, '-')
                      .replace(/^-+/, '')
                      .replace(/-+$/, '');

                    return (
                      <Link
                        key={index}
                        href={`/hire/${encodeURIComponent(slug)}`}
                      >
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow duration-200 text-center hover:border-[#81004D] dark:hover:border-[#fe5182] border border-transparent">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#81004D] dark:hover:text-[#fe5182]">
                            {skill}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Talent */}
      <section className="py-16 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#080106] dark:text-white mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81004D] to-[#fe5182]">Pre-Screened</span> Talent
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Every professional in our network has been rigorously evaluated
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
            <DiscoverMoreCard />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-sm font-medium text-white/90">Elite Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5%</div>
              <div className="text-sm font-medium text-white/90">Acceptance Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24hr</div>
              <div className="text-sm font-medium text-white/90">Average Match Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm font-medium text-white/90">Risk-Free Trial</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black dark:bg-slate-950">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Hire India's Top 5% Talent?
          </h2>
          <p className="text-xl mb-8 text-slate-300">
            Join innovative companies building with India's finest developers and data scientists
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#81004D] to-[#fe5182] hover:from-[#81004D]/90 hover:to-[#fe5182]/90 hover:shadow-lg hover:shadow-[#fe5182]/30 px-8"
              >
                Start Hiring Today
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8"
              >
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}