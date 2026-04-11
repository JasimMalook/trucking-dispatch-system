import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Add Trucks & Drivers',
      description: 'Add your trucks and drivers to the dashboard.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'View Load Board',
      description: 'View and manage loads in the Load Board.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Assign & Automate',
      description: 'Assign drivers and automate dispatch workflows.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
        </svg>
      ),
    },
    {
      number: '4',
      title: 'Track & Grow',
      description: 'Track performance, activity, and revenue insights.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange bg-opacity-10 text-orange rounded-full mb-6 font-semibold text-sm">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-dark-blue mb-5 tracking-tight">
            How Trucking Dispatch Pro Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get up and running in four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200">
            <div className="h-full bg-gradient-to-r from-orange via-blue-500 to-green-500 animate-progress-fill rounded-full"></div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-20 h-20 bg-white border-2 border-gray-200 text-dark-blue rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-md group-hover:border-orange transition-colors">
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-orange text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                  {step.number}
                </div>
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-dark-blue mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[200px] mx-auto">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
            className="bg-orange hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            See How It Works — Book Free Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
