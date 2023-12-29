import { useState } from "react";
import "./AddForm.css";

export default function AddForm() {
  const [name, setName] = useState("");

  return (
    <section className="container">
      <form>
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
