import React from 'react'
import SkillsData from '@/jsonData/SkillsData.json'
import HireDevCTA from '@/assets/images/HireDevCTA.webp';
import { Link } from 'wouter';

export default function HireDevelopers() {
    const skillsData = SkillsData;

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none" />
            <div className="absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10">
                {/* Hero Section */}
                <div className="text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-2xl sm:text-3xl/[3.5rem] md:text-4xl/[3.6rem] lg:text-5xl/[4rem] xl:text-5.2xl/[5.4rem] font-bold mb-4 sm:mb-6 text-[#080106] dark:text-white">
                            Hire Pre-Vetted&nbsp;
                            <br className="hidden sm:block" />
                            <span className="sm:inline-block">
                                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                                    Frontend & Backend Developers
                                </span>
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-2 sm:px-0">
                            Instantly access top remote talent across React, Angular, Node, Python, and more.
                            Trusted by startups and enterprises for reliable, fast, and skill-matched hiring.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
                            <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                                <span>🔍</span>
                                <span>Hire Developers</span>
                            </button>
                            <button className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-gray-800 text-[#080106] dark:text-white border-2 border-[#e9e9e9] dark:border-[#81004d4f] font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2">
                                <span>👥</span>
                                <span>Join as Developer</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
                    {skillsData.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-4 md:space-y-6">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#080106] dark:text-white text-center sm:text-left">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <Link
                                        key={skillIndex}
                                        href={`/skill-details/${skill.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="p-3 bg-white dark:bg-gray-800 border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-lg text-[#080106] dark:text-white text-sm sm:text-base transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-500/10 hover:border-[#fe5182]/30 text-center"
                                    >
                                        {skill}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] text-[#080106] dark:text-white p-10 py-16 mt-[7rem] relative overflow-hidden rounded-3xl">
                    <div className="flex flex-col md:flex-row pl-[2rem] items-center justify-between gap-10">
                        {/* Text Section */}
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl/[4.6rem] font-bold mb-3">
                                Let's Build Your <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Dream Team</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg pt-4 max-w-md">
                                Hire top frontend & backend developers who are ready to deliver — fast, flexible, and verified.
                            </p>

                            <ul className="list-none space-y-3 text-md text-gray-600 dark:text-gray-300 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full"></div>
                                    100% Pre-screened
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full"></div>
                                    Hire in 48 hours
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full"></div>
                                    Project-fit matching
                                </li>
                            </ul>

                            <button className="px-10 py-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 text-[1.2rem] flex items-center gap-2 group">
                                <span>🚀</span>
                                <span>Get Started Now</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>

                        {/* Right Side with Developer Image */}
                        <div className="flex-1 relative flex justify-center items-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#81004D]/20 to-[#fe5182]/20 rounded-full blur-3xl"></div>
                                <img
                                    src={HireDevCTA}
                                    alt="Developer"
                                    className="w-[30rem] h-[30rem] z-10 relative rounded-full border-4 border-white/20 dark:border-gray-700/20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}