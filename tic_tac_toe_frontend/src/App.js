import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import GameBoard from "./components/GameBoard";
import GameHistory from "./components/GameHistory";
import Leaderboard from "./components/Leaderboard";
import Loading from "./components/Loading";

/**
 * This App implements the main flow for user authentication, main navigation,
 * and the central layout for the Tic Tac Toe UI.
 */
// PUBLIC_INTERFACE
function App() {
  // App-level state
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [nav, setNav] = useState("game");
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [board, setBoard] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [myTurn, setMyTurn] = useState(true);
  const [games, setGames] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  // Effect for theming
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Simulate login (Replace with real API call)
  async function handleLogin({ username, password }) {
    setLoading(true);
    setTimeout(() => {
      setUser({ username });
      setShowSignup(false);
      setAuthError("");
      setLoading(false);
    }, 600);
  }

  async function handleSignup({ username, password }) {
    setLoading(true);
    setTimeout(() => {
      setUser({ username });
      setShowSignup(false);
      setAuthError("");
      setLoading(false);
    }, 650);
  }

  function handleLogout() {
    setUser(null);
    setNav("game");
    setAuthError("");
  }

  // Simulated moves/game (replace with API + websocket)
  function handleCellClick(idx) {
    if (board[idx] || winner || !myTurn) return;
    const next = board.slice();
    next[idx] = xIsNext ? "X" : "O";
    setBoard(next);
    const win = calculateWinner(next);
    if (win) setWinner(win);
    setXIsNext(!xIsNext);
    setMyTurn(false);
    // Simulate opponent move
    setTimeout(() => {
      if (!calculateWinner(next) && next.includes("")) {
        let move;
        do {
          move = Math.floor(Math.random() * 9);
        } while (next[move]);
        next[move] = !xIsNext ? "X" : "O";
        setBoard(next.slice());
        const newWin = calculateWinner(next);
        setWinner(newWin);
        setMyTurn(true);
      } else {
        setMyTurn(true);
      }
    }, 850);
  }

  function handleReplay(gameId) {
    // Demo: show the board for the historical game (mock data only)
    // Would integrate with backend for full replay functionality
    alert(`Would display replay for game #${gameId}`);
  }

  // Simulate loading game history/leaderboard (replace with real API)
  useEffect(() => {
    if (user) {
      setGames([
        { id: 1, result: "Win", date: "2024-05-10" },
        { id: 2, result: "Loss", date: "2024-05-09" },
      ]);
      setLeaderboard([
        { username: "alice", wins: 3, losses: 1 },
        { username: "bob", wins: 2, losses: 2 },
        { username: user.username, wins: 4, losses: 2 },
      ]);
    }
  }, [user]);

  // Game navigation options
  const navItems = [
    { id: "game", label: "Game", icon: <span role="img" aria-label="board">🎮</span> },
    { id: "history", label: "History", icon: <span role="img" aria-label="history">🕓</span> },
    { id: "leaderboard", label: "Leaderboard", icon: <span role="img" aria-label="trophy">🏆</span> },
  ];

  // Main minimalistic layout
  return (
    <div className="App">
      <Header user={user} onLogout={handleLogout} />
      {!user ? (
        <div className="ttt-centered-panel">
          {loading && <Loading />}
          {!loading && (
            showSignup ? (
              <SignupForm
                onSignup={handleSignup}
                switchToLogin={() => { setShowSignup(false); setAuthError(""); }}
                error={authError}
              />
            ) : (
              <LoginForm
                onLogin={handleLogin}
                switchToSignup={() => { setShowSignup(true); setAuthError(""); }}
                error={authError}
              />
            )
          )}
        </div>
      ) : (
        <div className="ttt-main-layout">
          <Sidebar navItems={navItems} onNavSelect={setNav} activeNav={nav} />
          <main className="ttt-main">
            {nav === "game" && (
              <GameBoard
                board={board}
                onCellClick={handleCellClick}
                xIsNext={xIsNext}
                winner={winner}
                myTurn={myTurn}
              />
            )}
            {nav === "history" && (
              <GameHistory games={games} onReplay={handleReplay} />
            )}
            {nav === "leaderboard" && (
              <Leaderboard entries={leaderboard} />
            )}
          </main>
        </div>
      )}
      <button
        className="theme-toggle"
        onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}

// Utility to check winner
function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let line of lines) {
    const [a,b,c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.every(Boolean)) return "Tie";
  return null;
}

export default App;
