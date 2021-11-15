import Header from '../../components/header/header';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import PropertyFeaturesList from '../../components/property-features-list/property-features-list';
import PropertyInsideList from '../../components/property-inside-list/property-inside-list';
import Reviews from '../../components/reviews/reviews';
import { useParams } from 'react-router';
import {  useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/loading/loading';
import LoadingFailed from '../../components/loading-failed/loading-failed';
import NotFound from '../not-found/not-found';
import Map from '../../components/map/map';
import { fetchNearbyAction, fetchPropertyAction, fetchReviewsAction } from '../../store/api-actions';
import React, { useEffect } from 'react';
import { getProperty, getPropertyError, getPropertyLoading } from '../../store/property/selectors';
import CardMark from '../../components/card-mark/card-mark';
import PlaceCard from '../../components/offer-card/offer-card';
import Host from '../../components/host/host';
import Rating from '../../components/rating/rating';
import { getReviewsError, getReviewsLoading } from '../../store/reviews/selectors';
import { getNearby, getNearbyError, getNearbyLoading } from '../../store/nearby-offers/selectors';

function ErrorPage({children}: {children: React.ReactNode}) {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        {children}
      </main>
    </div>
  );
}

function Property(): JSX.Element {
  const {id} = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const isPropertyLoading = useSelector(getPropertyLoading);
  const isPropertyError = useSelector(getPropertyError);
  const isNearbyLoading = useSelector(getNearbyLoading);
  const isNearbyError = useSelector(getNearbyError);
  const isReviewsLoading = useSelector(getReviewsLoading);
  const isReviewsError = useSelector(getReviewsError);
  const propertyOffer = useSelector(getProperty);
  const nearbyOffers = useSelector(getNearby);

  const mapOffers = [...nearbyOffers, propertyOffer];

  useEffect(() => {
    dispatch(fetchPropertyAction(id));
    dispatch(fetchNearbyAction(id));
    dispatch(fetchReviewsAction(id));
  }, [id, dispatch]);

  if (isPropertyLoading || isNearbyLoading || isReviewsLoading) {
    return (
      <ErrorPage>
        <Loading isOffersLoading={isPropertyLoading}/>
      </ErrorPage>
    );
  }

  if (isPropertyError || isNearbyError || isReviewsError) {
    return (
      <ErrorPage>
        <LoadingFailed/>
      </ErrorPage>
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
          <PropertyGallery images={propertyOffer.images} type={propertyOffer.type}/>

          <div className="property__container container">
            <div className="property__wrapper">
              {propertyOffer.isPremium && <CardMark className={'property__mark'}/>}
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
                <Rating className={'property__stars'} rating={propertyOffer.rating}/>
                <span className="property__rating-value rating__value">{propertyOffer.rating}</span>
              </div>

              <PropertyFeaturesList
                type={propertyOffer.type}
                bedroms={propertyOffer.bedrooms}
                maxAdults={propertyOffer.maxAdults}
              />

              <div className="property__price">
                <b className="property__price-value">&euro;{propertyOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <PropertyInsideList goods={propertyOffer.goods}/>
              <Host host={propertyOffer.host} description={propertyOffer.description}/>
              <Reviews id={id}/>
            </div>
          </div>

          <section className="property__map map">
            <Map city={propertyOffer.city} offers={mapOffers} selectedPoint={Number(id)}/>
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((nearby): JSX.Element => (
                <PlaceCard
                  key={nearby.id}
                  offer={nearby}
                  cardClassName={'near-places__card'}
                  cardImageClassName={'near-places__image-wrapper'}
                  handleMouseMove={function() {console.log('Enter');}}
                  handleMouseMoveOut={function() {console.log('Leave');}}
                />
              ))}
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}

export default Property;
