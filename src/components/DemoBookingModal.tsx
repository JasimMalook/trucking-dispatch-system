import React, { useState } from 'react';

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoBookingModal: React.FC<DemoBookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3); // Success step
    }, 1500);
  };

  const resetAndClose = () => {
    setTimeout(() => setStep(1), 300); // Wait for transition
    onClose();
  };

  const dates = ['Today', 'Tomorrow', 'Next Monday', 'Next Tuesday'];
  const times = ['10:00 AM', '11:30 AM', '1:00 PM', '3:00 PM', '4:30 PM'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden relative flex flex-col md:flex-row h-full md:max-h-[600px] max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={resetAndClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Left Side: Info */}
        <div className="bg-gray-50 p-6 md:p-12 w-full md:w-2/5 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="flex items-center mb-4 md:mb-6 text-sm font-bold text-orange tracking-widest uppercase">
            Product Demo
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-2 md:mb-4">See It In Action</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
            Schedule a 30-minute personalized walkthrough with our logistics experts.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="text-sm text-gray-700">Live platform walkthrough</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="text-sm text-gray-700">Custom business consultation</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="text-sm text-gray-700">Pricing and setup overview</span>
            </li>
          </ul>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="p-6 md:p-12 w-full md:w-3/5 overflow-y-auto">
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Select a Date & Time</h3>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 md:mb-3">Available Dates</label>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {dates.map((date, i) => (
                    <button key={i} className="border border-gray-200 hover:border-orange focus:border-orange focus:bg-orange focus:bg-opacity-5 rounded-lg py-2 md:py-3 text-sm text-gray-700 transition">
                      {date}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2 md:mb-3">Available Times</label>
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {times.map((time, i) => (
                    <button key={i} className="border border-gray-200 hover:border-orange focus:border-orange focus:bg-orange focus:bg-opacity-5 rounded-lg py-2 text-sm text-gray-700 transition">
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setStep(2)}
                className="w-full bg-dark-blue hover:bg-blue-900 text-white font-bold py-3 md:py-4 rounded-xl transition-colors"
              >
                Continue to Details
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-orange mb-4 md:mb-6 flex items-center">
                ← Back to Calendar
              </button>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Your Details</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" required className="w-full px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" required className="w-full px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" required className="w-full px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange outline-none" />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-orange hover:bg-orange-600 text-white font-bold py-3 md:py-4 rounded-xl transition-colors mt-6 flex justify-center items-center"
                >
                  {isSubmitting ? 'Confirming...' : 'Schedule Event'}
                </button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in py-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-3xl md:text-4xl mb-4 md:mb-6">
                ✓
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-blue mb-2">You're Scheduled!</h3>
              <p className="text-sm md:text-base text-gray-600 mb-8">
                A calendar invitation has been sent to your email address.
              </p>
              <button 
                onClick={resetAndClose}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoBookingModal;
