import { AuthorizationStatus, SortingStatus } from '../const';
import { City } from './city';
import { Offer } from './offer';


export type State = {
  currentCity: City,
  offersList: Offer[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  sortingStatus: SortingStatus,
}
