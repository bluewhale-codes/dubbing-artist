export function VoiceRequirementSelector({ 
  language, 
  setLanguage, 
  accent, 
  setAccent, 
  gender, 
  setGender,
  ageRange,
  setAgeRange 
}) {
  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Portuguese',
    'Mandarin',
    'Japanese',
    'Korean',
    'Arabic',
    'Hindi',
    'Russian'
  ];

  const accents = {
    English: ['American', 'British', 'Australian', 'Canadian', 'Irish', 'Scottish'],
    Spanish: ['European', 'Mexican', 'Colombian', 'Argentine'],
    French: ['European', 'Canadian'],
    German: ['Standard'],
    Italian: ['Standard'],
    Portuguese: ['Brazilian', 'European'],
    Mandarin: ['Mainland', 'Taiwanese'],
    Japanese: ['Standard'],
    Korean: ['Standard'],
    Arabic: ['Modern Standard', 'Egyptian', 'Gulf'],
    Hindi: ['Standard'],
    Russian: ['Standard']
  };

  const genderOptions = ['Male', 'Female', 'Any'];
  
  const ageRanges = [
    'Young (18-25)',
    'Adult (25-40)',
    'Middle Age (40-60)',
    'Senior (60+)'
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm mb-2">Language *</label>
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
           
          }}
          className="w-full px-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          required
        >
          <option value="">Select language</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm mb-2">Accent</label>
        <select
          value={accent}
          onChange={(e) => setAccent(e.target.value)}
          className="w-full px-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          disabled={!language}
        >
          <option value="">Select accent</option>
          {language && accents[language]?.map((acc) => (
            <option key={acc} value={acc}>
              {acc}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm mb-2">Gender *</label>
        <div className="flex gap-3">
          {genderOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setGender(option)}
              className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all ${
                gender === option
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
        <label className="block text-sm mb-2">Voice Age Range</label>
        
        <select
          value={ageRange}
          onChange={(e) => setAgeRange(e.target.value)}
          className="w-full px-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        >
          <option value="">Select age range</option>
          {ageRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
