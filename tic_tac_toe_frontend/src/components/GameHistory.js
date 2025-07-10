import React from "react";
import "./GameHistory.css";

// PUBLIC_INTERFACE
function GameHistory({ games, onReplay }) {
  /**
   * Displays a list of previous games with their outcomes.
   * @param {object} props - games: array, onReplay: function(gameId)
   */
  if (!games || games.length === 0) {
    return <div className="ttt-history-empty">No games played.</div>;
  }
  return (
    <div className="ttt-history-list">
      <h3>Game History</h3>
      <ul>
        {games.map(game => (
          <li key={game.id} className="ttt-history-item">
            <div>
              <span className="ttt-history-outcome">{game.result}</span>
              <span className="ttt-history-date">{game.date}</span>
            </div>
            <button className="ttt-btn-outline" onClick={() => onReplay(game.id)}>
              Replay
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameHistory;
