import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import "./css/slider.css"; // Import CSS for styling

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Tablets
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Container className="mt-4" id="works">
      <h1
        className="main-about-title text-center pb-2 pt-5"
      >
        Our Works
      </h1>
      <Slider {...settings} className="pb-5">
        <div className="slider-item">
          <img src="img/Twilight.jpg" alt="Slide 1" className="slider-img" />
          <p className="slider-title">Twilight Edit</p>
        </div>
        <div className="slider-item">
          <img src="img/Drone.jpg" alt="Slide 2" className="slider-img" />
          <p className="slider-title">Drone Shoot Edit</p>
        </div>
        <div className="slider-item">
          <img src="img/flash.jpg" alt="Slide 3" className="slider-img" />
          <p className="slider-title">Flash Ambient</p>
        </div>

        <div className="slider-item">
          <img src="img/street.jpg" alt="Slide 4" className="slider-img" />
          <p className="slider-title">Starlit Night</p>
        </div>
        <div className="slider-item">
          <img src="img/house.jpg" alt="Slide 4" className="slider-img" />
          <p className="slider-title">Starlit Night</p>
        </div>
        <div className="slider-item">
          <img src="img/bedroom.jpg" alt="Slide 4" className="slider-img" />
          <p className="slider-title">Starlit Night</p>
        </div>
        <div className="slider-item">
          <img src="img/kitchen.jpg" alt="Slide 4" className="slider-img" />
          <p className="slider-title">Starlit Night</p>
        </div>
      </Slider>
    </Container>
  );
};

export default ImageSlider;
