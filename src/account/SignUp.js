import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const { signUp, error, isLoading } = useSignup();

  const submitForm = async (e) => {
    e.preventDefault();

    await signUp(email, password, bio);
    setEmail("");
    setPassword("");
    setBio("");
  };

  return (
    <div id="modal-signup" className="modal">
      <div className="modal-content">
        <h4>Sign up</h4>
        <br />
        <form id="signup-form" onSubmit={submitForm}>
          <div className="input-field">
            <input
              type="email"
              id="signup-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="signup-email">Email address</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              id="signup-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="signup-password">Choose password</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="signup-bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            />
            <label htmlFor="signup-bio">One Line Bio</label>
          </div>
          <button
            disabled={isLoading}
            className="btn yellow darken-2 z-depth-0"
          >
            Sign up
          </button>
          {error && (
            <div className="card-panel red lighten-2 white-text">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
