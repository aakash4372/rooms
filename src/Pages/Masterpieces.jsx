import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Masterpiece.css";

const Masterpieces = () => {
  const features = [
    { icon: "img/icon1.png", title: "Upload", text: "Take a picture of your special moments. Click the capture button to save your memories instantly." },
    { icon: "img/icon2.png", title: "Edit", text: "Our team of design experts will enhance your picture to perfection and make it stand out beautifully." },
    { icon: "img/icon3.png", title: "Quality", text: "We enhance and optimize your file to maintain the best quality. Get a clear and sharp final output effortlessly." },
    { icon: "img/icon4.png", title: "Download", text: "Once your file is ready, simply click the download button to save it instantly to your device." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section ref={sectionRef} className="features-section text-center">
      {/* Heading with animation */}
      <motion.h1
        className="main-about-title text-center pb-5 pt-5"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Moments to Masterpieces
      </motion.h1>

      <Container>
        <Row className="justify-content-center pb-5">
          {features.map((feature, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12} className="mb-4">
              {/* Feature Card with Hover and Automatic Highlight */}
              <motion.div
                className={`feature-card ${index % 2 === 0 ? "even" : "odd"} ${
                  index === activeIndex || index === hoveredIndex ? "hovered" : ""
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card.Body>
                  <div className="icon-container">
                    <img src={feature.icon} alt={feature.title} className="icon" />
                  </div>
                  <Card.Title className="mt-2 feature-title">{feature.title}</Card.Title>
                  <p className="feature-text">{feature.text}</p>
                </Card.Body>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Masterpieces;
