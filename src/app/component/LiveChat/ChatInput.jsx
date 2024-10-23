'use client'
import React, { useState } from 'react';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Send message:", message);
      setMessage(''); // Clear the input after sending
    }
  };

  return (
    <div className="border-t border-gray-200 p-4">
      <div className="flex">
        <input
          type="text"
          className="flex-1 border rounded-lg p-2 outline-none focus:border-blue-400"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
