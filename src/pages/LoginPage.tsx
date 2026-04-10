import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('demo@trucking.com');
  const [password, setPassword] = useState('demo123');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const isDemoAccount = (email === 'demo@trucking.com' || email === 'demo@dispatch.com') && password === 'demo123';

    if (isDemoAccount) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Please use demo credentials.');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-12 border-t border-gray-200">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up">
        <div className="bg-gradient-to-r from-dark-blue to-blue-900 p-8 text-center flex flex-col items-center">
          <div className="flex items-center justify-center mb-6">
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 shadow-lg rounded-lg">
              <rect width="32" height="32" rx="8" fill="#ff6b35"/>
              <path d="M8 15V20C8 21.1 8.9 22 10 22H22C23.1 22 24 21.1 24 20V15L20 11H10C8.9 11 8 11.9 8 13V15Z" fill="white"/>
              <path d="M20 11V15H24L20 11Z" fill="#ff9b73"/>
              <circle cx="12" cy="22" r="2.5" fill="#1e3a5f"/>
              <circle cx="20" cy="22" r="2.5" fill="#1e3a5f"/>
            </svg>
            <div className="text-white font-bold text-2xl tracking-tight">
              Trucking Dispatch Pro
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-blue-200">Sign in to your dispatch control center</p>
        </div>
        
        <div className="p-8">
          <div className="bg-orange bg-opacity-10 border border-orange rounded-lg p-5 mb-6 text-sm text-gray-800 flex flex-col sm:flex-row items-center justify-between shadow-sm">
            <div>
              <strong className="text-dark-blue">Demo Credentials:</strong><br/>
              Email: <span className="font-mono text-orange font-bold">demo@trucking.com</span><br/>
              Password: <span className="font-mono text-orange font-bold">demo123</span>
            </div>
            <button
              type="button"
              onClick={() => { setEmail('demo@trucking.com'); setPassword('demo123'); }}
              className="mt-3 sm:mt-0 bg-white border border-orange hover:bg-orange hover:text-white text-orange px-4 py-2 rounded-md shadow-sm transition-colors text-xs font-bold"
            >
              Fill Details
            </button>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <button type="button" className="text-sm text-orange hover:text-orange-600 focus:outline-none">Forgot?</button>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="remember" className="h-4 w-4 text-orange focus:ring-orange border-gray-300 rounded" />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
