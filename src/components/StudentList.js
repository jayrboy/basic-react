import { useState } from "react";

export default function StudentList() {
  // create state
  const [students, setStudent] = useState([
    { id: 1, name: "เจ" },
    { id: 2, name: "โจโจ้" },
    { id: 3, name: "วุฒิชัย" },
    { id: 4, name: "ฟิม" },
  ]);

  const [show, setShow] = useState(true); //true: แสดงเนื้อหา, false: ซ่อนเนื้อหา

  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }
  return (
    <>
      <h1>จำนวนนักเรียน = {students.length}</h1>
      <h2>{show}</h2>
      <button onClick={() => setShow(!show)}>สลับ</button>
      <ul>
        {show &&
          students.map((item) => (
            <li key={item.id}>
              <p>
                {item.id} - {item.name}
              </p>
              <button onClick={() => deleteStudent(item.id)}>ลบ</button>
            </li>
          ))}
      </ul>
    </>
  );
}
