import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Imagesection.css";

const Imagesection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className="Image-compare"  ref={sectionRef}>
      <div className="container mt-4 pb-5">
        <div className="row align-items-center">
          {/* Left Side - Image Comparison */}
          <motion.div
            className="col-lg-6 position-relative image-compare"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ReactCompareSlider
              itemOne={
                <div className="image-wrapper">
                  <ReactCompareSliderImage
                    src="img/Before.jpg"
                    alt="Before"
                    loading="lazy"
                  />
                  <div className="Image-compare-label before">Before</div>
                </div>
              }
              itemTwo={
                <div className="image-wrapper">
                  <ReactCompareSliderImage
                    src="img/After.jpg"
                    alt="After"
                    loading="lazy"
                  />
                  <div className="Image-compare-label after">After</div>
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
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>Elevate Your Images with Professional Photo Editing</h2>
            <p>
              Give your photos a professional touch with Rain Infotech’s expert
              editing services. From real estate to product photography, we
              enhance every detail to make your visuals more striking and
              appealing.
            </p>
            <motion.button
              className="btn btn-dark text-center mt-3 mb-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                window.open(
                  "https://www.dropbox.com/scl/fo/oanroouicu3ufds42pme2/AO6eFtwP4Og2WKlYCuSTWx4?rlkey=ya091n4gd0gh2ifw5b8sjyt7p&st=88kaag1h&dl=0",
                  "_blank"
                )
              }
            >
              Explore More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Imagesection;
