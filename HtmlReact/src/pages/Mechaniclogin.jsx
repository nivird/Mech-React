import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Mechaniclogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    // Add authentication logic here

    // Redirect to another page after login (e.g., home page)
    navigate("/");
  };

  return (
    <div className="glass-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="options">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <label htmlFor="remember">Remember me</label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit">Login</button>

          <p>
            Don't have an account?{" "}
            <Link to="/mechanicsignup" id="register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Mechaniclogin;
