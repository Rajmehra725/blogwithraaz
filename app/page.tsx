'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Rahul from "@/public/Image/Rahul-Kumar-Singh-9.png"
import { FaBookOpen, FaChalkboardTeacher, FaUniversity, FaYoutube } from 'react-icons/fa';
// Dummy Topper Data
const toppers = [
  {
    name: 'rahul kumar singh',
    rank: 'AIR 1',
    image: Rahul,
  }
]
const subjects = [
  "Algorithms", "DataStructures", "OperatingSystems", "ComputerNetworks",
  "DBMS", "DiscreteMaths", "ComputerOrganization", "TheoryofComputation",
  "CompilerDesign", "DigitalLogic", "GeneralAptitude"
]
export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % toppers.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const current = toppers[index]
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4 sm:p-6 text-white font-sans">
       <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-4 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 drop-shadow-lg">
          Meet Our GATE 2025 Toppers! 🏆
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Real success stories. Real ranks. Real students who trusted RaazGateX.
        </p>
      </motion.div>

      {/* Carousel Card */}
      <motion.div
        key={current.name}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-12 max-w-md mx-auto bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center space-y-4"
      >
        <Image
          src={current.image}
          alt={current.name}
          width={100}
          height={100}
          className="rounded-full border-4 border-blue-500 shadow-md"
        />
        <h3 className="text-xl font-bold text-blue-300">{current.name}</h3>
        <p className="text-white text-sm">{current.rank}</p>
      </motion.div>
      <section className="mt-20 text-center px-4 sm:px-8">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-blue-400 drop-shadow mb-8"
  >
    📘 GATE Subjects We Cover
  </motion.h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
    {subjects.map((subject, index) => (
      <Link href={`/subjects/${subject}`} key={subject}>
        <motion.div
          className="bg-gray-800 text-white p-5 rounded-xl shadow-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold capitalize">{subject}</h3>
        </motion.div>
      </Link>
    ))}
  </div>
