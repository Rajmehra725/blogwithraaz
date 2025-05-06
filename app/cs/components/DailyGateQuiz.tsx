"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

export default function DailyGateQuiz() {
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [dailyQuestions, setDailyQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    fetch("/data/gate-questions.json")
      .then(res => res.json())
      .then((data: Question[]) => {
        const today = new Date().toISOString().slice(0, 10);
        const seed = parseInt(today.replace(/-/g, ""));
        const shuffled = [...data].sort(() => 0.5 - pseudoRandom(seed));
        setAllQuestions(data);
        setDailyQuestions(shuffled.slice(0, 5));
      });
  }, []);

  useEffect(() => {
    if (score === null && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNext();
    }
  }, [timeLeft, current, score]);

  const pseudoRandom = (seed: number) => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  const handleAnswer = (index: number) => {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (current < dailyQuestions.length - 1) {
      setCurrent(current + 1);
      setTimeLeft(30);
    } else {
      const result = answers.reduce(
        (acc, ans, i) => (ans === dailyQuestions[i].correct ? acc + 1 : acc),
        0
      );
      setScore(result);
      localStorage.setItem("dailyScore", result.toString());
      setShowReview(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setAnswers([]);
    setScore(null);
    setTimeLeft(30);
    setShowReview(false);
  };

  if (dailyQuestions.length === 0) return <div className="text-white">Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-10 p-6 rounded-xl bg-gradient-to-r from-indigo-900 to-blue-700 shadow-2xl text-white w-full max-w-2xl mx-auto"
    >
      {score === null ? (
        <>
          <h3 className="text-lg font-semibold mb-3 animate-pulse">
            Q{current + 1}: {dailyQuestions[current].question}
          </h3>
          <p className="text-sm mb-2 text-yellow-300">Time Left: {timeLeft}s</p>
          <div className="space-y-2">
            {dailyQuestions[current].options.map((opt, i) => (
              <motion.button
                whileTap={{ scale: 0.97 }}
                key={i}
                onClick={() => handleAnswer(i)}
                className={`block w-full text-left px-4 py-2 rounded-lg border transition-all duration-300 ${
                  answers[current] === i
                    ? "bg-yellow-400 text-black font-bold shadow-lg"
                    : "bg-white text-black hover:bg-yellow-100"
                }`}
              >
                {opt}
              </motion.button>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleNext}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            {current === dailyQuestions.length - 1 ? "Submit" : "Next"}
          </motion.button>
        </>
      ) : showReview ? (
        <>
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            🎉 Your Score: {score} / 5
          </h2>
          <div className="space-y-4">
            {dailyQuestions.map((q, idx) => (
              <div
                key={idx}
                className="bg-white text-black p-4 rounded-lg shadow-md"
              >
                <p className="font-semibold">Q{idx + 1}: {q.question}</p>
                <ul className="mt-2 space-y-1">
                  {q.options.map((opt, i) => (
                    <li
                      key={i}
                      className={`px-2 py-1 rounded ${
                        i === q.correct
                          ? "bg-green-200 font-bold"
                          : answers[idx] === i && i !== q.correct
                          ? "bg-red-200"
                          : ""
                      }`}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button
            onClick={restart}
            className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-500"
          >
            Restart Challenge 🔁
          </button>
        </>
      ) : null}
    </motion.div>
  );
}
