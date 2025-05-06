"use client";
import DailyGateQuiz from "@/app/cs/components/DailyGateQuiz";

import { useState } from "react";

const questions = [
  {
    year: "2024_1",
    subject: "Gate",
    difficulty: "Easy",
    question: "What is the time complexity of Merge Sort?",
    pdf: "/gate-paper/2024_1.pdf",
  },
  {
    year: "2024_2",
    subject: "Gate",
    difficulty: "Medium",
    question: "What is the difference between preemptive and non-preemptive scheduling?",
    pdf: "/gate-paper/2024_2.pdf",
  },
  {
    year: "2024_AnsKeys1",
    subject: "Gate Answer Keys",
    difficulty: "Easy",
    question: "What is the time complexity of Merge Sort?",
    pdf: "/gate-paper/2024_Ans1.pdf",
  },
  {
    year: "2024_AnsKeys2",
    subject: "Gate Answer Keys",
    difficulty: "Medium",
    question: "What is the difference between preemptive and non-preemptive scheduling?",
    pdf: "/gate-paper/2024_Ans2.pdf",
  },
  {
    year: "2023",
    subject: "CSE",
    difficulty: "Hard",
    question: "Explain normalization with types and examples.",
    pdf: "/gate-paper/2023.pdf",
  },
  {
    year: "2023",
    subject: "Answer Keys",
    difficulty: "Hard",
    question: "Prove that comparison-based sorting takes Ω(n log n) time.",
    pdf: "/gate-paper/2023_Ans.pdf",
  },
  {
    year: "2022",
    subject: "Gate",
    difficulty: "Easy",
    question: "Define Deadlock and its necessary conditions.",
    pdf: "/gate-paper/2022.pdf",
  },
  {
    year: "2022 Answer Keys",
    subject: "Gate Answer Keys",
    difficulty: "Easy",
    question: "Define Deadlock and its necessary conditions.",
    pdf: "/gate-paper/2022.pdf",
  },
  {
    year: "2021_1",
    subject: "Gate",
    difficulty: "Medium",
    question: "What is the difference between TCP and UDP?",
    pdf: "/gate-paper/2021_1.pdf",
  },
  {
    year: "2021_2",
    subject: "Gate",
    difficulty: "Medium",
    question: "What is the difference between TCP and UDP?",
    pdf: "/gate-paper/2021_2.pdf",
  },
  {
    year: "2021 Answer Keys",
    subject: "Gate Answer Keys Set1",                        
    difficulty: "Medium",
    question: "What is the difference between TCP and UDP?",
    pdf: "/gate-paper/2021_Ans1.pdf",
  },
  {
    year: "2021_1",
    subject: "Gate Set2 Answer Keys",
    difficulty: "Medium",
    question: "What is the difference between TCP and UDP?",
    pdf: "/gate-paper/2021Ans2.pdf",
  },
  {
    year: "2020",
    subject: "Gate ",
    difficulty: "Hard",
    question: "How does a Trie data structure work?",
    pdf: "/gate-paper/2020.pdf",
  },
  {
    year: "2020 Answer Keys",
    subject: "Gate Answer Keys ",
    difficulty: "Hard",
    question: "How does a Trie data structure work?",
    pdf: "/gate-paper/2020_Ans.pdf",
  },
  {
    year: "2019",
    subject: "Gate Answer Keys",
    difficulty: "Medium",
    question: "Explain the concept of DFA and NFA with examples.",
    pdf: "/gate-paper/2019.pdf",
  },
  {
    year: "2019 Answer Keys",
    subject: "Gate Answer Keys",
    difficulty: "Medium",
    question: "Explain the concept of DFA and NFA with examples.",
    pdf: "/gate-paper/2019_Ans.pdf",
  },
  {
    year: "2018",
    subject: "Gate",
    difficulty: "Hard",
    question: "What is lexical analysis and how is it implemented?",
    pdf: "/gate-paper/2018.pdf",
  },
  {
    year: "2018 Answer Keys",
    subject: "Gate Answer Keys",
    difficulty: "Hard",
    question: "What is lexical analysis and how is it implemented?",
    pdf: "/gate-paper/2018_Ans.pdf",
  },
  {
    year: "2017",
    subject: "Operating Systems",
    difficulty: "Easy",
    question: "What are the different types of scheduling algorithms?",
    pdf: "/gate-paper/2017.pdf",
  },
  {
    year: "2016",
    subject: "Gate Set1",
    difficulty: "Medium",
    question: "Explain pipelining and its advantages.",
    pdf: "/gate-paper/2016_2.pdf",
  },
  {
    year: "2016",
    subject: "Gate Set2",
    difficulty: "Medium",
    question: "Explain pipelining and its advantages.",
    pdf: "/gate-paper/2016_1.pdf",
  },
  {
    year: "2016 Answer Keys",
    subject: "Gate Answer Keys",
    difficulty: "Medium",
    question: "Explain pipelining and its advantages.",
    pdf: "/gate-paper/2016_Ans1.pdf",
  },
  {
    year: "2016 Answer Keys",
    subject: "Gate Answer Keys",
    difficulty: "Medium",
    question: "Explain pipelining and its advantages.",
    pdf: "/gate-paper/2016_Ans2.pdf",
  },
  {
    year: "2015",
    subject: "Gate Set1",
    difficulty: "Hard",
    question: "Discuss ACID properties of a transaction.",
    pdf: "/gate-paper/2015_1.pdf",
  },
  {
    year: "2015",
    subject: "Gate Set2",
    difficulty: "Hard",
    question: "Discuss ACID properties of a transaction.",
    pdf: "/gate-paper/2015_2.pdf",
  },
  {
    year: "2015",
    subject: "Gate Set1 Answer Keys",
    difficulty: "Hard",
    question: "Discuss ACID properties of a transaction.",
    pdf: "/gate-paper/2015_Ans1.pdf",
  },
  {
    year: "2014",
    subject: "Gate Set1",
    difficulty: "Easy",
    question: "What is a flip-flop and its types?",
    pdf: "/gate-paper/2014_1.pdf",
  },
  {
    year: "2014",
    subject: "Gate Set2",
    difficulty: "Easy",
    question: "What is a flip-flop and its types?",
    pdf: "/gate-paper/2014_2.pdf",
  },
  {
    year: "2014",
    subject: "Gate Set3",
    difficulty: "Easy",
    question: "What is a flip-flop and its types?",
    pdf: "/gate-paper/2014_3.pdf",
  },
  {
    year: "2014",
    subject: "Gate Answer keys 1",
    difficulty: "Easy",
    question: "What is a flip-flop and its types?",
    pdf: "/gate-paper/2014_Ans1.pdf",
  },
  {
    year: "2014",
    subject: "Gate Answer Keys2",
    difficulty: "Easy",
    question: "What is a flip-flop and its types?",
    pdf: "/gate-paper/2014_Ans2.pdf",
  },
  {
    year: "2014",
    subject: "Gate Answer Keys3",
    difficulty: "Easy",
    question: "What is a flip-flop and its types?",
    pdf: "/gate-paper/2014_Ans3.pdf",
  },
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

      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Year */}
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

        {/* Subject */}
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

        {/* Difficulty */}
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

      {/* Questions */}
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
                  <a
                    href={q.pdf}
                    download={`question-${q.year}-${q.subject}.pdf`}
                    className="text-blue-300 hover:text-blue-400 text-sm underline"
                  >
                    📥 Download
                  </a>
                </div>
                <p>{q.question}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Daily Challenge */}
      <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-indigo-900 to-blue-700 shadow-xl">
      <DailyGateQuiz />
      </div>
    </div>
  );
}
