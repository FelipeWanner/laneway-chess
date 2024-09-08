// Chessboard.jsx
import React from 'react';

const Chessboard = () => {
  // Create an 8x8 grid
  const rows = 8;
  const cols = 8;
  const board = [];

  for (let row = 0; row < rows; row++) {
    const squares = [];
    for (let col = 0; col < cols; col++) {
      // Alternate colors between white and black
      const isBlack = (row + col) % 2 === 1;
      squares.push(
        <div
          key={`${row}-${col}`}
          className={`w-12 h-12 ${isBlack ? 'bg-gray-700' : 'bg-gray-200'}`}
        ></div>
      );
    }
    board.push(
      <div key={row} className="flex">
        {squares}
      </div>
    );
  }

  return <div className="grid grid-cols-8">{board}</div>;
};

export default Chessboard;
