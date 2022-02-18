import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header-section">
      <ul>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
