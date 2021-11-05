import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';
import { CITIES, AuthorizationStatus, SortingStatus } from '../const';

const initialState = {
  currentCity: CITIES[0],
  offersList: [],
  offersLoading: false,
  offersSuccess: false,
  offersError: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        // isDataLoaded: true,
      };
    case ActionType.ChangeSortingStatus:
      return {
        ...state,
        sortingStatus: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
