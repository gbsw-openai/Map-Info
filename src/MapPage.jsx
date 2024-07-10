import React, { useState, useEffect, useRef } from 'react';

const MapPage = () => {
  const mapRef = useRef(null); // Ref for the map instance
  const [position, setPosition] = useState(null); // State to store clicked position

  useEffect(() => {
    const initializeMap = () => {
      const container = document.getElementById('map'); // Container to render the map

      if (container && !mapRef.current) {
        const options = {
          center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488), // Initial center coordinates
          level: 3 // Initial zoom level
        };

        mapRef.current = new window.kakao.maps.Map(container, options); // Create map instance
        // Event listener for map click
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
      initializeMap(); // Initialize map if Kakao Maps API is loaded
    }
  }, []); // Dependency array ensures this runs once on mount

  return (
    <div className='map-container'>
      <div id="map" style={{ width: '80%', height: '645px' }}></div>

      <div className='map-info'>
        <div className='map-info-title'>Map Info</div>

        <div className='map-info-contents'>
          {/* Display selected latitude and longitude */}
          {position &&
            <div>
              선택된 주소: 위도 {position.lat}, 경도 {position.lng}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default MapPage;
