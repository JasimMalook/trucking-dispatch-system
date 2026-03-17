import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-blue shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl">
              Trucking Dispatch Pro
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a 
              href="#services" 
              className="text-white hover:text-orange transition-colors"
              onClick={(e) => handleNavClick(e, 'services')}
            >
              Services
            </a>
            <a 
              href="#how-it-works" 
              className="text-white hover:text-orange transition-colors"
              onClick={(e) => handleNavClick(e, 'how-it-works')}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-white hover:text-orange transition-colors"
              onClick={(e) => handleNavClick(e, 'testimonials')}
            >
              Testimonials
            </a>
            <a 
              href="#dashboard" 
              className="text-white hover:text-orange transition-colors"
              onClick={(e) => handleNavClick(e, 'dashboard')}
            >
              Dashboard
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-orange transition-colors"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
          </div>

          <button 
            onClick={handleQuoteClick}
            className="bg-orange hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
