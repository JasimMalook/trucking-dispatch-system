import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Mike Johnson',
      company: 'Johnson Trucking LLC',
      text: 'Trucking Dispatch Pro has been a game-changer for our business. Our revenue increased by 35% in just 3 months!',
      rating: 5
    },
    {
      name: 'Sarah Martinez',
      company: 'Martinez Hauling',
      text: 'The 24/7 support is incredible. They find us great loads and handle all the paperwork. Highly recommended!',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Chen Logistics',
      text: 'Best dispatch service we\'ve ever used. Professional, reliable, and they really care about our success.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-blue mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real success stories from trucking companies like yours
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-dark-blue">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
