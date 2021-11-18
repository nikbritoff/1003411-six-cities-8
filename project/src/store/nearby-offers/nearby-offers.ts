import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { Nearby } from '../../types/state';
import { changeFavorite, loadNearbyFailed, loadNearbySuccsess, requestNearby } from '../action';

const initialState: Nearby = {
  nearby: [],
  nearbyLoading: false,
  nearbyError: false,
};

const nearbyOffers = createReducer(initialState, (builder) => {
  builder
    .addCase(requestNearby, (state, action) => {
      state.nearbyLoading = action.payload;
    })
    .addCase(loadNearbySuccsess, (state, action) => {
      state.nearby = action.payload;
      state.nearbyLoading = false;
      state.nearbyError = false;
    })
    .addCase(loadNearbyFailed, (state, action) => {
      state.nearbyError = action.payload;
      state.nearbyLoading = false;
    })
    .addCase(changeFavorite, (state, action) => {
      const index = state.nearby.findIndex((offer: Offer) => offer.id === action.payload.id);

      if (index !== -1) {
        state.nearby[index].isFavorite = action.payload.isFavorite;
      }
    });
});

export {nearbyOffers};
