import { AuthorizationStatus, SortingStatus } from '../const';
import { City } from './city';
import { Offer } from './offer';


export type State = {
  currentCity: City,
  offersList: Offer[],
  offersLoading: boolean,
  offersError: boolean,
  offersSuccess: boolean,
  authorizationStatus: AuthorizationStatus,
  // isDataLoaded: boolean,
  sortingStatus: SortingStatus,
}
