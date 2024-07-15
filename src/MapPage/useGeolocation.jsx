import { useState, useEffect } from 'react';

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
    error: null,
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
      error: null,
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      coordinates: { lat: "", lng: "" },
      error: error.message,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });
  }, []);

  return location;
};

export default useGeoLocation;

// 현재 내위치 가져오기