import React from 'react'
import { qualityAssurance, qualityMetrics, screeningCriteria, slides, stages } from '../../../coms/Data'
import { ArrowRight, Award, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import FloatingDots from '../../../coms/FloatingDots'

interface SethreefourProps {
  currentSlideData: any;
  activeStage: number;
  nextSlide: () => void;
  prevSlide: () => void;
  currentSlide: number;
  goToSlide: any;
}

const SeThreeFour: React.FC<SethreefourProps> = ({ currentSlideData, activeStage, nextSlide, prevSlide, currentSlide, goToSlide }) => {

  return (
    <div>
      {/* Section 3 - How we select top react devs */}
      <section className='max-w-7xl mx-auto mt-6 p-16'>
        <div className='max-w-6xl mx-auto'>
          <div className='max-w-5xl p-10 mx-auto'>
            <h2 className="h2-text text-center">How We Select 
              <span className='h2-high-text'>Top ReactJS Developers</span>
            </h2>
            <p className='sub-h1 text-center'>Our Comprehensive Vetting Process</p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-300 animate-fadeIn`}>
              {qualityMetrics.map((metric, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 rounded-2xl transition-all duration-300 "></div>
                  <div className="relative border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] h-full rounded-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2">
                    <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <metric.icon className="text-white w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold text-black dark:text-white mb-2">{metric.value}</div>
                    <div className="p3-text">{metric.label}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-20">

          {/* Main Content Grid */}
          <div className={`grid max-w-6xl mx-auto grid-cols-2 transition-all duration-1000 delay-500 animate-fadeIn`}>
            {/* Initial Screening */}
            <div className="group">
              <h3 className="h3-text mb-8 flex items-center">
                Initial Screening Criteria
              </h3>
              <div className="space-y-6">
                {screeningCriteria.map((criteria, index) => (
                  <div key={index} className="group/item relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fe5182]/10 dark:from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-all duration-300"></div>
                    <div className="relative flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="flex-shrink-0">
                        <criteria.icon className="w-6 h-6 text-[#fe5182] mt-1" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">{criteria.text}</h4>
                        <p className="text-gray-400 leading-relaxed">{criteria.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Initial Screening */}
            <div className="group">
              <h3 className="h3-text mb-8 flex items-center">
                Quality Assurance Standards
              </h3>
              <div className="space-y-6">
                {qualityAssurance.map((criteria, index) => (
                  <div key={index} className="group/item relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fe5182]/10 dark:from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-all duration-300"></div>
                    <div className="relative flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="flex-shrink-0">
                        <criteria.icon className="w-6 h-6 text-[#fe5182] mt-1" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">{criteria.text}</h4>
                        <p className="text-gray-400 leading-relaxed">{criteria.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Assessment */}
          <div className="group max-w-5xl mx-auto py-20">
            <h3 className="h3-text mb-8 text-center">
              Technical Assessment Framework
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Coding Challenges & Live Coding",
                "System Design Interviews", 
                "Code Review Exercises",
                "Problem-solving Scenarios"
              ].map((item, index) => (
                <div key={index} className="group/card relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br rounded-2xl from-purple-500/20 to-pink-500/20 opacity-0 group-hover/card:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-[#fe5182]/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                    <CheckCircle className="w-5 h-5 text-[#fe5182] mb-3" />
                    <p className="text-gray-600 dark:text-white font-medium">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-700 animate-fadeIn`}>
            <div className="sticky top-8">
              <h3 className="h3-text mb-12 text-center">
                Multi-Stage Evaluation Process
              </h3>
              
              <div className="grid grid-cols-4 gap-6">
                {stages.map((stage, index) => (
                  <div key={index} className="group h-full self-stretch relative">
                    {/* Connection Line */}
                    {index < stages.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-16"></div>
                    )}
                    
                    {/* Stage Card */}
                    <div className={`relative h-full transition-all duration-500 transform ${
                      activeStage === index 
                        ? 'scale-105' 
                        : 'scale-100 hover:scale-102'
                    }`}>
                      <div className={`absolute inset-0 rounded-2xl opacity-20 ${
                        activeStage === index ? 'opacity-40' : 'group-hover:opacity-30'
                      } transition-all duration-300`}></div>
                      
                      <div className={`relative h-full flex flex-col border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] rounded-2xl pt-8 pb-2 px-6 ${
                        activeStage === index ? 'bg-gradient-to-t from-[#81004D] to-[#fe5182]' : 'bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]'
                      } transition-all duration-300`}>
                        
                        <div className="flex flex-col items-center mb-6">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                            activeStage === index ? 'scale-125 bg-white text-[#fe5182] ' : 'bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white'
                          }`}>
                            <stage.icon className="w-8 h-8" />
                          </div>
                          <div className='mt-6'>
                            <div className={`leading-relaxed pb-2 text-center font-medium mb-1 ${activeStage === index ? 'text-white dark:text-white' : 'text-gray-800 dark:text-gray-400'}`}>
                              Stage {index + 1}
                            </div>
                            <h4 className={`text-[1.4rem] font-bold ${activeStage === index ? 'text-[#ffffff] dark:text-white' : 'text-[#080106] dark:text-white'} text-center`}>
                              {stage.title}
                            </h4>
                          </div>
                        </div>
                        
                        <p className={`leading-relaxed mb-4 ${activeStage === index ? 'text-gray-200 dark:text-gray-300': 'text-gray-700 dark:text-gray-300'}`}>
                          {stage.description.split('\n').map((line, idx) => (
                            <span key={idx}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-10 text-center flex justify-between'>
                <div className="inline-flex items-center space-x-2 bg-[#fe5182]/20 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                  <Award className="w-5 h-5 text-orange-600 dark:text-yellow-400" />
                  <span className="p3-text font-medium">
                    Only 3% of candidates pass our comprehensive vetting process
                  </span>
                </div>

                <div className="text-center flex justify-center">
                  <button className="group relative grad-btn1-text">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <span className="relative">Start Your Search Today</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>            
        </div>
      </section>

      {/* Section 4 - Streamlined Hiring Process: Your Path to React Excellence */}
      <section className="relative bg-[#330024] dark:bg-black py-16 overflow-hidden">
        <FloatingDots />
        <h1 className='text-5xl/[5rem] font-bold mb-6 text-white text-center'>Streamlined Hiring Process: <span className='h2-high-text block'>Your Path to React Excellence</span></h1>
        <div className="w-full max-w-7xl mx-auto">
          {/* Slideshow Container */}
          <div className="relative">
            {/* Slide Content */}
            <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#ffdee7] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-3xl p-8 md:p-12 mx-16">
              {/* Step Number and Icon */}
              <div className='flex justify-between items-center'>
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-r ${currentSlideData.color} rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300`}>
                      <currentSlideData.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {currentSlideData.step}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="h3-text">
                      {currentSlideData.title}
                    </h2>
                    <h3 className="p2-text mt-2">
                      {currentSlideData.subtitle}
                    </h3>
                  </div>
                </div>
                {/* Navigation Arrows */}
                <div className='flex gap-6'>
                  <button
                    onClick={prevSlide}
                    className={`w-12 h-12 bg-gradient-to-r ${currentSlideData.color} rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-110`}
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className={`w-12 h-12 bg-gradient-to-r ${currentSlideData.color} rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-110`}
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8">
                  {/* Description */}
                  <p className="p2-text">
                    {currentSlideData.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Step {currentSlide + 1} of {slides.length}</span>
                      <span>{Math.round(((currentSlide + 1) / slides.length) * 100)}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#81004D] to-[#fe5182] h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column - Features */}
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-black dark:text-white mb-6">
                    {currentSlide === 0 ? "During this consultation, we'll discuss:" :
                    currentSlide === 1 ? "Rapid Talent Introduction:" :
                    currentSlide === 2 ? "Trial Period Benefits:" :
                    "Success Management Features:"}
                  </h4>
                  
                  <div className="space-y-2">
                    {currentSlideData.features.map((feature: string, index: number) => (
                      <ul 
                        key={index}
                        className="flex items-start space-x-4 pl-6"
                      >
                        <li className="list-disc p2-text">
                          {feature}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center mt-16">
                <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform hover:scale-105 transition-all duration-300">
                  <span>Start Your Hiring Journey</span>
                  <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-[#81004D] to-[#fe5182] scale-110'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SeThreeFour;
