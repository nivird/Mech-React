import React from 'react';
import { Link } from 'react-router-dom';

function MechanicLoginPage() {
  return (
    <div className="glass-container">
      <div className="login-box">
        <h2>Login</h2>
        <form action="#" method="POST">
          <input type="text" name="username" required placeholder="Username" />
          <input type="password" name="password" required placeholder="Password" />
          <div className="options">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
            <Link to="/reset-password">Forgot Password?</Link>
          </div>
          <button type="submit">Login</button>
          <p>Don't have an account? <Link to="/MechanicSignup.jsx" id="register">Register</Link></p>
        </form>
      </div>
    </div>
  );
}

export default MechanicLoginPage;