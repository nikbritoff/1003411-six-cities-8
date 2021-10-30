import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import { Marker } from 'leaflet';
import useMap from '../../hooks/useMap/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';
// import {TileLayer} from 'leaflet';

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
      map.setView(
        {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        city.location.zoom,
      );
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
    return () => {
      // console.log(map);
      // if (map) {
      //   map.eachLayer((mark) => mark.remove());
      //   const layer = new TileLayer(
      //     'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      //     {
      //       attribution:
      //         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      //     },
      //   );
      //   map.addLayer(layer);
      // }
    };
  }, [map, offers, selectedPoint, city]);

  return (
    <section className="cities__map map">
      <div style={{height: '100%'}} ref={mapRef}></div>
    </section>
  );
}

export default Map;
