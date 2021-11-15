import { createReducer } from '@reduxjs/toolkit';
import { Nearby } from '../../types/state';
import { loadNearbyFailed, loadNearbySuccsess, requestNearby } from '../action';

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
    });
});

export {nearbyOffers};
