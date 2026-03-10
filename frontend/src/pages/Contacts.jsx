import "../css/Contacts.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://techsolutions-api.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await response.json();
    alert(data.message);

    setName("");
    setEmail("");
    setMessage("");
  };

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

        <form onSubmit={handleSubmit} className="glass-form">
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Insira sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
