import React from 'react';

const MapInfo = ({ position, address }) => {
  return (
    <>
      <div className='map-info-location'>
        선택된 위치 정보<br/>
        위도: {position && position.lat}<br/>
        경도: {position && position.lng}<br/>
        주소: {address}
      </div>

      <div className='map-info-window'>

        <div className='map-info-window-contents'>
          <div class="bookmark-button">
            <img class="bookmark-icon" alt="Logo" src="img/bookmark-icon.png" style={{ width: '40px' }} />
          </div>
          <div class="store-info">
            {/* 예시 입니다. */}
            이름<br/>
            영업 시간<br/>
            전화번호<br/>
            가게상세위치<br/>
            건물종류<br/>
            가격<br/>
            서비스 제공 여부<br/>
            인기 메뉴 또는 상품<br/>
            등등<br/>
          </div>
        </div>

        <div className='map-info-window-contents'>
          <div class="bookmark-button">
            <img class="bookmark-icon" alt="Logo" src="img/bookmark-icon.png" style={{ width: '40px' }} />
          </div>
          <div class="store-info">
            {/* 예시 입니다. */}
            이름<br/>
            영업 시간<br/>
            전화번호<br/>
            가게상세위치<br/>
            건물종류<br/>
            가격<br/>
            서비스 제공 여부<br/>
            인기 메뉴 또는 상품<br/>
            등등<br/>
          </div>
        </div>

        <div className='map-info-window-contents'>
          <div class="bookmark-button">
            <img class="bookmark-icon" alt="Logo" src="img/bookmark-icon.png" style={{ width: '40px' }} />
          </div>
          <div class="store-info">
            {/* 예시 입니다. */}
            이름<br/>
            영업 시간<br/>
            전화번호<br/>
            가게상세위치<br/>
            건물종류<br/>
            가격<br/>
            서비스 제공 여부<br/>
            인기 메뉴 또는 상품<br/>
            등등<br/>
          </div>
        </div>

      </div>
    </>
  );
};

export default MapInfo;
