import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('demo@dispatch.com');
  const [password, setPassword] = useState('demo123');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'demo@dispatch.com' && password === 'demo123') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Please use demo credentials.');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-12 border-t border-gray-200">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up">
        <div className="bg-gradient-to-r from-dark-blue to-blue-900 p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-blue-200">Sign in to your dispatch control center</p>
        </div>
        
        <div className="p-8">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 text-sm text-blue-800">
            <strong>Demo Credentials:</strong><br/>
            Email: demo@dispatch.com<br/>
            Password: demo123
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
