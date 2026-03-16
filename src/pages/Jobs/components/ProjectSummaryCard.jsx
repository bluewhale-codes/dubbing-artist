import { 
  FileText, 
  Mic, 
  DollarSign, 
  Calendar, 
  Globe,
  Clock
} from 'lucide-react';

export function ProjectSummaryCard({ formData }) {
  const {
    projectTitle,
    wordCount,
    language,
    accent,
    gender,
    ageRange,
    voiceStyles,
    usageTypes,
    region,
    duration,
    pricingModel,
    minBudget,
    maxBudget,
    deadline
  } = formData;

  const estimatedDuration = Math.floor(wordCount / 2.5);

  const getLicenseType = () => {
    const broadcastTypes = ['TV Commercial', 'Radio Commercial'];
    const hasBroadcast = usageTypes.some(type => broadcastTypes.includes(type));
    return hasBroadcast ? 'Broadcast' : 'Non-Broadcast';
  };

  return (
    <div className="sticky top-6 bg-white rounded-xl shadow-lg border border-gray-200 p-6 space-y-6">
      <div>
        <h3 className="text-lg mb-1">Project Summary</h3>
        <p className="text-sm text-gray-500">Live preview of your posting</p>
      </div>

      <div className="space-y-4">
        {/* Project Title */}
        {projectTitle && (
          <div className="pb-4 border-b border-gray-200">
            <h4 className="text-base mb-1">
              {projectTitle}
            </h4>
            <p className="text-xs text-gray-500">Project Title</p>
          </div>
        )}

        {/* Script Details */}
        {wordCount > 0 && (
          <div className="flex items-start gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <FileText className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm">Script Length</p>
              <p className="text-xs text-gray-600 mt-1">
                {wordCount} words · ~{estimatedDuration}s
              </p>
            </div>
          </div>
        )}

        {/* Voice Requirements */}
        {(language || gender) && (
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Mic className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm">Voice Requirements</p>
              <div className="text-xs text-gray-600 mt-1 space-y-1">
                {language && (
                  <p>
                    {language} {accent && `(${accent})`}
                  </p>
                )}
                {gender && <p>{gender} voice</p>}
                {ageRange && <p>{ageRange}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Voice Style */}
        {voiceStyles.length > 0 && (
          <div className="flex items-start gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Globe className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm">Voice Style</p>
              <p className="text-xs text-gray-600 mt-1">
                {voiceStyles.slice(0, 3).join(', ')}
                {voiceStyles.length > 3 && ` +${voiceStyles.length - 3} more`}
              </p>
            </div>
          </div>
        )}

        {/* License Type */}
        {usageTypes.length > 0 && region && duration && (
          <div className="flex items-start gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <FileText className="w-4 h-4 text-orange-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm">License</p>
              <div className="text-xs text-gray-600 mt-1 space-y-1">
                <p>{getLicenseType()}</p>
                <p>{region} · {duration}</p>
              </div>
            </div>
          </div>
        )}

        {/* Budget */}
        {pricingModel && (
          <div className="flex items-start gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm">Budget</p>
              <p className="text-xs text-gray-600 mt-1">
                {pricingModel === 'Negotiable' 
                  ? 'Negotiable' 
                  : minBudget && maxBudget 
                    ? `$${minBudget} - $${maxBudget}` 
                    : pricingModel
                }
              </p>
            </div>
          </div>
        )}

        {/* Deadline */}
        {deadline && (
          <div className="flex items-start gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Calendar className="w-4 h-4 text-red-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm">Deadline</p>
              <p className="text-xs text-gray-600 mt-1">
                {new Date(deadline).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Completeness Indicator */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Profile Completeness</span>
          <span className="text-sm">
            {Math.min(100, Math.floor(
              ((projectTitle ? 15 : 0) +
              (wordCount > 0 ? 15 : 0) +
              (language ? 15 : 0) +
              (gender ? 10 : 0) +
              (voiceStyles.length > 0 ? 10 : 0) +
              (usageTypes.length > 0 ? 15 : 0) +
              (pricingModel ? 10 : 0) +
              (deadline ? 10 : 0))
            ))}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
            style={{ 
              width: `${Math.min(100, Math.floor(
                ((projectTitle ? 15 : 0) +
                (wordCount > 0 ? 15 : 0) +
                (language ? 15 : 0) +
                (gender ? 10 : 0) +
                (voiceStyles.length > 0 ? 10 : 0) +
                (usageTypes.length > 0 ? 15 : 0) +
                (pricingModel ? 10 : 0) +
                (deadline ? 10 : 0))
              ))}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
}
