const express = require("express");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Student records
let students = [
    {
        id: 1,
        name: "Rahul",
        email: "rahul@gmail.com",
        course: "M.Sc. CA & IT"
    },
    {
        id: 2,
        name: "Amit",
        email: "amit@gmail.com",
        course: "B.Sc. CA & IT"
    },
    {
        id: 3,
        name: "Priya",
        email: "priya@gmail.com",
        course: "M.Sc. CA & IT"
    }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Student Records REST API");
});

// GET - Get all students
app.get("/students", (req, res) => {
    res.json(students);
});

// GET - Get one student
app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find((student) => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// POST - Add new student
app.post("/students", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        email: req.body.email,
        course: req.body.course
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

// PUT - Update student
app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find((student) => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.email = req.body.email;
    student.course = req.body.course;

    res.json({
        message: "Student updated successfully",
        student: student
    });
});

// DELETE - Delete student
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const studentIndex = students.findIndex(
        (student) => student.id === id
    );

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(studentIndex, 1);

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});