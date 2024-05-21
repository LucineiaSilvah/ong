import './Footer.css';
import logo from '../Header/Impsom.png';
function Rodape(){
  return(
    <>
    <footer className='rodape'>
     <ul>
      <li><img src={logo} alt="logo"/></li>

      <li>parceiro1</li>
      <li>parceiro2</li>
      <li>parceiro3</li>
      <li>parceiro4</li>
     </ul>
     <p>&copy; Ipsom.ong todo os direitos reservados</p>
    </footer>
    </>
  )
}
export default Rodape;