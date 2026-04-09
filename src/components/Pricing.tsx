import React from 'react';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '$199',
      period: '/mo',
      description: 'Perfect for new owner-operators and small fleets.',
      features: ['Dispatch Website', 'Lead Capture', 'Mobile Friendly', 'Email Support'],
      highlighted: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/mo',
      description: 'Ideal for growing dispatch agencies and mid-sized fleets.',
      features: ['Dispatch Website', 'Dispatch Dashboard', 'Automation Setup', 'Priority Support'],
      highlighted: true,
      buttonText: 'Most Popular'
    },
    {
      name: 'Premium',
      price: '$999',
      period: '/mo',
      description: 'Custom solutions for enterprise trucking companies.',
      features: ['Custom Dispatch System', 'AI Chatbot', 'Automation Workflows', '24/7 Support'],
      highlighted: false,
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-blue mb-4">
            Transparent Pricing for Every Scale
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the clear, predictable plan that best fits your trucking business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 ${
                tier.highlighted 
                  ? 'bg-dark-blue text-white shadow-2xl transform md:-translate-y-4 border-2 border-orange' 
                  : 'bg-white text-gray-900 border border-gray-200 shadow-lg'
              }`}
            >
              {tier.highlighted && (
                <div className="text-orange font-bold text-sm tracking-widest uppercase mb-4 text-center">
                  Highly Recommended
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-dark-blue'}`}>
                {tier.name}
              </h3>
              <p className={`mb-6 min-h-[48px] ${tier.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {tier.description}
              </p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold">{tier.price}</span>
                <span className={tier.highlighted ? 'text-blue-200' : 'text-gray-500'}>{tier.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.highlighted ? 'text-orange' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className={tier.highlighted ? 'text-blue-50' : 'text-gray-700'}>{feature}</span>
                  </div>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-orange hover:bg-orange-600 text-white shadow-lg shadow-orange/30'
                    : 'bg-gray-100 hover:bg-gray-200 text-dark-blue'
                }`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
