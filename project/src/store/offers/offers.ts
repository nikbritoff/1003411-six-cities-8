import { createReducer } from '@reduxjs/toolkit';
import { MainData } from '../../types/state';
import { changeFavorite, loadOffersFailed, loadOffersSuccess, requestOffers } from '../action';

const initialState: MainData = {
  offersList: [],
  offersLoading: false,
  offersError: false,
};

const offers = createReducer(initialState, (builder) => {
  builder
    .addCase(requestOffers, (state, action) => {
      state.offersLoading = action.payload;
    })
    .addCase(loadOffersSuccess, (state, action) => {
      state.offersList = action.payload;
      state.offersLoading = false;
      state.offersError = false;
    })
    .addCase(loadOffersFailed, (state, action) => {
      state.offersLoading = false;
      state.offersError = true;
    })
    .addCase(changeFavorite, (state, action) => {
      const index = state.offersList.findIndex((offer) => offer.id === action.payload.id);
      if (index !== -1) {
        state.offersList[index].isFavorite = action.payload.isFavorite;
      }
    });
});

export {offers};
