import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", department: "", marks: "" });

  // Fetch students
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students");
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add student
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.department || !form.marks) return alert("Fill all fields");
    try {
      await axios.post("http://localhost:5000/api/students", form);
      setForm({ name: "", department: "", marks: "" });
      fetchStudents();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete student
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      // update state directly instead of refetching
      setStudents(students.filter((student) => student._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Student Records</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Enter Department"
          value={form.department}
          onChange={handleChange}
        />
        <input
          type="number"
          name="marks"
          placeholder="Enter Marks"
          value={form.marks}
          onChange={handleChange}
        />
        <button type="submit">Add Student</button>
      </form>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>
                {student.marks}
                <button
                  onClick={() => handleDelete(student._id)}
                  className="delete-btn-inline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
