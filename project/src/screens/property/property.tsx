import Header from '../../components/header/header';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import PropertyFeaturesList from '../../components/property-features-list/property-features-list';
import PropertyInsideList from '../../components/property-inside-list/property-inside-list';
import PropertyReviewsList from '../../components/property-reviews-list/property-reviews-list';
import PropertyNewReview from '../../components/property-new-review/property-new-review';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import { useParams } from 'react-router';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
// import {  useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/loading/loading';
import LoadingFailed from '../../components/loading-failed/loading-failed';
import { convertRating } from '../../utils/common';
import NotFound from '../not-found/not-found';
import Map from '../../components/map/map';
import { fetchNearbyAction, fetchPropertyAction, fetchReviewsAction } from '../../store/api-actions';
import { useEffect } from 'react';
// import { getNearby, getNearbyError, getNearbyLoading, getProperty, getPropertyError, getPropertyLoading, getReviews, getReviewsError, getReviewsLoading } from '../../store/property-data/selectors';
// import { getAuthStatus } from '../../store/user-data/selectors';
import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { NameSpace } from '../../store/root-reducer';

const mapStateToProps = (state: State) => ({
  authStatus: state[NameSpace.user].authorizationStatus,
  propertyLoading: state[NameSpace.property].propertyLoading,
  propertyError: state[NameSpace.property].propertyError,
  nearbyLoading: state[NameSpace.property].nearbyLoading,
  nearbyError: state[NameSpace.property].nearbyError,
  reviewsLoading: state[NameSpace.property].reviewsLoading,
  reviewsError: state[NameSpace.property].reviewsError,
  propertyOffer: state[NameSpace.property].property,
  nerbyOffers: state[NameSpace.property].nearby,
  reviews: state[NameSpace.property].reviews,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

// function Property(): JSX.Element {
function Property(props: PropsFromRedux): JSX.Element {
  const {id} = useParams<{ id: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPropertyAction(Number(id)));
    dispatch(fetchNearbyAction(Number(id)));
    dispatch(fetchReviewsAction(Number(id)));
  }, [id, dispatch]);

  // const authStatus = useSelector(getAuthStatus);

  // const propertyLoading = useSelector(getPropertyLoading);
  // const propertyError = useSelector(getPropertyError);
  // const nearbyLoading = useSelector(getNearbyLoading);
  // const nearbyError = useSelector(getNearbyError);
  // const reviewsLoading = useSelector(getReviewsLoading);
  // const reviewsError = useSelector(getReviewsError);

  // const propertyOffer = useSelector(getProperty);
  // const nerbyOffers = useSelector(getNearby);
  // const reviews = useSelector(getReviews);
  const {authStatus, propertyLoading, propertyError, nearbyLoading, nearbyError, reviewsLoading, reviewsError, propertyOffer, nerbyOffers, reviews} = props;


  const mapOffers = [...nerbyOffers, propertyOffer];

  if (propertyLoading || nearbyLoading || reviewsLoading) {
    return (
      <div className="page">
        <Header/>
        <main className="page__main page__main--property">
          <Loading isOffersLoading={propertyLoading}/>
        </main>
      </div>
    );
  }

  if (propertyError || nearbyError || reviewsError) {
    return (
      <div className="page">
        <Header/>
        <main className="page__main page__main--property">
          <LoadingFailed/>
        </main>
      </div>
    );
  }

  if (!propertyOffer) {
    return <NotFound/>;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PropertyGallery images={propertyOffer.images} type={propertyOffer.type}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {propertyOffer.isPremium
                ? <div className="property__mark"><span>Premium</span></div>
                : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {propertyOffer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${convertRating(propertyOffer.rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{propertyOffer.rating}</span>
              </div>
              <PropertyFeaturesList type={propertyOffer.type} bedroms={propertyOffer.bedrooms} maxAdults={propertyOffer.maxAdults}/>
              <div className="property__price">
                <b className="property__price-value">&euro;{propertyOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <PropertyInsideList goods={propertyOffer.goods}/>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {propertyOffer.host.name}
                  </span>
                  {propertyOffer.host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {propertyOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <PropertyReviewsList reviews={reviews}/>
                {authStatus === AuthorizationStatus.Auth && <PropertyNewReview/>}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={propertyOffer.city} offers={mapOffers} selectedPoint={Number(id)}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlacesList nearOffers={nerbyOffers}/>
          </section>
        </div>
      </main>
    </div>
  );
}

// export default Property;
export  {Property};
export default connector(Property);
