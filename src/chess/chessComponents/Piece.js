// Componente responsavel por buscar os SVG e a cor das peças, além de lidar com o Drag
// Da biblioteca "react-dnd (drag and drop)"
import React from 'react';
import { useDrag } from 'react-dnd';

// Piece images import (only black SVGs)
import { ReactComponent as Pawn } from '../../assets/standardSet/Pawn.svg';
import { ReactComponent as Rook } from '../../assets/standardSet/Rook.svg';
import { ReactComponent as Knight } from '../../assets/standardSet/Knight.svg';
import { ReactComponent as Bishop } from '../../assets/standardSet/Bishop.svg';
import { ReactComponent as Queen } from '../../assets/standardSet/Queen.svg';
import { ReactComponent as King } from '../../assets/standardSet/King.svg';

// Object containing piece components for each type
const pieceComponents = {
  pawn: Pawn,
  rook: Rook,
  knight: Knight,
  bishop: Bishop,
  queen: Queen,
  king: King,
};

// Piece component that renders a chess piece
export default function Piece({ type, color, position }){
  const PieceComponent = pieceComponents[type];

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'piece',
    item: { type, color, position }, // Pass position correctly here
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PieceComponent style={{ width: '100%', height: '100%', color: color === 'white' ? '#ffffff' : '#000000' }} />
    </div>
  );
};
