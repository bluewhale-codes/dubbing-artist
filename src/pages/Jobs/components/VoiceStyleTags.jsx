import { Check } from 'lucide-react';

export function VoiceStyleTags({ selectedStyles, setSelectedStyles }) {
  const styles = [
    'Friendly',
    'Energetic',
    'Corporate',
    'Calm',
    'Dramatic',
    'Cinematic',
    'Conversational',
    'Storytelling'
  ];

  const toggleStyle = (style) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter(s => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  return (
    <div>
      <label className="block text-sm mb-3">Voice Style / Tone</label>
      <div className="flex flex-wrap gap-3">
        {styles.map((style) => {
          const isSelected = selectedStyles.includes(style);
          return (
            <button
              key={style}
              type="button"
              onClick={() => toggleStyle(style)}
              className={`px-4 py-2 rounded-full border-2 transition-all flex items-center gap-2 ${
                isSelected
                  ? 'border-primary bg-primary text-white'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              {isSelected && <Check className="w-4 h-4" />}
              {style}
            </button>
          );
        })}
      </div>
      {selectedStyles.length > 0 && (
        <p className="text-sm text-gray-600 mt-3">
          Selected: {selectedStyles.join(', ')}
        </p>
      )}
    </div>
  );
}
