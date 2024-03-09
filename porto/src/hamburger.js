import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`hamburger ${isActive ? 'is-active' : ''}`} onClick={toggleMenu}>
      <div className="hamburger__container">
        <div className="hamburger__inner"></div>
        <div className="hamburger__hidden"></div>
      </div>
    </div>
  ); 
};

export default HamburgerMenu; 