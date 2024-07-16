import React from 'react';
import { useNavigate } from 'react-router-dom';

function YesLogin() {
  const navigate = useNavigate();

  return (
    <>
      <div className='user-profile' onClick={() => navigate('/userProfile')}>
        <div className='user-profile-name'>UserName</div>
        <img className="user-profile-profile" alt="User Profile" />
      </div>
    </>
  );
}

export default YesLogin;
