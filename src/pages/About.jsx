import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../images/about.jpg";

function AboutUs() {
  const [isHovered, setIsHovered] = React.useState(false);

  const sectionStyle = {
    padding: "80px 0",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    transition: "transform 0.5s ease",
  };

  /* IMAGE HOVER ZOOM */
  const imageWrapperStyle = {
    overflow: "hidden",
    borderRadius: "8px",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#002352",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "20px",
  };

  const underlineStyle = {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -5,
    height: "3px",
    background: "linear-gradient(to right, #ff0000, #00ffff)",
    transform: isHovered ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: isHovered ? "left" : "right",
    transition: "transform 0.4s ease-out",
  };

  const textStyle = {
    color: "#555",
    fontSize: "1.1rem",
    lineHeight: "1.7",
    marginTop: "15px",
  };

  return (
    <div style={sectionStyle} id="about">
      <Container>
        <Row className="align-items-center">
          
          {/* IMAGE */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div
              style={imageWrapperStyle}
              onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = "scale(1)")}
            >
              <img src={aboutImg} alt="About Us" style={imageStyle} />
            </div>
          </Col>

          {/* TEXT */}
          <Col lg={6}>
            <h2
              style={titleStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              About Our Medical Clinic
              <span style={underlineStyle}></span>
            </h2>

            <p style={textStyle}>
              We are a trusted healthcare center dedicated to providing
              world-class medical services with compassion and excellence.  
              Our team of experienced doctors and specialists is committed to  
              offering personalized care, advanced diagnostics, and modern
              treatments to ensure the best outcomes for every patient.
            </p>

            <p style={textStyle}>
              With state-of-the-art technology and a patient-first approach,
              we focus on delivering holistic healthcare solutions in a safe,
              comfortable, and friendly environment.
            </p>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
