import React, { useState } from "react";
import "./AuthForms.css";

// PUBLIC_INTERFACE
function SignupForm({ onSignup, switchToLogin, error }) {
  /**
   * Signup form for new users.
   * @param {object} props - onSignup: function, switchToLogin: function, error: string
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  return (
    <form
      className="ttt-auth-form"
      onSubmit={e => {
        e.preventDefault();
        if (password === confirm) {
          onSignup({ username, password });
        }
      }}
    >
      <h2>Sign Up</h2>
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
      <label>
        Confirm Password
        <input
          type="password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          required
        />
      </label>
      {password && confirm && password !== confirm && (
        <div className="ttt-error">Passwords do not match.</div>
      )}
      <button className="ttt-btn ttt-btn-primary" type="submit" disabled={password !== confirm}>
        Sign Up
      </button>
      <div className="ttt-auth-switch">
        Already have an account?
        <button type="button" className="ttt-link" onClick={switchToLogin}>
          Log in
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
