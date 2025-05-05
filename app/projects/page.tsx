"use client";

import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      title: "JP Sir Blog",
      description: "A blog platform designed for JP Sir, focusing on education and technology.",
      tags: ["Next.js", "Tailwind CSS", "Vercel"],
      github: "https://github.com/Rajmehra725?tab=repositories",
      demo: "https://jpkushwaha.online/",
    },
    {
      title: "GIAR",
      description: "Global Initiative for Academic Research (GIAR) - A platform for research collaboration.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Rajmehra725?tab=repositories",
      demo: "https://giar-india.org",
    },
    {
      title: "Technician Wale",
      description: "Technician service platform.",
      tags: ["React", "Node.js", "Tailwind CSS"],
      github: "https://github.com/Rajmehra725?tab=repositories",
      demo: "https://technician-one.vercel.app/",
    },
    {
      title: "Raaz Universe",
      description: "Personal Portfolio website",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Rajmehra725?tab=repositories",
      demo: "https://raaz-universe.vercel.app/projects",
    },
    {
      title: "Poster Presentation Website",
      description: "Online Poster Presentation Platform",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/Rajmehra725?tab=repositories",
      demo: "https://giarbioevent.vercel.app/",
    },
    {
      title: "Research Media",
      description: "Social Media Web Application",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/Rajmehra725?tab=repositories", // Add real link if available
      demo: "https://researchmedia.vercel.app/", // Add real link if live
    },
    {
      title: "Roomy",
      description: "Room booking system for students and hostellers.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Rajmehra725?tab=repositories", // Add real link if available
      demo: "https://roomy-ghar.vercel.app/", // Add real link if hosted
    },
   
  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-tr from-slate-900 to-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">🚀 My Projects</h1>
      <p className="text-gray-300 mb-8">Explore my portfolio and the projects I’ve worked on.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-700 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
            <p className="text-gray-300 mb-3">{proj.description}</p>

            {/* Displaying Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tags && proj.tags.map((tag, i) => (
                <span key={i} className="bg-blue-600 text-sm px-2 py-1 rounded">{tag}</span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-yellow-400 hover:text-yellow-300"
              >
                GitHub Repo
              </a>
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-green-400 hover:text-green-300"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 bg-indigo-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-bold mb-2">🎯 Why Mini Projects?</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Build hands-on experience with real-world tech.</li>
          <li>Boost your resume with showcase projects.</li>
          <li>Prepare better for coding interviews and GATE practicals.</li>
        </ul>
      </div>
    </div>
  );
}
