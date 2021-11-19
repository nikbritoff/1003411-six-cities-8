import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SortingStatus } from '../../const';
import { changeCity, changeSortingStatus } from '../action';


const initialState = {
  currentCity: CITIES[0],
  sortingStatus: SortingStatus.Popular,
};


const appState = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSortingStatus, (state, action) => {
      state.sortingStatus = action.payload;
    });
});

export {appState};
