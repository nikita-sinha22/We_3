import React from 'react';
import {Router, Routes, Route } from 'react-router-dom';
import TicTacToeBoard from './components/TicTacToeBoard';
import Memory from './components/Memory';
import MagicPointsDisplay from './components/MagicPointsDisplay';
import Home from './components/HomePage/Home';
import Games from './components/Games';
import Trendy from './components/Trendy';

function App() {
    return (
            <div className='min-h-screen'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Games />} />
                    <Route path="/gametictac" element={<TicTacToeBoard />} />
                    <Route path="/gamememory" element={<Memory />} />
                    <Route path="/coin" element={<MagicPointsDisplay />} />
                    <Route path='/trendy' element={<Trendy/>} />
                </Routes>
            </div>
    );
}

export default App;
