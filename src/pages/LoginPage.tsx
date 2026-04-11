import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('demo@trucking.com');
  const [password, setPassword] = useState('demo123');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const isDemoAccount = (email === 'demo@trucking.com' || email === 'demo@dispatch.com') && password === 'demo123';

    // Simulate brief loading for realism
    setTimeout(() => {
      if (isDemoAccount) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Please use demo credentials.');
        setIsLoading(false);
      }
    }, 600);
  };

  const handleQuickDemo = () => {
    setEmail('demo@trucking.com');
    setPassword('demo123');
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-16">
      <div className="max-w-md w-full animate-fade-in-up">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-br from-dark-blue to-blue-900 p-8 text-center flex flex-col items-center relative overflow-hidden">
            {/* Subtle animated route line in header */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg className="w-full h-full opacity-10" preserveAspectRatio="none">
                <line x1="0" y1="50%" x2="100%" y2="30%" stroke="white" strokeWidth="1" strokeDasharray="6 4" className="animate-route-pulse" />
              </svg>
            </div>

            <div className="relative z-10">
              <Logo size={44} showText={false} className="mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-1">Welcome to Dispatch Pro</h2>
              <p className="text-blue-200 text-sm">Sign in to your dispatch control center</p>
            </div>
          </div>
          
          <div className="p-8">
            {/* Quick Demo Access */}
            <button
              type="button"
              onClick={handleQuickDemo}
              disabled={isLoading}
              className="w-full mb-6 bg-gradient-to-r from-orange to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 disabled:opacity-60"
            >
              <span className="text-lg">🚀</span>
              <span>Try Demo Dashboard Instantly</span>
            </button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-400">or sign in manually</span>
              </div>
            </div>

            {/* Demo Credentials Box */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 text-sm flex items-start space-x-3">
              <div className="text-blue-500 text-lg mt-0.5">🔑</div>
              <div>
                <span className="font-semibold text-dark-blue block mb-1">Demo Credentials</span>
                <span className="text-gray-600">Email: </span>
                <span className="font-mono text-blue-700 font-semibold">demo@trucking.com</span><br/>
                <span className="text-gray-600">Password: </span>
                <span className="font-mono text-blue-700 font-semibold">demo123</span>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 border border-red-100 flex items-center space-x-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <button type="button" className="text-sm text-orange hover:text-orange-600 focus:outline-none">Forgot?</button>
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                />
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="remember" defaultChecked className="h-4 w-4 text-orange focus:ring-orange border-gray-300 rounded" />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-dark-blue hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-60 flex items-center justify-center"
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                ) : (
                  'Sign In to Dashboard'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom trust text */}
        <p className="text-center text-xs text-gray-400 mt-6">
          🔒 Bank-level encryption · Your data is safe with us
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
