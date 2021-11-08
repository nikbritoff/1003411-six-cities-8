import cn from 'classnames';
import { SortingStatus } from '../../const';

type SortingItemProps = {
  sortingType: SortingStatus,
  sortingStatus: SortingStatus,
  onChangeSorting: (sortingStatus: SortingStatus) => void,
}

function SortingItem({sortingType, sortingStatus, onChangeSorting}: SortingItemProps): JSX.Element  {
  return(
    <li
      className={cn(
        'places__option',
        {'places__option--active' : sortingType === sortingStatus})}
      onClick={() => onChangeSorting(sortingType)}
      tabIndex={0}
    >
      {sortingType}
    </li>
  );
}

export default SortingItem;
