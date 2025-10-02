import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [subDisplayText, setSubDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subCurrentIndex, setSubCurrentIndex] = useState(0);
  
  const fullText = "Build With Confidence";
  const subText = "Your Trusted Partner for Exceptional Construction Solutions Built on Quality, Reliability, and Innovation";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else if (currentIndex === fullText.length && subCurrentIndex === 0) {
      // Start subtitle typing after main title finishes
      const timer = setTimeout(() => {
        setSubCurrentIndex(1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    if (subCurrentIndex > 0 && subCurrentIndex <= subText.length) {
      const timer = setTimeout(() => {
        setSubDisplayText(prev => prev + subText[subCurrentIndex - 1]);
        setSubCurrentIndex(prev => prev + 1);
      }, 50); // Faster typing for subtitle
      return () => clearTimeout(timer);
    }
  }, [subCurrentIndex, subText]);

  // Function to format the subtitle with bold parts
  const formatSubtitle = (text) => {
    const boldText = "Exceptional Construction Solutions";
    const parts = text.split(boldText);
    
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className="font-semibold text-white">{boldText}</span>
          {parts[1]}
          {subCurrentIndex <= subText.length && (
            <span className="ml-1 w-1 h-6 bg-blue-300 animate-pulse inline-block align-middle"></span>
          )}
        </>
      );
    }
    
    return (
      <>
        {text}
        {subCurrentIndex <= subText.length && (
          <span className="ml-1 w-1 h-6 bg-blue-300 animate-pulse inline-block align-middle"></span>
        )}
      </>
    );
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading with Enhanced Typography */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10">
                  {displayText}
                  {currentIndex < fullText.length && (
                    <span className="ml-1 w-1 h-12 bg-yellow-400 animate-pulse inline-block"></span>
                  )}
                </span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400/20 -rotate-1 rounded-lg"></div>
              </span>
            </h1>
          </div>

          {/* Subtitle with Improved Styling */}
          <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto font-light">
            {formatSubtitle(subDisplayText)}
          </p>

          {/* CTA Buttons with Enhanced Design */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <a
              href="#contact"
              className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-10 py-5 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 transform hover:-translate-y-1 min-w-[200px] text-center"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#services"
              className="group relative border-2 border-white/60 bg-white/5 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl transform hover:-translate-y-1 min-w-[200px] text-center"
            >
              <span className="relative z-10">Our Services</span>
              <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Features with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: '🏗️', text: 'Residential & Commercial', subtext: 'Full-service construction' },
              { icon: '🌱', text: 'Sustainable Building', subtext: 'Eco-friendly solutions' },
              { icon: '⚡', text: 'Innovative Technology', subtext: 'Modern construction tech' }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-1 text-white">{feature.text}</h3>
                <p className="text-blue-200 text-sm">{feature.subtext}</p>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
    </section>
  );
};

export default Hero;