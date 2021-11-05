import { ActionType, ChangeCityAction, ChangeSortingStatusAction, LoadOffersSuccessAction, RedirectToRouteAction, OffersRequestAction, LoadOffersFailedAction } from '../types/action';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AppRoute, AuthorizationStatus, SortingStatus } from '../const';

export const changeCity = (city: City): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const loadOffersSuccess = (offers: Offer[]): LoadOffersSuccessAction => ({
  type: ActionType.LoadOffersSuccsess,
  payload: offers,
});

export const requestOffers = (offersLoading: boolean): OffersRequestAction => ({
  type: ActionType.RequestOffers,
  payload: offersLoading,
});

export const loadOffersFailed = (offersError: boolean): LoadOffersFailedAction => ({
  type: ActionType.LoadOffersFailed,
  payload: offersError,
});

export const requireAutorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
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
