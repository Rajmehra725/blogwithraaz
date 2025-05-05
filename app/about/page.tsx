'use client'; // only if you're using App Router (Next.js 13+)

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto bg-[#0f172a]/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10 p-8 space-y-6"
      >
        <h1 className="text-4xl font-extrabold text-cyan-400 animate-pulse">About <span className="text-white">RaazGateX</span></h1>
        <p className="text-gray-300 text-lg">
          RaazGateX is your one-stop platform for strategic, structured, and smart GATE CSE preparation. Built by toppers, educators, and developers who believe in results.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-pink-400">🎯 Mission</h2>
          <p className="text-gray-300">
            To provide every GATE aspirant with quality resources, AI-enhanced tools, structured content, and real-time practice modules.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-yellow-400">🌟 Vision</h2>
          <p className="text-gray-300">
            We envision a future where cracking GATE is less about stress and more about smart strategy and strong fundamentals.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-400">🧰 Tools & Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>📚 Animated Notes (Hindi & English)</li>
            <li>🧠 Topic-wise Quizzes with Analysis</li>
            <li>📊 Progress Tracker & Goal System</li>
            <li>🎥 Conceptual Videos & Interview Prep</li>
            <li>📈 GATE PYQ Solvers</li>
            <li>🧮 Rank Predictor (Beta)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400">💎 Why Choose RaazGateX?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>✅ Personalized Study Plans</li>
            <li>✅ AI-Driven Practice Engine</li>
            <li>✅ Toppers’ Mentorship</li>
            <li>✅ Web + Mobile Ready</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-400">👨‍🏫 Our Team</h2>
          <p className="text-gray-300">
            We are a mix of ex-IITians, NITians, rankers, and engineers. We combine educational experience with software excellence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-400">🚀 Join Us</h2>
          <p className="text-gray-300">
            Want to become a contributor or mentor? Email us at <a href="mailto:careers@raazgatex.com" className="underline text-blue-300">careers@raazgatex.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-400">📞 Contact</h2>
          <p className="text-gray-300">Email: <a href="mailto:support@raazgatex.com" className="underline text-blue-300">support@raazgatex.com</a></p>
          <p className="text-gray-300">Website: <a href="https://raazgatex.com" className="underline text-blue-300">www.raazgatex.com</a></p>
        </section>
      </motion.div>
    </div>
  );
}
