import React from 'react';

const SmartFeatures: React.FC = () => {
  const features = [
    {
      icon: '🤖',
      title: 'Automated Load Matching',
      description: 'Our AI-powered system instantly matches your trucks with the highest-paying loads in your area, reducing dead miles and maximizing revenue.',
      highlights: ['AI-Powered', 'Instant Matching', 'Revenue Optimization']
    },
    {
      icon: '📞',
      title: '24/7 Dispatch Support',
      description: 'Round-the-clock expert dispatch team handling rate negotiations, paperwork, and load coordination while you focus on driving.',
      highlights: ['Always Available', 'Expert Negotiators', 'Complete Support']
    },
    {
      icon: '📍',
      title: 'Real-time Tracking',
      description: 'Advanced GPS tracking with live updates, route optimization, and delivery monitoring for complete visibility of your fleet.',
      highlights: ['Live GPS', 'Route Optimization', 'Delivery Monitoring']
    },
    {
      icon: '🔔',
      title: 'Smart Notifications',
      description: 'Intelligent alerts for load opportunities, delivery confirmations, payment processing, and critical updates sent to your preferred channels.',
      highlights: ['Instant Alerts', 'Multi-channel', 'Customizable']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-dark-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white border-opacity-20"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange bg-opacity-20 rounded-full mb-6">
            <span className="text-orange font-semibold">SMART TECHNOLOGY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Next-Generation Dispatch Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leverage cutting-edge technology to streamline your trucking operations and boost profitability
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange to-purple opacity-0 group-hover:opacity-20 rounded-2xl blur transition-all duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-gray-800 bg-opacity-50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 h-full transition-all duration-300 hover:border-orange hover:transform hover:scale-105">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange to-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:shadow-xl group-hover:shadow-orange/25 transition-all duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange rounded-full mr-3"></div>
                      <span className="text-gray-400">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack Section */}
        <div className="bg-gray-800 bg-opacity-30 backdrop-blur-lg border border-gray-700 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Powered by Advanced Technology</h3>
            <p className="text-gray-300 text-lg">
              Our platform integrates cutting-edge technologies to deliver unmatched performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🧠
              </div>
              <h4 className="text-xl font-semibold mb-2">Machine Learning</h4>
              <p className="text-gray-400">
                Advanced algorithms predict optimal routes and load opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                ⚡
              </div>
              <h4 className="text-xl font-semibold mb-2">Real-time Processing</h4>
              <p className="text-gray-400">
                Millisecond response times for critical dispatch decisions
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🔒
              </div>
              <h4 className="text-xl font-semibold mb-2">Enterprise Security</h4>
              <p className="text-gray-400">
                Bank-level encryption protects your data and transactions
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange to-orange-600 p-1 rounded-full">
            <button className="bg-dark-blue text-white font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300">
              Experience Smart Dispatch
            </button>
            <div className="flex items-center text-white font-semibold px-6">
              <span className="text-2xl mr-2">🚀</span>
              <span>Get Started Today</span>
            </div>
          </div>
          <p className="text-gray-400 mt-6">
            Join thousands of drivers already using our smart dispatch platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default SmartFeatures;
