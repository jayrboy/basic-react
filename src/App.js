function App() {
  const name = "จักรกฤษ";
  return (
    <>
      <h1>สวัสดีครับ: {name}</h1>
      <button onClick={() => alert("สวัสดี React")}>คลิก</button>
      <p>Jay Jakkrit</p>
    </>
  );
}

export default App;
