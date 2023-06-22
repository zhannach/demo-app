import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://expa.fly.dev';

type User = {
  id?: string;
  token?: string;
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
