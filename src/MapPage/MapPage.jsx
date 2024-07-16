import React, { useState, useEffect, useRef } from 'react';
import useGeoLocation from "./useGeolocation.jsx";
import MapInfo from "./MapInfo.jsx";
import ChatTing from "./Chating.jsx";


const MapPage = () => {
  const location = useGeoLocation();
  const mapRef = useRef(null); // 지도 인스턴스를 저장할 변수
  const [position, setPosition] = useState(null); // 사용자가 클릭한 위치의 좌표를 저장할 상태
  const [address, setAddress] = useState(''); // 주소 정보를 저장할 상태
  const [Page, setPage] = useState('map-info'); // 기본값은 'map-info'

  const ClickChangeBtn = (page) => {
    setPage(page);
  };

  useEffect(() => { // 지도 초기화 함수
    const initializeMap = (latitude, longitude) => {
      const container = document.getElementById('map'); // 'map'이라는 ID를 가진 DOM 요소를 찾아서 container 변수에 할당

      // 초기 중심 좌표와 확대 수준을 설정한 options 객체
      if (container && !mapRef.current) {
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 2 // 더 높은 확대 수준으로 변경하여 더 세밀한 지도를 표시
        };

        // 카카오 지도 인스턴스 생성 및 mapRef.current에 할당
        mapRef.current = new window.kakao.maps.Map(container, options);

        // 지도 클릭 이벤트 리스너 생성
        window.kakao.maps.event.addListener(mapRef.current, 'click', function(mouseEvent) {
          const latlng = mouseEvent.latLng; // 클릭한 위치의 좌표를 latlng 변수에 저장
          setPosition({
            lat: latlng.getLat(),
            lng: latlng.getLng()
          });
        });
      }
    };

    // window.kakao와 window.kakao.maps가 정의되어 있으면 initializeMap 함수 호출
    if (window.kakao && window.kakao.maps) {
      if (location.loaded) {
        if (!location.error) { //위치정보를 가져 왔다면
          initializeMap(location.coordinates.lat, location.coordinates.lng);
        } else {
          initializeMap( 37.5668174446949 , 126.97864943098769); // 기본 위치 (서울 특별 시청)
        }
      }
    }
  }, [location]);


  //=======================================================================================================================


  useEffect(() => { // 주소 변환 함수
    const getAddress = (lat, lng) => { // 주소-좌표 변환 객체
      let geocoder = new window.kakao.maps.services.Geocoder();

      let coord = new window.kakao.maps.LatLng(lat, lng);
      let callback = function(result, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          if (result.length > 0) {
            // 여러 결과 중 더 정확한 주소를 선택
            const filteredResult = result.find(r => r.address_type === 'ROAD_ADDR') || result[0];
            setAddress(filteredResult.address.address_name);
          }
        }
      };

      // 좌표를 주소로 변환
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    };

    // position 상태가 변경되면 getAddress 함수 호출
    if (position) {
      getAddress(position.lat, position.lng);
    }
  }, [position]); // position 상태가 변경될 때마다 실행

  return (
    <div className='map-container'>
      <div id="map" style={{ width: '80%', height: '642px' }}></div>

      <div className='map-info'>
        <div className='map-info-title'>Map Info</div>

        <div className='map-info-changeBtn'>
          <div className="changeBtn" onClick={() => ClickChangeBtn('map-info')}>Map Info</div>
          <div className="changeBtn" onClick={() => ClickChangeBtn('chatTing')}>ChatTing</div>
        </div>

        {Page === 'map-info' && <MapInfo position={position} address={address} />}
        {Page === 'chatTing' && <ChatTing />}

      </div>
    </div>
  );
};


export default MapPage;