import { coreFeatures, developerExperience, integrationCapabilities, performanceFeatures, SecSixModernFeatures } from '@/components/coms/Data';
import React from 'react';

const SecSix: React.FC = () => {

  return (
    <section className="text-white">
      {/* Main Header */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            React.js 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent"> Key Highlights</span> and Features
          </h1>
        </div>

        {/* Core Features That Matter for Business */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            Core Features That Matter for 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent"> Business</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {feature.title}
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182] mb-20"></div>

        {/* Modern React Features (2024-2025) */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            Modern React Features 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">(2024-2025)</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {SecSixModernFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {feature.title}
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Optimization Features */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Performance Optimization</span> Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h3 className="text-lg font-bold mb-3">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {feature.title}
                  </span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Experience Enhancements */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Developer Experience</span> Enhancements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {developerExperience.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {feature.title}
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Capabilities */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Integration</span> Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h3 className="text-lg font-bold mb-3">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {capability.title}
                  </span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 py-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Experience React's 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent"> Power</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Leverage these cutting-edge features to build exceptional applications that deliver outstanding performance and user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#81004D] to-[#fe5182] px-10 py-4 rounded-lg font-bold text-lg text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
              Explore Features
            </button>
            <button className="border border-gray-600 px-10 py-4 rounded-lg font-semibold text-lg text-white hover:border-gray-400 transition-colors duration-300">
              Start Building
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecSix;