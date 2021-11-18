import { combineReducers } from 'redux';
import { offers } from './offers/offers';
import { user } from './user/user';
import { property } from './property/property';
import { appState } from './app-state/app-state';
import { reviews } from './reviews/reviews';
import { nearbyOffers } from './nearby-offers/nearby-offers';
import { favorites } from './favorites/favorites';

export enum NameSpace {
  App = 'APP',
  Offers = 'OFFERS',
  User = 'USER',
  Property = 'PROPERTY',
  Reviews = 'REVIEWS',
  Nearby = 'NEARBY',
  Favorites = 'FAVORITES',
}
export const rootReducer = combineReducers({
  [NameSpace.App]: appState,
  [NameSpace.Offers]: offers,
  [NameSpace.User]: user,
  [NameSpace.Property]: property,
  [NameSpace.Reviews]: reviews,
  [NameSpace.Nearby]: nearbyOffers,
  [NameSpace.Favorites]: favorites,
});

export type RootState = ReturnType<typeof rootReducer>;
