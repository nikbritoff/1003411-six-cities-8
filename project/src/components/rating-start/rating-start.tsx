import { ChangeEvent } from 'react';

type RatingStarProps = {
  title: string,
  id: number,
  newReviewUpload: boolean,
  handleChange: ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

function RatingStar({title, id, newReviewUpload, handleChange}: RatingStarProps): JSX.Element {
  const elementID = `${id}-star${id > 1 ? 's' : ''}`;
  return (
    <>
      <input className="form__rating-input visually-hidden"
        name="rating"
        value={id}
        id={elementID}
        type="radio"
        onChange={handleChange}
        disabled={newReviewUpload}
      />
      <label
        htmlFor={elementID}
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
