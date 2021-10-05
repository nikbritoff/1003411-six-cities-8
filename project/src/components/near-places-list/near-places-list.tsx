import NearPlaceCard from '../near-place-card/near-place-card';

function NearPlacesList(): JSX.Element {
  return (
    <div className="near-places__list places__list">
      <NearPlaceCard/>
      <NearPlaceCard/>
      <NearPlaceCard/>
    </div>
  );
}

export default NearPlacesList;
