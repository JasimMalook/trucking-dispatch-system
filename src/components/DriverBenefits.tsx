import React from 'react';

const DriverBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'Find Better Paying Loads',
      description: 'Access exclusive load boards and AI-matched freight that pays above market average.',
      icon: '💵'
    },
    {
      title: 'Reduce Empty Miles',
      description: 'Our smart routing ensures your next load is near your drop-off, minimizing deadhead.',
      icon: '🛣️'
    },
    {
      title: 'Automate Paperwork',
      description: 'Generate invoices, submit PODs, and manage documents digitally from your phone.',
      icon: '📄'
    },
    {
      title: 'Get Dispatch Support',
      description: '24/7 expert dispatchers handling rate negotiation and broker communication for you.',
      icon: '🎧'
    }
  ];

  return (
    <section id="driver-benefits" className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6 font-semibold text-sm">
              Maximum Earnings
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-dark-blue mb-6 leading-tight">
              Drive More, Stress Less, Earn Higher.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We provide the tools you need to maximize your time on the road while we handle the back-office operations.
            </p>
            <div className="hidden lg:block relative w-full h-80 bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
              <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-10">🚛</div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mb-4 border border-gray-100">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverBenefits;
