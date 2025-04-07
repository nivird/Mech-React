import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const token = "K97w5msvhKQxq6F3ilEYs2bnYh9Cp8gHjxpudp1a";

      await axios.post("http://your-laravel-domain.com/api/contact", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setStatus("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
              {status && <p className="text-center mt-3">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
