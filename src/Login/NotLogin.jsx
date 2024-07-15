import React from 'react';

function NotLogin({ ClickPageButtn }) {
  return (
    <>
      <div className="login-div">
        <div className="Signin-Button" onClick={() => ClickPageButtn('login')}>Login</div>
        <div className="Register-Button" onClick={() => ClickPageButtn('signup')}>Signup</div>
      </div>
    </>
  );
}

export default NotLogin;
