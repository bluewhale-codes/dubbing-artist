import { DollarSign } from 'lucide-react';

export function BudgetSelector({ 
  pricingModel, 
  setPricingModel, 
  minBudget, 
  setMinBudget,
  maxBudget,
  setMaxBudget 
}) {
  const pricingModels = [
    'Fixed Price',
    'Per Word',
    'Per Minute',
    'Negotiable'
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm mb-2">Pricing Model *</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {pricingModels.map((model) => (
            <button
              key={model}
              type="button"
              onClick={() => setPricingModel(model)}
              className={`px-4 py-3 rounded-lg border-2 transition-all ${
                pricingModel === model
                  ? 'border-primary bg-purple-50 text-primary'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {model}
            </button>
          ))}
        </div>
      </div>

      {pricingModel && pricingModel !== 'Negotiable' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2">
              Minimum Budget {pricingModel !== 'Fixed Price' && `(${pricingModel})`}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="number"
                value={minBudget}
                onChange={(e) => setMinBudget(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="0"
                min="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">
              Maximum Budget {pricingModel !== 'Fixed Price' && `(${pricingModel})`}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="number"
                value={maxBudget}
                onChange={(e) => setMaxBudget(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="0"
                min="0"
              />
            </div>
          </div>
        </div>
      )}

      {minBudget && maxBudget && pricingModel !== 'Negotiable' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Budget Range:</span> ${minBudget} – ${maxBudget}
            {pricingModel !== 'Fixed Price' && ` ${pricingModel.toLowerCase()}`}
          </p>
        </div>
      )}

      {pricingModel === 'Negotiable' && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            Budget will be negotiated with selected voice artists based on project requirements.
          </p>
        </div>
      )}
    </div>
  );
}
