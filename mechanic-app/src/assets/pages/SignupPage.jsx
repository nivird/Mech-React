import React from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div className="glass-container">
      <div className="login-box">
        <h2>Sign Up</h2>
        <form action="#" method="POST">
          <input type="text" name="username" required placeholder="Username" />
          <input type="email" name="email" required placeholder="Email" />
          <input type="password" name="password" required placeholder="Password" />
          <button type="submit">Sign Up</button>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;