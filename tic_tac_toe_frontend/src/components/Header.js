import React from "react";
import './Header.css';

// PUBLIC_INTERFACE
function Header({ user, onLogout }) {
  /** 
   * Renders the main site header, with branding and user menu.
   * @param {object} props - Props containing user object and logout handler.
   * @returns React component.
   */
  return (
    <header className="ttt-header">
      <div className="ttt-branding">
        <span role="img" aria-label="Tic Tac Toe" className="ttt-logo">⭕️❌</span>
        <span className="ttt-title">Tic Tac Toe</span>
      </div>
      <div className="ttt-user-menu">
        {user ? (
          <>
            <span className="ttt-username">Hello, {user.username}!</span>
            <button className="ttt-btn" onClick={onLogout}>Logout</button>
          </>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
