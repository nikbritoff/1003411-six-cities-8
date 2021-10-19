import { ChangeEvent } from 'react';

type RatingStarProps = {
  title: string,
  id: number,
  handleChange: ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

function RatingStar({title, id, handleChange}: RatingStarProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden"
        name="rating"
        value={id}
        id={`${id}-star${id > 1 ? 's' : ''}`}
        type="radio"
        onChange={handleChange}
      />
      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingStar;
