import React, { useEffect, useState } from 'react';
import { Trophy, Code, Users, Globe, Zap, CheckCircle } from 'lucide-react';

interface FloatingPanelProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FloatingPanel: React.FC<FloatingPanelProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <div 
      className={`
        absolute bg-gradient-to-br from-white/5 to-white/2 
        border-2 border-transparent bg-clip-padding
        backdrop-blur-md rounded-xl
        shadow-[0_8px_32px_rgba(219,0,131,0.3)]
        hover:shadow-[0_12px_40px_rgba(219,0,131,0.4)]
        hover:translate-z-2 transition-all duration-300
        animate-float
        ${className}
      `}
      style={{ 
        borderImage: 'linear-gradient(45deg, #81004D, #DB0083) 1',
        animationDelay: `${delay}s`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-scan pointer-events-none rounded-xl" />
      {children}
    </div>
  );
};

interface DeveloperAvatarProps {
  index: number;
}

const DeveloperAvatar: React.FC<DeveloperAvatarProps> = ({ index }) => {
  return (
    <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-900 to-pink-600 p-0.5 m-1 inline-block">
      <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
        <div className="w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse" 
             style={{ animationDelay: `${index * 0.5}s` }} />
      </div>
    </div>
  );
};

interface ParticleProps {
  index: number;
}

const Particle: React.FC<ParticleProps> = ({ index }) => {
  return (
    <div 
      className="absolute w-0.5 h-0.5 bg-pink-500 rounded-full animate-float-particle"
      style={{ 
        left: `${(index * 10) % 100}%`,
        animationDelay: `${index * 0.5}s`,
        animationDuration: '4s'
      }}
    />
  );
};

const MapDot: React.FC<{ top: string; left: string; delay?: number }> = ({ top, left, delay = 0 }) => {
  return (
    <div 
      className="absolute w-1 h-1 bg-pink-500 rounded-full animate-pulse"
      style={{ 
        top, 
        left,
        animationDelay: `${delay}s`
      }}
    />
  );
};

const ImageCom: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900 overflow-hidden perspective-1000">
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          50% { transform: translateY(-10px) rotateZ(1deg); }
        }
        
        @keyframes float-particle {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateY(-10px) translateX(100px);
            opacity: 0;
          }
        }
        
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(219, 0, 131, 0.6); }
          100% { 
            box-shadow: 0 0 30px rgba(219, 0, 131, 0.9), 
                        0 0 40px rgba(219, 0, 131, 0.4); 
          }
        }
        
        @keyframes rotate-globe {
          0% { transform: translate(-50%, -50%) scale(1.5) rotate(0deg); }
          100% { transform: translate(-50%, -50%) scale(1.5) rotate(360deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 4s linear infinite;
        }
        
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        .animate-rotate-globe {
          animation: rotate-globe 20s linear infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-3d {
          transform-style: preserve-3d;
          transform: translate(-50%, -50%) rotateX(15deg) rotateY(-15deg);
        }
      `}</style>

      {/* Background Globe */}
      <div className="absolute top-1/2 left-1/2 w-75 h-75 rounded-full opacity-60 animate-rotate-globe">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900/10 to-pink-600/5 border border-pink-500/20">
          {/* Globe Lines */}
          <div className="absolute inset-0 rounded-full">
            {/* Latitude lines */}
            <div className="absolute top-1/4 left-0 w-full h-px border-t border-pink-500/15" />
            <div className="absolute top-1/2 left-0 w-full h-px border-t border-pink-500/15" />
            <div className="absolute top-3/4 left-0 w-full h-px border-t border-pink-500/15" />
            {/* Longitude lines */}
            <div className="absolute top-0 left-1/4 w-px h-full border-l border-pink-500/15" />
            <div className="absolute top-0 left-1/2 w-px h-full border-l border-pink-500/15" />
            <div className="absolute top-0 left-3/4 w-px h-full border-l border-pink-500/15" />
          </div>
        </div>
      </div>

      {/* World Map Connection Dots */}
      <MapDot top="30%" left="20%" delay={0} />
      <MapDot top="25%" left="70%" delay={1} />
      <MapDot top="60%" left="45%" delay={2} />
      <MapDot top="40%" left="80%" delay={0.5} />
      <MapDot top="70%" left="15%" delay={1.5} />

      {/* Main Hub Container */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[600px] transform-3d">
        
        {/* Top 3% Talent Panel */}
        <FloatingPanel className="w-70 h-50 top-12 left-25" delay={0}>
          <div className="p-4 border-b border-pink-500/30">
            <h3 className="font-bold text-pink-500 text-sm uppercase tracking-wider flex items-center gap-2">
              <Users size={16} />
              Elite Developers
            </h3>
          </div>
          <div className="p-5 text-white">
            <div className="relative inline-block bg-gradient-to-r from-purple-900 to-pink-600 text-white px-5 py-2.5 rounded-full font-bold text-base text-center my-2 animate-glow">
              <Trophy className="inline mr-2" size={16} />
              TOP 3%
            </div>
            <div className="text-sm text-gray-300 mt-2">Verified Excellence</div>
            <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-900 to-pink-600 rounded-full animate-pulse" style={{ width: '90%' }} />
            </div>
          </div>
        </FloatingPanel>

        {/* Assessment Panel */}
        <FloatingPanel className="w-64 h-45 top-25 right-20" delay={1}>
          <div className="p-4 border-b border-pink-500/30">
            <h3 className="font-bold text-pink-500 text-sm uppercase tracking-wider flex items-center gap-2">
              <Code size={16} />
              Live Assessment
            </h3>
          </div>
          <div className="p-5 text-white">
            <pre className="font-mono text-xs text-green-400 leading-5 mb-2">
{`function optimize(data) {
  return data.filter(x => 
    x.score > 95
  );
}`}
            </pre>
            <div className="text-green-400 text-xs flex items-center gap-1">
              <CheckCircle size={12} />
              Algorithm Test: PASSED
            </div>
          </div>
        </FloatingPanel>

        {/* Developer Showcase Panel */}
        <FloatingPanel className="w-75 h-55 bottom-20 left-12" delay={2}>
          <div className="p-4 border-b border-pink-500/30">
            <h3 className="font-bold text-pink-500 text-sm uppercase tracking-wider flex items-center gap-2">
              <Globe size={16} />
              Global Talent Pool
            </h3>
          </div>
          <div className="p-5 text-white">
            <div className="mb-4">
              {[0, 1, 2, 3].map(index => (
                <DeveloperAvatar key={index} index={index} />
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Globe size={12} />
                Remote-First Excellence
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Zap size={12} />
                Real-time Collaboration
              </div>
            </div>
          </div>
        </FloatingPanel>

        {/* Performance Stats Panel */}
        <FloatingPanel className="w-50 h-38 bottom-30 right-25" delay={0.5}>
          <div className="p-4 border-b border-pink-500/30">
            <h3 className="font-bold text-pink-500 text-sm uppercase tracking-wider">Performance</h3>
          </div>
          <div className="p-5 text-white text-center">
            <div className="text-3xl font-bold text-pink-500 mb-1">98.5%</div>
            <div className="text-xs text-gray-300 mb-2">Success Rate</div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-900 to-pink-600 rounded-full" style={{ width: '98.5%' }} />
            </div>
          </div>
        </FloatingPanel>

        {/* Talent Spotlight Label */}
        <div className="absolute top-5 right-5 text-pink-500 text-xs uppercase tracking-widest opacity-80">
          ✨ TALENT SPOTLIGHT
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(index => (
          <Particle key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ImageCom;