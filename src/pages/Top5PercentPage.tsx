import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ScreeningStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  passRate: string;
  duration: string;
  details: string[];
}

interface Statistic {
  value: string;
  label: string;
  icon: string;
}

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const screeningSteps: ScreeningStep[] = [
  {
    step: 1,
    title: "Application Review",
    description: "Initial screening of portfolio, experience, and technical background",
    icon: "📋",
    passRate: "40%",
    duration: "24 hours",
    details: [
      "Portfolio quality assessment",
      "Experience verification",
      "Technical background review",
      "Communication skills evaluation"
    ]
  },
  {
    step: 2,
    title: "Technical Assessment",
    description: "Comprehensive technical evaluation and coding challenges",
    icon: "💻",
    passRate: "25%",
    duration: "2 hours",
    details: [
      "Algorithm and data structure problems",
      "System design scenarios",
      "Code quality and best practices",
      "Problem-solving approach"
    ]
  },
  {
    step: 3,
    title: "Live Coding Interview",
    description: "Real-time technical interview with senior engineers",
    icon: "🎯",
    passRate: "15%",
    duration: "1.5 hours",
    details: [
      "Live problem solving",
      "Technical communication",
      "Code optimization",
      "Architecture discussions"
    ]
  },
  {
    step: 4,
    title: "Project Challenge",
    description: "Real-world project to demonstrate practical skills",
    icon: "🚀",
    passRate: "8%",
    duration: "1-2 weeks",
    details: [
      "Complete project delivery",
      "Code quality and documentation",
      "Meeting requirements",
      "Professional presentation"
    ]
  },
  {
    step: 5,
    title: "Final Interview",
    description: "Cultural fit, communication, and professionalism assessment",
    icon: "🤝",
    passRate: "5%",
    duration: "45 minutes",
    details: [
      "Cultural alignment",
      "Communication excellence",
      "Professional integrity",
      "Client readiness"
    ]
  }
];

const statistics: Statistic[] = [
  {
    value: "15,000+",
    label: "Applications Received",
    icon: "📊"
  },
  {
    value: "5%",
    label: "Acceptance Rate",
    icon: "✅"
  },
  {
    value: "40+",
    label: "Hours of Screening",
    icon: "⏰"
  },
  {
    value: "98%",
    label: "Client Success Rate",
    icon: "🎯"
  }
];

const testimonials: TestimonialProps[] = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechStart Inc.",
    image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
    quote: "TopSkyll's screening process is incredibly thorough. The developers we hired were immediately productive and required minimal onboarding."
  },
  {
    name: "Michael Chen",
    role: "VP Engineering",
    company: "InnovateLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "The quality of talent from TopSkyll's top 5% is exceptional. They truly understand what elite-level engineering looks like."
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "GrowthCorp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote: "Working with TopSkyll talent has been a game-changer. Their rigorous screening ensures we get developers who can hit the ground running."
  }
];

const faqs: FAQItem[] = [
  {
    question: "How long does the screening process take?",
    answer: "The complete screening process typically takes 2-4 weeks, depending on your progress through each stage and the complexity of the project challenge."
  },
  {
    question: "What if I don't pass the first time?",
    answer: "You can reapply after 6 months. We provide detailed feedback on areas for improvement to help you succeed in your next application."
  },
  {
    question: "Do I need to have specific years of experience?",
    answer: "While experience is valuable, we focus more on skill level and problem-solving ability. Some exceptional developers with 3+ years can outperform those with 10+ years."
  },
  {
    question: "What technologies do you screen for?",
    answer: "We screen for a wide range of technologies including React, Node.js, Python, Java, .NET, mobile development, DevOps, and more. The specific requirements depend on market demand."
  },
  {
    question: "Is there a cost to apply?",
    answer: "No, applying to TopSkyll is completely free. We only succeed when you succeed, which is why we take a percentage of your earnings once you're hired."
  }
];

