import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagran_icon from '../Assets/instagram_icon.png';
import pintest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
          <div className="footer-logo">
            <img src={footer_logo} alt="Logo" />
            <p>ECOM-NMD</p>
          </div>
          <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagran_icon} alt="Instagram" />
            </div>
            <div className="footer-icons-container">
                <img src={pintest_icon} alt="Pinterest" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="WhatsApp" />
            </div>
          </div>
          <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
          </div>
    </div>
  )
}

export default Footer;
