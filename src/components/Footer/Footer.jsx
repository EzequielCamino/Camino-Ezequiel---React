import React from 'react'
import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function MyAppFooter() {
  return (
    <footer>
        <div className="footer">
            <div className="footer_data">
                <h4>Métodos de pago</h4>
                <ul>
                    <li><FontAwesomeIcon icon={faChevronRight}/>Tarjetas de crédito</li>
                    <li><FontAwesomeIcon icon={faChevronRight}/>Tarjetas de débito</li>
                    <li><FontAwesomeIcon icon={faChevronRight}/>Transferencia bancaria</li>
                    <li><FontAwesomeIcon icon={faChevronRight}/>Criptomonedas (USDT)</li>
                </ul>
            </div>
            <div className="footer_data">
                <h4>Redes</h4>
                <ul>
                    <li><FontAwesomeIcon icon={faChevronRight}/><a href="https://instagram.com" target="/blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
                    <li><FontAwesomeIcon icon={faChevronRight}/><a href="https://api.whatsapp.com/send?phone=1123456789" target="/blank"><FontAwesomeIcon icon={faWhatsapp}/></a></li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <h6>Copyright © GoldenLoot, 2022</h6>
        </div>
    </footer>
  )
}

export default MyAppFooter