import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';
import { createSelector } from '@reduxjs/toolkit';
import { sortOffers } from '../../utils/common';
import { getCurrentCity, getSortingStatus } from '../app-state/selectors';


export const getOffersList = (state: State): Offer[] => state[NameSpace.Offers].offersList;
export const getOffersLoading = (state: State): boolean => state[NameSpace.Offers].offersLoading;
export const getOffersError = (state: State): boolean => state[NameSpace.Offers].offersError;

export const selectCurrentOffers = createSelector([getOffersList, getSortingStatus, getCurrentCity],
  (offers, sortType, city) => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    return sortOffers(sortType,filteredOffers);
  },
);
