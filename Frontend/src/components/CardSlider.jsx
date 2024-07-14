import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const cards = [
    { id: 1, content: "Card 1", image: "../../src/assets/images/image1.jpg" },
    { id: 2, content: "Card 2", image: "../../src/assets/images/image2.jpg" },
    { id: 3, content: "Card 3", image: "../../src/assets/images/image3.jpg" },
    { id: 4, content: "Card 4", image: "../../src/assets/images/image4.jpg" },
    { id: 5, content: "Card 5", image: "../../src/assets/images/image5.jpg" },
    { id: 6, content: "Card 6", image: "../../src/assets/images/image6.jpg" },
    { id: 7, content: "Card 7", image: "../../src/assets/images/image7.jpg" },
    { id: 8, content: "Card 8", image: "../../src/assets/images/image8.jpg" },
  ];

  return (
    <div className="slider-container w-4/5 mx-auto py-10">
      <h2 className='text-2xl font-bold mb-4 md:text-4xl items-center justify-center text-center text-pink-500'>WEEKLY TRENDY DROPS</h2>
      <Slider {...settings}>
        {cards.map(card => (
          <div key={card.id} className="cards bg-gray-100 border border-gray-300 p-5 text-center rounded-lg">
            <img src={card.image} alt={card.content} className="card-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;