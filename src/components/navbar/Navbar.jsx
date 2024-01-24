import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import go32Image from '../../assets/go32.jpg';  // Update 
import './navbar.css';

const Navbar = () => {
  // State to manage the menu toggle
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt__navbar">
      {/* Navigation links section */}
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          {/* Logo */}
          <img src={go32Image} alt="logo" />
        </div>
        <div className="gpt__navbar-links_container">
          {/* Navigation links */}
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Artificial</a></p>
          <p><a href="#possibility">Technology</a></p>
          <p><a href="#features">Digital</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      
      {/* Sign-in and Sign-up section */}
      <div className="gpt__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      
      {/* Mobile menu section */}
      <div className="gpt__navbar-menu">
        {/* Toggle button for mobile menu */}
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        
        {/* Mobile menu content */}
        {toggleMenu && (
          <div className="gpt__navbar-menu_container scale-up-center">
            <div className="gpt__navbar-menu_container-links">
              {/* Mobile menu links */}
              <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Artificial</a></p>
          <p><a href="#possibility">Technology</a></p>
          <p><a href="#features">Digital</a></p>
          <p><a href="#blog">Library</a></p>
            </div>
            
            <div className="gpt__navbar-menu_container-links-sign">
              {/* Sign-in and Sign-up in mobile menu */}
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
