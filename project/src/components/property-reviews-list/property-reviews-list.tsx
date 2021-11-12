import dayjs from 'dayjs';
import { Review } from '../../types/review';
import { convertRating } from '../../utils/common';

type PropertyReviewsListProps = {
  reviews: Review[],
}

function PropertyReviewsList({reviews}: PropertyReviewsListProps): JSX.Element {
  return (
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
  );
}

export default PropertyReviewsList;
