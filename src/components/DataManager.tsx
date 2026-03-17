import React, { useState, useEffect } from 'react';

interface Submission {
  id: number;
  fullName: string;
  phone: string;
  email: string;
  truckType: string;
  weeklyTarget: string;
  message: string;
  timestamp: string;
  status: string;
}

const DataManager: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load submissions from localStorage
    const stored = localStorage.getItem('truckingSubmissions');
    if (stored) {
      setSubmissions(JSON.parse(stored));
    }
  }, []);

  const clearAllData = () => {
    localStorage.removeItem('truckingSubmissions');
    setSubmissions([]);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(submissions, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `trucking-submissions-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="fixed bottom-20 left-4 z-40">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-dark-blue hover:bg-blue-900 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        title="Data Management"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {submissions.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-orange text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
            {submissions.length}
          </span>
        )}
      </button>

      {/* Data Panel */}
      {isVisible && (
        <div className="absolute bottom-full left-0 mb-4 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-96 overflow-hidden">
          {/* Header */}
          <div className="bg-dark-blue text-white p-4">
            <h3 className="font-bold text-lg">Form Submissions</h3>
            <p className="text-sm opacity-90">Total: {submissions.length} submissions</p>
          </div>

          {/* Content */}
          <div className="p-4 max-h-64 overflow-y-auto">
            {submissions.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p>No submissions yet</p>
                <p className="text-sm mt-2">Submit the form to see data here</p>
              </div>
            ) : (
              <div className="space-y-3">
                {submissions.map((submission) => (
                  <div key={submission.id} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold text-dark-blue">{submission.fullName}</div>
                        <div className="text-sm text-gray-600">{submission.email}</div>
                        <div className="text-sm text-gray-600">{submission.phone}</div>
                      </div>
                      <span className="text-xs bg-orange text-white px-2 py-1 rounded">
                        {submission.truckType}
                      </span>
                    </div>
                    {submission.message && (
                      <div className="text-sm text-gray-700 mb-2">
                        <strong>Message:</strong> {submission.message}
                      </div>
                    )}
                    <div className="text-xs text-gray-500">
                      {new Date(submission.timestamp).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="bg-gray-50 p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <button
                onClick={exportData}
                disabled={submissions.length === 0}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white px-3 py-2 rounded text-sm transition-colors"
              >
                Export JSON
              </button>
              <button
                onClick={clearAllData}
                disabled={submissions.length === 0}
                className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white px-3 py-2 rounded text-sm transition-colors"
              >
                Clear All
              </button>
            </div>
            
            {/* Storage Info */}
            <div className="mt-3 text-xs text-gray-500 text-center">
              💾 Stored in browser localStorage
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataManager;
