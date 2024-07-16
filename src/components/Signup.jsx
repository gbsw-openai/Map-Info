import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'; // axios를 사용하여 HTTP 요청을 보낼 예정

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 비밀번호 확인
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    try {
      // 서버로 데이터 전송
      const response = await axios.post('http://localhost:3000/api/user/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      console.log('회원가입 성공:', response.data);
      // 회원가입 성공 후 다음 페이지로 이동하거나 필요한 처리를 추가할 수 있습니다.
      history.push('/login'); // 예시: 로그인 페이지로 이동
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Sign Up</h2>

        <div className="login-field">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required placeholder="아이디" />
        </div>

        <div className="login-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="이메일" />
        </div>

        <div className="login-field">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required placeholder="비밀번호" />
        </div>

        <div className="login-field">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="비밀번호 확인" />
        </div>

        <div className="login-field">
          <button type="submit" className="login-button">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
