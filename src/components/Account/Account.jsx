import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

function Account() {
  return (
    <div className="accountBody">
      <Nav />
      {/* <h2>Athaenaeum</h2> */}
      <div id="accountContainer">
        <p>Hewwo</p>
        <br />
        <p>Main site body</p>
      </div>
    </div>
  );
}

export default Account;
