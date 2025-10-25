import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Hector Mbakama</div>
        <ul className="nav-links">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;