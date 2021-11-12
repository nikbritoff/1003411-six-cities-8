import { Offer } from '../../types/offer';
import CardMark from '../card-mark/card-mark';
import PlaceCard from '../place-card/place-card';

type NearPlacesListProps = {
  nearOffers: Offer[];
}

function NearPlacesList({nearOffers}: NearPlacesListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {nearOffers.map((nearby): JSX.Element => (
        <article className="near-places__card place-card" key={nearby.id}>
          {nearby.isPremium && <CardMark/>}
          <div className="near-places__image-wrapper place-card__image-wrapper">
            <a href="/#">
              <img className="place-card__image" src={nearby.previewImage} width="260" height="200" alt={nearby.title}/>
            </a>
          </div>
          <PlaceCard offer={nearby}/>
        </article>

      ))}
    </div>
  );
}

export default NearPlacesList;
