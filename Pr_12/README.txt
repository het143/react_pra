PRACTICAL 12: Real-Time Chat Application using Socket.IO, React and Node.js
============================================================

AIM:
To develop a real-time chat application where multiple connected browser clients can send and receive messages instantly, using Socket.IO for bidirectional, event-based communication between a Node.js/Express server and a React frontend.

REQUIREMENTS:
- Node.js (v18 or later) and NPM installed
- A code editor (VS Code recommended)
- Two or more browser windows/tabs (to simulate multiple chat users)
- Backend: `express`, `socket.io`
- Frontend: `socket.io-client`

FILE STRUCTURE:

realtime-chat-app/
|-- backend/
|   |-- server.js
|   `-- package.json
`-- frontend/
    |-- src/
    |   |-- App.jsx
    |   |-- App.css
    |   `-- main.jsx
    |-- index.html
    `-- package.json


COMMANDS:

# Backend - create folder and initialize
mkdir -p realtime-chat-app/backend && cd realtime-chat-app/backend && npm init -y

# Backend - install dependencies
npm install express socket.io

# Backend - run the server
node server.js

# Frontend - create the Vite React app (new terminal)
cd ../.. && cd realtime-chat-app && npm create vite@latest frontend -- --template react

# Frontend - install dependencies
cd frontend && npm install

# Frontend - install Socket.IO client
npm install socket.io-client

# Frontend - run the dev server
npm run dev

WORKFLOW:
1. Create realtime-chat-app/backend and realtime-chat-app/frontend folders.
2. **Backend:** npm init -y, install express and socket.io; create server.js that wraps an Express app in a raw http.createServer() (required by Socket.IO), creates a Server instance with CORS allowing the frontend's origin, and listens for connection, a custom sendMessage event (re-broadcast to everyone via io.emit), and disconnect.
3. **Frontend:** create a Vite + React app inside frontend/, install socket.io-client; connect to the backend once with io("http://localhost:3500") outside the component so the same socket connection is reused across re-renders.
4. In App.jsx, maintain state for username, a joined flag, the current message input, and the chat message history array; register socket.on("receiveMessage", ...) and socket.on("notification", ...) listeners inside a useEffect that runs once.
5. On form submit, call socket.emit("sendMessage", data) to send the typed message to the server, which then broadcasts it back to every connected client (including the sender).
6. Start the backend first, then the frontend, then open the frontend URL in **two separate browser tabs/windows** to simulate two chat users.

EXECUTION:
1. Terminal 1: cd realtime-chat-app/backend && npm install && node server.js - confirm it prints Chat server running at http://localhost:3500.
2. Terminal 2: cd realtime-chat-app/frontend && npm install && npm install socket.io-client && npm run dev - open the printed local URL.
3. Open the same URL in a **second browser tab**. Enter a different name (e.g. "Priya") and click **Join** in this second tab, while the first tab is joined as "Rahul".
4. Type a message in Tab 1 and click **Send** - it should instantly appear in **both** tabs.
5. Type a reply in Tab 2 and click **Send** - it should instantly appear in **both** tabs too.
6. Close Tab 2 - Tab 1 should show a system notification that a user left.

RESULT:
A real-time chat application was successfully implemented using Socket.IO for bidirectional communication between a Node.js/Express server and multiple React clients, with messages and join/leave notifications delivered instantly to all connected users, meeting the objective of the practical.