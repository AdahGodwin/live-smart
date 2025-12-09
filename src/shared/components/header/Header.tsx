import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "@/assets/logo-white.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="app-header">
      <div className="header-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="LiveSmart Logo" />
        </Link>
      </div>

      <nav className="header-nav desktop-nav">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/smart-spaces" className={({ isActive }) => (isActive ? "active" : "")}>Smart Spaces</NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/build-smart-space" className={({ isActive }) => (isActive ? "active" : "")}>Build Smart Space</NavLink>
          </li>
          <li>
            <NavLink to="/book-tour" className={({ isActive }) => (isActive ? "active" : "")}>Book A Tour</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <div className="header-search">
          <button className="search-btn" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M15.5 13.6089L11.7178 10.3911C11.5207 10.2133 11.3207 10.083 11.1178 10C10.9148 9.91704 10.7296 9.88074 10.5622 9.89111C11.0096 9.36963 11.3615 8.77556 11.6178 8.10889C11.8726 7.44222 12 6.73926 12 6C12 5.16741 11.8437 4.38889 11.5311 3.66444C11.2185 2.94 10.7889 2.30444 10.2422 1.75778C9.69556 1.21111 9.06 0.781481 8.33556 0.468889C7.61259 0.156296 6.83407 0 6 0C5.16741 0 4.38889 0.156296 3.66444 0.468889C2.94 0.781481 2.30444 1.21111 1.75778 1.75778C1.21111 2.30444 0.781481 2.94 0.468889 3.66444C0.156296 4.38889 0 5.16741 0 6C0 6.83407 0.156296 7.61259 0.468889 8.33556C0.781481 9.06 1.21111 9.69556 1.75778 10.2422C2.30444 10.7889 2.94 11.2185 3.66444 11.5311C4.38889 11.8437 5.16741 12 6 12C6.73926 12 7.44222 11.8726 8.10889 11.6178C8.77556 11.3615 9.36963 11.0096 9.89111 10.5622C9.88074 10.7296 9.91704 10.9148 10 11.1178C10.083 11.3207 10.2133 11.5207 10.3911 11.7178L13.6089 15.5C13.8904 15.8126 14.2267 15.9793 14.6178 16C15.0074 16.0207 15.343 15.8956 15.6244 15.6244C15.8956 15.343 16.0207 15.0074 16 14.6178C15.9793 14.2267 15.8126 13.8904 15.5 13.6089ZM6 10C5.44741 10 4.92889 9.89556 4.44444 9.68667C3.96 9.47926 3.53556 9.19333 3.17111 8.82889C2.80667 8.46444 2.52074 8.04 2.31333 7.55556C2.10444 7.07111 2 6.55259 2 6C2 5.44741 2.10444 4.92889 2.31333 4.44444C2.52074 3.96 2.80667 3.53556 3.17111 3.17111C3.53556 2.80667 3.96 2.52074 4.44444 2.31333C4.92889 2.10444 5.44741 2 6 2C6.55259 2 7.07111 2.10444 7.55556 2.31333C8.04 2.52074 8.46444 2.80667 8.82889 3.17111C9.19333 3.53556 9.47926 3.96 9.68667 4.44444C9.89556 4.92889 10 5.44741 10 6C10 6.55259 9.89556 7.07111 9.68667 7.55556C9.47926 8.04 9.19333 8.46444 8.82889 8.82889C8.46444 9.19333 8.04 9.47926 7.55556 9.68667C7.07111 9.89556 6.55259 10 6 10Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <button
          className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </button>
      </div>

      <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/smart-spaces" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Smart Spaces</NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/build-smart-space" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Build Smart Space</NavLink>
          </li>
          <li>
            <NavLink to="/book-tour" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Book A Tour</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
