import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Users, Clock, TrendingUp, Star, Globe, Zap } from 'lucide-react';

const FloatingCard = ({ children, delay = 0, className = "" }) => {
  return (
    <div 
      className={`transform transition-all duration-1000 ease-out ${className}`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

const AnimatedNumber = ({ value, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    const increment = numericValue / (duration / 50);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  const formatNumber = (num) => {
    if (value.includes('k') || value.includes('+')) {
      return num >= 1000 ? `${(num/1000).toFixed(0)}k+` : `${num}+`;
    }
    return num;
  };
  
  return <span>{formatNumber(count)}{suffix}</span>;
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: "25000+", label: "Trusted Clients", icon: Users, color: "from-blue-500 to-cyan-500" },
    { value: "5%", label: "Acceptance Rate", icon: Star, color: "from-purple-500 to-pink-500" },
    { value: "24", label: "Average Match Time (hrs)", icon: Clock, color: "from-green-500 to-emerald-500" },
    { value: "98%", label: "Trial Success Rate", icon: TrendingUp, color: "from-orange-500 to-red-500" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-[#81004D]/60 to-[#fe5182]/60 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating code elements */}
        <FloatingCard delay={0} className="absolute top-32 right-1/4 opacity-20">
          <div className="text-cyan-300 font-mono text-sm">
            {'<ReactComponent />'}
          </div>
        </FloatingCard>
        
        <FloatingCard delay={1} className="absolute bottom-1/3 left-20 opacity-20">
          <div className="text-purple-300 font-mono text-sm">
            {'useState()'}
          </div>
        </FloatingCard>
        
        <FloatingCard delay={2} className="absolute top-1/2 right-20 opacity-20">
          <div className="text-[#fe5182] font-mono text-sm">
            {'useEffect()'}
          </div>
        </FloatingCard>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">Top 5% Global Talent Network</span>
          </div>

          {/* Main Heading */}
          <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hire Top{' '}
              <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent animate-pulse">
                React Developers
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with the Top 5% of Professional React Developers Worldwide
            </p>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Partner with experienced React developers, engineers, architects, and specialists who deliver exceptional results. 
              Leading enterprises and innovative startups trust our React development experts for creating dynamic single-page applications, 
              building robust e-commerce solutions, and driving digital innovation across industries.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-800 transform animate-fadeIn'>
            <button className="group bg-gradient-to-r from-[#81004D] to-[#fe5182] hover:from-[#81004D]/90 hover:to-[#fe5182]/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center">
              Start Hiring Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10">
              View Our Talent
              <Globe className="ml-2 w-5 h-5 inline" />
            </button>
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
                  <div className="text-3xl font-bold text-white mb-2">
                    <AnimatedNumber value={stat.value} />
                  </div>
                  <div className="text-gray-300 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional highlight */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-2xl font-semibold text-white mb-2">
            Hire a Top React Developer Today
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <Code className="w-5 h-5 mr-2" />
            <span>Ready to start in 24 hours</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;