import { CITIES, SortingStatus } from '../../const';
import { ActionType } from '../../types/action';
import { appState } from './app-state';


describe('Reducer: appState', () => {
  it('without additional parameters should return initial state',  () => {
    const state = {sortingStatus: SortingStatus.Popular, currentCity: CITIES[0]};

    expect(appState(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should change sorting status with new sorting', () => {
    const state = {sortingStatus: SortingStatus.Popular, currentCity: CITIES[0]};
    const changeSortingStatusAction = {
      type: ActionType.ChangeSortingStatus,
      payload: SortingStatus.PriceHighToLow,
    };

    expect(appState(state, changeSortingStatusAction))
      .toEqual({sortingStatus: SortingStatus.PriceHighToLow, currentCity: CITIES[0]});
  });

  it('should change currentCity with new city', () => {
    const state = {sortingStatus: SortingStatus.Popular, currentCity: CITIES[0]};
    const changeCityAction = {
      type: ActionType.ChangeCity,
      payload: CITIES[3],
    };

    expect(appState(state, changeCityAction))
      .toEqual({sortingStatus: SortingStatus.Popular, currentCity: CITIES[3]});
  });
});
