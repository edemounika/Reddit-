// Header.js
import React from 'react';
import redditLogo from './redditLogo.svg'; 


function Header() {
  return (
    <header className="header">
      <div className="left-side">
      <img src={redditLogo} alt="Reddit Logo" />
        
      </div>
      <div className="right-side">
        <a href="/about">Home</a>
        <a href="/contact">About</a>
        <a href="/contact"> Contact</a>
      </div>
     
    </header>
  );
}

export default Header;
