import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle, 
  Star,
  Code,
  Database,
  Smartphone,
  Cloud,
  Brain,
  Globe,
  ArrowRight,
  Zap,
  Heart,
  Lightbulb,
  Briefcase,
  Layers,
  GitMerge,
  Cpu,
  BarChart2,
  Lock,
  ShoppingCart
} from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreValues = [
    {
      icon: Target,
      title: "Excellence First",
      description: "We maintain the highest standards in everything we do, from our rigorous 5% acceptance rate to our ongoing quality assurance processes.",
      color: "from-[#81004D] to-[#fe5182]"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Clear communication, honest pricing, and reliable delivery form the foundation of every client relationship we build.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Speed Without Compromise",
      description: "We deliver exceptional talent quickly without sacrificing quality, ensuring you get the best developers in days, not months.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Heart,
      title: "Partnership Mindset",
      description: "Your success is our success. We're invested in long-term relationships that drive mutual growth and achievement.",
      color: "from-[#fe5182] to-[#81004D]"
    }
  ];

  const techStacks = [
    {
      icon: Code,
      title: "Frontend Excellence",
      technologies: ["React", "Angular", "Vue.js", "React Native", "Flutter"],
      description: "Modern JavaScript mastery with cutting-edge frameworks"
    },
    {
      icon: Database,
      title: "Backend Mastery",
      technologies: ["Python", "Java", ".NET", "Node.js", "Go"],
      description: "Scalable server-side solutions and microservices architecture"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      technologies: ["iOS", "Android", "React Native", "Flutter", "Xamarin"],
      description: "Cross-platform and native mobile applications"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"],
      description: "Infrastructure automation and cloud-native solutions"
    },
    {
      icon: Brain,
      title: "Emerging Tech",
      technologies: ["AI/ML", "Blockchain", "IoT", "AR/VR", "Data Analytics"],
      description: "Cutting-edge technologies for future-ready solutions"
    }
  ];

  const selectionProcess = [
    {
      icon: Layers,
      title: "Multi-stage Evaluation",
      description: "Comprehensive technical assessments including coding challenges, system design, and real-world problem-solving"
    },
    {
      icon: Briefcase,
      title: "Portfolio Analysis",
      description: "Deep-dive examination of code quality, architectural decisions, and project impact"
    },
    {
      icon: GitMerge,
      title: "Background Verification",
      description: "Thorough reference checks and work history validation"
    },
    {
      icon: Cpu,
      title: "Continuous Assessment",
      description: "Regular skill evaluations to stay current with technology evolution"
    }
  ];

  const specializedExpertise = [
    {
      icon: BarChart2,
      title: "Enterprise-scale Applications",
      description: "Complex architecture requirements across all major platforms"
    },
    {
      icon: Zap,
      title: "High-performance Systems",
      description: "Advanced optimization techniques in various technologies"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "Conversion optimization, payment integration, and multi-platform support"
    },
    {
      icon: Clock,
      title: "Real-time Applications",
      description: "WebSocket, server-sent events, and modern real-time frameworks"
    }
  ];

  const stats = [
    { value: 5, suffix: "%", label: "Acceptance Rate" },
    { value: 25000, suffix: "+", label: "Trusted Clients" },
    { value: 98, suffix: "%", label: "Success Rate" },
    { value: 24, suffix: "hrs", label: "Average Match Time" }
  ];

  const challenges = [
    "Promising startups losing momentum waiting months to find qualified developers",
    "Established enterprises watching competitors gain advantages while hiring processes drag on",
    "Project deadlines slipping because 'good enough' developers couldn't deliver the quality needed",
    "Budgets ballooning as companies paid premium rates for mediocre results",
    "Technical leaders spending more time recruiting than building"
  ];

  const solutions = [
    "Pre-vetted talent ready for immediate deployment",
    "Transparent, predictable pricing with no hidden fees",
    "Access to the top 5% of global developers",
    "Risk-free trial periods with satisfaction guarantee",
    "Focus on building while we handle talent acquisition"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#080106] dark:text-white">
              About <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">TopSkyll</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Connecting Businesses with Elite Technology Talent
            </p>
            <div className="mt-8 inline-flex items-center space-x-2 bg-[#fe5182]/20 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-[#fe5182]" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Transforming How Companies Access Top Development Expertise
              </span>
            </div>
          </div>
        </div>
        <div className='absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10 pointer-events-none' />
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-[#080106] dark:text-white mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 font-medium dark:text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-2xl flex items-center justify-center mb-8 transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
                  Our <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Mission</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  TopSkyll was founded on a simple yet powerful belief: exceptional businesses deserve exceptional talent, and finding that talent shouldn't be a months-long struggle filled with uncertainty and risk.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  We exist to bridge the gap between ambitious companies seeking world-class developers across all technology stacks and the elite professionals who can transform their digital aspirations into reality.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                  In today's rapidly evolving digital landscape, the difference between good and great often comes down to having the right technical talent at the right time. We've built TopSkyll to eliminate the traditional barriers, delays, and risks that prevent businesses from accessing the development expertise they need to compete, innovate, and thrive—whether that's React frontend development, Python backend services, mobile applications, cloud architecture, or emerging technologies.
                </p>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/20 to-[#81004D]/20 rounded-3xl transform rotate-3" />
                <div className="relative border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-[#080106] dark:text-white mb-6">Key Differentiators</h3>
                  <div className="space-y-4">
                    {[
                      "Top 5% acceptance rate from global talent pool",
                      "Multi-stage technical evaluation process",
                      "Ready-to-contribute professionals",
                      "Risk-free engagement with satisfaction guarantee",
                      "Continuous quality assurance and skill development",
                      "Specialized expertise across all technology domains"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#fe5182] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-[#330024] dark:bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Born from <span className="bg-gradient-to-r from-[#fe5182] to-white bg-clip-text text-transparent">Real-World Frustration</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Solving the universal problem that has plagued businesses for decades
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Traditional Challenges */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✗</span>
                </div>
                Traditional Hiring Challenges
              </h3>
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-4 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                  <span className="text-gray-300">{challenge}</span>
                </div>
              ))}
            </div>

            {/* Our Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                TopSkyll Solutions
              </h3>
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-4 bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-20 bg-gray-50 dark:bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
              Our <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Rigorous Selection</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Less than 5% acceptance rate from thousands of applicants across all technology domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {selectionProcess.map((process, index) => (
              <div key={index} className="group">
                <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] h-full rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <process.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">{process.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
              Our <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision and interaction at TopSkyll
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onMouseEnter={() => setActiveValue(index)}
              >
                <div className={`border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] h-full rounded-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-4 ${
                  activeValue === index ? 'scale-105' : ''
                }`}>
                  <div className={`mx-auto mb-6 w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-20 bg-gray-50 dark:bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
              Comprehensive <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Technology Coverage</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our network spans the complete technology landscape with elite professionals in every domain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((stack, index) => (
              <div key={index} className="group">
                <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] h-full rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stack.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">{stack.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{stack.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-[#fe5182]/20 dark:bg-white/10 text-[#81004D] dark:text-[#fe5182] rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
              <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Specialized Expertise</span> Across Domains
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our network includes developers with specialized knowledge in various domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedExpertise.map((expertise, index) => (
              <div key={index} className="group">
                <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] h-full rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <expertise.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">{expertise.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{expertise.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk-Free Engagement */}
      <section className="py-20 bg-gray-50 dark:bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-2xl flex items-center justify-center mb-8 transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Risk-Free</span> Engagement
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We stand behind every developer placement with our comprehensive satisfaction guarantee. Our transparent, predictable pricing model ensures no hidden fees, no surprise costs, and no complex contract negotiations.
                </p>
                <div className="space-y-4">
                  {[
                    "Trial period to evaluate fit before full commitment",
                    "Immediate replacement if expectations aren't met",
                    "No-cost substitution if project requirements evolve",
                    "Clear, upfront pricing with no additional recruitment fees",
                    "Flexible engagement models from project-based to long-term"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#fe5182] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/20 to-[#81004D]/20 rounded-3xl transform rotate-3" />
                <div className="relative border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-3xl p-8 h-full">
                  <h3 className="text-2xl font-bold text-[#080106] dark:text-white mb-6">Continuous Quality Assurance</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Joining TopSkyll isn't a one-time achievement—it's an ongoing commitment to excellence. Our developers participate in:
                  </p>
                  <div className="space-y-4">
                    {[
                      "Regular skill assessments to stay current with technology evolution",
                      "Performance monitoring based on client feedback",
                      "Professional development opportunities",
                      "Peer review and knowledge sharing within our elite community",
                      "Ongoing support throughout the entire engagement"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-[#fe5182] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#81004D] to-[#fe5182]" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Team?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join thousands of companies who trust TopSkyll to deliver exceptional talent that drives results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#81004D] bg-white rounded-full transform hover:scale-105 transition-all duration-300">
                <span>Start Your Search Today</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-[#81004D] transition-all duration-300">
                <span>Learn More</span>
                <Lightbulb className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;