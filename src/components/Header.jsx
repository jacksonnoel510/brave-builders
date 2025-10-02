import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50" ref={menuRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Responsive Logo */}
          <div className="flex items-center">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <span className="text-lg sm:text-xl font-bold">BB</span>
            </div>
            <div className="ml-2 sm:ml-3">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">BRAVE BUILDERS</h1>
              <p className="text-xs text-gray-600 hidden xs:block">LIMITED</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-sm lg:text-base"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 lg:px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-medium text-sm lg:text-base"
            >
              Get Quote
            </a>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="lg:hidden p-2 flex flex-col items-center justify-center w-10 h-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></div>
            <div className={`w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></div>
            <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`lg:hidden border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}>
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;