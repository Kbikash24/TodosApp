import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  tasks: [],
  lastId: 0 // Track the last assigned ID
};

// Create a slice using createSlice
const tasksSlice = createSlice({
  name: 'tasks', // Name of the slice
  initialState, // Initial state
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: state.lastId + 1, // Generate unique ID
        task: action.payload,
        status: "pending",
        index: state.tasks.length 
      };
      state.tasks.push(newTask);
      state.lastId++; // Update last assigned ID
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    toggleStatus: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.status = task.status === "pending" ? "done" : "pending";
      }
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.task = updatedTask;
      }
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    }
  }
});

export const { reducer: tasksReducer, actions: tasksActions } = tasksSlice;

export const { addTask, deleteTask, toggleStatus, editTask, setTasks } = tasksSlice.actions;

export default tasksSlice;
