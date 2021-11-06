import cn from 'classnames';
import { ConnectedProps, connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SortingStatus } from '../../const';
import { changeSortingStatus } from '../../store/action';
import { Actions } from '../../types/action';

type SortingItemProps = {
  sortingType: SortingStatus,
  sortingStatus: SortingStatus,
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeSorting(sorting: SortingStatus) {
    dispatch(changeSortingStatus(sorting));
  },
});

const connector = connect( null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & SortingItemProps;

function SortingItem({sortingType, sortingStatus, onChangeSorting}: ConnectedComponentProps): JSX.Element  {
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

export { SortingItem };
export default connector(SortingItem);
