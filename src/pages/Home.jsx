import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaHeartbeat, FaUserMd, FaAmbulance, FaHospital } from 'react-icons/fa';

// Import hospital images
import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';

const Home = () => {
  const styles = {
    carouselImage: {
      height: '600px',
      objectFit: 'cover',
      width: '100%'
    },
    carouselOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    carouselTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    },
    carouselSubtitle: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
    },
    // Stats Section
    quickStats: {
      background: '#f8f9fa',
      padding: '3rem 0'
    },
    statCard: {
      padding: '2rem',
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      height: '100%'
    },
    statCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
    },
    statIcon: {
      fontSize: '3rem',
      color: '#007bff',
      marginBottom: '1rem'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '0.5rem'
    },
    statLabel: {
      color: '#666',
      fontSize: '1.1rem',
      margin: 0
    }
  };

  return (
    <div>
      {/* Bootstrap Carousel with Hospital Images */}
      <Carousel fade interval={3000} controls={true} indicators={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero1}
            alt="First slide"
            style={styles.carouselImage}
          />
          <Carousel.Caption>
            <h3 style={styles.carouselTitle}>Welcome to City Hospital</h3>
            <p style={styles.carouselSubtitle}>Your Health, Our Priority - Providing exceptional healthcare with compassion and excellence</p>
            <button className="btn btn-primary btn-lg me-3">Book Appointment</button>
            <button className="btn btn-outline-light btn-lg">Emergency Services</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero2}
            alt="Second slide"
            style={styles.carouselImage}
          />
          <Carousel.Caption>
            <h3 style={styles.carouselTitle}>Expert Medical Team</h3>
            <p style={styles.carouselSubtitle}>24/7 Healthcare Services - Our dedicated professionals are here for you</p>
            <button className="btn btn-primary btn-lg me-3">Find a Doctor</button>
            <button className="btn btn-outline-light btn-lg">Our Services</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero3}
            alt="Third slide"
            style={styles.carouselImage}
          />
          <Carousel.Caption>
            <h3 style={styles.carouselTitle}>Advanced Medical Technology</h3>
            <p style={styles.carouselSubtitle}>State-of-the-Art Healthcare Solutions - Leading innovation in medical care</p>
            <button className="btn btn-primary btn-lg me-3">Learn More</button>
            <button className="btn btn-outline-light btn-lg">Contact Us</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

  

      {/* Add responsive styles using media queries */}
      <style jsx>{`
        @media (max-width: 768px) {
          .carousel-title {
            font-size: 2rem !important;
          }
          .carousel-subtitle {
            font-size: 1.2rem !important;
          }
          .carousel-image {
            height: 400px !important;
          }
          .btn-lg {
            padding: 0.5rem 1rem !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;