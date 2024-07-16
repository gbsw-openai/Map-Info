import React, { useState, useEffect, useRef } from 'react';
import useGeoLocation from "./useGeolocation.jsx";
import MapInfo from "./MapInfo.jsx";
import ChatTing from "./Chating.jsx";
import Cookies from 'js-cookie';

const MapPage = () => {
  const location = useGeoLocation();
  const mapRef = useRef(null);
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState('');
  const [Page, setPage] = useState('map-info');

  // 페이지 변경 함수
  const ClickChangeBtn = (page) => {
    setPage(page);
  };

  useEffect(() => { // 초기화가 안되어서 여기에 초기화를 한번더함
    Cookies.remove('mapinfo');
  }, []);

  // 위치 정보 쿠키
  useEffect(() => {
    if (position) {
      Cookies.set('mapinfo', JSON.stringify(position), { expires: 1 });
    }
  }, [position]);

  // 페이지 로드 시 쿠키에서 위치 정보를 가져오기
  useEffect(() => {
    const storedPosition = Cookies.get('mapinfo');
    if (storedPosition) {
      setPosition(JSON.parse(storedPosition));
    }
  }, []);

  // 지도 초기화 및 클릭 이벤트 설정
  useEffect(() => {
    const initializeMap = (latitude, longitude) => {
      const container = document.getElementById('map');

      if (container && !mapRef.current) {
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 2
        };

        mapRef.current = new window.kakao.maps.Map(container, options);

        window.kakao.maps.event.addListener(mapRef.current, 'click', function(mouseEvent) {
          const latlng = mouseEvent.latLng;
          setPosition({
            lat: latlng.getLat(),
            lng: latlng.getLng()
          });
        });
      }
    };

    if (window.kakao && window.kakao.maps) {
      if (location.loaded) {
        if (!location.error) {
          initializeMap(location.coordinates.lat, location.coordinates.lng);
        } else {
          initializeMap(37.5668174446949, 126.97864943098769); // 기본 위치 (서울 시청)
        }
      }
    }
  }, [location]);

  // 좌표를 주소로 변환
  useEffect(() => {
    const getAddress = (lat, lng) => {
      let geocoder = new window.kakao.maps.services.Geocoder();
      let coord = new window.kakao.maps.LatLng(lat, lng);

      let callback = function(result, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          if (result.length > 0) {
            const filteredResult = result.find(r => r.address_type === 'ROAD_ADDR') || result[0];
            setAddress(filteredResult.address.address_name);
          }
        }
      };

      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    };

    if (position) {
      getAddress(position.lat, position.lng);
    }
  }, [position]);

  return (
    <div className='map-container'>
      <div id="map" style={{ width: '80%', height: '642px' }}></div>

      <div className='map-info'>
        <div className='map-info-title'>Map Info</div>

        <div className='map-info-changeBtn'>
          <div className="changeBtn" onClick={() => ClickChangeBtn('map-info')}>Map-Info</div>
          <div className="changeBtn" onClick={() => ClickChangeBtn('chatTing')}>ChaTing</div>
        </div>

        {Page === 'map-info' && <MapInfo position={position} address={address} />}
        {Page === 'chatTing' && <ChatTing />}

      </div>
    </div>
  );
};

export default MapPage;
