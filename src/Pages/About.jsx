import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "./css/About.css";

const AboutUs = () => {
  return (
    <div className="bg-gray-100" id="about">
      <div className="container py-5 about-section">
        {/* Heading Animation - Starts when visible */}
        <motion.h1 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }} // Ensures animation happens once when 50% of the section is in view
        >
          About Us
        </motion.h1>

        <div className="row">
          {/* Left Side - Text */}
          <motion.div 
            className="col-md-6 order-2 order-md-1"
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2>Rainpic Infotech</h2>
            <p>
              <FaQuoteLeft className="text-warning" />
              At Rainpic Infotech, we turn ordinary real estate photos into
              extraordinary visuals that sell. With a perfect blend of creativity
              and cutting-edge editing techniques, we enhance property images to
              captivate buyers and maximize impact.
              <br /><br />
              From flawless color correction and sky enhancements to virtual
              staging and HDR blending, our expert team ensures that every photo
              tells a compelling story. We understand that in real estate, first
              impressions are everything—and that’s why we deliver stunning,
              high-quality images with speed and precision.
              <FaQuoteRight className="text-warning" />
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="col-md-6 order-1 order-md-2 mb-4 mb-md-0"
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src="img/group.png"
              alt="Rainpic Infotech"
              className="img-fluid rounded shadow"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
