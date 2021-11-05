import { City } from './city';
import { Offer } from './offer';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import  { State } from '../types/state';
import { AppRoute, AuthorizationStatus, SortingStatus } from '../const';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  RequestOffers = 'data/requestOffers',
  LoadOffersSuccsess = 'data/loadOffers',
  LoadOffersFailed = 'data/loadOffersFailed',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'mail/redirectToRoute',
  ChangeSortingStatus = 'data/changeSortingStatus',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity;
  payload: City;
}

export type OffersRequestAction = {
  type: ActionType.RequestOffers;
  payload: boolean;
}

export type LoadOffersSuccessAction = {
  type: ActionType.LoadOffersSuccsess;
  payload: Offer[];
}

export type LoadOffersFailedAction = {
  type: ActionType.LoadOffersFailed;
  payload: boolean;
}

export type RequireAuthorizationAction = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus;
}

export type RequireLogoutAction = {
  type: ActionType.RequireLogout;
}

export type RedirectToRouteAction = {
  type: ActionType.RedirectToRoute;
  payload: AppRoute;
}

export type ChangeSortingStatusAction = {
  type: ActionType.ChangeSortingStatus;
  payload: SortingStatus;
}


export type Actions =
  ChangeCityAction |
  OffersRequestAction |
  LoadOffersSuccessAction |
  LoadOffersFailedAction |
  RequireAuthorizationAction |
  RequireLogoutAction |
  RedirectToRouteAction |
  ChangeSortingStatusAction;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
