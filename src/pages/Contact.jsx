import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Contact() {
  const contactStyle = {
    padding: '80px 0',
    background: '#f8f9fa'
  };

  const cardStyle = {
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    padding: '30px',
    height: '100%',
    transition: 'transform 0.3s ease'
  };

  const iconStyle = {
    fontSize: '2rem',
    color: '#1a237e',
    marginBottom: '15px'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: '50px',
    textAlign: 'center'
  };

  return (
    <div style={contactStyle} id="contact">
      <Container>
        <h2 style={titleStyle}>Contact Us</h2>
        
        <Row className="g-4">
          {/* Contact Information */}
          <Col lg={4} md={6}>
            <Card style={cardStyle}>
              <div className="text-center">
                <FaPhoneAlt style={iconStyle} />
                <h4 className="mb-3">Phone</h4>
                <p className="text-muted">+91 934 567 8900</p>
                <p className="text-muted">+91 934 567 8901</p>
              </div>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card style={cardStyle}>
              <div className="text-center">
                <FaEnvelope style={iconStyle} />
                <h4 className="mb-3">Email</h4>
                <p className="text-muted">info@cityhospital.com</p>
                <p className="text-muted">emergency@cityhospital.com</p>
              </div>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card style={cardStyle}>
              <div className="text-center">
                <FaMapMarkerAlt style={iconStyle} />
                <h4 className="mb-3">Address</h4>
                <p className="text-muted">123 Medical Street</p>
                <p className="text-muted">Ahmedabad , IN 382345</p>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Contact Form */}
        <Row className="mt-5">
          <Col lg={8} className="mx-auto">
            <Card style={cardStyle}>
              <h3 className="text-center mb-4">Send Us a Message</h3>
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control type="text" placeholder="Your Name" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control type="email" placeholder="Your Email" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control type="tel" placeholder="Phone Number" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control type="text" placeholder="Subject" required />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Control 
                        as="textarea" 
                        rows={5} 
                        placeholder="Your Message" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="text-center">
                    <Button 
                      variant="primary" 
                      type="submit"
                      style={{
                        background: 'linear-gradient(135deg, #1a237e, #3949ab)',
                        border: 'none',
                        padding: '12px 40px',
                        borderRadius: '30px',
                        fontWeight: '600'
                      }}
                    >
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>

        {/* Emergency Hours */}
        <Row className="mt-5">
          <Col lg={6} className="mx-auto">
            <Card style={{...cardStyle, background: 'linear-gradient(135deg, #1a237e, #3949ab)', color: 'white'}}>
              <div className="text-center">
                <FaClock style={{...iconStyle, color: 'white'}} />
                <h3 className="mb-3">Emergency Hours</h3>
                <p className="mb-2">24/7 Emergency Services Available</p>
                <p className="mb-1">Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p className="mb-1">Saturday: 9:00 AM - 6:00 PM</p>
                <p className="mb-0">Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .card:hover {
          transform: translateY(-5px);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(26, 35, 126, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Contact;
