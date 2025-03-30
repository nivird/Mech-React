import React, { useState } from "react";

const Mechanicsignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    street: "",
    town: "",
    state: "",
    zip: "",
    carName: "",
    carModel: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted", formData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 signup-container">
          <form onSubmit={handleSubmit} className="p-3 border rounded bg-white shadow">
            <h2 className="text-center mb-3">Sign Up</h2>

            <div className="row g-2 mb-2">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name:</label>
                <input type="text" id="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name:</label>
                <input type="text" id="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="form-label">Email ID (Username):</label>
              <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="form-label">Create Password:</label>
              <input type="password" id="password" className="form-control" value={formData.password} onChange={handleChange} required />
            </div>

            <div className="mb-2">
              <label htmlFor="confirmPassword" className="form-label">Re-enter Password:</label>
              <input type="password" id="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
            </div>

            <div className="mb-2">
              <label htmlFor="street" className="form-label">Address1:</label>
              <input type="text" id="street" className="form-control" value={formData.street} onChange={handleChange} required />
            </div>

            <div className="mb-2">
              <label htmlFor="town" className="form-label">Address2:</label>
              <input type="text" id="town" className="form-control" value={formData.town} onChange={handleChange} required />
            </div>

            <div className="row g-2 mb-2">
              <div className="col-md-6">
                <label htmlFor="state" className="form-label">State:</label>
                <input type="text" id="state" className="form-control" value={formData.state} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label htmlFor="zip" className="form-label">Zip Code:</label>
                <input type="text" id="zip" className="form-control" value={formData.zip} onChange={handleChange} required />
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="carName" className="form-label">Auto-Mechanic: </label>
              <input type="text" id="carName" className="form-control" value={formData.carName} onChange={handleChange} required />
            </div>

            <div className="mb-2">
              <label htmlFor="carModel" className="form-label">Auto-body:</label>
              <input type="text" id="carModel" className="form-control" value={formData.carModel} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-success w-100">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mechanicsignup;
