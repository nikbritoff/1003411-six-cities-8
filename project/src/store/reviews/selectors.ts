import { Review } from '../../types/review';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getReviews = (state: State):Review[] => state[NameSpace.reviewsState].reviews;
export const getReviewsLoading = (state: State): boolean => state[NameSpace.reviewsState].reviewsLoading;
export const getReviewsError = (state: State): boolean => state[NameSpace.reviewsState].reviewsError;
export const getNewReviewPosting = (state: State): boolean => state[NameSpace.reviewsState].postingNewReview;
export const getNewReviewPostSuccess = (state: State): boolean => state[NameSpace.reviewsState].postNewReviewSuccess;
