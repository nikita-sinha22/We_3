import React from 'react'
import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
  
   console.log(item);
   const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate(item.path);
  };
  return (
    <>
    <div className='mt-4 my-3 p-3 '>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 ">
    <figure>
    <img
      src={item.image} alt="Games" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {item.name}</h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <button className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:text-white hover:bg-pink-500 duration-200"
      onClick={handlePlayClick}>Let's Play</button>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards