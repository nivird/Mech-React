import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MechanicLoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/backend/mechanic_login.php', formData);

      if (response.data.success) {
        localStorage.setItem('authToken', response.data.token); // Store token
        window.location.href = '/mechanic-dashboard'; // Redirect to dashboard
      } else {
        alert(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <div className="glass-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
            placeholder="Username" 
          />
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
            placeholder="Password" 
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
          <p>Don't have an account? <Link to="/mechanic-signup" id="register">Register</Link></p>
        </form>
      </div>
    </div>
  );
}

export default MechanicLoginPage;
