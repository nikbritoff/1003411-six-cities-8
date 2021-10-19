import FavoriteCard from '../favorite-card/favorite-card';
import {Offer} from '../../types/offer';

type FavoriteLocationItemsProps = {
  destination: string,
  offers: Offer[]
}

function FavoriteLocationItems({destination, offers}: FavoriteLocationItemsProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{destination}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavoriteCard key={offer.id} offer={offer}/>)}
      </div>
    </li>
  );
}

export default FavoriteLocationItems;
