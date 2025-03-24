import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./css/Mission.css";

export default function OurMission() {
  const [counts, setCounts] = useState({
    happyClients: 0,
    successfulProjects: 0,
    awardsWon: 0,
  });

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetCounts = {
      happyClients: 239,
      successfulProjects: 110,
      awardsWon: 80,
    };

    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        let updatedCounts = { ...prevCounts };
        let allReached = true;

        Object.keys(targetCounts).forEach((key) => {
          if (updatedCounts[key] < targetCounts[key]) {
            updatedCounts[key] += 1;
            allReached = false;
          }
        });

        if (allReached) clearInterval(interval);

        return updatedCounts;
      });
    }, 20); // Faster count-up animation

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="our-mission-bg" id="mission">
      <section ref={sectionRef} className="our-mission container mx-auto p-6 pb-5">
        {/* Heading Animation */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="main-about-title text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto our-mission-p">
            At Rainpic Infotech, we are dedicated to redefining real estate photography through high-quality, visually compelling imagery. By combining innovation, precision, and creativity, we enhance property visuals to maximize appeal and drive sales. Our mission is to empower realtors, photographers, and agencies with market-ready images that leave a lasting impression and elevate property listings.
          </p>
        </motion.div>

        {/* Achievement Cards with Motion */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Happy Clients", key: "happyClients", suffix: "+" },
            { title: "Successful Projects", key: "successfulProjects", suffix: "" },
            { title: "Awards Won", key: "awardsWon", suffix: "+" },
          ].map(({ title, key, suffix }) => (
            <motion.div
              key={key}
              className="bg-white shadow-lg p-6 rounded-lg text-center pb-5"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold our-mission-title">{title}</h3>
              {/* Number Counter Animation */}
              <motion.div 
                className="text-3xl font-bold text-blue-700 mt-2 number-count"
                initial={{ scale: 0.8 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {counts[key]}{suffix}
              </motion.div>
              <p className="text-gray-600 mt-3 our-mission-p2">
                {title === "Happy Clients"
                  ? "We believe in harnessing the collective creativity and expertise of our team to exceed client expectations every time."
                  : title === "Successful Projects"
                  ? "We have delivered top-notch services across multiple industries, ensuring quality and precision in every project."
                  : "Our work has been recognized for excellence, earning us multiple awards in the industry."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
