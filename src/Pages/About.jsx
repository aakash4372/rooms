import React, { useEffect } from "react";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
import "./css/About.css";
import AOS from "aos";
import "aos/dist/aos.css";


const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 15600 }); // Animation duration (1s)
  }, []);
  
  return (
   <div className="bg-gray-100" id="about">
     <div className="container py-5 about-section">
      <h1 className="text-center mb-5" data-aos="fade-up">About Us</h1>
      <div className="row">
        {/* Left Side - Content */}
        <div className="col-md-6 order-2 order-md-1">
          <h2>Rainpic Infotech</h2>
          <p>
          <FaQuoteLeft className="text-warning" />
            At Rainpic Infotech, we turn ordinary real estate photos into
            extraordinary visuals that sell. With a perfect blend of creativity
            and cutting-edge editing techniques, we enhance property images to
            captivate buyers and maximize impact. From flawless color correction
            and sky enhancements to virtual staging and HDR blending, our expert
            team ensures that every photo tells a compelling story. We
            understand that in real estate, first impressions are everything—and
            that’s why we deliver stunning, high-quality images with speed and
            precision.
            Whether you're a realtor, photographer, or agency, Rainpic Infotech
            is your trusted partner in making every property stand out. Let us
            bring your listings to life with unmatched clarity and brilliance!<FaQuoteRight className="text-warning" />
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
          <img
            src="img/group.png" // Replace with your image URL
            alt="Rainpic Infotech"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
   </div>
  );
};

export default AboutUs;
