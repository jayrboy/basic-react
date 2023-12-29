import "./Item.css";

export default function Item(props) {
  const { data, deleteStudent } = props;
  return (
    <>
      <li key={data.id} className={data.gender}>
        <p>{data.name}</p>
        <button onClick={() => deleteStudent(data.id)} className="delete">
          ลบ
        </button>
      </li>
    </>
  );
}
