import React from "react";
import Task from "./Task.jsx"; // Import Task component

function TaskList({ tasks }) {
  return (
    <ul className="list-none p-5 md:px-24 lg:px-60 m-5 flex flex-col gap-5">
      {tasks.map((task) => (
        <li className="text-green-500 w-full" key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
