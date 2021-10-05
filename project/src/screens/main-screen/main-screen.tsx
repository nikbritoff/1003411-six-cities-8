import SiteHeader from '../../components/header/header';
import SiteCitiesTabs from '../../components/cities-tabs/cities-tabs';
import Places from '../../components/places/places';

type Cards = {
  cards: number[]
};

function MainScreen({cards} : Cards): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <SiteHeader/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <SiteCitiesTabs/>
        <div className="cities">
          <div className="cities__places-container container">
            <Places cards={cards}/>
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
