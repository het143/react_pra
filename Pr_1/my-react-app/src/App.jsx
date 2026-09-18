import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div className="app">
      <h1>Student Profile</h1>

      <div className="students-container">
        <StudentCard
          name="Het Solanki"
          rollNo="101"
          course="M.Sc. CA & IT"
          email="het@example.com"
        />

        <StudentCard
          name="Rahul Patel"
          rollNo="102"
          course="B.Sc. IT"
          email="rahul@example.com"
        />

        <StudentCard
          name="Riya Shah"
          rollNo="103"
          course="BCA"
          email="riya@example.com"
        />
      </div>
    </div>
  );
}

export default App;