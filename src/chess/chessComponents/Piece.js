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
const Piece = ({ type, color }) => {
  // Get the piece component based on its type
  const PieceComponent = pieceComponents[type];

  // Set up drag functionality using React DnD's useDrag hook
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'piece', // The type of draggable item
    item: { type, color }, // Information about the piece being dragged
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(), // Track whether the piece is being dragged
    }),
  }));

  return (
    <div
      ref={drag} // Attach the drag reference to enable dragging
      style={{
        opacity: isDragging ? 0.5 : 1, // Reduce opacity while dragging for visual feedback
        cursor: 'move', // Show a move cursor to indicate draggable
        width: '100%', // Set to full width of container for scaling
        height: '100%', // Set to full height of container for scaling
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Render the piece SVG as a component and apply color using `color` property */}
      <PieceComponent
        style={{
          width: '100%',
          height: '100%',
          color: color === 'white' ? '#ffffff' : '#000000', // Apply customizable color
        }}
      />
    </div>
  );
};

export default Piece;
