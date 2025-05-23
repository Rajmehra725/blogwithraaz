'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function ChatPage() {
  const { uid } = useParams();
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    // You'll later integrate Firebase send logic here
    console.log(`Send message to: ${uid}`, message);
    setMessage("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Chat with: {uid}</h1>
      <div className="mb-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border px-3 py-2 rounded w-full"
          placeholder="Type your message..."
        />
      </div>
      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}
