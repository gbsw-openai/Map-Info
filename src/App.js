import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './Main.jsx';
import MapPage from './MapPage/MapPage.jsx';
import Login from './Login/Login.jsx';
import Signup from './Login/Signup.jsx';
import YesLogin from './Login/YesLogin.jsx';
import NotLogin from './Login/NotLogin.jsx';
import UserProfilePage from './UserProfilePage.jsx';
import Cookies from 'js-cookie';

function App() {
  const [LoginORnot, setLoginORnot] = useState('not-login'); // 로그인 여부. 기본값은 'not-login'

  useEffect(() => { // 페이지 로드 시 쿠키 초기화
    Cookies.remove('chatLog');
    Cookies.remove('mapinfo');
  }, []);

  const LoginOR = (e) => {
    setLoginORnot(e);
  };

  return (
    <Router>
      <header>
        <img alt="Logo" src="img/onlogo.png" style={{ width: '30px' }} />
        <div className="header-menuButton">
          <Link to="/" className='header-mainButton'>MainPage</Link>
          <Link to="/map" className='header-mapButton'>MapPage</Link>
          {LoginORnot === 'login' && <YesLogin />}
          {LoginORnot === 'not-login' && <NotLogin />}
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userProfile" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
  