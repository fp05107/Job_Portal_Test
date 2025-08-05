import React, { useState, useEffect } from 'react';
import SecOne from './reactdevs/SecOne';
import { slides } from '../../coms/Data'
import SecTwo from './reactdevs/SecTwo';
import SecThree from './reactdevs/SecThree';
import SecFour from './reactdevs/SecFour';
import SEO from '@/components/SEO';
import SecFive from './reactdevs/SecFive';
import SecSix from './reactdevs/SecSix';
import SecSeven from './reactdevs/SecSeven';
import SecEight from './reactdevs/SecEight';
import SecNine from './reactdevs/SecNine';
import SecTen from './reactdevs/SecTen';
import SecEleven from './reactdevs/SecEleven';
import SecTwelve from './reactdevs/SecTweleve';
import SecThirteen from './reactdevs/SecThirteen';

const ReactDevs: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [countUp, setCountUp] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div>
      <SEO
        title="Hire Top React Developers | TopSkyll"
        description="Connect with the top 5% of professional React developers worldwide. Hire vetted engineers to build SPAs, optimize UX, and accelerate innovation."
        keywords="hire react developers, top react developers, freelance react developers, remote react developers, react.js experts"
        canonicalUrl="https://topskyll.com/hire/react-developers"
      />

      <main>
        <SecOne />
        <SecTwo 
          activeStage={activeStage} 
          prevSlide={prevSlide} 
          currentSlide={currentSlide} 
          nextSlide={nextSlide} 
          currentSlideData={currentSlideData}
          goToSlide={goToSlide}
        />
        <SecThree />
        <SecFour />
        <SecFive />
        <SecSix />
        <SecSeven />
        <SecEight />
        <SecNine />
        <SecTen />
        <SecEleven />
        <SecTwelve />
        <SecThirteen />
      </main>
    </div>
  );
};

export default ReactDevs;