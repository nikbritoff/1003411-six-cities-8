import FavoriteLocationItems from '../favorite-location-items/favorite-location-items';
import { useSelector } from 'react-redux';
import { selectFavoriteLocationsList } from '../../store/favorites/selectors';

function FavoriteLocationsList(): JSX.Element {
  const locationsList = useSelector(selectFavoriteLocationsList);
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
