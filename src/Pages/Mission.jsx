import React, { useEffect, useState, useRef } from "react";
import "./css/Mission.css";

export default function OurMission() {
  const [counts, setCounts] = useState({
    happyClients: 0,
    branding: 0,
    realEstate: 0,
    graphicDesign: 0,
  });

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
      happyClients: 85,
      branding: 90,
      realEstate: 80,
      graphicDesign: 95,
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
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="our-mission-bg">
      <section ref={sectionRef} className="our-mission container mx-auto p-6 pb-5">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="main-about-title text-3xl font-bold text-gray-900">Our Mission</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto our-mission-p">
          Design Info Solution Pvt. Ltd. is a trusted name among leading providers of premium services, including Photo Editing, Image Manipulation, and more. Known for our commitment to quality and precision, we deliver solutions that bring your visual content to life.
        </p>
      </div>

      {/* Mission Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: "Happy Clients", key: "happyClients" },
          { title: "Branding", key: "branding" },
          { title: "Real Estate Photography", key: "realEstate" },
          { title: "Graphic Design", key: "graphicDesign" },
        ].map(({ title, key }) => (
          <div key={key} className="bg-white shadow-lg p-6 rounded-lg text-center pb-5">
            <h3 className="text-xl font-semibold our-mission-title">{title}</h3>
            <div className="relative w-full h-4 bg-blue-300 mt-3 rounded-full">
              {/* Progress Bar */}
              <div
                className="absolute h-4 bg-blue-700 rounded-full transition-all duration-300 flex items-center justify-center"
                style={{ width: `${counts[key]}%` }}
              >
                <span className="text-white text-xs font-bold w-full text-center">
                  {counts[key]}%
                </span>
              </div>
            </div>
            <p className="text-gray-600 mt-3 our-mission-p2">
              {title === "Happy Clients"
                ? "We believe in harnessing the collective creativity and expertise of our team to exceed client expectations every time."
                : title === "Branding"
                ? "For us, it's not just about profit; it's about delivering success and value in every project we undertake."
                : title === "Real Estate Photography"
                ? "We prioritize measurable results, focusing on impact, quality, and growth for your brand."
                : "Listening to our clients and understanding their needs is at the heart of what we do, allowing us to deliver visually stunning and effective designs."}
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
