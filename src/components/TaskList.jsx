import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteTask, toggleStatus, editTask } from "../tasksReducers";
import { useDispatch } from "react-redux";

const TaskList = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    const updatedTasks = storedTasks.filter((item) => item.id !== task.id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleToggleStatus = () => {
    dispatch(toggleStatus(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(editTask({ id: task.id, updatedTask: editedTask }));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedTask(e.target.value);
  };

  return (
    <div className="task">
      <div className="task-sub">
        <Checkbox checked={task.status === "done"} onToggle={handleToggleStatus} />
        {isEditing ? (
          <input type="text" value={editedTask} onChange={handleChange} />
        ) : (
          task.task
        )}
      </div>
      <div >
        {isEditing ? (
          <button onClick={handleSaveEdit}>Save</button>
        ) : (
          <>
            <MdDelete onClick={handleDelete} />
            <MdEdit onClick={handleEdit} />
          </>
        )}
      </div>
    </div>
  );
};

export default TaskList;
