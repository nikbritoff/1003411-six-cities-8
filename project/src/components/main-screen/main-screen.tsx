import SiteHeader from '../site-header/site-header';
import SiteCitiesTabs from '../site-cities-tabs/site-cities-tabs';
import Places from '../places/places';
import { MainScreenProps } from '../../types/main-screen';

function MainScreen(props : MainScreenProps):JSX.Element {
  const stayPlacesAmount = props.stayPlacesAmount;

  return (
    <div className="page page--gray page--main">
      {SiteHeader()}

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        {SiteCitiesTabs()}
        <div className="cities">
          <div className="cities__places-container container">
            {Places(stayPlacesAmount)}
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
