import React from 'react';
import './assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./assets/images/Logo-print-color-on-white.png" alt="Mocanik-logo" width="100" height="50" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item me-3"><a href="/pages/mechanic.html" className="nav-link text-white">Mechanic</a></li>
              <li className="nav-item"><a href="/pages/customer.html" className="nav-link text-white">Customer</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section text-center">
        <p className="title1">Your Mobile Mechanic Service</p>
        <p className="title2">Find & book a trusted mechanic now!</p>
        <a href="/pages/MechanicProfile.html">
          <button className="btn btn-danger">Book a Mechanic</button>
        </a>
      </div>

      {/* Services Section */}
      <div className="container mt-3">
        <p className="text-center title3 fs-3 fw-bold">Our Services</p>
        <div className="row g-3 gx-3">
          {['Tune-ups', 'Oil Change', 'Fluids', 'Diagnostics', 'Custom Requests', 'Towing', 'Tires and Balancing', 'Painting & Body', 'Installations', 'Repairs'].map(service => (
            <div className="col-md-6" key={service}>
              <div className="services"><a href="#">{service}</a></div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container my-4">
        <div className="row">
          {[1, 2, 3].map(num => (
            <div className="col-md-4" key={num}>
              <div id={`carousel${num}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {[1, 2, 3].map((img, idx) => (
                    <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={img}>
                      <img src={`./assets/images/${carouselImages[num - 1][idx]}`} className="d-block w-100" alt={`Slide ${img}`} />
                    </div>
                  ))}
                </div>
                <a className="carousel-control-prev" href={`#carousel${num}`} role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" href={`#carousel${num}`} role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer text-center py-3">
        <ul className="list-unstyled d-flex justify-content-center gap-2 mb-2">
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Terms & conditions</a></li>
          <li><a href="#">Contact Support</a></li>
        </ul>
        <p>&copy; 2025 Mocanik. All rights reserved</p>
      </div>
    </div>
  );
};

const carouselImages = [
  ['cr1.jpg', 'cr2.jpg', 'cr3.jpg'],
  ['BA1.jpg', 'BA@.jpg', 'BA3.jpg'],
  ['mechman1.jpg', 'mechman2.jpg', 'mechman3.jpg'],
];

export default App;
