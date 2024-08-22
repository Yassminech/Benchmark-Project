import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash} from "react-icons/fa"; 
import './Login.css';
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/apiCalls/authApiCall";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Ajout de l'état pour afficher/masquer le mot de passe

  const dispatch = useDispatch();

  async function submit(e) {
    e.preventDefault();
    try {
      dispatch(loginUser({ email, password }));
      const res = await axios.post("http://localhost:8000/api/auth/login", {
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

   // Fonction pour basculer l'affichage du mot de passe
   const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1>Hello!</h1>
        <h3>Sign in to your account</h3>
        <form>
          <div className="input-container">
            <FaUser className="icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className="input-container">
            <FaLock className="icon" />
            <input
              type={showPassword ? "text" : "password"} // Bascule entre le texte et le mot de passe
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <span className="toggle-password" onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Icône d'œil */}
            </span>
          </div>

          <button type="submit" onClick={submit}>
            Login
          </button>
        </form>
        <div className="remember-forgot">
          <label><input type="checkbox"/>Remember me</label>
        </div>
        <div className="password-actions">
          <div className="forgot-password">
            <span>Lost Password? </span>
            <Link to="/forgot-password">Click here!</Link>
          </div>
          <p>OR</p>
          <Link to="/signup">Signup Page</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;