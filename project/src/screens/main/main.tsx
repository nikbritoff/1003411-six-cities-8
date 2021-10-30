import Header from '../../components/header/header';
import SiteCitiesTabs from '../../components/cities-tabs/cities-tabs';
import CitiesBoard from '../../components/cities-board/cities-board';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = ({currentCity, offersList}: State) => ({
  currentCity,
  offersList,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Main({offersList, currentCity} : ConnectedComponentProps): JSX.Element {
  const offers = offersList.filter((offer) => offer.city.name === currentCity.name);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <SiteCitiesTabs/>
        <CitiesBoard offers={offers} currentCity={currentCity}/>
      </main>
    </div>
  );
}

export { Main };
export default connector(Main);
