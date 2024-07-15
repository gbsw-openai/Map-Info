import React from 'react';

function Login() {
  return (
    <div className="login-container">
      
      <form className="login-form">
        <h2 className="login-title">Login</h2>
      
        <div className="login-field">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required placeholder="아이디 또는 이메일"/>
        </div>
        
        <div className="login-field">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required placeholder="비밀번호"/>
        </div>
        
        <div className="login-field">
          <button type="submit" className="login-button">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
