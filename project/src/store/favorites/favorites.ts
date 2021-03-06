import { createReducer } from '@reduxjs/toolkit';
import { Favorites } from '../../types/state';
import { changeFavorite, loadFavoritesError, loadFavoritesSuccess, requestFavorites } from '../action';

const initialState: Favorites = {
  favorites: [],
  favoritesLoading: false,
  favoritesError: false,
};

const favorites = createReducer(initialState, (builder) => {
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
    })
    .addCase(changeFavorite, (state, action) => {
      const filteredFavorited = state.favorites.filter((offer) => offer.id !== action.payload.id);
      state.favorites = filteredFavorited;
    });
});

export {favorites};
