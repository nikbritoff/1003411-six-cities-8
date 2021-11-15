import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { UserInfo } from '../../types/user-info';
import { NameSpace } from '../root-reducer';

export const getLoginLoading = (state: State): boolean => state[NameSpace.userState].loginLoading;
export const getLoginError = (state: State): boolean => state[NameSpace.userState].loginError;
export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.userState].authorizationStatus;
export const getUserData = (state: State): UserInfo => state[NameSpace.userState].userInfo;
