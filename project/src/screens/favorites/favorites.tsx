import Header from '../../components/header/header';
import FavoriteLocationsList from '../../components/favorite-locations-list/favorite-locations-list';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites, getFavoritesError, getFavoritesLoading } from '../../store/favorites/selectors';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/api-actions';
import Loading from '../../components/loading/loading';
import LoadingFailed from '../../components/loading-failed/loading-failed';

function ErrorPage({children}: {children: React.ReactNode}) {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            {children}
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

function Favorites(): JSX.Element  {
  const dispatch = useDispatch();
  const isFavoritesLoading = useSelector(getFavoritesLoading);
  const isFavoritesError = useSelector(getFavoritesError);
  const favoriteOffers = useSelector(getFavorites);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  if (isFavoritesLoading) {
    return(
      <ErrorPage>
        <Loading isOffersLoading={isFavoritesLoading}/>
      </ErrorPage>
    );
  }

  if (isFavoritesError) {
    return(
      <ErrorPage>
        <LoadingFailed/>
      </ErrorPage>
    );
  }

  if (favoriteOffers.length === 0) {
    return (
      <FavoritesEmpty/>
    );
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteLocationsList/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
