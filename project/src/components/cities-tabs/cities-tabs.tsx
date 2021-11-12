import { CITIES } from '../../const';
import CityTab from '../city-tab/city-tab';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch} from 'redux';
import { State } from '../../types/state';
import { changeCity } from '../../store/action';
import { City } from '../../types/city';

const mapStateToProps = ({MAIN}: State) => ({
  currentCity: MAIN.currentCity,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeCity(city: City) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function SiteCitiesTabs({currentCity, onChangeCity}: ConnectedComponentProps): JSX.Element  {
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

export { SiteCitiesTabs };
export default connector(SiteCitiesTabs);
