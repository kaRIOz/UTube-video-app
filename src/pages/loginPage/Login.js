import React from "react";
import "./login.css";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
function Login() {
  const { theme } = useGlobalContext();
  return (
    <div className="login-page">
      <div className={`${theme ? "wrapper-light-mode" : "wrapper"}`}>
        <h1 className="login-title">SING IN</h1>
        <p>to continue to YouTube</p>
        <input
          type="text"
          placeholder="Email"
          className={`${theme ? "login-input-light-mode" : "login-input"}`}
        />
        <input
          type="password"
          placeholder="password"
          className={`${theme ? "login-input-light-mode" : "login-input"}`}
        />
        <button className="SingIn">Sing in</button>
        <h1>OR</h1>
        <input
          type="text"
          placeholder="username"
          className={`${theme ? "login-input-light-mode" : "login-input"}`}
        />
        <input
          type="email"
          placeholder="Email"
          className={`${theme ? "login-input-light-mode" : "login-input"}`}
        />
        <input
          type="password"
          placeholder="password"
          className={`${theme ? "login-input-light-mode" : "login-input"}`}
        />
      </div>
      <Link to="/" className={`${theme ? "SingIn-light-mode" : "SingIn"}`}>
        Back to Home
      </Link>
    </div>
  );
}

export default Login;
