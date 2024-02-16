#### React 18

https://nodejs.org/en (Recommended)

```
npm install -g npm@latest
npm install <package>
npm install -g <package>
npm un <package>
npm ls
npm search <package>
```

```sh
node -v # v21.4.0
npm -v  # 10.4.0
npm install -g create-react-app
create-react-app my-app && cd my-app
npm start
```

https://code.visualstudio.com/download

Extensions

- Auto Rename Tag
- Highlight Matching Tag
  - customize in settings.json
- Prettier
  - format on save
  - format on paste
  - Default Formatter (Prettier - Code formatter)

settings.json

```json
"editor.formatOnPaste": true,
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"prettier.singleQuote": true,
"prettier.semi": false,
```

Emmet

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
},
```

- ES7 Snippets
  - rafce (arrow func with export)
  - rfce (regular func with export)
  - same as the file name
  - react auto import
    - uncheck
    - React Snippets › Settings: Import React On Top

#### แอปพลิเคชันเก็บข้อมูลนักเรียน

- การสร้าง Component แบบทั่วไป Regular Function (rfc: regular func component)
- การใช้งาน useState('') เก็บข้อมูลสตริง
- การใช้งาน useState([]) เก็บข้อมูลอาร์เรย์
- การใช้งาน useState(true) เก็บข้อมูลโลจิก

App.js

```js
import { useState } from 'react'
import './App.css'

function App() {
  const [students, setStudent] = useState([]) //Array State

  return (
    <div>
      <main>แอปพลิเคชันเก็บข้อมูลนักเรียน</main>
    </div>
  )
}

export default App
```

App.css

```css
.App {
  text-align: center;
  padding: 0px 10px;
}
```

index.css

```css
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

button {
  background-color: blue;
  color: white;
  cursor: 'pointer';
  border: 0px;
  border-radius: 5px;
  padding: 5px 10px;
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}

main {
  min-height: 90vh;
  max-width: 1200px;
  margin: auto;
  padding: 10px;
}
```

components/Header.js

```js
import Logo from '../images/logo.png'
import './Header.css'

export default function Header({ title }) {
  return (
    <nav>
      <img src={Logo} alt="logo" className="logo" />
      <a href=" ">{title}</a>
    </nav>
  )
}
```

components/Header.css

```css
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 70px;
  margin: auto;
  padding: 0px 10px;
  font-size: 20px;
  border-bottom: 1px solid #d7d7d7;
}

.logo {
  max-width: 45px;
}
```

components/AddForm.js

```js
import { useState } from 'react'
import './AddForm.css'

export default function AddForm(props) {
  const { students, setStudent } = props
  const [name, setName] = useState('')
  const [gender, setGender] = useState('male')

  function saveStudent(event) {
    event.preventDefault()
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
    <section>
      <form onSubmit={saveStudent}>
        <label>ชื่อนักเรียน</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <select
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
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
```

components/AddForm.css

```css
ul {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
}

h1 {
  font-size: 28px;
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
}

.delete {
  background-color: red;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 20px 25px;
  padding: 25px;
  font-size: 20px;
  border-radius: 5px;
}
```

components/StudentList.js

```js
import './StudentList.css'
import Item from '../components/Item'
import { useState } from 'react'

export default function StudentList({ students, deleteStudent }) {
  const [show, setShow] = useState(true) //true: แสดงเนื้อหา, false: ซ่อนเนื้อหา

  return (
    <ul>
      <div className="header">
        <h1>จำนวนนักเรียน ({students.length})</h1>
        <button onClick={() => setShow(!show)}>{show ? 'ซ่อน' : 'แสดง'}</button>
      </div>
      {show &&
        students.map((data) => (
          <Item key={data.id} data={data} deleteStudent={deleteStudent} />
        ))}
    </ul>
  )
}
```

components/StudentList.css

```css
ul {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
}

h1 {
  font-size: 28px;
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
}

.delete {
  background-color: red;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 20px 25px;
  padding: 25px;
  font-size: 20px;
  border-radius: 5px;
}
```

components/Item.js

```js
import './Item.css'

export default function Item(props) {
  const { data, deleteStudent } = props
  return (
    <>
      <li key={data.id} className={data.gender}>
        <p>{data.name}</p>
        <button onClick={() => deleteStudent(data.id)} className="delete">
          ลบ
        </button>
      </li>
    </>
  )
}
```

components/Item.css

```css
.male {
  box-shadow: green 0px 1px 4px;
}

.female {
  box-shadow: purple 0px 1px 4px;
}
```

App.js

```js
import { useState } from 'react'
import Header from './components/Header'
import AddForm from './components/AddForm'
import StudentList from './components/StudentList'
import './App.css'

function App() {
  const [students, setStudent] = useState([])

  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id))
  }

  return (
    <div>
      <Header title="Home" />
      <main>
        <AddForm students={students} setStudent={setStudent} />
        <StudentList students={students} deleteStudent={deleteStudent} />
      </main>
    </div>
  )
}

export default App
```
