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

      </div>
      <div className="profilePage-bio">
        <h3>북마크 내역</h3>
        <p>지역 이름 및 정보</p>
        <p>지역 이름 및 정보</p>
        <p>지역 이름 및 정보</p>
        <p>지역 이름 및 정보</p>
        <p>지역 이름 및 정보</p>
        <p>지역 이름 및 정보</p>
      </div>

      <button className="edit-profile-button">수정</button>
    </div>
  );
}

export default UserProfilePage;
