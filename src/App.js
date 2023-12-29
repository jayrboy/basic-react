import { useState } from "react";

function App() {
  // create state
  let [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>เพิ่มค่า</button>
      <button onClick={() => setCount(count - 1)}>ลบค่า</button>
      <button onClick={() => setCount(0)}>เคลียร์</button>
    </>
  );
}

export default App;
