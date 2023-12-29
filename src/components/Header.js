import Logo from "../images/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <nav>
      <img src={Logo} alt="logo" className="logo" />
      <a href=" ">หน้าแรก</a>
    </nav>
  );
}
