import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import logo from "../images/logo.png"; 

function Footer() {
  const [hover, setHover] = useState(false);

  const footerStyle = {
    padding: "60px 0",
    background: "#002352",
    color: "#fff",
    fontFamily: "'Open Sans', sans-serif",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "20px",
  };

  const infoTextStyle = {
    color: "#ccc",
    fontSize: "0.95rem",
    marginBottom: "10px",
  };

  const formInputStyle = {
    borderRadius: "8px",
    border: "none",
    padding: "10px",
    marginBottom: "15px",
    fontSize: "1rem",
  };

  const textAreaStyle = {
    ...formInputStyle,
    resize: "none",
  };

  const submitButtonStyle = {
    background: "#ff6600",
    color: "white",
    border: "none",
    padding: "10px 25px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  };

  const submitButtonHover = {
    background: "#cc5200",
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="mb-5">
          <Col md={4}>
            <Image src={logo} alt="Logo" style={{ width: "150px", marginBottom: "20px" }} />
            <p style={infoTextStyle}>
              We provide the best healthcare services for you and your family. Contact us for more info.
            </p>
          </Col>

          <Col md={4}>
            <h5 style={titleStyle}>Contact Info</h5>
            <p style={infoTextStyle}>123 Medical Street, New York, NY 10001</p>
            <p style={infoTextStyle}>+1 234 567 890</p>
            <p style={infoTextStyle}>info@hospital.com</p>
          </Col>

          <Col md={4}>
            <h5 style={titleStyle}>Send us a Message</h5>
            <Form>
              <Form.Control type="text" placeholder="Your Name" style={formInputStyle} />
              <Form.Control type="email" placeholder="Your Email" style={formInputStyle} />
              <Form.Control as="textarea" rows={3} placeholder="Message" style={textAreaStyle} />
              <div className="text-start mt-2">
                <Button
                  style={{ ...submitButtonStyle, ...(hover ? submitButtonHover : {}) }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  Send
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <hr style={{ borderColor: "#444" }} />
        <p className="text-center" style={{ color: "#aaa" }}>
          &copy; {new Date().getFullYear()} Hospital. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
