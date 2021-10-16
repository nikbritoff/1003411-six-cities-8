import FavoriteLocationItems from '../favorite-location-items/favorite-location-items';
import {Offer} from '../../types/offer';
import { offers } from '../../mock/offers';
import FavoriteCard from '../favorite-card/favorite-card';

type Offers = {
  list: Offer[]
}

const getFavoriteLocationsList = ({list}: Offers): string[] => {
  const locationsList: string[] = [];
  list.forEach((offer) => {
    if (!locationsList.includes(offer.city.name) && offer.isFavorite) {
      locationsList.push(offer.city.name);
    }
  });

  return locationsList;
};

function FavoriteLocationsList({list}: Offers): JSX.Element {
  const locationsList = getFavoriteLocationsList({list});
  console.log(locationsList);

  return (
    <ul className="favorites__list">
      {locationsList.map((destination: string) => <FavoriteLocationItems key={destination} destination={destination} offers={list}/>)}
      {/* <FavoriteLocationItems/>
      <FavoriteLocationItems/> */}
    </ul>
  );
}

export default FavoriteLocationsList;
