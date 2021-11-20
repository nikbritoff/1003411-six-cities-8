import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { UserData } from '../../types/state';
import { UserInfo } from '../../types/user-info';
import { autorizationFailed, autorizationSuccess, requestAuthorization, requireAutorization, requireLogout } from '../action';

const initialState: UserData = {
  loginLoading: false,
  loginError: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: {} as UserInfo,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requestAuthorization, (state, action) => {
      state.loginLoading = action.payload;
      state.loginError = false;
    })
    .addCase(autorizationSuccess, (state, action) => {
      state.userInfo = action.payload;
      state.loginLoading = false;
      state.loginError = false;
    })
    .addCase(autorizationFailed, (state, action) => {
      state.loginError = action.payload;
      state.loginLoading = false;
    })
    .addCase(requireAutorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.userInfo = {} as UserInfo;
    });
});

export {user};
