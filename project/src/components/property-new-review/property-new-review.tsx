import { useState, FormEvent, ChangeEvent } from 'react';
import RatingStar from '../rating-start/rating-start';
import { RATING_TITLES } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { NewReviewData } from '../../types/new-review-data';
import { uploadNewReviewAction } from '../../store/api-actions';
import { getNewReviewUpload } from '../../store/property-data/selectors';

type PropertyNewReviewProps = {
  id: number,
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

export type CommentStateProps = {
  [key: string]: FieldProps,
};

function PropertyNewReview({id}: PropertyNewReviewProps): JSX.Element {
  const [comment, setComment] = useState<CommentStateProps>({
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
  });

  const dispatch = useDispatch();

  const newReviewUpload = useSelector(getNewReviewUpload);
  const submitNewReviewData = (newReviewData: NewReviewData) => {
    dispatch(uploadNewReviewAction(newReviewData));
  };

  const handleChange = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    const {name, value} = target;

    const checkValidity = () => {
      switch (name) {
        case commentFields.review:
          return comment[name].value.length >= 50 && comment[name].value.length < 300;
        default:
          return true;
      }
    };

    const isValid = checkValidity();

    setComment({
      ...comment,
      [name]: {
        ...comment[name],
        value: value,
        touched: true,
        error: !isValid,
      },
    });
  };

  const isFormValid = Object.values(comment).every((item: FieldProps) => !item.error && item.touched);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>):void => {
    evt.preventDefault();

    submitNewReviewData({
      id: id,
      comment: comment.review.value,
      rating: Number(comment.rating.value),
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>

      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((title: string, index: number) => <RatingStar key={title} id={index + 1} title={title} newReviewUpload={newReviewUpload} handleChange={handleChange}/>).reverse()}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={comment.review.value}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        disabled={newReviewUpload}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid || newReviewUpload}
        >
          {newReviewUpload ? 'Submiting..' : 'Sublit'}
        </button>
      </div>
    </form>
  );
}

export default PropertyNewReview;
