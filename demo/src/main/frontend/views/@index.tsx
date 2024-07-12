import React, { useState } from 'react';

export default function HomeView() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Bot response', isUser: false },
        ]);
      }, 1000);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ width: '100%', height: '500px', border: '1px solid #ccc', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ flex: 1, padding: '10px', overflowY: 'auto' }}>
            {messages.map((message, index) => (
              <div key={index} style={{ margin: '5px 0', padding: '10px', borderRadius: '10px', backgroundColor: message.isUser ? '#007bff' : '#f1f1f1', color: message.isUser ? 'white' : 'black', alignSelf: message.isUser ? 'flex-end' : 'flex-start' }}>
                {message.text}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              style={{ flex: 1, border: 'none', padding: '10px', borderRadius: '0 0 0 10px', outline: 'none' }}
            />
            <button onClick={handleSend} style={{ border: 'none', backgroundColor: '#007bff', color: 'white', padding: '10px', borderRadius: '0 0 10px 0', cursor: 'pointer' }}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
