import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo-print-color-on-white.png"; // Adjust path if needed

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom py-3">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Left side: Logo and Navigation Links */}
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Mocanik-logo" width="100" height="50" className="d-inline-block align-text-top" />
                </Link>

              {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>*/}

               <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3">
  {/* Menu Items */}
  <ul className="navbar-nav d-flex flex-row flex-wrap justify-content-center gap-4 mb-0">
    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/about">About us</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
  </ul>

  {/* Buttons appear below on small screens, inline on large screens */}
  <div className="d-flex flex-row justify-content-center gap-2">
  <Link to="/phonenumber" className="btn btn-success">📞111-222-3333</Link>
    <Link to="/customerlogin" className="btn btn-danger">Customer</Link>
    <Link to="/mechaniclogin" className="btn btn-danger">Mechanic</Link>
  </div>
</div>

            </div>
        </nav>
    );
}

export default Header;
