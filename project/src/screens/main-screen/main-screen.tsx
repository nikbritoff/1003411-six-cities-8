import Header from '../../components/header/header';
import SiteCitiesTabs from '../../components/cities-tabs/cities-tabs';
import PlacesList from '../../components/places-list/places-list';
import Sorting from '../../components/sorting/sorting';

type Cards = {
  cards: number[]
};

function MainScreen({cards} : Cards): JSX.Element {
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
              <b className="places__found">{cards.length} places to stay in Amsterdam</b>
              <Sorting/>
              <PlacesList list={cards}/>
            </section>
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
