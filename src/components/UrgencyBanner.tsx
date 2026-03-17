import React, { useState, useEffect } from 'react';

const UrgencyBanner: React.FC = () => {
  const [slotsRemaining, setSlotsRemaining] = useState(3);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 12
  });

  useEffect(() => {
    // Simulate slots being taken
    const slotInterval = setInterval(() => {
      setSlotsRemaining(prev => {
        if (prev > 1) return prev - 1;
        return prev;
      });
    }, 30000); // Every 30 seconds for demo

    return () => clearInterval(slotInterval);
  }, []);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-orange to-orange-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex space-x-2 animate-pulse">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-1 h-full bg-white"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
              <span className="text-sm font-bold">⚡ LIMITED OFFER</span>
            </div>
            <div className="text-lg font-bold">
              Limited slots for new drivers this week - Only {slotsRemaining} spots left!
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* Countdown Timer */}
            <div className="flex items-center space-x-2">
              <span className="text-sm">Ends in:</span>
              <div className="flex space-x-1">
                <div className="bg-white bg-opacity-20 px-2 py-1 rounded">
                  <span className="font-mono font-bold">{formatTime(timeLeft.hours)}</span>
                </div>
                <span>:</span>
                <div className="bg-white bg-opacity-20 px-2 py-1 rounded">
                  <span className="font-mono font-bold">{formatTime(timeLeft.minutes)}</span>
                </div>
                <span>:</span>
                <div className="bg-white bg-opacity-20 px-2 py-1 rounded">
                  <span className="font-mono font-bold">{formatTime(timeLeft.seconds)}</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-orange font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Claim Your Spot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
