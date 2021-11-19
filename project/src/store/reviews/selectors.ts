import { createSelector } from '@reduxjs/toolkit';
import { Review } from '../../types/review';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const MAX_REVIEWS_RENDER = 10;

const compareDates = (a: Review, b: Review) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  if (dateA < dateB) {
    return 1;
  }

  if (dateA > dateB) {
    return -1;
  }

  return 0;
};

export const getReviews = (state: State):Review[] => state[NameSpace.Reviews].reviews;
export const getReviewsLoading = (state: State): boolean => state[NameSpace.Reviews].reviewsLoading;
export const getReviewsError = (state: State): boolean => state[NameSpace.Reviews].reviewsError;
export const getNewReviewPosting = (state: State): boolean => state[NameSpace.Reviews].postingNewReview;
export const getNewReviewPostSuccess = (state: State): boolean => state[NameSpace.Reviews].postNewReviewSuccess;

export const selectSortedReviews = createSelector([getReviews],
  (reviewsList) => {
    const sortedReviews = [...reviewsList].sort((a, b) => compareDates(a, b));
    const reviews = sortedReviews.length > MAX_REVIEWS_RENDER
      ? sortedReviews.slice(0, MAX_REVIEWS_RENDER)
      : sortedReviews;

    return reviews;
  },
);
