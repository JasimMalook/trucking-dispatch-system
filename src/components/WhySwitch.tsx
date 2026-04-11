import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhySwitch: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
      title: 'Reduce Empty Miles',
      description: 'Smart route matching minimizes deadhead miles and maximizes revenue per trip.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Automate Dispatch',
      description: 'Automate repetitive dispatch operations like status updates and rate confirmations.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: 'One Dashboard',
      description: 'Manage all drivers, loads, invoices, and communications from a single platform.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      title: 'Improve Load Efficiency',
      description: 'Increase your load-to-truck ratio and keep your fleet running at maximum capacity.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Save Hours Weekly',
      description: 'Save 12+ hours of manual work every week with automated workflows and smart tools.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          {/* Left: Text */}
          <div className="lg:w-2/5">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full mb-6 font-semibold text-sm border border-green-100">
              Why Switch?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6 leading-tight">
              Why Trucking Companies Switch to Trucking Dispatch Pro
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Companies using our platform report saving time, reducing costs, and growing revenue within the first month.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                className="bg-orange hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                Book Free Demo
              </button>
              <button
                onClick={() => navigate('/login')}
                className="bg-dark-blue hover:bg-blue-800 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                Try Demo Dashboard
              </button>
            </div>
          </div>

          {/* Right: Benefits grid */}
          <div className="lg:w-3/5">
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-xl p-6 border border-gray-100 hover:bg-white hover:shadow-lg hover:border-transparent transition-all duration-300 group ${index === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-dark-blue mb-4 group-hover:bg-orange group-hover:text-white transition-colors duration-300 border border-gray-100">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base font-bold text-dark-blue mb-1.5">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySwitch;
