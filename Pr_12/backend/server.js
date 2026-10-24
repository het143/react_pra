const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

// Allow the React dev server (different port) to connect
const io = new Server(server, {
  cors: { origin: "http://localhost:5173" },
});

app.get("/", (req, res) => {
  res.send("Socket.IO Chat Server is running");
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Notify everyone else that a new user has joined
  socket.broadcast.emit("notification", "A new user has joined the chat");

  // Listen for a chat message from this client and broadcast it to everyone
  socket.on("sendMessage", (data) => {
    io.emit("receiveMessage", data);   // send to ALL connected clients, including sender
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    socket.broadcast.emit("notification", "A user has left the chat");
  });
});

const PORT = 3500;
server.listen(PORT, () => {
  console.log(`Chat server running at http://localhost:${PORT}`);
});
