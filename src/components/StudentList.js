import { useState } from "react";
import "./StudentList.css";

export default function StudentList() {
  // create state
  const [students, setStudent] = useState([
    { id: 1, name: "เจ" },
    { id: 2, name: "โจโจ้" },
    { id: 3, name: "วุฒิชัย" },
    { id: 4, name: "ฟิม" },
  ]);

  const [show, setShow] = useState(true); //true: แสดงเนื้อหา, false: ซ่อนเนื้อหา

  const myStyle = {
    color: "purple",
    fontSize: "20px",
    padding: "20px",
    fontStyle: "italic",
  };

  const btnStyle = {
    background: show ? "purple" : "green",
  };

  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }
  return (
    <ul>
      <div className="header">
        <h1 style={myStyle}>จำนวนนักเรียน ({students.length})</h1>
        <button onClick={() => setShow(!show)} style={btnStyle}>
          {show ? "ซ่อน" : "แสดง"}
        </button>
      </div>
      {show &&
        students.map((item) => (
          <li key={item.id}>
            <p>
              {item.id} - {item.name}
            </p>
            <button onClick={() => deleteStudent(item.id)} className="delete">
              ลบ
            </button>
          </li>
        ))}
    </ul>
  );
}
