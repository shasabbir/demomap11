import Map, { Marker } from "react-map-gl";
import React from "react";
import { useState, useEffect } from "react";

function MapApp() {
  /**
   * Store marker locations in state
   * On click, grab the lngLat from the event
   * and add it to the state.
   */
  const [markers, setMarkers] = useState([]);
  const handleClick = ({ lngLat: [longitude, latitude] }) =>
    setMarkers((markers) => [...markers, { longitude, latitude }]);

  /**
   * Manage viewport in state
   */
  const [viewport, setViewport] = useState({
    latitude: 23.8136,
    longitude: 90.96332,
    zoom: 5.5,
    pitch: 40,
    bearing: 0
  });

  return (
    <Map
      // onClick, capture the pointer event so we can
      // get the lngLat of the click.
      onClick={handleClick}
      // required for interactivity
      width="100vw"
      height="100vh"
      mapboxApiAccessToken="pk.eyJ1IjoiZ2lzZmVlZGJhY2siLCJhIjoiY2l2eDJndmtjMDFkeTJvcHM4YTNheXZtNyJ9.-HNJNch_WwLIAifPgzW2Ig"
      onViewportChange={(viewport) => setViewport(viewport)}
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker
        latitude={23.86185853994233}
        longitude={90.74872380706191}
        offsetLeft={-20}
        offsetTop={-30}
      >
        <img
          style={{ height: 25, width: 25 }}
          alt="ss"
          src="https://xuonginthanhpho.com/wp-content/uploads/2020/03/map-marker-icon.png"
        />
      </Marker>
      <Marker
        latitude={24.86185853994233}
        longitude={91.74872380706191}
        offsetLeft={-20}
        offsetTop={-30}
      >
        <img
          style={{ height: 25, width: 25 }}
          alt="ss"
          src="https://xuonginthanhpho.com/wp-content/uploads/2020/03/map-marker-icon.png"
        />
      </Marker>
      <Marker
        latitude={22.86185853994233}
        longitude={89.74872380706191}
        offsetLeft={-20}
        offsetTop={-30}
      >
        <img
          style={{ height: 25, width: 25 }}
          alt="ss"
          src="https://xuonginthanhpho.com/wp-content/uploads/2020/03/map-marker-icon.png"
        />
      </Marker>
      <Marker
        latitude={24.86185853994233}
        longitude={89.74872380706191}
        offsetLeft={-20}
        offsetTop={-30}
      >
        <img
          style={{ height: 25, width: 25 }}
          alt="ss"
          src="https://xuonginthanhpho.com/wp-content/uploads/2020/03/map-marker-icon.png"
        />
      </Marker>
    </Map>
  );
}
export default MapApp;
