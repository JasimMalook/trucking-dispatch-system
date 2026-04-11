import React, { useState, useEffect } from 'react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  truckType: string;
  weeklyTarget: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  truckType?: string;
}

interface LoadNotification {
  id: number;
  message: string;
  timestamp: string;
}

interface DashboardData {
  driverName: string;
  loadStatus: string;
  earnings: string;
  location: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    truckType: '',
    weeklyTarget: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [notifications, setNotifications] = useState<LoadNotification[]>([]);
  const [dashboardData, setDashboardData] = useState<DashboardData[]>([]);

  // Simulate live notifications
  useEffect(() => {
    if (showDashboard) {
      const notificationMessages = [
        "New load booked for driver in Texas - $2,400",
        "Rate confirmation received for Chicago route",
        "Driver Mike completed delivery - payment processed",
        "Hot load available: Atlanta to Miami - premium rate",
        "Fuel card transaction approved for Driver Sarah"
      ];

      const interval = setInterval(() => {
        const newNotification: LoadNotification = {
          id: Date.now(),
          message: notificationMessages[Math.floor(Math.random() * notificationMessages.length)],
          timestamp: new Date().toLocaleTimeString()
        };
        
        setNotifications(prev => [newNotification, ...prev].slice(0, 3));
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [showDashboard]);

  // Initialize dashboard data
  useEffect(() => {
    if (showDashboard) {
      const sampleData: DashboardData[] = [
        { driverName: "Mike Johnson", loadStatus: "In Transit", earnings: "$2,400", location: "Dallas, TX" },
        { driverName: "Sarah Williams", loadStatus: "Loading", earnings: "$1,850", location: "Chicago, IL" },
        { driverName: "Tom Chen", loadStatus: "Delivered", earnings: "$3,200", location: "Miami, FL" },
        { driverName: "Lisa Rodriguez", loadStatus: "Available", earnings: "$0", location: "Atlanta, GA" }
      ];
      setDashboardData(sampleData);
    }
  }, [showDashboard]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-(+()]+$/.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.truckType) {
      newErrors.truckType = 'Please select a truck type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Store data in local state
    setSubmittedData(formData);
    setIsSubmitted(true);
    
    // Save to localStorage for persistence
    const existingSubmissions = JSON.parse(localStorage.getItem('truckingSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      status: 'new'
    };
    existingSubmissions.push(newSubmission);
    localStorage.setItem('truckingSubmissions', JSON.stringify(existingSubmissions));
    
    // Log to console for demonstration
    console.log('Form submitted and saved:', newSubmission);
    console.log('All submissions:', existingSubmissions);
    
    // Show dashboard after a short delay
    setTimeout(() => {
      setShowDashboard(true);
    }, 2000);
    
    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      truckType: '',
      weeklyTarget: '',
      message: ''
    });
    setErrors({});
  };

  const handleNewQuote = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setShowDashboard(false);
    setNotifications([]);
    setDashboardData([]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Transit': return 'text-blue-400';
      case 'Loading': return 'text-yellow-400';
      case 'Delivered': return 'text-green-400';
      case 'Available': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  if (isSubmitted && submittedData) {
    return (
      <section id="contact" className="py-20 bg-dark-blue text-white relative overflow-hidden">
        {/* Live Notifications */}
        {showDashboard && (
          <div className="fixed top-20 right-4 z-50 space-y-2 max-w-sm">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="bg-green-600 text-white p-3 rounded-lg shadow-lg border-l-4 border-green-400 animate-pulse"
              >
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">🚚</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{notification.message}</p>
                    <p className="text-xs opacity-75">{notification.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="bg-green-600 bg-opacity-20 border-2 border-green-400 rounded-lg p-8 mb-8">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold mb-4 text-green-400">Thank You!</h2>
              <p className="text-xl mb-6">Your free quote request has been submitted successfully!</p>
              <p className="text-lg font-semibold text-orange mb-4">
                📞 Our dispatch team will contact you shortly
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
                <a href="mailto:jasimmalook@gmail.com" className="bg-dark-blue bg-opacity-50 hover:bg-opacity-70 px-4 py-2 rounded-lg transition-colors">📧 jasimmalook@gmail.com</a>
                <a href="https://wa.me/923000947499" target="_blank" rel="noopener noreferrer" className="bg-green-700 bg-opacity-50 hover:bg-opacity-70 px-4 py-2 rounded-lg transition-colors">💬 WhatsApp: +92 300 094 7499</a>
                <a href="tel:+923000947499" className="bg-dark-blue bg-opacity-50 hover:bg-opacity-70 px-4 py-2 rounded-lg transition-colors">📞 +92 300 094 7499</a>
              </div>
              
              <div className="bg-dark-blue bg-opacity-50 rounded-lg p-6 text-left mb-8">
                <h3 className="text-lg font-semibold mb-4 text-orange">Request Summary:</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Name:</strong> {submittedData.fullName}</p>
                  <p><strong>Phone:</strong> {submittedData.phone}</p>
                  <p><strong>Email:</strong> {submittedData.email}</p>
                  <p><strong>Truck Type:</strong> {submittedData.truckType}</p>
                  {submittedData.weeklyTarget && <p><strong>Weekly Target:</strong> {submittedData.weeklyTarget}</p>}
                  {submittedData.message && <p><strong>Message:</strong> {submittedData.message}</p>}
                </div>
              </div>
              
              <button
                onClick={handleNewQuote}
                className="bg-orange hover:bg-orange-600 text-white font-bold text-lg px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Submit Another Request
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          {showDashboard && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Live Dashboard Preview</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Live</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-gray-400 text-sm mb-1">Active Drivers</div>
                    <div className="text-2xl font-bold text-white">12</div>
                    <div className="text-green-400 text-sm">+2 from yesterday</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-gray-400 text-sm mb-1">Loads Today</div>
                    <div className="text-2xl font-bold text-white">28</div>
                    <div className="text-green-400 text-sm">+15% avg rate</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-gray-400 text-sm mb-1">Revenue Today</div>
                    <div className="text-2xl font-bold text-white">$18,450</div>
                    <div className="text-green-400 text-sm">Above target</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-gray-400 text-sm mb-1">On-Time Delivery</div>
                    <div className="text-2xl font-bold text-white">98.5%</div>
                    <div className="text-green-400 text-sm">Industry leading</div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-white mb-4">Driver Activity</h4>
                <div className="space-y-3">
                  {dashboardData.map((driver, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center text-white font-bold">
                          {driver.driverName.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-white font-medium">{driver.driverName}</div>
                          <div className="text-gray-400 text-sm">{driver.location}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-semibold ${getStatusColor(driver.loadStatus)}`}>
                          {driver.loadStatus}
                        </div>
                        <div className="text-green-400 font-bold">{driver.earnings}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">
                    This is a preview of our real-time dispatch dashboard. Get full access when you join our service!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-dark-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get Your Free Quote</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to maximize your trucking revenue? Fill out the form below and get your customized quote within 24 hours
          </p>
          <div className="flex justify-center mt-6 space-x-8 text-sm">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>No Obligation</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>Quick Response</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 transition-colors ${
                    errors.fullName ? 'ring-2 ring-red-500' : 'focus:ring-orange'
                  }`}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 transition-colors ${
                    errors.phone ? 'ring-2 ring-red-500' : 'focus:ring-orange'
                  }`}
                  placeholder="555-123-4567 or 5551234567"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 transition-colors ${
                    errors.email ? 'ring-2 ring-red-500' : 'focus:ring-orange'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="truckType" className="block text-sm font-medium mb-2">
                  Truck Type *
                </label>
                <select
                  id="truckType"
                  name="truckType"
                  value={formData.truckType}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 transition-colors ${
                    errors.truckType ? 'ring-2 ring-red-500' : 'focus:ring-orange'
                  }`}
                >
                  <option value="">Select Truck Type</option>
                  <option value="dry-van">Dry Van</option>
                  <option value="reefer">Reefer</option>
                  <option value="flatbed">Flatbed</option>
                </select>
                {errors.truckType && (
                  <p className="text-red-400 text-sm mt-1">{errors.truckType}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="weeklyTarget" className="block text-sm font-medium mb-2">
                Weekly Target (optional)
              </label>
              <input
                type="text"
                id="weeklyTarget"
                name="weeklyTarget"
                value={formData.weeklyTarget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange"
                placeholder="e.g., $3,000 per week"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange"
                placeholder="Tell us about your trucking business and what you're looking for..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-orange hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Get My Free Quote →
            </button>
            
            <p className="text-center text-gray-400 text-sm">
              We respect your privacy. Your information will never be shared.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
