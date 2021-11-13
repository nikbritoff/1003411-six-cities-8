import { useState } from 'react';
import Sorting from '../sorting/sorting';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';

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
          <PlacesList list={offers} handleMouseMove={handleMouseMove} handleMouseMoveOut={handleMouseMoveOut}/>
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
