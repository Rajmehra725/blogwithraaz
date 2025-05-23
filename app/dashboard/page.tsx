'use client';

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [currentUser, loading] = useAuthState(auth);
  const [quote, setQuote] = useState("");
  const [userInfo, setUserInfo] = useState<any>(null);
  const [timeGreeting, setTimeGreeting] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const router = useRouter();

  // 🔒 Redirect if not logged in
  useEffect(() => {
    if (!loading && !currentUser) {
      router.push("/login");
    }
  }, [loading, currentUser, router]);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/login");
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning raaz";
    else if (hour < 18) return "Good Afternoon";
    else return "Good Evening";
  };

  useEffect(() => {
    if (currentUser) {
      setTimeGreeting(getGreeting());

      const fetchQuote = async () => {
        const quotes = [
          "Push yourself, because no one else is going to do it for you.",
          "Success is not for the lazy.",
          "The future depends on what you do today.",
          "Believe you can and you're halfway there."
        ];
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
      };

      const fetchUserInfo = async () => {
        const ref = doc(db, "users", currentUser.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) setUserInfo(snap.data());
      };

      fetchQuote();
      fetchUserInfo();
    }
  }, [currentUser]);

  if (loading || !currentUser) {
    return <div className="p-6 text-gray-500">Loading...</div>;
  }

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [2, 5, 3, 7, 4],
        backgroundColor: 'rgba(34, 197, 94, 0.7)',
      },
    ],
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <h1 className="text-2xl font-bold text-gray-700 mb-1">
              {timeGreeting}, {userInfo?.name || currentUser.email}
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              You're now logged in to RaazGatex ✨
            </p>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">📊 Dashboard Analytics</h2>
              <Chart type="bar" data={chartData} />
            </div>
          </>
        );
      case "profile":
        return (
          <div>
            <h2 className="text-lg font-semibold mb-2">📋 Profile Info</h2>
            <p><strong>Email:</strong> {currentUser.email}</p>
            <p><strong>Role:</strong> {userInfo?.role || "User"}</p>
            <p><strong>Joined:</strong> {userInfo?.createdAt || "N/A"}</p>
          </div>
        );
      case "settings":
        return (
          <div>
            <h2 className="text-lg font-semibold mb-2">⚙️ Settings</h2>
            <p>Edit your profile, email, and preferences.</p>
          </div>
        );
      case "quotes":
        return (
          <div>
            <h2 className="text-lg font-semibold mb-2">🧠 Quote of the Day</h2>
            <blockquote className="italic text-green-700">“{quote}”</blockquote>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className={`transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-md p-4 space-y-4`}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">{sidebarOpen ? "Dashboard" : "📊"}</h2>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-sm">☰</button>
        </div>
        <nav className="space-y-2">
          <button onClick={() => setActiveTab("dashboard")} className="block w-full text-left text-gray-700 hover:text-green-600">📊 {sidebarOpen && "Analytics"}</button>
          <button onClick={() => setActiveTab("profile")} className="block w-full text-left text-gray-700 hover:text-green-600">👤 {sidebarOpen && "Profile"}</button>
          <button onClick={() => setActiveTab("settings")} className="block w-full text-left text-gray-700 hover:text-green-600">⚙️ {sidebarOpen && "Settings"}</button>
          <button onClick={() => setActiveTab("quotes")} className="block w-full text-left text-gray-700 hover:text-green-600">💡 {sidebarOpen && "Quote"}</button>
          <button onClick={handleSignOut} className="block w-full text-left text-red-600 hover:text-red-800">🚪 {sidebarOpen && "Sign Out"}</button>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow p-6">
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
}
