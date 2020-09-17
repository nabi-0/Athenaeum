import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

function Settings() {
  return (
    <div className="settingsBody">
      <Nav />
      {/* <h2>Athaenaeum</h2> */}
      <div id="settingsContainer">
        <p>Hewwo</p>
        <br />
        <p>Main site body</p>
      </div>
    </div>
  );
}

export default Settings;
