import { ThunkActionResult } from '../types/action';
import { loadOffersSuccess, loadOffersFailed, redirectToRoute, requestOffers, requireAutorization, requireLogout, requestAuthorization, AutorizationError, AutorizationSuccsess } from './action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { adaptOfferToClient, adaptUserInfoToClient } from '../utils/adapter';
import { BackendUserInfo } from '../types/backend-user-info';
import { toast } from 'react-toastify';

export const fetchOfferAction = (): ThunkActionResult =>
  async (dispatch, _, api) => {
    try {
      dispatch(requestOffers(true));
      const {data} = await api.get<Offer[]>(APIRoute.Hotels);
      const adaptedData = data.map((point) => adaptOfferToClient(point));
      dispatch(loadOffersSuccess(adaptedData));
    }
    catch {
      dispatch(loadOffersFailed(true));
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _, api) => {
    try {
      dispatch(requestAuthorization(true));
      const {data} = await api.post<BackendUserInfo>(APIRoute.Login, {email, password});
      const adaptedUser = adaptUserInfoToClient(data);
      dispatch(requireAutorization(AuthorizationStatus.Auth));
      dispatch(AutorizationSuccsess(adaptedUser));
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
    }
    catch {
      dispatch(AutorizationError(true));
      toast.error('Autorization error! Try later.', {
        position: 'top-left',
      });
    }
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _, api) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      const adaptedUser = adaptUserInfoToClient(data);
      dispatch(requireAutorization(AuthorizationStatus.Auth));
      dispatch(AutorizationSuccsess(adaptedUser));
    }
    catch {
      dispatch(requireAutorization(AuthorizationStatus.NoAuth));
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _, api) => {
    try {
      api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireLogout());
    }
    catch {
      dispatch(requireAutorization(AuthorizationStatus.Unknown));
    }
  };
