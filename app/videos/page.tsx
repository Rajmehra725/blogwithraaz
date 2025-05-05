"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type SubjectKey =
  | "Operating Systems"
  | "Data Structures"
  | "Algorithms"
  | "Computer Networks"
  | "DBMS"
  | "Compiler Design"
  | "Digital Logic"
  | "Computer Organization"
  | "Theory of Computation"
  | "Discrete Mathematics";

type Video = {
  channel: string;
  video: string;
};

const subjects: Record<SubjectKey, Video[]> = {
  "Operating Systems": [
    {
      channel: "Neso Academy",
      video: "https://www.youtube.com/embed/26QPDBe-NB8",
    },
    {
      channel: "Gate Smashers",
      video: "https://www.youtube.com/embed/a1l4MceYHaQ",
    },
    {
      channel: "Knowledge Gate",
      video: "https://www.youtube.com/embed/qv3X7CqvF2k",
    },
  ],
  "Data Structures": [
    {
      channel: "Gate Smashers",
      video: "https://www.youtube.com/embed/AT14lCXuMKI",
    },
    {
      channel: "CodeWithHarry",
      video: "https://www.youtube.com/embed/B31LgI4Y4DQ",
    },
    {
      channel: "Love Babbar",
      video: "https://www.youtube.com/embed/WQoB2z67hvY",
    },
  ],
  "Algorithms": [
    {
      channel: "Abdul Bari",
      video: "https://www.youtube.com/embed/ZG4druOaJcY",
    },
    {
      channel: "Neso Academy",
      video: "https://www.youtube.com/embed/nV8wTz_nOGk",
    },
    {
      channel: "Gate Smashers",
      video: "https://www.youtube.com/embed/uz3ZLpCmKCM",
    },
  ],
  "Computer Networks": [
    {
      channel: "Neso Academy",
      video: "https://www.youtube.com/embed/3Eexp8wRWj4",
    },
    {
      channel: "Gate Smashers",
      video: "https://www.youtube.com/embed/qB2vmuY4_K8",
    },
    {
      channel: "Knowledge Gate",
      video: "https://www.youtube.com/embed/H-e0tKjZFFw",
    },
  ],
  DBMS: [
    {
      channel: "Gate Smashers",
      video: "https://www.youtube.com/embed/lE6Hxz4yomA",
    },
    {
      channel: "Neso Academy",
      video: "https://www.youtube.com/embed/dl00fOOYLOM",
    },
    {
      channel: "Knowledge Gate",
      video: "https://www.youtube.com/embed/F5V4NhG9mUo",
    },
  ],
  "Compiler Design": [
    {
      channel: "Gate Smashers",
      video: "https://www.youtube.com/embed/wrx8RzP1tgc",
    },
    {
      channel: "Neso Academy",
      video: "https://www.youtube.com/embed/8pjyFzH3iEw",
    },
    {
      channel: "Knowledge Gate",
      video: "https://www.youtube.com/embed/YiB5VQd4fUU",
    },
  ],
  "Digital Logic": [
    {
      channel: "Gate Smashers",
      video: "https://www.youtube.com/embed/tq3yCd_Y8N8",
    },
    {
      channel: "Neso Academy",
      video: "https://www.youtube.com/embed/2ab_9nN4Rj8",
    },
    {
      channel: "Knowledge Gate",
      video: "https://www.youtube.com/embed/iYw4cRYuZKM",
    },
  ],
  "Computer Organization": [
    {
      channel: "Neso Academy",
      video: "https://www.youtube.com/embed/L7LRXmB2F64",
    },
    {
      channel: "Gate Smashers",
      video: "https://www.youtube.com/embed/ZXrHj2mKhgA",
    },
    {
      channel: "Knowledge Gate",
      video: "https://www.youtube.com/embed/f4smFiZB_Gk",
    },
  ],
  "Theory of Computation": [
    {
      channel: "Gate Smashers",
      video: "https://www.youtube.com/embed/5xw4GYO3zC0",
    },
    {
      channel: "Neso Academy",
      video: "https://www.youtube.com/embed/5AGbj_ZTqDM",
    },
    {
      channel: "Knowledge Gate",
      video: "https://www.youtube.com/embed/LrxXbCo0nYg",
    },
  ],
  "Discrete Mathematics": [
    {
      channel: "Gate Smashers",
      video: "https://www.youtube.com/embed/0IAPZzGSbME",
    },
    {
      channel: "Neso Academy",
      video: "https://www.youtube.com/embed/kzqCm3Vtd0Q",
    },
    {
      channel: "Knowledge Gate",
      video: "https://www.youtube.com/embed/fv2Q-tWZrgg",
    },
  ],
};

export default function VideosPage() {
  const [activeSubject, setActiveSubject] = useState<SubjectKey>(
    "Operating Systems"
  );

  return (
    <div className="p-6 text-white min-h-screen bg-gradient-to-tr from-slate-900 to-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-4"
      >
        🎓 GATE Lecture Videos
      </motion.h1>
      <p className="mb-6 text-gray-300">
        Watch curated YouTube lectures by top educators for every subject.
      </p>

      {/* Subject Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(Object.keys(subjects) as SubjectKey[]).map((subj) => (
          <button
            key={subj}
            onClick={() => setActiveSubject(subj)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeSubject === subj
                ? "bg-indigo-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {subj}
          </button>
        ))}
      </div>

      {/* Video Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects[activeSubject].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="aspect-video">
              <iframe
                src={item.video}
                className="w-full h-full"
                title={`Lecture from ${item.channel}`}
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-yellow-400">
                📺 {item.channel}
              </h2>
              <a
                href={`/quizzes?subject=${encodeURIComponent(activeSubject)}`}
                className="text-sm mt-2 inline-block text-indigo-400 hover:text-indigo-300 underline"
              >
                Test Yourself on {activeSubject}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why Watch Section */}
      <div className="mt-12 p-6 bg-indigo-800 rounded-xl shadow-xl">
        <h2 className="text-xl font-bold mb-2">📌 Why These Lectures?</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Concept clarity from top-rated educators.</li>
          <li>Save time by watching well-structured playlists.</li>
          <li>Perfect for GATE, PSU & university exams.</li>
          <li>Links to self-practice quizzes for each topic.</li>
        </ul>
      </div>
    </div>
  );
}
