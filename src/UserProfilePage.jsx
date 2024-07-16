import React from 'react';

function UserProfilePage() {
  return (
    <div className="profilePage-container">
      <div className="profilePage-header">

        <img className="profilePage-avatar"/>

        <div className="profilePage-info">
          <h2 className="profilePage-name">UserName</h2>
          <p className="profilePage-email">user@gmail.com</p>
        </div>

        <button className="edit-profile-button">수정</button>
        <button className='logout-profile-button'>로그아웃</button>

      </div>
      <div className="bookmark">
        <h3>북마크 내역</h3>

        <div className='bookmark-container'>
          <div className='bookmark-bookmark'>지역 이름 및 정보</div>
        </div>

      </div>
    </div>
  );
}

export default UserProfilePage;
