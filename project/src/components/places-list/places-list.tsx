import { Offer } from '../../types/offer';
import CardMark from '../card-mark/card-mark';
import PlaceCard from '../place-card/place-card';

type PlaceListProps = {
  list: Offer[],
  handleMouseMove: (id: number) => void,
  handleMouseMoveOut: () => void,
}

function PlacesList({list, handleMouseMove, handleMouseMoveOut}: PlaceListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {list.map((card: Offer): JSX.Element => (
        <article className="cities__place-card place-card" key={card.id} onMouseEnter={() => handleMouseMove(card.id)} onMouseLeave={() => handleMouseMoveOut()}>
          {card.isPremium && <CardMark/>}
          <div className="cities__image-wrapper place-card__image-wrapper">
            <a href="/#">
              <img className="place-card__image" src={card.previewImage} width="260" height="200" alt={card.title}/>
            </a>
          </div>
          <PlaceCard offer={card}/>
        </article>
      ))}
    </div>
  );
}

export default PlacesList;
