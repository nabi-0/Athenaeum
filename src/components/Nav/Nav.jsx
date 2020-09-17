import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="navBody">
      <h2>Athaenaeum | nav bar</h2>
      <div id="navContainer">
        <ul className="navbarList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
