import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Square from './Square';
import Piece from './Piece';

const initialBoardState = [
  [{ type: "rook", color: "black" }, { type: "knight", color: "black" }, { type: "bishop", color: "black" }, { type: "queen", color: "black" }, { type: "king", color: "black" }, { type: "bishop", color: "black" }, { type: "knight", color: "black" }, { type: "rook", color: "black" }],
  [{ type: "pawn", color: "black" }, { type: "pawn", color: "black" }, { type: "pawn", color: "black" }, { type: "pawn", color: "black" }, { type: "pawn", color: "black" }, { type: "pawn", color: "black" }, { type: "pawn", color: "black" }, { type: "pawn", color: "black" }],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [{ type: "pawn", color: "white" }, { type: "pawn", color: "white" }, { type: "pawn", color: "white" }, { type: "pawn", color: "white" }, { type: "pawn", color: "white" }, { type: "pawn", color: "white" }, { type: "pawn", color: "white" }, { type: "pawn", color: "white" }],
  [{ type: "rook", color: "white" }, { type: "knight", color: "white" }, { type: "bishop", color: "white" }, { type: "queen", color: "white" }, { type: "king", color: "white" }, { type: "bishop", color: "white" }, { type: "knight", color: "white" }, { type: "rook", color: "white" }],
];

export default function Chessboard(){
  const [boardState, setBoardState] = useState(initialBoardState);
  
  const movePiece = (fromPosition, toPosition) => {
    console.log("From Position:", fromPosition); // Log from position
    console.log("To Position:", toPosition); // Log to position

    const [fromRow, fromCol] = fromPosition;
    const [toRow, toCol] = toPosition;

    setBoardState((prevBoardState) => {
        // Create a deep copy of the previous board state
        const updatedBoard = prevBoardState.map(row => row.slice());

        // Move the piece from the original position to the new position
        const piece = updatedBoard[fromRow][fromCol];
        updatedBoard[fromRow][fromCol] = null; // Clear the original position
        updatedBoard[toRow][toCol] = piece; // Place the piece in the new position

        console.log("Updated Board:", updatedBoard); // Log the updated board
        return updatedBoard;
    });
};


  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const squareKey = `${col}-${row}`;
        const isBlack = (row + col) % 2 === 1;
        const piece = boardState[row][col];

        board.push(
          <Square
            key={squareKey}
            position={[row, col]}
            isBlack={isBlack}
            movePiece={movePiece}
          >
            {piece && <Piece type={piece.type} color={piece.color} position={[row, col]} />}
          </Square>
        );
      }
    }
    return board;
  };

  console.log("Current Board State:", boardState); // Log current board state on each render

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-center items-center space-x-2">
        <div className="grid grid-cols-8">{renderBoard()}</div>
      </div>
    </DndProvider>
  );
};

