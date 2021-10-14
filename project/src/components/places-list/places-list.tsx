import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import {useState} from 'react';

type Offers = {
  list: Offer[]
}

function PlacesList({list}: Offers): JSX.Element {
  const [activeCard, setActiveCard] = useState({});
  const onMouseEnterHandler = (offer: Offer) => {
    setActiveCard(offer);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {list.map((card: Offer) => <PlaceCard key={card.id} offer={card} onMouseEnter={onMouseEnterHandler} />)}
    </div>
  );
}

export default PlacesList;
