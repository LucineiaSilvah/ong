import Card from '../Cards';
import './Volunteers.css';

function Voluntarios(){
  const voluntarios = [
    {
      id:'1',
      foto:'https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVzc29hfGVufDB8fDB8fHwy',
      nome: "ana",
      data:"2022"
    },
    {
      id:'2',
      foto:'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVzc29hfGVufDB8fDB8fHwy://unsplash.com/pt-br/fotografias/foto-em-tons-de-cinza-do-homem-c_GmwfHBDzk',
      nome: "bia",
      data:"2018"
    },
    {
      id:'3',
      foto:'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVzc29hfGVufDB8fDB8fHwy',
      nome: "jose",
      data:"2009"
    },
   
  ];
  return(
    <>
    <section className='voluntarios'>
    <h2>Voluntarios</h2>
    <div className='lista'>
      {voluntarios.map((vol)=>(
        <Card key={vol.id} vol={vol}/>
      ))}


    
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