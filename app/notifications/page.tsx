"use client";
import React, { useState } from "react";

type NotificationType = "Quiz" | "Exam" | "Update";

type Notification = {
  id: number;
  title: string;
  message: string;
  time: string;
  type: NotificationType;
  isNew: boolean;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "🎯 New Quiz Available",
    message: "Mock Test 3 on OS is now live! Try it.",
    time: "May 22, 2025 – 2:30 PM",
    type: "Quiz",
    isNew: true,
  },
  {
    id: 2,
    title: "📅 GATE Exam Date Announced",
    message: "GATE CSE 2025 in Feb 2nd week.",
    time: "May 20, 2025 – 11:00 AM",
    type: "Exam",
    isNew: false,
  },
  {
    id: 3,
    title: "📄 New PYQs Uploaded",
    message: "2023-2024 PYQs of CN, OS are added.",
    time: "May 18, 2025 – 10:00 AM",
    type: "Update",
    isNew: true,
  },
  {
    id: 4,
    title: "💡 Toppers’ Tips Added",
    message: "Success stories from AIR 1 & 3.",
    time: "May 15, 2025 – 9:00 AM",
    type: "Update",
    isNew: false,
  },
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<NotificationType | "All">("All");

  const handleMarkAllRead = () => {
    const updated = notifications.map(n => ({ ...n, isNew: false }));
    setNotifications(updated);
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear all notifications?")) {
      setNotifications([]);
    }
  };

  const filteredNotifications = notifications.filter(n =>
    (filter === "All" || n.type === filter) &&
    (n.title.toLowerCase().includes(search.toLowerCase()) || n.message.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#0b1120] text-white px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-blue-400 flex items-center gap-2">
          🔔 Notifications{" "}
          <span className="text-sm bg-blue-600 text-white px-2 rounded-full">
            {notifications.filter(n => n.isNew).length}
          </span>
        </h1>
        <div className="flex gap-2">
          <button onClick={handleMarkAllRead} className="bg-green-600 px-3 py-1 rounded hover:bg-green-700">
            ✅ Mark All Read
          </button>
          <button onClick={handleClearAll} className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">
            🗑️ Clear All
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search notifications..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={filter}
          onChange={e => setFilter(e.target.value as any)}
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none"
        >
          <option value="All">All Types</option>
          <option value="Quiz">Quiz</option>
          <option value="Exam">Exam</option>
          <option value="Update">Update</option>
        </select>
      </div>

      {filteredNotifications.length > 0 ? (
        <div className="space-y-6">
          {filteredNotifications.map(note => (
            <div
              key={note.id}
              className={`p-5 rounded-lg border shadow-md transition-all duration-200 ${
                note.isNew ? "border-blue-600 bg-blue-950" : "border-gray-700 bg-gray-900"
              }`}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-blue-300">{note.title}</h2>
                <span className="text-xs text-gray-400">{note.time}</span>
              </div>
              <p className="text-gray-300 mt-2">{note.message}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-sm text-yellow-400">{note.type}</span>
                {note.isNew && (
                  <span className="text-xs bg-green-700 text-white px-2 py-0.5 rounded-full">New</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center">No notifications found for your search/filter.</p>
      )}
    </div>
  );
};

export default NotificationsPage;
