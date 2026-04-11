import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Logo size={36} showText={true} textClassName="text-white" className="mb-5" />
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered dispatch management platform for trucking companies, freight brokers, and owner-operators. Maximize revenue and automate operations.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-orange transition-colors text-sm">Platform</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange transition-colors text-sm">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-orange transition-colors text-sm">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:jasimmalook@gmail.com" className="flex items-center text-gray-400 hover:text-orange transition-colors text-sm group">
                  <span className="w-8 h-8 bg-gray-800 group-hover:bg-orange rounded-lg flex items-center justify-center mr-3 transition-colors flex-shrink-0">📧</span>
                  jasimmalook@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923000947499" className="flex items-center text-gray-400 hover:text-orange transition-colors text-sm group">
                  <span className="w-8 h-8 bg-gray-800 group-hover:bg-orange rounded-lg flex items-center justify-center mr-3 transition-colors flex-shrink-0">📞</span>
                  +92 300 094 7499
                </a>
              </li>
              <li>
                <a href="https://wa.me/923000947499" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-green-400 transition-colors text-sm group">
                  <span className="w-8 h-8 bg-gray-800 group-hover:bg-green-600 rounded-lg flex items-center justify-center mr-3 transition-colors flex-shrink-0">💬</span>
                  WhatsApp: +92 300 094 7499
                </a>
              </li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Business Hours</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-white font-medium">8 AM – 8 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-medium">9 AM – 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-medium">10 AM – 4 PM</span>
              </li>
              <li className="pt-2 border-t border-gray-800">
                <span className="text-orange font-semibold flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-status-pulse"></span>
                  24/7 Emergency Support
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Trucking Dispatch Pro. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="mailto:jasimmalook@gmail.com" className="text-gray-500 hover:text-orange text-sm transition-colors">Email Us</a>
            <a href="https://wa.me/923000947499" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 text-sm transition-colors">WhatsApp</a>
            <a href="tel:+923000947499" className="text-gray-500 hover:text-orange text-sm transition-colors">Call Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
