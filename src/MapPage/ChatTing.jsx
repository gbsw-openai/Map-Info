import React from 'react';

const MapPage = () => {
  return (
    <div className='map-info-chatting'>
      <div className='chat-log'>
        메세지 기록
      </div>

      <div className='chat-input-div'>
        <input className='chat-input'></input>
        <button className='chat-enterBtn'>&#10142;</button>
      </div>
    </div>
  );
};


export default MapPage;
