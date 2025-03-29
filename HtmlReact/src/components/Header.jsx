import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo-print-color-on-white.png"; // Adjust path if needed

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom py-3">
            <div className="container-fluid">
                {/* Left side: Logo and Navigation Links */}
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Mocanik-logo" width="100" height="50" className="d-inline-block align-text-top" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/aboutus">About us</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Right side: Phone number and Appointment Button */}
                <div className="contact-info">
                    <span className="text-white fw-bold">📞 (123) 456-7890</span>
                    <Link to="/booking" className="btn btn-danger mt-2">Book an Appointment</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
