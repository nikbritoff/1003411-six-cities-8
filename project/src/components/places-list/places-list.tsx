import PlaceCard from '../place-card/place-card';

type Cards = {
  list: number[]
};

function PlacesList({list}: Cards): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {list.map((card: number) => <PlaceCard key={card}/>)}
    </div>
  );
}

export default PlacesList;
