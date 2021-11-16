import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import CardMark from '../card-mark/card-mark';
import Rating from '../rating/rating';

type CardProps = {
  offer: Offer;
  cardClassName: string;
  cardImageClassName: string,
// Вот эти обработчики нужны тыолько если карточка cardClassName === 'cities__place-card'
  handleMouseMove: (id: number) => void,
  handleMouseMoveOut: () => void,
}

function PlaceCard({offer, cardClassName, cardImageClassName, handleMouseMove, handleMouseMoveOut}: CardProps): JSX.Element {
  return (
    <article
      className={cn('place-card', cardClassName)}
      onMouseEnter={() => handleMouseMove(offer.id)}
      onMouseLeave={() => handleMouseMoveOut()}
    >

      {offer.isPremium && <CardMark className={'place-card__mark'}/>}

      <div className={cn('place-card__image-wrapper', cardImageClassName)}>
        <a href="/#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt={offer.title}
          />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button
            className={
              cn('place-card__bookmark-button', 'button',
                {'place-card__bookmark-button--active' : offer.isFavorite})
            }
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <Rating className={'place-card__stars'} rating={offer.rating}/>
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
