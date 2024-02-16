import { useState } from 'react'
import './AddForm.css'

export default function AddForm(props) {
  const { students, setStudent } = props
  const [name, setName] = useState('')
  const [gender, setGender] = useState('male')

  function saveStudent(ev) {
    ev.preventDefault()
    if (!name) {
      alert('กรุณาป้อนข้อมูลด้วยครับ')
    } else {
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        gender: gender,
      }
      setStudent([...students, newStudent])
      setName('')
      setGender('male')
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
          onChange={(ev) => setName(ev.target.value)}
        />
        <select value={gender} onChange={(ev) => setGender(ev.target.value)}>
          <option value="male">ชาย</option>
          <option value="female">หญิง</option>
        </select>
        <button type="submit" className="btn-add">
          บันทึก
        </button>
      </form>
    </section>
  )
}
