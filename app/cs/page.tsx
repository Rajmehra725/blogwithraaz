import Link from 'next/link';

export default function CSPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">💻 Computer Science (GATE)</h1>

      <div className="space-y-4">
        <Link href="/cs/dsa">
          <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
            📚 Data Structures
          </div>
        </Link>
        <Link href="/cs/algo">
          <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
            🔍 Algorithms
          </div>
        </Link>
      </div>
    </main>
  );
}
