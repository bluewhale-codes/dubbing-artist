import { Globe2, Pencil,Plus } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export function LanguagesSection() {
  const languages = [
    { name: 'Hindi', proficiency: 'Native', accent: 'Standard Hindi, Mumbai Accent' },
    { name: 'English', proficiency: 'Fluent', accent: 'Indian English, Neutral Accent' },
    { name: 'Punjabi', proficiency: 'Fluent', accent: 'Native Speaker' },
    { name: 'Marathi', proficiency: 'Conversational', accent: 'Standard Marathi' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Globe2 className="w-4 h-4 text-purple-600" />
          <h3 className="text-1xl font-bold text-gray-900">Languages & Accents</h3>
          <Button
           variant="outline"
           className="cursor-pointer border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg py-3 transition-all"
          >
           <Plus/>
            Add
        </Button>
        </div>
        
        <p className="text-gray-600 mb-6">
          Multilingual voice artist capable of delivering authentic performances in multiple languages
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {languages.map((language, index) => (
            <div
              key={index}
              className="group border-2 border-gray-200 rounded-xl p-5 hover:border-purple-600 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-gray-900">{language.name}</h3>
                    <Pencil className="w-3 h-3 text-black-500 cursor-pointer" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {language.proficiency}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Accent:</span> {language.accent}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Special Note:</span> I can seamlessly switch between accents and dialects 
            based on your project requirements. Regional variations available upon request.
          </p>
        </div>
      </div>
    </div>
  );
}
