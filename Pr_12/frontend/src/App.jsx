import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:3500");

function App() {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setChat((prev) => [...prev, data]);
    });

    socket.on("notification", (text) => {
      setChat((prev) => [...prev, { system: true, text }]);
    });

    // Clean up listeners when the component unmounts
    return () => {
      socket.off("receiveMessage");
      socket.off("notification");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const data = { user: username, text: message, time: new Date().toLocaleTimeString() };
    socket.emit("sendMessage", data);
    setMessage("");
  };

  if (!joined) {
    return (
      <div className="app">
        <h1>Join the Chat</h1>
        <input
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => username.trim() && setJoined(true)}>Join</button>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Real-Time Chat - Socket.IO</h1>
      <div className="chat-box">
        {chat.map((m, i) =>
          m.system ? (
            <p key={i} className="system-msg">{m.text}</p>
          ) : (
            <p key={i}><strong>{m.user}:</strong> {m.text} <span className="time">{m.time}</span></p>
          )
        )}
      </div>
      <form onSubmit={sendMessage} className="chat-form">
        <input
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
