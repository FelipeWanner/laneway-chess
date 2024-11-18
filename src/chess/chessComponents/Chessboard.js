import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Square from './Square';
import Piece from './Piece';
import axios from 'axios';

export default function Chessboard() {
  const [boardState, setBoardState] = useState([]); // Chessboard state
  const [currentTurn, setCurrentTurn] = useState('white'); // Track the current turn
  const [errorMessage, setErrorMessage] = useState(null); // Store error messages for invalid moves

  // Fetch initial board state and current turn on component mount
  useEffect(() => {
    axios
      .get('http://localhost:4505/api/chess/board-state')
      .then((response) => {
        setBoardState(response.data.boardState);
        setCurrentTurn(response.data.currentTurn); // Set the turn from backend
      })
      .catch((error) => {
        console.error('Error fetching board state:', error);
      });
  }, []);

  const movePiece = (fromPosition, toPosition) => {
    setErrorMessage(null); // Clear any previous error message
    axios
      .post('http://localhost:4505/api/chess/move', {
        fromPosition,
        toPosition,
      })
      .then((response) => {
        if (response.data.valid) {
          setBoardState(response.data.boardState); // Update the board state
          setCurrentTurn(response.data.currentTurn); // Update the turn
        } else {
          setErrorMessage(response.data.message); // Display the error message for invalid moves
          console.log('Invalid move:', response.data.message);
        }
      })
      .catch((error) => {
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

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          {/* Display current turn */}
          <h2 className="text-lg font-bold">
            Current Turn: <span className={currentTurn === 'white' ? 'text-white' : 'text-black'}>{currentTurn}</span>
          </h2>
        </div>
        {errorMessage && (
          <div className="text-red-500 mb-4">
            {/* Display error message for invalid moves */}
            <p>{errorMessage}</p>
          </div>
        )}
        <div className="grid grid-cols-8">{renderBoard()}</div>
      </div>
    </DndProvider>
  );
}
