import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  tasks: []
};

// Create a slice using createSlice
const tasksSlice = createSlice({
  name: 'tasks', // Name of the slice
  initialState, // Initial state
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: state.tasks.length + 1, // Generate unique ID
        task: action.payload,
        status: "pending",
        index: state.tasks.length 
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleStatus: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.status = task.status === "pending" ? "done" : "pending";
      }
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    }
  }
});

export const { reducer: tasksReducer, actions: tasksActions } = tasksSlice;

export const { addTask, deleteTask, toggleStatus, setTasks } = tasksSlice.actions;

export default tasksSlice;
