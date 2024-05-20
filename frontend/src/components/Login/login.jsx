import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"; 
import './Login.css';
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/apiCalls/authApiCall";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  async function submit(e) {
    e.preventDefault();
    try {
      dispatch(loginUser({ email, password }));
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      if (res.data === "exist") {
        navigate("/home", { state: { id: email } });
      } else if (res.data === "notexist") {
        alert("User does not exist. Please sign up.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred while logging in. Please try again.");
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form>
       <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <FaUser className="icon" />   
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <FaLock className="icon" />
        <button type="submit" onClick={submit}>
          Login
        </button>
      </form>
      <div className="remember-forgot">
        <label><input type="checkbox"/>Remember me</label>
      </div>
      <div className="forgot-password"><span>Lost Password? </span><Link to="/forgot-password">Click here!</Link></div> <p>OR</p> <Link to="/signup">Signup Page</Link>
    </div>
  );
}

export default Login;