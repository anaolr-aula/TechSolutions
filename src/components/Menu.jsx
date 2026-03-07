import { Link } from "react-router-dom"
import { useState } from "react"
import { FaBars } from "react-icons/fa"

function Menu(){

  const [open,setOpen] = useState(false)

  return(
    <nav>

      <div className="logo">TechSolutions</div>

      <div className="hamburger" onClick={()=>setOpen(!open)}>
        <FaBars/>
      </div>

      <div className={`menu-links ${open ? "active" : ""}`}>

        <Link className="menu-link" to="/">Home</Link>
        <Link className="menu-link" to="/produtos">Produtos</Link>
        <Link className="menu-link" to="/empresa">Empresa</Link>
        <Link className="menu-link" to="/contacts">Contatos</Link>

      </div>

    </nav>
  )
}

export default Menu