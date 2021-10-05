import FavoriteLocationItems from '../favorite-location-items/favorite-location-items';

function FavoriteLocationsList(): JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoriteLocationItems/>
      <FavoriteLocationItems/>
    </ul>
  );
}

export default FavoriteLocationsList;
