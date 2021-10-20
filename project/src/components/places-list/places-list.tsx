import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceListProps = {
  list: Offer[],
  handleMouseMove: (id: number) => void,
  handleMouseMoveOut: () => void,
}

function PlacesList({list, handleMouseMove, handleMouseMoveOut}: PlaceListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {list.map((card: Offer) => <PlaceCard key={card.id} offer={card} onMouseEnter={handleMouseMove} handleMouseMoveOut={handleMouseMoveOut}/>)}
    </div>
  );
}

export default PlacesList;
