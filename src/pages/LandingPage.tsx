import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Users, Zap, Shield, Clock, Target, TrendingUp, CheckCircle, ArrowRight, Menu, X, Play, Calendar, MessageCircle, Eye, Code, Globe, Database, Layers, TestTube, Smartphone, Server, BarChart3, Verified } from 'lucide-react';
import globe from '../assets/images/globe.png';
import Logo from '../assets/icons/Logo.webp';
import Illustration from '../assets/images/ImgOne.webp'
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import DevProfiles from '../jsonData/DevPro.json'

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Capability {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FAQ {
  question: string;
  answer: string;
}

// Sample React developer profiles
const reactDevelopers = DevProfiles

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10); // you can tweak this value
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the listener on component unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

  const hiringSteps: Step[] = [
    {
      title: "Talk to One of Our Client Advisors",
      description: "A TopSkyll client advisor will work with you to understand your goals, technical needs, and team dynamics.",
      icon: <MessageCircle className="w-8 h-8" />
    },
    {
      title: "Work With Hand-selected Talent",
      description: "Within days, we'll introduce you to the right React.js architect for your project. The average time to match is under 24 hours.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "The Right Fit, Guaranteed",
      description: "Work with your new React.js expert for a trial period (pay only if satisfied), ensuring they're the right fit before starting the engagement.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const screeningSteps = [
    { step: "Language & Personality", percentage: 26.4, description: "Comprehensive English and communication evaluation, assessing passion and engagement" },
    { step: "In-depth Skill Review", percentage: 7.4, description: "Technical knowledge and problem-solving assessments with exceptional results required" },
    { step: "Live Screening", percentage: 3.6, description: "Expert screeners conduct interviews with live exercises and real-world scenarios" },
    { step: "Test Project", percentage: 3.2, description: "1-3 week comprehensive projects demonstrating competence and professionalism" },
    { step: "Continued Excellence", percentage: 5.0, description: "Only the top 5% maintain our quality standards for client delivery" }
  ];

  const capabilities: Capability[] = [
    {
      title: "Custom React.js Application Development",
      description: "Build high-performing web applications tailored to your unique business needs using React's dynamic nature.",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Single-page Application (SPA) Development",
      description: "Create fast, responsive SPAs with streamlined experiences, efficient data handling, and vibrant interfaces.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "API Integration and Data Fetching",
      description: "Seamlessly integrate React.js applications with back-end APIs using Axios, GraphQL, and modern libraries.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "State Management",
      description: "Architect robust applications using Redux, MobX, and React's Context API for consistent data handling.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Testing and Quality Assurance",
      description: "Thorough testing with Jest, React Testing Library, and Cypress to deliver reliable, bug-free applications.",
      icon: <TestTube className="w-6 h-6" />
    },
    {
      title: "Cross-platform Development",
      description: "Extend React.js benefits to mobile with React Native for consistent iOS and Android applications.",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Server-side Rendering (SSR)",
      description: "Implement Next.js and SSR frameworks for improved SEO, faster page loads, and superior content delivery.",
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "Performance Optimization",
      description: "Enhance user experiences with lazy loading, code splitting, and memoization techniques.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const developerTypes = [
    {
      title: "Senior React Developers",
      description: "Deep expertise and advanced problem-solving skills with strong technical and leadership capabilities.",
      features: ["8+ years experience", "Architecture design", "Team leadership", "Complex problem solving"]
    },
    {
      title: "Dedicated React Developers",
      description: "Focus exclusively on your projects, aligning closely with your long-term objectives.",
      features: ["Full-time commitment", "Project ownership", "Long-term collaboration", "Seamless integration"]
    },
    {
      title: "Offshore React Developers",
      description: "Exceptional expertise at competitive rates with global coverage and 24/7 support.",
      features: ["Cost-effective", "Multiple time zones", "Scalable teams", "Round-the-clock support"]
    },
    {
      title: "Remote React Developers",
      description: "Worldwide top-tier expertise, removing location barriers for flexible collaboration.",
      features: ["Global talent pool", "Location flexibility", "Distributed teams", "Cultural diversity"]
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "How quickly can you hire with TopSkyll?",
      answer: "Typically, you can hire React developers within about 48 hours. Our talent matchers understand your goals, technical needs, and team dynamics to match ideal candidates from our global talent network. With a 98% trial-to-hire rate, you can confidently select the perfect fit."
    },
    {
      question: "How do I hire React developers?",
      answer: "Evaluate candidates based on experience, technical skills, and communication abilities. TopSkyll's rigorous screening ensures excellent talent matched specifically for your project."
    },
    {
      question: "How much does it cost to hire a React developer?",
      answer: "Hiring costs vary by location, project complexity, seniority, and engagement type. With TopSkyll, speak with an expert talent matcher to understand costs tailored to your needs."
    },
    {
      question: "How are TopSkyll React.js engineers different?",
      answer: "TopSkyll rigorously screens React developers, accepting fewer than 5% of applicants annually. Beyond technical expertise, we assess language and interpersonal skills, ensuring smooth collaboration."
    },
    {
      question: "Can you hire React.js architects on an hourly or project basis?",
      answer: "Hire React experts hourly, part-time, or full-time, or choose our Managed Delivery for end-to-end project management. TopSkyll offers flexibility to scale teams according to your needs."
    },
    {
      question: "What is the no-risk trial period for TopSkyll React.js experts?",
      answer: "Each engagement begins with a no-risk trial period of up to two weeks. If satisfied, continue seamlessly; if not, you won't be billed, and we'll match you with another expert."
    }
  ];

  // Filter options
    const filters = {
    availability: ["All", "Full-time", "Part-time"],
    experience: ["All", "1-3 years", "3-5 years", "5+ years"],
    englishLevel: ["All", "Basic", "Fluent", "Native"]
    };

  const [activeFilter, setActiveFilter] = useState({
    availability: "All",
    experience: "All",
    englishLevel: "All"
  });

    const filteredDevelopers = reactDevelopers.filter(dev => {
        return (
        (activeFilter.availability === "All" || dev.availability === activeFilter.availability) &&
        (activeFilter.experience === "All" || 
            (activeFilter.experience === "1-3 years" && dev.experience.includes("1-3")) ||
            (activeFilter.experience === "3-5 years" && dev.experience.includes("3-5")) ||
            (activeFilter.experience === "5+ years" && parseInt(dev.experience) >= 5)
        ) &&
        (activeFilter.englishLevel === "All" || dev.englishLevel === activeFilter.englishLevel)
        );
    });

  return (
    <div className="bg-black">

        <nav className={`sticky top-0 z-50 transition-colors duration-300 bg-gradient-to-r from-[#3a0023] to-[#000000] ${isScrolled ? 'block' : 'hidden'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
                <div className="flex w-[11rem] items-center space-x-3">
                    <img srcSet={Logo} alt='logo' className='w-full' />
                </div>

                <div className="hidden md:flex items-center space-x-8">
                <a href="/home" className="text-gray-300 hover:text-white transition-colors hover:font-medium">Home</a>
                <a href="#capabilities" className="text-gray-300 hover:text-white transition-colors hover:font-medium">Capabilities</a>
                <a href="#talent" className="text-gray-300 hover:text-white transition-colors hover:font-medium">Our Talent</a>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors hover:font-medium">FAQ</a>
                <button className="bg-gradient-to-r from-[#81004D] to-[#DB0083] text-white px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                    Hire React Developers
                </button>
                </div>

                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6 text-slate-600" /> : <Menu className="w-6 h-6 text-slate-600" />}
                </button>
            </div>
            </div>
        </nav>

        {/* Hero Section */}
        <div className='relative'>
            {/* Navigation */}
            <nav className={`sticky top-0 z-50 transition-colors duration-200 ${isScrolled ? 'hidden' : 'block'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex w-[11rem] items-center space-x-3">
                        <img srcSet={Logo} alt='logo' className='w-full' />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/home" className="text-gray-300 hover:text-white transition-colors hover:font-medium">Home</a>
                        <a href="#capabilities" className="text-gray-300 hover:text-white transition-colors hover:font-medium">Capabilities</a>
                        <a href="#talent" className="text-gray-300 hover:text-white transition-colors hover:font-medium">Our Talent</a>
                        <a href="#faq" className="text-gray-300 hover:text-white transition-colors hover:font-medium">FAQ</a>
                        <button className="bg-gradient-to-r from-[#81004D] to-[#DB0083] text-white px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                            Hire React Developers
                        </button>
                    </div>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="w-6 h-6 text-slate-600" /> : <Menu className="w-6 h-6 text-slate-600" />}
                    </button>
                </div>
                </div>
            </nav>
            <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 flex relative gap-6">
                <div className="mb-6 w-[50%] max-w-5xl mx-auto">
                    <h1 className="text-5xl/[5rem] font-bold mb-6 text-white">
                        Hire Elite
                        <span className="block text-6xl/[5rem] text-transparent bg-clip-text bg-gradient-to-b from-[#ff6ec5] to-[#DB0083]">
                        ReactJS Engineers
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Access the <strong className="text-gray-200">top 5%</strong> of React developers worldwide. 
                        Pre-vetted, passionate professionals ready to build your next breakthrough application.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 items-center mb-12">
                        <button className="bg-gradient-to-r from-[#81004D] to-[#DB0083] text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-200 flex items-center">
                        Start Hiring Today
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center px-8 py-4 rounded-full border border-white bg-transparent hover:bg-white text-gray-200 hover:text-[#81004D] cursor-pointer font-semibold">
                        <Play className="w-5 h-5 mr-2 fill-[#DB0083]" />
                        See How It Works
                        </button>
                    </div>
                </div>
                <div className='w-[50%]'><img src={globe} alt='globe image' /></div>
            </section>

            {/* Stats */}
            <div className="max-w-7xl grid md:grid-cols-4 gap-8 rounded-2xl p-8 pb-16 mx-auto">
                <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">25,000+</div>
                <div className="text-gray-300">Trusted Clients</div>
                </div>
                <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5%</div>
                <div className="text-gray-300">Acceptance Rate</div>
                </div>
                <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24 hrs</div>
                <div className="text-gray-300">Average Match Time</div>
                </div>
                <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-300">Trial Success Rate</div>
                </div>
            </div>
            <div className='absolute w-full h-full top-0 left-0 bg-[linear-gradient(to_bottom_right,_#DB0083_0%,_transparent_30%)] opacity-30' />
            <div className='absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20' />
        </div>

        {/* How to Hire Process */}
        <div className='relative overflow-hidden'>
            <section id="process" className="z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                
                <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-white">
                    How to Hire ReactJS Engineers
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Our streamlined process ensures you get the perfect React developer for your project
                </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                {hiringSteps.map((step, index) => (
                    <div className="relative group">
                    <div className="border-2 border-[#81004d4f] shadow-xl shadow-[#81004d1a] bg-gradient-to-t from-[#81004d4f] to-[#000000] h-full p-8 rounded-lg">
                        <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="text-white">{step.icon}</div>
                        </div>
                        </div>
                        <h3 className="text-xl/[2.5rem] font-medium mb-4 text-white"><span>0{index + 1}. </span>{step.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                    {index < 2 && (
                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-[#fe5182]" />
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </section>
        </div>

        <section className="pt-6 pb-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl mb-12 font-bold text-center text-white">Skilled <span className='text-5xl/[5rem] text-transparent bg-clip-text bg-gradient-to-b from-[#ff6ec5] to-[#db006e]'>React Developers</span><br /> Ready to Join Your Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDevelopers.map((developer) => (
                    <DeveloperCard key={developer.id} developer={developer} />
                    ))}
                </div>
                {/* <Link to='/skill-details'>
                    <button className='rounded-full flex justify-self-end mt-8 underline underline-offset-4 font-bold text-lg text-[#fe5182]'>View All</button>
                </Link> */}
            </div>
        </section>

        {/* Screening Process */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0 flex gap-6">
            <div className="w-[50%] relative flex justify-center">
                <img
                    src={Illustration}
                    alt="globe image"
                    className="w-[80%] h-[79%] object-cover rounded-tl-[8rem] rounded-br-[8rem] border-l-[0.9rem] border-r-[0.9rem] border-l-[#fe5182] border-r-[#81004D]"
                />
                {/* <span className="absolute top-0 left-0 w-[6rem] h-[6rem] bg-gradient-to-l from-[#81004D] to-[#fe5182] rounded-full"></span> */}
            </div>
                
            <div className="w-[50%]">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Exceptional Talent
                </h2>
                <p className="text-lg/[2.2rem] pt-4 text-gray-300">
                    How We Source the Top 5% of React Developers Our name “TopSkyll” comes from Top Skill—meaning we constantly strive to find and work with the best from around the world. Our rigorous screening process identifies experts in their domains who have passion and drive.
                </p>
                <p className="text-xl/[2.2rem] pt-8 text-gray-300">Of the thousands of applications TopSkyll sees each month, typically fewer than 5% are accepted.</p>
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="">
                <h2 className='text-5xl text-center font-bold text-white mt-0'>Start Hiring Today</h2>
                <div className="flex flex-wrap pt-[3rem] gap-8 justify-center">
                    {screeningSteps.map((step, index) => (
                    <div key={index} className="w-[30%] group border-2 border-[#81004d4f] hover:bg-gradient-to-b hover:from-[#81004d4f] hover:to-[#000000] p-6 rounded-xl transition-all flex flex-col gap-8 duration-300">
                        <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-2xl flex items-center justify-center mr-6 group-hover:scale-105 transition-transform duration-300">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{step.percentage}%</div>
                                <div className="text-xs text-gray-300">pass</div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start gap-4">
                            <div className="flex mb-2">
                                <h3 className="text-lg font-bold text-white">{index + 1}. {step.step}</h3>
                            </div>
                            <div className="flex-shrink-0 w-64 bg-gradient-to-l from-[#81004d4f] to-[#000000] rounded-full h-3">
                                <div 
                                    className="bg-gradient-to-r from-[#81004D] to-[#fe5182] h-3 rounded-full transition-all duration-1000"
                                    style={{ width: `${(step.percentage / 26.4) * 100}%` }}
                                ></div>
                            </div>
                            <p className="text-gray-300">{step.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Capabilities */}
        {/* <section id="capabilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Capabilities of ReactJS Developers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our developers leverage React's component-based architecture, virtual DOM, and state management 
                to build dynamic, responsive, and performance-optimized user interfaces
            </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#81004D]">{capability.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-800">{capability.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{capability.description}</p>
                </div>
            ))}
            </div>
        </section> */}

        {/* Developer Types */}
        {/* <section id="talent" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                Find the Right Talent for Every Project
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From short-term solutions to long-term collaborations, TopSkyll delivers impactful results
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
            {developerTypes.map((type, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{type.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{type.description}</p>
                <div className="grid grid-cols-2 gap-3">
                    {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-[#81004D] mr-2 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </section> */}

        {/* FAQ Section */}
        {/* <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
                Everything you need to know about hiring React developers through TopSkyll
            </p>
            </div>

            <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
                <button
                    className="w-full px-8 py-6 text-left hover:bg-blue-50 transition-colors duration-200 flex justify-between items-center"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                    <h3 className="text-lg font-semibold text-slate-800 pr-4">{faq.question}</h3>
                    <ChevronRight 
                    className={`w-5 h-5 text-[#81004D] transition-transform duration-200 flex-shrink-0 ${
                        openFAQ === index ? 'rotate-90' : ''
                    }`} 
                    />
                </button>
                {openFAQ === index && (
                    <div className="px-8 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                )}
                </div>
            ))}
            </div>
        </section> */}

        {/* CTA Section */}
        {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="bg-gradient-to-r from-[#81004D] to-[#DB0083] rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Hire Elite React Developers?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Join 25,000+ companies that trust TopSkyll to deliver exceptional React talent. 
                Start with our risk-free trial period.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="group bg-white text-[#81004D] px-10 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center">
                Start Hiring Today
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 transition-all duration-300 text-white font-semibold">
                Talk to an Advisor
                </button>
            </div>

            <div className="flex justify-center items-center gap-8 text-sm opacity-80">
                <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>No-risk trial period</span>
                </div>
                <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>48-hour matching</span>
                </div>
                <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Top 5% talent only</span>
                </div>
            </div>
            </div>
        </section> */}

        {/* Footer */}
        {/* <footer className="bg-white border-t border-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#81004D] to-[#DB0083] rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-[#81004D] to-[#DB0083] bg-clip-text text-transparent">TopSkyll</span>
                </div>
                <p className="text-slate-600 text-sm">
                    Connecting you with the top 5% of React developers worldwide. Quality-first hiring for exceptional results.
                </p>
                </div>
                
                <div>
                <h3 className="font-semibold mb-4 text-slate-800">Services</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                    <li><a href="#" className="hover:text-[#81004D] transition-colors">React Developers</a></li>
                    <li><a href="#" className="hover:text-[#81004D] transition-colors">Senior Engineers</a></li>
                    <li><a href="#" className="hover:text-[#81004D] transition-colors">Full-Stack Teams</a></li>
                    <li><a href="#" className="hover:text-[#81004D] transition-colors">Managed Delivery</a></li>
                </ul>
                </div>
                
                <div>
                <h3 className="font-semibold mb-4 text-slate-800">Resources</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                    <li><a href="#" className="hover:text-[#81004D] transition-colors">Hiring Guide</a></li>
                    <li><a href="#" className="hover:text-[#81004D] transition-colors">Tech Blog</a></li>
                    <li><a href="#" className="hover:text-[#81004D] transition-colors">Success Stories</a></li>
                    <li><a href="#" className="hover:text-[#81004D] transition-colors">Developer Network</a></li>
                </ul>
                </div>
                
                <div>
                <h3 className="font-semibold mb-4 text-slate-800">Contact</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                    <li>hello@topskyll.com</li>
                    <li>+1 (555) 123-4567</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                </ul>
                </div>
            </div>
            
            <div className="border-t border-blue-100 mt-12 pt-8 text-center text-slate-500 text-sm">
                <p>&copy; 2024 TopSkyll. All rights reserved. Trusted by developers and companies worldwide.</p>
            </div>
            </div>
        </footer> */}
    </div>
  );
};

export default LandingPage;

function DeveloperCard({ developer }: { developer: typeof reactDevelopers[0] }) {
  return (
    <Card className="bg-black shadow-xl border border-gray-800 text-gray-300 transition-all duration-300 h-full flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        {/* Header with avatar */}
       <div className="relative h-60 rounded-t-lg overflow-hidden">
        <div className="w-full h-full">
          <Avatar className="w-full h-full rounded-none">
            <AvatarImage
              src={developer.avatar} 
              className="w-full h-full object-cover" 
              alt={developer.name}
            />
            <AvatarFallback className="bg-blue-600 text-4xl text-white rounded-none flex items-center justify-center w-full h-full">
              {developer.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {developer.verified && (
            <Badge className="absolute top-2 left-2 bg-green-500 text-white">
              <Verified />
            </Badge>
          )}
          <div className="bg-gradient-to-r from-[#3a0023d3] to-[#000000d3] flex justify-between items-center absolute w-full bottom-0 py-2 px-6">
            <div>
              <h3 className="text-xl font-bold text-white pb-2 truncate max-w-[12rem]">{developer.name}</h3>
              <p className="text-gray-300 truncate max-w-[12rem]">{developer.title}</p>
            </div>
            <Button className="w-[6rem] rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182]">
              View
            </Button>
          </div>
        </div>
      </div>

        {/* Main content */}
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(developer.rating) ? 'text-yellow-400' : 'text-slate-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {developer.rating} ({developer.totalReviews} reviews)
              </span>
            </div>
            
          </div>
          <p title={developer.bio} className="text-[0.9rem] text-gray-300 mb-4 line-clamp-3 truncate">
            {developer.bio}
          </p>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {developer.skills.slice(0, 2).map(skill => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs bg-gray-900 text-gray-300"
                >
                  {skill}
                </Badge>
              ))}

              {developer.skills.length > 2 && (
                <Badge
                  variant="secondary"
                  className="text-xs bg-gray-900 text-gray-300"
                >
                  +{developer.skills.length - 2} more
                </Badge>
              )}
            </div>
          </div>

          <div className="flex gap-6 text-sm text-gray-300">
            <div>
              <div className="text-slate-500 dark:text-slate-400">Experience</div>
              <div className="font-medium">{developer.experience}</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">Availability</div>
              <div className="font-medium">{developer.availability}</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">Rate</div>
              <div className="font-medium">{developer.hourlyRate}</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">English</div>
              <div className="font-medium">{developer.englishLevel}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}