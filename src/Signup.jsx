import React from 'react';

function Signup() {
  return (
    <div className="login-container">
      
      <form className="login-form">
        <h2 className="login-title">Sign Up</h2>
      
        <div className="login-field">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required placeholder="아이디"/>
        </div>
        
        <div className="login-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="이메일"/>
        </div>

        <div className="login-field">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required placeholder="비밀번호"/>
        </div>

        <div className="login-field">  
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required placeholder="비밀번호 확인"/>
        </div>
        
        <div className="login-field">
          <button type="submit" className="login-button">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
