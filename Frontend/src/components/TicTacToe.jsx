import React from 'react'
import TicTacToeBoard from './components/TicTacToeBoard';
import Navbar from './HomePage/Navbar';


function TicTacToe() {
  return (
    <>
   <div className="flex justify-center items-center h-screen">
   <TicTacToeBoard/>
 </div>
 </>
  )
}

export default TicTacToe