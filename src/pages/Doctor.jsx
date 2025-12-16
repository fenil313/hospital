import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import local images
import doctor1 from "../images/doctor1.jpg";
import doctor2 from "../images/doctor2.jpg";
import doctor3 from "../images/doctor3.jpg";
import doctor4 from "../images/doctor4.jpg";

function Doctor() {
  const doctors = [
    { name: "Dr. Sarah Patel", specialty: "Cardiologist", image: doctor1 },
    { name: "Dr. Man Patel", specialty: "Radiologist", image: doctor2 },
    { name: "Dr. Das Ramesh", specialty: "Pediatrician", image: doctor3 },
    { name: "Dr. Fenil Patel", specialty: "Orthopedic Surgeon", image: doctor4 },
  ];

  return (
    <div className="py-5" style={{ backgroundColor: "#f0f4f8" }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: "700", color: "#002352" }}>
          Our Doctors
        </h2>
        <Row className="g-4 justify-content-center">
          {doctors.map((doctor, index) => (
            <Col md={3} sm={6} key={index}>
              <Card className="h-100 shadow-sm doctor-card" style={{ borderRadius: "12px", overflow: "hidden", cursor: "pointer" }}>
                <Card.Img 
                  variant="top" 
                  src={doctor.image} 
                  style={{ height: "300px", objectFit: "cover" }} 
                />
                <Card.Body className="text-center">
                  <Card.Title style={{ fontWeight: "600" }}>{doctor.name}</Card.Title>
                  <Card.Text style={{ color: "#555" }}>{doctor.specialty}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Hover effect using inline <style> */}
      <style>
        {`
          .doctor-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
          }
        `}
      </style>
    </div>
  );
}

export default Doctor;
