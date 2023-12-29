import Header from "./components/Header";
import StudentList from "./components/StudentList";
import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudent] = useState([
    { id: 1, name: "เจ" },
    { id: 2, name: "โจโจ้" },
    { id: 3, name: "วุฒิชัย" },
    { id: 4, name: "ฟิม" },
  ]);

  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <Header title="Home" />
      <main>
        <StudentList students={students} deleteStudent={deleteStudent} />
      </main>
    </div>
  );
}

export default App;
