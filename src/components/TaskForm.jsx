import React, { useEffect, useState } from "react";
import {  useDispatch,useSelector } from "react-redux";
import { addTask,setTasks } from "../tasksReducers";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch=useDispatch();
  const tasks=useSelector((state)=>state.tasks.tasks)


  useEffect(()=>{
    const storedItem=JSON.parse(localStorage.getItem("tasks"));
    if(storedItem)
    {
      const task=setTasks(storedItem)
      dispatch(task)
    }
   },[])

  useEffect(()=>{
    if(tasks.length===0)
    {
        return
    }
localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
     dispatch(addTask(taskName));

      setTaskName("");
    }
    else {
        // Show an alert or set an error state to indicate that the task name cannot be empty
        alert("Task name cannot be empty!");
      }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your next Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
