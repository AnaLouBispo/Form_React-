import "./header.css";
import logo from "../../assets/logoR&Bea.png";

const Header = () => {
  return (
    <div className="header-Form">
      <header>
        <ul>
          <li>home</li>
          <li>about us</li>
          <img src={logo} className="logo" alt="" />
          <li>playlists</li>
          <li>contact</li>
        </ul>
      </header>
    </div>
  );
};
export default Header;
