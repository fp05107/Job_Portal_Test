import { advancedPatterns, communicationSkills, essentialSkills, experienceLevels, integrationSkills, modernPractices, performanceSkills, projectManagementSkills, toolingSkills } from '@/components/coms/Data';
import React from 'react';

const SecSeven: React.FC = () => {

  return (
    <section className="bg-black text-white">
      {/* Main Header */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Understanding React 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent"> Developer Capabilities</span>
          </h1>
        </div>

        {/* Essential Technical Skills */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Essential Technical</span> Skills
          </h2>
          
          <h3 className="text-2xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Frontend Development</span> Expertise
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {essentialSkills.map((skill, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {skill.title}
                  </span>
                </h4>
                <p className="text-gray-300 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Development Practices */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Modern Development</span> Practices
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {modernPractices.map((practice, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {practice.title}
                  </span>
                </h4>
                <p className="text-gray-300 leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Optimization Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Performance Optimization</span> Skills
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceSkills.map((skill, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-bold mb-3">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {skill.title}
                  </span>
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182] mb-20"></div>

        {/* Specialized React Capabilities */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            Specialized React 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Capabilities</span>
          </h2>
          
          <h3 className="text-2xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Advanced React</span> Patterns
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {advancedPatterns.map((pattern, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {pattern.title}
                  </span>
                </h4>
                <p className="text-gray-300 leading-relaxed">{pattern.description}</p>
              </div>
            ))}
          </div>

          {/* Integration and API Skills */}
          <h3 className="text-2xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Integration and API</span> Skills
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {integrationSkills.map((skill, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {skill.title}
                  </span>
                </h4>
                <p className="text-gray-300 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>

          {/* Tooling and Build Process */}
          <h3 className="text-2xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Tooling and Build</span> Process
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolingSkills.map((skill, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-bold mb-3">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {skill.title}
                  </span>
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills and Business Acumen */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            Soft Skills and 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Business Acumen</span>
          </h2>
          
          <h3 className="text-2xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Communication and</span> Collaboration
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {communicationSkills.map((skill, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {skill.title}
                  </span>
                </h4>
                <p className="text-gray-300 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>

          {/* Project Management Understanding */}
          <h3 className="text-2xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Project Management</span> Understanding
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projectManagementSkills.map((skill, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {skill.title}
                  </span>
                </h4>
                <p className="text-gray-300 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Levels and Specializations */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            Experience Levels and 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Specializations</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {experienceLevels.map((level, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {level.level}
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{level.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 py-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Build Your React 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Development Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find skilled React developers with the expertise and capabilities to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#81004D] to-[#fe5182] px-10 py-4 rounded-lg font-bold text-lg text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
              Hire React Developers
            </button>
            <button className="border border-gray-600 px-10 py-4 rounded-lg font-semibold text-lg text-white hover:border-gray-400 transition-colors duration-300">
              View Portfolios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecSeven;