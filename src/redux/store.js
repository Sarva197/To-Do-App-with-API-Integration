import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/to-do/tasksSlice.js';
import authReducer from './features/to-do/authSlice.js';


//creating redux central store
export const store = configureStore({
    reducer: {
        todos: tasksReducer, // this is for task 
        auth: authReducer,// this is to monk the  authentication 
      },
});
