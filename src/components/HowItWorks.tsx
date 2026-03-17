import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Sign Up',
      description: 'Create your account and tell us about your trucking business needs.'
    },
    {
      number: '2',
      title: 'Get Matched',
      description: 'Our expert dispatchers find the best loads that match your equipment and preferences.'
    },
    {
      number: '3',
      title: 'Grow Revenue',
      description: 'Focus on driving while we handle the logistics and maximize your earnings.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-blue mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps and start maximizing your trucking revenue
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
