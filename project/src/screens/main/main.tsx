import Header from '../../components/header/header';
import SiteCitiesTabs from '../../components/cities-tabs/cities-tabs';
import CitiesBoard from '../../components/cities-board/cities-board';
import { useSelector } from 'react-redux';
import { sortOffers } from '../../utils/common';
import Loading from '../../components/loading/loading';
import LoadingFailed from '../../components/loading-failed/loading-failed';
import CitiesBoardEmpty from '../../components/cities-board-empty/cities-board-empty';
import { getOffersError, getOffersList, getOffersLoading } from '../../store/offers/selectors';
import { getCurrentCity, getSortingStatus } from '../../store/app-state/selectors';

function ErrorPage({children}: {children: React.ReactNode}) {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <SiteCitiesTabs/>
        {children}
      </main>
    </div>
  );
}

function Main(): JSX.Element {
  const currentCity = useSelector(getCurrentCity);
  const sortingStatus = useSelector(getSortingStatus);
  const offersList = useSelector(getOffersList);
  const offersLoading = useSelector(getOffersLoading);
  const offersError = useSelector(getOffersError);
  const offers = offersList.filter((offer) => offer.city.name === currentCity.name);
  sortOffers(sortingStatus, offers);

  if (offersError) {
    return (
      <ErrorPage>
        <LoadingFailed/>
      </ErrorPage>
    );
  }

  if (offersLoading) {
    return (
      <ErrorPage>
        <Loading isOffersLoading={offersLoading}/>
      </ErrorPage>
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

export default Main;
