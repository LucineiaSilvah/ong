import './Cards.css';
function Card({vol}){

  return(
  <>
   <div className='card'>
    <div className='foto'>
    <img src={vol.foto} alt="foto"/>
      
    </div>
    <p>{vol.nome}</p>
    <p>Voluntario desde: {vol.data}</p>
   </div>
  
  
  </>
  )
}

export default Card;