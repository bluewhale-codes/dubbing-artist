import { Calendar, Clock } from 'lucide-react';

export function TimelinePicker({ 
  deadline, 
  setDeadline, 
  deliverySpeed, 
  setDeliverySpeed 
}) {
  const speedOptions = [
    { label: '24 hours', value: '24h', icon: '⚡' },
    { label: '3 days', value: '3d', icon: '🚀' },
    { label: '7 days', value: '7d', icon: '📅' },
    { label: 'Custom', value: 'custom', icon: '⚙️' }
  ];

  // Calculate suggested deadline based on delivery speed
  const getSuggestedDate = (speed) => {
    const today = new Date();
    switch (speed) {
      case '24h':
        today.setDate(today.getDate() + 1);
        break;
      case '3d':
        today.setDate(today.getDate() + 3);
        break;
      case '7d':
        today.setDate(today.getDate() + 7);
        break;
      default:
        return '';
    }
    return today.toISOString().split('T')[0];
  };

  const handleSpeedChange = (speed) => {
    setDeliverySpeed(speed);
    if (speed !== 'custom') {
      setDeadline(getSuggestedDate(speed));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm mb-3">Delivery Speed *</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {speedOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSpeedChange(option.value)}
              className={`px-4 py-3 rounded-lg border-2 transition-all ${
                deliverySpeed === option.value
                  ? 'border-primary bg-purple-50 text-primary'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">{option.icon}</span>
                <span className="text-sm">{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm mb-2">Deadline Date *</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      {deadline && (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary" />
          <p className="text-sm text-gray-700">
            <span className="font-medium">Project Deadline:</span>{' '}
            {new Date(deadline).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      )}
    </div>
  );
}
