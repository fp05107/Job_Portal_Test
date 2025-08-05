import React, { useState, useRef, useEffect } from 'react';
import {
    Rocket,
    Users,
    Globe,
    Lightbulb,
    Code,
    Server,
    Database,
    BarChart2,
    Mail,
    Briefcase,
    Heart,
    Shield,
    Clock,
    TrendingUp,
    GitMerge,
    Cpu,
    Smartphone,
    Cloud,
    Brain,
    MessageCircle,
    Award,
    CheckCircle,
    ChevronRight,
    ChevronLeft,
    ArrowRight,
    Calendar,
    Play,
    Star,
    Target,
    Trophy,
    BookOpen,
    Layers,
    Lock
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

const Careers = () => {
    const [activeRole, setActiveRole] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const keyStats = [
        { value: 100, suffix: '+', label: 'Team Members', icon: Users },
        { value: 25, suffix: '+', label: 'Countries', icon: Globe },
        { value: 4, suffix: '', label: 'Day Work Week', icon: Clock },
        { value: 98, suffix: '%', label: 'Team Happiness', icon: Heart }
    ];

    const benefits = [
        { icon: Award, title: "Competitive Compensation", description: "Attractive salary packages with equity participation" },
        { icon: Heart, title: "Health & Wellness", description: "Comprehensive health benefits and wellness programs" },
        { icon: Clock, title: "Flexible Work", description: "Remote-first culture with flexible arrangements" },
        { icon: TrendingUp, title: "Growth Opportunities", description: "Professional development budgets and conference attendance" },
        { icon: Shield, title: "Modern Tools", description: "Cutting-edge technology stack to do your best work" },
        { icon: Users, title: "Inclusive Culture", description: "Collaborative environment that values diversity" }
    ];

    const openRoles = [
        {
            category: "Technology",
            icon: Code,
            roles: [
                "Senior Software Engineer",
                "DevOps Engineer",
                "Data Scientist",
                "Product Manager",
                "QA Automation Engineer"
            ],
            description: "Build innovative solutions using cutting-edge technologies while working with talented engineers across the globe.",
            color: "from-blue-500 to-purple-500"
        },
        {
            category: "Business",
            icon: BarChart2,
            roles: [
                "Client Success Manager",
                "Business Development Representative",
                "Account Executive",
                "Partnership Manager"
            ],
            description: "Help businesses find transformative talent while advancing developers' careers across various industries.",
            color: "from-green-500 to-emerald-500"
        },
        {
            category: "Operations",
            icon: GitMerge,
            roles: [
                "Talent Acquisition Specialist",
                "Quality Assurance Analyst",
                "Customer Support Representative",
                "Operations Coordinator"
            ],
            description: "Ensure smooth operations and exceptional experiences for both clients and developers in our network.",
            color: "from-purple-500 to-pink-500"
        },
        {
            category: "Marketing",
            icon: MessageCircle,
            roles: [
                "Content Creator",
                "Digital Marketing Specialist",
                "Brand Manager",
                "Growth Marketing Lead"
            ],
            description: "Tell our story and connect with audiences through creative campaigns and compelling content.",
            color: "from-[#81004D] to-[#fe5182]"
        }
    ];

    const cultureValues = [
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "We encourage creative thinking and experimentation to solve complex problems"
        },
        {
            icon: Globe,
            title: "Global Mindset",
            description: "We embrace diversity and think beyond borders in everything we do"
        },
        {
            icon: TrendingUp,
            title: "Growth",
            description: "We're committed to personal and professional development for all team members"
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "We believe the best results come from working together across disciplines"
        },
        {
            icon: Shield,
            title: "Integrity",
            description: "We do what's right, even when no one is watching"
        },
        {
            icon: Heart,
            title: "Passion",
            description: "We love what we do and it shows in our work"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#080106] dark:text-white">
                            Join <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">TopSkyll</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Where Talent Meets Innovation
                        </p>
                        <div className="mt-8 inline-flex items-center space-x-2 bg-[#fe5182]/20 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                            <Target className="w-5 h-5 text-[#fe5182]" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                Build the future of technology hiring with us
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

            {/* Mission Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
                            Build the Future of <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Technology Hiring</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                            At TopSkyll, we're revolutionizing how businesses connect with elite technology talent. Our mission is simple yet powerful: eliminate the barriers between exceptional companies and the world-class developers who can transform their vision into reality.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-2xl p-8">
                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    We're a fast-growing company that values innovation, excellence, and the belief that great people create great outcomes. If you're passionate about technology, driven by results, and excited about solving complex challenges in the talent acquisition space, we want you on our team.
                                </p>
                                <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center mx-auto">
                                    <Rocket className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-[#fe5182]/10 dark:bg-[#fe5182]/20 rounded-lg flex items-center justify-center">
                                        <Users className="w-6 h-6 text-[#fe5182]" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#080106] dark:text-white mb-2">Impact-Driven Work</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Help businesses find transformative talent while advancing developers' careers.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-[#fe5182]/10 dark:bg-[#fe5182]/20 rounded-lg flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-[#fe5182]" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#080106] dark:text-white mb-2">Growth-Focused</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Continuous learning with exposure to latest technologies and trends.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-[#fe5182]/10 dark:bg-[#fe5182]/20 rounded-lg flex items-center justify-center">
                                        <Globe className="w-6 h-6 text-[#fe5182]" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#080106] dark:text-white mb-2">Global Perspective</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Work with diverse international teams across industries and regions.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-[#fe5182]/10 dark:bg-[#fe5182]/20 rounded-lg flex items-center justify-center">
                                        <Lightbulb className="w-6 h-6 text-[#fe5182]" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#080106] dark:text-white mb-2">Innovation Culture</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Creative thinking and autonomy to make meaningful contributions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section className="py-20 bg-gray-50 dark:bg-black/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
                            Current <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Opportunities</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            We're actively seeking talented individuals across various disciplines
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Roles List */}
                        <div className="space-y-4">
                            {openRoles.map((role, index) => (
                                <div
                                    key={index}
                                    className={`group cursor-pointer transition-all duration-300 ${activeRole === index ? 'scale-105' : 'hover:scale-102'}`}
                                    onClick={() => setActiveRole(index)}
                                >
                                    <div className={`border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] rounded-2xl p-6 transition-all duration-300 ${activeRole === index
                                        ? 'bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white'
                                        : 'bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] hover:shadow-2xl'
                                        }`}>
                                        <div className="flex items-center space-x-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeRole === index
                                                ? 'bg-white text-[#81004D]'
                                                : `bg-gradient-to-r ${role.color} text-white`
                                                }`}>
                                                <role.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className={`text-xl font-bold ${activeRole === index ? 'text-white' : 'text-[#080106] dark:text-white'}`}>
                                                    {role.category}
                                                </h3>
                                                <p className={`text-sm ${activeRole === index ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'}`}>
                                                    {role.roles.length} open positions
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Active Role Details */}
                        <div className="sticky top-8">
                            <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-2xl p-8">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${openRoles[activeRole].color} rounded-xl flex items-center justify-center`}>
                                        {/* <openRoles[openRoles].icon className="w-8 h-8 text-white" /> */}
                                        {/* {React.createElement(openRoles[openRoles].icon, { className: "w-8 h-8 text-white" })} */}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#080106] dark:text-white">
                                            {openRoles[activeRole].category}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {openRoles[activeRole].roles.length} open positions
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {openRoles[activeRole].description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {openRoles[activeRole].roles.map((role, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-[#fe5182] mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300">{role}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="group inline-flex items-center justify-center w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
                                    <span>Apply Now</span>
                                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
                            What We <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Offer</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            We invest in our team's success with comprehensive benefits and support
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group">
                                <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] h-full rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="w-14 h-14 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <benefit.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture Values */}
            <section className="py-20 bg-gray-50 dark:bg-black/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#080106] dark:text-white">
                            Our <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Culture</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            The principles that guide how we work and grow together
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cultureValues.map((value, index) => (
                            <div key={index} className="group">
                                <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] h-full rounded-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#81004D] to-[#fe5182]" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Ready to Join Our Team?
                        </h2>
                        <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
                            We're looking for individuals who share our commitment to excellence and want to transform technology hiring.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:careers@topskyll.com"
                                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#81004D] bg-white rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                <span>Send Your Resume</span>
                                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                            <a
                                href="#open-roles"
                                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-[#81004D] transition-all duration-300"
                            >
                                <Briefcase className="w-5 h-5 mr-2" />
                                <span>View Open Roles</span>
                            </a>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-lg text-gray-200 mb-4">
                                Your next career breakthrough is just one conversation away.
                            </p>
                            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                                <MessageCircle className="w-5 h-5 text-white" />
                                <span className="text-white font-medium">
                                    TopSkyll is an equal opportunity employer committed to diversity and inclusion.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;