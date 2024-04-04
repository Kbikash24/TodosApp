
import React from "react";
import Checkbox from "./Checkbox";
import { MdDelete } from "react-icons/md";
import { deleteTask,toggleStatus } from "../tasksReducers";
import { useDispatch } from "react-redux";

const TaskList = ({task}) => {
    const dispatch= useDispatch();
    const handleDelete=()=>{
        dispatch(deleteTask(task.index))
 
        localStorage.setItem("tasks",JSON.stringify(task.index))
    }
     const handleToggleStatus=()=>{
        dispatch(toggleStatus(task.index))
  
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
