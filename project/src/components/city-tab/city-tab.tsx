import cn from 'classnames';
import { City } from '../../types/city';

type CityTabProps = {
  city: City,
  currentCity: City,
  onChangeCity: (city: City) => void,
}


function CityTab({city, currentCity, onChangeCity}: CityTabProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={cn('locations__item-link tabs__item', {'tabs__item--active' : city.name === currentCity.name})}
        href="/#"
        onClick={(evt) => {
          evt.preventDefault();
          onChangeCity(city);
        }}
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}

export default CityTab;
