import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/to-do/authSlice.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload
    dispatch(login());
    navigate("/todo");
  };

  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <form
        className="card p-4 shadow-lg"
        style={{ maxWidth: '400px', width: '100%', height: "50vh" }}
        onSubmit={handleLogin}
      >
        {/* Title */}
        <h3 className="text-center mb-4">Login</h3>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
