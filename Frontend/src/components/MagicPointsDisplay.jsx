import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './HomePage/Navbar';
import Footer from './Footer';

function MagicPointsDisplay({ magicPoints }) {
  const navigate = useNavigate();

  const backhome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4 md:text-4xl items-center justify-center text-center text-pink-500">MagicPoints</h1>
        <div className="flex flex-col items-center">
          <p>Welcome to the SuperCoin section! Here you can view and manage your SuperCoins.</p>
          <div className="flex items-center mb-4">
            {/* <img src="/path/to/supercoin-icon.png" alt="SuperCoin" className="h-12 w-12 mr-2" /> */}
            <span className="text-xl font-bold py-6">100 MagicPoints</span>
          </div>
          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Redeem MagicPoints</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MagicPointsDisplay;
