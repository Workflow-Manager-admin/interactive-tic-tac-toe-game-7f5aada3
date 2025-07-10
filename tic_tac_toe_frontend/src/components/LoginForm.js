import React, { useState } from "react";
import "./AuthForms.css";

// PUBLIC_INTERFACE
function LoginForm({ onLogin, switchToSignup, error }) {
  /**
   * Login form for user authentication.
   * @param {object} props - onLogin: function, switchToSignup: function, error: string
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      className="ttt-auth-form"
      onSubmit={e => {
        e.preventDefault();
        onLogin({ username, password });
      }}
    >
      <h2>Login</h2>
      {error && <div className="ttt-error">{error}</div>}
      <label>
        Username
        <input
          type="text"
          value={username}
          autoFocus
          onChange={e => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      <button className="ttt-btn ttt-btn-primary" type="submit">
        Log In
      </button>
      <div className="ttt-auth-switch">
        Don't have an account?
        <button type="button" className="ttt-link" onClick={switchToSignup}>
          Sign up here
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
