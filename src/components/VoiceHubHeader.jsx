import { useState } from 'react';
import { Menu, X, Mic2 } from 'lucide-react';
import { Button } from './ui/Button';
import logoVideo from './vedio/logo.mp4'
export default function VoiceHubHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="">
            <div className="">
              <video
                className="w-[200px] h-[60px]"
                src={logoVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/assets/logo-poster.jpg" // Optional fallback image
              />
              
            </div>
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Home
            </a>
            <a href="/marketplace" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Find Artists
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Pricing
            </a>
            <a href="/jobs" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Jobs
            </a>
            <a href="/proposal" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              My proposals
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button  variant="ghost" asChild={true} className="text-gray-700 hover:text-cyan-600">
              <a href='/auth/login'>SignIn</a>
            </Button>
            <Button asChild={true} className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/30">
              <a href='/createproject'>Create Project </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-purple-600 py-2">
              Home
            </a>
            <a href="#artists" className="block text-gray-700 hover:text-purple-600 py-2">
              Find Artists
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-purple-600 py-2">
              How It Works
            </a>
            <a href="#pricing" className="block text-gray-700 hover:text-purple-600 py-2">
              Pricing
            </a>
            <a href="#about" className="block text-gray-700 hover:text-purple-600 py-2">
              About
            </a>
            <div className="pt-4 space-y-3">
              <button className="w-full">
                Sign In
              </button>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                Become a Seller
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}