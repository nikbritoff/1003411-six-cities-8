import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { PropertyData } from '../../types/state';
import { changeFavorite, loadPropertyFailed, loadPropertySuccess, requestProperty } from '../action';

const initialState: PropertyData = {
  property: {} as Offer,
  propertyLoading: false,
  propertyError: false,
};

const property = createReducer(initialState, (builder) => {
  builder
    .addCase(requestProperty, (state, action) => {
      state.propertyLoading = action.payload;
    })
    .addCase(loadPropertySuccess, (state, action) => {
      state.property = action.payload;
      state.propertyLoading = false;
      state.propertyError = false;
    })
    .addCase(loadPropertyFailed, (state, action) => {
      state.propertyError = action.payload;
      state.propertyLoading = false;
    })
    .addCase(changeFavorite, (state, action) => {
      state.property.isFavorite =  action.payload.isFavorite;
    });
});

export {property};
