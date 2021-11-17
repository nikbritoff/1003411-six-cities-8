import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import  { State } from '../types/state';
import { Action } from 'redux';

export enum ActionType {
  ChangeCity = 'app/changeCity',
  ChangeSortingStatus = 'app/changeSortingStatus',

  RequestOffers = 'offers/request',
  LoadOffersSuccess = 'offers/loadSuccess',
  LoadOffersFailed = 'offers/loadFailed',

  AutorizationSuccess = 'user/autorizationSuccess',
  AutorizationFailed = 'user/autorizationFailed',
  RequireAuthorization = 'user/requireAuthorization',
  RequestAutorization = 'user/requestAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'main/redirectToRoute',

  RequestProperty = 'property/request',
  LoadPropertySuccess = 'property/loadSuccess',
  LoadPropertyFailed = 'property/loadFailed',

  RequestNearby = 'nearby/request',
  LoadNearbySuccess = 'nearby/loadSuccess',
  LoadNearbyFailed = 'nearby/loadFailed',

  RequestReviews = 'reviews/request',
  LoadReviewsSuccess = 'reviews/loadSuccess',
  LoadReviewsFailed = 'reviews/loadFailed',
  PostNewReview = 'reviews/postNewReview',
  PostNewReviewSuccess ='reviews/postNewReviewSuccess',

  RequestFavorites = 'favorite/request',
  LoadFavoritesSuccess = 'favorite/loadSuccess',
  LoadFavoritesFailed = 'favorite/loadFailed',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
