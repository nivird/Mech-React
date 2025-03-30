import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container my-4">
      <div className="hero-section text-center">
        <p className="title1">Your Mobile Mechanic Service</p>
        <p className="title2">Find & book a trusted mechanic now!</p>
        <Link to="/booking">
        <button className="btn btn-danger">Book A Mechanic</button>
        </Link>
      </div>

      {/* Grid Section */}
      <div className="grid-container">
        <div className="grid-item">
          <Link to="/login">
            <img src="/assets/images/mechman1.jpg" alt="Mechanic Mike" className="photo" />
            <div className="text-field">Mike</div>
            <div className="text-field">Car Repair</div>
            <div className="text-field">Certified: Yes, ⭐⭐⭐⭐</div>
            <div className="text-field">Available: No</div>
          </Link>
        </div>

        <div className="grid-item">
          <Link to="/login">
            <img src="/assets/images/mechman2.jpg" alt="Mechanic Abba" className="photo" />
            <div className="text-field">Abba</div>
            <div className="text-field">Auto Body</div>
            <div className="text-field">Certified: No, ⭐⭐⭐⭐⭐</div>
            <div className="text-field">Available: Yes</div>
          </Link>
        </div>

        <div className="grid-item">
          <Link to="/login">
            <img src="/assets/images/mechman3.jpg" alt="Mechanic Alex" className="photo" />
            <div className="text-field">Alex</div>
            <div className="text-field">Oil Service</div>
            <div className="text-field">Certified: Yes, ⭐⭐⭐⭐⭐</div>
            <div className="text-field">Available: Yes</div>
          </Link>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container mt-3">
        <div className="carousel-container">
          <div className="box">
            <div id="carousel1" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/assets/images/cr1.jpg" className="d-block w-100" alt="Service 1" />
                </div>
                <div className="carousel-item">
                  <img src="/assets/images/cr2.jpg" className="d-block w-100" alt="Service 2" />
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <div id="carousel2" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/assets/images/BA1.jpg" className="d-block w-100" alt="Car Service 1" />
                </div>
                <div className="carousel-item">
                  <img src="/assets/images/BA3.jpg" className="d-block w-100" alt="Car Service 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
