import { City } from './city';
import { Offer } from './offer';

export type State = {
  currentCity: City,
  offersList: Offer[],
}
