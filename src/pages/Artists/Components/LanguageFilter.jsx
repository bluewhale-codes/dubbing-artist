import { ChevronRight } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
];

export function LanguageFilter() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Select Language
      </h3>

      <div className="relative">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => setSelectedLanguage(language.code)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 whitespace-nowrap transition-all duration-200 ${
                selectedLanguage === language.code
                  ? "bg-purple-600 border-purple-600 text-white shadow-md"
                  : "bg-white border-gray-200 text-gray-700 hover:border-purple-600 hover:text-purple-600"
              }`}
            >
              <span className="text-xl">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
            </button>
          ))}

          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-dashed border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600 whitespace-nowrap transition-all">
            <span className="font-medium">View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}