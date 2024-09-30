import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div id="modal-login" className="modal">
      <div className="modal-content">
        <h4>Login</h4>
        <br />
        <form id="login-form" onSubmit={handleLogin}>
          <div className="input-field">
            <input
              type="email"
              id="login-email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label htmlFor="login-email">Email address</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              id="login-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <label htmlFor="login-password">Your password</label>
          </div>
          <button
            disabled={isLoading}
            className="btn yellow darken-2 z-depth-0"
          >
            Login
          </button>
          {error && (
            <div className="card-panel red lighten-2 white-text">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
