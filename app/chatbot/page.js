"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const handleSend = () => {
    if (!message.trim()) return;

    setChatLog([...chatLog, { sender: "user", text: message }]);
    setMessage("");
  };

  return (
    <main className="chatbot-container">
      <motion.h2
        className="chatbot-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Chatbot Gemini AI
      </motion.h2>

      <motion.div
        className="chatbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {chatLog.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </motion.div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Tulis pesan..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Kirim</button>
      </div>
    </main>
  );
}
