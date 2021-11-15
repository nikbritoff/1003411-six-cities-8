import { createReducer } from '@reduxjs/toolkit';
import { ReviewsState } from '../../types/state';
import { loadReviewsError, loadReviewsSuccsess, requestReviews, uploadNewReview } from '../action';

const initialState: ReviewsState = {
  reviews: [],
  reviewsLoading: false,
  reviewsError: false,
  uploadNewReview: false,
};

const reviews = createReducer(initialState, (builder) => {
  builder
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

export {reviews };
