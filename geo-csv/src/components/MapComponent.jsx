import { React, useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox, InfoWindow } from '@react-google-maps/api';

const MapContainer = (props) => {
  console.log('i am rendered')
  const mapStyles = {
    height: "50vh",
    width: "60%",
  };

  const [currentPosition, setCurrentPosition] = useState({});
  const [searchBox, setSearchBox] = useState({});
  const inputRef = useRef(null);

  const lib = ['places'];

  const onPlacesChanged = () => {
      props.setResults({ results: searchBox.getPlaces() });
  }

  const onSBLoad = ref => {
    setSearchBox(ref);
  };

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
      setCurrentPosition({ lat: 27.773056, lng: -82.639999 });
    }
  }, []);

  // force search
  useEffect(() => {
    console.log('props.search', props.search)
    inputRef?.current?.focus();
    inputRef?.current?.dispatchEvent?.(new KeyboardEvent('keydown', {
      code: 'Enter',
      key: 'Enter',
      charCode: 13,
      keyCode: 13,
      view: window,
      bubbles: true
    }))
  }, [props.search.query])

  return (
    <LoadScript
      libraries={lib}
      googleMapsApiKey='AIzaSyDM4xpe6S_dPwRzxvQ-g2lxVIMZQ3ql2Pg'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}>
        <StandaloneSearchBox
          onLoad={onSBLoad}
          onPlacesChanged={onPlacesChanged}>
          <input
            type="text"
            ref={inputRef}
            value={props.search.query}
            placeholder="Customized your placeholder"
            id="googleMapsQuery"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px"
            }}
          />
        </StandaloneSearchBox>
        {props.results["results"]?.map((result) => {
          console.log(result);
          let lat = result.geometry.location.lat();
          let lng = result.geometry.location.lng();
          return <InfoWindow
            icon={{
              scale: 7,
            }}
            position={{lat,lng}}
          >
            <div id={`window${result.name}`} onClick={() => { document.getElementById(`window${result.name}`).style.position = "absolute"}}><h2>{result.name}</h2></div>
            </InfoWindow>
        })}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer;