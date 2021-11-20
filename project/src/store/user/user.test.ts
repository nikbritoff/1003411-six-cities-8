import { AuthorizationStatus } from '../../const';
import { ActionType } from '../../types/action';
import { UserInfo } from '../../types/user-info';
import { makeFakeUserInfo } from '../../utils/mock';
import { user } from './user';

const mockUserInfo = makeFakeUserInfo();

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        loginLoading: false,
        loginError: false,
        authorizationStatus: AuthorizationStatus.Unknown,
        userInfo: {} as UserInfo,
      });
  });

  it('should update userData by load userData', () => {
    const state = {
      loginLoading: false,
      loginError: false,
      authorizationStatus: AuthorizationStatus.NoAuth,
      userInfo: {} as UserInfo,
    };
    const autorizationSuccessAction = {
      type: ActionType.AutorizationSuccess,
      payload: mockUserInfo,
    };

    expect(user(state, autorizationSuccessAction))
      .toEqual({
        loginLoading: false,
        loginError: false,
        authorizationStatus: AuthorizationStatus.NoAuth,
        userInfo: mockUserInfo,
      });
  });

  it('should update loginLoading to "true"', () => {
    const state = {
      loginLoading: false,
      loginError: false,
      authorizationStatus: AuthorizationStatus.NoAuth,
      userInfo: {} as UserInfo,
    };
    const requestAuthorizationAction = {
      type: ActionType.RequestAutorization,
      payload: true,
    };

    expect(user(state, requestAuthorizationAction))
      .toEqual({
        loginLoading: true,
        loginError: false,
        authorizationStatus: AuthorizationStatus.NoAuth,
        userInfo: {} as UserInfo,
      });
  });

  it('should update loginError to "true"', () => {
    const state = {
      loginLoading: false,
      loginError: false,
      authorizationStatus: AuthorizationStatus.NoAuth,
      userInfo: {} as UserInfo,
    };
    const autorizationFailedAction = {
      type: ActionType.AutorizationFailed,
      payload: true,
    };

    expect(user(state, autorizationFailedAction))
      .toEqual({
        loginLoading: false,
        loginError: true,
        authorizationStatus: AuthorizationStatus.NoAuth,
        userInfo: {} as UserInfo,
      });
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {
      loginLoading: false,
      loginError: false,
      authorizationStatus: AuthorizationStatus.NoAuth,
      userInfo: {} as UserInfo,
    };
    const requireAutorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: AuthorizationStatus.Auth,
    };

    expect(user(state, requireAutorizationAction))
      .toEqual({
        loginLoading: false,
        loginError: false,
        authorizationStatus: AuthorizationStatus.Auth,
        userInfo: {} as UserInfo,
      });
  });

  it('should update userData by logout', () => {
    const state = {
      loginLoading: false,
      loginError: false,
      authorizationStatus: AuthorizationStatus.Auth,
      userInfo: mockUserInfo,
    };
    const requireLogoutAction = {
      type: ActionType.RequireLogout,
    };

    expect(user(state, requireLogoutAction))
      .toEqual({
        loginLoading: false,
        loginError: false,
        authorizationStatus: AuthorizationStatus.NoAuth,
        userInfo: {} as UserInfo,
      });
  });
});
