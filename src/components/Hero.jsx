import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Build With <span className="text-yellow-300">Confidence</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 leading-relaxed">
            Quality, Reliability, and Innovation—Your Trusted Partner for Exceptional Construction Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition duration-300 shadow-lg"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Our Services
            </a>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-200">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏗️</span>
              <span>Residential & Commercial</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🌱</span>
              <span>Sustainable Building</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">⚡</span>
              <span>Innovative Technology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;