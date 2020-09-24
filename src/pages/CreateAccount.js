import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ImageLight from "../assets/img/create-account-office.jpeg";
import ImageDark from "../assets/img/create-account-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../icons";
import { Input, Label, Button } from "@windmill/react-ui";
import AuthService from "../Services/AuthService";
import Message from "../components/Message";

function Register(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "user",
  });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setUser({ username: "", password: "", role: "" });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    AuthService.register(user).then((data) => {
      // const { isAuthenticated, user, message } = data;
      // if (isAuthenticated) {
      //   authContext.setUser(user);
      //   authContext.setIsAuthenticated(isAuthenticated);
      //   props.history.push("/app/dashboard");
      // } else setMessage(message);
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/login");
        }, 1000);
        alert("Account created. Redirecting to the login page");
      }
    });
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <form onSubmit={onSubmit}>
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Create Account
                </h1>
                <Label htmlFor="username">
                  <span>Username</span>
                  <Input
                    className="mt-1"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={onChange}
                  />
                </Label>

                <Label className="mt-4" htmlFor="password">
                  <span>Password</span>
                  <Input
                    className="mt-1"
                    type="password"
                    placeholder="**********"
                    name="password"
                    onChange={onChange}
                  />
                </Label>

                <Button className="mt-4" block type="submit">
                  Log in
                </Button>
              </form>
              <hr className="my-8" />
              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Register;
