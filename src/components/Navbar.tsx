import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
              onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
              className="bg-orange hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors shadow-md"
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
