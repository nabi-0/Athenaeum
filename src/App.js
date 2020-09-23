import React, { lazy, useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import AuthService from "./Services/AuthService";
// import Message from "./components/Message";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
  // const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(
  //   AuthContext
  // );
  // console.log(user);
  // console.log(isAuthenticated);
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Redirect exact from="/" to="/login" />
          {/* <Redirect exact from="/" to="/app" /> */}
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />

          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
