import { AuthorizationStatus, SortingStatus } from '../const';
import { City } from './city';
import { Offer } from './offer';
import { UserInfo } from './user-info';


export type State = {
  currentCity: City,
  offersList: Offer[],
  offersLoading: boolean,
  // offersSuccess: boolean,
  offersError: boolean,
  loginLoading: boolean,
  // loginSuccsess: boolean,
  loginError: boolean,
  authorizationStatus: AuthorizationStatus,
  userInfo: UserInfo,
  sortingStatus: SortingStatus,
}
