import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials) => {
    try {
      const {data} = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return alert('Please try another email address');
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials) => {
    try {
      const {data} = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return alert('Please try another email address or password');
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout', 
  async (_, {rejectWithValue}) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    try {
      setAuthHeader(token);
      const {data} = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
