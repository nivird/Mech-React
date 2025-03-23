import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CustomerSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address1: '',
    address2: '',
    state: '',
    zip: '',
    carName: '',
    carModel: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('/backend/signup.php', formData);
      if (response.data.success) {
        // Auto-login (simplified) and redirect
        // In a real app, store token or session info securely
        navigate('/customer-profile');
      } else {
        alert(response.data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred during signup.');
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="p-4 border rounded bg-white shadow" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Sign Up</h2>
            <div className="row g-2 mb-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" required />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email ID</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Address1</label>
              <input type="text" name="address1" value={formData.address1} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Address2</label>
              <input type="text" name="address2" value={formData.address2} onChange={handleChange} className="form-control" required />
            </div>
            <div className="row g-2 mb-3">
              <div className="col-md-6">
                <label className="form-label">State</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Zip Code</label>
                <input type="text" name="zip" value={formData.zip} onChange={handleChange} className="form-control" required />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Car Name</label>
              <input type="text" name="carName" value={formData.carName} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Car Model</label>
              <input type="text" name="carModel" value={formData.carModel} onChange={handleChange} className="form-control" required />
            </div>
            <button type="submit" className="btn btn-success w-100">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerSignup;
