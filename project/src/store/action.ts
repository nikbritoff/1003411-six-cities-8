import {
  ActionType,
  ChangeCityAction,
  ChangeSortingStatusAction,
  LoadOffersSuccessAction,
  RedirectToRouteAction,
  OffersRequestAction,
  LoadOffersFailedAction,
  RequestAutorization,
  AutorizationSuccsessAction,
  AutorizationErrorAction,
  RequireLogoutAction
} from '../types/action';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AppRoute, AuthorizationStatus, SortingStatus } from '../const';
import { UserInfo } from '../types/user-info';

export const changeCity = (city: City): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const requestOffers = (offersLoading: boolean): OffersRequestAction => ({
  type: ActionType.RequestOffers,
  payload: offersLoading,
});

export const loadOffersSuccess = (offers: Offer[]): LoadOffersSuccessAction => ({
  type: ActionType.LoadOffersSuccsess,
  payload: offers,
});

export const loadOffersFailed = (offersError: boolean): LoadOffersFailedAction => ({
  type: ActionType.LoadOffersFailed,
  payload: offersError,
});

export const requestAuthorization= (loginLoading: boolean): RequestAutorization => ({
  type: ActionType.RequestAutorization,
  payload: loginLoading,
});

export const AutorizationSuccsess = (user: UserInfo): AutorizationSuccsessAction => ({
  type: ActionType.AutorizationSuccsess,
  payload: user,
});

export const AutorizationError = (loginFailed: boolean): AutorizationErrorAction => ({
  type: ActionType.AutorizationError,
  payload: loginFailed,
});

export const requireAutorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = (): RequireLogoutAction => ({
  type: ActionType.RequireLogout,
} as const);

export const redirectToRoute = (route: AppRoute): RedirectToRouteAction => ({
  type: ActionType.RedirectToRoute,
  payload: route,
} as const);

export const changeSortingStatus = (sortingStatus: SortingStatus): ChangeSortingStatusAction => ({
  type: ActionType.ChangeSortingStatus,
  payload: sortingStatus,
});
