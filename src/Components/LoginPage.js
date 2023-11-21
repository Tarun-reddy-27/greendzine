import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import logoimage from './group.png'

const LoginPage = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hardcodedCredentials = {
    correctEmail: "admin@gmail.com",
    correctPassword: "admin",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the entered credentials are correct
    if (email === hardcodedCredentials.correctEmail && password === hardcodedCredentials.correctPassword) {
      // Redirect
      Navigate("/home");
    } else {
      // Display an alert for incorrect credentials
      alert("Incorrect credentials. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="formContainer">
        <img src={logoimage} alt="Logo" className="logo" style={{height:'110px', width:'110px' }} />
        <h2 className="tagline">#We Are Electric</h2>
        <form className="form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-mail"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="button">
            Login
          </button>
          <div className="forgotPassword">
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;