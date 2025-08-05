import { businessBenefits, ecosystemTools, marketAdoptionData, SecFiveStats, successStories, technicalAdvantages } from '@/components/coms/Data';
import React from 'react';

const SecFive: React.FC = () => {
  return (
    <>
        <section className="relative py-16 bg-black overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 pointer-events-none" />
            
            {/* Content Container */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* 2️⃣ Headline Block */}
            <div className='transition-all duration-1000 animate-fadeIn'>
                <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">
                What is <span className="h1-high-text">React.js?</span>
                </h2>
                <p className="mt-4 text-center max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300">
                Discover the fundamentals of the world's most dominant frontend library and why it's the framework of choice for modern web and mobile development.
                </p>
            </div>

            {/* 3️⃣ Intro Section: React Fundamentals */}
            <div className='grid md:grid-cols-2 gap-10 items-start mt-12 transition-all duration-1000 delay-200 animate-fadeIn'>
                {/* Left: Description */}
                <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Understanding React.js Fundamentals
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    React.js is a powerful JavaScript library primarily used to build interactive and dynamic UIs, especially for SPAs. Built and maintained by Meta, React's Virtual DOM and component-based architecture make it a high-performance, developer-friendly choice.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                    With reusable components, fast rendering, and flexible integration, React allows dev teams to ship modern, scalable applications with ease.
                </p>
                </div>

                {/* Right: Core Feature List (with icons optional) */}
                <div className="space-y-4">
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                    <li><strong className="text-gray-800 dark:text-white">Virtual DOM:</strong> Optimized UI rendering</li>
                    <li><strong className="text-gray-800 dark:text-white">Component Architecture:</strong> Modular, testable, reusable</li>
                    <li><strong className="text-gray-800 dark:text-white">JSX:</strong> Write UI with readable syntax</li>
                    <li><strong className="text-gray-800 dark:text-white">Hooks:</strong> Simplify complex logic in functional components</li>
                </ul>
                </div>
            </div>

            {/* 4️⃣ Brief History Section */}
            <div className='mt-16 transition-all duration-1000 delay-400 animate-fadeIn'>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Brief History of React
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-6">
                <li><strong className="text-gray-800 dark:text-white">2013:</strong> Open-source release</li>
                <li><strong className="text-gray-800 dark:text-white">2015:</strong> Launch of React Native</li>
                <li><strong className="text-gray-800 dark:text-white">2018:</strong> React 16.x & the introduction of Hooks</li>
                <li><strong className="text-gray-800 dark:text-white">2022–2025:</strong> React 18+, with concurrent rendering, SSR streaming, and Server Components</li>
                </ul>
            </div>

            {/* 5️⃣ Comparison Cards: React vs Others */}
            <div className='mt-16 transition-all duration-1000 delay-600 animate-fadeIn'>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
                React vs Other Technologies
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h4 className="text-lg font-semibold text-white mb-2">React vs Angular</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                    Angular is a full-fledged framework. React is modular and lightweight, offering more flexibility through third-party integration.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h4 className="text-lg font-semibold text-white mb-2">React vs Vue</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                    Vue is beginner-friendly, but React leads in scalability, job demand, and enterprise adoption.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h4 className="text-lg font-semibold text-white mb-2">React vs Vanilla JS</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                    React makes UI state management, component reuse, and DOM updates easier and faster compared to raw JavaScript.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="p-6 bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h4 className="text-lg font-semibold text-white mb-2">React Native</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                    Build cross-platform mobile apps using the same React components, saving time and cost.
                    </p>
                </div>
                </div>
            </div>

            {/* 6️⃣ Core Concepts Every Business Should Know */}
            <div className='mt-16 transition-all duration-1000 delay-800 animate-fadeIn'>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
                Core React Concepts Every Business Should Know
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300 space-y-2 sm:space-y-0">
                <p className='bg-gray-800 border border-gray-700 rounded-lg py-4 px-4'><span className='text-lg block mb-2 font-bold'>Components & JSX</span> JSX &#40; JavaScript XML &#41; enables developers to write intuitive UI components directly in JavaScript.</p>
                <p className='bg-gray-800 border border-gray-700 rounded-lg py-4 px-4'><span className='text-lg block mb-2 font-bold'>State & Props</span> Essential concepts to manage dynamic data within components.</p>
                <p className='bg-gray-800 border border-gray-700 rounded-lg py-4 px-4'><span className='text-lg block mb-2 font-bold'>React Hooks</span> Modern patterns that allow stateful logic within functional components, simplifying complex tasks.</p>
                <p className='bg-gray-800 border border-gray-700 rounded-lg py-4 px-4'><span className='text-lg block mb-2 font-bold'>Server-Side Rendering &#40; SSR &#41;</span> Improves SEO and user experience, with frameworks like Next.js facilitating SSR with React.</p>
                </div>
            </div>

            {/* 7️⃣ Call-To-Action (CTA) */}
            <div className='mt-16 text-center transition-all duration-1000 delay-1000 animate-fadeIn'>
                <button className="px-6 py-3 font-medium text-white rounded-xl bg-gradient-to-r from-[#81004D] to-[#fe5182] transition-transform hover:scale-105 shadow-lg hover:shadow-xl">
                Learn How to Hire Top React Talent
                </button>
            </div>

            {/* Additional Interactive Element - Feature Highlights */}
            <div className='mt-16 transition-all duration-1000 delay-1200 animate-fadeIn'>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                    Why Leading Companies Choose React
                </h4>
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                    <div className="space-y-2">
                    <div className="text-3xl font-bold text-[#DB0083]">68%</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">of frontend jobs require React</p>
                    </div>
                    <div className="space-y-2">
                    <div className="text-3xl font-bold text-[#DB0083]">89%</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">of Fortune 500 companies use React</p>
                    </div>
                    <div className="space-y-2">
                    <div className="text-3xl font-bold text-[#DB0083]">220k+</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">GitHub stars and growing</p>
                    </div>
                </div>
                </div>
            </div>

            </div>
        </section>
        
        <section className="bg-black text-white">
        {/* Main Title */}
        <div className="container mx-auto px-6 lg:px-12 py-12">
            <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                Why is React.js So Popular?
                </span>
            </h1>
            </div>

            {/* Market Adoption and Industry Usage */}
            <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                Market Adoption and Industry Usage
                </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
                <p>
                React has become a default choice for frontend development in 2025, especially within companies striving for exceptional digital experiences. Many Fortune 500 corporations—including Netflix, Airbnb, Instagram, WhatsApp, Uber, and Dropbox—actively use React, demonstrating its scalability, reliability, and robustness.
                </p>
                <p>
                Startups also widely embrace React for its flexibility, reduced learning curve, extensive ecosystem, and active community, facilitating rapid development and iteration cycles.
                </p>
                <p>
                According to the State of JS 2025 report, React ranks #1 among JavaScript frameworks and libraries, reflecting developer preference and industry demand. React developers consistently receive above-average salaries and have higher-than-average job satisfaction ratings due to React's developer-friendly environment and vibrant community support.
                </p>
            </div>

            {/* Companies Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {marketAdoptionData.map((item, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {item.company}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
                ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {SecFiveStats.map((stat, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent mb-2">
                    {stat.value}
                    </div>
                    <p className="text-gray-300">{stat.label}</p>
                </div>
                ))}
            </div>
            </div>

            {/* Gradient Divider */}
            <div className="w-full h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182] mb-20"></div>

            {/* Technical Advantages */}
            <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                Technical Advantages
                </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {technicalAdvantages.map((advantage, index) => (
                <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-4">{advantage.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {advantage.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
                </div>
                ))}
            </div>
            </div>

            {/* Business Benefits */}
            <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                Business Benefits of React
                </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {businessBenefits.map((benefit, index) => (
                <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
                ))}
            </div>
            </div>

            {/* Community and Ecosystem Strength */}
            <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                Community and Ecosystem Strength
                </span>
            </h2>
            <div className="text-lg text-gray-300 leading-relaxed mb-8">
                <p>React's vibrant ecosystem provides extensive tools and libraries:</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {ecosystemTools.map((category, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                    <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {category.category}
                    </h3>
                    <ul className="space-y-2">
                    {category.tools.map((tool, toolIndex) => (
                        <li key={toolIndex} className="text-gray-300 text-sm">{tool}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            </div>

            {/* Real-World Success Stories */}
            <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                Real-World Success Stories
                </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {successStories.map((story, index) => (
                <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {story.company}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{story.achievement}</p>
                </div>
                ))}
            </div>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-8 py-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
                Ready to Build with
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent block lg:inline lg:ml-4">
                React?
                </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join millions of developers building the future of web applications with React's powerful ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#81004D] to-[#fe5182] px-10 py-4 rounded-lg font-bold text-lg text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                Get Started Today
                </button>
                <button className="border border-gray-600 px-10 py-4 rounded-lg font-semibold text-lg text-white hover:border-gray-400 transition-colors duration-300">
                View Documentation
                </button>
            </div>
            </div>
        </div>
        </section>
    </>
  );
};

export default SecFive;