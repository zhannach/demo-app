import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice} from '@reduxjs/toolkit';
import type { AppState } from './store';

export interface UserState {
  id: string;
  token: string;
  fullName: string;
  userName: string;
  password: string;
}

const initialState: UserState = {
  id: '',
  token: '',
  fullName: '',
  userName: '',
  password: '',
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
});

export const { setUser, removeUser } = userSlice.actions;

export const selectUser = (state: AppState) => state.user;

export default userSlice.reducer;
