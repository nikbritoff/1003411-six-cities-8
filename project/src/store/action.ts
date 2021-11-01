import { ActionType, ChangeCityAction, LoadOffersAction } from '../types/action';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const changeCity = (city: City): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const loadOffers = (offers: Offer[]): LoadOffersAction => ({
  type: ActionType.LoadOffers,
  payload: offers,
});

export const requireAutorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
