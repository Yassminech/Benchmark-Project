import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import './Signup.css';
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/apiCalls/authApiCall";
import request from "../../utils/request";

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const submit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (fullname.trim() === "") {
            setError("Fullname is required.");
            return;
        }

        if (password.trim() === "") {
            setError("Password is required.");
            return;
        }

        try {
            const response = await request.post('/api/auth/register', { email, fullname, password });

            if (response.status === 200 || response.status === 201) {
                dispatch(registerUser({ email, fullname, password }));
                navigate("/", { state: { id: email } });
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("An unexpected error occurred.");
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="signup-container">
            <div className="signup">
                <h1>Welcome!</h1>
                <h3>Create your account</h3>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={submit}>
                    <div className="input-container">
                        <FaEnvelope className="icon" />
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email" 
                        />
                    </div>
                    <div className="input-container">
                        <FaUser className="icon" />
                        <input 
                            type="text" 
                            value={fullname} 
                            onChange={(e) => setFullname(e.target.value)} 
                            placeholder="Fullname" 
                        />
                    </div>
                    <div className="input-container">
                        <FaLock className="icon" />
                        <input 
                            type={showPassword ? "text" : "password"} 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password" 
                        />
                        <span onClick={togglePasswordVisibility} className="toggle-password">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <button type="submit">Signup</button>
                </form>
                <br />
                <p className="divider">OR</p>
                <Link to="/login" className="login-link">Login Page</Link>
            </div>
        </div>
    );
}

export default Signup;