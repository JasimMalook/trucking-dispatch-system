import React, { useState, useMemo } from 'react';

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

  return (
    <section id="dashboard" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-blue mb-4 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4 shadow-sm rounded-lg">
              <rect width="32" height="32" rx="8" fill="#ff6b35"/>
              <path d="M8 15V20C8 21.1 8.9 22 10 22H22C23.1 22 24 21.1 24 20V15L20 11H10C8.9 11 8 11.9 8 13V15Z" fill="white"/>
              <path d="M20 11V15H24L20 11Z" fill="#ff9b73"/>
              <circle cx="12" cy="22" r="2.5" fill="#1e3a5f"/>
              <circle cx="20" cy="22" r="2.5" fill="#1e3a5f"/>
            </svg>
            Trucking Dispatch Pro Control Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Manage drivers, track loads, communicate with brokers, and automate your dispatch operations.
          </p>
          <button className="bg-orange hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-lg">
            Explore Dashboard
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-sm">Total Drivers</span>
              <span className="text-2xl">👥</span>
            </div>
            <div className="text-3xl font-bold text-dark-blue">{filteredDrivers.length}</div>
            <div className="text-green-600 text-sm">Active fleet</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-sm">In Transit</span>
              <span className="text-2xl">🚚</span>
            </div>
            <div className="text-3xl font-bold text-dark-blue">{activeDrivers}</div>
            <div className="text-blue-600 text-sm">On the road</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-sm">Delivered Today</span>
              <span className="text-2xl">✅</span>
            </div>
            <div className="text-3xl font-bold text-dark-blue">{deliveredToday}</div>
            <div className="text-green-600 text-sm">Completed</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-sm">Total Earnings</span>
              <span className="text-2xl">💰</span>
            </div>
            <div className="text-3xl font-bold text-dark-blue">${totalEarnings.toLocaleString()}</div>
            <div className="text-purple-600 text-sm">Revenue</div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white text-center transform transition-transform hover:scale-105">
            <div className="text-4xl mb-2">⏱️</div>
            <div className="text-3xl font-bold mb-1">12 hrs/week</div>
            <div className="text-sm opacity-90 font-medium">Time Saved by Automation</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white text-center transform transition-transform hover:scale-105">
            <div className="text-4xl mb-2">📉</div>
            <div className="text-3xl font-bold mb-1">-18%</div>
            <div className="text-sm opacity-90 font-medium">Reduced Empty Miles</div>
          </div>
          <div className="bg-gradient-to-br from-orange to-red-500 rounded-xl shadow-lg p-6 text-white text-center transform transition-transform hover:scale-105">
            <div className="text-4xl mb-2">🚀</div>
            <div className="text-3xl font-bold mb-1">+24%</div>
            <div className="text-sm opacity-90 font-medium">Increased Load Efficiency</div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark-blue mb-4 md:mb-0">Driver Operations</h2>
            
            <div className="flex items-center space-x-4">
              <label htmlFor="status-filter" className="text-sm font-medium text-gray-700">
                Filter by Status:
              </label>
              <select
                id="status-filter"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
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
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Driver Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Truck Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Current Load</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Earnings</th>
                </tr>
              </thead>
              <tbody>
                {filteredDrivers.map((driver) => (
                  <tr key={driver.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center text-white font-bold">
                          {driver.driverName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{driver.driverName}</div>
                          <div className="text-sm text-gray-500">ID: #{driver.id.toString().padStart(4, '0')}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{getTruckIcon(driver.truckType)}</span>
                        <span className="text-gray-700">{driver.truckType}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="max-w-xs">
                        <div className="text-gray-900 font-medium">{driver.currentLoad}</div>
                        <div className="text-sm text-gray-500">
                          {driver.pickupDate !== '-' && `Pickup: ${driver.pickupDate}`}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-700">{driver.location}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(driver.status)}`}>
                        <span className="mr-1">{getStatusIcon(driver.status)}</span>
                        {driver.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className={`font-bold ${driver.earnings === '$0' ? 'text-gray-400' : 'text-green-600'}`}>
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

        {/* Summary Section */}
        <div className="bg-dark-blue rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Fleet Summary</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-orange mb-2">{filteredDrivers.length}</div>
                <div className="text-blue-200">Total Drivers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">${totalEarnings.toLocaleString()}</div>
                <div className="text-blue-200">Total Revenue</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{Math.round((deliveredToday / filteredDrivers.length) * 100) || 0}%</div>
                <div className="text-blue-200">Delivery Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
