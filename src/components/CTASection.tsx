import React from 'react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  showUrgency?: boolean;
  variant?: "primary" | "secondary";
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title, 
  subtitle, 
  buttonText = "Get Free Quote",
  showUrgency = false,
  variant = "primary" 
}) => {
  const handleCTAClick = () => {
    window.dispatchEvent(new Event('open-booking-modal'));
  };

  const baseClasses = variant === "primary" 
    ? "bg-gradient-to-r from-orange to-orange-600 text-white"
    : "bg-white text-dark-blue border-2 border-dark-blue";

  return (
    <section className={`py-16 ${variant === "primary" ? "bg-dark-blue" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {showUrgency && (
            <div className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-full mb-6">
              <span className="animate-pulse mr-2">🔥</span>
              <span className="font-semibold">LIMITED TIME OFFER</span>
            </div>
          )}
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            variant === "primary" ? "text-white" : "text-dark-blue"
          }`}>
            {title}
          </h2>
          
          <p className={`text-xl mb-8 ${
            variant === "primary" ? "text-blue-100" : "text-gray-600"
          }`}>
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleCTAClick}
              className={`${baseClasses} font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg`}
            >
              {buttonText}
            </button>
            
            {variant === "primary" && (
              <div className="flex items-center space-x-4 text-white">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Instant Setup</span>
                </div>
              </div>
            )}
          </div>

          {showUrgency && (
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <span className="text-red-400 mr-2">⏰</span>
                <span className={variant === "primary" ? "text-orange" : "text-red-600"}>
                  Only 3 spots left this week
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">📞</span>
                <span className={variant === "primary" ? "text-green-400" : "text-green-600"}>
                  Call us: (555) 123-4567
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
