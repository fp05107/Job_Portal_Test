import { comparisonData, comparisonDataTwo, decisionMatrix, finalComparison, hybridApproaches, successMetrics } from '@/components/coms/Data';
import React from 'react';

const SecEleven: React.FC = () => {

  return (
    <>
        <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                TopSkyll vs Traditional Hiring
                </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The comparison is decisive: while traditional hiring methods require significant time investment, 
                carry substantial risks, and often result in uncertain outcomes, TopSkyll delivers guaranteed 
                excellence with minimal effort and maximum results.
            </p>
            </div>

            {/* Comparison Grid */}
            <div className="space-y-16 mb-20">
            {comparisonData.map((comparison, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-8">
                {/* Traditional Method */}
                <div className="bg-gray-900 rounded-2xl p-8 border border-red-500/20">
                    <div className="flex items-center mb-6">
                    <span className="text-red-500 text-2xl mr-3">{comparison.traditional.icon}</span>
                    <h3 className="text-2xl font-bold text-red-400">{comparison.category}</h3>
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-200">
                    {comparison.traditional.title}
                    </h4>
                    <ul className="space-y-3">
                    {comparison.traditional.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        <span className="text-gray-300">{point}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                {/* TopSkyll Method */}
                <div className="bg-gray-900 rounded-2xl p-8 border border-green-500/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-[#81004D] to-[#fe5182] opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="flex items-center mb-6 relative z-10">
                    <span className="text-green-500 text-2xl mr-3">{comparison.topskyll.icon}</span>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                        TopSkyll Solution
                    </h3>
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-200 relative z-10">
                    {comparison.topskyll.title}
                    </h4>
                    <ul className="space-y-3 relative z-10">
                    {comparison.topskyll.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span className="text-gray-300">{point}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            ))}
            </div>

            {/* Success Metrics */}
            <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                Success Metrics: Measurable Advantages
                </span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {successMetrics.map((metric, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700 hover:border-pink-500/50 transition-colors">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent mb-2">
                    {metric.metric}
                    </div>
                    <p className="text-gray-300 text-sm">{metric.description}</p>
                </div>
                ))}
            </div>
            </div>

            {/* Final Comparison */}
            <div className="bg-gray-900 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                The Clear Choice: TopSkyll Advantage
                </span>
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Traditional Hiring */}
                <div className="text-center">
                <h4 className="text-2xl font-semibold text-red-400 mb-6">Traditional Hiring</h4>
                <div className="space-y-4">
                    {finalComparison.traditional.map((item, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <span className="text-red-500 text-xl mr-3">✗</span>
                        <span className="text-gray-300">{item}</span>
                    </div>
                    ))}
                </div>
                </div>

                {/* TopSkyll Solution */}
                <div className="text-center">
                <h4 className="text-2xl font-semibold bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent mb-6">
                    TopSkyll Solution
                </h4>
                <div className="space-y-4">
                    {finalComparison.topskyll.map((item, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span className="text-gray-300">{item}</span>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                Ready to Experience the TopSkyll Difference?
                </span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stop wasting valuable time and resources on traditional hiring methods that deliver uncertain results. 
                Join hundreds of successful companies who have revolutionized their React development capabilities 
                through TopSkyll's proven approach.
            </p>
            <button className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white font-semibold py-4 px-8 rounded-full text-lg hover:opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform">
                Schedule Your Consultation Today
            </button>
            <p className="text-gray-400 mt-4">
                Discover how easy hiring exceptional React developers can be.
            </p>
            </div>

            {/* Decorative gradient line */}
            <div className="mt-16 h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full mx-auto max-w-2xl"></div>
        </div>
        </section>

        <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    React.js Freelance vs Full-Time Developers
                    </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Making the right choice between freelance and full-time React developers depends on your project needs, 
                    timeline, budget, and long-term goals. Let's explore both options comprehensively.
                </p>
                </div>

                {/* Main Comparison */}
                <div className="space-y-20 mb-20">
                {comparisonDataTwo.map((developer, index) => (
                    <div key={index} className="space-y-8">
                    {/* Category Header */}
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                            {developer.category}
                        </span>
                        </h3>
                    </div>

                    {/* Advantages and Disadvantages Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        {/* Advantages */}
                        <div className="bg-gray-900 rounded-2xl p-8 border border-green-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-[#81004D] to-[#fe5182] opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="flex items-center mb-6 relative z-10">
                            <span className="text-green-500 text-2xl mr-3">{developer.advantages.icon}</span>
                            <h4 className="text-2xl font-bold text-green-400">{developer.advantages.title}</h4>
                        </div>
                        <ul className="space-y-4 relative z-10">
                            {developer.advantages.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1 text-sm">●</span>
                                <span className="text-gray-300 leading-relaxed">{point}</span>
                            </li>
                            ))}
                        </ul>
                        </div>

                        {/* Disadvantages */}
                        <div className="bg-gray-900 rounded-2xl p-8 border border-red-500/20">
                        <div className="flex items-center mb-6">
                            <span className="text-red-500 text-2xl mr-3">{developer.disadvantages.icon}</span>
                            <h4 className="text-2xl font-bold text-red-400">{developer.disadvantages.title}</h4>
                        </div>
                        <ul className="space-y-4">
                            {developer.disadvantages.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                                <span className="text-red-500 mr-3 mt-1 text-sm">●</span>
                                <span className="text-gray-300 leading-relaxed">{point}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>

                    {/* When to Choose */}
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-purple-500/20">
                        <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                        When to Choose {developer.category}
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                        {developer.whenToChoose.map((scenario, scenarioIndex) => (
                            <div key={scenarioIndex} className="flex items-start">
                            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                                {scenarioIndex + 1}
                            </span>
                            <span className="text-gray-300">{scenario}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                ))}
                </div>

                {/* Decision Matrix */}
                <div className="mb-20">
                <h3 className="text-3xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    Decision Matrix: Key Factors Comparison
                    </span>
                </h3>
                <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700">
                    <div className="grid grid-cols-3 bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white font-semibold">
                    <div className="p-4 text-center">Factor</div>
                    <div className="p-4 text-center border-l border-white/20">Freelance</div>
                    <div className="p-4 text-center border-l border-white/20">Full-Time</div>
                    </div>
                    {decisionMatrix.map((row, index) => (
                    <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}`}>
                        <div className="p-4 font-semibold text-gray-200">{row.factor}</div>
                        <div className="p-4 text-gray-300 border-l border-gray-700">{row.freelance}</div>
                        <div className="p-4 text-gray-300 border-l border-gray-700">{row.fulltime}</div>
                    </div>
                    ))}
                </div>
                </div>

                {/* Hybrid Approaches */}
                <div className="mb-16">
                <h3 className="text-3xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    Hybrid Approaches: Best of Both Worlds
                    </span>
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {hybridApproaches.map((approach, index) => (
                    <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                        {index + 1}
                        </div>
                        <h4 className="text-lg font-semibold mb-3 text-gray-200">{approach.approach}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{approach.description}</p>
                    </div>
                    ))}
                </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12">
                <h3 className="text-3xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    Need Help Making the Right Choice?
                    </span>
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Whether you need specialized freelance expertise or dedicated full-time talent, 
                    we can help you find the perfect React developers for your specific needs and project requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white font-semibold py-4 px-8 rounded-full text-lg hover:opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform">
                    Find Freelance Developers
                    </button>
                    <button className="border-2 border-pink-500 text-pink-500 font-semibold py-4 px-8 rounded-full text-lg hover:bg-pink-500 hover:text-white transition-all duration-300">
                    Hire Full-Time Developers
                    </button>
                </div>
                </div>

                {/* Decorative gradient line */}
                <div className="mt-16 h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full mx-auto max-w-2xl"></div>
            </div>
        </section>
    
    </>
    
  );
};

export default SecEleven;