</section>

    </section>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-4"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-400 drop-shadow-lg">
          Welcome to GATE Preparation Hub 🚀
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
          One-stop destination for everything you need to ace the GATE exam — from concepts to career.
        </p>
      </motion.div>

      {/* Navigation Quick Access (Optional) */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm sm:text-base">
        <a href="#what-is-gate" className="hover:text-blue-500">What is GATE?</a>
        <a href="#after-gate" className="hover:text-blue-500">After GATE</a>
        <a href="#materials" className="hover:text-blue-500">Study Materials</a>
        <a href="#resources" className="hover:text-blue-500">Videos & PDFs</a>
      </div>

     {/* What is GATE Section for CSE */}
<section id="what-is-gate" className="bg-gray-800 mt-10 p-6 rounded-xl shadow-md space-y-4">
  <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="text-2xl font-bold text-blue-400 flex items-center gap-2"
  >
    <FaBookOpen /> What is GATE CSE? (GATE CSE क्या है?)
  </motion.h2>

  <p className="text-gray-300 leading-relaxed">
    GATE CSE (Graduate Aptitude Test in Engineering – Computer Science) ek national-level exam hai jo un students ke liye hota hai 
    jo Computer Science & Engineering background se hain aur higher education ya PSU jobs ka aim rakhte hain.
  </p>

  <p className="text-gray-300 leading-relaxed">
    इस परीक्षा का उद्देश्य students ki conceptual understanding aur problem-solving skills ko test करना होता है 
    subjects जैसे:
    <ul className="list-disc pl-6 mt-2 space-y-1">
      <li>Data Structures and Algorithms</li>
      <li>Computer Networks</li>
      <li>Operating Systems</li>
      <li>Databases (DBMS)</li>
      <li>Theory of Computation (TOC)</li>
      <li>Compiler Design</li>
      <li>Digital Logic</li>
      <li>Discrete Mathematics</li>
      <li>General Aptitude (GA)</li>
    </ul>
  </p>

  <p className="text-gray-300 leading-relaxed">
    <strong>Eligibility:</strong> B.E./B.Tech in Computer Science ya equivalent degree holders (final year included) eligible hote hain.
  </p>

  <p className="text-gray-300 leading-relaxed">
    <strong>Score Validity:</strong> GATE CSE ka score 3 saal tak valid hota hai aur is score se aap:
    <ul className="list-disc pl-6 mt-2 space-y-1">
      <li>IITs, NITs, IIITs jaise institutes me M.Tech/M.S. ke liye apply kar sakte hain.</li>
      <li>PSUs (like ISRO, DRDO, BARC, NIC, IOCL, etc.) me job ke liye apply kar sakte hain.</li>
      <li>Foreign universities me admission ke liye bhi use kar sakte hain (e.g., NTU, NUS).</li>
    </ul>
  </p>

  <p className="text-gray-300 leading-relaxed">
    <strong>Exam Pattern:</strong> GATE CSE me 65 questions hote hain – 100 marks total. Isme 15 marks General Aptitude ke hote hain 
    aur baaki 85 marks technical CS subjects se hote hain.
  </p>

  <p className="text-gray-300 leading-relaxed">
    GATE CSE me success paane ke liye strong foundation, previous year questions ka practice, aur mock tests bahut important hote hain.
  </p>
</section>


     {/* After GATE Section for CSE */}
<section id="after-gate" className="bg-gray-800 mt-10 p-6 rounded-xl shadow-md space-y-4">
  <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="text-2xl font-bold text-blue-400 flex items-center gap-2"
  >
    <FaUniversity /> After Qualifying GATE CSE (GATE CS के बाद क्या?)
  </motion.h2>

  <ul className="list-disc text-gray-300 ml-6 space-y-2">
    <li><strong>IITs, NITs, IIITs</strong> jaise top institutes me <span className="text-white font-semibold">M.Tech in CSE</span> ya specialization (AI, Data Science, Cybersecurity) ke liye admission.</li>
    
    <li><strong>PSUs (Public Sector Units)</strong> jaise <span className="text-white font-semibold">IOCL, BARC, ISRO, DRDO, NIC</span> me software development, networking, cyber security ya data engineering profiles ke liye direct interview.</li>

    <li><strong>Ph.D. programs</strong> in Computer Science for students interested in research fields jaise Machine Learning, Distributed Systems, Quantum Computing, etc.</li>

    <li><strong>Research roles</strong> at <span className="text-white font-semibold">IITs, IISc</span> aur sponsored projects jaise Prime Minister's Research Fellowship (PMRF).</li>

    <li><strong>Foreign university admissions</strong> (e.g., <span className="text-white font-semibold">NUS, NTU, RWTH Aachen</span>) where GATE score is accepted in place of GRE.</li>

    <li><strong>Teaching/Lectureship</strong> positions at engineering colleges and universities in India.</li>

    <li><strong>Higher chances of placement</strong> during M.Tech from IIT/NIT with companies like Google, Microsoft, Amazon, Oracle, etc.</li>

    <li><strong>Specialized domains</strong> me career build karna: like Cybersecurity Expert, AI/ML Engineer, Cloud Architect, DevOps Engineer.</li>
  </ul>

  <p className="text-gray-400 text-sm italic mt-4">
    GATE CS का score aapka technical competency prove karta hai, jo academics ke alawa industry me bhi highly valued hota hai.
  </p>
</section>


     {/* Preparation Material Section */}
<section id="materials" className="bg-gray-800 mt-10 p-6 rounded-xl shadow-md space-y-6">
  <motion.h2 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
    <FaChalkboardTeacher /> GATE Preparation Material (तैयारी सामग्री)
  </motion.h2>

  {/* GATE Syllabus */}
  <div>
    <h3 className="text-xl font-semibold text-blue-300">GATE Syllabus (CSE)</h3>
    <p className="text-gray-300 mt-2">
      GATE CSE syllabus includes core computer science subjects + general aptitude. Topics include:
    </p>
    <ul className="list-disc text-gray-300 ml-6">
      <li>Data Structures & Algorithms</li>
      <li>Computer Organization & Architecture</li>
      <li>Operating Systems</li>
      <li>Database Management Systems</li>
      <li>Computer Networks</li>
      <li>Theory of Computation</li>
      <li>Compiler Design</li>
      <li>Digital Logic</li>
      <li>Discrete Mathematics, Linear Algebra, Calculus, Probability</li>
      <li>General Aptitude (verbal + quantitative)</li>
    </ul>
    <Link href="/gate-syllabus">
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-full shadow">
        View Detailed Syllabus
      </button>
    </Link>
  </div>

  {/* Recommended Books */}
  <div>
    <h3 className="text-xl font-semibold text-blue-300">Recommended Books</h3>
    <ul className="list-disc text-gray-300 ml-6 space-y-2">
      <li><strong>Algorithms:</strong> CLRS (Introduction to Algorithms)</li>
      <li><strong>DSA:</strong> “Data Structures” by Sartaj Sahni</li>
      <li><strong>Computer Networks:</strong> Kurose & Ross</li>
      <li><strong>Operating System:</strong> Galvin</li>
      <li><strong>COA:</strong> Morris Mano + Hamacher</li>
      <li><strong>TOC:</strong> Peter Linz</li>
      <li><strong>Compiler Design:</strong> Aho (Dragon Book)</li>
      <li><strong>DBMS:</strong> Korth & Sudarshan</li>
      <li><strong>Discrete Maths:</strong> Kenneth Rosen</li>
      <li><strong>Maths & Aptitude:</strong> RS Aggarwal + MADE EASY Notes</li>
    </ul>
  </div>

  {/* Free Resources & PDFs */}
  <div>
    <h3 className="text-xl font-semibold text-blue-300">Free Resources & PDFs</h3>
    <ul className="list-disc text-gray-300 ml-6 space-y-2">
      <li><strong>GeeksforGeeks:</strong> Topic-wise explanations & MCQs</li>
      <li><strong>NPTEL:</strong> IIT-level lectures on core CS subjects</li>
      <li><strong>GATE Overflow:</strong> Previous year questions with discussion</li>
      <li><strong>GateBook.in:</strong> Free notes & quizzes</li>
      <li><strong>Examrace:</strong> PDF notes + strategy articles</li>
    </ul>
  </div>

  {/* Best YouTube Channels */}
  <div>
    <h3 className="text-xl font-semibold text-blue-300">Top YouTube Channels</h3>
    <ul className="list-disc text-gray-300 ml-6 space-y-2">
      <li><strong>Gate Smashers</strong> – Full subject-wise video lectures</li>
      <li><strong>Knowledge Gate</strong> – Concept explanation + PYQs</li>
      <li><strong>Unacademy GATE CS</strong> – Live sessions & crash courses</li>
      <li><strong>Code Decode</strong> – DSA + OS + DBMS</li>
    </ul>
  </div>

  {/* Mock Tests & Online Platforms */}
  <div>
    <h3 className="text-xl font-semibold text-blue-300">Mock Tests & Practice Platforms</h3>
    <ul className="list-disc text-gray-300 ml-6 space-y-2">
      <li><strong>Testbook</strong> – Free + Paid full-length tests</li>
      <li><strong>Made Easy Online Test Series</strong></li>
      <li><strong>Unacademy</strong> – Sectional & full mocks</li>
      <li><strong>GATE Overflow</strong> – Community-based mocks</li>
    </ul>
  </div>

  {/* Formula Sheets & Revision Notes */}
  <div>
    <h3 className="text-xl font-semibold text-blue-300">Formula Sheets & Short Notes</h3>
    <p className="text-gray-300 mt-2">
      Revision ke liye short notes aur formula sheets bana ke rakhein. Here are some downloadable PDFs:
    </p>
    <ul className="list-disc text-gray-300 ml-6 space-y-2">
      <li><Link href="/pdfs/gate-cs-formulas.pdf" target="_blank" className="text-blue-400 underline">GATE CS Formula Sheet (PDF)</Link></li>
      <li><Link href="/pdfs/gate-short-notes.pdf" target="_blank" className="text-blue-400 underline">Quick Revision Notes</Link></li>
    </ul>
  </div>

  {/* Previous Year Question Papers */}
  <div>
    <h3 className="text-xl font-semibold text-blue-300">Previous Year Papers</h3>
    <p className="text-gray-300 mt-2">
      Practice past year papers to understand real exam pattern.
    </p>
    <Link href="/gate-question-papers">
      <button className="mt-4 bg-yellow-600 hover:bg-yellow-700 transition px-6 py-2 rounded-full shadow">
        View Question Papers
      </button>
    </Link>
  </div>

  {/* Study Strategy */}
  <div>
    <h3 className="text-xl font-semibold text-blue-300">Study Strategy for GATE CS</h3>
    <ul className="list-disc text-gray-300 ml-6 space-y-2 mt-2">
      <li>Start with easy subjects like TOC, DBMS, and move to difficult ones.</li>
      <li>Follow 80-20 Rule: 20% concepts repeat in 80% questions.</li>
      <li>Give weekly tests to track progress.</li>
      <li>Make your own notes for last moment revision.</li>
      <li>Use Pomodoro technique for better focus.</li>
    </ul>
  </div>

  <p className="text-gray-400 text-sm italic mt-4">
    सही direction mein मेहनत करें, consistency रखें – GATE clear करना possible है!
  </p>
</section>


    {/* Video, PDFs and Image Resources */}
<section id="resources" className="bg-gray-800 mt-10 p-6 rounded-xl shadow-md space-y-6">
  <motion.h2 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
    <FaYoutube /> GATE Resources (संसाधन)
  </motion.h2>

  {/* YouTube Videos */}
  <div className="grid sm:grid-cols-2 gap-6">
    <div className="video-card">
      <iframe
        className="w-full aspect-video rounded-lg"
        src="https://www.youtube.com/embed/lTlDUGb7dWg" 
        title="How to Prepare for GATE CSE 2025 | Strategy by Gate Smashers"
        allowFullScreen
      ></iframe>
      <p className="text-center mt-2 text-gray-300">GATE CS 2025 Preparation Strategy – Gate Smashers</p>
    </div>

    <div className="video-card">
      <iframe
        className="w-full aspect-video rounded-lg"
        src="https://www.youtube.com/embed/Zz--ekWQzXs"
        title="Mock Test Practice and Mistake Analysis | Knowledge Gate"
        allowFullScreen
      ></iframe>
      <p className="text-center mt-2 text-gray-300">Mock Test Guide & Mistake Analysis – Knowledge Gate</p>
    </div>
  </div>

  {/* PDF Downloads */}
  <div className="text-center">
    <h4 className="text-lg font-medium text-blue-300">Download Study PDFs</h4>
    <div className="flex justify-center gap-4 flex-wrap mt-4">
      <Link href="/pdfs/gate-cs-formula-sheet.pdf">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">Formula Sheet (PDF)</button>
      </Link>
      <Link href="/pdfs/gate-topic-wise-pyq.pdf">
        <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full">Topic-wise PYQs (PDF)</button>
      </Link>
      <Link href="/pdfs/gate-study-plan.pdf">
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full">3-Month Study Plan</button>
      </Link>
    </div>
  </div>

  {/* Informative Image */}
  <div className="mt-6 text-center">
    <img
      src="https://www.practicemock.com/blog/wp-content/uploads/2024/07/GATE-2024-Preparation-Strategy-1.png"
      alt="GATE CS Preparation Strategy Infographic"
      className="w-full max-w-3xl mx-auto rounded-lg shadow-xl"
    />
    <p className="text-gray-400 mt-2 text-sm italic">Visual roadmap for GATE CS preparation</p>
  </div>
</section>


    </main>
  );
}
