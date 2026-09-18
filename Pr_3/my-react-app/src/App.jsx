import { useState } from "react";
import StudentForm from "./components/StudentForm";

function App() {
  const [students, setStudents] = useState([]);

  function addStudent(student) {
    const newStudent = {
      id: Date.now(),
      ...student,
    };

    setStudents([...students, newStudent]);
  }

  function deleteStudent(id) {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  }

  return (
    <div className="app">
      <h1>Student Management System</h1>

      <StudentForm addStudent={addStudent} />

      <div className="student-list">
        <h2>Student List</h2>

        {students.length === 0 ? (
          <p className="no-students">
            No students added yet.
          </p>
        ) : (
          students.map((student) => (
            <div
              className="student-item"
              key={student.id}
            >
              <div>
                <h3>{student.name}</h3>

                <p>
                  <strong>Email:</strong>{" "}
                  {student.email}
                </p>

                <p>
                  <strong>Course:</strong>{" "}
                  {student.course}
                </p>

                <p>
                  <strong>Age:</strong>{" "}
                  {student.age}
                </p>
              </div>

              <button
                className="delete-button"
                onClick={() =>
                  deleteStudent(student.id)
                }
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;