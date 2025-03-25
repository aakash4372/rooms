import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import "bootstrap/dist/css/bootstrap.min.css";

const reviews = [
  "Exceptional work! The team delivered high-quality edits on time, exceeding my expectations. Highly recommended!",
  "Their HDR image editing is flawless! Every detail is enhanced perfectly, making the final output look stunning and professional.",
  "Timely delivery and top-notch quality—Rainpic Infotech truly understands how to make real estate images stand out.",
  "I was amazed at how they turned dull skies into bright, realistic backdrops and enhanced the grass to look lush and appealing. Perfect for real estate listings!",
  "Rainpic Infotech completely transformed my property images with stunning sky and grass replacements! The results look so natural and eye-catching.",
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="review-section"
      initial={{ opacity: 0, y: 50 }} // Start hidden
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 1 }} // Smooth effect
      viewport={{ once: true }} // Animation runs only once when visible
    >
      <h1 className="main-about-title text-center pb-3 pt-5">Client Review</h1>

      <motion.div 
        className="max-w-xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }} // Start smaller
        whileInView={{ opacity: 1, scale: 1 }} // Grow when in view
        transition={{ duration: 1, delay: 0.3 }} // Delay for a natural feel
        viewport={{ once: true }} // Runs once when visible
      >
        <Carousel controls={false} indicators={false} activeIndex={index}>
          {reviews.map((review, idx) => (
            <Carousel.Item key={idx}>
              <div className="min-h-[150px] flex flex-col">
                <FaQuoteLeft className="text-gray-400 text-2xl text-start" />
                <p className="text-lg text-black flex items-center" style={{fontWeight: '500'}}>
                  {review}
                </p>
              </div>
              {/* Star Rating */}
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-blue-800 text-xl mx-1" />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default ReviewSlider;
