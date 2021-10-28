import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import { Marker } from 'leaflet';
import useMap from '../../hooks/useMap/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';

type MapProps = {
  city: City,
  offers: Offer[],
  selectedPoint: number | undefined,
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({city, offers, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint ? currentCustomIcon : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return (<div style={{height: '100%'}} ref={mapRef}></div>);
}

export default Map;
