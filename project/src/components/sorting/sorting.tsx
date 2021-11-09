import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { SortingStatus } from '../../const';
import { State } from '../../types/state';
import cn from 'classnames';
import { Dispatch } from 'redux';
import { Actions } from '../../types/action';
import { changeSortingStatus } from '../../store/action';

const sortingOptions: SortingStatus[] = Object.values(SortingStatus).map((value) => value);

const mapStateToProps = ({sortingStatus}: State) => ({
  sortingStatus,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>({
  onChangeSorting(sorting: SortingStatus) {
    dispatch(changeSortingStatus(sorting));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Sorting({sortingStatus, onChangeSorting} : PropsFromRedux): JSX.Element  {
  const [isOpen, setOpen] = useState(false);
  const handleSortingListClick = () => {
    setOpen(!isOpen);
  };

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortingListClick}
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
          {'places__options--opened' : isOpen})}
        onClick={handleSortingListClick}
      >
        {sortingOptions.map((sortingOption: SortingStatus) => (
          <li
            className={cn(
              'places__option',
              {'places__option--active' : sortingOption === sortingStatus})}
            onClick={() => onChangeSorting(sortingOption)}
            tabIndex={0}
            key={sortingOption}
          >
            {sortingOption}
          </li>))}
      </ul>
    </form>
  );
}

export { Sorting };
export default connector(Sorting);
