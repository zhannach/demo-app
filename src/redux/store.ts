import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from './userSlice';

export const store = () =>
  configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
    }

  });

type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<typeof store>
export type AppState = ReturnType<AppStore['getState']>;

