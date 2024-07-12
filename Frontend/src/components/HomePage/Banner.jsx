import React from 'react'
import bannerImg from '../../assets/banner.jpg'

function Banner() {
    return ( 
        <div  className='mx-[30px] h-[500px]'>
            <div className='h-[30px] bg-gradient-to-b from-[rgb(245,245,245)]'></div>
            <div className='bg-yellow-500 h-full w-full'>
                <img className='object-fit-cover h-full w-full' src={bannerImg} alt="" />
                    <div>

                    </div>
                    <div>

                    </div>
            </div>
            
        </div>  
    ) 
}
export default Banner