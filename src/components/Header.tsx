import React from 'react';
import logo from '../assets/images/logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="BeTalent Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
