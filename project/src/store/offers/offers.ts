import { createReducer } from '@reduxjs/toolkit';
import { MainData } from '../../types/state';
import { loadOffersFailed, loadOffersSuccess, requestOffers } from '../action';

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
    });
});

export {offers};
