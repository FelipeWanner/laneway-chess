import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Square from './Square';
import Piece from './Piece';

// Define initial board setup for placing pieces
const initialBoardState = [
  ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
  ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
  ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
];

const Chessboard = () => {
  const rows = 8;
  const cols = 8;
  const board = [];
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; // Chessboard columns
  const rowNumbers = [8, 7, 6, 5, 4, 3, 2, 1]; // Chessboard row numbers

  // Create the squares with keys and alternating colors
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Create algebraic notation for each square (e.g., A1, B2, etc.)
      const squareKey = `${columns[col]}${8 - row}`;

      // Alternate colors between white and black
      const isBlack = (row + col) % 2 === 1;
      const pieceType = initialBoardState[row][col];
      const pieceColor = row < 2 ? 'black' : 'white';

      // Add a Square component and conditionally render a Piece inside if present
      board.push(
        <Square key={squareKey} position={squareKey} isBlack={isBlack}>
          {pieceType && <Piece type={pieceType} color={pieceColor} />}
        </Square>
      );
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-center items-center space-x-2">
        {/* Row numbers on the left */}
        <div className="flex flex-col justify-between">
          {rowNumbers.map((number) => (
            <div key={number} className="h-12 flex items-center justify-center">
              {number}
            </div>
          ))}
        </div>

        {/* Chessboard with column letters */}
        <div>
          {/* Column letters on the top */}
          <div className="flex justify-center">
            {columns.map((letter) => (
              <div key={letter} className="w-12 h-12 flex items-center justify-center">
                {letter}
              </div>
            ))}
          </div>

          {/* Chessboard grid */}
          <div className="grid grid-cols-8">
            {board}
          </div>

          {/* Column letters on the bottom */}
          <div className="flex justify-center">
            {columns.map((letter) => (
              <div key={letter} className="w-12 h-12 flex items-center justify-center">
                {letter}
              </div>
            ))}
          </div>
        </div>

        {/* Row numbers on the right */}
        <div className="flex flex-col justify-between">
          {rowNumbers.map((number) => (
            <div key={number} className="h-12 flex items-center justify-center">
              {number}
            </div>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Chessboard;
