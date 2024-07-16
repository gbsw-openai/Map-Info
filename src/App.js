import React, { useState } from 'react';
import Main from './Main.jsx';
import MapPage from './MapPage/MapPage.jsx';
import Login from './Login/Login.jsx';
import Signup from './Login/Signup.jsx';
import YesLogin from './Login/YesLogin.jsx';
import NotLogin from './Login/NotLogin.jsx';
import UserProfilePage from './UserProfilePage.jsx';

function App() {
  const [Page, setCurrentPage] = useState('main'); // 기본값은 'main'
  const [LoginORnot, setLoginORnot] = useState('login'); // 로그인 여부. 기본값은 'not-login'

  const ClickPageButtn = (page) => {
    setCurrentPage(page);
  };

  const LoginOR = (e) => {
    setLoginORnot(e);
  };

  return (
    <>
      <header>
        <img alt="Logo" src="img/onlogo.png" style={{width: '30px'}}/>
        <div className="header-menuButton">
          <div onClick={() => ClickPageButtn('main')}>MainPage</div>
          <div onClick={() => ClickPageButtn('map')}>MapPage</div>
          {LoginORnot === 'login' && <YesLogin ClickPageButtn={ClickPageButtn}/>}
          {LoginORnot === 'not-login' && <NotLogin ClickPageButtn={ClickPageButtn} />}
        </div>
      </header>

      {Page === 'main' && <Main />}
      {Page === 'map' && <MapPage />}
      {Page === 'login' && <Login />}
      {Page === 'signup' && <Signup />}
      {Page === 'userProfile' && <UserProfilePage />}
    </>
  );
}

export default App;
