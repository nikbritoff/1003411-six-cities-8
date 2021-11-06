import Header from '../../components/header/header';
import SiteCitiesTabs from '../../components/cities-tabs/cities-tabs';
import CitiesBoard from '../../components/cities-board/cities-board';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { sortOffers } from '../../utils/common';
import Loading from '../../components/loading/loading';
import LoadingFailed from '../../components/loading-failed/loading-failed';

const mapStateToProps = ({currentCity, offersList, sortingStatus, offersLoading, offersSuccess, offersError}: State) => ({
  currentCity,
  offersList,
  sortingStatus,
  offersLoading,
  offersError,
  offersSuccess,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Main({offersList, currentCity, sortingStatus, offersLoading, offersSuccess, offersError} : ConnectedComponentProps): JSX.Element {
  const offers = offersList.filter((offer) => offer.city.name === currentCity.name);
  sortOffers(sortingStatus, offers);

  let content = <Loading isOffersLoading={offersLoading}/>;
  if (offersSuccess) {
    content = <CitiesBoard offers={offers} currentCity={currentCity}/>;
  }
  if (offersError) {
    content = <LoadingFailed/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <SiteCitiesTabs/>
        {content}
      </main>
    </div>
  );
}

export { Main };
export default connector(Main);
