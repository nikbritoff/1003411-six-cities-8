import Sorting from '../sorting/sorting';
import PlaceCard from '../place-card/place-card';

type Cards = {
  cards: number[]
};

function Places({cards}: Cards): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{cards.length} places to stay in Amsterdam</b>
      <Sorting/>
      <div className="cities__places-list places__list tabs__content">
        {cards.map((card: number) => <PlaceCard key={card}/>)}
      </div>
    </section>
  );
}

export default Places;
