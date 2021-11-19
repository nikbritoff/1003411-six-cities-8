import { Offer } from '../../types/offer';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getNearby = (state: State):Offer[] => state[NameSpace.Nearby].nearby;
export const getNearbyLoading = (state: State): boolean => state[NameSpace.Nearby].nearbyLoading;
export const getNearbyError = (state: State): boolean => state[NameSpace.Nearby].nearbyError;
