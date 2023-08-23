import React from 'react';
import './LoginPage.css';

const SignInPage = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default SignInPage;
