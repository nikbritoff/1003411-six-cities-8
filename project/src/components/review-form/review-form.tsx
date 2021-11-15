import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import RatingStar from '../rating-star/rating-star';
import { RATING_TITLES } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { NewReviewData } from '../../types/new-review-data';
import { postReviewAction } from '../../store/api-actions';
import { getNewReviewPosting } from '../../store/reviews/selectors';

const REVIEW_MIN_LENGTH = 50;
const REVIEW_MAX_LENGTH = 300;

type ReviewFormProps = {
  id: string,
}

const commentFields = {
  rating: 'rating',
  review: 'review',
};

type FieldProps = {
    value: string,
    error: boolean,
    touched: boolean,
};

export type FormStateProps = {
  [key: string]: FieldProps,
};

const initialState = {
  rating: {
    value: '0',
    error: false,
    touched: false,
  },
  review: {
    value: '',
    error: false,
    touched: false,
  },
};

function ReviewForm({id}: ReviewFormProps): JSX.Element {
  const dispatch = useDispatch();
  const isReviewPosting = useSelector(getNewReviewPosting);

  const [formState, setFormState] = useState<FormStateProps>(initialState);

  useEffect(() => {
    if (isReviewPosting) {
      setFormState(initialState);
    }
  }, [isReviewPosting]);

  const submitNewReviewData = (newReviewData: NewReviewData) => {
    dispatch(postReviewAction(newReviewData));
  };

  const handleChange = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    const {name, value} = target;
    const isValid = name === commentFields.review
      ? formState[name].value.length >= REVIEW_MIN_LENGTH && formState[name].value.length < REVIEW_MAX_LENGTH
      : true;

    setFormState({
      ...formState,
      [name]: {
        value: value,
        touched: true,
        error: !isValid,
      },
    });
  };

  const isFormValid = Object.values(formState).every((item: FieldProps) => !item.error && item.touched);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>):void => {
    evt.preventDefault();

    submitNewReviewData({
      id: id,
      comment: formState.review.value,
      rating: formState.rating.value,
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((title: string, index: number) => (
          <RatingStar
            key={title}
            currentValue={formState.rating.value}
            id={index + 1}
            title={title}
            newReviewUpload={isReviewPosting}
            handleChange={handleChange}
          />
        )).reverse()}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={formState.review.value}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        disabled={isReviewPosting}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>
          {' '}and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid || isReviewPosting}
        >
          {isReviewPosting ? 'Submitting...' : 'Submit'}
        </button>
      </div>

    </form>
  );
}

export default ReviewForm;
