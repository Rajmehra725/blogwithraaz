"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

interface Message {
  id?: string;
  text: string;
  timestamp: any;
}

export default function LiveChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as Message[];
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (!message.trim()) return;

    await addDoc(collection(db, "messages"), {
      text: message,
      timestamp: serverTimestamp(),
    });

    setMessage("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl bg-white shadow space-y-4">
      <h2 className="text-xl font-bold text-center">🔥 Firebase Live Chat</h2>

      <div className="h-64 overflow-y-auto bg-gray-100 p-3 rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-2 p-2 bg-blue-100 rounded">
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message"
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
