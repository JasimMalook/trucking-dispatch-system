import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    window.dispatchEvent(new Event('open-booking-modal'));
  };

  const handleDashboardClick = () => {
    navigate('/login');
  };

  return (
    <section className="relative bg-gradient-to-br from-dark-blue via-blue-900 to-blue-950 text-white overflow-hidden">
      {/* Animated background route lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal route lines */}
        <svg className="absolute w-full h-full opacity-10" preserveAspectRatio="none">
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="white" strokeWidth="1" strokeDasharray="8 6" className="animate-route-pulse" />
          <line x1="0" y1="60%" x2="100%" y2="70%" stroke="white" strokeWidth="1" strokeDasharray="8 6" className="animate-route-pulse" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="80%" x2="100%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="8 6" className="animate-route-pulse" style={{ animationDelay: '1s' }} />
        </svg>

        {/* Animated truck on route */}
        <div className="absolute top-[29%] w-full">
          <div className="animate-truck-drive">
            <svg width="32" height="20" viewBox="0 0 32 20" fill="none" className="opacity-30">
              <rect x="0" y="2" width="20" height="12" rx="2" fill="white" />
              <path d="M20 6H26L30 10V14H20V6Z" fill="#ff6b35" />
              <circle cx="8" cy="17" r="3" fill="white" />
              <circle cx="25" cy="17" r="3" fill="white" />
            </svg>
          </div>
        </div>

        {/* Floating location pins */}
        <div className="absolute top-[20%] left-[15%] animate-float" style={{ animationDelay: '0s' }}>
          <div className="w-3 h-3 rounded-full bg-orange opacity-20"></div>
        </div>
        <div className="absolute top-[50%] left-[70%] animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-2 h-2 rounded-full bg-blue-400 opacity-20"></div>
        </div>
        <div className="absolute top-[65%] left-[40%] animate-float" style={{ animationDelay: '0.7s' }}>
          <div className="w-2 h-2 rounded-full bg-orange opacity-15"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 lg:py-36 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-800 bg-opacity-50 text-blue-200 rounded-full mb-8 border border-blue-700">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-status-pulse"></span>
            <span className="font-semibold text-sm">Next-Generation Logistics Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            AI Powered Trucking &amp; Dispatch Management System
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-orange max-w-3xl mx-auto font-medium animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Get more loads, reduce empty miles, and automate dispatch operations.
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-blue-200 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Built specifically for trucking companies and freight brokers to maximize efficiency and grow revenue.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-blue-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className="flex items-center"><span className="text-green-400 mr-2">✓</span> Save 12+ hours/week</span>
            <span className="flex items-center"><span className="text-green-400 mr-2">✓</span> Reduce empty miles 18%</span>
            <span className="flex items-center"><span className="text-green-400 mr-2">✓</span> Boost load efficiency 24%</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <button 
              onClick={handleDemoClick}
              className="w-full sm:w-auto bg-orange hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Free Demo
            </button>
            <button 
              onClick={handleDashboardClick}
              className="w-full sm:w-auto bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-2 border-white border-opacity-30 font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
            >
              Try Demo Dashboard →
            </button>
          </div>
        </div>
      </div>

      {/* Animated route line at bottom */}
      <div className="absolute bottom-20 left-0 right-0 h-px">
        <div className="relative w-full h-full">
          <div className="absolute h-full w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-10"></div>
          <div className="absolute top-[-3px] animate-move-dot">
            <div className="w-2 h-2 rounded-full bg-orange opacity-40"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
