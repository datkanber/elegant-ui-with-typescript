import React from 'react';
import '../styles/Features.css';

const Features: React.FC = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Feature One</h3>
            <p>Description of feature one.</p>
          </div>
          <div className="feature-item">
            <h3>Feature Two</h3>
            <p>Description of feature two.</p>
          </div>
          <div className="feature-item">
            <h3>Feature Three</h3>
            <p>Description of feature three.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
