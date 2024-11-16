import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Square from './Square';
import Piece from './Piece';
import axios from 'axios';

export default function Chessboard() {
  const [boardState, setBoardState] = useState([]);

  // Fetch initial board state on component mount
  useEffect(() => {
    axios.get('http://localhost:4505/api/chess/board-state')
      .then(response => {
        setBoardState(response.data);
      })
      .catch(error => {
        console.error('Error fetching board state:', error);
      });
  }, []);

  const movePiece = (fromPosition, toPosition) => {
    console.log("Attempting to move piece:", fromPosition, "to", toPosition);

    axios.post('http://localhost:4505/api/chess/move', {
      fromPosition,
      toPosition,
    })
    .then(response => {
      if (response.data.valid) {
        setBoardState(response.data.boardState); // Update board with latest state from backend
        console.log("Board updated after move:", response.data.boardState);
      } else {
        console.log('Invalid move:', response.data.message);
      }
    })
    .catch(error => {
      console.error('Error validating move:', error);
    });
  };

  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const squareKey = `${col}-${row}`;
        const isBlack = (row + col) % 2 === 1;
        const piece = boardState[row]?.[col];

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

  console.log("Current Board State:", boardState);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-center items-center space-x-2">
        <div className="grid grid-cols-8">{renderBoard()}</div>
      </div>
    </DndProvider>
  );
}
