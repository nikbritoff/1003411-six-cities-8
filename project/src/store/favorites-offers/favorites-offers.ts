import { createReducer } from '@reduxjs/toolkit';
import { Favorites } from '../../types/state';
import { loadFavoritesError, loadFavoritesSuccess, requestFavorites } from '../action';

const initialState: Favorites = {
  favorites: [],
  favoritesLoading: false,
  favoritesError: false,
};

const favoritesOffers = createReducer(initialState, (builder) => {
  builder
    .addCase(requestFavorites, (state) => {
      state.favoritesLoading = true;
    })
    .addCase(loadFavoritesSuccess,(state, action) => {
      state.favorites = action.payload;
      state.favoritesLoading = false;
      state.favoritesError = false;
    })
    .addCase(loadFavoritesError, (state) => {
      state.favoritesLoading = false;
      state.favoritesError = true;
    });
});

export {favoritesOffers};
