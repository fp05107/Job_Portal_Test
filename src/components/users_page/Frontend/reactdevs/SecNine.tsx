import { agreementTypes, behavioralInterviewComponents, communicationTools, onboardingPractices, performanceManagement, preHiringPreparation, sampleTechnicalQuestions, SecNineHiringSteps, technicalInterviewStructure } from '@/components/coms/Data';
import React from 'react';

const SecNine: React.FC = () => {

  return (
    <section className="bg-black text-white">
      {/* Main Header */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            How to Hire 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">React.js Developers</span> Traditionally?
          </h1>
        </div>

        {/* Pre-Hiring Preparation */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Pre-Hiring</span> Preparation
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {preHiringPreparation.map((item, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {item.title}
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182] mb-20"></div>

        {/* Step-by-Step Hiring Process */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Step-by-Step</span> Hiring Process
          </h2>
          
          <div className="space-y-8">
            {SecNineHiringSteps.map((step, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start mb-6">
                  <div className="flex items-center mb-4 lg:mb-0 lg:mr-8">
                    <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white px-4 py-2 rounded-full text-sm font-bold mr-4">
                      {step.timeframe}
                    </span>
                    <h3 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                        {step.step}
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {step.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300">{task}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Process Deep Dive */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Interview Process</span> Deep Dive
          </h2>
          
          {/* Technical Interview Structure */}
          <h3 className="text-2xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Technical Interview</span> Structure
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {technicalInterviewStructure.map((item, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <h4 className="text-lg font-bold mb-3">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {item.component}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">({item.duration})</span>
                </h4>
                <p className="text-gray-300 text-sm">{item.purpose}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Sample Technical Questions */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Sample Technical</span> Questions
              </h3>
              <div className="space-y-4">
                {sampleTechnicalQuestions.map((question, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <p className="text-gray-300">{question}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Behavioral Interview Components */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Behavioral Interview</span> Components
              </h3>
              <div className="space-y-4">
                {behavioralInterviewComponents.map((component, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <p className="text-gray-300">{component}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contract and Agreement Setup */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Contract and Agreement</span> Setup
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {agreementTypes.map((agreement, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {agreement.title}
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{agreement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Onboarding Best Practices */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Onboarding</span> Best Practices
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {onboardingPractices.map((practice, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">
                    {practice.title}
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Managing Remote React Developers */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            Managing 
            <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Remote React</span> Developers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Communication and Collaboration</span> Tools
              </h3>
              <div className="space-y-4">
                {communicationTools.map((tool, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <p className="text-gray-300">{tool}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Performance Monitoring</span> and Management
              </h3>
              <div className="space-y-4">
                {performanceManagement.map((item, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section with Gradient Background */}
        <div className="bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-2xl p-12 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Ready to Streamline Your Hiring Process?
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto opacity-90">
            While traditional hiring gives you full control, consider platforms like TopSkyll for pre-vetted talent that can accelerate your hiring timeline and reduce risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg">
              Compare Hiring Methods
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-lg font-semibold text-lg text-white hover:bg-white hover:text-gray-900 transition-all duration-300">
              Start Traditional Hiring
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecNine;