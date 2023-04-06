import { React, useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {

  const [currentPosition, setCurrentPosition] = useState({});

  useEffect(() => {
    // geolocation does not work on unsecure (localhost)
    if (window.location.protocol === 'https:') {
      setCurrentPosition(navigator.geolocation.getCurrentPosition((position) => {
        return ({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      }));
    } else {
      setCurrentPosition({ lat: 27.773056, lng: -82.639999});
    }
  }, []);

  const mapStyles = {
    height: "50vh",
    width: "60%",
  };
  
  return (
    <LoadScript
      googleMapsApiKey='AIzaSyDM4xpe6S_dPwRzxvQ-g2lxVIMZQ3ql2Pg'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition} />
    </LoadScript>
  )
}

export default MapContainer;