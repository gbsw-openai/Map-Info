import React from 'react';

function UserProfilePage() {
  return (
    <div className="profilePage-container">
      <div className="profilePage-header">
        <img className="profilePage-avatar" alt="User Profile" />

        <div className="profilePage-info">
          <h2 className="profilePage-name">UserName</h2>
          <p className="profilePage-email">user@gmail.com</p>
        </div>

        <button className="edit-profile-button">수정</button>
        <button className='logout-profile-button'>로그아웃</button>

      </div>
      <div class="bookmark">
  <h3>북마크 내역</h3>

  <div class="bookmark-container">
    <div class="bookmark-info">지역 이름</div>

    <div class="bookmark-button-group">
      <div class="find-bookmarkButton">찾기</div>
      <div class="delete-bookmarkButton">삭제</div>
    </div>
  </div>

  <div class="bookmark-container">
    <div class="bookmark-info">지역 이름</div>

    <div class="bookmark-button-group">
      <div class="find-bookmarkButton">찾기</div>
      <div class="delete-bookmarkButton">삭제</div>
    </div>
  </div>

  <div class="bookmark-container">
    <div class="bookmark-info">지역 이름</div>

    <div class="bookmark-button-group">
      <div class="find-bookmarkButton">찾기</div>
      <div class="delete-bookmarkButton">삭제</div>
    </div>
  </div>


</div>

    </div>
  );
}

export default UserProfilePage;
