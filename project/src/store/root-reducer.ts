import { combineReducers } from 'redux';
import { offers } from './offers/offers';
import { user } from './user/user';
import { property } from './property/property';
import { appState } from './app-state/app-state';
import { reviews } from './reviews/reviews';
import { nearbyOffers } from './nearby-offers/nearby-offers';

export enum NameSpace {
  app = 'APP',
  offersState = 'OFFERS',
  userState = 'USER',
  propertyState = 'PROPERTY',
  reviewsState = 'REVIEWS',
  nearby = 'NEARBY',
}
export const rootReducer = combineReducers({
  [NameSpace.app]: appState,
  [NameSpace.offersState]: offers,
  [NameSpace.userState]: user,
  [NameSpace.propertyState]: property,
  [NameSpace.reviewsState]: reviews,
  [NameSpace.nearby]: nearbyOffers,
});

export type RootState = ReturnType<typeof rootReducer>;
