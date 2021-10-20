import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { convertRating } from '../../utils/common';
import CardMark from '../card-mark/card-mark';
import classNames from 'classnames';

type CardProps = {
  offer: Offer,
  onMouseEnter: (id: number) => void,
  handleMouseMoveOut: () => void,
}

function PlaceCard({offer, onMouseEnter, handleMouseMoveOut}: CardProps): JSX.Element {
  return (
    <article className="cities__place-card place-card" onMouseEnter={() => onMouseEnter(offer.id)} onMouseLeave={() => handleMouseMoveOut()}>
      {offer.isPremium ? <CardMark/> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.title}/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={classNames('place-card__bookmark-button', 'button', {'place-card__bookmark-button--active' : offer.isFavorite})} type="button">
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
    </article>
  );
}

export default PlaceCard;
