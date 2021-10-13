import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type Offers = {
  list: Offer[]
}

function PlacesList({list}: Offers): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {list.map((card: Offer) => <PlaceCard key={card.id} offer={card}/>)}
    </div>
  );
}

export default PlacesList;
