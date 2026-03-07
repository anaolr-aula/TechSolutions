import '../css/Home.css'
import { useNavigate } from "react-router-dom"

function Home(){

  const navigate = useNavigate()

  return(
    <div className="home">

      <div className="home-text">

        <h1>Transformando tecnologia em soluções reais</h1>

        <p>
        Na TechSolutions desenvolvemos softwares modernos,
        eficientes e seguros para empresas que querem crescer
        através da tecnologia.
        </p>

        <button 
          className="cta"
          onClick={()=>navigate("/produtos")}
        >
          Conheça nossos produtos
        </button>

      </div>

    </div>
  )
}

export default Home