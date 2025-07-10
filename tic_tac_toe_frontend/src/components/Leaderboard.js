import React from "react";
import "./Leaderboard.css";

// PUBLIC_INTERFACE
function Leaderboard({ entries }) {
  /**
   * Simple leaderboard component displaying players and their stats.
   * @param {object} entries - Array of { username, wins, losses } objects
   */
  return (
    <div className="ttt-leaderboard">
      <h3>Leaderboard</h3>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Wins</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>
          {(entries || []).map((p, i) => (
            <tr key={p.username}>
              <td>{i+1}</td>
              <td>{p.username}</td>
              <td>{p.wins}</td>
              <td>{p.losses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
