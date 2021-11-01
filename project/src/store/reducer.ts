import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';
import { CITIES, AuthorizationStatus } from '../const';

const initialState = {
  currentCity: CITIES[0],
  offersList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload};
    case ActionType.LoadOffers:
      return {...state, offersList: action.payload};
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export {reducer};
