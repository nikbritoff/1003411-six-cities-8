import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';
import { offers } from '../mock/offers';
import { DEFAULT_CITY } from '../const';

const initialState = {
  currentCity: DEFAULT_CITY,
  offersList: offers,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload};
    default:
      return state;
  }
};

export {reducer};
