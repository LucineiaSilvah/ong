
import NavBar from '../Nav';
import './Header.css';
import logo from './Impsom.png'
function Header(){
  return(
    <>
    <header className='cabecalho'>
     <img src={logo} alt="logo"/>
      <NavBar/>
    </header>
    </>
  )
}
export default Header;