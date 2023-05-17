import React from 'react';
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="/main">HOME</a></li>
        <li><a href="/main#about-us">ABOUT</a></li>
        <li><a href="/menu">MENU</a></li>
        <li><a href="/reservations">RESERVATIONS</a></li>
      </ul>
    </nav>
  )
}

export default Nav;