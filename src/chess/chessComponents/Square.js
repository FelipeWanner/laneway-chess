//componente responsavel por aplicar a logica de dropar as pecas no tabuleiro

import React from 'react';
import { useDrop } from 'react-dnd';

function Square({ children, position, isBlack, movePiece }){
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'piece',
    drop: (item) => {
      movePiece(item.position, position); // Pass from and to positions as arrays
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
