import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="tech__cta">
    {/* Content section with registration information */}
    <div className="tech__cta-content">
      {/* Paragraph encouraging users to request early access */}
      <p>Unleash the Power of AI and Quantum Computing – Request Early Access Today</p>
      {/* Heading prompting users to register and explore possibilities */}
      <h3>Register Today & Start Exploring the Boundless Horizons of AI and Quantum Computing.</h3>
    </div>

    {/* Button section for initiating the registration process */}
    <div className="tech__cta-btn">
      <button type="button">Get Started</button>
    </div>
  </div>
);

export default CTA;
