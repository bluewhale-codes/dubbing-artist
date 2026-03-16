import { ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-600 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* For Clients */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="mb-6">
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-white font-semibold mb-4 text-sm">
                For Clients
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Find Your Perfect Dubbing Artist Today
              </h3>
              <p className="text-white/95 text-lg leading-relaxed">
                Post your project and receive proposals from verified professionals within hours. No commitment required.
              </p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                <span>Browse 10,000+ verified artists</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                <span>Get proposals within 24 hours</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                <span>Studio-quality guaranteed</span>
              </li>
            </ul>

            <Button 
              size="lg" 
              className="bg-white text-cyan-600 hover:bg-gray-100 w-full sm:w-auto group shadow-xl"
            >
              Post a Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* For Artists */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="mb-6">
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-white font-semibold mb-4 text-sm">
                For Artists
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Grow Your Dubbing Career
              </h3>
              <p className="text-white/95 text-lg leading-relaxed">
                Join our community of professional dubbing artists and connect with clients worldwide.
              </p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                <span>Access premium projects</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                <span>Set your own rates</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                <span>Build your portfolio</span>
              </li>
            </ul>

            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-600 w-full sm:w-auto group"
            >
              Become a Seller
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}