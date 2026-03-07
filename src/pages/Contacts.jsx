import '../css/Contacts.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

function Contacts(){

  return(

    <div className="page-container">

      <div className="glass-card">

        <h1>Entre em contato</h1>

        <div className="contact-item">
          <FaEnvelope/>
          <p>contato@techsolutions.com</p>
        </div>

        <div className="contact-item">
          <FaPhone/>
          <p>(21) 99999-9999</p>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt/>
          <p>Rio de Janeiro - Brasil</p>
        </div>

      </div>

    </div>

  )

}

export default Contacts