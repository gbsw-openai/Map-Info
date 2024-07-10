import React, { useState } from 'react';
import Main from './Main.jsx';
import MapPage from './MapPage.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

function App() {
  const [Page, setCurrentPage] = useState('main'); // 기본값은 'main'

  const ClickPageButtn = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <header>
        <img alt="Logo" href="./public/logo.png"/>
        <div className="header-menuButton">
          <div onClick={() => ClickPageButtn('main')}>MainPage</div>
          <div onClick={() => ClickPageButtn('map')}>MapPage</div>
          <div>Page</div>
          <div>Page</div>
          <div className="login-div">
            <div className="Signin-Button" onClick={() => ClickPageButtn('login')}>Login</div>
            <div className="Register-Button" onClick={() => ClickPageButtn('signup')}>Signup</div>
          </div>
        </div>
      </header>

      {Page === 'main' && <Main />}
      {Page === 'map' && <MapPage />}
      {Page === 'login' && <Login />}
      {Page === 'signup' && <Signup />}
    </>
  );
}

export default App;
