import { useState } from "react";

function StudentForm({ addStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age < 18 || formData.age > 60) {
      newErrors.age = "Age must be between 18 and 60";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addStudent(formData);

    setFormData({
      name: "",
      email: "",
      course: "",
      age: "",
    });

    setErrors({});
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Add Student</h2>

      <div className="form-group">
        <label>Name</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter student name"
        />

        {errors.name && (
          <p className="error">{errors.name}</p>
        )}
      </div>

      <div className="form-group">
        <label>Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        {errors.email && (
          <p className="error">{errors.email}</p>
        )}
      </div>

      <div className="form-group">
        <label>Course</label>

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="BCA">BCA</option>
          <option value="B.Sc. IT">B.Sc. IT</option>
          <option value="M.Sc. CA & IT">
            M.Sc. CA & IT
          </option>
          <option value="MCA">MCA</option>
        </select>

        {errors.course && (
          <p className="error">{errors.course}</p>
        )}
      </div>

      <div className="form-group">
        <label>Age</label>

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter age"
        />

        {errors.age && (
          <p className="error">{errors.age}</p>
        )}
      </div>

      <button type="submit">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;