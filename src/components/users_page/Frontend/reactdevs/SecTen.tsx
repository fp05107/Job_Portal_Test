import { hiringData } from '@/components/coms/Data';
import React from 'react';

const SecTen: React.FC = () => {

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent leading-tight">
            {hiringData.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300">
            {hiringData.subtitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {hiringData.intro}
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-20">
          {hiringData.sections.map((section, index) => (
            <div key={index} className="relative">
              {/* Section Title */}
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                  {section.title}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182] mx-auto rounded-full"></div>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Traditional Method */}
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                  <div className="mb-6">
                    <h4 className="text-xl md:text-2xl font-bold text-red-400 mb-2">
                      {section.traditional.title}
                    </h4>
                    {section.traditional.subtitle && (
                      <p className="text-lg text-gray-400 font-medium">
                        {section.traditional.subtitle}
                      </p>
                    )}
                  </div>
                  <ul className="space-y-4">
                    {section.traditional.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TopSkyll Solution */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-[#81004D] hover:border-[#fe5182] transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#81004D] to-[#fe5182] opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="mb-6">
                      <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent mb-2">
                        {section.topskyll.title}
                      </h4>
                      {section.topskyll.subtitle && (
                        <p className="text-lg text-gray-300 font-medium">
                          {section.topskyll.subtitle}
                        </p>
                      )}
                    </div>
                    <ul className="space-y-4">
                      {section.topskyll.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-gray-200 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Comparison Section */}
              {section.comparison && (
                <div className="mt-12 bg-gray-900 rounded-2xl p-8 border border-gray-800">
                  <h5 className="text-xl font-bold text-center mb-6 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    Comparison:
                  </h5>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-red-900 bg-opacity-20 rounded-xl border border-red-800">
                      <p className="text-red-300 font-medium">{section.comparison.traditional}</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-opacity-20 rounded-xl border border-[#fe5182]">
                      <p className="text-white font-medium">{section.comparison.topskyll}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#81004D] to-[#fe5182] p-1 rounded-2xl inline-block">
            <div className="bg-black rounded-xl px-12 py-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                Ready to Transform Your Hiring Process?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Experience the TopSkyll advantage and hire top React developers in just 48 hours
              </p>
              <button className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-[#fe5182]/25 transform hover:scale-105 transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecTen;