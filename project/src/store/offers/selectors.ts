import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';


export const getOffersList = (state: State): Offer[] => state[NameSpace.offersState].offersList;
export const getOffersLoading = (state: State): boolean => state[NameSpace.offersState].offersLoading;
export const getOffersError = (state: State): boolean => state[NameSpace.offersState].offersError;
