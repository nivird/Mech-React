import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import your pages
import MechanicLoginPage from './pages/MechanicLoginPage.jsx';
import CustomerLoginPage from './pages/CustomerLoginPage.jsx';

const carouselImages = [
  ['cr1.jpg', 'cr2.jpg', 'cr3.jpg'],
  ['BA1.jpg', 'BA2.jpg', 'BA3.jpg'],
  ['mechman1.jpg', 'mechman2.jpg', 'mechman3.jpg'],
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center">
        <p className="title1">Your Mobile Mechanic Service</p>
        <p className="title2">Find & book a trusted mechanic now!</p>
        <Link to="/mechanic-profile">
          <button className="btn btn-danger">Book a Mechanic</button>
        </Link>
      </div>

      {/* Services Section */}
      <div className="container mt-3">
        <p className="text-center title3 fs-3 fw-bold">Our Services</p>
        <div className="row g-3 gx-3">
          {['Tune-ups', 'Oil Change', 'Fluids', 'Diagnostics', 'Custom Requests', 'Towing', 'Tires and Balancing', 'Painting & Body', 'Installations', 'Repairs'].map(service => (
            <div className="col-md-6" key={service}>
              <div className="services"><Link to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}>{service}</Link></div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container my-4">
        <div className="row">
          {carouselImages.map((group, index) => (
            <div className="col-md-4" key={index}>
              <div id={`carousel${index}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {group.map((img, idx) => (
                    <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                      <img src={`/images/${img}`} className="d-block w-100" alt={`Slide ${idx + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${index}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carousel${index}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/images/Logo-print-color-on-white.png" alt="Mocanik-logo" width="100" height="50" className="d-inline-block align-text-top" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item me-3"><Link to="/mechanic-login" className="nav-link text-white">Mechanic</Link></li>
              <li className="nav-item"><Link to="/customer-login" className="nav-link text-white">Customer</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes for Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mechanic-login" element={<MechanicLoginPage />} />
        <Route path="/customer-login" element={<CustomerLoginPage />} />
        <Route path="/mechanic-profile" element={<div>Mechanic Profile Page Placeholder</div>} />
        <Route path="/about" element={<div>About Us Page Placeholder</div>} />
        <Route path="/services" element={<div>Services Page Placeholder</div>} />
        <Route path="/contact" element={<div>Contact Page Placeholder</div>} />
        <Route path="*" element={<div className="text-center mt-4">404 - Page Not Found</div>} />
      </Routes>

      {/* Footer */}
      <div className="footer text-center py-3">
        <ul className="list-unstyled d-flex justify-content-center gap-2 mb-2">
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/support">Contact Support</Link></li>
        </ul>
        <p>&copy; 2025 Mocanik. All rights reserved</p>
      </div>
    </Router>
  );
};

export default App;
