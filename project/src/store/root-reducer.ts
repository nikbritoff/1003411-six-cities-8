import { combineReducers } from 'redux';
import { mainData } from './main-data/main-data';
import { userData } from './user-data/user-data';
import { propertyData } from './property-data/property-data';

export enum NameSpace {
  app = 'APP',
  main = 'MAIN',
  user = 'USER',
  property = 'PROPERTY',
}
export const rootReducer = combineReducers({
  [NameSpace.main]: mainData,
  [NameSpace.user]: userData,
  [NameSpace.property]: propertyData,
});

export type RootState = ReturnType<typeof rootReducer>;
