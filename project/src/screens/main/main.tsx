import Header from '../../components/header/header';
import SiteCitiesTabs from '../../components/cities-tabs/cities-tabs';
import PlacesList from '../../components/places-list/places-list';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import { useState } from 'react';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { CITIES } from '../../const';

const mapStateToProps = ({currentCity, offersList}: State) => ({
  currentCity,
  offersList,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Main({offersList, currentCity} : ConnectedComponentProps): JSX.Element {
  const offers = offersList.filter((offer) => offer.city.name === currentCity);
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
              <b className="places__found">{offers.length} places to stay in {currentCity}</b>
              <Sorting/>
              <PlacesList list={offers} handleMouseMove={handleMouseMove} handleMouseMoveOut={handleMouseMoveOut}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={CITIES.find((location) => location.name === currentCity)} offers={offers} selectedPoint={selectedOfferID}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { Main };
export default connector(Main);
