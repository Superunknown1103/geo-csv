import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styles from '../css/MapComponent.module.css';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "50vh",
    width: "60%",
};
  
  const defaultCenter = {
    lat: 27.773056,  lng: -82.639999
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDM4xpe6S_dPwRzxvQ-g2lxVIMZQ3ql2Pg'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;