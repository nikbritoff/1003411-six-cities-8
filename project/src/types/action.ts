import { City } from './city';
import { Offer } from './offer';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import  { State } from '../types/state';
import { AuthorizationStatus } from '../const';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity;
  payload: City;
}

export type LoadOffersAction = {
  type: ActionType.LoadOffers;
  payload: Offer[];
}

export type RequireAuthorizationAction = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus;
}

export type requireLogoutAction = {
  type: ActionType.RequireLogout;
}


export type Actions = ChangeCityAction | LoadOffersAction | RequireAuthorizationAction | requireLogoutAction;

export type ThunkActionRessult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
