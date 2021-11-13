import { ThunkActionResult } from '../types/action';
import { loadOffersSuccess, loadOffersFailed, redirectToRoute, requestOffers, requireAutorization, requireLogout, requestAuthorization, AutorizationError, AutorizationSuccsess, loadNearbySuccsess, requestNearby, loadNearbyError, requestProperty, loadPropertySuccess, loadPropertyError, requestReviews, loadReviewsSuccsess, loadReviewsError, uploadNewReview } from './action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { adaptOfferToClient, adaptReviewToClient, adaptUserInfoToClient } from '../utils/adapter';
import { BackendUserInfo } from '../types/backend-user-info';
import { toast } from 'react-toastify';
import { Review } from '../types/review';
import { NewReviewData } from '../types/new-review-data';
import { BackendNewReview } from '../types/backend-new-review';

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

export const logoutAction = (): ThunkActionResult<void> =>
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

export  const fetchPropertyAction = (id: number): ThunkActionResult =>
  async (dispatch, _, api) => {
    try {
      dispatch(requestProperty(true));
      const {data} = await api.get<Offer>(`${APIRoute.Hotels}/${id}`);
      const adaptedProperty = adaptOfferToClient(data);
      dispatch(loadPropertySuccess(adaptedProperty));
    }
    catch {
      dispatch(loadPropertyError(true));
    }
  };

export const fetchNearbyAction = (id: number): ThunkActionResult =>
  async (dispatch, _, api) => {
    try {
      dispatch(requestNearby(true));
      const {data} = await api.get<Offer[]>(`${APIRoute.Hotels}/${id}${APIRoute.Nearby}`);
      const adaptedNearby = data.map((point) => adaptOfferToClient(point));
      dispatch(loadNearbySuccsess(adaptedNearby));
    }
    catch {
      dispatch(loadNearbyError(true));
    }
  };

export const fetchReviewsAction = (id: number): ThunkActionResult =>
  async (dispatch, _, api) => {
    try {
      dispatch(requestReviews(true));
      const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
      const adaptedReviews = data.map((review) => adaptReviewToClient(review));
      dispatch(loadReviewsSuccsess(adaptedReviews));
    }
    catch {
      dispatch(loadReviewsError(true));
    }
  };

export const uploadNewReviewAction = ({id, comment, rating}: NewReviewData): ThunkActionResult =>
  async (dispatch, _, api) => {
    try {
      dispatch(uploadNewReview(true));
      await api.post<BackendNewReview>(`${APIRoute.Reviews}/${id}`, {comment, rating});
      dispatch(uploadNewReview(false));
    }
    catch {
      toast.error('Sumbit error! Try later.');
      dispatch(uploadNewReview(false));
    }
  };
