import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      sessionStorage.setItem('pendingScrollTarget', targetId);
      navigate('/');
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  // Make the navbar solid immediately on non-home pages
  const isSolid = isScrolled || location.pathname !== '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isSolid ? 'bg-dark-blue shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
              <rect width="32" height="32" rx="8" fill="#ff6b35"/>
              <path d="M8 15V20C8 21.1 8.9 22 10 22H22C23.1 22 24 21.1 24 20V15L20 11H10C8.9 11 8 11.9 8 13V15Z" fill="white"/>
              <path d="M20 11V15H24L20 11Z" fill="#ff9b73"/>
              <circle cx="12" cy="22" r="2.5" fill="#1e3a5f"/>
              <circle cx="20" cy="22" r="2.5" fill="#1e3a5f"/>
            </svg>
            <div className="text-white font-bold text-xl tracking-tight">
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
              href="/dashboard"
              className="text-white hover:text-orange transition-colors"
              onClick={(e) => {
                e.preventDefault();
                navigate('/dashboard');
              }}
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

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                if (localStorage.getItem('isAuthenticated') === 'true') {
                  localStorage.removeItem('isAuthenticated');
                  navigate('/');
                } else {
                  navigate('/login');
                }
              }}
              className="hidden md:block text-white hover:text-orange font-semibold transition-colors"
            >
              {localStorage.getItem('isAuthenticated') === 'true' ? 'Logout' : 'Login'}
            </button>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.dispatchEvent(new Event('open-booking-modal'));
              }}
              className="hidden md:block bg-orange hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors shadow-md"
            >
              Book Free Demo
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-blue border-t border-gray-700 py-4 absolute left-0 right-0 top-16 shadow-xl">
            <div className="flex flex-col space-y-4 px-4 pb-4">
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
                href="/dashboard"
                className="text-white hover:text-orange transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  navigate('/dashboard');
                }}
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
              
              <div className="border-t border-gray-600 pt-4 mt-2 flex flex-col space-y-4">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (localStorage.getItem('isAuthenticated') === 'true') {
                      localStorage.removeItem('isAuthenticated');
                      navigate('/');
                    } else {
                      navigate('/login');
                    }
                  }}
                  className="text-left text-white hover:text-orange font-semibold transition-colors"
                >
                  {localStorage.getItem('isAuthenticated') === 'true' ? 'Logout' : 'Login'}
                </button>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.dispatchEvent(new Event('open-booking-modal'));
                  }}
                  className="bg-orange hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors shadow-md text-center"
                >
                  Book Free Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
