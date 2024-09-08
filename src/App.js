import React from 'react';
import Chessboard from './chess/chessComponents/Chessboard';

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Chessboard />
      <div className="bg-blue-500 text-white p-4">This is a Tailwind Test</div>
    </div>
  );
};

export default App;
