import React, { useState, useMemo, useEffect, useRef } from 'react';
import Logo from './Logo';

interface DriverData {
  id: number;
  driverName: string;
  truckType: string;
  currentLoad: string;
  status: 'In Transit' | 'Delivered' | 'Pending';
  earnings: string;
  location: string;
  pickupDate: string;
  deliveryDate: string;
}

/** Hook: animates a number from 0 to `end` over `duration` ms */
function useCountUp(end: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.round(end * progress));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { value, ref };
}

const Dashboard: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  
  const driversData: DriverData[] = useMemo(() => [
    {
      id: 1,
      driverName: 'Mike Johnson',
      truckType: 'Dry Van',
      currentLoad: 'Electronics - Dallas to Chicago',
      status: 'In Transit',
      earnings: '$2,450',
      location: 'Oklahoma City, OK',
      pickupDate: '2024-03-17',
      deliveryDate: '2024-03-18'
    },
    {
      id: 2,
      driverName: 'Sarah Williams',
      truckType: 'Reefer',
      currentLoad: 'Fresh Produce - Miami to Atlanta',
      status: 'In Transit',
      earnings: '$1,850',
      location: 'Gainesville, FL',
      pickupDate: '2024-03-17',
      deliveryDate: '2024-03-18'
    },
    {
      id: 3,
      driverName: 'Tom Chen',
      truckType: 'Flatbed',
      currentLoad: 'Steel Beams - Houston to Denver',
      status: 'Delivered',
      earnings: '$3,200',
      location: 'Denver, CO',
      pickupDate: '2024-03-16',
      deliveryDate: '2024-03-17'
    },
    {
      id: 4,
      driverName: 'Lisa Rodriguez',
      truckType: 'Dry Van',
      currentLoad: 'Waiting for assignment',
      status: 'Pending',
      earnings: '$0',
      location: 'Atlanta, GA',
      pickupDate: '-',
      deliveryDate: '-'
    },
    {
      id: 5,
      driverName: 'David Kim',
      truckType: 'Reefer',
      currentLoad: 'Frozen Goods - LA to Seattle',
      status: 'In Transit',
      earnings: '$2,750',
      location: 'Sacramento, CA',
      pickupDate: '2024-03-17',
      deliveryDate: '2024-03-19'
    },
    {
      id: 6,
      driverName: 'James Wilson',
      truckType: 'Flatbed',
      currentLoad: 'Construction Equipment - Phoenix to Vegas',
      status: 'Delivered',
      earnings: '$2,900',
      location: 'Las Vegas, NV',
      pickupDate: '2024-03-16',
      deliveryDate: '2024-03-17'
    },
    {
      id: 7,
      driverName: 'Maria Garcia',
      truckType: 'Dry Van',
      currentLoad: 'Retail Goods - New York to Boston',
      status: 'In Transit',
      earnings: '$1,650',
      location: 'Hartford, CT',
      pickupDate: '2024-03-17',
      deliveryDate: '2024-03-18'
    },
    {
      id: 8,
      driverName: 'Robert Taylor',
      truckType: 'Reefer',
      currentLoad: 'Pharmaceuticals - Chicago to Detroit',
      status: 'Pending',
      earnings: '$0',
      location: 'Chicago, IL',
      pickupDate: '-',
      deliveryDate: '-'
    }
  ], []);

  const filteredDrivers = useMemo(() => {
    if (selectedStatus === 'all') {
      return driversData;
    }
    return driversData.filter(driver => driver.status === selectedStatus);
  }, [selectedStatus, driversData]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Transit':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Transit':
        return '🚚';
      case 'Delivered':
        return '✅';
      case 'Pending':
        return '⏳';
      default:
        return '📍';
    }
  };

  const getTruckIcon = (truckType: string) => {
    switch (truckType) {
      case 'Dry Van':
        return '📦';
      case 'Reefer':
        return '❄️';
      case 'Flatbed':
        return '🔧';
      default:
        return '🚛';
    }
  };

  const totalEarnings = filteredDrivers.reduce((sum, driver) => {
    const amount = parseFloat(driver.earnings.replace('$', '').replace(',', ''));
    return sum + amount;
  }, 0);

  const activeDrivers = filteredDrivers.filter(driver => driver.status === 'In Transit').length;
  const deliveredToday = filteredDrivers.filter(driver => driver.status === 'Delivered').length;

  // Animated count-up hooks for performance metrics
  const timeSaved = useCountUp(12);
  const emptyMiles = useCountUp(18);
  const efficiency = useCountUp(24);

  // Dispatch activity log entries
  const activityLog = [
    { time: '2 min ago', event: 'Load #LD-9021 picked up', driver: 'Mike Johnson', type: 'pickup' },
    { time: '15 min ago', event: 'Rate confirmed at $3,200', driver: 'Broker: FreightMax', type: 'rate' },
    { time: '28 min ago', event: 'Load #LD-9023 delivered', driver: 'Tom Chen', type: 'delivery' },
    { time: '45 min ago', event: 'Driver check-in completed', driver: 'Sarah Williams', type: 'checkin' },
    { time: '1 hr ago', event: 'New load assigned #LD-9024', driver: 'Maria Garcia', type: 'assign' },
    { time: '1.5 hrs ago', event: 'Invoice #INV-4521 sent', driver: 'James Wilson', type: 'invoice' },
    { time: '2 hrs ago', event: 'POD uploaded for #LD-9019', driver: 'David Kim', type: 'pod' },
    { time: '3 hrs ago', event: 'Driver onboarded', driver: 'Robert Taylor', type: 'onboard' },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'pickup': return '📦';
      case 'rate': return '💲';
      case 'delivery': return '✅';
      case 'checkin': return '📍';
      case 'assign': return '🔗';
      case 'invoice': return '🧾';
      case 'pod': return '📄';
      case 'onboard': return '👤';
      default: return '📋';
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Logo size={44} showText={false} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
            Trucking Dispatch Pro Control Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Manage drivers, track loads, communicate with brokers, and automate your dispatch operations.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 stagger-children">
          <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 border-l-4 border-orange">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-sm">Total Drivers</span>
              <span className="text-2xl">👥</span>
            </div>
            <div className="text-3xl font-bold text-dark-blue">{filteredDrivers.length}</div>
            <div className="text-green-600 text-sm">Active fleet</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-sm">In Transit</span>
              <span className="text-2xl">🚚</span>
            </div>
            <div className="text-3xl font-bold text-dark-blue">{activeDrivers}</div>
            <div className="text-blue-600 text-sm flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-status-pulse"></span>
              On the road
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-sm">Delivered Today</span>
              <span className="text-2xl">✅</span>
            </div>
            <div className="text-3xl font-bold text-dark-blue">{deliveredToday}</div>
            <div className="text-green-600 text-sm">Completed</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-sm">Total Earnings</span>
              <span className="text-2xl">💰</span>
            </div>
            <div className="text-3xl font-bold text-dark-blue">${totalEarnings.toLocaleString()}</div>
            <div className="text-purple-600 text-sm">Revenue</div>
          </div>
        </div>

        {/* Performance Metrics with animated count-up */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div ref={timeSaved.ref} className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white text-center transform transition-transform hover:scale-105">
            <div className="text-4xl mb-2">⏱️</div>
            <div className="text-3xl font-bold mb-1">{timeSaved.value} hrs/week</div>
            <div className="text-sm opacity-90 font-medium">Time Saved by Automation</div>
            <div className="mt-3 bg-white bg-opacity-20 rounded-full h-2 overflow-hidden">
              <div className="bg-white h-full rounded-full animate-progress-fill" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div ref={emptyMiles.ref} className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white text-center transform transition-transform hover:scale-105">
            <div className="text-4xl mb-2">📉</div>
            <div className="text-3xl font-bold mb-1">-{emptyMiles.value}%</div>
            <div className="text-sm opacity-90 font-medium">Reduced Empty Miles</div>
            <div className="mt-3 bg-white bg-opacity-20 rounded-full h-2 overflow-hidden">
              <div className="bg-white h-full rounded-full animate-progress-fill" style={{ width: '82%' }}></div>
            </div>
          </div>
          <div ref={efficiency.ref} className="bg-gradient-to-br from-orange to-red-500 rounded-xl shadow-lg p-6 text-white text-center transform transition-transform hover:scale-105">
            <div className="text-4xl mb-2">🚀</div>
            <div className="text-3xl font-bold mb-1">+{efficiency.value}%</div>
            <div className="text-sm opacity-90 font-medium">Increased Load Efficiency</div>
            <div className="mt-3 bg-white bg-opacity-20 rounded-full h-2 overflow-hidden">
              <div className="bg-white h-full rounded-full animate-progress-fill" style={{ width: '68%' }}></div>
            </div>
          </div>
        </div>

        {/* Two-column: Driver Table + Activity Log */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Driver Operations Table - 2/3 width */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-2xl font-bold text-dark-blue mb-4 md:mb-0">Driver Operations</h2>
              
              <div className="flex items-center space-x-4">
                <label htmlFor="status-filter" className="text-sm font-medium text-gray-700">
                  Filter:
                </label>
                <select
                  id="status-filter"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-sm"
                >
                  <option value="all">All Drivers</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">Driver Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">Truck Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm hidden md:table-cell">Current Load</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm hidden lg:table-cell">Location</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDrivers.map((driver) => (
                    <tr key={driver.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {driver.driverName.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{driver.driverName}</div>
                            <div className="text-xs text-gray-500">ID: #{driver.id.toString().padStart(4, '0')}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{getTruckIcon(driver.truckType)}</span>
                          <span className="text-gray-700 text-sm">{driver.truckType}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 hidden md:table-cell">
                        <div className="max-w-xs">
                          <div className="text-gray-900 text-sm">{driver.currentLoad}</div>
                          <div className="text-xs text-gray-500">
                            {driver.pickupDate !== '-' && `Pickup: ${driver.pickupDate}`}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 hidden lg:table-cell">
                        <div className="text-gray-700 text-sm">{driver.location}</div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(driver.status)}`}>
                          {driver.status === 'In Transit' && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5 animate-status-pulse"></span>}
                          <span className="mr-1">{getStatusIcon(driver.status)}</span>
                          {driver.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className={`font-bold text-sm ${driver.earnings === '$0' ? 'text-gray-400' : 'text-green-600'}`}>
                          {driver.earnings}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredDrivers.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No drivers found</h3>
                <p className="text-gray-500">Try adjusting your filter criteria</p>
              </div>
            )}
          </div>

          {/* Activity Log - 1/3 width */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-dark-blue">Dispatch Activity</h2>
              <span className="text-xs text-green-600 bg-green-50 px-2.5 py-1 rounded-full font-medium flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-status-pulse"></span>
                Live
              </span>
            </div>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
              {activityLog.map((entry, i) => (
                <div key={i} className="flex items-start space-x-3 pb-4 border-b border-gray-50 last:border-0">
                  <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    {getActivityIcon(entry.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 font-medium leading-snug">{entry.event}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{entry.driver}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{entry.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-br from-dark-blue to-blue-900 rounded-xl shadow-lg p-8 text-white relative overflow-hidden">
          {/* Subtle route animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full opacity-5" preserveAspectRatio="none">
              <line x1="0" y1="40%" x2="100%" y2="60%" stroke="white" strokeWidth="1" strokeDasharray="8 6" className="animate-route-pulse" />
            </svg>
          </div>
          <div className="text-center relative z-10">
            <h3 className="text-2xl font-bold mb-4">Fleet Summary</h3>
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-orange mb-2">{filteredDrivers.length}</div>
                <div className="text-blue-200 text-sm md:text-base">Total Drivers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">${totalEarnings.toLocaleString()}</div>
                <div className="text-blue-200 text-sm md:text-base">Total Revenue</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{Math.round((deliveredToday / filteredDrivers.length) * 100) || 0}%</div>
                <div className="text-blue-200 text-sm md:text-base">Delivery Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
