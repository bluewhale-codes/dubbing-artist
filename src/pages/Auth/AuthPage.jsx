import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mic2, Waves, ArrowLeft } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {ImageWithFallback} from "../../components/ui/utils/ImageWithFallback"

const AuthPage = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Branding */}
      <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex flex-col justify-center items-center p-8 lg:p-12 text-white relative overflow-hidden">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-all duration-200 border border-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </button>
        )}

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-lg text-center lg:text-left">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-8"
          >
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <Mic2 className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold">VoiceHub</h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Connect with professional dubbing artists
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Find the perfect voice for your projects or showcase your talent to clients worldwide.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-2xl mb-8"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1772399764232-c35bac262ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtaWNyb3Bob25lJTIwcmVjb3JkaW5nJTIwc3R1ZGlvfGVufDF8fHx8MTc3MzEyMjY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional recording studio"
              className="w-full h-64 object-cover"
            />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left"
          >
            <div className="flex flex-col items-center lg:items-start">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg mb-2">
                <Waves className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium">1000+ Artists</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg mb-2">
                <Mic2 className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium">50+ Languages</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg mb-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm font-medium">Quality Guaranteed</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Authentication Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-gray-50">
        <div className="w-full max-w-md">
          <motion.div
            key={isLogin ? 'login' : 'signup'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-10"
          >
            {isLogin ? (
              <LoginForm onToggleForm={toggleForm} />
            ) : (
              <SignupForm onToggleForm={toggleForm} />
            )}

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-center text-gray-500">
                By continuing, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;