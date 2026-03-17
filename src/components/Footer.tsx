import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Trucking Dispatch Pro</h3>
            <p className="text-gray-400">
              Your trusted partner for professional trucking dispatch services. 
              Maximize your revenue with our expert team.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-orange transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-orange transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-orange transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 (555) 123-4567</li>
              <li>📧 info@truckingdispatchpro.com</li>
              <li>📍 1234 Logistics Ave, Freight City, USA 12345</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: 10:00 AM - 4:00 PM</li>
              <li className="text-orange font-semibold">24/7 Emergency Support Available</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Trucking Dispatch Pro. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
