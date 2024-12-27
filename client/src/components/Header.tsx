import React, { useState } from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import swordIcon from '../assets/images/sword.png'; // Görselin import edilmesi

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          {/* Logo Bölümü */}
          <div className="logo">
            burakkanber
            <img src={swordIcon} alt="Sword Icon" /> {/* Kılıç Görseli */}
          </div>
          {/* Menü İkonu */}
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} className="close-icon" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
            )}
          </div>
          {/* Navigasyon */}
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#news">news</a></li>
              <li><a href="#buymecoffee">buy me coffee</a></li>
              <li><a href="#docs">idk</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="scrolling-header">
        <p>deneme deneme deneme deneme deneme deneme deneme deneme deneme deneme</p>
      </div>
    </>
  );
};

export default Header;
