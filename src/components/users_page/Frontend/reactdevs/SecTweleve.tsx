import { industryRecognition, modernEcosystem, portfolioQuality, qualityMetricsTwo, technicalExcellence } from '@/components/coms/Data';
import React from 'react';

const SecTwelve: React.FC = () => {

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              Top Quality React Developers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Elite React.js developers represent the top 5% of technical talent. These professionals don't just write 
            functional code—they architect scalable solutions, drive innovation, and deliver transformational business results.
          </p>
          
          {/* Quality Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {qualityMetricsTwo.map((metric, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent mb-2">
                  {metric.metric}
                </div>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Excellence Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              Technical Excellence Indicators
            </span>
          </h3>
          
          <div className="space-y-12">
            {technicalExcellence.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h4 className="text-2xl font-bold text-center mb-8 text-gray-200">
                  {category.category}
                </h4>
                
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-r from-[#81004D] to-[#fe5182] opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
                      <h5 className="text-lg font-semibold mb-4 text-gray-200 relative z-10">
                        {skill.title}
                      </h5>
                      <ul className="space-y-3 relative z-10">
                        {skill.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start text-sm">
                            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                              ✓
                            </span>
                            <span className="text-gray-300 leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Development Ecosystem */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              Modern Development Ecosystem Mastery
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {modernEcosystem.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-purple-500/20 text-center">
                <div className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                  {item.skill}
                </h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Quality Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              Portfolio and Project Quality Excellence
            </span>
          </h3>
          
          <div className="space-y-8">
            {portfolioQuality.map((category, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
                <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                  {category.category}
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.indicators.map((indicator, indicatorIndex) => (
                    <div key={indicatorIndex} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">●</span>
                      <span className="text-gray-300">{indicator}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Recognition Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              Industry Recognition and Community Leadership
            </span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {industryRecognition.map((category, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#81004D] to-[#fe5182]"></div>
                <h4 className="text-xl font-bold mb-6 text-gray-200">
                  {category.category}
                </h4>
                <ul className="space-y-4">
                  {category.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-start text-sm">
                      <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white rounded w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-300 leading-relaxed">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              Ready to Work with Elite React Developers?
            </span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't settle for average when you can access the top 5% of React talent. Our elite developers 
            bring the technical excellence, industry recognition, and proven track record your projects deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white font-semibold py-4 px-8 rounded-full text-lg hover:opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform">
              Find Elite React Developers
            </button>
            <button className="border-2 border-pink-500 text-pink-500 font-semibold py-4 px-8 rounded-full text-lg hover:bg-pink-500 hover:text-white transition-all duration-300">
              View Developer Portfolios
            </button>
          </div>
          <p className="text-gray-400 mt-6">
            Join hundreds of successful companies who've transformed their development capabilities
          </p>
        </div>

        {/* Decorative gradient line */}
        <div className="mt-16 h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full mx-auto max-w-2xl"></div>
      </div>
    </section>
  );
};

export default SecTwelve;