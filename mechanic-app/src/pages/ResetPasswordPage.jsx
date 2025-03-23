import React from 'react';

function ResetPasswordPage() {
  return (
    <div className="glass-container">
      <div className="login-box">
        <h2>Reset Password</h2>
        <form action="#" method="POST">
          <input type="email" name="email" required placeholder="Enter your email" />
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
