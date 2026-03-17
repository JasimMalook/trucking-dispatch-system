import React from 'react';

const Hero: React.FC = () => {
  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-dark-blue to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        {/* Urgency Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-full">
            <span className="animate-pulse mr-2">🔥</span>
            <span className="font-semibold">LIMITED SLOTS: Only 3 spots left this week</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get More Loads & Maximize Your Trucking Revenue
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Professional dispatch services that keep your trucks moving and your profits growing
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8 text-sm">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>100+ Drivers Managed</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>No Contracts</span>
            </div>
          </div>

          <button 
            onClick={handleCTAClick}
            className="bg-orange hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Free Quote →
          </button>
          
          <p className="text-blue-200 mt-4 text-sm">
            Join 100+ drivers already maximizing their revenue
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
