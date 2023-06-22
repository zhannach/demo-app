import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './api'


export interface UserState {
  user: {
    id: string;
    token: string;
    fullName: string;
    userName: string;
    password: string;
  };
  isLoading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  user: {
    id: '',
    token: '',
    fullName: '',
    userName: '',
    password: '',
  },
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.userName = action.payload.userName;
      state.id = action.payload.id;
      state.fullName = action.payload.fullName;
      state.password = action.payload.password;
      state.token = action.payload.token;
    },
    removeUser: (state) => {
      state.userName = '';
      state.id = '';
      state.fullName = '';
      state.password = '';
      state.token = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
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
      if (action.error.message === 'Request failed with status code 409') {
        state.error = 'Username is already used by another user'
      } else {
        state.error = 'Provided refresh token was not found in valid tokens list'
      }
    });
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
