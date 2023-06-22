import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from './userSlice';

export const store = configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
    }

  });

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

