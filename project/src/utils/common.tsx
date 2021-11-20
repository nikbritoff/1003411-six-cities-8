import { CITIES, SortingStatus } from '../const';
import { City } from '../types/city';
import { Offer } from '../types/offer';

const MAX_PERCENT = 100;
const RATING_STARS_AMOUNT = 5;

export const convertRating = (rating: number): number => rating * MAX_PERCENT / RATING_STARS_AMOUNT;

export const sortOffers = (sortingStatus: SortingStatus, offersList: Offer[]): Offer[] => {
  switch (sortingStatus) {
    case SortingStatus.Popular:
      return offersList;
    case SortingStatus.PriceLowToHigh:
      return offersList.sort((a, b) => a.price - b.price);
    case SortingStatus.PriceHighToLow:
      return offersList.sort((a, b) => b.price - a.price);
    case SortingStatus.TopRated:
      return offersList.sort((a, b) => b.rating - a.rating);
    default:
      return offersList;
  }
};

export const getRandomCity = (): City => {
  const index = Math.floor(Math.random() * CITIES.length);
  return CITIES[index];
};
