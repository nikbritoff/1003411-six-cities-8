import { Offer } from '../../types/offer';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getFavorites = (state: State): Offer[] => state[NameSpace.favorites].favorites;
export const getFavoritesLoading = (state: State): boolean => state[NameSpace.favorites].favoritesLoading;
export const getFavoritesError = (state: State): boolean => state[NameSpace.favorites].favoritesError;

