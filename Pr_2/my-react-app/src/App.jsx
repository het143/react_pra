import Student from "./components/Student";

function App() {
  return (
    <div className="app">
      <h1>Student Counter App</h1>

      <div className="students-container">
        <Student
          name="Het Solanki"
          course="M.Sc. CA & IT"
        />

        <Student
          name="Rahul Patel"
          course="B.Sc. IT"
        />

        <Student
          name="Riya Shah"
          course="BCA"
        />
      </div>
    </div>
  );
}

export default App;