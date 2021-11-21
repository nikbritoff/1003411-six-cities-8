import { createReducer } from '@reduxjs/toolkit';
import { ReviewsState } from '../../types/state';
import { loadReviewsFailed, loadReviewsSuccess, requestReviews, postingNewReview, postNewReviewSuccess } from '../action';

const initialState: ReviewsState = {
  reviews: [],
  reviewsLoading: false,
  reviewsError: false,
  postingNewReview: false,
  postNewReviewSuccess: false,
};

const reviews = createReducer(initialState, (builder) => {
  builder
    .addCase(requestReviews, (state, action) => {
      state.reviewsLoading = action.payload;
    })
    .addCase(loadReviewsSuccess,(state, action) => {
      state.reviews = action.payload;
      state.reviewsLoading = false;
      state.reviewsError = false;
    })
    .addCase(loadReviewsFailed, (state, action) => {
      state.reviewsError = action.payload;
      state.reviewsLoading = false;
    })
    .addCase(postingNewReview, (state, action) => {
      state.postingNewReview = action.payload;
      state.postNewReviewSuccess = false;
    })
    .addCase(postNewReviewSuccess, (state) => {
      state.postNewReviewSuccess = true;
      state.postingNewReview = false;
    });
});

export {reviews };
