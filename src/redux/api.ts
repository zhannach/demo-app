import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import authApi from '../helpers/authApi';

export const BASE_URL = 'https://expa.fly.dev';

type User = {
  id?: string;
  token?: {
    refreshToken: string;
    accessToken: string;
  };
  fullName?: string;
  userName: string;
  password: string;
};
export const registerUser = createAsyncThunk(
  'content/registerUser',
  async ({ password, userName, fullName }: User) => {
    const res = await axios.post(`${BASE_URL}/auth/register`, {
      password: password,
      username: userName,
      displayName: fullName,
    });
    const data = await res.data;
    return data;
  }
);

export const loginUser = createAsyncThunk(
  'content/loginUser',
  async ({ password, userName }: User) => {
    const res = await axios.post(`${BASE_URL}/auth/login`, {
      password: password,
      username: userName,
    });
    const tokens = await res.data;
    localStorage.setItem('tokens', JSON.stringify(tokens));
    return tokens;
  }
);

export const refreshToken = createAsyncThunk(
  'content/refresh',
  async ({ refreshToken }: { refreshToken: string }) => {
    const res = await axios.post(`${BASE_URL}/auth/refresh`, {
      refreshToken: refreshToken,
    });
    const accessToken = await res.data;
    return accessToken;
  }
);

export const logout = createAsyncThunk('content/logout', async () => {
  await authApi.get(`${BASE_URL}/auth/logout`);
  localStorage.removeItem('tokens');
});
