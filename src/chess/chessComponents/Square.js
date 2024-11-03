//componente responsavel por aplicar a logica de dropar as pecas no tabuleiro

import React from 'react';
import { useDrop } from 'react-dnd';

const Square = ({ children, position, isBlack }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'piece',
    drop: (item) => {
      console.log(`Piece ${item.pieceType} dropped on ${position}`);
      // Here we can add logic to handle what happens when a piece is dropped.
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`w-12 h-12 flex items-center justify-center ${isBlack ? 'bg-gray-700' : 'bg-gray-200'}`}
      style={{
        backgroundColor: isOver ? 'lightgreen' : undefined, // Optional visual feedback for dropping
      }}
    >
      {children}
    </div>
  );
};

export default Square;
