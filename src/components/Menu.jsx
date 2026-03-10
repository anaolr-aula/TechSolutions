import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <Link to="/">TechSolutions</Link>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <FaBars />
      </div>

      <div className={`menu-links ${open ? "active" : ""}`}>
        <Link className="menu-link" to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link
          className="menu-link"
          to="/produtos"
          onClick={() => setOpen(false)}
        >
          Produtos
        </Link>
        <Link
          className="menu-link"
          to="/empresa"
          onClick={() => setOpen(false)}
        >
          Empresa
        </Link>
        <Link
          className="menu-link"
          to="/contacts"
          onClick={() => setOpen(false)}
        >
          Contatos
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
