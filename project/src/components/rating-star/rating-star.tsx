import { ChangeEvent } from 'react';

type RatingStarProps = {
  title: string,
  id: number,
  newReviewUpload: boolean,
  currentValue: string,
  handleChange: ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

function RatingStar({title, id, newReviewUpload, currentValue, handleChange}: RatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        checked={id === Number(currentValue)}
        value={id}
        id={`${id}-stars`}
        type="radio"
        onChange={handleChange}
        disabled={newReviewUpload}
      />
      <label
        htmlFor={`${id}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingStar;
