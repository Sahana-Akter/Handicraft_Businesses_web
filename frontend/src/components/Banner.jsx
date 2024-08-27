import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'; // Ensure this file includes your animation styles

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  };

  return (
    <div className="h-80">
      <Slider {...settings}>
        <div>
          <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/ban.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">Prominent Handicrafts Business</h1>
              <p className="mt-4 text-xl animate-slideIn">Showcasing the best of Bangladesh's handicraft industry</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/ban1.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">Unique and Authentic</h1>
              <p className="mt-4 text-xl animate-slideIn">Discover traditional crafts from local artisans</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">Craftsmanship at its Best</h1>
              <p className="mt-4 text-xl animate-slideIn">Support the craft that tells a story</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
