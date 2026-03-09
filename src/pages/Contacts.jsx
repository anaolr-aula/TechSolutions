import "../css/Contacts.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contacts() {
  return (
    <div className="page-container">
      <div id="cards">
        <div className="glass-card">
          <h1>Entre em contato</h1>

          <div className="contact-item">
            <FaEnvelope />
            <p>contato@techsolutions.com</p>
          </div>

          <div className="contact-item">
            <FaPhone />
            <p>(21) 99999-9999</p>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <p>Rio de Janeiro - Brasil</p>
          </div>
        </div>

        <form action="" className="glass-form">
          <input type="text" placeholder="Nome" />

          <input type="text" placeholder="Email" />

          <textarea name="" id="" placeholder="Insira sua mensagem"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
