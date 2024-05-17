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
              <a href="#services">O que Fazemos</a>
            </li>
            <li>
              <a href="#sobre">Quem Somos</a>
            </li>
            <li>
              <a href="#contact">Voluntarios</a>
            </li>
            <li>
              <a href="#contact">Doações</a>
            </li>
            <li>
              <a href="#contact">Eventos & Ações</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default NavBar;