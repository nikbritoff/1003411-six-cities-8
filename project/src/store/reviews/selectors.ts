import { Review } from '../../types/review';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getReviews = (state: State):Review[] => state[NameSpace.Reviews].reviews;
export const getReviewsLoading = (state: State): boolean => state[NameSpace.Reviews].reviewsLoading;
export const getReviewsError = (state: State): boolean => state[NameSpace.Reviews].reviewsError;
export const getNewReviewPosting = (state: State): boolean => state[NameSpace.Reviews].postingNewReview;
export const getNewReviewPostSuccess = (state: State): boolean => state[NameSpace.Reviews].postNewReviewSuccess;
