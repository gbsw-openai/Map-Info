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
          이름 : 가게 이름<br/>
          영업 시간 : ??:??<br/>
          등등 여러가지 정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
        </div>

        <div className='map-info-window-contents'>
          이름 : 가게 이름<br/>
          영업 시간 : ??:??<br/>
          등등 여러가지 정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
        </div>

        <div className='map-info-window-contents'>
          이름 : 가게 이름<br/>
          영업 시간 : ??:??<br/>
          등등 여러가지 정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
        </div>

        <div className='map-info-window-contents'>
          이름 : 가게 이름<br/>
          영업 시간 : ??:??<br/>
          등등 여러가지 정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
          정보<br/>
        </div>
      </div>
    </>
  );
};

export default MapInfo;
