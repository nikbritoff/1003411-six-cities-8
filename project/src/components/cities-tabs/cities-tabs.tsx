import { CITIES } from '../../const';
import CityTab from '../city-tab/city-tab';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../store/action';
import { City } from '../../types/city';
import { getCurrentCity } from '../../store/app-state/selectors';

function SiteCitiesTabs(): JSX.Element  {
  const dispatch = useDispatch();

  const currentCity = useSelector(getCurrentCity);
  const onChangeCity = (city: City) => {
    dispatch(changeCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city: City) => <CityTab city={city} key={city.name} currentCity={currentCity} onChangeCity={onChangeCity}/>)}
        </ul>
      </section>
    </div>
  );
}

export default SiteCitiesTabs;
