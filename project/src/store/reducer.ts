import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';
import { CITIES, AuthorizationStatus, SortingStatus } from '../const';

const initialState = {
  currentCity: CITIES[0],
  offersList: [],
  offersLoading: false,
  offersSuccess: false,
  offersError: false,
  loginLoading: false,
  loginSuccsess: false,
  loginError: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: {
    avatarUrl: '',
    email: '',
    id:  null,
    isPro: false,
    name: '',
  },
  sortingStatus: SortingStatus.Popular,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload};
    case ActionType.RequestOffers: {
      return {
        ...state,
        offersLoading: true,
        offersSuccess: false,
        offersError: false,
      };
    }
    case ActionType.LoadOffersSuccsess:
      return {
        ...state,
        offersList: action.payload,
        offersLoading: false,
        offersSuccess: true,
        offersError: false,
      };
    case ActionType.LoadOffersFailed:
      return {
        ...state,
        offersLoading: false,
        offersSuccess: false,
        offersError: true,
      };
    case ActionType.RequestAutorization:
      return {
        ...state,
        loginLoading: true,
        loginSuccsess: false,
        loginError: false,
      };
    case ActionType.AutorizationSuccsess:
      return {
        ...state,
        loginLoading: false,
        loginSuccsess: true,
        loginError: false,
        userInfo: action.payload,
      };
    case ActionType.AutorizationError:
      return {
        ...state,
        loginLoading: false,
        loginSuccsess: false,
        loginError: true,
      };
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.ChangeSortingStatus:
      return {
        ...state,
        sortingStatus: action.payload,
      };
    case ActionType.RequireLogout:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
        userInfo: {
          avatarUrl: '',
          email: '',
          id:  null,
          isPro: false,
          name: '',
        },
      };
    default:
      return state;
  }
};

export {reducer};
