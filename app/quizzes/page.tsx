"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Quiz {
  title: string;
  duration: string;
  difficulty: string;
  icon: string;
}

const quizzes: Quiz[] = [
  { title: "Operating Systems", duration: "30 mins", difficulty: "Medium", icon: "🖥️" },
  { title: "Data Structures", duration: "20 mins", difficulty: "Easy", icon: "🌲" },
  { title: "Algorithms", duration: "25 mins", difficulty: "Hard", icon: "⚙️" },
  { title: "Computer Networks", duration: "20 mins", difficulty: "Medium", icon: "🌐" },
  { title: "Digital Logic", duration: "15 mins", difficulty: "Easy", icon: "🔢" },
  { title: "Computer Organization", duration: "25 mins", difficulty: "Medium", icon: "🧠" },
  { title: "Theory of Computation", duration: "30 mins", difficulty: "Hard", icon: "📘" },
  { title: "Compiler Design", duration: "20 mins", difficulty: "Medium", icon: "🛠️" },
  { title: "Database Management Systems", duration: "25 mins", difficulty: "Medium", icon: "💾" },
  { title: "Software Engineering", duration: "20 mins", difficulty: "Easy", icon: "🧰" },
  { title: "Web Technologies", duration: "20 mins", difficulty: "Easy", icon: "🌍" },
  { title: "Machine Learning", duration: "30 mins", difficulty: "Hard", icon: "🤖" },
  { title: "Information Security", duration: "15 mins", difficulty: "Medium", icon: "🔒" },
  { title: "Artificial Intelligence", duration: "25 mins", difficulty: "Hard", icon: "🧠" },
  { title: "Engineering Mathematics", duration: "30 mins", difficulty: "Hard", icon: "📐" },
  { title: "General Aptitude", duration: "20 mins", difficulty: "Easy", icon: "🧮" },
];

export default function QuizzesPage() {
  const [search, setSearch] = useState("");
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(search.toLowerCase())
  );

  // Dummy quiz questions for demonstration (replace with real data or fetch logic)
  const dummyQuestions = [
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: "O(log n)",
    },
    {
      question: "Which data structure uses FIFO?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-700 to-purple-800 p-6 text-white">
      {!selectedQuiz ? (
        <>
          <motion.h1
            className="text-3xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            📝 Mock Tests & Quizzes
          </motion.h1>

          <motion.p
            className="text-center mb-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Time-bound quizzes to help you prepare under real exam conditions.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="mb-6 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <input
              type="text"
              placeholder="Search quizzes..."
              className="w-full px-4 py-3 rounded-md text-gray-800 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </motion.div>

          {/* Quiz Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredQuizzes.map((quiz, index) => (
              <motion.div
                key={index}
                className="bg-white text-gray-900 rounded-lg shadow-lg p-5 hover:scale-105 transition-transform duration-300"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex items-center gap-3 text-2xl mb-2">
                  <span>{quiz.icon}</span>
                  <h3 className="font-semibold">{quiz.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-1">⏱ Duration: {quiz.duration}</p>
                <p className="text-sm text-gray-600 mb-3">📊 Difficulty: {quiz.difficulty}</p>
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded w-full"
                  onClick={() => setSelectedQuiz(quiz)}
                >
                  Start Quiz
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredQuizzes.length === 0 && (
            <div className="text-center mt-10 text-gray-200 text-lg">No quizzes found.</div>
          )}
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto bg-white text-gray-900 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            {selectedQuiz.icon} {selectedQuiz.title} Quiz
          </h2>

          {/* Display questions (dummy) */}
          {dummyQuestions.map((q, idx) => (
            <div key={idx} className="mb-6">
              <h4 className="font-semibold mb-2">
                Q{idx + 1}: {q.question}
              </h4>
              <ul className="space-y-2">
                {q.options.map((opt, i) => (
                  <li key={i}>
                    <label className="flex items-center gap-2">
                      <input type="radio" name={`q${idx}`} value={opt} className="text-indigo-600" />
                      {opt}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setSelectedQuiz(null)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              ← Back to Quiz List
            </button>
            <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Submit
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
