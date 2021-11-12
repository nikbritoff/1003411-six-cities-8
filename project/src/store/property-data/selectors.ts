import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getProperty = (state: State):Offer => state[NameSpace.property].property;
export const getPropertyLoading = (state: State): boolean => state[NameSpace.property].propertyLoading;
export const getPropertyError = (state: State): boolean => state[NameSpace.property].propertyError;
export const getNearby = (state: State):Offer[] => state[NameSpace.property].nearby;
export const getNearbyLoading = (state: State): boolean => state[NameSpace.property].nearbyLoading;
export const getNearbyError = (state: State): boolean => state[NameSpace.property].nearbyError;
export const getReviews = (state: State):Review[] => state[NameSpace.property].reviews;
export const getReviewsLoading = (state: State): boolean => state[NameSpace.property].reviewsLoading;
export const getReviewsError = (state: State): boolean => state[NameSpace.property].reviewsError;
