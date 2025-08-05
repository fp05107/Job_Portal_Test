import { ArrowRight, BarChart3, Building2, CheckCircle, Globe, Rocket, TrendingUp, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { advantages, companies, geographicData, hiringStats, modernFeatures, salaryStats, statistics, targetAudience, techStats } from '../../../coms/Data';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: string;
}

interface GeographicDataProps {
  region: string;
  percentage: number;
  countries: string;
}

interface TechStatProps {
  name: string;
  metric: string;
  highlight: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon }) => (
  <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 px-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
    <div className="absolute inset-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 rounded-2xl"></div>
    <div className="relative z-10">
      {icon && <div className="text-2xl mb-3">{icon}</div>}
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
      <div className="text-3xl font-bold text-[#DB0083] mb-2">{value}</div>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
    </div>
  </div>
);

const GeographicCard: React.FC<GeographicDataProps> = ({ region, percentage, countries }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center justify-between mb-3">
      <h4 className="font-bold text-gray-800 dark:text-white text-lg">🌍 {region}</h4>
      <span className="text-2xl font-bold text-[#DB0083]">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
      <div 
        className="bg-[#DB0083] h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
    <p className="p3-text">{countries}</p>
  </div>
);

const TechStat: React.FC<TechStatProps> = ({ name, metric, highlight }) => (
  <div className={`flex items-center justify-between p-4 rounded-xl ${highlight ? 'bg-[#DB0083] bg-opacity-10 border border-[#DB0083] border-opacity-30' : 'bg-gray-50 dark:bg-gray-700 border border-gray-200 border-opacity-30'} transition-all mb-4 duration-300 hover:scale-105`}>
    <span className="font-semibold text-gray-800 dark:text-white">{name}</span>
    <span className={`font-bold ${highlight ? 'text-[#DB0083]' : 'text-gray-600 dark:text-gray-300'}`}>{metric}</span>
  </div>
);

