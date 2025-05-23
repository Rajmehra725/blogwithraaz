"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Raj from "@/public/Image/Raj.jpeg";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 92 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Tailwind", level: 88 },
  { name: "GitHub", level: 85 },
];

export default function DeveloperProfile() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setDarkMode(theme !== "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen px-6 py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
      {/* Theme Toggle */}
      <button
        className="absolute top-5 right-5 text-xl p-2 rounded-full bg-cyan-500 text-white shadow"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Header Section */}
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-cyan-500 mb-4">
          <Image src={Raj} alt="Raaz Mehra" width={160} height={160} />
        </div>
        <h1 className="text-3xl font-bold text-cyan-500">Raaz Mehra</h1>
        <p className="text-lg text-cyan-400 mt-2 min-h-[40px]">
          <Typewriter
            words={["Full Stack Developer", "MERN Specialist", "UI/UX Enthusiast", "Frontend Magician"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>
        <p className="text-center mt-4 max-w-xl">
          Building futuristic websites with seamless animations and real-time features. Skilled in the MERN stack and front-end magic.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-6 text-2xl text-cyan-400">
          <a href="https://github.com/raazmehra" target="_blank"><FaGithub /></a>
          <a href="https://linkedin.com/in/raazmehra" target="_blank"><FaLinkedin /></a>
          <a href="https://instagram.com/raazmehra" target="_blank"><FaInstagram /></a>
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="mt-6 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full text-white transition"
        >
          Download Resume
        </a>
      </div>

      {/* Skills Section */}
      <div className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Skills</h2>
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-cyan-500 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
                whileHover={{ scale: 1.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Projects</h2>
        <div className="flex space-x-4">
          <button className="text-cyan-500 hover:text-cyan-700">React</button>
          <button className="text-cyan-500 hover:text-cyan-700">Node.js</button>
          <button className="text-cyan-500 hover:text-cyan-700">MongoDB</button>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-4 mt-4">
          {["GIAR Website", "RaazUniverse", "Quiz Game", "Car Game"].map((project, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-gray-800 text-white rounded-xl p-4 shadow hover:shadow-cyan-500 transition duration-300"
            >
              <h3 className="text-lg font-semibold">{project}</h3>
              <p className="text-sm text-gray-300 mt-2">Interactive & fully animated project using React + Tailwind</p>
              <div className="mt-4 flex justify-between text-cyan-500">
                <a href="#" target="_blank" className="text-sm">View</a>
                <a href="#" target="_blank" className="text-sm">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-12 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Achievements</h2>
        <ul className="space-y-4">
          <li className="bg-gray-800 text-white p-4 rounded-xl shadow hover:shadow-cyan-500 transition duration-300">
            <p className="font-semibold">Research: Green Technologies for Sustainability</p>
            <p className="text-sm text-gray-300">Published in Journal of Maharaja Sayajirao University of Baroda. Ranked 1st.</p>
            <a href="/research-paper.pdf" className="text-cyan-500 hover:text-cyan-700">Download Paper</a>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="mt-12 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 focus:outline-none h-24"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
