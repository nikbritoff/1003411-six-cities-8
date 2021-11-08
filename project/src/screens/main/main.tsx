import Header from '../../components/header/header';
import SiteCitiesTabs from '../../components/cities-tabs/cities-tabs';
import CitiesBoard from '../../components/cities-board/cities-board';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { sortOffers } from '../../utils/common';
import Loading from '../../components/loading/loading';
import LoadingFailed from '../../components/loading-failed/loading-failed';
import CitiesBoardEmpty from '../../components/cities-board-empty/cities-board-empty';

const mapStateToProps = ({currentCity, offersList, sortingStatus, offersLoading, offersError}: State) => ({
  currentCity,
  offersList,
  sortingStatus,
  offersLoading,
  offersError,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Main({offersList, currentCity, sortingStatus, offersLoading, offersError} : ConnectedComponentProps): JSX.Element {
  const offers = offersList.filter((offer) => offer.city.name === currentCity.name);
  sortOffers(sortingStatus, offers);

  if (offersError) {
    return (
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <SiteCitiesTabs/>
          <LoadingFailed/>
        </main>
      </div>
    );
  }

  if (offersLoading) {
    return (
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <SiteCitiesTabs/>
          <Loading isOffersLoading={offersLoading}/>
        </main>
      </div>
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <SiteCitiesTabs/>
        {offers.length === 0
          ? <CitiesBoardEmpty currentCity={currentCity}/>
          : <CitiesBoard offers={offers} currentCity={currentCity}/>}
      </main>
    </div>
  );
}

export { Main };
export default connector(Main);
