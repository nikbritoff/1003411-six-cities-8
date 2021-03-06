import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { getReviews, selectSortedReviews } from '../../store/reviews/selectors';
import { getAuthStatus } from '../../store/user/selectors';
import { Review } from '../../types/review';
import { convertRating } from '../../utils/common';
import ReviewForm from '../review-form/review-form';

type ReviewsProps = {
  id: string;
}

function Reviews({id}: ReviewsProps): JSX.Element {
  const authStatus= useSelector(getAuthStatus);
  const reviewsFromBackend = useSelector(getReviews);
  const reviews = useSelector(selectSortedReviews);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsFromBackend.length}</span></h2>

      <ul className="reviews__list">
        {reviews.map((review: Review) => {
          const attributeReviewTime = dayjs(review.date).format('YYYY-MM-DD');
          const showReviewTime = dayjs(review.date).format('MMMM D');

          return (
            <li className="reviews__item" key={review.id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">
                  {review.user.name}
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: `${convertRating(review.rating)}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {review.comment}
                </p>
                <time className="reviews__time" dateTime={attributeReviewTime}>{showReviewTime}</time>
              </div>
            </li>
          );})}
      </ul>

      {authStatus === AuthorizationStatus.Auth && <ReviewForm id={id}/>}

    </section>
  );
}

export default Reviews;
