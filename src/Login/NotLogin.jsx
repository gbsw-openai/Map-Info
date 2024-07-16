import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotLogin() {
  const navigate = useNavigate();

  return (
    <>
      <div className="login-div">
        <div className="Signin-Button" onClick={() => navigate('/login')}>Login</div>
        <div className="Register-Button" onClick={() => navigate('/signup')}>Signup</div>
      </div>
    </>
  );
}

export default NotLogin;
