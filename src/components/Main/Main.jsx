import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

function Main() {
  return (
    <div className="mainBody">
      <Nav />
      {/* <h2>Athaenaeum</h2> */}
      <div id="space1"></div>
      <div id="container1">
        <p>Hewwo</p>
        <br />
        <p>Main site body</p>
      </div>
      <div id="container12"></div>
    </div>
  );
}

export default Main;
