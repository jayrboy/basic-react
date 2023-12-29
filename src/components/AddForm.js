import { useState } from "react";
import "./AddForm.css";

export default function AddForm() {
  const [name, setName] = useState("");

  function saveStudent(e) {
    e.preventDefault();
    if (!name) {
      alert("กรุณาป้อนข้อมูลด้วยครับ");
    } else {
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        name: name,
      };
      console.log(newStudent);
      setName("");
    }
  }

  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <label>ชื่อนักเรียน</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn-add">
          บันทึก
        </button>
      </form>
    </section>
  );
}
