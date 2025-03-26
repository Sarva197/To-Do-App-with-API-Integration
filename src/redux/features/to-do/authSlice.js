import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  };
  
// initilizing slice for authentication 
const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false },//it should always set to false initially to make authentication work properly 
  reducers: {
    login: (state) => {
        state.isAuthenticated = true; // making isAuthenticated true when user logins 
        localStorage.setItem('isAuthenticated', 'true');
      },
      logout: (state) => {
        state.isAuthenticated = false; //making isAuthenticated false when user logouts
        localStorage.removeItem('isAuthenticated');
      },
  },
});

export const { login, logout } = authSlice.actions; //exporting actions
export default authSlice.reducer; // exporting reducer
