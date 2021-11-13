import { createReducer } from '@reduxjs/toolkit';
import { PropertyData } from '../../types/state';
import { loadNearbyError, loadNearbySuccsess, loadPropertyError, loadPropertySuccess, loadReviewsError, loadReviewsSuccsess, requestNearby, requestProperty, requestReviews, uploadNewReview } from '../action';

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
  nearby: [],
  nearbyLoading: false,
  nearbyError: false,
  reviews: [],
  reviewsLoading: false,
  reviewsError: false,
  uploadNewReview: false,
};

const propertyData = createReducer(initialState, (builder) => {
  builder
    .addCase(requestProperty, (state, action) => {
      state.propertyLoading = action.payload;
    })
    .addCase(loadPropertySuccess, (state, action) => {
      state.property = action.payload;
      state.propertyLoading = false;
      state.propertyError = false;
    })
    .addCase(loadPropertyError, (state, action) => {
      state.propertyError = action.payload;
      state.propertyLoading = false;
    })
    .addCase(requestNearby, (state, action) => {
      state.nearbyLoading = action.payload;
    })
    .addCase(loadNearbySuccsess, (state, action) => {
      state.nearby = action.payload;
      state.nearbyLoading = false;
      state.nearbyError = false;
    })
    .addCase(loadNearbyError, (state, action) => {
      state.nearbyError = action.payload;
      state.nearbyLoading = false;
    })
    .addCase(requestReviews, (state, action) => {
      state.reviewsLoading = action.payload;
    })
    .addCase(loadReviewsSuccsess,(state, action) => {
      state.reviews = action.payload;
      state.reviewsLoading = false;
      state.reviewsError = false;
    })
    .addCase(loadReviewsError, (state, action) => {
      state.reviewsError = action.payload;
      state.reviewsLoading = false;
    })
    .addCase(uploadNewReview, (state, action) => {
      state.uploadNewReview = action.payload;
    });
});

export {propertyData};
