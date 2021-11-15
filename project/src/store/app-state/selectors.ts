import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { City } from '../../types/city';
import { SortingStatus } from '../../const';

export const getCurrentCity = (state: State): City => state[NameSpace.app].currentCity;
export const getSortingStatus = (state: State): SortingStatus => state[NameSpace.app].sortingStatus;
