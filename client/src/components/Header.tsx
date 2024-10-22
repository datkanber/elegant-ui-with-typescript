import React, { useState } from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">John J. English Teacher & Jesus Lover</div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faTimes} className="close-icon" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
          )}
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#docs">Docs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="auth-buttons">
            <button className="sign-in">Sign In</button>
            <button className="sign-up">Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
