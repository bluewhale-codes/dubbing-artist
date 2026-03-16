import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch';

export function FilterBar() {
  const [proServices, setProServices] = useState(false);
  const [instantResponse, setInstantResponse] = useState(false);

  return (
    <div className="mb-8 bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Left Side - Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:border-purple-600 transition-all font-medium text-gray-700 hover:text-purple-600">
            Voice Over Options
            <ChevronDown className="w-4 h-4" />
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:border-purple-600 transition-all font-medium text-gray-700 hover:text-purple-600">
            Seller Details
            <ChevronDown className="w-4 h-4" />
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:border-purple-600 transition-all font-medium text-gray-700 hover:text-purple-600">
            Budget
            <ChevronDown className="w-4 h-4" />
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:border-purple-600 transition-all font-medium text-gray-700 hover:text-purple-600">
            Delivery Time
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side - Toggles and Sort */}
        <div className="flex flex-wrap items-center gap-6">
          <ToggleSwitch 
            label="Pro Services" 
            enabled={proServices}
            onChange={setProServices}
          />
          
          <ToggleSwitch 
            label="Instant Response" 
            enabled={instantResponse}
            onChange={setInstantResponse}
          />
          
          <div className="h-6 w-px bg-gray-300"></div>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:border-purple-600 transition-all font-medium text-gray-700 hover:text-purple-600">
            Sort by: Best Selling
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
