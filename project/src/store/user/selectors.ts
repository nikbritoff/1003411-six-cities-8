import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { UserInfo } from '../../types/user-info';
import { NameSpace } from '../root-reducer';

export const getLoginLoading = (state: State): boolean => state[NameSpace.User].loginLoading;
export const getLoginError = (state: State): boolean => state[NameSpace.User].loginError;
export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserData = (state: State): UserInfo => state[NameSpace.User].userInfo;
