'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import React from 'react';

const subjectDetails: Record<string, {
  title: string;
  pdf: string;
  images: string[];
  video: string;
  description: string;
}> = {
    algorithms: {
      title: "Algorithms",
      pdf: "/pdfs/algorithms.pdf",
      images: ["/images/algos1.png", "/images/algos2.png"],
      video: "https://www.youtube.com/embed/8hly31xKli0",
      description:
        "Algorithms are step-by-step procedures used for solving problems or performing tasks. They form the foundation of computer science and programming, helping optimize performance and efficiency in tasks such as searching, sorting, and pathfinding.",
    },
    datastructures: {
      title: "Data Structures",
      pdf: "/pdfs/datastructures.pdf",
      images: ["/images/data1.png", "/images/data2.png"],
      video: "https://www.youtube.com/embed/sVxBVvlnJsM",
      description:
        "Data Structures are ways of organizing and storing data so it can be accessed and modified efficiently. Common structures include arrays, linked lists, trees, and graphs. Understanding them is crucial for building efficient software.",
    },
    operatingsystems: {
      title: "Operating Systems",
      pdf: "/pdfs/operatingsystems.pdf",
      images: ["/images/os1.png", "/images/os2.png"],
      video: "https://www.youtube.com/embed/26QPDBe-NB8",
      description:
        "Operating Systems manage computer hardware and software resources, providing services for computer programs. Topics include process management, memory management, file systems, and security mechanisms.",
    },
    computernetworks: {
      title: "Computer Networks",
      pdf: "/pdfs/computernetworks.pdf",
      images: ["/images/networks1.png", "/images/networks2.png"],
      video: "https://www.youtube.com/embed/IPvYjXCsTg8",
      description:
        "Computer Networks involve the connection of multiple devices to share resources and communicate. It includes topics such as protocols, IP addressing, OSI model, TCP/IP, and wireless communication.",
    },
    dbms: {
      title: "DBMS",
      pdf: "/pdfs/dbms.pdf",
      images: ["/images/dbms1.png", "/images/dbms2.png"],
      video: "https://www.youtube.com/embed/TYo_CUnIWP8",
      description:
        "Database Management Systems (DBMS) are software systems that manage databases. They allow users to store, retrieve, and manipulate data efficiently using languages like SQL. Key concepts include normalization, transactions, and indexing.",
    },
    discretemaths: {
      title: "Discrete Maths",
      pdf: "/pdfs/discretemaths.pdf",
      images: ["/images/discrete1.png", "/images/discrete2.png"],
      video: "https://www.youtube.com/embed/UoTTa70VYKg",
      description:
        "Discrete Mathematics is the study of mathematical structures that are countable or distinct. It includes logic, set theory, combinatorics, graph theory, and number theory—essential for theoretical computer science.",
    },
    computerorganization: {
      title: "Computer Organization",
      pdf: "/pdfs/computerorganization.pdf",
      images: ["/images/comporg1.png", "/images/comporg2.png"],
      video: "https://www.youtube.com/embed/FTJr9JpT46s",
      description:
        "Computer Organization deals with the internal structure of a computer system. It covers topics like CPU architecture, memory hierarchy, instruction sets, and control units. Understanding it is vital for hardware-level optimization.",
    },
    theoryofcomputation: {
      title: "Theory of Computation",
      pdf: "/pdfs/toc.pdf",
      images: ["/images/toc1.png", "/images/toc2.png"],
      video: "https://www.youtube.com/embed/9EXn3Kzv2Hk",
      description:
        "Theory of Computation explores the fundamental capabilities and limitations of computers. It includes automata theory, formal languages, Turing machines, and computational complexity.",
    },
    compilerdesign: {
      title: "Compiler Design",
      pdf: "/pdfs/compilerdesign.pdf",
      images: ["/images/compiler1.png", "/images/compiler2.png"],
      video: "https://www.youtube.com/embed/f_1JY8L7tU0",
      description:
        "Compiler Design focuses on the construction of compilers that convert high-level code into machine code. It includes lexical analysis, syntax parsing, semantic analysis, and code optimization techniques.",
    },
    digitallogic: {
      title: "Digital Logic",
      pdf: "/pdfs/digitallogic.pdf",
      images: ["/images/digital1.png", "/images/digital2.png"],
      video: "https://www.youtube.com/embed/6xW9_7So7x8",
      description:
        "Digital Logic is the foundation of digital circuits used in computers. It involves logic gates, Boolean algebra, combinational and sequential circuits, and the design of digital systems.",
    },
    generalaptitude: {
      title: "General Aptitude",
      pdf: "/pdfs/aptitude.pdf",
      images: ["/images/aptitude1.png", "/images/aptitude2.png"],
      video: "https://www.youtube.com/embed/nAgjxUwCnXA",
      description:
        "General Aptitude tests logical reasoning, numerical ability, and problem-solving skills. It is often used in competitive exams and job assessments and includes topics like ratios, percentages, series, and puzzles.",
    },
};

export default function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = React.use(params); // ✅ unwrap params properly
  const subjectData = subjectDetails[subject.toLowerCase()];

  if (!subjectData) return notFound();

  return (
    <motion.div
      className="p-6 text-white max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-bold text-blue-400 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {subjectData.title}
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {subjectData.description}
      </motion.p>

      <motion.a
        href={subjectData.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-300 underline mb-6 text-lg hover:text-blue-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        📄 View Notes (PDF)
      </motion.a>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {subjectData.images.map((img, i) => (
          <motion.img
            src={img}
            key={i}
            alt={`Subject Image ${i + 1}`}
            className="rounded-xl shadow-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.2 + 0.3, duration: 0.5 }}
          />
        ))}
      </div>

      <motion.div
        className="aspect-w-16 aspect-h-9"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          src={subjectData.video}
          className="w-full h-full rounded-xl"
          allowFullScreen
          title={`${subjectData.title} Video`}
        ></iframe>
      </motion.div>
    </motion.div>
  );
}
