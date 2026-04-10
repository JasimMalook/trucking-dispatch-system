import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    window.dispatchEvent(new Event('open-booking-modal'));
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  return (
    <section className="relative bg-gradient-to-br from-dark-blue to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-800 bg-opacity-50 text-blue-200 rounded-full mb-8 border border-blue-700">
            <span className="font-semibold text-sm">Next-Generation Logistics Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AI Powered Trucking & Dispatch Management System
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-orange max-w-3xl mx-auto font-medium">
            Built for Freight Brokers, Trucking Companies, and Owner Operators.
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-blue-200 max-w-2xl mx-auto">
            Manage loads, drivers, invoices, and automation in one powerful platform designed for modern trucking businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleDemoClick}
              className="w-full sm:w-auto bg-orange hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Free Demo
            </button>
            <button 
              onClick={handleDashboardClick}
              className="w-full sm:w-auto bg-transparent hover:bg-white hover:bg-opacity-10 text-white border-2 border-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              View Live Dashboard
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
