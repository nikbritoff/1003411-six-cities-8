import Header from '../../components/header/header';
import SiteCitiesTabs from '../../components/cities-tabs/cities-tabs';
import PlacesList from '../../components/places-list/places-list';
import Sorting from '../../components/sorting/sorting';
import { Offer } from '../../types/offer';
import Map from '../../components/map/map';
import { useState } from 'react';

type Offers = {
  offers: Offer[]
}

const CITY = {
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
  name: 'Amsterdam',
};

function Main({offers} : Offers): JSX.Element {
  const [selectedOfferID, setActiveCard] = useState(0);
  const handleMouseMove = (id: number) => {
    setActiveCard(id);
  };
  const handleMouseMoveOut = () => {
    setActiveCard(0);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <SiteCitiesTabs/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sorting/>
              <PlacesList list={offers} handleMouseMove={handleMouseMove} handleMouseMoveOut={handleMouseMoveOut}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={CITY} offers={offers} selectedPoint={selectedOfferID}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
