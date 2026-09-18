function Students() {
  const students = [
    {
      id: 1,
      name: "Het Solanki",
      course: "M.Sc. CA & IT",
    },
    {
      id: 2,
      name: "Rahul Patel",
      course: "B.Sc. IT",
    },
    {
      id: 3,
      name: "Riya Shah",
      course: "BCA",
    },
  ];

  return (
    <div className="page">
      <h1>Students</h1>

      <div className="student-list">
        {students.map((student) => (
          <div
            className="student-card"
            key={student.id}
          >
            <h2>{student.name}</h2>

            <p>
              <strong>Course:</strong>{" "}
              {student.course}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;