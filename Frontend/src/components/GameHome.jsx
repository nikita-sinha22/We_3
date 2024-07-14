import React from 'react'
import list from "../assets/list.json"
import Cards from './Cards'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

function GameHome() {
   const navigate = useNavigate();

  const coin = () => {
    navigate('/coin');
  };
   return (
      <>
         <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-20 items-center justify-center text-center py-1'>
               <h1 className='text-2xl font-semibold md:text-4xl'>
                  Welcome to <span className='text-pink-500' >Game Lounge :)</span>
                  </h1>
                  <p className='mt-12'>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit ut quaerat reiciendis nam dicta facilis? Non dicta odit praesentium! Facilis nostrum unde provident sit sequi totam maiores earum molestiae!
                  </p>
                  <Link to="/coin">
                  <button className='bg-pink-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-pink-700 duration-300'>
                     Check MagicPoints
                  </button>
                  </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
               {list.map((item)=> (
                  <Cards key={item.id} item={item}/>
               ))
               }
            </div>
            
         </div>
      </>
   )
}

export default GameHome