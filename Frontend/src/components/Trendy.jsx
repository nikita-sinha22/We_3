import React from 'react';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import Navbar from './HomePage/Navbar';
import Footer from './Footer';
import Slider from './Slider';

function Trendy() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Slider/>
      <div className="flex-grow mb-[40px]">
        <div className="flex flex-row flex-wrap justify-center">
          <div className="basis-1/6">
            <img src={img1} alt="Category 1" />
          </div>
          <div className="basis-1/6">
            <img src={img2} alt="Category 2" />
          </div>
          <div className="basis-1/6">
            <img src={img3} alt="Category 3" />
          </div>
          <div className="basis-1/6">
            <img src={img4} alt="Category 4" />
          </div>
          <div className="basis-1/6">
            <img src={img5} alt="Category 5" />
          </div>
          <div className="basis-1/6">
            <img src={img6} alt="Category 6" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Trendy;



