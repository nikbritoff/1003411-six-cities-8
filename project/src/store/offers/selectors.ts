import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';
import { createSelector } from '@reduxjs/toolkit';
import { sortOffers } from '../../utils/common';
import { getCurrentCity, getSortingStatus } from '../app-state/selectors';


export const getOffersList = (state: State): Offer[] => state[NameSpace.offersState].offersList;
export const getOffersLoading = (state: State): boolean => state[NameSpace.offersState].offersLoading;
export const getOffersError = (state: State): boolean => state[NameSpace.offersState].offersError;

export const selectCurrentOffers = createSelector([getOffersList, getSortingStatus, getCurrentCity],
  (offers, sort, city) => (
    sortOffers(
      sort,
      offers.filter((offer) => offer.city.name === city.name),
    )
  ),
);
