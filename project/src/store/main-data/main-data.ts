import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SortingStatus } from '../../const';
import { MainData } from '../../types/state';
import { changeCity, changeSortingStatus, loadOffersSuccess, requestOffers } from '../action';

const initialState: MainData = {
  currentCity: CITIES[0],
  sortingStatus: SortingStatus.Popular,
  offersList: [],
  offersLoading: false,
  offersError: false,
};

const mainData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSortingStatus, (state, action) => {
      state.sortingStatus = action.payload;
    })
    .addCase(requestOffers, (state, action) => {
      state.offersLoading = action.payload;
    })
    .addCase(loadOffersSuccess, (state, action) => {
      state.offersList = action.payload;
      state.offersLoading = false;
      state.offersError = false;
    });
});

export {mainData};
