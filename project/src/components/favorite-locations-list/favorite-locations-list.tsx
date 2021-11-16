import FavoriteLocationItems from '../favorite-location-items/favorite-location-items';
import { Offer } from '../../types/offer';

type Offers = {
  list: Offer[]
}

const getFavoriteLocationsList = ({ list }: Offers): { [key: string]: Offer[] } => {
  const locationsList: {
    [key: string]: Offer[]
  } = {};
  list.forEach((offer) => {
    if (offer.isFavorite) {
      if (offer.city.name in locationsList) {
        locationsList[offer.city.name].push(offer);
      } else {
        locationsList[offer.city.name] = [];
        locationsList[offer.city.name].push(offer);
      }
    }
  });

  return locationsList;
};

function FavoriteLocationsList({ list }: Offers): JSX.Element {
  const locationsList = getFavoriteLocationsList({ list });
  return (
    <ul className="favorites__list">
      {Object.keys(locationsList).map((destination: string) => (
        <FavoriteLocationItems
          key={destination}
          destination={destination}
          offers={locationsList[destination]}
        />),
      )}
    </ul>
  );
}

export default FavoriteLocationsList;
