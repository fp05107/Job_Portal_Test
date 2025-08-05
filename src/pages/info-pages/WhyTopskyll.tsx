import React, { useState, useEffect, useRef } from 'react';
import {
    Clock,
    Shield,
    Globe,
    Zap,
    Award,
    Users,
    TrendingUp,
    CheckCircle,
    Star,
    Code,
    Database,
    Smartphone,
    Cloud,
    Brain,
    ArrowRight,
    Target,
    Lightbulb,
    ChevronRight,
    ChevronLeft,
    Play,
    MessageCircle,
    Calendar,
    DollarSign,
    Gauge,
    Trophy,
    Heart,
    Building,
    Briefcase,
    Server,
    Cpu,
    Lock,
    GitMerge,
    Layers,
    BookOpen,
    BarChart2,
    ShoppingCart,
    Clock4,
    Wifi,
    CpuIcon,
    Key,
    Mail,
    Phone,
    MapPin,
    Twitter,
    Linkedin,
    Facebook,
    Youtube,
    Instagram
} from 'lucide-react';

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

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
    }, [end, duration, isVisible]);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const WhyTopSkyll: React.FC = () => {
    const [activeAdvantage, setActiveAdvantage] = useState(0);
    const [currentStory, setCurrentStory] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const interval = setInterval(() => {
            setActiveAdvantage((prev) => (prev + 1) % 4);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const keyStats = [
        { value: 48, suffix: 'hrs', label: 'Average Match Time', icon: Clock },
        { value: 98, suffix: '%', label: 'Client Satisfaction', icon: Heart },
        { value: 95, suffix: '%', label: 'Developer Retention', icon: Users },
        { value: 0, suffix: '', label: 'Failed Placements', icon: Shield }
    ];

    const strategicAdvantages = [
        {
            icon: Zap,
            title: "Speed and Efficiency",
            subtitle: "From Months to Days",
            description: "Our streamlined process transforms traditional hiring timelines, delivering pre-qualified candidates within 48 hours.",
            features: [
                "48-hour average from requirement to introduction",
                "Pre-qualified candidates eliminating lengthy screening",
                "Immediate availability with ready-to-start developers",
                "Reduced management overhead with full-service approach",
                "Dedicated account management for ongoing support",
                "Administrative handling of contracts and payments"
            ],
            color: "from-blue-500 to-purple-500"
        },
        {
            icon: Award,
            title: "Quality Assurance",
            subtitle: "Excellence Guaranteed",
            description: "Proven track record with industry-leading standards ensuring consistent high-quality results across all projects.",
            features: [
                "98% client satisfaction rate across all engagements",
                "95% developer retention indicating strong performance",
                "Zero failed placements with satisfaction guarantee",
                "Industry-leading expertise in modern development practices",
                "Best practice implementation in testing and security",
                "Code quality assurance with clean, maintainable deliverables"
            ],
            color: "from-[#81004D] to-[#fe5182]"
        },
        {
            icon: Globe,
            title: "Global Reach",
            subtitle: "Local Understanding",
            description: "Worldwide talent network providing access to global expertise with business context awareness.",
            features: [
                "International developer pool across all technologies",
                "Time zone coverage for round-the-clock development",
                "Cultural diversity bringing varied perspectives",
                "Industry-specific experience across various sectors",
                "Regulatory compliance understanding for regulated industries",
                "Market awareness of competitive landscapes"
            ],
            color: "from-green-500 to-blue-500"
        },
        {
            icon: Code,
            title: "Technology Flexibility",
            subtitle: "Comprehensive Coverage",
            description: "Full spectrum of technology expertise from frontend to emerging technologies, ensuring perfect matches.",
            features: [
                "Frontend: React, Angular, Vue.js, TypeScript",
                "Backend: Python, Java, .NET, Node.js, Go, Ruby",
                "Mobile: React Native, Flutter, iOS, Android",
                "Cloud: AWS, Azure, Google Cloud, Serverless",
                "Databases: PostgreSQL, MySQL, MongoDB, Redis",
                "Emerging Tech: AI/ML, Blockchain, IoT, AR/VR"
            ],
            color: "from-purple-500 to-pink-500"
        }
    ];

    const techStacks = [
        {
            category: "Frontend Technologies",
            icon: Code,
            technologies: ["React", "Angular", "Vue.js", "TypeScript", "Modern CSS"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            category: "Backend Solutions",
            icon: Server,
            technologies: ["Python", "Java", ".NET", "Node.js", "Go", "PHP", "Ruby"],
            color: "from-green-500 to-emerald-500"
        },
        {
            category: "Mobile Development",
            icon: Smartphone,
            technologies: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin/Java)"],
            color: "from-purple-500 to-violet-500"
        },
        {
            category: "Cloud Platforms",
            icon: Cloud,
            technologies: ["AWS", "Azure", "Google Cloud", "Serverless"],
            color: "from-orange-500 to-red-500"
        },
        {
            category: "Databases",
            icon: Database,
            technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
            color: "from-teal-500 to-cyan-500"
        },
        {
            category: "Emerging Technologies",
            icon: Brain,
            technologies: ["AI/ML", "Blockchain", "IoT", "AR/VR"],
            color: "from-[#81004D] to-[#fe5182]"
        }
    ];

    const successStories = [
        {
            title: "FinTech Innovation",
            industry: "Financial Services",
            challenge: "Build comprehensive trading platform with React frontend, Python backend, and real-time data processing within 6 months",
            solution: "React specialists, Python developers, and DevOps engineers with financial industry experience",
            results: ["Platform launched on schedule", "Series A funding secured", "300% user growth in first quarter"],
            icon: TrendingUp,
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "E-Commerce Transformation",
            industry: "Fortune 500 Retailer",
            challenge: "Modernize e-commerce platform using microservices architecture while maintaining 99.9% uptime",
            solution: "Java backend specialists, React frontend developers, and AWS cloud architects",
            results: ["Zero downtime migration", "40% improvement in page load speeds", "25% increase in conversion rates"],
            icon: Building,
            color: "from-blue-500 to-purple-500"
        },
        {
            title: "Mobile-First Strategy",
            industry: "Healthcare",
            challenge: "Develop iOS and Android applications with complex integration to existing backend systems",
            solution: "React Native developers and API integration specialists familiar with healthcare compliance",
            results: ["Apps launched simultaneously", "4.8-star ratings achieved", "50,000+ daily active users"],
            icon: Smartphone,
            color: "from-[#81004D] to-[#fe5182]"
        },
        {
            title: "AI Integration Project",
            industry: "Logistics",
            challenge: "Implement machine learning for route optimization while maintaining existing .NET infrastructure",
            solution: "Python ML engineers and .NET integration specialists working seamlessly together",
            results: ["30% reduction in delivery times", "$2M annual cost savings", "Successful AI model deployment"],
            icon: Brain,
            color: "from-purple-500 to-pink-500"
        }
    ];

    const networkFeatures = [
        {
            icon: Trophy,
            title: "Senior-Level Expertise",
            description: "Years of experience in specialized technology areas with proven track records"
        },
        {
            icon: Cpu,
            title: "Full-Stack Capabilities",
            description: "Comprehensive solution development across multiple technology domains"
        },
        {
            icon: Briefcase,
            title: "Business Acumen",
            description: "Understanding the connection between technical decisions and business outcomes"
        },
        {
            icon: MessageCircle,
            title: "Communication Excellence",
            description: "Facilitating effective collaboration and strong client relationships"
        },
        {
            icon: Lightbulb,
            title: "Continuous Learning",
            description: "Staying ahead of technology trends and industry best practices"
        },
        {
            icon: Lock,
            title: "Security Specialists",
            description: "Ensuring application security across all technology layers"
        }
    ];

    const developerCommunity = [
        {
            icon: BookOpen,
            title: "Professional Excellence",
            description: "Maintaining highest standards of code quality and technical delivery"
        },
        {
            icon: GitMerge,
            title: "Collaborative Culture",
            description: "Mutual respect and knowledge sharing across the community"
        },
        {
            icon: Layers,
            title: "Continuous Development",
            description: "Regular training on emerging technologies and best practices"
        },
        {
            icon: BarChart2,
            title: "Leadership Opportunities",
            description: "Contributing to industry discussions and mentoring others"
        }
    ];

    const nextStory = () => {
        setCurrentStory((prev) => (prev + 1) % successStories.length);
    };

    const prevStory = () => {
        setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
    };

    const currentStoryData = successStories[currentStory];

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#080106] dark:text-white">
                            Why Choose <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">TopSkyll</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            The Strategic Advantages That Transform Your Development Success
                        </p>
                        <div className="mt-8 inline-flex items-center space-x-2 bg-[#fe5182]/20 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                            <Target className="w-5 h-5 text-[#fe5182]" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                Your Success is Our Success
                            </span>
                        </div>
                    </div>
                </div>
                <div className='absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10 pointer-events-none' />
            </section>

            {/* Key Stats */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        {keyStats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>
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

            {/* Strategic Advantages */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
                            Strategic <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Advantages</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Four core pillars that set TopSkyll apart from traditional hiring methods
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Advantages List */}
                        <div className="space-y-4">
                            {strategicAdvantages.map((advantage, index) => (
                                <div
                                    key={index}
                                    className={`group cursor-pointer transition-all duration-300 ${activeAdvantage === index ? 'scale-105' : 'hover:scale-102'
                                        }`}
                                    onClick={() => setActiveAdvantage(index)}
                                >
                                    <div className={`border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] rounded-2xl p-6 transition-all duration-300 ${activeAdvantage === index
                                            ? 'bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white'
                                            : 'bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] hover:shadow-2xl'
                                        }`}>
                                        <div className="flex items-center space-x-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeAdvantage === index
                                                    ? 'bg-white text-[#81004D]'
                                                    : `bg-gradient-to-r ${advantage.color} text-white`
                                                }`}>
                                                <advantage.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className={`text-xl font-bold ${activeAdvantage === index ? 'text-white' : 'text-[#080106] dark:text-white'}`}>
                                                    {advantage.title}
                                                </h3>
                                                <p className={`text-sm ${activeAdvantage === index ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'}`}>
                                                    {advantage.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Active Advantage Details */}
                        <div className="sticky top-8">
                            <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-2xl p-8">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${strategicAdvantages[activeAdvantage].color} rounded-xl flex items-center justify-center`}>
                                        {/* <strategicAdvantages[activeAdvantage].icon className="w-8 h-8 text-white" /> */}
                                        {React.createElement(strategicAdvantages[activeAdvantage].icon, { className: "w-8 h-8 text-white" })}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#080106] dark:text-white">
                                            {strategicAdvantages[activeAdvantage].title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {strategicAdvantages[activeAdvantage].subtitle}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {strategicAdvantages[activeAdvantage].description}
                                </p>

                                <div className="space-y-3">
                                    {strategicAdvantages[activeAdvantage].features.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-[#fe5182] mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack Coverage */}
            <section className="py-20 bg-gray-50 dark:bg-black/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
                            Technology Stack <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Flexibility</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Comprehensive coverage across all major development technologies and emerging frameworks
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {techStacks.map((stack, index) => (
                            <div key={index} className="group">
                                <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] h-full rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${stack.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <stack.icon className="text-white w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">{stack.category}</h3>
                                    <div className="space-y-2">
                                        {stack.technologies.map((tech, techIndex) => (
                                            <div key={techIndex} className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-[#fe5182] rounded-full" />
                                                <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 relative bg-[#330024] dark:bg-black overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Success <span className="bg-gradient-to-r from-[#fe5182] to-white bg-clip-text text-transparent">Stories</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Real transformations achieved through elite talent partnerships
                        </p>
                    </div>

                    <div className="relative">
                        <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#ffdee7] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-3xl p-8 md:p-12">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center space-x-6">
                                    <div className={`w-20 h-20 bg-gradient-to-r ${currentStoryData.color} rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300`}>
                                        <currentStoryData.icon className="w-10 h-10 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-[#080106] dark:text-white">{currentStoryData.title}</h3>
                                        <p className="text-lg text-gray-600 dark:text-gray-300">{currentStoryData.industry}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={prevStory}
                                        className="w-12 h-12 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-110"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-white" />
                                    </button>
                                    <button
                                        onClick={nextStory}
                                        className="w-12 h-12 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-110"
                                    >
                                        <ChevronRight className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-[#080106] dark:text-white mb-3">Challenge</h4>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{currentStoryData.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#080106] dark:text-white mb-3">Solution</h4>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{currentStoryData.solution}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-[#080106] dark:text-white mb-6">Results Achieved</h4>
                                    <div className="space-y-4">
                                        {currentStoryData.results.map((result, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">{result}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center mt-8 space-x-3">
                                {successStories.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentStory(index)}
                                        className={`w-4 h-4 rounded-full transition-all duration-300 ${currentStory === index
                                                ? 'bg-gradient-to-r from-[#81004D] to-[#fe5182] scale-110'
                                                : 'bg-gray-400 hover:bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Developer Network */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
                            Our <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Developer Network</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Exceptional professionals, carefully curated for excellence across all technology domains
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {networkFeatures.map((feature, index) => (
                            <div key={index} className="group">
                                <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] h-full rounded-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="text-white w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Standards */}
            <section className="py-20 bg-gray-50 dark:bg-black/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
                            Community <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Standards</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Our network operates on principles of professional excellence, mutual respect, and collaborative success
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {developerCommunity.map((feature, index) => (
                            <div key={index} className="group">
                                <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] h-full rounded-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="text-white w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
                            Our <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Commitment</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            At TopSkyll, we measure our success by your success across all technology domains
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-[#080106] dark:text-white mb-6">Client-Centric Approach</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    Every developer placement, every project outcome, and every client relationship is an opportunity to demonstrate our commitment to excellence and value creation across all technology domains.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Quality assurance with every developer meeting our rigorous standards",
                                        "Technology expertise across all major development stacks",
                                        "Responsive support with dedicated account management",
                                        "Flexible solutions adapting to your changing needs",
                                        "Transparent partnership with clear expectations"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-[#fe5182] mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-[#080106] dark:text-white mb-6">Long-Term Partnership Vision</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    We don't just want to fill your immediate development needs—we want to become your trusted partner for long-term technology success.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Strategic consulting for technology stack decisions",
                                        "Scalability planning for growing businesses",
                                        "Technology evolution support keeping you ahead",
                                        "Continuous improvement based on your feedback",
                                        "Technology-agnostic excellence across all domains"
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
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#81004D] to-[#fe5182]" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Ready to Experience the TopSkyll Difference?
                        </h2>
                        <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
                            Join hundreds of successful companies who have discovered that exceptional development talent is not just available—it's accessible, reliable, and ready to drive your success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#81004D] bg-white rounded-full transform hover:scale-105 transition-all duration-300">
                                <Calendar className="w-5 h-5 mr-2" />
                                <span>Schedule Consultation</span>
                                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-[#81004D] transition-all duration-300">
                                <Play className="w-5 h-5 mr-2" />
                                <span>Watch Success Stories</span>
                            </button>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-lg text-gray-200 mb-4">
                                Your next breakthrough is just one conversation away.
                            </p>
                            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                                <MessageCircle className="w-5 h-5 text-white" />
                                <span className="text-white font-medium">
                                    Trusted by 25,000+ companies worldwide
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Stats Banner */}
            <section className="py-16 bg-gray-50 dark:bg-black/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-[#080106] dark:text-white mb-8">
                            The choice is clear: Transform your development success with TopSkyll
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#fe5182] mb-2">
                                    <Counter end={100} suffix="%" />
                                </div>
                                <div className="text-gray-600 dark:text-gray-300">Technology-Agnostic Excellence</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#fe5182] mb-2">
                                    <Counter end={24} suffix="/7" />
                                </div>
                                <div className="text-gray-600 dark:text-gray-300">Global Support Coverage</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#fe5182] mb-2">
                                    <Counter end={365} suffix=" days" />
                                </div>
                                <div className="text-gray-600 dark:text-gray-300">Ongoing Partnership Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyTopSkyll;