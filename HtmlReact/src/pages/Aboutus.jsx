import React from "react";
import "./App.css"; // Make sure you import your custom CSS

const Aboutus = () => {
  return (
    <div className="about-us-container">
      {/* First section: Text on left, Image on right */}
      <div className="row">
        <div className="column text">
          <h2>About Us</h2>
          <p>
            We are a trusted mobile mechanic service, providing top-quality
            auto repairs at your convenience. Our certified mechanics ensure
            your vehicle runs smoothly and safely.
          </p>
        </div>
        <div className="column image">
          <img
            src="/assets/images/about1.jpg"
            alt="Mechanic Working"
            className="about-image"
          />
        </div>
      </div>

      {/* Second section: Image on left, Text on right */}
      <div className="row reverse">
        <div className="column image">
          <img
            src="/assets/images/about2.jpg"
            alt="Car Repair"
            className="about-image"
          />
        </div>
        <div className="column text">
          <p>
            Our mission is to provide hassle-free and reliable car
            maintenance. Whether at home or on the road, we bring the best
            service to your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
