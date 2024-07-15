import React from 'react';

function YesLogin({ ClickPageButtn }) {
  return (
    <>
      <div className='user-profile' onClick={() => ClickPageButtn('userProfile')}>
        <div className='user-profile-name'>UserName</div>
        <img className="user-profile-profile"/>
      </div>
    </>
  );
}

export default YesLogin;
