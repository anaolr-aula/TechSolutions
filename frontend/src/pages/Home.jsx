import '../css/Home.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Home(){

  const navigate = useNavigate()
  const [index, setIndex] = useState(0)

  const slides = [
    {
      title: "Transformando tecnologia em soluções reais",
      text: "Na TechSolutions desenvolvemos softwares modernos, eficientes e seguros para empresas que querem crescer através da tecnologia.",
      button: "Nossos produtos",
      link: "/produtos"
    },
    {
      title: "Sistemas inteligentes para empresas",
      text: "Criamos plataformas escaláveis que automatizam processos e aumentam a produtividade do seu negócio.",
      button: "Conheça nossa empresa",
      link: "/empresa"
    },
    {
      title: "Tecnologia que gera resultados",
      text: "Utilizamos as melhores práticas de desenvolvimento para entregar soluções rápidas, seguras e eficientes.",
      button: "Fale conosco",
      link: "/contacts"
    }
  ]

  function nextSlide(){
    setIndex((index + 1) % slides.length)
  }

  function prevSlide(){
    setIndex((index - 1 + slides.length) % slides.length)
  }

  return(
    <div className="home">

      <div className="home-text">


        <h1>{slides[index].title}</h1>

        <p>{slides[index].text}</p>

        <button 
          className="cta"
          onClick={()=>navigate(slides[index].link)}
        >
          {slides[index].button}
        </button>

        <div className="carrosel-buttons">
          <button onClick={prevSlide}>◀</button>
          <button onClick={nextSlide}>▶</button>
        </div>

      </div>

    </div>
  )
}

export default Home