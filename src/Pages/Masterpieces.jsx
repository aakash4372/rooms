import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Masterpiece.css";

const Masterpieces = () => {
  const features = [
    { icon: "img/icon1.png", title: "Upload" },
    { icon: "img/icon2.png", title: "Edit" },
    { icon: "img/icon3.png", title: "Quality" },
    { icon: "img/icon4.png", title: "Download" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Ref for tracking visibility
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 }); // Ensure animation triggers properly

  return (
    <section ref={sectionRef} className="features-section text-center" style={{ background: "#f3f4f6" }}>
      {/* Heading with motion */}
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
              {/* Motion applied only to feature cards */}
              <motion.div
                className={`feature-card ${index === activeIndex ? "hovered" : ""}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card.Body>
                  <div className="icon-container">
                    <img src={feature.icon} alt={feature.title} className="icon" />
                  </div>
                  <Card.Title className="mt-2 feature-title">{feature.title}</Card.Title>
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