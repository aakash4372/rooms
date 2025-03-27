import "./css/BackToTop.css";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import icon

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show Back to Top button when user scrolls down
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
      {/* Back to Top Button (Visible after scrolling 300px) */}
      <button
        className={`back-to-top ${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <FaArrowUp className="icon-size" />
      </button>
    </>
  );
};

export default BackToTop;
