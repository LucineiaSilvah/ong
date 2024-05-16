
import './Header.css';
import logo from './Impsom.png'
function Header(){
  return(
    <>
    <header className='cabecalho'>
     <img src={logo} alt="logo"/>
     <nav>
      <ul>
      <li><a href="#">O que fazemos</a></li>
      <li><a href="#">Quem somos</a></li>
      <li><a href="#">Voluntarios</a></li>
      <li><a href="#">Doações</a></li>
      <li><a href="#">Eventos E ações</a></li>
      
      </ul>
     </nav>
    </header>
    </>
  )
}
export default Header;