import cn from 'classnames';

type CityTabProps = {
  city: string,
  currentCity: string,
  onChangeCity: (city: string) => void,
}


function CityTab({city, currentCity, onChangeCity}: CityTabProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={cn('locations__item-link tabs__item', {'tabs__item--active' : city === currentCity})}
        href="/#"
        onClick={(evt) => {
          evt.preventDefault();
          onChangeCity(city);
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CityTab;
