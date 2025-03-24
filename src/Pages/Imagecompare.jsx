import React from "react";
import Slider from "react-slick";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/Imagecompare.css'

const Imagecompare = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: false,
    draggable: false, // Disables slick's drag handling
    swipe: false, // Disables swipe gestures to allow CompareSlider to work
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  

  const compareImages = [
    {
      before: "img/room1.jpg",
      after: "img/room2.jpg",
      heading: "Single image",
    },
    {
      before: "img/room2.jpg",
      after: "img/room3.jpg",
      heading: "Single image",
    },
    {
      before: "img/room1.jpg",
      after: "img/room2.jpg",
      heading: "Single image",
    },
    {
      before: "img/room3.jpg",
      after: "img/room1.jpg",
      heading: "Single image",
    },
  ];

  return (
    <div className="slider-container" id="works">
        <h2 className="main-about-title text-center pb-5 pt-5">Our Works</h2>
      <div className="container">
        <Slider {...settings}>
          {compareImages.map((item, index) => (
            <div key={index} className="slide">
              <div className="image-heading">{item.heading}</div>
              <ReactCompareSlider 
                itemOne={
                  <div className="compare-image">
                    <ReactCompareSliderImage src={item.before} alt="Before" />
                    <div className="compare-text compare-left">Before</div>
                  </div>
                }
                itemTwo={
                  <div className="compare-image">
                    <ReactCompareSliderImage src={item.after} alt="After" />
                    <div className="compare-text compare-right">After</div>
                  </div>
                }
                handle={
                  <ReactCompareSliderHandle
                    buttonStyle={{
                      border: "2px solid white",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                }
              />
            </div>
          ))}
        </Slider>

        {/* View More Text at Bottom Right */}
        <div className="view-more-text text-end me-2">
          <a
            href="https://www.dropbox.com/scl/fo/oanroouicu3ufds42pme2/AO6eFtwP4Og2WKlYCuSTWx4?rlkey=ya091n4gd0gh2ifw5b8sjyt7p&st=88kaag1h&dl=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagecompare;
