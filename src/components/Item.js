export default function Item({ data, deleteStudent }) {
  return (
    <>
      <li key={data.id}>
        <p>{data.name}</p>
        <button onClick={() => deleteStudent(data.id)} className="delete">
          ลบ
        </button>
      </li>
    </>
  );
}
