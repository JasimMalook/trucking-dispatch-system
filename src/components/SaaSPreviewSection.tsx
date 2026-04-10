import React, { useState } from 'react';

const SaaSPreviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'board' | 'drivers' | 'dashboard' | 'analytics'>('board');

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-6 font-semibold text-sm shadow-sm border border-blue-200">
            Platform Preview
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-dark-blue mb-6 tracking-tight">
            Built for Modern Logistics Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our intuitive, powerful SaaS interface designed explicitly to scale trucking companies and freight brokers.
          </p>
        </div>

        {/* Browser Mockup Wrapper */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
          
          {/* Mockup Header */}
          <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white rounded-md h-6 w-full max-w-md mx-auto flex items-center justify-center text-xs text-gray-400 border border-gray-200">
                app.truckingdispatch.com/dashboard
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row h-[600px]">
            {/* Sidebar Mockup */}
            <div className="w-full md:w-64 bg-dark-blue text-white flex flex-col p-4 border-r border-gray-800 overflow-y-auto">
              <div className="font-bold text-lg mb-8 flex items-center mt-2">
                 <div className="w-8 h-8 rounded bg-orange mr-3 flex items-center justify-center">
                   <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><path d="M8 15V20C8 21.1 8.9 22 10 22H22C23.1 22 24 21.1 24 20V15L20 11H10C8.9 11 8 11.9 8 13V15Z" fill="white"/></svg>
                 </div>
                 Dispatch Pro
              </div>

              <nav className="space-y-2 flex-1">
                <button 
                  onClick={() => setActiveTab('dashboard')} 
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${activeTab === 'dashboard' ? 'bg-blue-800 border-l-4 border-orange' : 'hover:bg-blue-900 border-l-4 border-transparent'}`}
                >
                  <span>📊</span> <span>Dashboard</span>
                </button>
                <button 
                  onClick={() => setActiveTab('board')} 
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${activeTab === 'board' ? 'bg-blue-800 border-l-4 border-orange' : 'hover:bg-blue-900 border-l-4 border-transparent'}`}
                >
                  <span>📋</span> <span>Load Board</span>
                </button>
                <button 
                  onClick={() => setActiveTab('drivers')} 
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${activeTab === 'drivers' ? 'bg-blue-800 border-l-4 border-orange' : 'hover:bg-blue-900 border-l-4 border-transparent'}`}
                >
                  <span>👥</span> <span>Drivers</span>
                </button>
                <button 
                  onClick={() => setActiveTab('analytics')} 
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${activeTab === 'analytics' ? 'bg-blue-800 border-l-4 border-orange' : 'hover:bg-blue-900 border-l-4 border-transparent'}`}
                >
                  <span>📈</span> <span>Analytics</span>
                </button>
              </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-gray-50 overflow-y-auto p-6 md:p-8 relative">
              
              {/* Topbar */}
              <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
                <h3 className="text-2xl font-bold text-gray-800 capitalize">
                  {activeTab === 'board' && 'Active Load Board'}
                  {activeTab === 'drivers' && 'Fleet Management'}
                  {activeTab === 'dashboard' && 'Control Center'}
                  {activeTab === 'analytics' && 'Performance Analytics'}
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <div className="hidden sm:block">
                    <div className="text-sm font-bold text-gray-700">Demo User</div>
                    <div className="text-xs text-gray-500">Admin</div>
                  </div>
                </div>
              </div>

              {/* Dynamic Tab Content */}
              <div className="animate-fade-in">
                
                {activeTab === 'dashboard' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[{title: 'Total Loads', val: '1,284', inc: '+12%'}, {title: 'Active Drivers', val: '42', inc: '+3'}, {title: 'Est. Revenue', val: '$142K', inc: '+8%'}, {title: 'Pending', val: '14', inc: '-2%'}].map((stat, i) => (
                        <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <div className="text-sm text-gray-500 mb-1">{stat.title}</div>
                          <div className="text-2xl font-bold text-dark-blue">{stat.val}</div>
                          <div className={`text-xs mt-2 ${stat.inc.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                            {stat.inc} this month
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 p-6 h-64 flex items-center justify-center shadow-sm">
                       <div className="text-gray-400 text-sm flex flex-col items-center">
                          <span className="text-4xl mb-3">📍</span> Live Fleet Tracking Map Preview
                       </div>
                    </div>
                  </div>
                )}

                {activeTab === 'board' && (
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                      <thead className="bg-gray-50 border-b border-gray-100 text-gray-600">
                        <tr>
                          <th className="px-6 py-4 font-semibold">Load ID</th>
                          <th className="px-6 py-4 font-semibold">Route</th>
                          <th className="px-6 py-4 font-semibold">Rate</th>
                          <th className="px-6 py-4 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {[
                          { id: '#LD-9021', route: 'Chicago, IL → Dallas, TX', rate: '$3,200', status: 'In Transit', c: 'blue' },
                          { id: '#LD-9022', route: 'Miami, FL → Atlanta, GA', rate: '$1,850', status: 'Pending', c: 'yellow' },
                          { id: '#LD-9023', route: 'Seattle, WA → Denver, CO', rate: '$4,100', status: 'Delivered', c: 'green' },
                          { id: '#LD-9024', route: 'Boston, MA → New York, NY', rate: '$950', status: 'Assigned', c: 'purple' },
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">{row.id}</td>
                            <td className="px-6 py-4 text-gray-600">{row.route}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">{row.rate}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${row.c}-100 text-${row.c}-800`}>
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'drivers' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'Michael Chen', status: 'Active', load: '#LD-9021 (In Transit)' },
                      { name: 'Sarah Jenkins', status: 'Off Duty', load: 'None' },
                      { name: 'David Smith', status: 'Active', load: '#LD-9023 (Delivered)' },
                      { name: 'Marcus Johnson', status: 'Active', load: '#LD-9024 (Assigned)' },
                    ].map((driver, i) => (
                      <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500">
                          {driver.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{driver.name}</div>
                          <div className="text-xs text-gray-500 mt-1 flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-2 ${driver.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                            {driver.status}
                          </div>
                          <div className="text-xs text-gray-600 mt-2 font-medium bg-gray-50 px-2 py-1 rounded inline-block">
                            Load: {driver.load}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-green-500 text-3xl font-bold mb-2">+24%</div>
                        <div className="text-gray-800 font-semibold mb-1">Efficiency Increase</div>
                        <div className="text-sm text-gray-500">Across entire fleet operations</div>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-blue-500 text-3xl font-bold mb-2">12 hrs</div>
                        <div className="text-gray-800 font-semibold mb-1">Time Saved Weekly</div>
                        <div className="text-sm text-gray-500">Via dispatch automation</div>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-orange text-3xl font-bold mb-2">-18%</div>
                        <div className="text-gray-800 font-semibold mb-1">Empty Miles Reduced</div>
                        <div className="text-sm text-gray-500">Through smart route matching</div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 p-6 h-48 flex items-center justify-center shadow-sm">
                       <div className="flex items-end space-x-4 h-full pb-6 pt-10">
                         {/* Fake bar chart */}
                         {[40, 60, 45, 80, 65, 95, 85].map((h, i) => (
                           <div key={i} className="w-8 bg-blue-100 rounded-t-sm relative group">
                             <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }}></div>
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSPreviewSection;
