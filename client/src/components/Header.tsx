import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import swordIcon from '../assets/images/sword.png';

interface Competition {
  title: string;
  url: string;
}

const Header: React.FC = () => {
  const [competitions, setCompetitions] = useState<Competition[]>([
    { title: 'Loading...', url: '#' }, // Default content to show while fetching
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/kaggle/competitions');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const contentType = response.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Invalid response format');
        }
        const data = await response.json();
        setCompetitions(data);
        setIsLoading(false); // Data fetching completed
      } catch (error: any) {
        console.error('Error fetching competitions:', error);
        setError('Unable to fetch competitions. Please try again later.');
        setIsLoading(false); // Even on error, stop loading
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            burakkanber
            <img src={swordIcon} alt="Sword Icon" />
          </div>
          <nav className="nav">
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
        {isLoading ? (
          <ul>
            <li>
              <a href="#">Loading competitions...</a>
            </li>
          </ul>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <ul>
            {competitions.map((competition, index) => (
              <li key={index}>
                <a href={competition.url} target="_blank" rel="noopener noreferrer">
                  {competition.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
