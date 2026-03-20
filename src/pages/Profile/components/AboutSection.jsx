import { User, Award, Target, Zap , SquarePen } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
export function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <User className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">About the Artist</h2>
           <Button
           variant="outline"
           className="cursor-pointer border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg py-3 transition-all"
          >
           <SquarePen/>
            Edit
        </Button>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Hello! I'm Priya Sharma, a professional dubbing artist with over 8 years of experience in the voice-over industry. 
            I specialize in Hindi and English dubbing for films, animations, commercials, and digital content.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            My journey in voice acting began during my theater days, and I've had the privilege of lending my voice to 
            numerous Bollywood films, animated series, and international documentaries. I work from my professional-grade 
            home studio, ensuring broadcast-quality recordings for every project.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            I've collaborated with leading production houses, YouTubers with millions of subscribers, independent filmmakers, 
            and advertising agencies. Whether it's a dramatic movie scene, an energetic cartoon character, or a soothing 
            narration, I bring versatility and professionalism to every project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-5 border border-purple-100">
              <Award className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Award Winner</h3>
              <p className="text-sm text-gray-600">
                Best Female Voice Artist 2023 - Indian Voice Awards
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
              <Target className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">100% Delivery</h3>
              <p className="text-sm text-gray-600">
                On-time delivery with unlimited revisions included
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-100">
              <Zap className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Quick Turnaround</h3>
              <p className="text-sm text-gray-600">
                Express delivery available for urgent projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
