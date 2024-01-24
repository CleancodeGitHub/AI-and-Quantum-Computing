import React from 'react';
import go32Image from '../../assets/go32.jpg';
import './footer.css';

// Footer component with information about early access, links, and company details
const Footer = () => (
  <div className="tech__footer section__padding">
    {/* Heading section */}
    <div className="tech__footer-heading">
      <h1 className="gradient__text">Do you want to step into the future of AI and Quantum Computing before others?</h1>
    </div>

    {/* Early access button */}
    <div className="tech__footer-btn">
      <p>Request Early Access</p>
    </div>

    {/* Links and company information */}
    <div className="tech__footer-links">
      {/* Logo and address */}
      <div className="tech__footer-links_logo">
        <img src={go32Image} alt="tech__logo" />
        <p>Quantum Innovations, K12 Quantum Street, 182 Quantum City, <br /> All Quantum Rights Reserved</p>
      </div>

      {/* Links to various sections */}
      <div className="tech__footer-links_div">
        <h4>Quick Links</h4>
        <p>About Us</p>
        <p>Social Media</p>
        <p>Quantum Counters</p>
        <p>Contact Us</p>
      </div>

      {/* Company-related links */}
      <div className="tech__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact Information</p>
      </div>

      {/* Contact details */}
      <div className="tech__footer-links_div">
        <h4>Get in Touch</h4>
        <p>Quantum Innovations, K12 Quantum Street, 182 Quantum City</p>
        <p>Phone: 085-132567</p>
        <p>Email: info@quantuminnovations.com</p>
      </div>
    </div>

    {/* Copyright section */}
    <div className="tech__footer-copyright">
      <p>@2023 Quantum Innovations. All Quantum Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
