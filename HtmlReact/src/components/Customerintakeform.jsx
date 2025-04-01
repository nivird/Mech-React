import { useState } from "react";

const Customerintakeform = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    make: "",
    model: "",
    year: "",
    licensePlate: "",
    service: "Oil Change",
    date: "",
    time: "",
    paymentMethod: "Stripe",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Booking Confirmed!");
    // Add logic to send form data to backend
  };

  return (
    <div className="intake-page">
    <div className="container mt-5">
      <h2>Customer Intake Form</h2>
      <form className="p-4 border rounded" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="text" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Vehicle Make</label>
          <input type="text" className="form-control" name="make" value={formData.make} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Vehicle Model</label>
          <input type="text" className="form-control" name="model" value={formData.model} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Year</label>
          <input type="text" className="form-control" name="year" value={formData.year} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">License Plate</label>
          <input type="text" className="form-control" name="licensePlate" value={formData.licensePlate} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Service</label>
          <select className="form-control" name="service" value={formData.service} onChange={handleChange}>
            <option>Oil Change</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Preferred Date</label>
          <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Preferred Time</label>
          <input type="time" className="form-control" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <select className="form-control" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option>Stripe</option>
            <option>CashApp</option>
            <option>Venmo</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Book Now</button>
      </form>
    </div>
    </div>
  );
};

export default Customerintakeform;
