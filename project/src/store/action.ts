import { ActionType } from '../types/action';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AppRoute, AuthorizationStatus, SortingStatus } from '../const';
import { UserInfo } from '../types/user-info';
import { createAction } from '@reduxjs/toolkit';
import { Review } from '../types/review';

// Main

export const changeCity = createAction(
  ActionType.ChangeCity,
  (city: City) => ({
    payload: city,
  }),
);

export const changeSortingStatus = createAction(
  ActionType.ChangeSortingStatus,
  (sortingStatus: SortingStatus) => ({
    payload: sortingStatus,
  }),
);

export const requestOffers = createAction(
  ActionType.RequestOffers,
  (offersLoading: boolean) => ({
    payload: offersLoading,
  }),
);

export const loadOffersSuccess = createAction(
  ActionType.LoadOffersSuccess,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

export const loadOffersFailed = createAction(
  ActionType.LoadOffersFailed,
  (offersError: boolean) => ({
    payload: offersError,
  }),
);

// Autorization

export const requestAuthorization = createAction(
  ActionType.RequestAutorization,
  (loadingLogin: boolean) => ({
    payload: loadingLogin,
  }),
);

export const autorizationSuccess = createAction(
  ActionType.AutorizationSuccess,
  (user: UserInfo) => ({
    payload: user,
  }),
);

export const autorizationFailed = createAction(
  ActionType.AutorizationFailed,
  (loginFailed: boolean) => ({
    payload: loginFailed,
  }),
);

export const requireAutorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

// Redirect

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (route: AppRoute) => ({
    payload: route,
  }),
);

// Propety

export const requestProperty = createAction(
  ActionType.RequestProperty,
  (loadingProperty: boolean) => ({
    payload: loadingProperty,
  }),
);

export const loadPropertySuccess = createAction(
  ActionType.LoadPropertySuccess,
  (property: Offer) => ({
    payload: property,
  }),
);

export const loadPropertyFailed = createAction(
  ActionType.LoadPropertyFailed,
  (loadError: boolean) => ({
    payload: loadError,
  }),
);

export const requestNearby = createAction(
  ActionType.RequestNearby,
  (loadingNearby: boolean) => ({
    payload: loadingNearby,
  }),
);

export const loadNearbySuccsess = createAction(
  ActionType.LoadNearbySuccess,
  (nearby: Offer[]) => ({
    payload: nearby,
  }),
);

export const loadNearbyFailed = createAction(
  ActionType.LoadNearbyFailed,
  (loadError: boolean) => ({
    payload: loadError,
  }),
);

export const requestReviews = createAction(
  ActionType.RequestReviews,
  (loading: boolean) => ({
    payload: loading,
  }),
);

export const loadReviewsSuccsess = createAction(
  ActionType.LoadReviewsSuccess,
  (reviews: Review[]) => ({
    payload: reviews,
  }),
);

export const loadReviewsFailed = createAction(
  ActionType.LoadReviewsFailed,
  (loadError: boolean) => ({
    payload: loadError,
  }),
);

export const postingNewReview = createAction(
  ActionType.PostNewReview,
  (upload: boolean) => ({
    payload: upload,
  }),
);

export const postNewReviewSuccsess = createAction(ActionType.PostNewReviewSuccess);


// Favorites

export const requestFavorites = createAction(ActionType.RequestFavorites);

export const loadFavoritesSuccess = createAction(
  ActionType.LoadFavoritesSuccess,
  (favorites: Offer[]) => ({
    payload: favorites,
  }),
);

export const loadFavoritesError = createAction(ActionType.LoadFavoritesFailed);


export const changeFavorite = createAction(
  ActionType.ChangeFavorite,
  (favorite: Offer) => ({
    payload: favorite,
  }),
);
