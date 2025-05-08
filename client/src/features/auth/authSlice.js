import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

const token = localStorage.getItem('access_token');
const user = token ? jwtDecode(token) : null;

const initialState = {
  user,
  isAuthenticated: !!token,
  isAdmin: user?.isAdmin || false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const decoded = jwtDecode(action.payload);
      state.user = decoded;
      state.isAuthenticated = true;
      state.isAdmin = decoded.isAdmin;
      localStorage.setItem('access_token', action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isAdmin = false;
      localStorage.removeItem('access_token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
