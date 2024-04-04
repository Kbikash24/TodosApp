import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "./tasksReducers";

const App = () => {
  const dispatch=useDispatch()
  const tasks= useSelector((state) => state.tasks.tasks);
  


  return (
    <div className="container">
      <div className="title">
        <h1>TO-DO List</h1>
      </div>
      <TaskForm />
      {
        tasks.map((task,index)=>(<TaskList key={index} task={task}  />))
      }
    </div>
  );
};

export default App;
