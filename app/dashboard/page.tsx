'use client';

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import dynamic from "next/dynamic";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";

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

const Chart = dynamic(() => import("react-chartjs-2").then(mod => mod.Chart), {
  ssr: false,
});

export default function Dashboard() {
  const [currentUser, loading] = useAuthState(auth);
  const [quote, setQuote] = useState("");
  const [userInfo, setUserInfo] = useState<any>(null);
  const [timeGreeting, setTimeGreeting] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (!loading && !currentUser) {
      router.push("/login");
    }
  }, [currentUser, loading]);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/login");
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    else if (hour < 18) return "Good Afternoon";
    else return "Good Evening";
  };

  useEffect(() => {
    if (!currentUser) return;

    setTimeGreeting(getGreeting());

    const fetchQuote = async () => {
      const quotes = [
        "Push yourself, because no one else is going to do it for you.",
        "Success is not for the lazy.",
        "The future depends on what you do today.",
        "Believe you can and you're halfway there.",
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
  }, [currentUser]);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmNewPassword) {
      setError("New passwords do not match.");
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user || !user.email) {
        setError("User not authenticated.");
        return;
      }

      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);

      setSuccess("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (err: any) {
      setError(err.message || "Failed to update password.");
    }
  };

  if (loading) return <p className="p-6">Checking authentication...</p>;
  if (!currentUser) return null;

  const displayName = userInfo?.name || currentUser?.email || "User";

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
            <h1 className="text-2xl font-bold text-gray-700 mb-1">{timeGreeting}, {displayName}</h1>
            <p className="text-sm text-gray-500 mb-4">You're now logged in to RaazGatex ✨</p>
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
            <p><strong>Joined:</strong> {userInfo?.createdAt?.toDate?.().toLocaleDateString?.() || "N/A"}</p>
          </div>
        );
      case "settings":
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4">⚙️ Change Password</h2>
            <form onSubmit={handleChangePassword} className="space-y-4 max-w-md">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full px-4 py-2 border rounded"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-2 border rounded"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full px-4 py-2 border rounded"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Update Password
              </button>
              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-600">{success}</p>}
            </form>
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
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <aside className={`transition-all duration-300 ${sidebarOpen ? 'w-full md:w-64' : 'w-16'} bg-white shadow-md p-4 space-y-4`}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">{sidebarOpen ? "Dashboard" : "📊"}</h2>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-sm md:hidden">☰</button>
        </div>
        <nav className="space-y-2">
          <button onClick={() => setActiveTab("dashboard")} className="block w-full text-left text-gray-700 hover:text-green-600">📊 {sidebarOpen && "Analytics"}</button>
          <button onClick={() => setActiveTab("profile")} className="block w-full text-left text-gray-700 hover:text-green-600">👤 {sidebarOpen && "Profile"}</button>
          <button onClick={() => setActiveTab("settings")} className="block w-full text-left text-gray-700 hover:text-green-600">⚙️ {sidebarOpen && "Settings"}</button>
          <button onClick={() => setActiveTab("quotes")} className="block w-full text-left text-gray-700 hover:text-green-600">💡 {sidebarOpen && "Quote"}</button>
          <button onClick={handleSignOut} className="block w-full text-left text-red-600 hover:text-red-800">🚪 {sidebarOpen && "Sign Out"}</button>
        </nav>
      </aside>
      <main className="flex-1 p-4 md:p-6">
        <div className="bg-white rounded-xl shadow p-4 md:p-6">
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
}
