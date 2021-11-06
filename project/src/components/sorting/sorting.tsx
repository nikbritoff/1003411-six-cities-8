import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { SortingStatus } from '../../const';
import { State } from '../../types/state';
import SortingItem from '../sorting-item/sorting-item';
import cn from 'classnames';

const sortingOptions: SortingStatus[] = Object.values(SortingStatus).map((value) => value);

const mapStateToProps = ({sortingStatus}: State) => ({
  sortingStatus,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Sorting({sortingStatus} : PropsFromRedux): JSX.Element  {
  const [isSortingListOpened, setSortingListOpened] = useState(false);
  const handleSortingListClick = () => {
    setSortingListOpened(!isSortingListOpened);
  };

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => handleSortingListClick()}
      >
        {sortingStatus}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn(
          'places__options',
          'places__options--custom',
          {'places__options--opened' : isSortingListOpened})}
        onClick={() => handleSortingListClick()}
      >
        {sortingOptions.map((sortingOption: SortingStatus) =>
          <SortingItem key={sortingOption} sortingType={sortingOption} sortingStatus={sortingStatus}/>)}
      </ul>
    </form>
  );
}

export { Sorting };
export default connector(Sorting);
