import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../todosSlice.js"; // Import deleteTask and toggleCompleted actions

function Task({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleCompleted = () => {
    dispatch(toggleCompleted(task.id));
  };


  return (
    <div className="flex items-center gap-5 justify-between p-3 rounded-md border border-gray-300 bg-black hover:bg-gray-900">
      <div
        className={`flex items-center ${
          task.completed ? "line-through text-gray-500" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompleted}
          className="mr-2"
        />
        <p className="text-sm pl-3">{task.task}</p>
      </div>
      <button
        type="button"
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default Task;
