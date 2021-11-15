import { Offer } from '../../types/offer';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getProperty = (state: State):Offer => state[NameSpace.propertyState].property;
export const getPropertyLoading = (state: State): boolean => state[NameSpace.propertyState].propertyLoading;
export const getPropertyError = (state: State): boolean => state[NameSpace.propertyState].propertyError;
