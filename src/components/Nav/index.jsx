import { Link } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";
function NavBar() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  return (
    <div className="Menu">
      <div className="menuIcon">
      <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
        <div className="hamburguer hamburguerIcon"> </div>
      </div>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <nav className="list">
          <ul className="listItems">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#services">O que Fazemos</Link>
            </li>
            <li>
              <Link to="/src/pages/About">Quem Somos</Link>
            </li>
            <li>
              <Link to="#contact">Voluntarios</Link>
            </li>
            <li>
              <Link to="#contact">Doações</Link>
            </li>
            <li>
              <Link to="#contact">Eventos & Ações</Link>
            </li>
            <li>
              <Link to="#contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default NavBar;