import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';
import { SortingStatus } from '../../const';

export const getCurrentCity = (state: State): City => state[NameSpace.main].currentCity;
export const getSortingStatus = (state: State): SortingStatus => state[NameSpace.main].sortingStatus;
export const getOffersList = (state: State): Offer[] => state[NameSpace.main].offersList;
export const getOffersLoading = (state: State): boolean => state[NameSpace.main].offersLoading;
export const getOffersError = (state: State): boolean => state[NameSpace.main].offersError;
