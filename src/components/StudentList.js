import "./StudentList.css";
import Item from "../components/Item";
import { useState } from "react";

export default function StudentList({ students, deleteStudent }) {
  const [show, setShow] = useState(true); //true: แสดงเนื้อหา, false: ซ่อนเนื้อหา

  return (
    <ul>
      <div className="header">
        <h1>จำนวนนักเรียน ({students.length})</h1>
        <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      </div>
      {show &&
        students.map((data) => (
          <Item key={data.id} data={data} deleteStudent={deleteStudent} />
        ))}
    </ul>
  );
}
