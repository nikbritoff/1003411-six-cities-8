import cn from 'classnames';
import { convertRating } from '../../utils/common';

type RatingProps = {
  className: string,
  rating: number,
}

function Rating({className, rating}: RatingProps): JSX.Element {
  return (
    <div className={cn('rating__stars', className)}>
      <span style={{width: `${convertRating(rating)}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

export default Rating;
