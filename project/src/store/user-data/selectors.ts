import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { UserInfo } from '../../types/user-info';
import { NameSpace } from '../root-reducer';

export const getLoginLoading = (state: State): boolean => state[NameSpace.user].loginLoading;
export const getLoginError = (state: State): boolean => state[NameSpace.user].loginError;
export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getUserData = (state: State): UserInfo => state[NameSpace.user].userInfo;
