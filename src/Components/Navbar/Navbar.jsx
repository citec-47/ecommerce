import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>ECOM-NMD</p>
      </div>
      <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <li onClick={() => handleMenuClick("shop")}>
          <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("mens")}>
          <Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("womens")}>
          <Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("kids")}>
          <Link to='/kids' style={{ textDecoration: 'none' }}>Kid</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <div className="cart-container">
          <Link to='/cart'><img src={cart_icon} alt="cart-icon" /></Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </div>
    </div>
  )
}

export default Navbar;
