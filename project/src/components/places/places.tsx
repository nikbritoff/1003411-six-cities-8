import Sorting from '../main-screen/sorting/sorting';
import PlaceCard from '../place-card/place-card';

function Places(stayPlacesAmount: number):JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{stayPlacesAmount} places to stay in Amsterdam</b>
      {Sorting()}
      <div className="cities__places-list places__list tabs__content">
        {PlaceCard()}
        {PlaceCard()}
        {PlaceCard()}
        {PlaceCard()}
        {PlaceCard()}
      </div>
    </section>
  );
}

export default Places;
