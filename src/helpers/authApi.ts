import axios from 'axios';
import { BASE_URL } from '../redux/api';

const authApi = axios.create({});

authApi.interceptors.request.use((config) => {
  const tokens = JSON.parse(localStorage.getItem('tokens') as string);
  config.headers['Authorization'] = `Bearer ${tokens.accessToken}`;
  return config;
});

authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const authData = JSON.parse(localStorage.getItem('tokens') as string);
      const payload = {
        refreshToken: authData.refreshToken,
      };

      const apiResponse = await axios.post(`${BASE_URL}/auth/refresh`, payload);
      authData.accessToken = apiResponse.data.accessToken;
      localStorage.setItem('tokens', JSON.stringify(authData));
      error.config.headers['Authorization'] = `Bearer ${apiResponse.data.accessToken}`;
      return axios(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default authApi;
