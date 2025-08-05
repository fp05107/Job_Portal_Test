import { characteristicsMetrics, communicationSkillsTwo, integrationPrinciples, learningAdaptation, problemSolvingSkills, professionalDevelopment } from '@/components/coms/Data';
import React from 'react';

const SecThirteen: React.FC = () => {

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              Soft Skills & Human Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            What truly sets elite React developers apart is how they integrate technical excellence with professional 
            quality and human skills. They understand that great software development is ultimately about solving 
            human problems through technology.
          </p>
          
          {/* Characteristics Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {characteristicsMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent mb-2">
                  {metric.metric}
                </div>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Problem-Solving Abilities Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              Problem-Solving Abilities: Strategic Thinking in Action
            </span>
          </h3>
          
          <div className="space-y-8">
            {problemSolvingSkills.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h4 className="text-2xl font-bold text-center mb-8 text-gray-200">
                  {category.category}
                </h4>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-[#81004D] to-[#fe5182] opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
                      <h5 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent relative z-10">
                        {skill.title}
                      </h5>
                      <ul className="space-y-3 relative z-10">
                        {skill.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start text-sm">
                            <span className="text-blue-400 mr-3 mt-1">◆</span>
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

        {/* Communication and Leadership Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              Communication and Leadership: Bridging Technical and Business Worlds
            </span>
          </h3>
          
          <div className="space-y-12">
            {communicationSkillsTwo.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h4 className="text-2xl font-bold text-center mb-8 text-gray-200">
                  {category.category}
                </h4>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {category.areas.map((area, areaIndex) => (
                    <div key={areaIndex} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-purple-500/20 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182]"></div>
                      <h5 className="text-xl font-semibold mb-6 text-gray-200 relative z-10">
                        {area.title}
                      </h5>
                      <ul className="space-y-4 relative z-10">
                        {area.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start text-sm">
                            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white rounded w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
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

        {/* Continuous Learning Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              Continuous Learning and Adaptation: Staying Ahead of the Curve
            </span>
          </h3>
          
          <div className="space-y-8">
            {learningAdaptation.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h4 className="text-2xl font-bold text-center mb-8 text-gray-200">
                  {category.category}
                </h4>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-r from-[#81004D] to-[#fe5182] opacity-10 rounded-full translate-y-10 -translate-x-10"></div>
                      <h5 className="text-lg font-semibold mb-4 text-gray-200 relative z-10">
                        {skill.title}
                      </h5>
                      <ul className="space-y-3 relative z-10">
                        {skill.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start text-sm">
                            <span className="text-green-400 mr-3 mt-1">▶</span>
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

        {/* Professional Development Commitment */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              Professional Development Commitment
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalDevelopment.map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-6 text-center border border-gray-700 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                  {item.activity}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration of Excellence */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              The Integration of Excellence: Where Technical Meets Human
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {integrationPrinciples.map((principle, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-center">
                <div className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  ★
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-200">
                  {principle.principle}
                </h4>
                <p className="text-gray-400 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center border border-purple-500/20">
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              These developers don't just write code—they <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent font-semibold">architect solutions</span>, 
              <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent font-semibold"> build relationships</span>, and 
              <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent font-semibold"> drive innovation</span>. 
              Their value extends far beyond individual contributions to encompass their ability to make everyone around them more effective.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
              Find React Developers Who Combine Technical & Human Excellence
            </span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            When you're looking to hire React developers, these soft skills and characteristics distinguish 
            truly exceptional talent from the merely competent. Elite developers are strategic partners 
            who can transform your technical capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white font-semibold py-4 px-8 rounded-full text-lg hover:opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform">
              Connect with Elite Developers
            </button>
            <button className="border-2 border-pink-500 text-pink-500 font-semibold py-4 px-8 rounded-full text-lg hover:bg-pink-500 hover:text-white transition-all duration-300">
              Assess Developer Skills
            </button>
          </div>
          <p className="text-gray-400 mt-6">
            Experience the difference that exceptional human skills make in technical delivery
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecThirteen;