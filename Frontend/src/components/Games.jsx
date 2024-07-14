import React from 'react'
import GameHome from "./GameHome"
import Navbar from './HomePage/Navbar';
import Footer from './Footer';

function Games() {
   return (
      <>
         <div className='min-h-screen'>
            <Navbar/>
            <GameHome />
            <Footer/>
         </div>
      </>
   );
}

export default Games

