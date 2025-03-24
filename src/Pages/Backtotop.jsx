import "./css/BackToTop.css";import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import arrow icon

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button className="back-to-top" onClick={scrollToTop}>
          <span className="wave"></span>
          <FaArrowUp className="arrow-icon" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
