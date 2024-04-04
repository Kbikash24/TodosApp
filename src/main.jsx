import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'; 
import { configureStore } from '@reduxjs/toolkit';
import App from './App.jsx'
import { tasksReducer } from './tasksReducers.jsx';

const store=configureStore({
  reducer:{
 tasks:tasksReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
    
  </React.StrictMode>,
)
