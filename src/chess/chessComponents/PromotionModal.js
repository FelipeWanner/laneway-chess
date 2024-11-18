// esse arquivo é responsavel por fazer o modal para escolher qual peça o peao vai 
// se tornar quando feito a promotion, mas nao estou conseguindo fazer funcionar, portanto, 
// vamos trabalhar nisso apenas depois!

import React from 'react';

// Importing SVG components
import { ReactComponent as Rook } from '../../assets/standardSet/Rook.svg';
import { ReactComponent as Knight } from '../../assets/standardSet/Knight.svg';
import { ReactComponent as Bishop } from '../../assets/standardSet/Bishop.svg';
import { ReactComponent as Queen } from '../../assets/standardSet/Queen.svg';

// Object mapping piece types to components
const pieceComponents = {
  rook: Rook,
  knight: Knight,
  bishop: Bishop,
  queen: Queen,
};

const PromotionModal = ({ onSelect, color }) => {
  const pieces = ['queen', 'rook', 'bishop', 'knight'];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-center text-lg font-bold">Promote Pawn</h2>
        <div className="flex justify-center space-x-4 mt-4">
          {pieces.map((piece) => {
            const PieceComponent = pieceComponents[piece];
            return (
              <button
                key={piece}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded"
                onClick={() => onSelect(piece)}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <PieceComponent
                    style={{
                      width: '100%',
                      height: '100%',
                      color: color === 'white' ? '#ffffff' : '#000000',
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
