import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";

function Main() {
  return (
    <div className="mainBody">
      <div class="mainNavDiv">
        <Nav />
      </div>

      <div class="sidebarAndMain">
        <div class="mainSidebarDiv">
          <Sidebar />
        </div>
        <div class="mainDiv">
          <p>Hewwo</p>
          <br />
          <p>Main site body</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
