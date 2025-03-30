import React from "react";
import { Link } from "react-router-dom";
import "../App"

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center">
        <h1 className="title1">Your Mobile Mechanic Service</h1>
        <h3 className="title2">Find & book a trusted mechanic now!</h3>
        <Link to="/booking">
          <button className="btn btn-danger">Book a Mechanic</button>
        </Link>
      </div>

      {/* Our Services Section */}
      <div className="container mt-3">
        <h3 className="text-center title3 fs-3 fw-bold">Our Services</h3>
        <div className="row g-3">
          {[
            { name: "Tune-ups", link: "#" },
            { name: "Oil Change", link: "#oilchanges" },
            { name: "Fluids", link: "#" },
            { name: "Diagnostics", link: "#" },
            { name: "Custom Requests", link: "#" },
            { name: "Towing", link: "#towing" },
            { name: "Tires and Balancing", link: "#tires-services" },
            { name: "Painting & Body", link: "#" },
            { name: "Installations", link: "#" },
            { name: "Repairs", link: "#" },
          ].map((service, index) => (
            <div key={index} className="col-md-6">
              <div className="services">
                <a href={service.link}>{service.name}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details */}
      <div className="container mt-5">
        <ServiceDetails />
      </div>
    </div>
  );
};

const ServiceDetails = () => {
  return (
    <>
      {/* Oil Change Section */}
      <section id="oilchanges">
        <h4>Engine Oil</h4>
        <p>
          Engine oil lubricates a car’s engine, allowing it to run smoothly and last longer.
          Car owners must maintain their cars’ engines by changing the oil regularly.
        </p>
        <h4>Changing the Oil</h4>
        <p>
          Regular oil changes are crucial for car maintenance. Experts differ on how often to change oil,
          but checking the owner’s manual is the best approach. If the oil light stays on after adding oil,
          a mechanic should check for leaks.
        </p>
      </section>

      {/* Towing Section */}
      <section id="towing">
        <h4>Towing</h4>
        <p>
          Need a tow? Our professional towing service ensures your car reaches our shop safely.
          Call us for affordable and reliable towing services.
        </p>
      </section>

      {/* Tire Services Section */}
      <section id="tires-services">
        <h4>Tire Services</h4>
        <p>
          Ensure safe driving with properly inflated and balanced tires. We offer:
        </p>
        <ul>
          <li>Wheel alignment</li>
          <li>Tire mounting</li>
          <li>Tire balancing</li>
          <li>Tire rotation</li>
          <li>Tire inspection</li>
        </ul>
      </section>
    </>
  );
};

export default Services;
