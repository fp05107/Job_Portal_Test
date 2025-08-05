import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Users, Zap, Shield, Clock, Target, TrendingUp, CheckCircle, ArrowRight, Menu, X, Play, Calendar, MessageCircle, Eye, Code, Globe, Database, Layers, TestTube, Smartphone, Server, BarChart3 } from 'lucide-react';
import globe from '../assets/images/globe.png';
import Logo from '../assets/icons/Logo.webp';
import Illustration from '../assets/images/ImgOne.webp'

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Capability {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FAQ {
  question: string;
  answer: string;
}

const NewNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10); // you can tweak this value
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the listener on component unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    const navigationItems = [
      { href: "/home", label: "Home" },
      // { href: "/user-directory", label: "User Directory" },
      { href: "/top5", label: "Top 5%" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/hire-developer", label: "Hire Developer" },
    ];

  return (
        <nav className={`z-50 transition-colors duration-300 ${isScrolled ? 'bg-gradient-to-r from-[#3a0023] to-[#000000]' : 'transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                  <div className="flex w-[11rem] items-center space-x-3">
                      <img srcSet={Logo} alt='logo' className='w-full' />
                  </div>

                  <div className="hidden md:flex items-center space-x-8">
                  <a href="#process" className="text-gray-300 hover:text-white transition-colors hover:font-medium">How It Works</a>
                  <a href="#capabilities" className="text-gray-300 hover:text-white transition-colors hover:font-medium">Capabilities</a>
                  <a href="#talent" className="text-gray-300 hover:text-white transition-colors hover:font-medium">Our Talent</a>
                  <a href="#faq" className="text-gray-300 hover:text-white transition-colors hover:font-medium">FAQ</a>
                  <button className="bg-gradient-to-r from-[#81004D] to-[#DB0083] text-white px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                      Hire React Developers
                  </button>
                  </div>

                  <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="w-6 h-6 text-slate-600" /> : <Menu className="w-6 h-6 text-slate-600" />}
                  </button>
              </div>
            </div>
        </nav>
  );
};

export default NewNavbar;