import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Masterpiece.css"; // Import CSS file

const Masterpieces = () => {
  const features = [
    { icon: "img/icon1.png", title: "Upload" },
    { icon: "img/icon2.png", title: "Edit" },
    { icon: "img/icon3.png", title: "Quality" },
    { icon: "img/icon4.png", title: "Download" },
  ];

  return (
    <section className="features-section text-center" style={{background:'#f3f4f6'}} id="mission">
      <h1 className="main-about-title text-center pb-5 pt-5">
      Moments to Masterpieces
      </h1>
      <Container>
        <Row className="justify-content-center pb-5">
          {features.map((feature, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12} className="mb-4">
              <Card className="feature-card">
                <Card.Body>
                  <div className="icon-container">
                    <img src={feature.icon} alt={feature.title} className="icon" />
                  </div>
                  <Card.Title className="mt-2 feature-title">{feature.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Masterpieces;
