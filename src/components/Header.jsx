import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // Import Theme Toggle
import "./Header.css"; // External styles

function Header() {
  return (
    <header className="header-container">
      {/* Background Image */}
      <img
        alt="Oraculi Background"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="header-bg-image"
      />

      <div className="header-content">
        {/* Logo */}
        <h1 className="logo">Oraculi</h1>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/success-stories">Success Stories</Link>
          <Link to="/features">Features</Link>
          <Link to="/events">Events</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/key-benefits">key benefits</Link>
          <Link to="/community">Community</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/action">Call To Action</Link>
          <Link to="/register" className="join-btn">
            Join
          </Link>
        </nav>

        {/* Dark Mode Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
