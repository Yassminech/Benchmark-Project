import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/apiCalls/PasswordApiCall';
import { FaKey } from 'react-icons/fa';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const { userId, token } = useParams();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(userId, token, password));
  };

  return (
    <div className="reset-password">
      <h2> Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit"><FaKey className="icon" />Reset</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ResetPassword;