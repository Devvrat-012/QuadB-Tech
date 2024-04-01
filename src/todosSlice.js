import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload);
      if (taskIndex !== -1) {
        state.tasks.splice(taskIndex, 1);
        // Update local storage here
        localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Update local storage with remaining tasks
      }
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    // Optional bonus reducer for marking tasks as completed
    toggleCompleted: (state, action) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
        // Update local storage here
        localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Update local storage with updated tasks
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted, setTasks } = todoSlice.actions;
export default todoSlice.reducer;
