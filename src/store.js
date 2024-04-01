import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todosSlice'; // Import your reducer

const store = configureStore({
  reducer: {
    todos: todoReducer, // Add your reducer to the store
  },
});

export default store;