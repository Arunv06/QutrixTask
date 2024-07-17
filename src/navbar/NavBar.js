import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ChartApp
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/barchartinput" className="navbar-link">Bar Chart</Link>
          <Link to="/linechartinput" className="navbar-link">Line Chart</Link>
          <Link to="/simplechartinput" className="navbar-link">Simple Chart</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
