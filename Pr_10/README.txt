PRACTICAL 10: Complete MERN Application Integrating React Frontend, Express Backend and MongoDB Database
============================================================

AIM:
To develop a complete MERN stack Task Manager application - a React frontend (built with Vite) that consumes a RESTful Express.js + MongoDB backend, supporting adding, listing, completing and deleting tasks.

REQUIREMENTS:
- Node.js (v18 or later) and NPM installed
- MongoDB running locally (or MongoDB Atlas)
- A code editor (VS Code recommended)
- Backend: `express`, `mongoose`, `cors`
- Frontend: `axios`

FILE STRUCTURE:

mern-task-manager/
|-- backend/
|   |-- models/
|   |   `-- Task.js
|   |-- routes/
|   |   `-- taskRoutes.js
|   |-- server.js
|   `-- package.json
`-- frontend/
    |-- src/
    |   |-- api/
    |   |   `-- taskApi.js
    |   |-- components/
    |   |   |-- TaskForm.jsx
    |   |   `-- TaskList.jsx
    |   |-- App.jsx
    |   |-- App.css
    |   `-- main.jsx
    |-- index.html
    `-- package.json


COMMANDS:

# Backend - create folder and initialize
mkdir -p mern-task-manager/backend && cd mern-task-manager/backend && npm init -y

# Backend - install dependencies
npm install express mongoose cors

# Backend - run the server
node server.js

# Frontend - create the Vite React app (in a new terminal)
cd ../.. && cd mern-task-manager && npm create vite@latest frontend -- --template react

# Frontend - install dependencies
cd frontend && npm install

# Frontend - install Axios
npm install axios

# Frontend - run the dev server
npm run dev

WORKFLOW:
1. Create a parent folder mern-task-manager with two subfolders: backend and frontend.
2. **Backend:** npm init -y, install express, mongoose, cors; create models/Task.js with a schema (title, completed); create routes/taskRoutes.js with GET/POST/PUT/DELETE routes; create server.js enabling CORS, JSON parsing, connecting to MongoDB, and mounting the routes under /api/tasks on port 5000.
3. **Frontend:** create a Vite + React app inside frontend/, install axios; create src/api/taskApi.js with one function per API call (getTasks, addTask, updateTask, deleteTask), all pointing to http://localhost:5000/api/tasks.
4. Create src/components/TaskForm.jsx (controlled input + submit handler) and src/components/TaskList.jsx (renders tasks, click-to-toggle, delete button).
5. Update src/App.jsx to load tasks on mount (useEffect) and wire up add/toggle/delete handlers that call the API functions and then reload the task list.
6. Start MongoDB, then start the backend (node server.js) in one terminal, and the frontend (npm run dev) in a second terminal.

EXECUTION:
1. Ensure MongoDB is running locally.
2. In terminal 1: cd mern-task-manager/backend && npm install && node server.js - confirm it prints Database Connected and Server running at http://localhost:5000.
3. In terminal 2: cd mern-task-manager/frontend && npm install && npm install axios && npm run dev - open the printed local URL (e.g. http://localhost:5173).
4. Type a task title and click **Add Task** - it should appear in the list below.
5. Click a task's text to mark it complete (it should appear with strikethrough).
6. Click **Delete** to remove a task from the list.

RESULT:
A complete MERN stack Task Manager application was successfully built, with the React frontend correctly communicating with the Express/MongoDB backend to perform create, read, update and delete operations, achieving the objective of the practical.