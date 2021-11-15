import { Offer } from '../../types/offer';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getNearby = (state: State):Offer[] => state[NameSpace.nearby].nearby;
export const getNearbyLoading = (state: State): boolean => state[NameSpace.nearby].nearbyLoading;
export const getNearbyError = (state: State): boolean => state[NameSpace.nearby].nearbyError;
