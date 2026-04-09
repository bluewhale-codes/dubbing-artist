import { Check, Info } from 'lucide-react';
import { useEffect } from 'react';

export function LicenseSelector({ 
  usageTypes, 
  setUsageTypes, 
  region, 
  setRegion,
  duration,
  setDuration ,
  monthyear,
  setMonthyear
}) {
  const usageOptions = [
    'Internal Company Use',
    'Website',
    'Organic Social Media',
    'YouTube Video',
    'Paid Online Ads',
    'TV Commercial',
    'Radio Commercial'
  ];

  const regionOptions = ['Local', 'National', 'Worldwide'];
  
  const durationOptions = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];
  const labels = [
    'months',
    'years',
  ];

  const toggleUsageType = (type) => {
    if (usageTypes.includes(type)) {
      setUsageTypes(usageTypes.filter(t => t !== type));
    } else {
      setUsageTypes([...usageTypes, type]);
    }
  };

  // Determine license type based on selections
  const getLicenseType = () => {
    const broadcastTypes = ['TV Commercial', 'Radio Commercial'];
    const hasBroadcast = usageTypes.some(type => broadcastTypes.includes(type));
    return hasBroadcast ? 'Broadcast' : 'Non-Broadcast';
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm mb-3">Usage Type (Multi-select) *</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {usageOptions.map((option) => {
            const isSelected = usageTypes.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleUsageType(option)}
                className={`px-4 py-3 rounded-lg border-2 transition-all text-left flex items-center justify-between ${
                  isSelected
                    ? 'border-primary bg-purple-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className={isSelected ? 'text-primary' : 'text-gray-700'}>
                  {option}
                </span>
                {isSelected && (
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-2">Region *</label>
          <div className="flex gap-3">
            {regionOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setRegion(option)}
                className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all ${
                  region === option
                    ? 'border-primary bg-purple-50 text-primary'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2">Usage Duration *</label>
          <div>
            <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            required
          >
            <option value="">Select duration</option>
            {durationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          </div>
          <div className='mt-2'>
            <select
            value={monthyear}
            onChange={(e) => setMonthyear(e.target.value)}
            className="w-full px-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            required
          >
            <option value="">month/year</option>
            {labels.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
          </div>
          
        </div>
      </div>

      {usageTypes.length > 0 && region && duration && (
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="text-sm mb-2">License Summary</h4>
              <div className="space-y-1 text-sm text-gray-700">
                <p><span className="font-medium">License Type:</span> {getLicenseType()}</p>
                <p><span className="font-medium">Usage:</span> {usageTypes.join(', ')}</p>
                <p><span className="font-medium">Region:</span> {region}</p>
                <p><span className="font-medium">Duration:</span> {duration}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
