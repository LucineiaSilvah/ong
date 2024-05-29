import './Contato.css'
export default function Contact(){
  return(
    <>
    <section className="contato flex">
      
      <h2>Contato</h2>
      <div className='redes'>
        <span><i class="fa-brands fa-whatsapp "></i> Whatsapp</span>
        <span><i class="fa-brands fa-instagram"></i> Instagram</span>
        <span><i class="fa-brands fa-facebook"></i> Facebook</span>
      </div>
    
    <form className='flex' >
      <legend>Contato</legend>
      <span>Deixe aqui seu email e entraremos em contato!</span>
      <label for="nome">Nome</label>
      <input type="text" placeholder="seu nome aqui" required></input>
      <label for="email">E-mail</label>
      <input type="email" placeholder="seu email aqui" required></input>
      <button>Enviar</button>
    </form>

    </section>
    </>
  )
}