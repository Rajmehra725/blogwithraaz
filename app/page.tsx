// app/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400 drop-shadow-[0_0_10px_#3b82f6] animate-pulse">
          Welcome to RaazUniverse 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          A futuristic world of learning, gaming, coding, and creativity — built by Raaz Mehra.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-full shadow-xl hover:shadow-blue-500/50 text-white">
            Explore Projects
          </button>
          <button className="bg-pink-600 hover:bg-pink-700 transition px-6 py-2 rounded-full shadow-xl hover:shadow-pink-500/50 text-white">
            Visit Games 🎮
          </button>
        </div>
      </motion.div>
    </main>
  );
}
