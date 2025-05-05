"use client";

import { useState } from "react";

const questions = [
  { year: "2024", subject: "Algorithms", difficulty: "Easy", question: "What is the time complexity of Merge Sort?" },
  { year: "2024", subject: "OS", difficulty: "Medium", question: "What is the difference between preemptive and non-preemptive scheduling?" },
  { year: "2023", subject: "DBMS", difficulty: "Hard", question: "Explain normalization with types and examples." },
  { year: "2023", subject: "Algorithms", difficulty: "Hard", question: "Prove that comparison-based sorting takes Ω(n log n) time." },
  { year: "2022", subject: "OS", difficulty: "Easy", question: "Define Deadlock and its necessary conditions." },
];

const years = [...new Set(questions.map((q) => q.year))];
const subjects = [...new Set(questions.map((q) => q.subject))];

export default function PyqPage() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredQuestions = questions.filter((q) => {
    return (
      (!selectedYear || q.year === selectedYear) &&
      (!selectedSubject || q.subject === selectedSubject) &&
      (selectedDifficulty === "All" || q.difficulty === selectedDifficulty)
    );
  });

  return (
    <div className="p-6 text-white bg-gradient-to-tr from-gray-900 to-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📚 GATE CSE Previous Year Questions</h1>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Year Buttons */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Select Year</h2>
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                className={`px-4 py-2 rounded-lg transition ${
                  selectedYear === year ? "bg-yellow-400 text-black" : "bg-blue-600 hover:bg-blue-700"
                }`}
                onClick={() => setSelectedYear(year === selectedYear ? null : year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Subject Buttons */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Select Subject</h2>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subj) => (
              <button
                key={subj}
                className={`px-4 py-2 rounded-lg transition ${
                  selectedSubject === subj ? "bg-green-400 text-black" : "bg-purple-600 hover:bg-purple-700"
                }`}
                onClick={() => setSelectedSubject(subj === selectedSubject ? null : subj)}
              >
                {subj}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Difficulty</h2>
          <div className="flex flex-wrap gap-2">
            {["All", "Easy", "Medium", "Hard"].map((level) => (
              <button
                key={level}
                className={`px-4 py-2 rounded-lg transition ${
                  selectedDifficulty === level ? "bg-red-400 text-black" : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => setSelectedDifficulty(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Questions Preview */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">📝 Filtered Questions</h2>
        {filteredQuestions.length === 0 ? (
          <p className="text-gray-400">No questions found for the selected filters.</p>
        ) : (
          <ul className="space-y-4">
            {filteredQuestions.map((q, index) => (
              <li key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-300">
                    {q.year} • {q.subject} • <strong>{q.difficulty}</strong>
                  </span>
                  <button className="text-blue-300 hover:text-blue-400 text-sm underline">📥 Download</button>
                </div>
                <p>{q.question}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Daily Challenge Section */}
      <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-indigo-900 to-blue-700 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-2">🔥 Daily PYQ Challenge</h2>
        <p className="text-gray-200 mb-4">Solve 5 new PYQs every day to stay consistent!</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold">
          Start Challenge 🚀
        </button>
      </div>
    </div>
  );
}
