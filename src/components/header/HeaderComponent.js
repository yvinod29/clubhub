import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCenteredText, setShowCenteredText] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="header">
      <div className="header-content">
        <div
          className="title"
          onMouseEnter={() => setShowCenteredText(true)}
          onMouseLeave={() => setShowCenteredText(false)}
        >
          Club<span style={{ color: "rgb(261, 68, 53)" }}>Hub</span>b
        </div>
        <div className="button-container right">
          <button className="signin-button" >
            Sign In
          </button>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <nav className="sidebar-links">
            <a href="/">Account</a>
            <a href="/" className="active">Events</a>
            <a href="/">Clubs</a>
            <a href="/">Join Clubs</a>
          </nav>
        </div>
      </div>
      {showCenteredText && <div className="centered-text">Club<span style={{ color: "rgb(261, 68, 53)" }}>Hub</span>b</div>}
    </div>
  );
};

export default Header;
