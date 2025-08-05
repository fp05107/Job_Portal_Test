import { ArrowRight, Briefcase, Calendar, CheckCircle, Globe, Shield, Star, Target, Zap } from 'lucide-react';
import React from 'react'
import { evaluationAreas, subsections } from '../../../coms/Data';

const SeFiveSix = () => {

    const getDelayStyle = (index: number, baseDelay = 150) => ({ transitionDelay: `${index * baseDelay}ms` });

  return (
    <div>
        {/* Section 5 - Why Choose Our React Development Network */}
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20"></div>

            <div className="relative z-10 py-16 px-4 md:px-16">
            {/* Hero Heading */}
            <div 
                id="hero"
                data-animate
                className={`text-center mb-20 transition-all duration-1000 transform animate-fadeIn`}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Why Choose Our{' '}
                <span className="h1-high-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                    React Development Network
                </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Subsections Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                {subsections.map((section, index) => {
                const Icon = section.icon;
                return (
                    <div
                    key={section.id}
                    id={section.id}
                    data-animate
                    className={`group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/10 transform animate-fadeIn`}
                    style={getDelayStyle(index)}
                    >
                    <div className="flex items-center mb-6">
                        <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={28} className="text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                        {section.title}
                        </h3>
                    </div>
                    
                    <ul className="space-y-4">
                        {section.points.map((point, pointIndex) => (
                        <li 
                            key={pointIndex}
                            className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                        >
                            <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="leading-relaxed">{point}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                );
                })}
            </div>

            {/* CTA Section */}
            <div 
                id="cta"
                data-animate
                className={`text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 transition-all duration-1000 transform animate-fadeIn`}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ready to Transform Your React Development Capabilities?
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Connect with our client advisors today to discuss your project requirements and discover how our elite React developers can accelerate your success. From initial consultation to project completion, we're committed to delivering exceptional results that exceed your expectations.
                </p>
                
                <button className="group bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fe5182] to-[#81004D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                    <Calendar size={20} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Schedule Your Consultation Now
                </div>
                </button>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center mt-8 gap-6 text-sm text-gray-400">
                <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Free Consultation
                </div>
                <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                    No Commitment Required
                </div>
                <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                    24/7 Support Available
                </div>
                </div>
            </div>
            </div>

            {/* Floating Action Elements */}
            <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-10 animate-bounce"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-10 animate-pulse"></div>
        </section>

        {/* Section 6 - Our Rigorous Selection Process: How We Identify the Top 5% of React.js Developers */}
        <section className="py-20 px-6 md:px-16 relative bg-black overflow-hidden">
            {/* Background Gradient Layer */}
            <div className="absolute inset-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10" />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-5">
            {[...Array(15)].map((_, i) => (
                <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    opacity: 0.3
                }}
                />
            ))}
            </div>

            <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <div 
                id="heading"
                data-animate
                className={`text-center mb-12 transition-all duration-1000 transform animate-fadeIn`}
            >
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                Our Rigorous Selection Process: How We Identify the{' '}
                <span className="h1-high-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Top 5% of React.js Developers
                </span>
                </h1>
                
                {/* Decorative Line */}
                <div className="w-32 h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182] mx-auto rounded-full"></div>
            </div>

            {/* Intro Paragraph */}
            <div 
                id="intro"
                data-animate
                className={`text-center mb-16 transition-all duration-1000 transform animate-fadeIn`}
            >
                <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Finding exceptional React developers requires more than just reviewing resumes. Our comprehensive vetting process ensures you work only with developers who demonstrate mastery in both technical excellence and professional delivery.
                </p>
            </div>

            {/* Core Evaluation Areas */}
            <div className="grid md:grid-cols-2 gap-8 pt-10 mb-16">
                {evaluationAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                    <div
                    key={area.id}
                    id={area.id}
                    data-animate
                    className={`group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/10 transform animate-fadeIn`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                    >
                    {/* Card Header */}
                    <div className="flex items-center mb-6">
                        <div className="p-3 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={28} className="text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                        {area.title}
                        </h3>
                    </div>

                    {/* Card Content */}
                    {area.points ? (
                        // Simple bullet points for Technical Screening and Full-Stack Integration
                        <ul className="space-y-3">
                        {area.points.map((point, pointIndex) => (
                            <li 
                            key={pointIndex}
                            className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                            >
                            <CheckCircle size={16} className="text-green-400 mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            <span className="leading-relaxed text-sm md:text-base">{point}</span>
                            </li>
                        ))}
                        </ul>
                    ) : (
                        // Subsections for Project Evaluation and Professional Excellence
                        <div className="space-y-6">
                        {area.subsections?.map((subsection, subIndex) => (
                            <div key={subIndex}>
                            <h4 className="text-lg font-semibold text-pink-300 mb-3 flex items-center">
                                <Star size={16} className="mr-2" />
                                {subsection.title}
                            </h4>
                            <ul className="space-y-2 ml-6">
                                {subsection.points.map((point, pointIndex) => (
                                <li 
                                    key={pointIndex}
                                    className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                                >
                                    <div className="w-2 h-2 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                                    <span className="leading-relaxed text-sm md:text-base">{point}</span>
                                </li>
                                ))}
                            </ul>
                            </div>
                        ))}
                        </div>
                    )}
                    </div>
                );
                })}
            </div>

            {/* CTA Footer Section */}
            <div 
                id="cta-footer"
                data-animate
                className={`text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 transition-all duration-1000 transform animate-fadeIn`}
            >
                <div className="mb-8">
                <Target size={48} className="text-pink-400 mx-auto mb-4 animate-pulse" />
                <p className="text-xl md:text-2xl font-semibold text-white mb-6 leading-relaxed">
                    We don't just hire developers — we handpick top-tier React experts who bring lasting value to your business.
                </p>
                </div>
                
                <button className="group bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fe5182] to-[#81004D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                    <Briefcase size={20} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Discover Elite React Talent
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                </button>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center mt-8 gap-6 text-sm text-gray-400">
                <div className="flex items-center">
                    <Shield size={16} className="mr-2 text-green-400" />
                    Verified Expertise
                </div>
                <div className="flex items-center">
                    <Zap size={16} className="mr-2 text-yellow-400" />
                    Fast Matching
                </div>
                <div className="flex items-center">
                    <Globe size={16} className="mr-2 text-blue-400" />
                    Global Talent Pool
                </div>
                </div>
            </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-1/4 right-10 w-20 h-20 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full opacity-5 animate-bounce"></div>
            <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-gradient-to-r from-[#fe5182] to-[#81004D] rounded-full opacity-5 animate-pulse"></div>
        </section>
    </div>
  )
}

export default SeFiveSix
