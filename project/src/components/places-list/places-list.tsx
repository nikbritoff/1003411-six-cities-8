import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
// import {useState} from 'react';

type PlaceListProps = {
  list: Offer[],
  handleMouseMove: (id: number) => void,
}

function PlacesList({list, handleMouseMove}: PlaceListProps): JSX.Element {
  // const [, setActiveCard] = useState({});
  // const handleMouseMove = (id: number) => {
  //   setActiveCard(id);
  // };

  return (
    <div className="cities__places-list places__list tabs__content">
      {list.map((card: Offer) => <PlaceCard key={card.id} offer={card} onMouseEnter={handleMouseMove} />)}
    </div>
  );
}

export default PlacesList;
