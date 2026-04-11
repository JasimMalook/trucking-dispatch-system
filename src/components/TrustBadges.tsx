import React from 'react';

const TrustBadges: React.FC = () => {
  const stats = [
    {
      value: '100+',
      label: 'Drivers Managed',
      icon: '👥',
      color: 'text-blue-500',
    },
    {
      value: '500+',
      label: 'Loads Dispatched',
      icon: '📦',
      color: 'text-orange',
    },
    {
      value: '24/7',
      label: 'Dispatch Support',
      icon: '🛡️',
      color: 'text-green-500',
    },
    {
      value: 'USA',
      label: 'Built for US Trucking',
      icon: '🇺🇸',
      color: 'text-dark-blue',
    },
  ];

  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className={`text-2xl md:text-3xl font-extrabold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
