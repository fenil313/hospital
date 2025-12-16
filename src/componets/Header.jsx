import React from 'react';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaCalendarAlt, FaAmbulance, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import logo from "../images/logo.png";

function Header() {
  const menuItems = ['Home', 'About', 'Services', 'Doctors', 'Contact'];

  return (
    <>
   

      {/* Main Navbar */}
      <Navbar expand="lg" className="main-navbar" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="main-nav" />
          
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="City Hospital"
              className="navbar-logo"
            />
          </Navbar.Brand>

          <Navbar.Collapse id="main-nav">
            <Nav className="mx-auto">
              {menuItems.map((item) => (
                <Nav.Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link-custom"
                >
                  {item}
                </Nav.Link>
              ))}
            </Nav>
            <div className="navbar-buttons">
              <Button variant="outline-danger" className="emergency-btn">
                <FaAmbulance /> Emergency
              </Button>
              <Button variant="primary" className="book-btn">
                <FaCalendarAlt /> Book Now
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>{`
        .top-contact-bar {
          background: linear-gradient(135deg, #1a237e 0%, #3949ab 100%);
          color: white;
          padding: 10px 0;
          font-size: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .contact-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-left {
          display: flex;
          gap: 20px;
        }

        .contact-link {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          color: #fff;
          transform: translateY(-2px);
        }

        .emergency-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          color: #fff;
          transform: translateY(-2px);
        }

        .main-navbar {
          background-color: rgba(140, 146, 183, 0.7);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          padding: 1rem 0;
        }

        .navbar-logo {
          height: 55px;
          max-width: 200px;
          transition: all 0.3s ease;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        .navbar-logo:hover {
          transform: scale(1.08);
          filter: drop-shadow(0 4px 8px rgba(26, 35, 126, 0.2));
        }

        .nav-link-custom {
          position: relative;
          margin: 0 12px;
          padding: 10px 16px;
          color: #1a237e;
          font-weight: 600;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .nav-link-custom:hover {
          color: #3949ab;
          background: rgba(26, 35, 126, 0.08);
          transform: translateY(-2px);
        }

        .nav-link-custom::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(135deg, #1a237e, #3949ab);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .nav-link-custom:hover::after {
          width: 70%;
        }

        .navbar-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 15px;
        }

        .emergency-btn {
          border-radius: 30px;
          font-weight: 600;
          padding: 10px 24px;
          transition: all 0.3s ease;
          white-space: nowrap;
          font-size: 14px;
          border-color: #dc3545;
          color: #dc3545;
        }

        .emergency-btn:hover {
          background: #dc3545;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(220, 53, 69, 0.3);
        }

        .book-btn {
          border-radius: 30px;
          font-weight: 600;
          padding: 10px 24px;
          transition: all 0.3s ease;
          white-space: nowrap;
          font-size: 14px;
          background: linear-gradient(135deg, #1a237e, #3949ab);
          border: none;
        }

        .book-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(26, 35, 126, 0.3);
          background: linear-gradient(135deg, #283593, #1a237e);
        }

        @media (max-width: 991.98px) {
          .navbar-collapse {
            text-align: center;
            padding: 30px 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            margin-top: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }
          
          .nav-link-custom {
            padding: 15px 0;
            display: block;
            font-size: 1.1rem;
            margin: 8px 0;
          }
          
          .nav-link-custom:hover {
            background: rgba(26, 35, 126, 0.08);
            border-radius: 10px;
          }

          .navbar-buttons {
            margin-top: 0;
            justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          .contact-left span:not(.d-md-inline) {
            display: none !important;
          }
        }
        
        @media (max-width: 576px) {
          .contact-info {
            flex-direction: column;
            gap: 8px;
            align-items: center;
          }
          
          .contact-left span {
            display: inline !important;
          }
        }
      `}</style>
    </>
  );
}

export default Header;