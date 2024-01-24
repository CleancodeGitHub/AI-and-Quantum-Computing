import React from 'react';
import people0Image from '../../assets/people0.png';
import aiImage from '../../assets/ai2.png';
import './header.css';

// Header component showcasing cutting-edge technology and innovation
const Header = () => (
  <div className="tech__header section__padding" id="home">
    {/* Header content section */}
    <div className="tech__header-content">
      {/* Main heading emphasizing empowering innovations */}
      <h1 className="gradient__text">Empowering Innovations with Cutting-Edge Technology</h1>
      {/* Subheading introducing the theme of the community */}
      <p>
        Discover breakthroughs in technology, collaborate with forward-thinking minds, and pioneer the next era of innovation.
        Be part of our innovative community, turning aspirations into technological reality.
      </p>

      {/* Email subscription input and button */}
      <div className="tech__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Subscribe Now</button>
      </div>

      {/* Image and text showcasing the community */}
      <div className="tech__header-content__people">
        <img src={people0Image} alt="people img" />
        <p>Be part of our thriving tech community. Over 3,000 tech enthusiasts joined in the last 24 hours.</p>
      </div>
    </div>

    {/* Image section showcasing cutting-edge AI */}
    <div className="tech__header-image">
      <img src={aiImage} alt="ai img" />
    </div>
  </div>
);

export default Header;
