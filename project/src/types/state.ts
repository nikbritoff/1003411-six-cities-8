import { AuthorizationStatus, SortingStatus } from '../const';
import { RootState } from '../store/root-reducer';
import { City } from './city';
import { Offer } from './offer';
import { Review } from './review';
import { UserInfo } from './user-info';

export type MainData = {
  offersList: Offer[],
  offersLoading: boolean,
  offersError: boolean,
}

export type UserData = {
  loginLoading: boolean,
  loginError: boolean,
  authorizationStatus: AuthorizationStatus,
  userInfo: UserInfo,
}

export type AppStatus = {
  currentCity: City,
  sortingStatus: SortingStatus,
}

export type PropertyData = {
  property: Offer,
  propertyLoading: boolean,
  propertyError: boolean,
}

export type ReviewsState = {
  reviews: Review[],
  reviewsLoading: boolean,
  reviewsError: boolean,
  uploadNewReview: boolean,
}

export type Nearby = {
  nearby: Offer[],
  nearbyLoading: boolean,
  nearbyError: boolean,
}

export type State = RootState;
