const express = require("express");

const app = express();

const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// Custom Middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Express.js Backend Server");
});

// Students Route
app.get("/students", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Rahul",
            course: "M.Sc. CA & IT"
        },
        {
            id: 2,
            name: "Amit",
            course: "B.Sc. CA & IT"
        },
        {
            id: 3,
            name: "Priya",
            course: "M.Sc. CA & IT"
        }
    ]);
});

// Single Student Route
app.get("/students/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: "Student Details",
        studentId: id
    });
});

// POST Route
app.post("/students", (req, res) => {
    const student = req.body;

    res.json({
        message: "Student added successfully",
        student: student
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});