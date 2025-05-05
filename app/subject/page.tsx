export default function SubjectsPage() {
    const subjects = ["Algorithms", "Data Structures", "Operating Systems", "DBMS", "CN", "TOC", "Compiler Design", "Discrete Math", "Digital Logic"];
  
    return (
      <div className="p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">GATE CSE Subjects</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {subjects.map((subject, index) => (
            <li key={index} className="bg-gray-800 rounded-lg p-4 shadow-md">
              {subject}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  