import React from 'react';

const TargetAudience: React.FC = () => {
  const audiences = [
    {
      title: 'Freight Brokers',
      icon: '🏢',
      description: 'Streamline carrier communication, automate dispatch, and manage your margins effortlessly.'
    },
    {
      title: 'Trucking Companies',
      icon: '🚛',
      description: 'Manage fleets of all sizes, track drivers in real-time, and handle invoicing from one central hub.'
    },
    {
      title: 'Box Truck Owners',
      icon: '🚚',
      description: 'Find local and regional loads faster, reducing deadhead miles and maximizing daily revenue.'
    },
    {
      title: 'Cargo Van Drivers',
      icon: '🚐',
      description: 'Access expedited freight opportunities and manage quick turnaround deliveries efficiently.'
    },
    {
      title: 'Dispatch Agencies',
      icon: '🎧',
      description: 'Handle multiple carriers simultaneously with advanced load boards and automated paperwork.'
    }
  ];

  return (
    <section id="target-audience" className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
            Built For The Entire Logistics Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides specialized tools and features tailored to your specific role in the supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
          {audiences.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg hover:border-orange transition-all duration-300 ${
                index === 3 ? 'lg:col-start-2' : ''
              }`}
            >
              <div className="w-16 h-16 bg-blue-50 text-3xl rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
