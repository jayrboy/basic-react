import Logo from "../images/logo.png";

export default function Header() {
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <a href=" ">หน้าแรก</a>
      <h1>JayrBoy</h1>
    </nav>
  );
}
