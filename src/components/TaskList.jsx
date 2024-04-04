
import React from "react";
import Checkbox from "./Checkbox";
import { MdDelete } from "react-icons/md";
import { deleteTask,toggleStatus } from "../tasksReducers";
import { useDispatch } from "react-redux";

const TaskList = ({task}) => {
    const dispatch= useDispatch();
    const handleDelete = () => {
      dispatch(deleteTask(task.id));
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      const updatedTasks = storedTasks.filter(item => item.id !== task.id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };
    
     const handleToggleStatus=()=>{
        dispatch(toggleStatus(task.id))
  }
  return (
    <div className="task">
      <div className="task-sub">
        <Checkbox checked={task.status === "done"} onToggle={handleToggleStatus} />
        {task.task}
      </div>
      <MdDelete onClick={handleDelete} />
    </div>
  );
};

export default TaskList;
