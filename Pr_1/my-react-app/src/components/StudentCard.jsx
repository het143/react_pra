function StudentCard({ name, rollNo, course, email }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>

      <p>
        <strong>Roll No:</strong> {rollNo}
      </p>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>
    </div>
  );
}

export default StudentCard;