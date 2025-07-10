import React from "react";
import "./GameBoard.css";

// PUBLIC_INTERFACE
function GameBoard({ board, onCellClick, xIsNext, winner, myTurn }) {
  /**
   * Renders the 3x3 tic-tac-toe board.
   * @param {object} props - board: array[9], onCellClick: function(index), xIsNext: bool, winner: string/null, myTurn: bool
   */
  function renderCell(idx) {
    const v = board[idx];
    return (
      <button
        className="ttt-cell"
        onClick={() => onCellClick(idx)}
        disabled={!!v || !!winner || !myTurn}
        aria-label={`Cell ${idx + 1}${v ? `: ${v}` : ""}`}
      >
        {v ? (v === "X" ? "❌" : "⭕️") : ""}
      </button>
    );
  }
  return (
    <div className="ttt-board-container">
      <div className="ttt-board">
        {[0,1,2].map(row =>
          <div className="ttt-board-row" key={row}>
            {[0,1,2].map(col => renderCell(row*3 + col))}
          </div>
        )}
      </div>
      <div className="ttt-board-status">
        {winner ? (
          <span>{winner === "Tie" ? "It's a tie!" : `Winner: ${winner}`}</span>
        ) : (
          <span>{myTurn ? `Your turn (${xIsNext ? "❌" : "⭕️"})` : `Waiting for opponent...`}</span>
        )}
      </div>
    </div>
  );
}

export default GameBoard;
