import React from 'react';
import logo from '../images/logo.png';
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <a href="/main">
          <img src={logo} alt="Little Lemon logo" />
        </a>
      </div>
    </header>
  )
}

export default Header;