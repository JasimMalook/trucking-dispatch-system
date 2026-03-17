import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Professional Dispatching',
      description: 'Expert dispatchers finding the best loads for your trucks, maximizing your revenue potential.',
      icon: '🚚'
    },
    {
      title: 'Load Booking',
      description: 'We handle all the paperwork and negotiations with brokers, ensuring you get paid on time.',
      icon: '📋'
    },
    {
      title: 'Route Planning',
      description: 'Optimized route planning to reduce empty miles and increase your efficiency.',
      icon: '🗺️'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to handle any issues and keep your trucks moving.',
      icon: '📞'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-blue mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive trucking dispatch solutions to help your business thrive
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
