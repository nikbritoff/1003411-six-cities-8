import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import  { State } from '../types/state';
import { Action } from 'redux';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSortingStatus = 'main/changeSortingStatus',

  RequestOffers = 'main/requestOffers',
  LoadOffersSuccess = 'main/loadOffersSuccess',
  LoadOffersFailed = 'main/loadOffersFailed',

  AutorizationSuccess = 'user/autorizationSuccess',
  AutorizationError = 'user/autorizationError',
  RequireAuthorization = 'user/requireAuthorization',
  RequestAutorization = 'user/requestAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'main/redirectToRoute',

  RequestProperty = 'property/requestProperty',
  LoadPropertySuccess = 'property/loadPropertySuccess',
  LoadPropertyError = 'property/loadPropertyError',

  RequestNearby = 'nearby/requestNearby',
  LoadNearbySuccess = 'nearby/loadNearby',
  Load = 'nearby/loadNearbyError',

  RequestReviews = 'property/requestReviews',
  LoadReviewsSuccess = 'property/loadReviewsSuccess',
  LoadReviewsError = 'property/loadReviewsError',

  UploadNewReview = 'propert/uploadNewReview',
  UploadNewReviewSuccess ='property/uploadNewReviewSuccess',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
