import { createReducer } from '@reduxjs/toolkit';
import { MainData } from '../../types/state';
import { loadOffersSuccess, requestOffers } from '../action';

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
    });
});

export {offers};
