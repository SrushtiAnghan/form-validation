import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">Signup</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
