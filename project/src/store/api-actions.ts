import { ThunkActionRessult } from '../types/action';
import { loadOffers, redirectToRoute, requireAutorization, requireLogout } from './action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken, Token } from '../services/token';
import { adaptOfferToClient } from '../utils/adapter';

export const fetchOfferAction = (): ThunkActionRessult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    const adaptedData = data.map((point) => adaptOfferToClient(point));
    dispatch(loadOffers(adaptedData));
  };

export const checkAuthAction = (): ThunkActionRessult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAutorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionRessult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAutorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  };

export const logoutAction = (): ThunkActionRessult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
