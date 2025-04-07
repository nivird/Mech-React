import { useState } from "react";

const CustomerIntakeForm = () => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (parseInt(formData.year) < 1900 || parseInt(formData.year) > new Date().getFullYear()) {
      alert("Please enter a valid vehicle year.");
      return;
    }
    console.log("Form Submitted:", formData);
    alert("Booking Confirmed!");
  };

  return (
    <div className="container-fluid p-4" style={{ backgroundColor: "#f8f9fa" }}>
    <div className="row align-items-center">
      
      {/* Image - hidden on small screens */}
      <div className="col-md-6 d-none d-md-block">
        <img src="/assets/images/advertise3.PNG" alt="Service Banner" className="img-fluid rounded w-100" />
      </div>
  
      {/* Form - always visible, full width on mobile */}
      <div className="col-12 col-md-6 mt-4 mt-md-0">
        <div className="p-4 border rounded bg-white shadow">
          <h2 className="text-center mb-4">Customer Intake Form</h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Full Name", name: "fullName", type: "text" },
            { label: "Phone Number", name: "phoneNumber", type: "tel", pattern: "[0-9]{10}" },
            { label: "Email", name: "email", type: "email" },
            { label: "Vehicle Make", name: "make", type: "text" },
            { label: "Vehicle Model", name: "model", type: "text" },
            { label: "Year", name: "year", type: "number", min: "1900", max: new Date().getFullYear() },
            { label: "License Plate", name: "licensePlate", type: "text" },
          ].map(({ label, name, type, pattern, min, max }) => (
            <div className="mb-3" key={name}>
              <label className="form-label fw-bold text-dark" style={{ fontSize: "1.1rem" }}>{label}</label>
              <input
                type={type}
                className="form-control"
                name={name}
                placeholder={`Enter ${label}`}
                value={formData[name]}
                onChange={handleChange}
                required
                pattern={pattern}
                min={min}
                max={max}
                style={{ border: "2px solid red", borderRadius: "5px", boxShadow: "inset 3px 3px 5px rgba(0, 0, 0, 0.1)" }}
              />
            </div>
          ))}
          <div className="mb-3">
            <label className="form-label fw-bold text-dark" style={{ fontSize: "1.1rem" }}>Service</label>
            <select className="form-control" name="service" value={formData.service} onChange={handleChange} style={{ border: "2px solid red", borderRadius: "5px", boxShadow: "inset 3px 3px 5px rgba(0, 0, 0, 0.1)" }}>
              <option>Oil Change</option>
              <option>Brake Inspection</option>
              <option>Tire Rotation</option>
              <option>Battery Check</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold text-dark" style={{ fontSize: "1.1rem" }}>Preferred Date</label>
            <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required style={{ border: "2px solid red", borderRadius: "5px", boxShadow: "inset 3px 3px 5px rgba(0, 0, 0, 0.1)" }} />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold text-dark" style={{ fontSize: "1.1rem" }}>Preferred Time</label>
            <input type="time" className="form-control" name="time" value={formData.time} onChange={handleChange} required style={{ border: "2px solid red", borderRadius: "5px", boxShadow: "inset 3px 3px 5px rgba(0, 0, 0, 0.1)" }} />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold text-dark" style={{ fontSize: "1.1rem" }}>Payment Method</label>
            <select className="form-control" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} style={{ border: "2px solid red", borderRadius: "5px", boxShadow: "inset 3px 3px 5px rgba(0, 0, 0, 0.1)" }}>
              <option>Stripe</option>
              <option>CashApp</option>
              <option>Venmo</option>
              <option>PayPal</option>
            </select>
          </div>
          <button type="submit" className="btn btn-danger w-100 fw-bold">Book Now</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CustomerIntakeForm;
