import { useRef } from 'react';
import useMap from '../../hooks/useMap/useMap';

type MapProps = {
  city: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    },
    name: string,
  },
};

function Map({city}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return (<div style={{height: '100px', width: '100px'}} ref={mapRef}></div>);
}

export default Map;
