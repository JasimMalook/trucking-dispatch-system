import React from 'react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: '👥',
      text: '100+ Drivers Managed',
      description: 'Trusted by fleet owners nationwide'
    },
    {
      icon: '📞',
      text: '24/7 Support',
      description: 'Always here when you need us'
    },
    {
      icon: '⭐',
      text: '4.9/5 Rating',
      description: 'Industry-leading satisfaction'
    },
    {
      icon: '🚚',
      text: '5000+ Loads Booked',
      description: 'Proven track record'
    },
    {
      icon: '💰',
      text: '$2M+ Revenue Generated',
      description: 'Maximizing driver earnings'
    },
    {
      icon: '🏆',
      text: 'Award Winning Service',
      description: 'Recognized excellence'
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {badge.icon}
              </div>
              <div className="font-bold text-dark-blue mb-1">{badge.text}</div>
              <div className="text-sm text-gray-600">{badge.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
