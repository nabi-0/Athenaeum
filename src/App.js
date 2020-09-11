import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./components/Account/Account";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/account" exact>
          <Account />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/settings" exact>
          <Settings />
        </Route>
      </Router>
    </div>
  );
}

export default App;
