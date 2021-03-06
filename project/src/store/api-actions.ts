import { ThunkActionResult } from '../types/action';
import { loadOffersSuccess, loadOffersFailed, redirectToRoute, requestOffers, requireAutorization, requireLogout, requestAuthorization, AutorizationFailed, AutorizationSuccess, loadNearbySuccsess, requestNearby, loadNearbyFailed, requestProperty, loadPropertySuccess, loadPropertyFailed, requestReviews, loadReviewsSuccsess, loadReviewsFailed, postingNewReview, postNewReviewSuccsess, requestFavorites, loadFavoritesError, loadFavoritesSuccess, changeFavorite } from './action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { adaptOfferToClient, adaptReviewToClient, adaptUserInfoToClient } from '../utils/adapter';
import { BackendUserInfo } from '../types/backend-user-info';
import { toast } from 'react-toastify';
import { Review } from '../types/review';
import { NewReviewData } from '../types/new-review-data';
import { AxiosError } from 'axios';
import { FavoriteStatusData } from '../types/favorite-status';

const errorMessages = {
  autorization: 'Autorization error! Try later.',
  postReview: 'Submit error! Try later.',
  reviews: 'Reviews load failed. Try later.',
  nearby: 'Load other places in the neighbourhood failed. Try later.',
  changeFavoriteStatus: 'Change offer favorite status failed. Try later.',
};

export const fetchOfferAction = (): ThunkActionResult => (
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
  }
);

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult => (
  async (dispatch, _, api) => {
    try {
      dispatch(requestAuthorization(true));
      const {data} = await api.post<BackendUserInfo>(APIRoute.Login, {email, password});
      const adaptedUser = adaptUserInfoToClient(data);
      dispatch(requireAutorization(AuthorizationStatus.Auth));
      dispatch(AutorizationSuccess(adaptedUser));
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
    }
    catch {
      dispatch(AutorizationFailed(true));
      toast.error(errorMessages.autorization, {
        position: 'top-left',
      });
    }
  }
);

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _, api) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      const adaptedUser = adaptUserInfoToClient(data);
      dispatch(requireAutorization(AuthorizationStatus.Auth));
      dispatch(AutorizationSuccess(adaptedUser));
    }
    catch {
      dispatch(requireAutorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const logoutAction = (): ThunkActionResult<void> => (
  async (dispatch, _, api) => {
    try {
      api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireLogout());
      dispatch(loadFavoritesSuccess([]));
      dispatch(fetchOfferAction());
    }
    catch {
      dispatch(requireAutorization(AuthorizationStatus.Unknown));
    }
  }
);

export const fetchPropertyAction = (id: string): ThunkActionResult => (
  async (dispatch, _, api) => {
    try {
      dispatch(requestProperty(true));
      const {data} = await api.get<Offer>(`${APIRoute.Hotels}/${id}`);
      const adaptedProperty = adaptOfferToClient(data);
      dispatch(loadPropertySuccess(adaptedProperty));
    }
    catch(err) {
      dispatch(loadPropertyFailed(true));
      if ((err as AxiosError).response?.status === 404) {
        dispatch(redirectToRoute(AppRoute.NotFoud));
      }
    }
  }
);

export const fetchNearbyAction = (id: string): ThunkActionResult => (
  async (dispatch, _, api) => {
    try {
      dispatch(requestNearby(true));
      const {data} = await api.get<Offer[]>(`${APIRoute.Hotels}/${id}${APIRoute.Nearby}`);
      const adaptedNearby = data.map((point) => adaptOfferToClient(point));
      dispatch(loadNearbySuccsess(adaptedNearby));
    }
    catch(err) {
      dispatch(loadNearbyFailed(true));

      if ((err as AxiosError).response?.status !== 404) {
        toast.warn(errorMessages.nearby);
      }
    }
  }
);

export const fetchReviewsAction = (id: string): ThunkActionResult => (
  async (dispatch, _, api) => {
    try {
      dispatch(requestReviews(true));
      const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
      const adaptedReviews = data.map((review) => adaptReviewToClient(review));
      dispatch(loadReviewsSuccsess(adaptedReviews));
    }
    catch(err) {
      dispatch(loadReviewsFailed(true));
      if ((err as AxiosError).response?.status !== 404) {
        toast.warn(errorMessages.reviews);
      }
    }
  }
);

export const postReviewAction = ({id, comment, rating}: NewReviewData): ThunkActionResult => (
  async (dispatch, _, api) => {
    try {
      dispatch(postingNewReview(true));
      const {data} = await api.post<Review[]>(`${APIRoute.Reviews}/${id}`, {comment, rating});
      const adaptedReviews = data.map((review: Review) => adaptReviewToClient(review));
      dispatch(loadReviewsSuccsess(adaptedReviews));
      dispatch(postingNewReview(false));
      dispatch(postNewReviewSuccsess());
    }
    catch {
      toast.error(errorMessages.postReview);
      dispatch(postingNewReview(false));
    }
  }
);

export const fetchFavoritesAction = (): ThunkActionResult => (
  async (dispatch, _, api) => {
    try {
      dispatch(requestFavorites());
      const {data} = await api.get<Offer[]>(APIRoute.Favorites);
      const adaptedFavorites = data.map((favoriteOffer) => adaptOfferToClient(favoriteOffer));
      dispatch(loadFavoritesSuccess(adaptedFavorites));
    }
    catch {
      dispatch(loadFavoritesError());
    }
  }
);

export const postFavoriteStatus = ({isFavorite, id, statusCode}: FavoriteStatusData): ThunkActionResult => (
  async (dispatch, _, api) => {
    try {
      const {data} = await api.post<Offer>(`${APIRoute.Favorites}/${id}/${statusCode}`);
      const adaptedFavorite = adaptOfferToClient(data);

      dispatch(changeFavorite(adaptedFavorite));
    }
    catch {
      toast.warn(errorMessages.changeFavoriteStatus);
    }
  }
);
