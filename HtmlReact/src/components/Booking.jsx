import React from "react";
import { Link } from "react-router-dom";

const mechanics = [
  { id: 1, name: "Mechanic 1", isMechanic: true, certified: true, available: false, img: "/assets/images/mechman1.jpg" },
  { id: 2, name: "Mechanic 2", isMechanic: true, certified: false, available: true, img: "/assets/images/mechman2.jpg" },
  { id: 3, name: "Mechanic 3", isMechanic: false, certified: true, available: true, img: "/assets/images/mechman3.jpg" },
  { id: 4, name: "Mechanic 4", isMechanic: true, certified: true, available: false, img: "/assets/images/mechman1.jpg" },
  { id: 5, name: "Mechanic 5", isMechanic: true, certified: false, available: true, img: "/assets/images/mechman2.jpg" },
  { id: 6, name: "Mechanic 6", isMechanic: false, certified: true, available: true, img: "/assets/images/mechman3.jpg" },
  { id: 7, name: "Mechanic 7", isMechanic: true, certified: true, available: false, img: "/assets/images/mechman1.jpg" },
  { id: 8, name: "Mechanic 8", isMechanic: true, certified: false, available: true, img: "/assets/images/mechman2.jpg" },
  { id: 9, name: "Mechanic 9", isMechanic: false, certified: true, available: true, img: "/assets/images/mechman3.jpg" }
];

function Booking() {
  return (
    <div className="container">
      <h2 className="text-center my-4">Mechanic Availability</h2>
      <div className="grid-container">
        {mechanics.map((mechanic) => (
          <div key={mechanic.id} className="grid-item">
            <img src={mechanic.img} alt={mechanic.name} className="photo" />
            <div className="text-field">Full Name: {mechanic.name}</div>
            <div className="text-field">Mechanic: {mechanic.isMechanic ? "Yes" : "No"}</div>
            <div className="text-field">Certified: {mechanic.certified ? "Yes" : "No"}</div>
            <div className="text-field">Available: {mechanic.available ? "Yes" : "No"}</div>
            <Link to="/customerintakeform">
              <button className="btn btn-danger mt-2">Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booking;
