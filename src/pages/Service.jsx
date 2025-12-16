import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function ServiceSection() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const services = [
    {
      icon: "bi-heart-pulse-fill",
      title: "General Consultation",
      text: "Expert physicians providing routine check-ups and medical guidance.",
      color: "#FFEBEE", // light red
      hoverColor: "#FFCDD2",
    },
    {
      icon: "bi-activity",
      title: "Cardiology",
      text: "Advanced heart care with modern diagnostic tools.",
      color: "#E8F5E9", // light green
      hoverColor: "#C8E6C9",
    },
    {
      icon: "bi-radioactive",
      title: "Radiology & Imaging",
      text: "High-quality X-Ray, MRI, CT Scan, and ultrasound imaging.",
      color: "#E3F2FD", // light blue
      hoverColor: "#BBDEFB",
    },
    {
      icon: "bi-hospital-fill",
      title: "Emergency Care",
      text: "24/7 emergency support from skilled medical professionals.",
      color: "#FFF3E0", // light orange
      hoverColor: "#FFE0B2",
    },
    {
      icon: "bi-bandaid-fill",
      title: "Orthopedics",
      text: "Bone & joint care with orthopedic specialists.",
      color: "#F3E5F5", // light purple
      hoverColor: "#E1BEE7",
    },
    {
      icon: "bi-person-heart",
      title: "Pediatrics",
      text: "Complete health care services for infants and children.",
      color: "#F9FBE7", // light lime
      hoverColor: "#F0F4C3",
    },
  ];

  // SECTION STYLE
  const sectionStyle = {
    padding: "80px 0",
    background: "#f8faff",
  };

  // TITLE STYLE
  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#002352",
    textAlign: "center",
    cursor: "pointer",
    position: "relative",
    display: "inline-block",
    marginBottom: "50px",
  };

  const underlineStyle = (index) => ({
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -5,
    height: "3px",
    background: "linear-gradient(to right, #ff0000, #00ffff)",
    transform: hoverIndex === index ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.4s ease-out",
  });

  // CARD BASE STYLE
  const cardBaseStyle = (color) => ({
    width: "100%",       
    minHeight: "360px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    backgroundColor: color,
  });

  const cardHoverStyle = (hoverColor) => ({
    transform: "translateY(-10px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    backgroundColor: hoverColor,
  });

  // ICON WRAPPER STYLE
  const iconWrapper = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "#ffffffcc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
    border: "3px solid #c8e1ff",
    flexShrink: 0,
  };

  const iconStyle = {
    fontSize: "42px",
    color: "#0066cc",
  };

  const titleCardStyle = {
    fontSize: "1.3rem",
    fontWeight: 600,
    marginBottom: "10px",
  };

  const textCardStyle = {
    color: "#555",
    fontSize: "0.95rem",
  };

  return (
    <div style={sectionStyle} id="services">
      <Container>
        {/* Section Title */}
        <div className="text-center">
          <h2
            style={titleStyle}
            onMouseEnter={() => setHoverIndex(999)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Our Medical Services
            <span style={underlineStyle(999)}></span>
          </h2>
        </div>

        {/* Cards */}
        <Row className="g-4 justify-content-center">
          {services.map((service, index) => (
            <Col md={4} sm={6} key={index}>
              <div
                style={{
                  ...cardBaseStyle(service.color),
                  ...(hoverIndex === index ? cardHoverStyle(service.hoverColor) : {}),
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div style={iconWrapper}>
                  <i className={`bi ${service.icon}`} style={iconStyle}></i>
                </div>
                <div style={titleCardStyle}>{service.title}</div>
                <div style={textCardStyle}>{service.text}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ServiceSection;
