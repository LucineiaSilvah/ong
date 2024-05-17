import './Cards.css';
function Card(){
const img = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return(
  <>
   <div className='card'>
    <div className='foto'>
    <img src={img} alt="foto"/>
      
    </div>
    <p>nome</p>
    <p>desde: 2023</p>
   </div>
  
  
  </>
  )
}

export default Card;