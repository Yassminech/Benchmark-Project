import React, { useState } from 'react';
import './ForgetPassword.css';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/apiCalls/PasswordApiCall";
import { FaEnvelope} from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
      e.preventDefault();
      if(email.trim() === "") {
          toast.error("Email is required");
          return;
      }
      dispatch(forgotPassword(email));
  };

  return (
      <form onSubmit={formSubmitHandler}>
          <label><FaEnvelope className="icon" /> Email:</label>
          <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Submit</button>
      </form>
  );
};

export default ForgotPassword;