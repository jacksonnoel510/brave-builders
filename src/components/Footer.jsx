import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <span className="text-lg font-bold">BB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">BRAVE BUILDERS</h3>
                <p className="text-sm text-gray-400">LIMITED</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Building amazing construction experiences with quality, reliability, and innovation. 
              Your trusted partner for exceptional construction solutions.
            </p>
            <p className="text-yellow-400 font-semibold">
              "Brave Enough to Build Right"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Construction</li>
              <li>Commercial Buildings</li>
              <li>Infrastructure</li>
              <li>Renovations</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Brave Builders Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;