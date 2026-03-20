import { Mic, Plus} from 'lucide-react';
import { Button } from '../../../components/ui/Button';
export function SkillsSection() {
  const skills = [
    'Movie Dubbing',
    'Animation Dubbing',
    'Commercial Voice',
    'Audiobook Narration',
    'Podcast Voiceover',
    'E-Learning Content',
    'Documentary Narration',
    'Character Voices',
    'Corporate Videos',
    'YouTube Content',
    'Radio Spots',
    'IVR Recordings',
  ];

  const voiceTypes = [
    { name: 'Professional', color: 'from-purple-600 to-blue-600' },
    { name: 'Energetic', color: 'from-pink-600 to-rose-600' },
    { name: 'Warm & Friendly', color: 'from-orange-600 to-amber-600' },
    { name: 'Dramatic', color: 'from-red-600 to-pink-600' },
    { name: 'Cartoon Style', color: 'from-green-600 to-teal-600' },
    { name: 'Narrative', color: 'from-indigo-600 to-purple-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="">
        {/* Skills */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Mic className="w-4 h-4 text-purple-600" />
            <h4 className="text-1xl font-bold text-gray-900">Skills & Expertise</h4>
            <Button
           variant="outline"
           className="cursor-pointer border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg py-3 transition-all"
          >
           <Plus/>
            Add Skills
        </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-100 text-purple-700 rounded-full font-small hover:border-purple-600 hover:shadow-md transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
}
