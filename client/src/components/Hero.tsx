import React, { useState } from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/images/hero-image.png';
import ferrisWheelImage from '../assets/images/ferris-wheel-image.png';
import flowersImage from '../assets/images/flowers-image.png';
import duckImage from '../assets/images/duck-image.png';

const images = [
  heroImage,
  ferrisWheelImage,
  flowersImage,
  duckImage,
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Real-time voice, video, and AI for developers</h1>
          <p>Thousands of developers trust our platform to build live features and experiences. Our modern APIs, global mesh infrastructure, and developer support help get your telehealth, AI, and other apps to market faster.</p>
          <div className="hero-buttons">
            <button className="start-free">Start for free</button>
            <button className="read-docs">Read the docs</button>
          </div>
        </div>

        <div className="hero-image">
          <button className="prev-btn" onClick={handlePrevImage}>‹</button>
          <img src={images[currentImageIndex]} alt="Hero Carousel" />
          <button className="next-btn" onClick={handleNextImage}>›</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
