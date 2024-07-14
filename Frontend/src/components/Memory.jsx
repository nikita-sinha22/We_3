import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const initialGrid = () => {
  const icons = ["👕", "👖", "👗", "👔", "👠", "👒", "🧢", "👟"];
  const grid = [...icons, ...icons].sort(() => Math.random() - 0.5);
  return grid;
};

function Memory() {
  const navigate = useNavigate();

  const backgame = () => {
    navigate('/game');
  };

  const [grid, setGrid] = useState(initialGrid);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    if (matched.length === grid.length && matched.length > 0) {
      setGameWon(true);
    }
  }, [matched, grid.length]);

  const handleFlip = (index) => {
    if (flipped.length === 2 || matched.includes(index) || flipped.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (grid[first] === grid[second]) {
        setMatched([...matched, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 500);
      }
    }
  };

  const resetGame = () => {
    setGrid(initialGrid());
    setFlipped([]);
    setMatched([]);
    setGameWon(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-memory bg-cover bg-center">
      {gameWon ? (
        <div className="text-2xl mb-4">
          <div className="mb-4 text-center">
            You won the game! <br /> You won 10 magic points!
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 py-8 mt-20"> 
          {grid.map((item, index) => (
            <div
              key={index}
              className={`w-24 h-24 flex items-center justify-center text-2xl border-2 rounded-md cursor-pointer ${
                flipped.includes(index) || matched.includes(index) ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => handleFlip(index)}
            >
              {(flipped.includes(index) || matched.includes(index)) && item}
            </div>
          ))}
        </div>
      )}
      
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 mb-4"
          onClick={resetGame}
        >
          Reset Game
        </button>
        <br />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={backgame}
        >
          Back to Game Lounge
        </button>
      </div>
    
  );
}

export default Memory;



