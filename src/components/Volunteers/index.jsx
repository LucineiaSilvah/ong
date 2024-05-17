import Card from '../Cards';
import './Volunteers.css';

function Voluntarios(){
  return(
    <>
    <section className='voluntarios'>
    <h2>Voluntarios</h2>
    <div className='lista'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>


    
    </div>
  <div className='convite'>
    
   <h3>Seja um voluntario!!</h3>
   <button>Inscreva-se</button>
  </div>

    </section>
    </>
  )
}
export default Voluntarios;