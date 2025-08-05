import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Code, Star, TrendingUp, Users, Zap } from 'lucide-react';
import Globe from '@/assets/images/globe.png'
import DevProfiles from '@/jsonData/DevPro.json'
import Illustration from '@/assets/images/ImgOne.webp'
import { DeveloperCard } from '../../../coms/DevCard';

const reactDevelopers = DevProfiles

export default function SecOne() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [activeFilter, setActiveFilter] = useState({
    availability: "All",
    experience: "All",
    englishLevel: "All"
  });

  const filteredDevelopers = reactDevelopers.filter(dev => {
      return (
      (activeFilter.availability === "All" || dev.availability === activeFilter.availability) &&
      (activeFilter.experience === "All" || 
          (activeFilter.experience === "1-3 years" && dev.experience.includes("1-3")) ||
          (activeFilter.experience === "3-5 years" && dev.experience.includes("3-5")) ||
          (activeFilter.experience === "5+ years" && parseInt(dev.experience) >= 5)
      ) &&
      (activeFilter.englishLevel === "All" || dev.englishLevel === activeFilter.englishLevel)
      );
  });

  const stats = [
    { value: "25000+", label: "Trusted Clients", icon: Users, color: "from-blue-500 to-cyan-500" },
    { value: "5%", label: "Acceptance Rate", icon: Star, color: "from-purple-500 to-pink-500" },
    { value: "24", label: "Average Match Time (hrs)", icon: Clock, color: "from-green-500 to-emerald-500" },
    { value: "98%", label: "Trial Success Rate", icon: TrendingUp, color: "from-orange-500 to-red-500" }
  ];

  return (
    <>
        <section className='relative pt-28 pb-6'>
            <div className="max-w-7xl mx-auto text-center flex relative gap-6">
                <div className="mb-6">
                    {/* <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                        <span className="text-sm font-medium">Top 5% Global Talent Network</span>
                    </div> */}

                    <h1 className='h1-text'>
                        Hire Top {''}
                        {/* <span className="block text-6xl/[5rem] vio-pink-grad"> */}
                        <span className='h1-high-text'>
                        React Developers
                        </span>
                    </h1>

                    <div className='flex flex-row-reverse justify-center gap-12 py-8 w-full'>
                        <div className="w-[40%] flex justify-center">
                            {/* <RotatingEarthScene /> */}
                            <img src={Globe} alt='globe' className='w-full h-[80%]' />
                            {/* <span className="absolute top-0 left-0 w-[6rem] h-[6rem] bg-gradient-to-l from-[#81004D] to-[#fe5182] rounded-full"></span> */}
                        </div>
                        <div className='w-[50%] text-left'>
                            <p className='sub-h1 pb-4'>
                                Connect with the <span className='text-3xl bg-gradient-to-b from-[#81004D] to-[#fe5182] bg-clip-text text-transparent'>Top 5%</span> of Professional React Developers Worldwide
                            </p>
                            <p className="p2-text">
                                Partner with experienced React developers, engineers, architects, and specialists who deliver exceptional results. Leading enterprises and innovative startups trust our React development experts for creating dynamic single-page applications, building robust e-commerce solutions, transforming legacy systems, optimizing user experience performance, streamlining development workflows with component libraries, and driving digital innovation across industries.
                            </p>
                            <div className="flex mt-6 flex-col sm:flex-row gap-4 items-center mb-12">
                                <button className="grad-btn1-text">
                                    Start Hiring Today
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="btn1-text">
                                Get Started
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                        <div key={index} className="group">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-gray-300 font-medium text-sm">
                                {stat.label}
                            </div>
                            </div>
                        </div>
                        );
                    })}
                    </div>

                    <div className={`text-center mt-12 transition-all duration-1000 delay-1200 transform animate-fadeIn`}>
                        <p className="text-2xl font-semibold text-white mb-2">
                            Hire a Top React Developer Today
                        </p>
                        <div className="flex items-center justify-center text-gray-400">
                            <Code className="w-5 h-5 mr-2" />
                            <span>Ready to start in 24 hours</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-1000 pointer-events-none' />
            <div className='absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_bottom_right,_#DB0083_0%,_transparent_30%)] opacity-20 -z-1000 pointer-events-none' />
        </section>

        {/* Section 2 - dev profiles */}
        <section className="pt-6 pb-0">
            <div className="max-w-6xl mx-auto">
                <h2 className="h2-text p-16 text-center">Skilled <span className='text-5xl/[5rem] vio-pink-grad'>React Developers</span> Ready<br /> to Join Your Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDevelopers.map((developer) => (
                    <DeveloperCard key={developer.id} developer={developer} />
                    ))}
                </div>
            </div>
        </section>
    </>
  );
}