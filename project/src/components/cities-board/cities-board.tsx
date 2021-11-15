import { useState } from 'react';
import Sorting from '../sorting/sorting';
import Map from '../../components/map/map';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import PlaceCard from '../offer-card/offer-card';

type CitiesBoardProps = {
  currentCity: City,
  offers: Offer[],
};

function CitiesBoard({offers, currentCity}: CitiesBoardProps): JSX.Element {
  const [selectedOfferID, setActiveCard] = useState(0);
  const handleMouseMove = (id: number) => {
    setActiveCard(id);
  };
  const handleMouseMoveOut = () => {
    setActiveCard(0);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
          <Sorting/>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer: Offer): JSX.Element => (
              <PlaceCard
                key={offer.id}
                offer={offer}
                cardClassName={'cities__place-card'}
                cardImageClassName={'cities__image-wrapper'}
                handleMouseMove={handleMouseMove}
                handleMouseMoveOut={handleMouseMoveOut}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map city={currentCity} offers={offers} selectedPoint={selectedOfferID}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CitiesBoard;
