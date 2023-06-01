import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="/main">HOME</a></li>
        {/* <li><HashLink href="/main#about-us">ABOUT</HashLink></li> */}
        <li><HashLink to="/main#about-us">ABOUT</HashLink></li>
        <li><a href="/menu">MENU</a></li>
        <li><a href="/reservations">RESERVATIONS</a></li>
      </ul>
    </nav>
  )
}

export default Nav;