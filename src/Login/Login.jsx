import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      // 서버로 데이터 전송
      const response = await fetch('http://localhost:3001/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: formData.username,
          password: formData.password
        })
      });

      const data = await response.json(); // response.ok 체크 전 데이터 파싱
      if (response.ok && data.token) {
        console.log('로그인 성공');
        console.log('Received token:', data.token); // 서버에서 받은 토큰을 출력합니다.
        navigate("/")
        // 로그인 성공 후 수행할 작업 추가
      } else if (response.status === 401) {
        console.error('로그인 실패:', data.type);
        alert('잘못된 아이디 또는 비밀번호입니다.');
      } else {
        console.error('로그인 실패');
        alert('로그인 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        <div className="login-field">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required placeholder="아이디"/>
        </div>
        <div className="login-field">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required placeholder="비밀번호"/>
        </div>
        <div className="login-field">
          <button type="submit" className="login-button">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
