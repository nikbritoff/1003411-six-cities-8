import { SortingStatus } from '../const';
import { Offer } from '../types/offer';

const MAX_PERCENT = 100;
const RATING_STARS_AMOUNT = 5;

export const convertRating = (rating: number): number => rating * MAX_PERCENT / RATING_STARS_AMOUNT;

// export const compare = ():any =>
//   (a: Offer, b: Offer): any => {
//     if (a.price > b.price) {
//       return 1;
//     }
//     if (a.price < b.price) {
//       return -1;
//     }
//     return 0;
//   };

// export const compare = (key: any):any =>
//   (a: Offer, b: Offer): any => {
//     if (a[key] > b[key]) {
//       return 1;
//     }
//     if (a[key] < b[key]) {
//       return -1;
//     }
//     return 0;
//   };

export const sortOffers = (sortingStatus: SortingStatus, offersList: Offer[]): Offer[] => {
  switch (sortingStatus) {
    case SortingStatus.Popular:
      return offersList;
    case SortingStatus.PriceLowToHigh:
      return offersList.sort((a, b) => a.price - b.price);
    case SortingStatus.PriceHighToLow:
      // const compareFn = compare();
      // const compareFn = compare('price');
      return offersList.sort((a, b) => b.price - a.price);
    case SortingStatus.TopRated:
      return offersList.sort((a, b) => b.rating - a.rating);
    default:
      return offersList;
  }
};
