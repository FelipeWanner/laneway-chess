import React from 'react';
import Chessboard from './chess/chessComponents/Chessboard';

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-300">
      <Chessboard />
    </div>
  );
};

export default App;