const ScreeningStepCard: React.FC<{ step: ScreeningStep; isActive: boolean; onClick: () => void }> = ({ 
  step, 
  isActive, 
  onClick 
}) => (
  <Card 
    className={`w-full md:w-[48%] lg:w-[30%] cursor-pointer transition-all duration-300 group ${
      isActive 
        ? 'border-2 border-[#fe5182] shadow-xl bg-gradient-to-br from-[#fe51822f] to-[#81004d2f] dark:from-[#81004d4f] dark:to-[#fe51824f] transform scale-[1.02]' 
        : 'hover:shadow-lg border border-[#e9e9e9] dark:border-[#81004d4f] hover:border-[#fe5182] hover:bg-gradient-to-br hover:from-[#fe51821a] hover:to-[#81004d1a]'
    }`}
    onClick={onClick}
  >
    <CardContent className="p-4 sm:p-6">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{step.icon}</div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm text-[#080106] dark:text-white truncate">
                Step {step.step}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 truncate">
                {step.title}
              </p>
            </div>
          </div>
          <Badge variant={isActive ? "default" : "secondary"} className={`text-xs ${isActive ? 'bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white' : ''}`}>
            {step.passRate}
          </Badge>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
          {step.description}
        </p>
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
          Duration: {step.duration}
        </div>
        
        {isActive && (
          <div className="space-y-2 pt-2 border-t border-[#fe5182]/30">
            {step.details.map((detail, index) => (
              <div key={index} className="flex items-start space-x-2 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182] mt-1.5 flex-shrink-0"></div>
                <span className="text-[#080106] dark:text-gray-200">{detail}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden">
        <div className="flex items-center space-x-4 mb-3">
          <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-[#080106] dark:text-white truncate">
              Step {step.step}: {step.title}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 truncate">
              {step.description}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <Badge variant={isActive ? "default" : "secondary"} className={`text-xs ${isActive ? 'bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white' : ''}`}>
            {step.passRate} pass rate
          </Badge>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {step.duration}
          </span>
        </div>
        
        {isActive && (
          <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
            {step.details.map((detail, index) => (
              <div key={index} className="flex items-center space-x-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182]"></div>
                <span className="text-[#080106] dark:text-gray-200">{detail}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-[#080106] dark:text-white">
              Step {step.step}: {step.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {step.description}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <Badge variant={isActive ? "default" : "secondary"} className={`text-sm ${isActive ? 'bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white' : ''}`}>
            {step.passRate} pass rate
          </Badge>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {step.duration}
          </span>
        </div>
        
        {isActive && (
          <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
            {step.details.map((detail, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182]"></div>
                <span className="text-[#080106] dark:text-gray-200">{detail}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);

const TestimonialCard: React.FC<{ testimonial: TestimonialProps }> = ({ testimonial }) => (
  <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] hover:shadow-xl hover:shadow-[#fe5182]/10 transition-all duration-300 group bg-gradient-to-t from-[#fe51820a] dark:from-[#81004d2f] to-white dark:to-black">
    <CardContent className="p-4 sm:p-6">
      <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover group-hover:scale-105 transition-transform duration-300 border-2 border-[#fe5182]/20"
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm sm:text-base text-[#080106] dark:text-white truncate">
            {testimonial.name}
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 italic leading-relaxed">
        "{testimonial.quote}"
      </p>
    </CardContent>
  </Card>
);

const StatCard: React.FC<{ stat: Statistic }> = ({ stat }) => (
  <div className="text-center group p-4 sm:p-6 rounded-xl bg-gradient-to-br from-white to-[#fe51820a] dark:from-black dark:to-[#81004d2f] border border-[#e9e9e9] dark:border-[#81004d4f] hover:shadow-lg hover:shadow-[#fe5182]/10 transition-all duration-300">
    <div className="text-2xl sm:text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent mb-1">
      {stat.value}
    </div>
    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
      {stat.label}
    </div>
  </div>
);

const QualityCard: React.FC<{ quality: { icon: string; title: string; description: string } }> = ({ quality }) => (
  <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] hover:shadow-xl hover:shadow-[#fe5182]/10 transition-all duration-300 group hover:border-[#fe5182] bg-gradient-to-t from-[#fe51820a] dark:from-[#81004d2f] to-white dark:to-black">
    <CardContent className="p-4 sm:p-6 text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
        {quality.icon}
      </div>
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#080106] dark:text-white mb-2 sm:mb-3">
        {quality.title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
        {quality.description}
      </p>
    </CardContent>
  </Card>
);

const FAQCard: React.FC<{ faq: FAQItem; isExpanded: boolean; onClick: () => void }> = ({ faq, isExpanded, onClick }) => (
  <Card className={`border-2 transition-all duration-300 ${isExpanded ? 'border-[#fe5182] bg-gradient-to-br from-[#fe51820a] to-[#81004d0a] dark:from-[#81004d2f] dark:to-[#fe51822f]' : 'border-[#e9e9e9] dark:border-[#81004d4f] hover:border-[#fe5182]/50'} hover:shadow-md`}>
    <CardContent className="p-0 focus:outline-none focus:ring-2 focus:ring-[#fe5182]">
      <button 
        onClick={onClick}
        className="w-full p-4 sm:p-6 text-left rounded-lg"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#080106] dark:text-white pr-4">
            {faq.question}
          </h3>
          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182] flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      {isExpanded && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 animate-in slide-in-from-top-2 duration-300">
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </CardContent>
  </Card>
);

export default function Top5PercentPage() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const qualities = [
    {
      icon: "🎯",
      title: "Technical Excellence",
      description: "Master-level proficiency in multiple technologies with deep understanding of software architecture and best practices."
    },
    {
      icon: "🚀",
      title: "Problem-Solving Skills",
      description: "Ability to tackle complex challenges with innovative solutions and efficient algorithmic thinking."
    },
    {
      icon: "💬",
      title: "Communication Mastery",
      description: "Exceptional English proficiency and ability to communicate technical concepts clearly to both technical and non-technical stakeholders."
    },
    {
      icon: "⚡",
      title: "Fast Learning",
      description: "Proven ability to quickly adapt to new technologies, frameworks, and project requirements."
    },
    {
      icon: "🤝",
      title: "Professional Integrity",
      description: "Strong work ethic, reliability, and commitment to delivering high-quality work on time."
    },
    {
      icon: "🔧",
      title: "Real-World Experience",
      description: "Extensive experience working on production systems and collaborating with international teams."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none" />
      <div className="absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 md:pb-16 px-4 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#080106] dark:text-white mb-3 sm:mb-4 md:mb-6">
            Why only the top<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              5% make it
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            At <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent font-semibold">TopSkyll</span>, we believe that exceptional talent deserves exceptional opportunities. 
            Our rigorous 5-step screening process ensures that only the most skilled, professional, 
            and client-ready developers join our exclusive network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4">
            <Button size="sm" className="w-full sm:w-auto bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white hover:shadow-lg hover:shadow-[#fe5182]/25 text-sm sm:text-base group">
              <span>Apply to Join</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            
            <Button size="sm" variant="outline" className="w-full sm:w-auto border-2 border-[#fe5182] text-[#fe5182] hover:bg-[#fe5182] hover:text-white text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Hire Top 5% Talent
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 px-2 sm:px-4">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182]"></div>
              <span>Elite-level talent</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182]"></div>
              <span>Rigorous screening</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182]"></div>
              <span>Proven track record</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182]"></div>
              <span>Client-ready professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#080106] dark:text-white mb-2 sm:mb-3 md:mb-4">
              The numbers speak for themselves
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
              Our selective process ensures exceptional quality
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {statistics.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Screening Process Section */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#080106] dark:text-white mb-2 sm:mb-3 md:mb-4">
              Our 5-step screening process
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 md:mb-6">
              Each candidate goes through multiple rounds of evaluation
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Tap on each step to see details
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {screeningSteps.map((step) => (
              <ScreeningStepCard
                key={step.step}
                step={step}
                isActive={activeStep === step.step}
                onClick={() => setActiveStep(step.step)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Top 5% Special */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#080106] dark:text-white mb-2 sm:mb-3 md:mb-4">
              What makes our top 5% special
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
              The qualities that set elite developers apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {qualities.map((quality, index) => (
              <QualityCard key={index} quality={quality} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#080106] dark:text-white mb-2 sm:mb-3 md:mb-4">
              What our clients say
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
              Hear from companies who have experienced the difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Join Section */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
            Think you have what it takes?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 opacity-90 leading-relaxed">
            Join thousands of developers who have applied to be part of our exclusive network. 
            Only the top 5% make it through our rigorous screening process.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center px-2 sm:px-4">
            <Button size="sm" className="w-full sm:w-auto bg-white text-[#81004D] hover:bg-gray-100 text-sm sm:text-base group">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Start Your Application
            </Button>
            <Button size="sm" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#81004D] text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#080106] dark:text-white mb-2 sm:mb-3 md:mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              Click on any question to see the answer
            </p>
          </div>
          
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <FAQCard
                key={index}
                faq={faq}
                isExpanded={expandedFAQ === index}
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}