import { ActionType } from '../../types/action';
import { makeFakeReviewsList } from '../../utils/mock';
import { reviews } from './reviews';

const mockReviews = makeFakeReviewsList();

describe('Reducer: reviews', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviews(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        reviews: [],
        reviewsLoading: false,
        reviewsError: false,
        postingNewReview: false,
        postNewReviewSuccess: false,
      });
  });

  it('should update reviews by load reviews', () => {
    const state = {
      reviews: [],
      reviewsLoading: false,
      reviewsError: false,
      postingNewReview: false,
      postNewReviewSuccess: false,
    };
    const loadReviewsSuccessAction = {
      type: ActionType.LoadReviewsSuccess,
      payload: mockReviews,
    };

    expect(reviews(state, loadReviewsSuccessAction))
      .toEqual({
        reviews: mockReviews,
        reviewsLoading: false,
        reviewsError: false,
        postingNewReview: false,
        postNewReviewSuccess: false,
      });
  });

  it('should update reviewsLoading to "true"', () => {
    const state = {
      reviews: [],
      reviewsLoading: false,
      reviewsError: false,
      postingNewReview: false,
      postNewReviewSuccess: false,
    };
    const requestReviewsAction = {
      type: ActionType.RequestReviews,
      payload: true,
    };

    expect(reviews(state, requestReviewsAction))
      .toEqual({
        reviews: [],
        reviewsLoading: true,
        reviewsError: false,
        postingNewReview: false,
        postNewReviewSuccess: false,
      });
  });

  it('should update reviewsError to "true"', () => {
    const state = {
      reviews: [],
      reviewsLoading: false,
      reviewsError: false,
      postingNewReview: false,
      postNewReviewSuccess: false,
    };
    const loadReviewsFailedAction = {
      type: ActionType.LoadReviewsFailed,
      payload: true,
    };

    expect(reviews(state, loadReviewsFailedAction))
      .toEqual({
        reviews: [],
        reviewsLoading: false,
        reviewsError: true,
        postingNewReview: false,
        postNewReviewSuccess: false,
      });
  });

  it('should update postingNewReview to "true"', () => {
    const state = {
      reviews: [],
      reviewsLoading: false,
      reviewsError: false,
      postingNewReview: false,
      postNewReviewSuccess: false,
    };
    const postingNewReviewAction = {
      type: ActionType.PostNewReview,
      payload: true,
    };

    expect(reviews(state, postingNewReviewAction))
      .toEqual({
        reviews: [],
        reviewsLoading: false,
        reviewsError: false,
        postingNewReview: true,
        postNewReviewSuccess: false,
      });
  });

  it('should update reviews by post newReview', () => {
    const state = {
      reviews: [],
      reviewsLoading: false,
      reviewsError: false,
      postingNewReview: false,
      postNewReviewSuccess: false,
    };
    const postNewReviewSuccessAction = {
      type: ActionType.PostNewReviewSuccess,
    };

    expect(reviews(state, postNewReviewSuccessAction))
      .toEqual({
        reviews: [],
        reviewsLoading: false,
        reviewsError: false,
        postingNewReview: false,
        postNewReviewSuccess: true,
      });
  });
});