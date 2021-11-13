import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { convertRating } from '../../utils/common';
import cn from 'classnames';

type CardProps = {
  offer: Offer,
}

function PlaceCard({offer}: CardProps): JSX.Element {
  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={cn('place-card__bookmark-button', 'button', {'place-card__bookmark-button--active' : offer.isFavorite})} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${convertRating(offer.rating)}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${offer.id}`}>
          {offer.title}
        </Link>
      </h2>
      <p className="place-card__type">{offer.type.split('').map((char, index) => index === 0 ? char.toUpperCase() : char)}</p>
    </div>
  );
}

export default PlaceCard;
