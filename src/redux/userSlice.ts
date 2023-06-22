import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, refreshToken, logout } from './api';

export interface UserState {
  user: {
    id: string;
    tokens: {
      refreshToken: string;
      accessToken: string;
    };
    fullName: string;
    userName: string;
    password: string;
  };
  isLoading: boolean;
  error: string | undefined;
  isUserActive: boolean
}

const initialState: UserState = {
  user: {
    id: '',
    tokens: {
      refreshToken: '',
      accessToken: '',
    },
    fullName: '',
    userName: '',
    password: '',
  },
  isLoading: false,
  error: '',
  isUserActive: !!localStorage.getItem('tokens')
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user.id = action.payload.id;
      state.user.userName = action.payload.username;
      state.user.fullName = action.payload.displayName;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isUserActive = false;
      if (action.error.message === 'Request failed with status code 409') {
        state.error = 'Username is already used by another user';
      } else {
        state.error = 'Bad request';
      }
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user.tokens.accessToken = action.payload.accessToken;
      state.user.tokens.refreshToken = action.payload.refreshToken;
      state.isUserActive = true
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.error = "Sorry, user was not found";
    });
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true
      state.error = undefined;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false
      state.user.tokens.refreshToken = '';
      state.isUserActive = false
    });
  },
});

export default userSlice.reducer;
