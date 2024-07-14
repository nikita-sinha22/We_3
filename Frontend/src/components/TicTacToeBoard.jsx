import React, { useState } from 'react';
import Square from './Square';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TicTacToeBoard = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [magicPoints, setMagicPoints] = useState(0);
  const navigate = useNavigate();
  const username = 'player1'; 

  const backgame = () => {
    navigate('/game');
  };

  const handleClick = (i) => {
    const newSquares = [...squares];
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    
    const winner = calculateWinner(newSquares);
    if (winner) {
      const points = 10;
      setMagicPoints(magicPoints + points); 
      axios.post('http://localhost:5000/magicpoints', { username, points })
        .then(response => console.log(response.data))
        .catch(error => console.error('There was an error updating the magic points!', error));
    }
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-tic-tac-toe bg-cover bg-center">
      <div className="status mb-4 text-center text-white text-2xl">{status}</div>
      {winner && (
        <div className="magic-points text-center mb-4 text-white">
          <p>You won 10 magic points!</p>
        </div>
      )}
      <div className="grid grid-cols-3 gap-2">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button
        className="reset-button mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setSquares(Array(9).fill(null));
          setMagicPoints(0); 
        }}
      >
        Reset
      </button>
      <br />
      <button
        className="reset-button mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={backgame}
      >
        Back to Game Lounge
      </button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToeBoard;


