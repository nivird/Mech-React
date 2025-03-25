import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CustomerLoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "", remember: false });
  const [error, setError] = useState(""); // State to store error messages
  const navigate = useNavigate(); // Hook to navigate after login

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: formData.username, password: formData.password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store token if authentication is successful
      localStorage.setItem("authToken", data.token);

      // Redirect user after login
      navigate("/dashboard"); // Change '/dashboard' to the actual route you want
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="glass-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="username" 
            required 
            placeholder="Username"
            value={formData.username}
            onChange={handleChange} 
          />
          <input 
            type="password" 
            name="password" 
            required 
            placeholder="Password"
            value={formData.password}
            onChange={handleChange} 
            autoComplete="off"
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
            <Link to="/reset-password">Forgot Password?</Link>
          </div>
          <button type="submit">Login</button>
          <p>Don't have an account? <Link to="/CustomerSignup">Register</Link></p>
        </form>
      </div>
    </div>
  );
}

export default CustomerLoginPage;
