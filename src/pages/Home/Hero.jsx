import { ArrowRight, Search, Play } from 'lucide-react';
import TextType from '../../components/ui/TextType';
import { Button } from '../../components/ui/Button';
import { ImageWithFallback } from '../../components/ui/utils/ImageWithFallback';
import { Mic2 } from 'lucide-react';

export function Hero() {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <section id="home" className="bg-[url('https://res.cloudinary.com/dycjjaxsk/image/upload/v1773135326/retro-digital-art-illustration-person-using-radio-technology_ghkwld.jpg')] bg-cover bg-center  relative overflow-hidden  py-16 lg:py-24">
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating Elements Animation */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-cyan-300/20 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-cyan-100 px-4 py-2 rounded-full border border-cyan-200 shadow-sm">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-cyan-700 text-sm font-semibold">1,000+ artists available now</span>
            </div>
            
            <h1 className="text-5xl lg:text-5xl xl:text-5xl font-bold text-black leading-tight">
              <div>
                Find the perfect{' '}
              </div>
              <span className="relative inline-block">
                
                
                  <div>
                    <TextType
                    className="relative z-10 text-white "
                    text={[
                      "Dubbing artist",
                      
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorClassName="text-white"
                  />
                  </div>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-cyan-200 -rotate-1 animate-pulse"></span>
              </span>{' '}
              <div>
                for your project
              </div>
            </h1>
            
            <p className="text-xl text-white leading-relaxed">
              Work with talented dubbing professionals for films, games, animations, and content. Studio-quality recordings in 50+ languages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-xl shadow-cyan-500/30 group transform hover:scale-105 transition-all duration-300"
              >
                <Search className="w-5 h-5 mr-2" />
                Find Dubbing Artists
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-gray-300 text-gray-700 hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50 group transform hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                How it works
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="group">
                <p className="text-4xl font-bold text-white group-hover:text-white transition-colors">10K+</p>
                <p className="text-white font-medium">Verified Artists</p>
              </div>
              <div className="group">
                <p className="text-4xl font-bold text-white group-hover:text-white transition-colors">50+</p>
                <p className="text-white font-medium">Languages</p>
              </div>
              <div className="group">
                <p className="text-4xl font-bold text-white group-hover:text-white transition-colors">98%</p>
                <p className="text-white font-medium">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image with Animation */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <ImageWithFallback 
                src="https://img.freepik.com/premium-photo/popular-latino-podcast-host-recording-episode-cultural-topics_1314467-117250.jpg?w=1480"
                alt="Professional recording studio with microphone"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
            </div>
            
            {/* Floating badge with animation */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 animate-float">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Mic2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">200+ Online</p>
                  <p className="text-sm text-gray-600">Ready to work</p>
                </div>
              </div>
            </div>
            
            {/* Rating badge with animation */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-gray-900">4.9/5</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">From 15k+ reviews</p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
       
      `}</style>
    </section>
  );
}