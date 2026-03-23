import React from 'react';
import { motion } from 'framer-motion';

const HomeHero = () => {
  const characters = [
    { id: 1, label: 'Anime Hero', emoji: '⚔️', pos: 'top-0 left-0 lg:-left-4', delay: 0, gradient: 'from-pink-500 to-purple-500' },
    { id: 2, label: 'Villain', emoji: '🦹', pos: 'top-1/4 right-0 lg:-right-8', delay: 0.6, gradient: 'from-orange-500 to-red-600' },
    { id: 3, label: 'Narrator', emoji: '🎙️', pos: 'bottom-1/4 left-0 lg:-left-8', delay: 1.2, gradient: 'from-blue-400 to-indigo-600' },
    { id: 4, label: 'Gaming', emoji: '🎮', pos: 'bottom-0 right-10 lg:right-0', delay: 1.8, gradient: 'from-emerald-400 to-cyan-500' },
    { id: 5, label: 'Cartoon', emoji: '🦄', pos: '-top-12 left-1/2 -ml-20 lg:-ml-16', delay: 0.9, gradient: 'from-yellow-400 to-orange-500' },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden font-sans pt-20 pb-20">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10 w-full">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-cyan-50 tracking-wide">Premium Voice Talent</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 leading-[1.1] tracking-tight">
            Find the Perfect <br className="hidden lg:block"/>
            <span className="bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-sm">Dubbing Artist</span> <br className="hidden lg:block"/>
            for Your Project
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Elevate your films, games, ads, and animations with professional voice artists. Connect with diverse talents globally and bring your characters to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-lg shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.6)] transition-all"
            >
              Find Dubbing Artists
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white font-bold text-lg backdrop-blur-md hover:bg-slate-700/50 hover:border-slate-500 transition-colors"
            >
              Become an Artist
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Animated Visual Scene */}
        <div className="relative flex items-center justify-center min-h-[500px] w-full max-w-lg mx-auto lg:max-w-none px-4 sm:px-0 mt-8 lg:mt-0">
          
          {/* Sound Waves */}
          {[1, 2, 3].map((wave) => (
            <motion.div
              key={`wave-${wave}`}
              className="absolute w-32 h-32 rounded-full border border-cyan-500/40"
              animate={{
                scale: [1, 2.5, 4.5],
                opacity: [0.8, 0.3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: wave * 1.33,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Center Microphone */}
          <motion.div 
            className="relative z-20 w-40 h-40 rounded-full bg-slate-900 border border-slate-700 shadow-[0_0_60px_-15px_rgba(34,211,238,0.3)] flex items-center justify-center backdrop-blur-xl"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center border border-slate-600/50">
              <svg 
                className="w-14 h-14 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            
            {/* Glowing inner particles */}
            <motion.div 
              className="absolute top-8 right-10 w-2 h-2 rounded-full bg-purple-400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-10 left-8 w-2 h-2 rounded-full bg-cyan-400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>

          {/* Floating Characters */}
          {characters.map((char) => (
            <div key={char.id} className={`absolute ${char.pos} z-30 pointer-events-none sm:pointer-events-auto`}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [-12, 12, -12] }}
                transition={{
                  opacity: { duration: 0.6, delay: char.delay },
                  scale: { duration: 0.6, delay: char.delay, type: 'spring', stiffness: 150 },
                  y: { duration: 5, repeat: Infinity, delay: char.delay, ease: "easeInOut" }
                }}
              >
                <div className="flex items-center gap-3 bg-slate-800/90 backdrop-blur-md border border-slate-700 py-2 sm:py-3 px-3 sm:px-4 rounded-2xl shadow-2xl hover:bg-slate-700/90 transition-colors cursor-pointer group">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${char.gradient} flex items-center justify-center text-xl sm:text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                    {char.emoji}
                  </div>
                  <div className="pr-1 sm:pr-2">
                    <div className="text-sm font-bold text-white mb-0.5 whitespace-nowrap">{char.label}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 flex items-center gap-1.5 font-medium uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
                      Available
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default HomeHero;

