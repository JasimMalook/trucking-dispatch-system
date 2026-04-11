import React, { useState } from 'react';

const SaaSPreviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'board' | 'drivers' | 'dashboard' | 'analytics'>('dashboard');

  const tabs = [
    { id: 'dashboard' as const, icon: '📊', label: 'Dashboard' },
    { id: 'board' as const, icon: '📋', label: 'Load Board' },
    { id: 'drivers' as const, icon: '👥', label: 'Drivers' },
    { id: 'analytics' as const, icon: '📈', label: 'Analytics' },
  ];

  return (
    <section id="saas-preview" className="py-24 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-6 font-semibold text-sm shadow-sm border border-blue-200">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-status-pulse"></span>
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
          
          {/* Mockup Browser Chrome */}
          <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white rounded-md h-7 w-full max-w-md mx-auto flex items-center justify-center text-xs text-gray-400 border border-gray-200 px-3">
                <svg className="w-3 h-3 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>
                app.truckingdispatchpro.com/dashboard
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row" style={{ minHeight: '520px' }}>
            {/* Sidebar Mockup */}
            <div className="w-full md:w-56 bg-dark-blue text-white flex flex-col p-4 border-r border-gray-800 shrink-0">
              <div className="font-bold text-base mb-6 flex items-center mt-1">
                <div className="w-7 h-7 rounded-md bg-orange mr-2.5 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 32 32" fill="none"><path d="M8 15V20C8 21.1 8.9 22 10 22H22C23.1 22 24 21.1 24 20V15L20 11H10C8.9 11 8 11.9 8 13V15Z" fill="white"/></svg>
                </div>
                Dispatch Pro
              </div>

              <nav className="space-y-1 flex-1">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center space-x-2.5 transition-all text-sm ${
                      activeTab === tab.id 
                        ? 'bg-blue-800 border-l-3 border-orange font-semibold' 
                        : 'hover:bg-blue-900 border-l-3 border-transparent text-blue-200'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>

              <div className="border-t border-blue-800 pt-3 mt-3">
                <div className="flex items-center space-x-2 px-3 py-2">
                  <div className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center text-xs font-bold">D</div>
                  <div className="text-xs">
                    <div className="font-semibold text-white">Demo User</div>
                    <div className="text-blue-300">Admin</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-gray-50 overflow-y-auto p-5 md:p-6">
              
              {/* Topbar */}
              <div className="flex justify-between items-center mb-6 pb-3 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-800">
                  {activeTab === 'board' && 'Active Load Board'}
                  {activeTab === 'drivers' && 'Fleet Management'}
                  {activeTab === 'dashboard' && 'Control Center'}
                  {activeTab === 'analytics' && 'Performance Analytics'}
                </h3>
                <div className="text-xs text-gray-400">
                  Last updated: just now
                </div>
              </div>

              {/* Tab Content */}
              <div className="animate-fade-in-up" key={activeTab}>
                
                {activeTab === 'dashboard' && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { title: 'Total Loads', val: '1,284', inc: '+12%', color: 'border-l-orange' },
                        { title: 'Active Drivers', val: '42', inc: '+3', color: 'border-l-blue-500' },
                        { title: 'Est. Revenue', val: '$142K', inc: '+8%', color: 'border-l-green-500' },
                        { title: 'Pending', val: '14', inc: '-2', color: 'border-l-yellow-500' },
                      ].map((stat, i) => (
                        <div key={i} className={`bg-white p-4 rounded-xl border border-gray-100 shadow-sm border-l-4 ${stat.color}`}>
                          <div className="text-xs text-gray-500 mb-1">{stat.title}</div>
                          <div className="text-xl font-bold text-dark-blue">{stat.val}</div>
                          <div className={`text-xs mt-1.5 ${stat.inc.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                            {stat.inc} this month
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Map placeholder with animated route */}
                    <div className="bg-white rounded-xl border border-gray-100 p-6 h-48 flex items-center justify-center shadow-sm relative overflow-hidden">
                      <div className="absolute inset-0 opacity-5">
                        <svg className="w-full h-full" preserveAspectRatio="none">
                          <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="#1e3a5f" strokeWidth="2" strokeDasharray="6 4" className="animate-route-pulse" />
                          <line x1="20%" y1="70%" x2="80%" y2="30%" stroke="#ff6b35" strokeWidth="2" strokeDasharray="6 4" className="animate-route-pulse" style={{ animationDelay: '0.5s' }} />
                        </svg>
                      </div>
                      <div className="text-gray-400 text-sm flex flex-col items-center relative z-10">
                        <span className="text-3xl mb-2">🗺️</span> 
                        <span className="font-medium">Live Fleet Tracking Map</span>
                        <span className="text-xs text-gray-300 mt-1">Real-time GPS positions updated every 30s</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'board' && (
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50 border-b border-gray-100 text-gray-600">
                        <tr>
                          <th className="px-4 md:px-6 py-3 font-semibold text-xs uppercase tracking-wide">Load ID</th>
                          <th className="px-4 md:px-6 py-3 font-semibold text-xs uppercase tracking-wide">Route</th>
                          <th className="px-4 md:px-6 py-3 font-semibold text-xs uppercase tracking-wide">Rate</th>
                          <th className="px-4 md:px-6 py-3 font-semibold text-xs uppercase tracking-wide">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {[
                          { id: '#LD-9021', route: 'Chicago, IL → Dallas, TX', rate: '$3,200', status: 'In Transit', statusColor: 'bg-blue-100 text-blue-800' },
                          { id: '#LD-9022', route: 'Miami, FL → Atlanta, GA', rate: '$1,850', status: 'Pending', statusColor: 'bg-yellow-100 text-yellow-800' },
                          { id: '#LD-9023', route: 'Seattle, WA → Denver, CO', rate: '$4,100', status: 'Delivered', statusColor: 'bg-green-100 text-green-800' },
                          { id: '#LD-9024', route: 'Boston, MA → New York, NY', rate: '$950', status: 'Assigned', statusColor: 'bg-purple-100 text-purple-800' },
                          { id: '#LD-9025', route: 'Phoenix, AZ → Las Vegas, NV', rate: '$1,400', status: 'In Transit', statusColor: 'bg-blue-100 text-blue-800' },
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 md:px-6 py-3.5 font-medium text-gray-900">{row.id}</td>
                            <td className="px-4 md:px-6 py-3.5 text-gray-600">{row.route}</td>
                            <td className="px-4 md:px-6 py-3.5 font-semibold text-gray-900">{row.rate}</td>
                            <td className="px-4 md:px-6 py-3.5">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.statusColor}`}>
                                {row.status === 'In Transit' && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5 animate-status-pulse"></span>}
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { name: 'Michael Chen', status: 'Active', load: '#LD-9021 (In Transit)', truck: 'Dry Van' },
                      { name: 'Sarah Jenkins', status: 'Off Duty', load: 'None', truck: 'Reefer' },
                      { name: 'David Smith', status: 'Active', load: '#LD-9023 (Delivered)', truck: 'Flatbed' },
                      { name: 'Marcus Johnson', status: 'Active', load: '#LD-9024 (Assigned)', truck: 'Dry Van' },
                    ].map((driver, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start space-x-3 hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-gradient-to-br from-dark-blue to-blue-800 rounded-full flex items-center justify-center font-bold text-white text-sm">
                          {driver.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-gray-900 text-sm">{driver.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{driver.truck}</div>
                          <div className="text-xs text-gray-500 mt-1.5 flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-1.5 flex-shrink-0 ${driver.status === 'Active' ? 'bg-green-500 animate-status-pulse' : 'bg-gray-400'}`}></div>
                            {driver.status}
                          </div>
                          <div className="text-xs text-gray-600 mt-1.5 font-medium bg-gray-50 px-2 py-0.5 rounded inline-block">
                            {driver.load}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-green-500 text-2xl font-bold mb-1">+24%</div>
                        <div className="text-gray-800 font-semibold text-sm mb-0.5">Efficiency Increase</div>
                        <div className="text-xs text-gray-500">Across entire fleet operations</div>
                        <div className="mt-3 bg-green-50 rounded-full h-2 overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full animate-progress-fill" style={{ width: '74%' }}></div>
                        </div>
                      </div>
                      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-blue-500 text-2xl font-bold mb-1">12 hrs</div>
                        <div className="text-gray-800 font-semibold text-sm mb-0.5">Time Saved Weekly</div>
                        <div className="text-xs text-gray-500">Via dispatch automation</div>
                        <div className="mt-3 bg-blue-50 rounded-full h-2 overflow-hidden">
                          <div className="bg-blue-500 h-full rounded-full animate-progress-fill" style={{ width: '68%' }}></div>
                        </div>
                      </div>
                      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-orange text-2xl font-bold mb-1">-18%</div>
                        <div className="text-gray-800 font-semibold text-sm mb-0.5">Empty Miles Reduced</div>
                        <div className="text-xs text-gray-500">Through smart route matching</div>
                        <div className="mt-3 bg-orange bg-opacity-10 rounded-full h-2 overflow-hidden">
                          <div className="bg-orange h-full rounded-full animate-progress-fill" style={{ width: '82%' }}></div>
                        </div>
                      </div>
                    </div>
                    {/* Bar chart */}
                    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-gray-700">Weekly Revenue Trend</span>
                        <span className="text-xs text-gray-400">Last 7 weeks</span>
                      </div>
                      <div className="flex items-end space-x-3 h-32">
                        {[
                          { h: 40, label: 'W1' },
                          { h: 60, label: 'W2' },
                          { h: 45, label: 'W3' },
                          { h: 80, label: 'W4' },
                          { h: 65, label: 'W5' },
                          { h: 95, label: 'W6' },
                          { h: 85, label: 'W7' },
                        ].map((bar, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center">
                            <div className="w-full bg-blue-50 rounded-t-md relative" style={{ height: '100%' }}>
                              <div
                                className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md animate-bar-grow"
                                style={{ height: `${bar.h}%`, animationDelay: `${i * 0.1}s` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-400 mt-1.5">{bar.label}</span>
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
