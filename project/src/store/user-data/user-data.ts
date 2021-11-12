import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { UserData } from '../../types/state';
import { AutorizationError, AutorizationSuccsess, requestAuthorization, requireAutorization, requireLogout } from '../action';

const initialState: UserData = {
  loginLoading: false,
  loginError: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: {
    avatarUrl: '',
    email: '',
    id:  null,
    isPro: false,
    name: '',
  },
};

const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(requestAuthorization, (state, action) => {
      state.loginLoading = action.payload;
      state.loginError = false;
    })
    .addCase(AutorizationSuccsess, (state, action) => {
      state.userInfo = action.payload;
      state.loginLoading = false;
      state.loginError = false;
    })
    .addCase(AutorizationError, (state, action) => {
      state.loginError = action.payload;
      state.loginLoading = false;
    })
    .addCase(requireAutorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.userInfo = {
        avatarUrl: '',
        email: '',
        id:  null,
        isPro: false,
        name: '',
      };
    });
});

export { userData };
