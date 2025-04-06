import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
  <div className="home-page">
    <div className="container my-4">
      <div className="hero-section text-center">
        <p className="title1">Your Mobile Mechanic Service</p>
        <p className="title2">Find & book a trusted mechanic now!</p>
        <Link to="/booking">
        <button className="btn btn-danger">Book A Mechanic</button>
        </Link>
      </div>

      {/* Grid Section */}
      <div className="snapshot-container">
     
      <div className="snapshot-item" style={{ backgroundImage: 'url(./assets/images/Logo-gray.png)' }}>
        <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="snapshot-overlay">
            <img src="/assets/images/mechman1.jpg" alt="Mechanic Mike" className="photo" />
            <div className="snapshot-text">Certified: Yes</div>
          </div>
          <div className="snapshot-text">Mike ⭐⭐⭐⭐</div>
          <div className="snapshot-text">Car Repair</div>
          <div className="snapshot-text">Location: Connecticut</div>
          
          <div className="bottom-content">
            <div className="snapshot-text">Hourly Rate: $50</div>
            <button className="book-btn btn btn-danger">Book Now</button>
          </div>
        </Link>
      </div>
   
                 
      <div className="grid-item" style={{ backgroundImage: 'url(./assets/images/Logo-gray.png)' }}>
        <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="overlay">
            <img src="/assets/images/mechman1.jpg" alt="Mechanic Mike" className="photo" />
            <div className="snapshot-text">Certified: Yes</div>
          </div>
          <div className="snapshot-text">Alex ⭐⭐⭐⭐</div>
          <div className="snapshot-text">Car Repair</div>
          <div className="snapshot-text">Location: Connecticut</div>
          
          <div className="bottom-content">
            <div className="snapshot-text">Hourly Rate: $50</div>
            <button className="book-btn btn btn-danger">Book Now</button>
          </div>
        </Link>
      </div>
        
      <div className="grid-item" style={{ backgroundImage: 'url(./assets/images/Logo-gray.png)' }}>
        <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="overlay">
            <img src="/assets/images/mechman1.jpg" alt="Mechanic Mike" className="photo" />
            <div className="snapshot-text">Certified: Yes</div>
          </div>
          <div className="snapshot-text">joe⭐⭐⭐⭐</div>
          <div className="snapshot-text">Car Repair</div>
          <div className="snapshot-text">Location: Connecticut</div>
            <div className="bottom-content">
            <div className="snapshot-text">Hourly Rate: $50</div>
            <button className="book-btn btn btn-danger">Book Now</button>
          </div>
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
    </div>
  );
}

export default HomePage;
