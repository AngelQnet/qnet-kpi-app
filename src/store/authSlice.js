// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Only set serializable values
      const user = action.payload;
      state.user = {
        profile: user.profile,
        access_token: user.access_token,
        id_token: user.id_token,
        expires_at: user.expires_at
      };
    },
    clearUser: (state) => {
      state.user = null;
    }
  }
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
