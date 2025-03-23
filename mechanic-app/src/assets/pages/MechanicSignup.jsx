import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/styles.css';


const MechanicSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address1: '',
    address2: '',
    state: '',
    zip: '',
    specialty: '',
    document: null,
    disclaimerAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.disclaimerAccepted) {
      alert("You must accept the terms and conditions.");
      return;
    }

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('/backend/mechanic_signup.php', data);
      if (response.data.success) {
        window.location.href = '/mechanic-profile';
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred during signup');
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 signup-container">
          <form onSubmit={handleSubmit} className="p-3 border rounded bg-white shadow">
            <h2 className="text-center mb-3">Mechanic Sign Up</h2>
            <div className="row g-2 mb-2">
              <div className="col-md-6">
                <label className="form-label">First Name:</label>
                <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name:</label>
                <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="mb-2">
              <label className="form-label">Email ID (Username):</label>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-2">
              <label className="form-label">Create Password:</label>
              <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="mb-2">
              <label className="form-label">Re-enter Password:</label>
              <input type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <div className="mb-2">
              <label className="form-label">Address1:</label>
              <input type="text" name="address1" className="form-control" value={formData.address1} onChange={handleChange} required />
            </div>
            <div className="mb-2">
              <label className="form-label">Address2:</label>
              <input type="text" name="address2" className="form-control" value={formData.address2} onChange={handleChange} required />
            </div>
            <div className="row g-2 mb-2">
              <div className="col-md-6">
                <label className="form-label">State:</label>
                <input type="text" name="state" className="form-control" value={formData.state} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Zip Code:</label>
                <input type="text" name="zip" className="form-control" value={formData.zip} onChange={handleChange} required />
              </div>
            </div>
            <div className="mb-2">
              <label className="form-label">Job Specialty:</label>
              <select name="specialty" className="form-control" value={formData.specialty} onChange={handleChange} required>
                <option value="">Select Specialty</option>
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
                <option value="choice4">Choice 4</option>
                <option value="choice5">Choice 5</option>
                <option value="choice6">Choice 6</option>
                <option value="choice7">Choice 7</option>
                <option value="choice8">Choice 8</option>
                <option value="choice9">Choice 9</option>
                <option value="choice10">Choice 10</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="form-label">Upload Documents:</label>
              <input type="file" name="document" className="form-control border-danger" style={{ borderWidth: '2px' }} onChange={handleChange} required />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" name="disclaimerAccepted" className="form-check-input" checked={formData.disclaimerAccepted} onChange={handleChange} />
              <label className="form-check-label">I accept the <a href="#">terms and conditions</a>.</label>
            </div>
            <button type="submit" className="btn btn-success w-100">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MechanicSignup;
