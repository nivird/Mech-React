import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bannerImg from "/assets/images/Logocozy-office.jpg"; // Ensure the image is in your assets folder

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Login Data:", formData);
      // Add your login logic here (e.g., API call)
      setLoading(false);
      navigate("/"); // Navigate to home page on success
    } catch (error) {
      setLoading(false);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center bg-light">
      <div className="row w-100">
        {/* Left Side - Banner Image */}
        <div className="col-md-6 d-none d-md-block">
          <img
            src={bannerImg}
            alt="Login Banner"
            className="img-fluid"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div
            className="login-box p-4 rounded"
            style={{
              width: "400px",
              backgroundColor: "white",
              boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 className="text-center mb-3">Login</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              {/* Username Input */}
              <div className="mb-3">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  required
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  style={{
                    height: "45px",
                    border: "1.5px solid #ff5733",
                    borderRadius: "8px",
                    padding: "8px",
                  }}
                />
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  required
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  style={{
                    height: "45px",
                    border: "1.5px solid #ff5733",
                    borderRadius: "8px",
                    padding: "8px",
                  }}
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="remember"
                    className="ms-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-danger"
                  style={{ textDecoration: "none", fontSize: "0.9rem" }}
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-danger w-100 fw-bold"
                style={{ padding: "10px", fontSize: "1rem" }}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* Register Link */}
              <p className="text-center mt-3" style={{ fontSize: "0.9rem" }}>
                Don't have an account?{" "}
                <Link
                  to="/customersignup"
                  className="text-danger fw-bold"
                  style={{ fontSize: "0.9rem" }}
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
