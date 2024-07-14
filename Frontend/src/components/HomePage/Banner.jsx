import React from 'react';
import bannerImg from '../../assets/images/banner.jpg';
import banner2Img from '../../assets/images/banner2.png';
import { useNavigate } from 'react-router-dom';


function Banner() {
    const navigate = useNavigate();

    const backgame = () => {
      navigate('/game');
    };
    return (
        <div className='mx-[30px] mb-14'>
            <div className='h-[30px] bg-gradient-to-b from-[rgb(245,245,245)]'></div>
            <div className='bg-yellow-500 h-[500px] w-full'>
                <img className='object-cover h-full w-full' src={bannerImg} alt="" />
            </div>
            <div className='bg-white pt-10 relative' style={{ height: '400px', overflow: 'hidden' }}>
                <div className='relative h-full w-full'>
                    <img className='object-cover h-full w-full' src={banner2Img} alt="" />
                    <button className='absolute bottom-6 left-1/2 transform -translate-x-1/2 border-[3px] border-[#E11299] bg-white text-[#E11299] font-bold shadow-xl py-2 px-5 rounded-lg hover:bg-[#E11299] hover:text-white hover:border-transparent'
                    onClick={backgame}>
                        PLAY GAMES
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
