import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/Home.css"; // Ensure this path is correct

const slides = [
  {
    img: "img/room4.png",
    heading: "HDR Blend",
    text: "Perfect lighting & vibrant colors for a realistic feel.",
    buttonText: "Learn More",
    buttonLink: "#services",
  },
  {
    img: "img/room5.jpg",
    heading: "360 Images & Virtual Staging",
    text: "Immersive views that bring spaces to life.",
    buttonText: "Learn More",
    buttonLink: "#contact",
  },
  {
    img: "img/room6.jpg",
    heading: "Twilight & Day-to-Dusk Edits",
    text: "Create a warm, inviting ambiance effortlessly.",
    buttonText: "Learn More",
    buttonLink: "#portfolio",
  },
];

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track active slide

  return (
    <div className="relative" id="home">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={3000}
        stopOnHover={false}
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full"
            />
            <div className="absolute carousel-text inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 px-6">
              {index === currentSlide && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-white flex flex-col items-center"
                >
                  {/* Heading */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    {slide.heading}
                  </h2>

                  {/* Paragraph */}
                  <p className="text-lg sm:text-xl md:text-2xl mt-3 max-w-2xl">
                    {slide.text}
                  </p>

                  {/* Button */}
                  <a
                    href={slide.buttonLink}
                    className="mt-2 no-underline slide-btn text-white text-lg sm:text-xl font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
                  >
                    {slide.buttonText}
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
