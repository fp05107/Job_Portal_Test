import { evaluationCriteria, interviewBestPractices, jobDescriptionElements, professionalNetworks, projectRequirements, screeningQuestions, talentAttractors, topSkyllAdvantages } from '@/components/coms/Data';
import React from 'react';

const SecEight: React.FC = () => {

  return (
    <section className="bg-black text-white">
      {/* Main Header */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            How to Find the Right 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent"> React.js Developers</span> for Your Project
          </h1>
        </div>

        {/* Defining Your Project Requirements */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            Defining Your 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Project Requirements</span>
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {projectRequirements.map((requirement, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {requirement.title}
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{requirement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182] mb-20"></div>

        {/* Where to Find Top Quality React.js Developers */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            Where to Find 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Top Quality</span> React.js Developers
          </h2>
          
          <div className="text-lg text-gray-300 leading-relaxed mb-12">
            <p className="mb-6">
              Finding exceptional React.js developers can be challenging given the competitive landscape and the growing demand for skilled professionals. While there are many places to search for talent, TopSkyll stands out as a specialized platform dedicated to connecting companies with the top Freelance React developers globally. Here's a detailed overview of the best ways to find and hire high-quality React talent—with a spotlight on why TopSkyll should be your go-to resource.
            </p>
          </div>

          {/* Professional Networks and Platforms */}
          <h3 className="text-2xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Professional Networks</span> and Platforms
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {professionalNetworks.map((network, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <h4 className="text-lg font-bold mb-3">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {network.platform}
                  </span>
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">{network.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 p-6 rounded-xl mb-12 border-l-4 border-gradient-to-r from-[#81004D] to-[#fe5182]">
            <p className="text-gray-300 italic">
              While these channels are valuable for preliminary scouting, they often require significant time investment and effort to identify truly top-tier talent, and they lack a rigorous vetting process.
            </p>
          </div>

          {/* Specialized Hiring Platforms — Why Choose TopSkyll? */}
          <h3 className="text-2xl font-bold mb-6 text-white">
            Specialized Hiring Platforms — Why Choose 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">TopSkyll?</span>
          </h3>
          
          <div className="text-lg text-gray-300 leading-relaxed mb-8">
            <p>
              TopSkyll is a purpose-built platform focused exclusively on sourcing, vetting, and connecting businesses with the best React.js developers worldwide. Here's why TopSkyll outperforms general freelance marketplaces and other hiring platforms:
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {topSkyllAdvantages.map((advantage, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <div className="flex items-start mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white px-3 py-1 rounded-full text-sm font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                  <h4 className="text-lg font-bold">
                    <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                      {advantage.title}
                    </span>
                  </h4>
                </div>
                <p className="text-gray-300 leading-relaxed ml-12">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Evaluation Criteria for Your Specific Needs */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Evaluation Criteria</span> for Your Specific Needs
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {evaluationCriteria.map((criteria, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {criteria.title}
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Creating Effective Job Descriptions */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            Creating 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Effective Job Descriptions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Essential Elements</span> to Include
              </h3>
              <div className="space-y-4">
                {jobDescriptionElements.map((element, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <p className="text-gray-300">{element}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Attracting</span> Top Talent
              </h3>
              <div className="space-y-4">
                {talentAttractors.map((attractor, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <p className="text-gray-300">{attractor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Screening and Interview Process */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Screening and Interview</span> Process
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Initial Screening</span> Questions
              </h3>
              <div className="space-y-4">
                {screeningQuestions.map((question, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <p className="text-gray-300">{question}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Technical Interview</span> Best Practices
              </h3>
              <div className="space-y-4">
                {interviewBestPractices.map((practice, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <p className="text-gray-300">{practice}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section with Gradient Background */}
        <div className="bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-2xl p-12 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Ready to Find Your Perfect React Developer?
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto opacity-90">
            Connect with pre-vetted, elite React.js developers who can bring your vision to life. Start your search today with TopSkyll's specialized platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg">
              Get Started with TopSkyll
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-lg font-semibold text-lg text-white hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Developer Profiles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecEight;