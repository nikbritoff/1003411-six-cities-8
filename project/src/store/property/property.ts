import { createReducer } from '@reduxjs/toolkit';
import { PropertyData } from '../../types/state';
import { loadPropertyFailed, loadPropertySuccess, requestProperty } from '../action';

const initialState: PropertyData = {
  property: {
    bedrooms: 0,
    city: {
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
      name: '',
    },
    description: '',
    goods: [],
    host: {
      avatarUrl: '',
      id: 0,
      isPro: false,
      name: '',
    },
    id: 0,
    images: [],
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    isFavorite: false,
    isPremium: false,
    maxAdults: 0,
    previewImage: '',
    price: 0,
    rating: 0,
    title: '',
    type: '',
  },
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
    });
});

export {property};