const CountUpNumber: React.FC<{ end: number; suffix?: string; duration?: number }> = ({ 
  end, 
  suffix = '', 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const SeSevenEight: React.FC = () => {
  return (
    <div>
      {/* Section 7 - Top Companies Globally Using React.js in 2025 */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10" />
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 -z-5">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.2
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div 
            id="heading"
            data-animate
            className={`text-center md:text-left mb-16 transition-all duration-1000 transform animate-fadeIn`}
          >
            <h1 className="h1-text text-center">
              Top Companies Globally Using{' '}
              <span className="h1-high-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                React.js in 2025
              </span>
            </h1>
            
            {/* Decorative Line */}
            <div className="w-32 h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182] mx-auto rounded-full"></div>
          </div>

          {/* Company Blocks Grid */}
          <div 
            id="companies-grid"
            data-animate
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-16 transition-all duration-1200 transform animate-fadeIn`}
          >
            {companies.map((company, index) => {
              const Icon = company.icon;
              return (
                <div
                  key={company.id}
                  className="group bg-white/5 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-pink-500/30 hover:bg-white/10 transform hover:scale-[1.02]"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  {/* Company Header */}
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
                      {company.name}
                    </h3>
                  </div>

                  {/* Company Details */}
                  <div className="space-y-3">
                    <p className="text-sm text-gray-200 italic mb-1 group-hover:text-gray-100 transition-colors duration-300">
                      <span className="text-pink-400 font-medium">Highlight: </span>
                      {company.highlight}
                    </p>
                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <span className="text-purple-400 font-medium">Impact: </span>
                      {company.impact}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-px bg-gradient-to-r from-[#81004D] to-[#fe5182]"></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div 
            id="heading"
            data-animate
            className={`text-center md:text-left mb-12 transition-all duration-1000 transform animate-fadeIn`}
          >
            <h1 className="h2-text text-center">Why Do These Companies Choose{' '}
              <span className="h2-high-text">
                React ?
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="p2-text text-center mx-auto max-w-2xl leading-relaxed">
              Discover the key advantages that make React the preferred choice for industry leaders worldwide.
            </p>
          </div>

          {/* Key Points Grid */}
          <div 
            id="advantages-grid"
            data-animate
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 transition-all duration-1200 transform animate-fadeIn`}
          >
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={advantage.id}
                  className="group bg-white/5 p-6 rounded-xl shadow-md border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-pink-500/30 hover:bg-white/10"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  {/* Card Header */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{advantage.emoji}</span>
                    </div>
                    {/* <div className="flex items-center">
                      <Icon size={24} className="text-pink-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    </div> */}
                  </div>

                  {/* Card Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {advantage.description}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-full h-px bg-gradient-to-r from-[#81004D] to-[#fe5182] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Footer Section */}
          <div 
            id="cta-section"
            data-animate
            className={`text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-1000 transform animate-fadeIn`}
          >
            <div className="mb-8">
              <Globe size={48} className="text-pink-400 mx-auto mb-6 animate-pulse" />
              <p className="text-xl md:text-2xl font-semibold text-white mb-6 leading-relaxed max-w-4xl mx-auto">
                Join the global leaders transforming their platforms with React.js. Let's build the future of the web—together.
              </p>
            </div>

            <div className="mt-10">
              <button className="group bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fe5182] to-[#81004D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <Building2 size={20} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Connect With Us
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Success Metrics */}
            <div className="flex flex-wrap justify-center items-center mt-8 gap-8 text-sm text-gray-400">
              <div className="flex items-center">
                <TrendingUp size={16} className="mr-2 text-green-400" />
                500M+ Users Served
              </div>
              <div className="flex items-center">
                <Zap size={16} className="mr-2 text-yellow-400" />
                99.9% Uptime Achieved
              </div>
              <div className="flex items-center">
                <Globe size={16} className="mr-2 text-blue-400" />
                190+ Countries Reached
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/3 right-8 w-24 h-24 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full opacity-5 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-8 w-20 h-20 bg-gradient-to-r from-[#fe5182] to-[#81004D] rounded-full opacity-5 animate-pulse"></div>
      </section>

      {/* Section 8 - React.js: The Dominant Force in Modern Web Development */}
      <section className="relative bg-black overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10" />
        
        {/* Section Divider */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182]"></div>
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 -z-5">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-pink-200 dark:bg-pink-800 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.3
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          {/* Main Headline */}
          <div 
            id="headline"
            data-animate
            className={`mb-16 transition-all duration-1000 transform animate-fadeIn`}
          >
            <h2 className="h1-text text-center">
              React.js: The Dominant Force in{' '}
              <span className="h1-high-text">
                Modern Web Development
              </span>
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182] mx-auto rounded-full mb-8"></div>

            <div className='flex gap-10'>
              <div className='group bg-white/5 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-pink-500/30 hover:bg-white/10 transform hover:scale-[1.02]'>
                <h2 className='h3-text mb-6'>Market Dominance and Global Adoption Statistics</h2>
                <p className='p3-text'>React.js stands as the undisputed leader in JavaScript frameworks and libraries for user interface development. As of 2025, React powers more than 82 million active websites worldwide, representing a significant increase from previous years and demonstrating its accelerating adoption across industries. This massive adoption includes not only Meta's flagship platforms—Facebook, Instagram, and WhatsApp—but extends to industry giants such as Uber, Airbnb, Shopify, Netflix, Amazon, Tesla, and countless other Fortune 500 companies that depend on React developers to drive their digital transformation initiatives.</p>
                <p className='p3-text pt-4'>The framework's central position in modern application development cannot be overstated. With over 12 years of continuous development and Meta's substantial investment in its ongoing enhancement, React has evolved from an experimental library into the backbone of contemporary web development. This maturity, combined with Meta's commitment to long-term support and innovation, makes React not only the preferred choice for experienced developers but also the most recommended starting point for newcomers to frontend development.</p>
              </div>
              <div className='group bg-white/5 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-pink-500/30 hover:bg-white/10 transform hover:scale-[1.02]'>
                <h2 className='h3-text mb-6'>Developer Adoption and Community Growth</h2>
                <p className='p1-text font-bold'>Unprecedented Developer Satisfaction</p>
                <p className='p3-text'>According to the State of JavaScript 2023 survey, React continues to demonstrate exceptional developer satisfaction and retention rates. The framework consistently ranks in the survey's top tier for both usage and developer experience, with 87% of developers who have used React expressing satisfaction and intent to continue using it. This high retention rate indicates not just popularity, but genuine developer confidence in React's capabilities and future direction. Statista Reports that over 39.5% of developers worldwide use React, making it a leading choice</p>
                <p className='p3-text pt-6 pb-4'>The community growth metrics are equally impressive:</p>
                <ul className='p3-text pl-6'>
                  <li className='list-disc'>React repositories on GitHub have accumulated over 237,700 stars</li>
                  <li className='list-disc'>The official React documentation receives more than 8 million monthly visits</li>
                  <li className='list-disc'>React-related job postings have increased by 34% year-over-year as of 2024</li>
                  <li className='list-disc'>Over 15 million developers worldwide actively use React in their projects</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='mb-20'>
            <h3 className='h3-text text-center mt-16 mb-4'>Download Statistics and Market Penetration</h3>
            <p className="p3-text mx-auto max-w-4xl text-center">
              React's popularity is further evidenced by its download statistics from the npm registry. As of late 2025, React achieves:
            </p>

            {/* Statistics Grid */}
            <div 
              id="stats-grid"
              data-animate
              className={`grid my-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1200 transform animate-fadeIn`}
            >
              {statistics.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.id}
                    className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-pink-300 dark:hover:border-pink-600 transition-all duration-300 hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r from-[#81004D]/10 to-[#fe5182]/10 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={28} className={`${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <BarChart3 size={20} className="text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
                    </div>
                    
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                      {stat.value}
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {stat.label}
                    </p>
                    
                    <div className="mt-4 w-full h-1 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                );
              })}
            </div>

            <p className='p3-text mx-auto max-w-3xl text-center'>These numbers represent not just adoption, but sustained growth in an increasingly competitive landscape of frontend technologies.</p>
          </div>
      
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header */}
            <div className={`text-center mb-16 transition-all duration-1000 animate-fadeIn`}>
              <h2 className="h1-text mb-6">
                <span className="h1-high-text">Industry Employment Trends</span>
              </h2>
              <h3 className="h2-text mb-8 text-center">
                React Developer Hiring Dominance
              </h3>
              <p className='p3-text text-center max-w-3xl mx-auto'>The demand for React developers continues to outpace supply across all major technology markets. Recent analysis of hiring trends reveals:</p>
            </div>

            {/* React Developer Hiring Dominance */}
            <div className={`mb-20 transition-all duration-1000 delay-200 animate-fadeIn`}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Frontend Developer Market Share
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hiringStats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>
            </div>

            {/* Salary and Compensation Trends */}
            <div className={`mb-20 transition-all duration-1000 delay-400 animate-fadeIn`}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-right">
                Salary and Compensation Trends
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {salaryStats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>
            </div>

            {/* Geographic Distribution */}
            <div className={`mb-20 transition-all duration-1000 delay-600 animate-fadeIn`}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Geographic Distribution and Remote Work Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {geographicData.map((data, index) => (
                  <GeographicCard key={index} {...data} />
                ))}
              </div>
            </div>

            {/* Technology Ecosystem */}
            <div className={`mb-20 transition-all duration-1000 delay-800 animate-fadeIn`}>
              <h3 className="h3-text mb-2 text-center">
                Technology Ecosystem and Integration Stats
              </h3>
              <div className='py-6'>
                <h4 className='h4-text text-center'>Framework Ecosystem Maturity</h4>
                <p className='mb-8 p2-text text-center'>React's ecosystem has matured into a comprehensive development platform:</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className='h4-text pb-6'>Popular React Libraries and Tools:</h5>
                    {techStats.card1.map((stat, index) => (
                      <TechStat key={index} {...stat} />
                    ))}
                  </div>
                  <div>
                    <h5 className='h4-text pb-6'>Enterprise Integration Statistics:</h5>
                    {techStats.card2.map((stat, index) => (
                      <TechStat key={index} {...stat} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modern React Features */}
            <div className={`transition-all duration-1000 delay-1000 animate-fadeIn`}>
              <h3 className='h3-text text-center'>Performance and Technical Adoption Metrics</h3>
              <h4 className="h4-text mb-8 text-center">
                Modern React Feature Usage
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {modernFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-900 py-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                    <div className="relative">
                      {/* <div className="absolute bottom-0 inset-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 rounded-xl group-hover:opacity-30 transition-opacity duration-300"></div> */}
                      <div className="relative z-10">
                        <div className="text-center mb-4">
                          <div className="text-4xl font-bold text-[#DB0083] mb-2">
                            <CountUpNumber end={parseInt(feature.metric)} suffix="%" />
                          </div>
                          <h4 className="font-bold text-gray-800 dark:text-white text-lg">{feature.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className='my-16'>
              <h2 className='h2-text'>Why This Guide Matters</h2>
              <p className='p2-text'>As we advance into 2025, technology continues to dominate global business landscapes. React.js, a highly popular JavaScript library for building interactive user interfaces, has cemented its place as an essential tool for companies aiming for digital excellence. React developers are increasingly vital, yet businesses often struggle to find qualified, capable talent.</p>
              <p className='p2-text pt-8'>The right React developers don't just bring technical expertise—they help businesses quickly adapt, scale, and innovate. Conversely, hiring the wrong talent can be costly, leading to project delays, decreased productivity, and a compromised competitive position.</p>
              <p className='p2-text pt-8'>This comprehensive guide serves as your roadmap to navigating the complexities of hiring top-tier React developers in 2025. Whether you're an ambitious startup, an established corporation scaling your tech team, or a CTO making strategic hires, you'll discover strategies, insights, and best practices to attract, assess, and onboard the right React talent.</p>
            </div>

            <div className='mb-16'>
              <h2 className='h2-text'>The Strategic Imperative for React Talent</h2>
              <p className='p2-text'>The statistics paint a clear picture: React is not just a popular framework, but the foundation upon which modern digital experiences are built. With over 82 million websites relying on React and 47 million weekly downloads, the framework has achieved a level of market penetration that makes React expertise essential for competitive businesses.</p>
              <p className='p2-text pt-8'>However, this widespread adoption creates both opportunities and challenges. While the large talent pool provides options, the high demand means top React developers are highly sought after and command premium compensation. Organizations that understand how to identify, attract, and retain exceptional React talent will have a significant competitive advantage in the digital marketplace.</p>
              <p className='p2-text pt-8'>The data shows that React's dominance is not slowing down—it's accelerating. Companies that invest in building strong React development capabilities today are positioning themselves for sustained success in an increasingly digital-first business environment.</p>
              <h3 className='h4-text mt-10 mb-8'>The React Developer Shortage</h3>
              <p className='p2-text'>The market demand for React developers has surged drastically over recent years, creating a noticeable skills gap. According to Stack Overflow's 2025 Developer Survey, React.js remains one of the most widely-used and loved frontend technologies, with more than 60% of frontend roles explicitly requiring React expertise. However, companies face intense competition as the pool of highly skilled developers hasn’t grown proportionally.</p>
              <p className='p2-text pt-8'>This shortage means skilled React developers command higher salaries, greater flexibility, and more enticing opportunities, making the hiring process challenging for employers. Companies frequently face delays, talent shortages, and suboptimal hiring decisions that can increase project costs by as much as 30%.</p>
              {/* <h3 className='h4-text mt-10 mb-6'>Who This Guide Is For</h3> */}
              {/* Target Audience Section */}
              <div 
                id="audience-section"
                data-animate
                className={`mb-16 transition-all duration-1000 transform animate-fadeIn`}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                  Who Should Read This Guide?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {targetAudience.map((audience, index) => {
                    const Icon = audience.icon;
                    return (
                      <div
                        key={audience.id}
                        className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-600 transition-all duration-300 hover:scale-[1.02]"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-gradient-to-r from-[#81004D]/10 to-[#fe5182]/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle size={24} className="text-green-500" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <Icon size={20} className="text-pink-500 mr-2" />
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                                {audience.title}
                              </h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                              {audience.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Closing Highlight Block */}
          <div 
            id="closing-highlight"
            data-animate
            className={`text-center transition-all duration-1000 transform animate-fadeIn`}
          >
            <div className="bg-gradient-to-r from-[#81004D]/10 via-[#fe5182]/10 to-[#81004D]/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-pink-200 dark:border-pink-800">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full">
                  <Rocket size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                React's dominance is accelerating — hiring the right React talent gives your company a digital edge.
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                With over 12 years of continuous development and Meta's substantial investment, React has evolved from an experimental library into the backbone of contemporary web development.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section Divider */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fe5182] to-[#81004D]"></div>
      </section>
    </div>
  )
}

export default SeSevenEight;