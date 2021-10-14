import FavoriteLocationItems from '../favorite-location-items/favorite-location-items';
import {Offer} from '../../types/offer';

type Offers = {
  list: Offer[]
}

function FavoriteLocationsList({list}: Offers): JSX.Element {
  // const locationsList = new Set

  return (
    <ul className="favorites__list">
      <FavoriteLocationItems/>
      <FavoriteLocationItems/>
    </ul>
  );
}

export default FavoriteLocationsList;
