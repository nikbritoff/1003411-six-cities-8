import { Offer } from '../../types/offer';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';
import { createSelector } from '@reduxjs/toolkit';

export const getFavorites = (state: State): Offer[] => state[NameSpace.Favorites].favorites;
export const getFavoritesLoading = (state: State): boolean => state[NameSpace.Favorites].favoritesLoading;
export const getFavoritesError = (state: State): boolean => state[NameSpace.Favorites].favoritesError;

export const selectFavoriteLocationsList = createSelector([getFavorites],
  (favoritesList) => (
    favoritesList.reduce<{[key: string]: Offer[]}>(
      (acc: {[key: string]: Offer[]}, current: Offer) => {
        if (current.isFavorite) {
          if (!acc[current.city.name]) {
            acc[current.city.name] = [];
          }

          acc[current.city.name].push(current);
        }

        return acc;
      }, {})
  ),
);
