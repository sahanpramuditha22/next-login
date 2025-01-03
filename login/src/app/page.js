// pages/login.js
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";


export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <LoginForm />
        <div className="login-social">
          <h2 className="social-title">Or login with</h2>
          <div className="social-buttons">
            <button
              onClick={() => signIn("google")}
              className="btn-google"
            >
              Login with Google
            </button>
            <button
              onClick={() => signIn("facebook")}
              className="btn-facebook"
            >
              Login with Facebook
            </button>
            <button
              onClick={() => signIn("linkedin")}
              className="btn-linkedin"
            >
              Login with LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function LoginForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Mock authentication logic (replace with API call)
    alert(`Logging in with Username: ${username}, Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <input
        type="text"
        className="input-field"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        className="input-field"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="input-field"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn-primary">
        Login
      </button>
    </form>
  );
}
