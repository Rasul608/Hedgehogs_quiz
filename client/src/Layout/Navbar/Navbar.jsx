import React from 'react';
import './navbar.css'; 
function Navbar(props) {
  return (
    <nav className="navbar">
    <div className="navbar-brand">
      <a href="/">Киборги-мутанты</a>
    </div>
    <ul className="navbar-links">
      <li><a href="/">К темам</a></li>
      <li><a href="/about">О команде</a></li>
      <li><a href="/Любой рандомный адрес">404</a></li>
      <li><a href="/contact">Еще кнопка</a></li>
    </ul>
  </nav>
  );
}

export default Navbar;