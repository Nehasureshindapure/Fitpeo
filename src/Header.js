
import React from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">My Dashboard</h1>
      <div className="header-right">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
        />
          <i className="fas fa-bell notification-icon"></i>
      </div>
    </header>
  );
}

export default Header;
