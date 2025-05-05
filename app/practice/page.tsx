"use client"; // This directive marks the file as a client component.

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PracticePage() {
  const [progress, setProgress] = useState(0); // Progress of questions solved
  const [timer, setTimer] = useState(300); // Timer set to 5 minutes (in seconds)
  const [searchQuery, setSearchQuery] = useState(""); // Search bar query
  const [topics, setTopics] = useState([
    { title: "Array Basics", questions: 10, difficulty: "Easy", solved: 3 },
    { title: "Graphs & Trees", questions: 8, difficulty: "Medium", solved: 5 },
    { title: "Process Scheduling", questions: 7, difficulty: "Hard", solved: 2 },
  ]);

  // Function to simulate a countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : prevTimer));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Search filter functionality
  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Progress calculation (percentage of questions solved)
  const calculateProgress = (solved: number, total: number): number => {
    return Math.round((solved / total) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
      <div className="container mx-auto">
        {/* Animated Title */}
        <motion.h1
          className="text-4xl font-extrabold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Daily Practice Problems
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          className="text-xl text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Improve your understanding by solving topic-wise problems. Track your progress and time to enhance your skills daily.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <input
            type="text"
            className="w-full p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for a topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>

        {/* Topics List */}
        <motion.div
          className="bg-white text-gray-900 rounded-lg shadow-lg p-6 space-y-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h2 className="text-2xl font-semibold">Topics for Practice</h2>
          <ul className="space-y-4">
            {filteredTopics.map((topic, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-2 text-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <span role="img" aria-label={topic.title}>📌</span>
                <span>{topic.title} – {topic.questions} Questions</span>
                <span className="text-sm text-gray-600">Difficulty: {topic.difficulty}</span>
                <span className="text-sm text-gray-500">Solved: {topic.solved}</span>
                <span className="ml-2 text-green-500">{calculateProgress(topic.solved, topic.questions)}%</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Progress Tracker */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Your Progress</h3>
          <motion.div
            className="relative pt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <div className="flex mb-2 items-center justify-between">
              <span>0%</span>
              <span>100%</span>
            </div>
            <div className="flex mb-2 items-center justify-between">
              <span>Completed</span>
              <span>{progress}%</span>
            </div>
            <div className="flex h-2 mb-4 bg-gray-200 rounded-full">
              <motion.div
                className="bg-green-500 rounded-full"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Timer */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Practice Timer</h3>
          <div className="text-lg font-bold">
            {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
          </div>
        </motion.div>

        {/* Latest Updates */}
        <motion.div
          className="mt-8 bg-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
        >
          <h3 className="text-2xl font-semibold">Latest GATE Updates</h3>
          <ul className="space-y-2 text-lg">
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              📅 GATE 2025 application form released!
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              📝 New syllabus for GATE CS exam available.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              💡 GATE mock test series launched for practice.
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
