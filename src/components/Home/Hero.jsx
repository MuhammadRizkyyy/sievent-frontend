import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer hover:bg-opacity-100 active:scale-90 transition"
      onClick={onClick}
    >
      <FaChevronLeft size={15} />
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer hover:bg-opacity-100 active:scale-90 transition"
      onClick={onClick}
    >
      <FaChevronRight size={15} />
    </div>
  );
}

export default function Hero() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
    autoplay: true, 
    autoplaySpeed: 3000,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    appendDots: dots => (
      <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white rounded-full border border-gray-400 cursor-pointer"></div>
    )
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-200 via-white to-blue-20 px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-snug">
            Temukan Ticket Acara Hanya Di <span className="text-blue-500">SiEvent</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link to="/event">
            <button className="bg-[#00ADB5] hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg active:scale-90 transition text-sm sm:text-base">
              Cari Event Sekarang
            </button>
            </Link>
            <button className="bg-[#393E46] hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg active:scale-90 transition text-sm sm:text-base">
              Mengapa Harus SiEvent?
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto relative">
          <Slider {...settings}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="relative">
                <img
                  src="src/assets/samplegambarcaraousel1.jpg" 
                  alt={`Slide ${i + 1}`}
                  className="w-full h-auto rounded-xl shadow"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
