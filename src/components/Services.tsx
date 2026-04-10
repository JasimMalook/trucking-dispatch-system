import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Custom Websites & Portals',
      description: 'Professional web presences and client portals tailored specifically for logistics and freight companies.',
      icon: '🌐'
    },
    {
      title: 'SaaS Platform Development',
      description: 'Custom cloud-based software to manage fleets, track loads, and unify your transportation network.',
      icon: '☁️'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Integrate smart routing, predictive rate analytics, and automated load matching into your workflow.',
      icon: '🤖'
    },
    {
      title: 'Dispatch & Workflow Automation',
      description: 'Streamline repetitive tasks like document processing, rate confirmations, and broker communication.',
      icon: '⚙️'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6 font-semibold text-sm">
              Logistics Technology
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-dark-blue mb-6 leading-tight">
              Built for Brokers, Shippers & Fleets.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We empower every link in the supply chain with scalable, cutting-edge software solutions tailored to the modern freight industry.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm">Freight Brokers</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm">Shippers</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm">Trucking Companies</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm">Owner Operators</span>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mb-4 border border-gray-100">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
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

export default Services;
