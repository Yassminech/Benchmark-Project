import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { logoutUser } from "../../redux/apiCalls/authApiCall";
import { FaUser, FaSignOutAlt } from "react-icons/fa"; 
import logo from '../../assets/logo.jpeg';


  const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);

    // Logout Handler
    const logoutHandler = () => {
      setDropdown(false);
      dispatch(logoutUser());
    }
  
  
    return (  <header className="header">
    <div className="container">
    <div className="header_logo-title">
    <img src={logo} alt="Company Logo" className="header_logo" />
      <h1 className="header_title">360° MarkBanch</h1>
      </div>
      <nav className="header_nav">
        <ul className="header_nav-list">
          <li className="header_nav-item">
            <Link to="/" className="header_nav-link" >Home</Link>
          </li>
          <li className="header_nav-item">
            <Link to="/about" className="header_nav-link">About</Link>
          </li>
          <li className="header_nav-item">
            <Link to="/features" className="header_nav-link">Features</Link>
          </li>
          <li className="header_nav-item">
            <Link to="/solution" className="header_nav-link">Solutions</Link>
          </li>
          {user ? (
            <li className="header_nav-item">
            <div className="header_nav-link profile-container" onClick={() => setDropdown(!dropdown)}>
            <img 
            src={user.profilePicture} 
            alt={`${user.username}'s profile`} 
            className="profile-picture"
          />
        </div>
            {dropdown && (
            <div className="dropdown-content">
            <Link to={`/profile/${user._id}`} className="dropdown-item">
            <FaUser className="dropdown-icon" /> {/* Icône de profil */}
                 Profile
           </Link>
           <Link to="/logout" className="dropdown-item" onClick={logoutHandler}>
             <FaSignOutAlt className="dropdown-icon" /> {/* Icône de déconnexion */}
               Logout
            </Link>
       </div>
      )}
      </li>
            ) : (
              <li className="header_nav-item">
                <Link to="/login" className="header_nav-link">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
 
export default Navbar;
