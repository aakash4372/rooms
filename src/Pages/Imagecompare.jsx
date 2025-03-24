import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Imagesection.css";

const Imagesection = () => {
  return (
    <div className="Image-compare" id="works">
      <div className="container mt-4 pb-5">
        <div className="row align-items-center">
          {/* Left Side - Image Comparison */}
          <div className="col-lg-6 position-relative image-compare">
            <ReactCompareSlider
              itemOne={
                <div className="image-wrapper">
                  <ReactCompareSliderImage src="img/room1.jpg" alt="Before" />
                  <div className="Image-compare-label before">Before</div>
                </div>
              }
              itemTwo={
                <div className="image-wrapper">
                  <ReactCompareSliderImage src="img/room2.jpg" alt="After" />
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
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6 ">
            <h2 className="">
              Elevate Your Images with Professional Photo Editing
            </h2>
            <p>
              Give your photos a professional touch with Rain Infotech’s expert
              editing services. From real estate to product photography, we
              enhance every detail to make your visuals more striking and
              appealing.
            </p>
            <button
              className="btn btn-dark text-center mt-3 mb-4"
              onClick={() => window.open("https://www.dropbox.com/scl/fo/oanroouicu3ufds42pme2/AO6eFtwP4Og2WKlYCuSTWx4?rlkey=ya091n4gd0gh2ifw5b8sjyt7p&st=88kaag1h&dl=0", "_blank")}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagesection;
