import { useState, FormEvent, ChangeEvent } from 'react';
import RatingStar from '../rating-start/rating-start';
import { RATING_TITLES } from '../../const';

function PropertyNewReview(): JSX.Element {
  const [comment, setComment] = useState<{ [key: string]: string}>({
    rating: '0',
    review: '',
  });


  const handleSubmit = (evt: FormEvent<HTMLFormElement>):void => {
    evt.preventDefault();
  };

  const handleChange = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    const {name, value} = target;
    setComment((prevState : {[p: string]: string}) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>

      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((title: string, index: number) => <RatingStar key={title} id={index + 1} title={title} handleChange={handleChange}/>).reverse()}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={comment.review}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
}

export default PropertyNewReview;
